/**
 * Arrival: the way from the stars down to the planet. Three of them, one
 * engine: falling through sheets of cloud, a fog the hand wipes away, and the
 * planet itself growing from a point to a horizon.
 */
export const ArrivalConfig = {
  look: {
    /** Clouds only: 0 Vapour, soft and lit like real cloud; 1 Print, flat tones with clean edges. */
    style: 0,
    /** How many tones the light is cut into: few is graphic, many is smooth. */
    bands: 5,
    /** Grain, as on the Aurora: 0 smooth, 1 broken into grain and dots. */
    grain: 0.35,
    /** Clouds: how much of the sky is cloud. Fog: how thick. Planet: how cloudy. */
    cover: 0.5,
  },

  motion: {
    /** Clouds: how fast you fall. Fog: how fast it drifts and closes again. Planet: how fast you approach. */
    speed: 1,
  },

  hands: {
    /** Clouds: steering and the hole the hand opens. Fog: how wide the hand wipes. Planet: how far the hand turns it. */
    reach: 1,
    /** Clouds: a clap tears the clouds open. Fog: it clears. Planet: the sun comes up over the edge. */
    clap: 1,
  },

  sound: {
    /** Each kick: a push down, a breath of the fog, the planet's edge flaring. */
    beat: 1,
    /** Bass thickens and brightens. */
    bass: 1,
  },
};
