/**
 * ═══════════════════════════════════════════════════════════════════════════
 * FROM LANDMARKS TO HANDS SHE CAN PLAY WITH
 * ═══════════════════════════════════════════════════════════════════════════
 * Takes what the hand model sees in each camera frame and turns it into the
 * hand data every visual reads, with the things a raw reading lacks:
 *
 *   STEADY     positions are filtered so a still hand is still, and a moving
 *              one is followed without lag (see filter.ts)
 *   SETTLED    the finger count and the pinch do not flicker on the frames
 *              where a finger is half way
 *   KEPT       a hand the model loses for a frame or two — it happens every
 *              few seconds — is held where it was rather than dropped, so
 *              the visual does not snap to rest and back
 *   A CLAP     is hands coming together fast. It used to be hands being near
 *              each other, so bringing them together slowly, to squeeze
 *              something, set off the explosion too
 *
 * and a few more things to play: how close the hand is to the camera, which
 * way it is turned, how open it is, and how the two hands sit against each
 * other.
 * ═══════════════════════════════════════════════════════════════════════════
 */

import type { Hand, HandData } from '../App';
import { OneEuro, Settled } from './filter';
import { PINCH_OFF, PINCH_ON, Point, readHand } from './read';

/** A hand the model has lost is kept this long before it is let go, in ms. */
const KEEP_MS = 180;
const TRAIL_LENGTH = 30;

/** Hand size (in frame heights) that reads as far away, and as close. */
const FAR = 0.08;
const NEAR = 0.32;

/** Hands closing at least this fast (frame widths a second), this close: a clap. */
const CLAP_SPEED = 0.9;
const CLAP_WITHIN = 0.3;
/** A softer clap, from hands that were already nearly together. */
const SOFT_CLAP_SPEED = 0.4;
const SOFT_CLAP_WITHIN = 0.13;
/** No second clap within this of the last, in ms. */
const CLAP_REST_MS = 350;
/** How long one clap is reported for, so nothing reading slower misses it. */
const CLAP_SHOWN_MS = 110;

type Side = 'left' | 'right';

/** One hand's memory between frames. */
class Kept {
  private readonly points = Array.from({ length: 21 }, () => ({
    x: new OneEuro(), y: new OneEuro(), z: new OneEuro(1.0, 6),
  }));
  private readonly size = new OneEuro(1.0, 4);
  private readonly angle = new OneEuro(1.2, 3);
  private readonly open = new OneEuro(2.0, 6);
  private readonly fingers = new Settled<number>(5);
  private pinched = false;
  private gesture: Hand['gesture'] = 'none';
  private gestureSince = 0;
  private lastAngle = 0;
  private lastAt = 0;
  /** What was last reported, and when the model last actually saw the hand. */
  hand: Hand | null = null;
  seenAt = 0;

  /** `landmarks` are mirrored already: x runs the way she sees herself. */
  read(landmarks: Point[], now: number, aspect: number): Hand | null {
    const dt = this.lastAt ? Math.min(0.2, Math.max(0.001, (now - this.lastAt) / 1000)) : 0;
    this.lastAt = now;

    const steady = landmarks.map((p, i) => ({
      x: this.points[i].x.next(p.x, dt),
      y: this.points[i].y.next(p.y, dt),
      z: this.points[i].z.next(p.z, dt),
    }));
    // Shape is read from the raw landmarks: a finger's bend is the difference
    // between points, and filtering each point separately would blur it.
    const shape = readHand(landmarks, aspect);
    if (!shape) return this.hand;

    const fingers = this.fingers.next(shape.fingers);
    this.pinched = shape.pinchGap < (this.pinched ? PINCH_OFF : PINCH_ON);

    // The four fingers alone decide open or closed; the thumb wanders.
    const four = Math.max(0, fingers - 1);
    const gesture: Hand['gesture'] = this.pinched
      ? 'pinch'
      : shape.openness > 0.62 ? 'open' : shape.openness < 0.28 ? 'fist' : four >= 3 ? 'open' : four <= 0 ? 'fist' : 'none';
    if (gesture !== this.gesture) {
      this.gesture = gesture;
      this.gestureSince = now;
    }

    // An angle wraps at half a turn; follow it round rather than through zero.
    let angle = shape.angle;
    while (angle - this.lastAngle > Math.PI) angle -= 2 * Math.PI;
    while (angle - this.lastAngle < -Math.PI) angle += 2 * Math.PI;
    this.lastAngle = this.angle.next(angle, dt);
    const wrapped = Math.atan2(Math.sin(this.lastAngle), Math.cos(this.lastAngle));

    const size = this.size.next(shape.size, dt);
    const palm = this.points[9];
    const speed = Math.hypot(palm.x.speed, palm.y.speed);

    this.seenAt = now;
    this.hand = {
      position: { x: steady[9].x, y: steady[9].y },
      gesture,
      pinchDistance: this.pinched ? shape.pinchGap * shape.size : undefined,
      velocity: Math.min(3, speed * 2),
      holdDuration: (now - this.gestureSince) / 1000,
      fingerCount: fingers,
      landmarks: steady,
      pinch: Math.min(1, Math.max(0, (PINCH_OFF + 0.25 - shape.pinchGap) / (PINCH_OFF + 0.25 - PINCH_ON * 0.6))),
      openness: Math.min(1, Math.max(0, this.open.next(shape.openness, dt))),
      depth: Math.min(1, Math.max(0, (size - FAR) / (NEAR - FAR))),
      angle: wrapped,
    };
    return this.hand;
  }

  forget(): void {
    for (const p of this.points) { p.x.reset(); p.y.reset(); p.z.reset(); }
    this.size.reset();
    this.angle.reset();
    this.open.reset();
    this.fingers.reset();
    this.pinched = false;
    this.gesture = 'none';
    this.lastAt = 0;
    this.lastAngle = 0;
    this.hand = null;
  }
}

/** What the hand model returns for one frame, as far as this needs it. */
export interface Seen {
  landmarks?: Point[][];
  handedness?: { categoryName: string }[][];
}

export class HandReader {
  private readonly kept: Record<Side, Kept> = { left: new Kept(), right: new Kept() };
  private trail: { x: number; y: number; hand: Side }[] = [];
  private readonly between = new OneEuro(3, 10);
  private lastAt = 0;
  private clapAt = -1e9;
  private clapStrength = 0;

  /** One camera frame. `now` in ms; `aspect` is the camera's width over height. */
  next(seen: Seen, now: number, aspect: number): HandData {
    const found: Partial<Record<Side, Point[]>> = {};
    const hands = seen.landmarks ?? [];
    hands.forEach((raw, index) => {
      if (!raw || raw.length < 21) return;
      // Mirrored, so that moving a hand to her right moves it right on screen.
      const landmarks = raw.map((p) => ({ x: 1 - p.x, y: p.y, z: p.z }));
      // The model names hands from the camera's side; hers are the other way.
      const label = seen.handedness?.[index]?.[0]?.categoryName?.toLowerCase();
      let side: Side = label === 'left' ? 'right' : 'left';
      if (found[side]) {
        // Two hands given the same name: tell them apart by where they are.
        const other = found[side]!;
        const mineIsLeft = landmarks[9].x < other[9].x;
        found.left = mineIsLeft ? landmarks : other;
        found.right = mineIsLeft ? other : landmarks;
        return;
      }
      found[side] = landmarks;
    });

    const data: HandData = { left: null, right: null };
    for (const side of ['left', 'right'] as const) {
      const kept = this.kept[side];
      if (found[side]) {
        data[side] = kept.read(found[side]!, now, aspect);
        if (data[side]) this.trail.push({ ...data[side]!.position, hand: side });
      } else if (kept.hand && now - kept.seenAt <= KEEP_MS) {
        data[side] = kept.hand;
      } else if (kept.hand) {
        kept.forget();
      }
    }
    if (this.trail.length > TRAIL_LENGTH) this.trail = this.trail.slice(-TRAIL_LENGTH);
    data.gestureTrail = [...this.trail];

    const dt = this.lastAt ? Math.min(0.2, Math.max(0.001, (now - this.lastAt) / 1000)) : 0;
    this.lastAt = now;

    if (data.left && data.right) {
      const dx = data.right.position.x - data.left.position.x;
      const dy = data.right.position.y - data.left.position.y;
      const distance = Math.hypot(dx, dy);
      data.distanceBetweenHands = distance;
      data.twist = Math.atan2(dy, dx * aspect);

      // Both actually seen this frame: a kept hand has no speed to judge.
      if (found.left && found.right) {
        this.between.next(distance, dt);
        const closing = -this.between.speed;
        const hard = distance < CLAP_WITHIN && closing > CLAP_SPEED;
        const soft = distance < SOFT_CLAP_WITHIN && closing > SOFT_CLAP_SPEED;
        if ((hard || soft) && now - this.clapAt > CLAP_REST_MS) {
          this.clapAt = now;
          this.clapStrength = Math.min(1, Math.max(0.45, closing / 2.5));
        }
      }
    } else {
      this.between.reset();
    }

    if (now - this.clapAt <= CLAP_SHOWN_MS) {
      data.clapping = true;
      data.clapIntensity = this.clapStrength;
    }
    return data;
  }
}
