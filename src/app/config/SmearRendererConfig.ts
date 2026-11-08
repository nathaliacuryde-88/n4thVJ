/**
 * Smear: soft shapes of colour — or the camera, or a clip of hers — dragged
 * into long vertical streaks in bands, like a long exposure or a slit scan
 * that went a little wrong. Between geometric and organic: designed, with
 * the imperfections left in.
 */
export const SmearConfig = {
  smear: {
    /** 0 Drip (down from each shape), 1 Stretch (pulled from an edge), 2 Bands (shorter, shifting), 3 Melt (bending with a slow flow). */
    style: 0,
    /** How far the colour is dragged. */
    length: 0.7,
    /** How many bands the frame is cut into. */
    bands: 14,
    /** How much the bands slip sideways against each other: the seams. */
    seams: 0.5,
    /** The tooth of the paper. */
    grain: 0.5,
  },

  source: {
    /** 0 Shapes, 1 Camera, 2 Your clip (drop one on the card). */
    kind: 0,
    /** 0 Paper (light, as the reference), 1 Ink (dark). */
    palette: 0,
    /** How many shapes of colour. */
    count: 9,
    /** How big they are. */
    size: 1,
    /** How fast they drift; the finger count still sets the tempo. */
    drift: 1,
  },

  hands: {
    /** The bands under the hand smear longest. */
    follow: 1,
    /** A clap reshuffles the bands and throws the smear long. */
    clap: 1,
  },

  sound: {
    /** Each kick stretches the smear for a moment. */
    beat: 1,
    /** Bass lengthens the drag. */
    bass: 1,
  },
};
