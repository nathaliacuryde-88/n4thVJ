/**
 * ═══════════════════════════════════════════════════════════════════════════
 * RENDERER ORGANIZATION
 * ═══════════════════════════════════════════════════════════════════════════
 * This file categorizes all visual renderers by their rendering technology.
 * Use this as a reference for organizing and filtering visual patterns.
 * 
 * FUTURE: All renderer files will be moved to /components/renderers/2d/ and
 * /components/renderers/3d/ subdirectories to reflect this organization.
 * ═══════════════════════════════════════════════════════════════════════════
 */

import { VisualPattern } from '../App';

/**
 * '2D'  — HTML5 canvas primitives
 * '3D'  — three.js scenes blitted into the canvas
 * 'TD'  — TouchDesigner-style signal chains: a field built by feedback, then
 *         used to distort something else. See references/.
 */
export type RendererCategory = '2D' | '3D' | 'TD';

export interface RendererInfo {
  pattern: VisualPattern;
  name: string;
  /**
   * The label under the key on the VJ page. A number alone is nothing to
   * recognise mid-set, and the full name does not fit ten across, so every
   * renderer carries a word short enough to read at a glance.
   */
  short: string;
  category: RendererCategory;
  key: string;
  description: string;
}

/**
 * Complete list of all visual renderers organized by technology
 */
export const RENDERER_CATEGORIES: Record<VisualPattern, RendererInfo> = {
  // ═══════════════════════════════════════════════════════════════════════════
  // 2D RENDERERS - HTML5 Canvas 2D Context
  // ═══════════════════════════════════════════════════════════════════════════
  geometric: {
    pattern: 'geometric',
    name: 'Geometric',
    short: 'Geometric',
    category: '2D',
    key: '1',
    description: 'Rotating polygons with trails'
  },
  particles: {
    pattern: 'particles',
    name: 'Particles',
    short: 'Particles',
    category: '2D',
    key: '2',
    description: 'Dynamic particle system'
  },
  waves: {
    pattern: 'waves',
    name: 'Waves',
    short: 'Waves',
    category: '2D',
    key: '3',
    description: 'Flowing wave patterns'
  },
  technical: {
    pattern: 'technical',
    name: 'Technical Hand Tracker',
    short: 'Tracker',
    category: '2D',
    key: '4', // Corrected from 5
    description: 'Hand tracking visualization'
  },
  lottie: {
    pattern: 'lottie',
    name: 'Lottie Inspired',
    short: 'Lottie',
    category: '2D',
    key: '5', // Corrected from 6
    description: 'Animated circular patterns'
  },
  'lottie-classic': {
    pattern: 'lottie-classic',
    name: 'Classic Lottie',
    short: 'Lottie 2',
    category: '2D',
    key: 'Q',
    description: 'Classic Lottie animation'
  },
  linefield: {
    pattern: 'linefield',
    name: 'Line Field',
    short: 'Lines',
    category: '2D',
    key: '6', // Corrected from 7
    description: 'Dynamic line fields'
  },
  chromatic: {
    pattern: 'chromatic',
    name: 'Chromatic Glow',
    short: 'Chroma',
    category: '2D',
    key: '7', // Corrected from 8
    description: 'RGB chromatic aberration'
  },
  halftone: {
    pattern: 'halftone',
    name: 'Halftone Matrix',
    short: 'Halftone',
    category: '2D',
    key: '8', // Corrected from 9
    description: 'Halftone dot patterns'
  },
  matrix: {
    pattern: 'matrix',
    name: 'Digital Grid',
    short: 'Grid',
    category: '2D',
    key: '9',
    description: 'Matrix-style grid'
  },
  distortedcamera: {
    pattern: 'distortedcamera',
    name: 'Distorted Camera',
    short: 'Camera',
    category: '2D',
    key: 'W',
    description: 'Gesture-controlled camera distortion with chromatic effects'
  },
  thicklines: {
    pattern: 'thicklines',
    name: 'Thick Lines',
    short: 'Blocks',
    category: '2D',
    key: '=',
    description: 'Rotating blocks with thickness response'
  },
  flowfield: {
    pattern: 'flowfield',
    name: 'Flow Field',
    short: 'Flow',
    category: '2D',
    key: 'D',
    description: 'Flowing vector field'
  },
  liquidchrome: {
    pattern: 'liquidchrome',
    name: 'Liquid Chrome',
    short: 'Chrome',
    category: '2D', // Moved from 3D
    key: '-',
    description: 'Iridescent liquid metal simulation'
  },
  
  // ═══════════════════════════════════════════════════════════════════════════
  // 3D PATTERNS
  // ═══════════════════════════════════════════════════════════════════════════
  glitch: {
    pattern: 'glitch',
    name: 'Glitch Network',
    short: 'Glitch',
    category: '3D',
    key: '1',
    description: 'Network glitch with perspective effects'
  },
  cyberstream: {
    pattern: 'cyberstream',
    name: 'Cyber Stream',
    short: 'Cyber',
    category: '3D',
    key: '2',
    description: 'Cyberpunk stream with depth perspective'
  },
  morphing: {
    pattern: 'morphing',
    name: 'Morphing Sphere',
    short: 'Sphere',
    category: '3D',
    key: '=',
    description: 'Three.js morphing icosphere'
  },
  cubewall: {
    pattern: 'cubewall',
    name: 'Cube Wall',
    short: 'Cubes',
    category: '3D',
    key: '4',
    description: 'Three.js cube grid waves'
  },
  facecloud: {
    pattern: 'facecloud',
    name: 'Op-Art Grid',
    short: 'Op-Art',
    category: '3D',
    key: '5',
    description: 'Op-art grid with perspective'
  },
  face: {
    pattern: 'face',
    name: 'Face Mesh',
    short: 'Face',
    category: '3D',
    key: '-',
    description: 'MediaPipe face tracking with glowing mesh'
  },
  'smokehand-torus': {
    pattern: 'smokehand-torus',
    name: 'Smoke Torus',
    short: 'Torus',
    category: '3D',
    key: '8',
    description: 'Particle smoke shaped around a torus'
  },
  'smokehand-hand': {
    pattern: 'smokehand-hand',
    name: 'Smoke Hand',
    short: 'Hand',
    category: '3D',
    key: '7',
    description: 'Particle smoke shaped around a hand model'
  },
  'network-cube': {
    pattern: 'network-cube',
    name: 'Network Cube',
    short: 'Network',
    category: '3D',
    key: '9',
    description: 'Sparse cubic constellation'
  },
  'elastic-net': {
    pattern: 'elastic-net',
    name: 'Elastic Net',
    short: 'Elastic',
    category: '3D',
    key: '0',
    description: 'Elastic neural network simulation'
  },
  // ═══════════════════════════════════════════════════════════════════════════
  // TD RENDERERS — signal chains: build a field, then distort something with it
  // ═══════════════════════════════════════════════════════════════════════════
  ripple: {
    pattern: 'ripple',
    name: 'Water Ripple',
    short: 'Ripple',
    category: 'TD',
    key: '1',
    description: 'Camera refracted through a height field your hands leave behind'
  },

  text: {
    pattern: 'text',
    name: 'Kinetic Type',
    short: 'Type',
    category: 'TD',
    key: '2',
    description: 'Your words, extruded and pushed around by your hands'
  },
  video: {
    pattern: 'video',
    name: 'Clip',
    short: 'Clip',
    category: 'TD',
    key: '3',
    description: 'Your own footage, sheared into sliding bands'
  },
  chrome: {
    pattern: 'chrome',
    name: 'Chrome',
    short: 'Chrome',
    category: 'TD',
    key: '5',
    description: 'Liquid metal on black, splitting light into rainbow at its edges'
  },
  mosaic: {
    pattern: 'mosaic',
    name: 'Mosaic',
    short: 'Mosaic',
    category: 'TD',
    key: '4',
    description: 'Your video or photo rebuilt out of letters, dots, blocks or bars'
  },

  digitalblocks: {
    pattern: 'digitalblocks',
    name: 'Digital Horizon',
    short: 'Horizon',
    category: '2D',
    key: '0',
    description: 'Glitchy digital data sorting'
  }
};

/**
 * Get all renderers of a specific category
 */
export function getRenderersByCategory(category: RendererCategory): RendererInfo[] {
  return Object.values(RENDERER_CATEGORIES).filter(r => r.category === category);
}

/**
 * Get category for a specific pattern
 */
export function getPatternCategory(pattern: VisualPattern): RendererCategory {
  return RENDERER_CATEGORIES[pattern]?.category || '2D';
}

/**
 * Check if a pattern uses Three.js
 */
export function isThreeJSPattern(pattern: VisualPattern): boolean {
  return getPatternCategory(pattern) === '3D';
}