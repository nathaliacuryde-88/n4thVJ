/**
 * Breath: the plants breathe out what we breathe in. Three pictures of it —
 * a body of lines that fills and empties, the air passing from leaves into
 * lungs and back, and a leaf that becomes a lung.
 */
export const BreathConfig = {
  breath: {
    /** Pulse only. 0: the hand and the music breathe it. 1: your own breath, blown at the microphone. */
    source: 0,
    /** How slow the breathing is when nothing else sets it. */
    pace: 1,
    /** How far it fills and empties. */
    depth: 1,
  },

  look: {
    /** How heavy the lines are. */
    weight: 1,
    /** Pulse: how many lines. Air: how much air. Leaf: how finely it branches. */
    detail: 1,
  },

  hands: {
    /** An open palm breathes in, a fist breathes out. */
    breathe: 1,
    /** A clap: one deep breath out. */
    clap: 1,
  },

  sound: {
    /** Each kick: a ripple, a pulse along the branches. */
    beat: 1,
  },
};
