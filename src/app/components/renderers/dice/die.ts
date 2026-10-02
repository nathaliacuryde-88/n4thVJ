import * as THREE from 'three';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader.js';
import { mergeGeometries, mergeVertices } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import diceUrl from '../../../assets/dice.fbx?url';

/**
 * ═══════════════════════════════════════════════════════════════════════════
 * THE DIE
 * ═══════════════════════════════════════════════════════════════════════════
 * Nath's model, loaded once and shared by every Dice renderer.
 *
 * The file is a rounded die two units across, with the body and the pips as
 * two materials. As exported it is 163,000 triangles in 44 separate pieces and
 * with no shared vertices — 44 draw calls and three copies of every vertex,
 * per die, before a second pass for the glass. So on load the pieces are
 * regrouped into exactly two, body then pips, and identical vertices are
 * merged: two draw calls per die, and the vertex work cut by about two thirds,
 * with the shape untouched.
 *
 * The file is bundled with the app rather than fetched from anywhere, so it is
 * there with no internet — a bunker, say.
 * ═══════════════════════════════════════════════════════════════════════════
 */

/** Material slot 0 is the body, slot 1 the pips. */
export const BODY = 0;
export const PIPS = 1;

let pending: Promise<THREE.BufferGeometry> | null = null;

/**
 * The die's geometry, two groups, centred, two units across.
 *
 * Every renderer shares the one geometry. Each renderer has its own WebGL
 * context, and three.js uploads a geometry to whichever renderer draws it, so
 * sharing the CPU side is safe; a renderer disposing it only frees that
 * renderer's copy on the GPU.
 */
export function loadDie(): Promise<THREE.BufferGeometry> {
  if (!pending) {
    pending = new FBXLoader().loadAsync(diceUrl).then(regroup);
    // A failed load should be retried next time rather than cached.
    pending.catch(() => { pending = null; });
  }
  return pending;
}

function regroup(root: THREE.Group): THREE.BufferGeometry {
  let mesh: THREE.Mesh | null = null;
  root.traverse((o) => {
    if (!mesh && (o as THREE.Mesh).isMesh) mesh = o as THREE.Mesh;
  });
  if (!mesh) throw new Error('No mesh in the dice model');
  const source = (mesh as THREE.Mesh).geometry as THREE.BufferGeometry;
  const materials = (mesh as THREE.Mesh).material;
  const names = (Array.isArray(materials) ? materials : [materials]).map((m) => m.name.toLowerCase());
  // The pips are the material called "black"; anything else is body.
  const isPip = (materialIndex: number) => names[materialIndex] === 'black';

  const position = source.getAttribute('position');
  const normal = source.getAttribute('normal');
  const groups = source.groups.length
    ? source.groups
    : [{ start: 0, count: source.index ? source.index.count : position.count, materialIndex: 0 }];

  // Split into body and pips. The file is not indexed, so a group's range is
  // a range of vertices, three to a triangle.
  const parts: [number[], number[]] = [[], []];
  for (const group of groups) {
    const into = parts[isPip(group.materialIndex ?? 0) ? PIPS : BODY];
    for (let i = group.start; i < group.start + group.count; i++) {
      const v = source.index ? source.index.getX(i) : i;
      into.push(v);
    }
  }

  const piece = (vertices: number[]) => {
    const g = new THREE.BufferGeometry();
    const p = new Float32Array(vertices.length * 3);
    const n = new Float32Array(vertices.length * 3);
    vertices.forEach((v, k) => {
      p[k * 3] = position.getX(v); p[k * 3 + 1] = position.getY(v); p[k * 3 + 2] = position.getZ(v);
      n[k * 3] = normal.getX(v); n[k * 3 + 1] = normal.getY(v); n[k * 3 + 2] = normal.getZ(v);
    });
    g.setAttribute('position', new THREE.BufferAttribute(p, 3));
    g.setAttribute('normal', new THREE.BufferAttribute(n, 3));
    return mergeVertices(g);
  };

  const merged = mergeGeometries([piece(parts[BODY]), piece(parts[PIPS])], true);
  if (!merged) throw new Error('Could not regroup the dice model');
  merged.computeBoundingSphere();
  return merged;
}
