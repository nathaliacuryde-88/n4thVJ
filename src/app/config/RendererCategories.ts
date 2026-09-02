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

export type RendererCategory = '2D' | '3D';

export interface RendererInfo {
  pattern: VisualPattern;
  name: string;
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
    category: '2D',
    key: '1',
    description: 'Rotating polygons with trails'
  },
  particles: {
    pattern: 'particles',
    name: 'Particles',
    category: '2D',
    key: '2',
    description: 'Dynamic particle system'
  },
  waves: {
    pattern: 'waves',
    name: 'Waves',
    category: '2D',
    key: '3',
    description: 'Flowing wave patterns'
  },
  technical: {
    pattern: 'technical',
    name: 'Technical Hand Tracker',
    category: '2D',
    key: '4', // Corrected from 5
    description: 'Hand tracking visualization'
  },
  lottie: {
    pattern: 'lottie',
    name: 'Lottie Inspired',
    category: '2D',
    key: '5', // Corrected from 6
    description: 'Animated circular patterns'
  },
  'lottie-classic': {
    pattern: 'lottie-classic',
    name: 'Classic Lottie',
    category: '2D',
    key: 'Q',
    description: 'Classic Lottie animation'
  },
  linefield: {
    pattern: 'linefield',
    name: 'Line Field',
    category: '2D',
    key: '6', // Corrected from 7
    description: 'Dynamic line fields'
  },
  chromatic: {
    pattern: 'chromatic',
    name: 'Chromatic Glow',
    category: '2D',
    key: '7', // Corrected from 8
    description: 'RGB chromatic aberration'
  },
  halftone: {
    pattern: 'halftone',
    name: 'Halftone Matrix',
    category: '2D',
    key: '8', // Corrected from 9
    description: 'Halftone dot patterns'
  },
  matrix: {
    pattern: 'matrix',
    name: 'Digital Grid',
    category: '2D',
    key: '9',
    description: 'Matrix-style grid'
  },
  distortedcamera: {
    pattern: 'distortedcamera',
    name: 'Distorted Camera',
    category: '2D',
    key: 'W',
    description: 'Gesture-controlled camera distortion with chromatic effects'
  },
  thicklines: {
    pattern: 'thicklines',
    name: 'Thick Lines',
    category: '2D',
    key: '=',
    description: 'Rotating blocks with thickness response'
  },
  flowfield: {
    pattern: 'flowfield',
    name: 'Flow Field',
    category: '2D',
    key: 'D',
    description: 'Flowing vector field'
  },
  liquidchrome: {
    pattern: 'liquidchrome',
    name: 'Liquid Chrome',
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
    category: '3D',
    key: '1',
    description: 'Network glitch with perspective effects'
  },
  cyberstream: {
    pattern: 'cyberstream',
    name: 'Cyber Stream',
    category: '3D',
    key: '2',
    description: 'Cyberpunk stream with depth perspective'
  },
  morphing: {
    pattern: 'morphing',
    name: 'Morphing Sphere',
    category: '3D',
    key: '=',
    description: 'Three.js morphing icosphere'
  },
  cubewall: {
    pattern: 'cubewall',
    name: 'Cube Wall',
    category: '3D',
    key: '4',
    description: 'Three.js cube grid waves'
  },
  facecloud: {
    pattern: 'facecloud',
    name: 'Op-Art Grid',
    category: '3D',
    key: '5',
    description: 'Op-art grid with perspective'
  },
  face: {
    pattern: 'face',
    name: 'Face Mesh',
    category: '3D',
    key: '-',
    description: 'MediaPipe face tracking with glowing mesh'
  },
  smokehand: {
    pattern: 'smokehand',
    name: 'Smoke Hand',
    category: '3D',
    key: '8',
    description: 'Three.js particle smoke with hand control'
  },
  'network-cube': {
    pattern: 'network-cube',
    name: 'Network Cube',
    category: '3D',
    key: '9',
    description: 'Sparse cubic constellation'
  },
  'elastic-net': {
    pattern: 'elastic-net',
    name: 'Elastic Net',
    category: '3D',
    key: '0',
    description: 'Elastic neural network simulation'
  },
  digitalblocks: {
    pattern: 'digitalblocks',
    name: 'Digital Horizon',
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