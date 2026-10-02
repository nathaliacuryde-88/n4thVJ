/**
 * Dice: glossy pink glass dice that can be grabbed, thrown, knocked about and
 * left to settle.
 */
export const DiceConfig = {
  dice: {
    /** Dice in play. New ones drop in from above. */
    count: 4,
    /** Scales every die. */
    size: 1,
    /** How much of a fall comes back as a bounce. */
    bounce: 0.35,
    /** How hard they tumble when thrown or when they land on a corner. */
    spin: 1,
    /** 1 is a normal fall; lower is floaty, higher is heavy. */
    gravity: 1,
    /** How often a resting die hops on its own when nobody is playing. 0 = never. */
    hops: 1,
  },

  glass: {
    /** How see-through the glass is. 0 is solid candy. */
    clarity: 1,
    /** How mirror-sharp the highlights are. */
    gloss: 1,
    /** The pink glow from inside. */
    glow: 1,
    /** How deep the colour gets where the glass is thick. */
    depth: 1,
  },

  light: {
    /** How fast the studio lighting travels round the dice, moving the highlights. */
    speed: 1,
    /** Overall exposure. */
    brightness: 1.15,
  },

  hands: {
    /** How far an opening hand throws the dice it was holding. */
    throw: 1,
    /** How strongly a closed fist gathers the dice to the hand. 0 = never grabs. */
    grab: 1,
    /** How hard a fast sweep of the hand knocks dice it passes. */
    swipe: 1,
    /** How high a clap throws every die. */
    clap: 1,
    /** How far spreading two hands brings the camera in. */
    dolly: 1,
  },

  sound: {
    /** Each kick makes a die hop. */
    beat: 1,
    /** Bass makes the glass glow from inside. */
    bass: 1,
    /** Melody moves the light, so highlights slide over the glass. */
    mid: 1,
    /** Hats make the glass sparkle. */
    high: 1,
  },
};
