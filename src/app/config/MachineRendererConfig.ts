/**
 * Machine Vision: the room as the machine reads it. The camera's picture in
 * dots, and over it everything the tool has worked out — where the person
 * is, each joint of each hand, what the music is doing.
 */
export const MachineConfig = {
  picture: {
    /** How fine the dots are. */
    detail: 0.6,
    /** How much of the camera's picture shows through. 0: only the reading. */
    camera: 0.8,
    /** How readily the picture comes apart into a cloud. */
    dissolve: 1,
    /** Zoom: bigger, fewer dots or smaller, more — always the whole frame. */
    zoom: 1,
  },

  reading: {
    /** The boxes, the joints and the lines drawn over the picture. */
    marks: 1,
    /** The written readings: what it thinks it sees and hears. */
    words: 1,
    /** How big the hand is drawn, about its palm: 1 life size. */
    hand: 0.7,
  },

  hands: {
    /** A clap blows the picture apart; it settles back. */
    clap: 1,
  },

  sound: {
    /** Each kick: the dots swell. */
    beat: 1,
    /** A build-up loosens the picture; the drop scatters it. */
    arc: 1,
  },
};
