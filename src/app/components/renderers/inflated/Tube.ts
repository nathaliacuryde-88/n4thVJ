import * as THREE from 'three';
import { TAU } from './style';

/**
 * A tube that is bent in place rather than rebuilt.
 *
 * The reel builds a new TubeGeometry for every stem on every frame. That is
 * fine for rendering out a clip, but live it hands the garbage collector five
 * full meshes a frame, and the pause when it collects lands in the middle of a
 * set. This keeps one buffer per stem and rewrites it, carrying the cross
 * section along the curve by parallel transport so the stem never twists.
 */
export class Tube {
  readonly mesh: THREE.Mesh;
  readonly curve: THREE.CatmullRomCurve3;
  private readonly position: THREE.BufferAttribute;
  private readonly normal: THREE.BufferAttribute;
  private readonly points: THREE.Vector3[] = [];
  private readonly tangents: THREE.Vector3[] = [];

  constructor(
    material: THREE.Material,
    readonly anchors: THREE.Vector3[],
    private readonly length = 120,
    private readonly sides = 20,
  ) {
    this.curve = new THREE.CatmullRomCurve3(anchors, false, 'centripetal');
    const count = (length + 1) * (sides + 1);
    const geometry = new THREE.BufferGeometry();
    this.position = new THREE.BufferAttribute(new Float32Array(count * 3), 3);
    this.normal = new THREE.BufferAttribute(new Float32Array(count * 3), 3);
    this.position.setUsage(THREE.DynamicDrawUsage);
    this.normal.setUsage(THREE.DynamicDrawUsage);
    const uv = new Float32Array(count * 2);
    const index: number[] = [];
    for (let i = 0; i <= length; i++) {
      for (let j = 0; j <= sides; j++) {
        const k = i * (sides + 1) + j;
        uv[k * 2] = i / length;
        uv[k * 2 + 1] = j / sides;
        if (i < length && j < sides) {
          const a = k;
          const b = k + sides + 1;
          index.push(a, b, a + 1, b, b + 1, a + 1);
        }
      }
    }
    geometry.setAttribute('position', this.position);
    geometry.setAttribute('normal', this.normal);
    geometry.setAttribute('uv', new THREE.BufferAttribute(uv, 2));
    geometry.setIndex(index);
    for (let i = 0; i <= length; i++) {
      this.points.push(new THREE.Vector3());
      this.tangents.push(new THREE.Vector3());
    }
    this.mesh = new THREE.Mesh(geometry, material);
    this.mesh.frustumCulled = false;
  }

  /** Re-bends the tube to the anchors as they stand now. */
  update(radius: number) {
    const { curve, points, tangents, length, sides } = this;
    curve.updateArcLengths();
    for (let i = 0; i <= length; i++) curve.getPointAt(i / length, points[i]);
    for (let i = 0; i <= length; i++) {
      const a = points[Math.max(0, i - 1)];
      const b = points[Math.min(length, i + 1)];
      tangents[i].subVectors(b, a).normalize();
    }

    const n = new THREE.Vector3();
    const bn = new THREE.Vector3();
    const dir = new THREE.Vector3();
    // Any normal to start with; after that, each one is the last carried
    // forward and straightened against the new tangent.
    const t0 = tangents[0];
    n.set(0, 0, 1).addScaledVector(t0, -t0.z);
    if (n.lengthSq() < 1e-6) n.set(1, 0, 0).addScaledVector(t0, -t0.x);
    n.normalize();

    const pos = this.position.array as Float32Array;
    const nor = this.normal.array as Float32Array;
    for (let i = 0; i <= length; i++) {
      const t = tangents[i];
      n.addScaledVector(t, -n.dot(t)).normalize();
      bn.crossVectors(t, n);
      const p = points[i];
      for (let j = 0; j <= sides; j++) {
        const a = (j / sides) * TAU;
        // Round the same way three.js's own tube goes, which is what makes
        // the triangles face outward. The other way round they face in, the
        // shader reads the stem as seen from inside, and it shades dark.
        dir.copy(n).multiplyScalar(-Math.cos(a)).addScaledVector(bn, Math.sin(a));
        const k = (i * (sides + 1) + j) * 3;
        pos[k] = p.x + dir.x * radius;
        pos[k + 1] = p.y + dir.y * radius;
        pos[k + 2] = p.z + dir.z * radius;
        nor[k] = dir.x;
        nor[k + 1] = dir.y;
        nor[k + 2] = dir.z;
      }
    }
    this.position.needsUpdate = true;
    this.normal.needsUpdate = true;
  }
}
