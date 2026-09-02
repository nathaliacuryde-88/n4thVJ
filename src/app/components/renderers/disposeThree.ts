import * as THREE from 'three';

/**
 * Release every GPU resource a three.js renderer holds.
 *
 * VJCanvas throws the renderer away and builds a new one on every pattern
 * switch. A WebGLRenderer that is merely dropped keeps its context alive, and
 * browsers cap the number of live contexts (typically 8-16) — so without this,
 * a handful of switches between the 3D patterns silently costs you the oldest
 * context and those patterns start drawing nothing.
 */
export function disposeThree(scene: THREE.Scene, renderer: THREE.WebGLRenderer) {
  scene.traverse((object) => {
    if (
      object instanceof THREE.Mesh ||
      object instanceof THREE.Points ||
      object instanceof THREE.Line
    ) {
      object.geometry.dispose();
      const material = object.material;
      if (Array.isArray(material)) {
        material.forEach((m) => m.dispose());
      } else {
        material.dispose();
      }
    }
  });
  scene.clear();
  renderer.dispose();
  renderer.forceContextLoss();
}
