import * as THREE from 'three';
import { AudioData, HandData } from '../../App';
import { NatureWorldConfig } from '../../config/NatureWorldRendererConfig';
import { ParamValues, withOverrides } from '../../params/types';
import { AuroraRenderer } from './AuroraRenderer';
import { BloomFieldRenderer } from './BloomFieldRenderer';
import { ButterfliesRenderer } from './ButterfliesRenderer';
import { DandelionRenderer } from './DandelionRenderer';
import { JellyfishRenderer } from './JellyfishRenderer';
import { WatercolourRenderer } from './WatercolourRenderer';
import { InflatedLook, MotifHost, Playing, drawBackdrop, drawUnavailable, frameCamera, makeRenderer } from './inflated/style';

/**
 * ═══════════════════════════════════════════════════════════════════════════
 * NATURE WORLD
 * ═══════════════════════════════════════════════════════════════════════════
 * The nature family in one scene rather than stacked as separate layers.
 *
 * Each motif — Bloom Field, Butterflies, Dandelion, Jellyfish Drift, and the
 * Watercolour and Aurora skies — is hosted (see MotifHost): it adds itself
 * to this scene, is seen through this camera and coloured from this palette,
 * and this draws them all at once. Being in one scene is what lets them meet:
 * butterflies fly down to the flowers and settle on them, dandelion seeds
 * drift past the flower heads and through the swarm, everything is lit and
 * coloured as one picture, and one hand moves the whole world.
 *
 * Placed as a landscape: the flowers in front, the dandelions standing
 * further back, the butterflies between, the jellyfish up in the sky like
 * slow balloons, and a sky behind it all.
 *
 * The hands and sound reach every motif through its own rules, scaled by
 * this one set of sliders; the fingers set the tempo of all of it through
 * the shared clock, and a hand carries the world with it as it does Bloom
 * Field.
 * ═══════════════════════════════════════════════════════════════════════════
 */

type Cfg = typeof NatureWorldConfig;

export class NatureWorldRenderer {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private cfg: Cfg = NatureWorldConfig;
  private surface = document.createElement('canvas');
  private renderer: THREE.WebGLRenderer | null = null;
  private scene = new THREE.Scene();
  private camera = new THREE.PerspectiveCamera(30, 16 / 9, 0.1, 200);
  private look: InflatedLook | null = null;
  private playing = new Playing(0.5);
  private failed = false;
  private started = false;

  private flowers: BloomFieldRenderer | null = null;
  private butterflies: ButterfliesRenderer | null = null;
  private dandelions: DandelionRenderer | null = null;
  private jellyfish: JellyfishRenderer | null = null;
  private watercolour: WatercolourRenderer | null = null;
  private aurora: AuroraRenderer | null = null;

  constructor(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
    this.canvas = canvas;
    this.ctx = ctx;
    try {
      this.renderer = makeRenderer(this.surface);
      this.look = new InflatedLook();
      const host: MotifHost = { scene: this.scene, camera: this.camera, look: this.look };
      this.watercolour = new WatercolourRenderer(canvas, ctx, host);
      this.aurora = new AuroraRenderer(canvas, ctx, host);
      this.dandelions = new DandelionRenderer(canvas, ctx, host);
      this.flowers = new BloomFieldRenderer(canvas, ctx, host);
      this.butterflies = new ButterfliesRenderer(canvas, ctx, host);
      this.jellyfish = new JellyfishRenderer(canvas, ctx, host);
      this.place();
      this.setParams({});
    } catch (error) {
      console.error('Nature World could not start:', error);
      this.failed = true;
    }
  }

  /** The landscape: where each motif stands in the world. */
  private place() {
    // The flowers lower, in front: a bed at the bottom of the frame.
    this.flowers!.group.position.set(0, -2.5, 1.2);
    // The dandelions further back, still reaching below the frame.
    this.dandelions!.depth = -5;
    // The jellyfish up in the sky, small and far, like slow balloons.
    this.jellyfish!.group.position.set(0, 2.4, -7);
  }

  /** The library waits for the dandelions to load before it counts frames. */
  isReady() {
    return this.failed || !this.dandelions || this.dandelions.isReady();
  }

  /**
   * The world's sliders, handed on to each motif in its own terms: one
   * palette, one set of hands and sound, and how many of each.
   */
  setParams(values: ParamValues) {
    const cfg = withOverrides(NatureWorldConfig, values);
    this.cfg = cfg;
    const { colour, hands, sound, world, sizes } = cfg;
    // Sizes: each kind scaled about where it stands — the flowers from their
    // bed, so bigger ones reach higher; the dandelions with their stems
    // still running below the frame.
    if (this.flowers) this.flowers.group.scale.setScalar(0.68 * sizes.flowers);
    if (this.jellyfish) this.jellyfish.group.scale.setScalar(0.95 * sizes.jellyfish);
    if (this.dandelions) this.dandelions.scale = sizes.dandelions;
    const palette = {
      'colour.speed': colour.speed, 'colour.offset': colour.offset,
      'colour.palette': colour.palette, 'colour.depth': colour.depth,
    };
    const music = {
      'sound.beat': sound.beat, 'sound.bass': sound.bass, 'sound.mid': sound.mid, 'sound.high': sound.high,
    };
    this.flowers?.setParams({
      ...palette, ...music,
      'field.count': world.flowers, 'field.backdrop': 0, 'hands.clap': hands.clap,
    });
    this.butterflies?.setParams({
      ...palette, ...music,
      'flight.count': world.butterflies, 'flight.size': 0.45 * sizes.butterflies, 'flight.backdrop': 0,
      'hands.follow': hands.follow, 'hands.clap': hands.clap,
    });
    this.dandelions?.setParams({
      ...palette,
      'field.count': Math.max(1, world.dandelions), 'field.drift': world.seeds, 'field.backdrop': 0,
      'hands.follow': hands.follow, 'hands.clap': hands.clap,
      'sound.gust': sound.beat, 'sound.wind': sound.wind, 'sound.mid': sound.mid, 'sound.high': sound.high,
    });
    this.jellyfish?.setParams({
      ...palette, ...music,
      'swarm.count': world.jellyfish, 'swarm.size': 0.8, 'swarm.backdrop': 0,
      'hands.follow': hands.follow * 0.6, 'hands.clap': hands.clap,
    });
    this.watercolour?.setParams({
      'colour.speed': colour.speed * 0.4, 'colour.offset': colour.offset + 0.75, 'colour.palette': colour.palette,
      'hands.clap': hands.clap, 'sound.beat': sound.beat, 'sound.bass': sound.bass, 'sound.mid': sound.mid,
    });
    this.aurora?.setParams({
      'hands.clap': hands.clap, 'sound.beat': sound.beat, 'sound.bass': sound.bass,
      'sound.mid': sound.mid, 'sound.high': sound.high,
    });
    if (this.butterflies) this.butterflies.visiting = world.visits;
  }

  destroy() {
    for (const m of [this.watercolour, this.aurora, this.dandelions, this.flowers, this.butterflies, this.jellyfish]) {
      m?.destroy();
    }
    this.look?.dispose();
    this.look = null;
    this.scene.clear();
    this.renderer?.dispose();
    this.renderer?.forceContextLoss();
    this.renderer = null;
  }

  render(handData: HandData, colors: string[], audioData?: AudioData) {
    const { ctx, cfg } = this;
    const width = this.canvas.width;
    const height = this.canvas.height;
    if (width === 0 || height === 0) return;
    const renderer = this.renderer;
    const look = this.look;
    if (this.failed || !renderer || !look) {
      drawUnavailable(ctx, width, height, 'NATURE WORLD');
      return;
    }
    const play = this.playing;
    play.read(handData, audioData);

    // One palette for everything.
    look.update(colors, cfg.colour.palette, play.dt, !this.started);
    this.started = true;

    // The camera: the family's shot, carried with the hand.
    frameCamera(this.camera, width, height);
    const reach = cfg.hands.camera;
    const slideX = -play.aim.x * reach * 2.2;
    const slideY = -play.aim.y * reach * 1.3;
    const yaw = -play.aim.x * reach * 0.12;
    this.camera.position.set(slideX + Math.sin(yaw) * 15.5, 0.5 + slideY, Math.cos(yaw) * 15.5);
    this.camera.lookAt(slideX, 0.1 + slideY, 0);
    this.camera.updateMatrixWorld(true);

    // The sky.
    const sky = Math.round(cfg.world.sky);
    this.watercolour!.sky.mesh.visible = sky === 1;
    this.aurora!.sky.mesh.visible = sky === 2;
    if (sky === 1) this.watercolour!.update(handData, colors, audioData, width, height);
    if (sky === 2) this.aurora!.update(handData, colors, audioData, width, height);

    // The motifs, the flowers first so the butterflies know where they are.
    const { world } = cfg;
    this.flowers!.group.visible = world.flowers >= 1;
    this.flowers!.update(handData, colors, audioData, width, height);
    this.butterflies!.perches = this.flowers!.group.visible ? this.flowers!.perches() : [];
    this.butterflies!.group.visible = world.butterflies >= 1;
    this.butterflies!.update(handData, colors, audioData);
    this.dandelions!.group.visible = world.dandelions >= 1;
    if (world.dandelions >= 1) this.dandelions!.update(handData, colors, audioData, width, height);
    this.jellyfish!.group.visible = world.jellyfish >= 1;
    this.jellyfish!.update(handData, colors, audioData);

    if (this.surface.width !== width || this.surface.height !== height) {
      renderer.setSize(width, height, false);
    }
    renderer.render(this.scene, this.camera);

    // Under it: the studio or black, when there is no sky.
    if (sky === 0) drawBackdrop(ctx, width, height, 1);
    else if (sky === 3) drawBackdrop(ctx, width, height, 0);
    ctx.drawImage(this.surface, 0, 0, width, height);
  }
}
