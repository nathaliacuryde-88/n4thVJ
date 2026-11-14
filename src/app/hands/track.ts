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
 *   A CLAP     is caught three ways — hands together, hands closing fast,
 *              and hands that were closing and then vanished into each
 *              other — so it lands however the camera sees it
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

/**
 * A CLAP, three ways, because no one of them catches every clap:
 *
 *   together   the hands are within a hand's width of each other. This is
 *              how it always worked, and it holds for as long as they stay
 *              together.
 *   closing    the hands are coming together fast, and near enough that they
 *              are about to meet — which fires it a frame or two early, on
 *              the beat of the clap rather than after it.
 *   meeting    the hands were closing and then one or both vanished. Two
 *              hands pressed together are one shape to the camera, and fast
 *              hands are a blur, so the model very often loses them at
 *              exactly the moment of a clap; that loss is itself the sign.
 */
const TOGETHER = 0.17;
const CLOSING_SPEED = 0.85;
const CLOSING_WITHIN = 0.4;
/** Hands this near and closing at least this fast when they were lost: they met. */
const MEETING_WITHIN = 0.5;
const MEETING_SPEED = 0.3;
const MEETING_MS = 240;
/** No second clap within this of the last, in ms. */
const CLAP_REST_MS = 280;
/** How long one clap is reported for, so nothing reading slower misses it. */
const CLAP_SHOWN_MS = 140;

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
  private lastAt = 0;
  private clapAt = -1e9;
  private clapStrength = 0;
  /** The gap between the hands when both were last really seen, and when that was. */
  private gap = 1;
  private gapAt = -1e9;
  /** How fast they were closing, frame to frame: the fastest of the last few. */
  private closing = 0;
  /** Whether this coming-together has already been counted as a clap. */
  private counted = false;

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
    const clap = (strength: number) => {
      if (this.counted || now - this.clapAt < CLAP_REST_MS) return;
      this.counted = true;
      this.clapAt = now;
      this.clapStrength = Math.min(1, Math.max(0.7, strength));
    };

    if (data.left && data.right) {
      const dx = data.right.position.x - data.left.position.x;
      const dy = data.right.position.y - data.left.position.y;
      data.distanceBetweenHands = Math.hypot(dx, dy);
      data.twist = Math.atan2(dy, dx * aspect);
    }

    if (found.left && found.right) {
      // Measured on the hands as the camera saw them, not as steadied: a
      // clap is over in a few frames and steadying would arrive after it.
      const l = found.left[9];
      const r = found.right[9];
      const distance = Math.hypot(r.x - l.x, r.y - l.y);
      const since = (now - this.gapAt) / 1000;
      const speed = since > 0 && since < 0.15 ? (this.gap - distance) / since : 0;
      this.closing = Math.max(speed, this.closing * Math.exp(-dt * 12));
      this.gap = distance;
      this.gapAt = now;
      // Apart again: the next coming-together is a new clap.
      if (distance > TOGETHER * 1.5 && this.closing < MEETING_SPEED) this.counted = false;

      if (distance < CLOSING_WITHIN && this.closing > CLOSING_SPEED) clap(this.closing / 2.2);
      if (distance < TOGETHER) {
        clap(0.7 + this.closing / 3);
        // Held together, it holds — as it always did.
        data.clapping = true;
        data.clapIntensity = Math.max(0.6, 1 - distance / TOGETHER);
      }
    } else {
      // One or both gone. If they were closing on each other a moment ago,
      // they have met.
      if (now - this.gapAt < MEETING_MS && this.gap < MEETING_WITHIN && this.closing > MEETING_SPEED) {
        clap(0.75 + this.closing / 3);
      }
      this.closing *= Math.exp(-dt * 6);
      if (now - this.gapAt > 600) this.counted = false;
    }

    if (now - this.clapAt <= CLAP_SHOWN_MS) {
      data.clapping = true;
      data.clapIntensity = Math.max(data.clapIntensity ?? 0, this.clapStrength);
    }
    return data;
  }
}
