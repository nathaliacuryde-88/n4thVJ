/**
 * Atlas: a text-mode terrain that generates itself — the visual counterpart of
 * the Atlas effect, after the original tool.
 */
export const AtlasConfig = {
  terrain: {
    /** How many hills across the frame. Higher is busier, smaller land. */
    scale: 6,
    /** How much the land folds back on itself, 0 to 1. */
    warp: 0.47,
    /** Levels the land is stepped into, each its own ink. */
    terraces: 8,
    /** Pushes the land towards its highest and lowest levels, 0 to 1. */
    contrast: 0.3,
    /** How fast the land drifts, on top of the hands' tempo. */
    flow: 1,
  },

  type: {
    /** Which character set — see config/charsets.ts. Code is the original's look. */
    set: 1,
    /** Character cells across the frame. */
    columns: 110,
    /** Share of cells that carry a character, before the music adds more. */
    density: 0.62,
    /** How wide a stretch of the set each level draws from, 0 to 1. */
    variety: 0.5,
  },

  hands: {
    /** How strongly a hand raises the land under it. */
    push: 1,
    /** How far spreading two hands zooms in. */
    zoom: 1,
    /** A clap reshuffles the land into a new variation. */
    clap: 1,
  },

  sound: {
    /** Bass rolls the inks across the levels. */
    bass: 1,
    /** Each kick sends a ring of reshuffling out from the middle. */
    beat: 1,
    /** Louder music puts more characters on the land. */
    level: 1,
  },
};
