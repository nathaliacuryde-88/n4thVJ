import * as THREE from 'three';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
import { AudioData, HandData } from '../../App';
import { DiceConfig } from '../../config/DiceRendererConfig';
import { ParamValues, withOverrides } from '../../params/types';
import { disposeThree } from './disposeThree';
import { Playing, drawUnavailable, hexToHsl, turnFrom } from './inflated/style';
import { loadDie } from './dice/die';

/**
 * ═══════════════════════════════════════════════════════════════════════════
 * DICE
 * ═══════════════════════════════════════════════════════════════════════════
 * Glossy pink glass dice on black, to be thrown around.
 *
 * THE GLASS. Real glass on a black background refracts black, so a plain
 * glass material came out flat pink plastic. Each die is therefore two shells
 * on the same geometry: its inside — the back walls, deep glowing magenta,
 * with the far side's pips as dark plum dimples — and a clear glass shell in
 * front that refracts it. That is what makes it read as jelly: you see into
 * it, and through it to the pips on the other side.
 *
 * THE MOTION. A small physics simulation: the dice fall, bounce, tumble off
 * their corners, knock into each other, and when they slow down they roll
 * onto a face and stay put — so the set has stillness to come back to.
 *
 * The hands, by the same rule as every visual:
 *   - the finger count sets the tempo through the shared clock — one finger
 *     is slow motion, five is fast;
 *   - a closed fist grabs: every die flies to the hand and hangs there,
 *     turning; open the hand and they are thrown the way it was moving;
 *   - a fast sweep of an open hand knocks the dice it passes;
 *   - a clap throws them all in the air;
 *   - spreading two hands brings the camera in.
 * And the music: each kick makes a die hop — a big kick, two — bass makes the
 * glass glow from inside, melody moves the light so highlights slide over the
 * glass, and the hats make it sparkle. With nobody playing and no music, a
 * resting die now and then hops on its own.
 * ═══════════════════════════════════════════════════════════════════════════
 */

type Cfg = typeof DiceConfig;

/** The model is two units across; this makes a die 1.6 at size 1 — chunky, as in the reference. */
const MODEL_SCALE = 0.8;
/** How far the floor runs, side to side and front to back: the width of the shot. */
const ARENA_X = 3.9;
const ARENA_Z: [number, number] = [-2.2, 1.6];
/** Most dice there can be. */
const MAX_DICE = 8;

/** The default glass, matched to the reference stills. */
const GLASS = {
  inBody: '#c04a9c', inBodyGlow: '#f060b8',
  inPips: '#4a0a34', inPipsGlow: '#6a0c48',
  body: '#fff0fa', attenuation: '#f070c8', sheen: '#ffd6f2',
  pips: '#6e0e48', pipsGlow: '#3a0424',
};

interface Die {
  inner: THREE.Mesh;
  outer: THREE.Mesh;
  glow: THREE.Mesh;
  p: THREE.Vector3;
  v: THREE.Vector3;
  q: THREE.Quaternion;
  /** Angular velocity, world space, radians a second. */
  w: THREE.Vector3;
  /** 0 out of play, 1 in. Eased, so dice shrink away rather than vanish. */
  presence: number;
  inPlay: boolean;
  grounded: boolean;
  /** Real seconds before a sweep can knock this one again. */
  cooldown: number;
}

export class DiceRenderer {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private cfg: Cfg = DiceConfig;

  private surface: HTMLCanvasElement;
  private renderer: THREE.WebGLRenderer | null = null;
  private scene = new THREE.Scene();
  private camera = new THREE.PerspectiveCamera(32, 16 / 9, 0.1, 100);
  private failed = false;
  private ready = false;
  private destroyed = false;
  private disposables: { dispose(): void }[] = [];

  private materials: {
    inBody: THREE.MeshPhysicalMaterial;
    inPips: THREE.MeshPhysicalMaterial;
    body: THREE.MeshPhysicalMaterial;
    pips: THREE.MeshPhysicalMaterial;
    glow: THREE.MeshBasicMaterial;
  } | null = null;
  private dice: Die[] = [];
  private playing = new Playing(0.6);

  /** Where the hand is in the scene, and how fast it is moving there. */
  private handAt = new THREE.Vector3(0, 2, 0.5);
  private handVel = new THREE.Vector3();
  private handSeen = false;
  private holding = false;
  private wasClapping = false;
  private lastBeat = false;
  private nextHopper = 0;
  /** Clock seconds until a resting die next hops on its own. */
  private idleHop = 2.5;
  private tintKey = '';

  constructor(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.surface = document.createElement('canvas');
    try {
      this.init();
    } catch (error) {
      console.error('Dice could not start:', error);
      this.failed = true;
    }
  }

  setParams(values: ParamValues) {
    this.cfg = withOverrides(DiceConfig, values);
  }

  /** Whether the model has arrived. Until then the layer is black. */
  isReady() {
    return this.ready || this.failed;
  }

  private init() {
    /*
     * Opaque, on black. Glass passes on the alpha of whatever is behind it, so
     * on a transparent canvas every die came out partly transparent, and the
     * browser — which treats a WebGL canvas as premultiplied — brightened it
     * into milky white. The dice always sit on black, so the canvas is black.
     */
    const renderer = new THREE.WebGLRenderer({
      canvas: this.surface,
      antialias: true,
      alpha: false,
      powerPreference: 'high-performance',
    });
    renderer.setPixelRatio(1);
    renderer.setClearColor(0x000000, 1);
    this.scene.background = new THREE.Color(0x000000);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer = renderer;

    // A soft studio to reflect: this is where the long glossy streaks come from.
    const pmrem = new THREE.PMREMGenerator(renderer);
    const room = new RoomEnvironment();
    const env = pmrem.fromScene(room, 0.04).texture;
    this.scene.environment = env;
    room.dispose?.();
    pmrem.dispose();
    this.disposables.push(env);

    const key = new THREE.DirectionalLight(0xffffff, 2.2);
    key.position.set(-3, 5, 4);
    const rim = new THREE.DirectionalLight(0xff7ac0, 2.5);
    rim.position.set(3, 2, -5);
    this.scene.add(key, rim);

    this.materials = {
      inBody: new THREE.MeshPhysicalMaterial({
        side: THREE.BackSide, color: GLASS.inBody, roughness: 0.3,
        emissive: GLASS.inBodyGlow, emissiveIntensity: 0.35, envMapIntensity: 0.5,
      }),
      inPips: new THREE.MeshPhysicalMaterial({
        side: THREE.BackSide, color: GLASS.inPips, roughness: 0.35,
        emissive: GLASS.inPipsGlow, emissiveIntensity: 0.25,
      }),
      body: new THREE.MeshPhysicalMaterial({
        color: GLASS.body, transmission: 1, thickness: 1.6, ior: 1.45,
        attenuationColor: GLASS.attenuation, attenuationDistance: 2.4,
        roughness: 0.07, clearcoat: 1, clearcoatRoughness: 0.03, envMapIntensity: 2.2,
        sheen: 0.5, sheenColor: GLASS.sheen, sheenRoughness: 0.4,
        iridescence: 0.2, iridescenceIOR: 1.3,
      }),
      pips: new THREE.MeshPhysicalMaterial({
        color: GLASS.pips, transmission: 0.12, thickness: 0.3, ior: 1.45, roughness: 0.12,
        clearcoat: 1, clearcoatRoughness: 0.05, emissive: GLASS.pipsGlow, emissiveIntensity: 0.3,
        envMapIntensity: 1.2,
      }),
      glow: new THREE.MeshBasicMaterial({
        map: contactTexture(), color: '#ff5fb4', transparent: true, opacity: 0.35,
        blending: THREE.AdditiveBlending, depthWrite: false,
      }),
    };
    for (const m of Object.values(this.materials)) this.disposables.push(m);
    if (this.materials.glow.map) this.disposables.push(this.materials.glow.map);

    loadDie().then((geometry) => {
      if (this.destroyed || !this.materials) return;
      this.build(geometry);
      this.ready = true;
    }).catch((error) => {
      console.error('The dice model did not load:', error);
      this.failed = true;
    });
  }

  private build(geometry: THREE.BufferGeometry) {
    const m = this.materials!;
    const glowGeo = new THREE.PlaneGeometry(1, 1);
    glowGeo.rotateX(-Math.PI / 2);
    this.disposables.push(glowGeo);
    for (let i = 0; i < MAX_DICE; i++) {
      // Inside first: it has to be drawn before the glass so the glass can refract it.
      const inner = new THREE.Mesh(geometry, [m.inBody, m.inPips]);
      inner.renderOrder = 0;
      const outer = new THREE.Mesh(geometry, [m.body, m.pips]);
      outer.renderOrder = 1;
      // Its own copy of the glow material, so each one fades with its own height.
      const glowMat = m.glow.clone();
      this.disposables.push(glowMat);
      const glow = new THREE.Mesh(glowGeo, glowMat);
      glow.renderOrder = 2;
      this.scene.add(inner, outer, glow);
      this.dice.push({
        inner, outer, glow,
        p: new THREE.Vector3(), v: new THREE.Vector3(),
        q: randomTurn(), w: new THREE.Vector3(),
        presence: 0, inPlay: false, grounded: false, cooldown: 0,
      });
    }
  }

  destroy() {
    this.destroyed = true;
    // The die's geometry is shared by every Dice renderer, so it is left for
    // the next one; only this renderer's own GPU copy goes with the context.
    for (const d of this.disposables) d.dispose();
    this.disposables = [];
    if (this.renderer) {
      this.scene.traverse((o) => {
        if ((o as THREE.Mesh).isMesh) (o as THREE.Mesh).geometry = new THREE.BufferGeometry();
      });
      disposeThree(this.scene, this.renderer);
    }
    this.renderer = null;
  }

  /** The glass turned to the layer's colour panel: pink by default, any hue, or clear. */
  private tint(colors: string[]) {
    const key = colors[0] ?? '';
    if (key === this.tintKey || !this.materials) return;
    this.tintKey = key;
    const turn = turnFrom(colors);
    const turned = (hex: string) => {
      const [h, s, l] = hexToHsl(hex);
      // In sRGB, like the hex it came from. Left to its default, three.js reads
      // these as linear, and every colour came out pale — the glass milky.
      return new THREE.Color().setHSL(
        (((h + turn.hue) % 360) + 360) % 360 / 360, Math.min(1, s * turn.sat), l, THREE.SRGBColorSpace);
    };
    const m = this.materials;
    m.inBody.color.copy(turned(GLASS.inBody));
    m.inBody.emissive.copy(turned(GLASS.inBodyGlow));
    m.inPips.color.copy(turned(GLASS.inPips));
    m.inPips.emissive.copy(turned(GLASS.inPipsGlow));
    m.body.color.copy(turned(GLASS.body));
    m.body.attenuationColor.copy(turned(GLASS.attenuation));
    m.body.sheenColor.copy(turned(GLASS.sheen));
    m.pips.color.copy(turned(GLASS.pips));
    m.pips.emissive.copy(turned(GLASS.pipsGlow));
    for (const d of this.dice) (d.glow.material as THREE.MeshBasicMaterial).color.copy(turned('#ff5fb4'));
  }

  render(handData: HandData, colors: string[], audioData?: AudioData) {
    const { ctx, cfg } = this;
    const width = this.canvas.width;
    const height = this.canvas.height;
    if (width === 0 || height === 0) return;

    const renderer = this.renderer;
    if (this.failed || !renderer || !this.materials) {
      drawUnavailable(ctx, width, height, 'DICE');
      return;
    }

    const play = this.playing;
    play.read(handData, audioData);
    const { dt, step } = play;

    ctx.globalCompositeOperation = 'source-over';
    ctx.globalAlpha = 1;
    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, width, height);
    if (!this.ready) return; // the model is still on its way

    this.tint(colors);
    this.look(dt);
    this.readHands(handData, dt);
    this.readMusic(audioData, step);

    // Physics in clock time, so the finger count is slow motion or fast.
    // Small steps, so a fast die cannot pass through the floor between two.
    const steps = Math.min(8, Math.max(1, Math.ceil(Math.abs(step) / (1 / 120))));
    for (let i = 0; i < steps; i++) this.simulate(step / steps, dt / steps);

    this.place();
    this.frame(width, height);

    if (this.surface.width !== width || this.surface.height !== height) {
      renderer.setSize(width, height, false);
    }
    renderer.toneMappingExposure = cfg.light.brightness;
    renderer.render(this.scene, this.camera);
    ctx.drawImage(this.surface, 0, 0, width, height);
  }

  /** The glass and the light, for this frame. */
  private look(dt: number) {
    const { cfg, playing: play } = this;
    const m = this.materials!;
    const clarity = Math.max(0, Math.min(1, cfg.glass.clarity));
    m.body.transmission = clarity;
    m.body.roughness = 0.25 - 0.22 * Math.max(0, Math.min(1, cfg.glass.gloss));
    m.body.attenuationDistance = 2.4 / Math.max(0.2, cfg.glass.depth);
    // Bass glows the inside.
    const glow = cfg.glass.glow * (1 + play.bass * cfg.sound.bass * 1.6);
    m.inBody.emissiveIntensity = 0.35 * glow;
    m.inPips.emissiveIntensity = 0.25 * glow;
    // Hats sparkle on the surface.
    m.body.envMapIntensity = 2.2 * (1 + play.high * cfg.sound.high * 1.2);
    m.body.clearcoat = Math.min(1, 0.8 + play.high * cfg.sound.high);
    // Melody moves the studio round the dice, so the highlights slide.
    this.scene.environmentRotation.y += dt * cfg.light.speed * (0.08 + play.mid * cfg.sound.mid * 0.7);
  }

  /** Where the hand is in the scene, what it is doing, and what that does to the dice. */
  private readHands(handData: HandData, dt: number) {
    const { cfg } = this;
    const hands = [handData.left, handData.right].filter(Boolean);
    const present = hands.length > 0;

    /*
     * The hand itself, not the eased one.
     *
     * Every other visual reads the hands through a deliberately slow ease —
     * right for a camera drifting after them, wrong for hitting something.
     * Swept across the dice through that ease, the hand arrived late and at a
     * fraction of its real speed, and barely nudged them. This follows the
     * tracked hand closely, so a sweep lands where and as hard as it was made.
     */
    if (present) {
      const x = hands.reduce((sum, h) => sum + h!.position.x, 0) / hands.length;
      const y = hands.reduce((sum, h) => sum + h!.position.y, 0) / hands.length;
      const target = new THREE.Vector3((x - 0.5) * 2 * 3.6, 0.9 + (1 - y) * 2 * 1.2, 0.5);
      if (!this.handSeen) this.handAt.copy(target);
      const before = this.handAt.clone();
      this.handAt.lerp(target, 1 - Math.exp(-dt * 25));
      if (dt > 0) {
        const moved = this.handAt.clone().sub(before).divideScalar(dt);
        this.handVel.lerp(moved, 1 - Math.exp(-dt * 15));
      }
    } else {
      this.handVel.set(0, 0, 0);
    }
    this.handSeen = present;

    /*
     * A fist grabs; three fingers or more throws what it held.
     *
     * Read from the fingers as tracked, not eased: through the ease, opening
     * the hand took a tenth of a second to count, by which time the hand had
     * stopped moving and the dice simply dropped. The gap between a fist and
     * three fingers is on purpose — tracking flickers between neighbouring
     * counts, and a held set should not fall because one finger flickered.
     */
    const fingers = present
      ? Math.max(...hands.map((h) => (h!.gesture === 'fist' ? 0 : h!.fingerCount ?? 3)))
      : 0;
    if (present && fingers === 0 && cfg.hands.grab > 0) this.holding = true;
    if (this.holding && (!present || fingers >= 3)) {
      this.holding = false;
      if (present) this.throwAll();
    }

    // A clap throws everything in the air.
    const clapping = !!handData.clapping;
    if (clapping && !this.wasClapping) {
      const strength = (handData.clapIntensity ?? 1) * cfg.hands.clap;
      for (const d of this.dice) {
        if (!d.inPlay) continue;
        d.v.x += (Math.random() - 0.5) * 7 * strength;
        d.v.y = Math.max(d.v.y, 0) + (10 + Math.random() * 4) * strength;
        d.v.z += (Math.random() - 0.5) * 3 * strength;
        d.w.add(randomSpin(16 * strength * cfg.dice.spin));
      }
    }
    this.wasClapping = clapping;

    // A fast sweep knocks the dice it passes, the way it is going.
    const speed = this.handVel.length();
    if (present && !this.holding && speed > 2.5 && cfg.hands.swipe > 0) {
      for (const d of this.dice) {
        d.cooldown = Math.max(0, d.cooldown - dt);
        if (!d.inPlay || d.cooldown > 0) continue;
        const near = Math.hypot(d.p.x - this.handAt.x, d.p.y - this.handAt.y);
        const reach = 2.6 * this.cfg.dice.size;
        if (near > reach) continue;
        // Nearer is harder, but anything in reach is properly knocked: a
        // gentle falloff left the far ones barely nudged.
        const fall = 0.4 + 0.6 * (1 - near / reach);
        d.v.addScaledVector(this.handVel, 0.9 * fall * cfg.hands.swipe);
        d.v.y += 4.5 * fall * cfg.hands.swipe;
        d.w.add(randomSpin(10 * fall * cfg.dice.spin));
        d.cooldown = 0.35;
      }
    }
  }

  private throwAll() {
    const { cfg } = this;
    for (const d of this.dice) {
      if (!d.inPlay) continue;
      // Capped, so even a wild fling keeps them in shot rather than slamming the edges.
      d.v.copy(this.handVel).clampLength(0, 12).multiplyScalar(1.1 * cfg.hands.throw);
      d.v.x += (Math.random() - 0.5) * 2;
      d.v.y += 4 + Math.random() * 2;
      d.v.z += (Math.random() - 0.5) * 1.5;
      d.w.copy(randomSpin(9 * cfg.dice.spin));
    }
  }

  /** Kicks hop the dice; with nothing playing, now and then one hops by itself. */
  private readMusic(audioData: AudioData | undefined, step: number) {
    const { cfg } = this;
    const beat = !!audioData?.beat;
    if (beat && !this.lastBeat && cfg.sound.beat > 0) {
      const strength = audioData?.beatIntensity || 1;
      this.hop((2.4 + 3.2 * strength) * cfg.sound.beat);
      if (strength > 0.8) this.hop((2.4 + 3.2 * strength) * cfg.sound.beat * 0.8);
    }
    this.lastBeat = beat;

    // Idle hops only when nobody is playing — the hands and the music are
    // what move the dice when they are there.
    const quiet = !this.handSeen && (audioData?.overall ?? 0) < 0.05;
    if (quiet && cfg.dice.hops > 0) {
      this.idleHop -= step * cfg.dice.hops;
      if (this.idleHop <= 0) {
        this.hop(3.2 + Math.random() * 1.8);
        this.idleHop = 2 + Math.random() * 3;
      }
    }
  }

  /** One die hops, taking turns, so the kicks travel along the row. */
  private hop(height: number) {
    const resting = this.dice.filter((d) => d.inPlay && d.grounded);
    if (!resting.length) return;
    const d = resting[this.nextHopper++ % resting.length];
    d.v.y = Math.max(d.v.y, height);
    d.v.x += (Math.random() - 0.5) * 1.2;
    d.v.z += (Math.random() - 0.5) * 0.8;
    d.w.add(randomSpin(6 * this.cfg.dice.spin));
  }

  /** One small step of the simulation: `t` in clock seconds, `real` in wall seconds. */
  private simulate(t: number, real: number) {
    const { cfg } = this;
    const count = Math.max(1, Math.min(MAX_DICE, Math.round(cfg.dice.count)));
    const half = MODEL_SCALE * cfg.dice.size;
    const rest = half * 0.93; // the corners are rounded, so it sits a little low
    const gravity = 22 * cfg.dice.gravity;
    const up = new THREE.Vector3(0, 1, 0);

    this.dice.forEach((d, i) => {
      const wanted = i < count;
      if (wanted && !d.inPlay) {
        // Joining: dropped in from above, somewhere along the row.
        d.inPlay = true;
        d.p.set((Math.random() - 0.5) * ARENA_X * 1.4, 5 + Math.random() * 2, (Math.random() - 0.5) * 1.6);
        d.v.set(0, 0, 0);
        d.q.copy(randomTurn());
        d.w.copy(randomSpin(4));
      }
      if (!wanted) d.inPlay = false;
      d.presence += ((d.inPlay ? 1 : 0) - d.presence) * (1 - Math.exp(-real * 6));
    });

    const live = this.dice.filter((d) => d.inPlay);
    live.forEach((d, i) => {
      if (this.holding) {
        // Held: drawn to a loose ring round the hand, hanging there and turning.
        const a = (i / live.length) * Math.PI * 2 + performance.now() / 1400;
        const r = live.length > 1 ? 0.6 * cfg.dice.size + 0.12 * live.length : 0;
        // Held inside the shot: a hand up in a corner should not hang the
        // dice half out of frame.
        const centre = this.handAt.clone();
        centre.x = THREE.MathUtils.clamp(centre.x, -ARENA_X + r + 0.6, ARENA_X - r - 0.6);
        centre.y = THREE.MathUtils.clamp(centre.y, r * 0.6 + 1.0, 2.3 - r * 0.6);
        const target = centre.add(new THREE.Vector3(Math.cos(a) * r, Math.sin(a) * r * 0.6, 0));
        const pull = 60 * cfg.hands.grab;
        d.v.addScaledVector(target.sub(d.p), pull * t);
        d.v.multiplyScalar(Math.exp(-12 * t));
        d.w.lerp(new THREE.Vector3(0.8, 1.3, 0.5), 1 - Math.exp(-3 * t));
      } else {
        d.v.y -= gravity * t;
      }

      d.p.addScaledVector(d.v, t);
      // Turn by the angular velocity.
      const angle = d.w.length() * t;
      if (angle > 1e-6) {
        const turn = new THREE.Quaternion().setFromAxisAngle(d.w.clone().normalize(), angle);
        d.q.premultiply(turn).normalize();
      }

      // The floor, tested at the lowest corner rather than the centre, so a
      // die landing on a corner tips over instead of sinking to its middle.
      d.grounded = false;
      if (!this.holding) {
        let lowest = Infinity;
        const corner = new THREE.Vector3();
        const lowestCorner = new THREE.Vector3();
        for (let k = 0; k < 8; k++) {
          corner.set(k & 1 ? rest : -rest, k & 2 ? rest : -rest, k & 4 ? rest : -rest).applyQuaternion(d.q);
          if (corner.y < lowest) { lowest = corner.y; lowestCorner.copy(corner); }
        }
        const bottom = d.p.y + lowest;
        if (bottom < 0) {
          d.p.y -= bottom;
          if (d.v.y < -0.6) {
            const impact = -d.v.y;
            d.v.y = impact * cfg.dice.bounce;
            // Landing off-centre tips it: the push at the corner becomes a turn.
            d.w.addScaledVector(new THREE.Vector3().crossVectors(lowestCorner, up), impact * 0.9 * cfg.dice.spin);
          } else {
            d.v.y = Math.max(0, d.v.y);
          }
          d.v.x *= Math.exp(-3.5 * t);
          d.v.z *= Math.exp(-3.5 * t);
          d.w.multiplyScalar(Math.exp(-2.5 * t));
          d.grounded = true;
        }
      }

      // The edges of the floor.
      if (Math.abs(d.p.x) > ARENA_X) {
        d.p.x = Math.sign(d.p.x) * ARENA_X;
        d.v.x *= -0.6;
      }
      if (d.p.z < ARENA_Z[0] || d.p.z > ARENA_Z[1]) {
        d.p.z = Math.min(ARENA_Z[1], Math.max(ARENA_Z[0], d.p.z));
        d.v.z *= -0.6;
      }

      // Settling: slow on the floor, it rolls onto whichever face is nearest
      // to down and stays there.
      if (d.grounded && d.v.length() < 0.9 && d.w.length() < 2.5) {
        const axes = [
          new THREE.Vector3(1, 0, 0), new THREE.Vector3(-1, 0, 0),
          new THREE.Vector3(0, 1, 0), new THREE.Vector3(0, -1, 0),
          new THREE.Vector3(0, 0, 1), new THREE.Vector3(0, 0, -1),
        ];
        let best = axes[0].clone().applyQuaternion(d.q);
        for (const axis of axes) {
          const a = axis.clone().applyQuaternion(d.q);
          if (a.y > best.y) best = a;
        }
        const level = new THREE.Quaternion().setFromUnitVectors(best, up).multiply(d.q);
        d.q.slerp(level, 1 - Math.exp(-6 * t)).normalize();
        d.w.multiplyScalar(Math.exp(-6 * t));
        d.p.y += (rest - d.p.y) * (1 - Math.exp(-10 * t));
      }
    });

    // Knocking into each other: pushed apart, and they trade the part of
    // their speed that points at each other.
    const reach = rest * 2.05;
    for (let a = 0; a < live.length; a++) {
      for (let b = a + 1; b < live.length; b++) {
        const A = live[a];
        const B = live[b];
        const gap = new THREE.Vector3().subVectors(B.p, A.p);
        const dist = gap.length();
        if (dist >= reach || dist < 1e-6) continue;
        const n = gap.divideScalar(dist);
        const overlap = reach - dist;
        A.p.addScaledVector(n, -overlap / 2);
        B.p.addScaledVector(n, overlap / 2);
        const closing = new THREE.Vector3().subVectors(A.v, B.v).dot(n);
        if (closing > 0) {
          const swap = closing * (1 + 0.4) / 2;
          A.v.addScaledVector(n, -swap);
          B.v.addScaledVector(n, swap);
          const kick = Math.min(6, closing) * cfg.dice.spin;
          A.w.add(randomSpin(kick));
          B.w.add(randomSpin(kick));
        }
      }
    }
  }

  /** Puts each die's meshes where its body is. */
  private place() {
    const size = MODEL_SCALE * this.cfg.dice.size;
    for (const d of this.dice) {
      const visible = d.presence > 0.01;
      for (const mesh of [d.inner, d.outer, d.glow]) mesh.visible = visible;
      if (!visible) continue;
      const s = size * d.presence;
      for (const mesh of [d.inner, d.outer]) {
        mesh.position.copy(d.p);
        mesh.quaternion.copy(d.q);
        mesh.scale.setScalar(s);
      }
      // A pink glow on the floor under each die, spreading and fading as it
      // leaves the ground — it is what sets them on a floor at all on black.
      const lift = Math.max(0, d.p.y - size);
      d.glow.position.set(d.p.x, 0.01, d.p.z);
      d.glow.scale.setScalar(size * 4.2 * (1 + lift * 0.15) * d.presence);
      (d.glow.material as THREE.MeshBasicMaterial).opacity = 0.35 * d.presence * Math.max(0, 1 - lift / 3.5);
    }
  }

  /** The camera: a low three-quarter view of the floor, brought in by spreading two hands. */
  private frame(width: number, height: number) {
    const { camera, cfg, playing: play } = this;
    const aspect = width / height;
    const baseFov = 32;
    const halfH = Math.tan(((baseFov / 2) * Math.PI) / 180);
    const fov = aspect < 16 / 9
      ? (2 * Math.atan((halfH * (16 / 9)) / aspect) * 180) / Math.PI
      : baseFov;
    if (camera.aspect !== aspect || camera.fov !== fov) {
      camera.aspect = aspect;
      camera.fov = fov;
      camera.updateProjectionMatrix();
    }
    const distance = Math.max(4, 9.5 * (1 - (play.spread - 0.4) * cfg.hands.dolly * 0.5));
    const dir = new THREE.Vector3(0, 0.26, 1).normalize();
    camera.position.set(0, 1.0, 0).addScaledVector(dir, distance);
    camera.lookAt(0, 1.0, 0);
  }
}

/** A soft round glow, for the light each die casts on the floor. */
function contactTexture(): THREE.CanvasTexture {
  const c = document.createElement('canvas');
  c.width = c.height = 128;
  const g = c.getContext('2d')!;
  const gradient = g.createRadialGradient(64, 64, 0, 64, 64, 64);
  gradient.addColorStop(0, 'rgba(255,255,255,0.9)');
  gradient.addColorStop(0.35, 'rgba(255,255,255,0.35)');
  gradient.addColorStop(1, 'rgba(255,255,255,0)');
  g.fillStyle = gradient;
  g.fillRect(0, 0, 128, 128);
  return new THREE.CanvasTexture(c);
}

function randomTurn(): THREE.Quaternion {
  return new THREE.Quaternion().setFromEuler(new THREE.Euler(
    Math.random() * Math.PI * 2, Math.random() * Math.PI * 2, Math.random() * Math.PI * 2));
}

function randomSpin(amount: number): THREE.Vector3 {
  return new THREE.Vector3(Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5)
    .normalize().multiplyScalar(amount);
}
