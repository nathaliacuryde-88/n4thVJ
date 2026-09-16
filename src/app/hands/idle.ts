/**
 * The synthetic hands that keep hand-driven visuals alive when nothing is
 * tracked. Used by the VJ page's idle drive and by the library's previews,
 * which have no camera at all.
 */

import { Hand, HandData } from '../App';

/**
 * A synthetic 21-point hand in MediaPipe's layout: wrist, then four joints each
 * for thumb, index, middle, ring and pinky. Renderers that read landmarks
 * rather than just a position (Chromatic Glow, Technical Hand) need the real
 * shape, not a point.
 */
export function idleLandmarks(x: number, y: number, t: number, phase: number) {
  const scale = 0.16;
  const wrist = { x, y: y + scale * 0.55 };
  const points = [{ ...wrist, z: 0 }];

  const fingers = [
    { angle: -1.05, length: 0.62 }, // thumb, off to the side
    { angle: -0.34, length: 0.95 }, // index
    { angle: -0.10, length: 1.0 },  // middle
    { angle: 0.14, length: 0.92 },  // ring
    { angle: 0.38, length: 0.76 },  // pinky
  ];

  fingers.forEach((finger, i) => {
    const curl = 0.25 + Math.sin(t * 0.6 + phase + i) * 0.2;
    for (let joint = 1; joint <= 4; joint++) {
      const reach = joint / 4;
      const angle = finger.angle + curl * reach * 0.5;
      const radius = scale * finger.length * reach;
      points.push({
        x: wrist.x + Math.sin(angle) * radius,
        y: wrist.y - Math.cos(angle) * radius,
        z: 0,
      });
    }
  });

  return points;
}

/**
 * Two slow hands tracing offset Lissajous figures. Deliberately unhurried: this
 * is a bed for the visual to sit on when nobody is playing it, not a performance.
 */
export function idleHands(t: number): HandData {
  const hand = (phase: number, xBias: number): Hand => {
    const position = {
      x: xBias + Math.sin(t * 0.23 + phase) * 0.18,
      y: 0.5 + Math.sin(t * 0.31 + phase * 1.7) * 0.22,
    };
    return {
      position,
      gesture: 'open',
      fingerCount: 3 + Math.round(1.5 + Math.sin(t * 0.11 + phase) * 1.5),
      velocity: 0.25 + Math.sin(t * 0.37 + phase) * 0.15,
      holdDuration: 1,
      landmarks: idleLandmarks(position.x, position.y, t, phase),
    };
  };
  return {
    left: hand(0, 0.32),
    right: hand(Math.PI, 0.68),
    distanceBetweenHands: 0.36,
  };
}
