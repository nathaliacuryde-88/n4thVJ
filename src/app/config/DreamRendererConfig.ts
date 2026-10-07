/**
 * Dreamscape: airbrushed, grainy, mystic scenes in the manner of risograph
 * and spray-paint illustration — clouds, rolling hills, a rainbow valley, and
 * sprayed rainbow arcs — drawn live, with a picture of her own repainted in
 * the scene's colours.
 */
export const DreamConfig = {
  scene: {
    /** 0 Clouds, 1 Hills, 2 Valley, 3 Spray. */
    kind: 0,
    /** How fast it all moves. The finger count still sets the tempo. */
    speed: 1,
    /** The tooth of the spray paint: 0 smooth, 1 the references, 2 coarse. */
    grain: 1,
    /** Four-pointed stars twinkling over it. */
    sparkles: 0.5,
  },

  clouds: {
    /** How many clouds. */
    amount: 0.65,
    /** How big they are. */
    size: 1,
    /** The moon that lights them. */
    glow: 0.8,
  },

  hills: {
    /** White mist in the valleys between the rows. */
    mist: 0.85,
    /** The pale path winding up through them: 0 off, 1 on. */
    path: 1,
  },

  valley: {
    /** The rainbow. */
    rainbow: 1,
    /** The river: 0 off, 1 on. */
    river: 1,
  },

  figure: {
    /** How big her picture stands; 0 hides it. */
    size: 1,
    /** Higher or lower in the frame. */
    height: 0,
    /** How much its edge dissolves into spray. */
    dissolve: 0.3,
    /** 1 cuts the subject out of its background; 0 keeps the whole picture, its edges dissolving. */
    cutout: 1,
  },

  hands: {
    /** How far the scene turns to a hand: the moon, the path, the picture follow it. */
    follow: 1,
    /** How hard a clap bursts: sparkles, a wave through the hills, the picture blown apart. */
    clap: 1,
  },

  sound: {
    /** Each kick: the clouds breathe, the hills bounce, a ring runs out through the arcs. */
    beat: 1,
    /** Bass makes the light glow and the rainbow breathe. */
    bass: 1,
    /** Melody speeds the drift. */
    mid: 1,
    /** Hats make the sparkles twinkle. */
    high: 1,
  },
};
