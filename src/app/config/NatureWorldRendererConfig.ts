/**
 * Nature World: the nature family in one scene — Bloom Field's flowers in
 * front, dandelions further back, butterflies flying between and landing on
 * the flowers, jellyfish drifting up in the sky — under one palette and one
 * set of hands and sound, with a sky behind.
 */
export const NatureWorldConfig = {
  colour: {
    /** Palette cycles per twelve-second loop. Negative runs it backwards. */
    speed: 1,
    /** Where on the palette the whole world sits. */
    offset: 0,
    /** Which palette, for everything at once. */
    palette: 0,
    /** How far the shadows travel forward through the palette. */
    depth: 0.32,
  },

  world: {
    /** Behind it all: 0 the grey studio, 1 watercolour sky, 2 aurora, 3 black. */
    sky: 1,
    /** Flowers, 0 to 7. */
    flowers: 5,
    /** Butterflies, 0 to 8. */
    butterflies: 4,
    /** Dandelions, 0 to 8. */
    dandelions: 3,
    /** Jellyfish, 0 to 8. */
    jellyfish: 3,
    /** How many dandelion seeds fly. */
    seeds: 0.2,
    /** How often the butterflies land on the flowers, 0 never to 1 often. */
    visits: 0.6,
  },

  sizes: {
    /** How big each kind is, 1 as placed. */
    flowers: 1,
    butterflies: 1,
    dandelions: 1,
    jellyfish: 1,
  },

  hands: {
    /** How far moving a hand carries the whole world with it. */
    camera: 0.6,
    /** How far the butterflies, jellyfish and loose seeds follow a hand. */
    follow: 1,
    /** How hard a clap bursts everything: petals, wings, bells, seeds. */
    clap: 1,
  },

  sound: {
    /** Each kick: heads fatten, wings flick, bells squeeze, stems hop. */
    beat: 1,
    /** Bass deepens every sway, bob and drift. */
    bass: 1,
    /** Melody speeds the colour. */
    mid: 1,
    /** Hats brighten the highlights and ripple the fine things. */
    high: 1,
    /** Loudness is the wind through the dandelions. */
    wind: 1,
  },
};
