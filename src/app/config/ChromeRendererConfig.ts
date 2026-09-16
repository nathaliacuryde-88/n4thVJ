/**
 * Chrome: a raymarched blob of liquid metal, dispersing light at its edges.
 */
export const ChromeConfig = {
  form: {
    /** Metaballs in the smooth union. More is a busier, more branched form. */
    lobes: 7,
    /** How far they orbit the centre. Wider pulls tendrils out. */
    spread: 1.3,
    /** Radius of each lobe. */
    size: 0.72,
    /** How softly they merge. Higher makes broader necks and fewer holes. */
    blend: 0.82,
    /** Noise ripple on the surface, which is what stops it reading as spheres. */
    ripple: 0.2,
    /** Scale of that ripple. */
    rippleScale: 1.5,
  },

  motion: {
    /** How fast the lobes drift around each other. */
    drift: 0.14,
    /** How fast the surface ripple crawls. */
    churn: 0.2,
    /** Slow turn of the whole form. */
    spin: 0.08,
  },

  material: {
    /** Strength of the rainbow at glancing angles. */
    dispersion: 0.85,
    /** How tightly the spectrum is packed into the rim. Higher is a thinner band. */
    rimTightness: 2.0,
    /** How far the R, G and B rays are pulled apart. The width of the rainbow. */
    split: 0.1,
    /** Base reflectance of the metal before any colour. */
    silver: 0.92,
    /** Bare reflection at face-on angles. Low keeps the middles dark. */
    facing: 0.05,
    /** Tightness of the specular highlight. Higher is a sharper mirror. */
    polish: 52,
  },

  light: {
    /** The key light, from upper left. */
    keyX: -0.55,
    keyY: 0.72,
    /** Strength of the key. */
    key: 2.1,
    /** Dim fill from below right. */
    fill: 0.3,
    /** Lifts the whole frame off black. */
    ambient: 0.03,
  },

  hands: {
    /** How far the hands push the form around. */
    push: 0.55,
    /** How much a spread pulls the lobes apart. */
    spread: 0.45,
    /** How much a beat or clap throws the surface. */
    kick: 0.55,
  },

  look: {
    /** Grain over the top, which is what sells it as a render. */
    grain: 0.055,
    /** Overall exposure. */
    gain: 1,
  },
};
