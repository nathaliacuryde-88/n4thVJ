/**
 * Flight: low over a real-looking landscape that never ends. Mountains with
 * mist in the valleys and lakes that mirror the sky; or open sea with a long
 * swell. The hand flies it; the music moves the light.
 */
export const TerrainConfig = {
  land: {
    /** How tall the mountains stand, or how high the swell runs. */
    height: 1,
    /** 0 soft, rolling ground; 1 sharp alpine ridges. */
    rugged: 0.4,
    /** How much of the ground is under water. */
    water: 0.4,
  },

  light: {
    /** 0 night under a moon, 0.5 the blue hour, 1 the last of the sun. */
    hour: 0.6,
    /** How thick the air is: mist in the valleys, haze to the horizon. */
    mist: 1,
  },

  flight: {
    /** How fast the ground goes by; the finger count still sets the tempo. */
    speed: 1,
    /** How high above the ground. */
    altitude: 1,
  },

  hands: {
    /** The hand banks and climbs; near the camera, it pushes on faster. */
    steer: 1,
    /** A clap sends a wave of light out across the land. */
    clap: 1,
  },

  sound: {
    /** Each kick: a ring of light travels out over the ground. */
    beat: 1,
    /** Bass: the swell rises, the light on the peaks breathes. */
    bass: 1,
  },
};
