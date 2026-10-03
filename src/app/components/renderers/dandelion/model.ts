import * as THREE from 'three';
import dandelionUrl from '../../../assets/dandelion.bin?url';

/**
 * ═══════════════════════════════════════════════════════════════════════════
 * THE DANDELION
 * ═══════════════════════════════════════════════════════════════════════════
 * Nath's dandelion — "Dandelion" by Everton Bohnenberger
 * (https://sketchfab.com/BOHNEN), CC-BY-4.0 — loaded once and shared by every
 * Dandelion renderer.
 *
 * The file as it came is 27 MB and 2.6 million triangles, almost all of them
 * the seed head, with every seed welded into eight big anonymous meshes. A
 * seed that flies off on its own needs to be its own piece, so the file was
 * taken apart once, ahead of time (scripts/dandelion/build_dandelion.py), into
 * what it is made of:
 *
 *   stem, base, bracts   the meshes as modelled, untouched
 *   achenes              the 180 seed bodies, each vertex tagged with its seed
 *   seeds                for each of the 180 seeds, its beak and its 25 hairs,
 *                        each traced down the middle of its tube into a line
 *
 * The hairs are tubes a few hundredths of a unit across: at any size they are
 * drawn at, they are lines. Tracing them keeps every hair where the model put
 * it, at a hundredth of the weight, and lets them be drawn as painted strokes
 * rather than as shaded plastic tubes.
 *
 * Units: the head's radius is 1, its centre is the origin, and the stem runs
 * down to y = -10.1.
 * ═══════════════════════════════════════════════════════════════════════════
 */

export interface DandelionModel {
  /** The stem, base and bracts, merged, with `aRigid` 0 along the stem and 1 on the head. */
  body: THREE.BufferGeometry;
  /** The seed bodies, with `aSeed` and `aPivot`. */
  achenes: THREE.BufferGeometry;
  /** Every beak and hair as a ribbon of quads, for screen-space strokes. */
  strokes: THREE.BufferGeometry;
  /** How many seeds there are. */
  seeds: number;
  /** For each seed: where it is attached to the head, and the way it points. */
  pivot: Float32Array;
  axis: Float32Array;
  /** Where the bottom of the stem is. */
  foot: number;
}

interface Header {
  parts: Record<string, { count: number; index: number; pos: number; nrm: number; idx: number; seed?: number }>;
  seeds: { count: number; segments: number; pivot: number; axis: number; a: number; b: number; seed: number; ta: number; tb: number };
}

let pending: Promise<DandelionModel> | null = null;

export function loadDandelion(): Promise<DandelionModel> {
  if (!pending) {
    pending = fetch(dandelionUrl)
      .then((r) => {
        if (!r.ok) throw new Error(`dandelion.bin: ${r.status}`);
        return r.arrayBuffer();
      })
      .then(parse);
    pending.catch(() => { pending = null; });
  }
  return pending;
}

function parse(buffer: ArrayBuffer): DandelionModel {
  const view = new DataView(buffer);
  const magic = String.fromCharCode(view.getUint8(0), view.getUint8(1), view.getUint8(2), view.getUint8(3));
  if (magic !== 'DNDL') throw new Error('Not a dandelion file');
  const headerLength = view.getUint32(4, true);
  const header = JSON.parse(new TextDecoder().decode(new Uint8Array(buffer, 8, headerLength))) as Header;
  const base = 8 + headerLength;
  const f32 = (at: number, n: number) => new Float32Array(buffer.slice(base + at, base + at + n * 4));
  const i8 = (at: number, n: number) => new Int8Array(buffer.slice(base + at, base + at + n));
  const u8 = (at: number, n: number) => new Uint8Array(buffer.slice(base + at, base + at + n));
  const u32 = (at: number, n: number) => new Uint32Array(buffer.slice(base + at, base + at + n * 4));

  const part = (name: string) => {
    const p = header.parts[name];
    const position = f32(p.pos, p.count * 3);
    const n8 = i8(p.nrm, p.count * 3);
    const normal = new Float32Array(p.count * 3);
    for (let i = 0; i < normal.length; i++) normal[i] = n8[i] / 127;
    return { p, position, normal, index: u32(p.idx, p.index) };
  };

  // ── the body: stem, base and bracts in one draw ───────────────────────────
  const pieces = ['stem', 'base', 'bracts'].map(part);
  let vertexCount = 0;
  let indexCount = 0;
  for (const piece of pieces) {
    vertexCount += piece.p.count;
    indexCount += piece.index.length;
  }
  const position = new Float32Array(vertexCount * 3);
  const normal = new Float32Array(vertexCount * 3);
  const rigid = new Float32Array(vertexCount);
  const index = new Uint32Array(indexCount);
  let foot = 0;
  {
    let v = 0;
    let i = 0;
    pieces.forEach((piece, k) => {
      position.set(piece.position, v * 3);
      normal.set(piece.normal, v * 3);
      // The stem bends; the base and bracts ride the top of it as one piece.
      rigid.fill(k === 0 ? 0 : 1, v, v + piece.p.count);
      for (let j = 0; j < piece.index.length; j++) index[i + j] = piece.index[j] + v;
      if (k === 0) for (let j = 1; j < piece.position.length; j += 3) foot = Math.min(foot, piece.position[j]);
      v += piece.p.count;
      i += piece.index.length;
    });
  }
  const body = new THREE.BufferGeometry();
  body.setAttribute('position', new THREE.BufferAttribute(position, 3));
  body.setAttribute('normal', new THREE.BufferAttribute(normal, 3));
  body.setAttribute('aRigid', new THREE.BufferAttribute(rigid, 1));
  body.setIndex(new THREE.BufferAttribute(index, 1));

  // ── the seeds ────────────────────────────────────────────────────────────
  const s = header.seeds;
  const pivot = f32(s.pivot, s.count * 3);
  const axis = f32(s.axis, s.count * 3);

  const ach = part('achenes');
  const achSeed = u8(header.parts.achenes.seed!, ach.p.count);
  const seedAttr = new Float32Array(ach.p.count);
  const pivotAttr = new Float32Array(ach.p.count * 3);
  for (let i = 0; i < ach.p.count; i++) {
    const k = achSeed[i];
    seedAttr[i] = k;
    pivotAttr[i * 3] = pivot[k * 3];
    pivotAttr[i * 3 + 1] = pivot[k * 3 + 1];
    pivotAttr[i * 3 + 2] = pivot[k * 3 + 2];
  }
  const achenes = new THREE.BufferGeometry();
  achenes.setAttribute('position', new THREE.BufferAttribute(ach.position, 3));
  achenes.setAttribute('normal', new THREE.BufferAttribute(ach.normal, 3));
  achenes.setAttribute('aSeed', new THREE.BufferAttribute(seedAttr, 1));
  achenes.setAttribute('aPivot', new THREE.BufferAttribute(pivotAttr, 3));
  achenes.setIndex(new THREE.BufferAttribute(ach.index, 1));

  // ── strokes: each segment a quad, widened on screen in the shader ────────
  const n = s.segments;
  const a = f32(s.a, n * 3);
  const b = f32(s.b, n * 3);
  const segSeed = u8(s.seed, n);
  const ta = f32(s.ta, n);
  const tb = f32(s.tb, n);
  const A = new Float32Array(n * 4 * 3);
  const B = new Float32Array(n * 4 * 3);
  const P = new Float32Array(n * 4 * 3);
  const corner = new Float32Array(n * 4 * 2);
  const seed = new Float32Array(n * 4);
  const along = new Float32Array(n * 4);
  const strokeIndex = new Uint32Array(n * 6);
  for (let i = 0; i < n; i++) {
    const k = segSeed[i];
    for (let c = 0; c < 4; c++) {
      const v = i * 4 + c;
      A.set(a.subarray(i * 3, i * 3 + 3), v * 3);
      B.set(b.subarray(i * 3, i * 3 + 3), v * 3);
      P.set(pivot.subarray(k * 3, k * 3 + 3), v * 3);
      const end = c >> 1;      // 0 at a, 1 at b
      const side = c & 1 ? 1 : -1;
      corner[v * 2] = end;
      corner[v * 2 + 1] = side;
      seed[v] = k;
      // -1..0 along the beak, 0..1 out along a hair.
      along[v] = end ? tb[i] : ta[i];
    }
    const v = i * 4;
    strokeIndex.set([v, v + 1, v + 2, v + 2, v + 1, v + 3], i * 6);
  }
  const strokes = new THREE.BufferGeometry();
  // `position` is only there for three's bounds; the shader reads aA and aB.
  strokes.setAttribute('position', new THREE.BufferAttribute(A, 3));
  strokes.setAttribute('aB', new THREE.BufferAttribute(B, 3));
  strokes.setAttribute('aPivot', new THREE.BufferAttribute(P, 3));
  strokes.setAttribute('aCorner', new THREE.BufferAttribute(corner, 2));
  strokes.setAttribute('aSeed', new THREE.BufferAttribute(seed, 1));
  strokes.setAttribute('aT', new THREE.BufferAttribute(along, 1));
  strokes.setIndex(new THREE.BufferAttribute(strokeIndex, 1));

  // Seeds fly well beyond the head, so nothing here is ever culled.
  for (const g of [body, achenes, strokes]) {
    g.boundingSphere = new THREE.Sphere(new THREE.Vector3(0, -5, 0), 1e4);
  }
  return { body, achenes, strokes, seeds: s.count, pivot, axis, foot };
}
