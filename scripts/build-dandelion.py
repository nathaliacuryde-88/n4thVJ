"""
Builds src/app/assets/dandelion.bin from the original dandelion GLB.

    pip install numpy scipy
    python3 scripts/build-dandelion.py path/to/dandelion.glb

The model ("Dandelion" by Everton Bohnenberger, CC-BY-4.0) is 2.6 million
triangles with its 180 seeds welded into eight anonymous meshes. This takes it
apart into what the Dandelion visual needs: the stem, base and bracts as they
are; the seed bodies tagged with their seed; and for every seed its beak and
25 hairs, each hair traced down the middle of its tube into a short line.

The output is a small binary: 'DNDL', a uint32 header length, a JSON header
naming byte offsets, then the arrays. Units: head radius 1, head at the origin.
"""
import json, struct, sys
import numpy as np
from scipy.sparse import coo_matrix
from scipy.sparse.csgraph import connected_components
from scipy.optimize import linear_sum_assignment

SRC = sys.argv[1] if len(sys.argv) > 1 else 'dandelion.glb'
OUT = sys.argv[2] if len(sys.argv) > 2 else 'src/app/assets/dandelion.bin'
d = open(SRC,'rb').read()
L=struct.unpack('<I',d[12:16])[0]
j=json.loads(d[20:20+L])
off=20+L; BL=struct.unpack('<I',d[off:off+4])[0]; bin_=d[off+8:off+8+BL]
CT={5126:np.float32,5125:np.uint32,5123:np.uint16,5121:np.uint8}
NC={'SCALAR':1,'VEC2':2,'VEC3':3,'VEC4':4}
def acc(i):
  a=j['accessors'][i]; bv=j['bufferViews'][a['bufferView']]
  dt=CT[a['componentType']]; n=NC[a['type']]
  start=bv.get('byteOffset',0)+a.get('byteOffset',0)
  stride=bv.get('byteStride')
  if stride and stride!=n*np.dtype(dt).itemsize:
    raw=np.frombuffer(bin_,np.uint8,count=stride*a['count'],offset=start).reshape(a['count'],stride)
    return raw[:,:n*np.dtype(dt).itemsize].copy().view(dt).reshape(a['count'],n)
  return np.frombuffer(bin_,dt,count=a['count']*n,offset=start).reshape(a['count'],n) if n>1 else np.frombuffer(bin_,dt,count=a['count'],offset=start)
def mesh(mi):
  p=j['meshes'][mi]['primitives'][0]
  return acc(p['attributes']['POSITION']).astype(np.float64), acc(p['attributes']['NORMAL']).astype(np.float64), acc(p['indices']).astype(np.int64).reshape(-1,3), p.get('material')
def M(n):
  return np.array(n['matrix']).reshape(4,4).T if 'matrix' in n else np.eye(4)
# world matrices
W={}
def walk(i,parent):
  m=parent@M(j['nodes'][i]); W[i]=m
  for c in j['nodes'][i].get('children',[]): walk(c,m)
walk(0,np.eye(4))
def world_mesh(node):
  P,N,I,mat=mesh(j['nodes'][node]['mesh']); m=W[node]
  P=(np.c_[P,np.ones(len(P))]@m.T)[:,:3]
  nm=np.linalg.inv(m[:3,:3]).T; N=N@nm.T; N/=np.linalg.norm(N,axis=1,keepdims=True)+1e-12
  return P,N,I,mat

def weld_comps(P, I):
  key = np.round(P, 4); _, inv = np.unique(key, axis=0, return_inverse=True); inv = inv.ravel()
  e = np.r_[I[:, [0, 1]], I[:, [1, 2]]]; e = inv[e]; n = inv.max() + 1
  g = coo_matrix((np.ones(len(e)), (e[:, 0], e[:, 1])), shape=(n, n))
  nc, lab = connected_components(g, directed=False)
  return nc, lab[inv]

# head centre from the achenes
AP, AN, AI, _ = world_mesh(18)
anc, alab = weld_comps(AP, AI)
C = np.array([AP[alab == k].mean(0) for k in range(anc)]).mean(0)
S = 1 / 17.0   # pappus radius ~17 -> 1

# teeth merged
Ps, Is, off = [], [], 0
for node in range(10, 18):
  P, N, I, _ = world_mesh(node); Ps.append(P); Is.append(I + off); off += len(P)
TP = np.concatenate(Ps); TI = np.concatenate(Is)
tnc, tlab = weld_comps(TP, TI)
print('teeth comps after merge', tnc, np.bincount(tlab).min(), np.median(np.bincount(tlab)))

# achenes: axis + attach point
ach = []
for k in range(anc):
  q = AP[alab == k]; c = q.mean(0); d = c - C; d /= np.linalg.norm(d)
  r = (q - C) @ d
  ach.append(dict(dir=d, base=C + d * r.min(), tip=C + d * r.max()))
adirs = np.array([a['dir'] for a in ach])

# components: beaks start near the head, hairs out at the tips
beaks, hairs = [], []
for k in range(tnc):
  q = TP[tlab == k]
  r = np.linalg.norm(q - C, axis=1)
  (beaks if r.min() < 6 else hairs).append(q)
print('beaks', len(beaks), 'hairs', len(hairs))

def centreline(q, root, bins):
  d = np.linalg.norm(q - root, axis=1)
  lo, hi = d.min(), d.max()
  if hi - lo < 1e-6: return np.array([q.mean(0)])
  edges = np.linspace(lo, hi, bins + 1)
  pts = []
  for b in range(bins):
    m = (d >= edges[b]) & (d <= edges[b + 1])
    if m.any(): pts.append(q[m].mean(0))
  return np.array(pts)

bdirs = np.array([(lambda c: c / np.linalg.norm(c))(q[np.argmax(np.linalg.norm(q - C, axis=1))] - C) for q in beaks])
# match each beak's far end to the achene whose axis it continues; one each
ri, ci = linear_sum_assignment(-(adirs @ bdirs.T))
seed_beak = [None] * anc
for a, b in zip(ri, ci): seed_beak[a] = beaks[b]
print('worst beak/achene angle (deg)', np.degrees(np.arccos(np.clip((adirs[ri] * bdirs[ci]).sum(1), -1, 1))).max())
lines = [[] for _ in range(anc)]
for k in range(anc):
  lines[k].append(centreline(seed_beak[k], ach[k]['base'], 10))
# the true tip: the beak's farthest vertex
true_tips = np.array([seed_beak[k][np.argmax(np.linalg.norm(seed_beak[k] - C, axis=1))] for k in range(anc)])
roots, keep = [], []
for q in hairs:
  if len(q) < 30: continue
  # the two ends of the hair; its root is the one at a beak tip
  m = q.mean(0); u = np.linalg.svd(q - m, full_matrices=False)[2][0]
  pr = (q - m) @ u
  ends = [q[pr < pr.min() + 0.15 * (pr.max() - pr.min())].mean(0), q[pr > pr.max() - 0.15 * (pr.max() - pr.min())].mean(0)]
  d0 = np.linalg.norm(true_tips - ends[0], axis=1).min(); d1 = np.linalg.norm(true_tips - ends[1], axis=1).min()
  roots.append(ends[0] if d0 < d1 else ends[1]); keep.append(q)
roots = np.array(roots)
per = int(np.ceil(len(keep) / anc))
cost = np.linalg.norm(roots[:, None, :] - true_tips[None, :, :], axis=2)
cost = np.repeat(cost, per, axis=1)
ri, ci = linear_sum_assignment(cost)
assign = ci // per
print('hair root to tip distance: median', np.median(cost[ri, ci]), 'max', cost[ri, ci].max())
for h, k in zip(ri, assign):
  q = keep[h]
  line = centreline(q, true_tips[k], 5)
  line = np.vstack([true_tips[k], line])
  lines[k].append(line)
print('hairs per seed', np.unique([len(l) - 1 for l in lines], return_counts=True))

# ── output ─────────────────────────────────────────────────────────────────
def T(P): return (P - C) * S
parts = {}
def mesh_part(name, node):
  P, N, I, _ = world_mesh(node)
  parts[name] = (T(P), N, I)
mesh_part('stem', 4); mesh_part('base', 6); mesh_part('bracts', 8)
# achenes keep their seed index
parts['achenes'] = (T(AP), AN, AI)
print({k: (len(v[0]), len(v[2])) for k, v in parts.items()})
print('stem y range', T(world_mesh(4)[0])[:, 1].min(), 'head', T(TP).min(0), T(TP).max(0))

out = bytearray(); header = {'parts': {}, 'seeds': {}}
def align():
  while len(out) % 4: out.append(0)
def put(arr, dtype):
  align(); o = len(out); b = np.ascontiguousarray(arr.astype(dtype)).tobytes(); out.extend(b); return o
for name, (P, N, I) in parts.items():
  ent = {'count': len(P), 'index': len(I) * 3}
  ent['pos'] = put(P, np.float32)
  ent['nrm'] = put(np.clip(np.round(N * 127), -127, 127), np.int8)
  ent['idx'] = put(I.ravel(), np.uint32)
  if name == 'achenes': ent['seed'] = put(alab, np.uint8)
  header['parts'][name] = ent
# seeds: pivots, axes, then polylines as segments (a,b) with seed index and t along
segA, segB, segSeed, segTa, segTb = [], [], [], [], []
for k in range(anc):
  for li, line in enumerate(lines[k]):
    line = T(line)
    total = np.r_[0, np.cumsum(np.linalg.norm(np.diff(line, axis=0), axis=1))]
    L = total[-1] if total[-1] > 0 else 1
    for i in range(len(line) - 1):
      segA.append(line[i]); segB.append(line[i + 1]); segSeed.append(k)
      # t runs -1..0 along the beak and 0..1 out along a hair
      f = (lambda x: x / L - 1) if li == 0 else (lambda x: x / L)
      segTa.append(f(total[i])); segTb.append(f(total[i + 1]))
segA = np.array(segA); segB = np.array(segB)
header['seeds'] = {
  'count': anc, 'segments': len(segA),
  'pivot': put(np.array([T(a['base']) for a in ach]), np.float32),
  'axis': put(adirs, np.float32),
  'a': put(segA, np.float32), 'b': put(segB, np.float32),
  'seed': put(np.array(segSeed), np.uint8),
  'ta': put(np.array(segTa), np.float32),
  'tb': put(np.array(segTb), np.float32),
}
header['credit'] = 'Dandelion by Everton Bohnenberger (https://sketchfab.com/BOHNEN), CC-BY-4.0, https://sketchfab.com/3d-models/dandelion-46afdf378dc947d59f70e3ff5ede3e4d'
hj = json.dumps(header).encode(); hj += b' ' * ((4 - len(hj) % 4) % 4)
blob = b'DNDL' + struct.pack('<I', len(hj)) + hj + bytes(out)
open(OUT, 'wb').write(blob)
print('segments', len(segA), 'bytes', len(blob))
