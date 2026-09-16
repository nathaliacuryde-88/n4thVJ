import { useRef, useEffect, useState, useCallback } from 'react';
import { Layer } from '../config/LayerConfig';
import { AudioData, HandData, VisualPattern } from '../App';
import { createRenderer, VJRenderer } from './renderers/create';
import { advanceClock } from '../motion/clock';
import { ParamValues, withOverrides } from '../params/types';
import { PostPipeline } from '../pipeline/PostPipeline';
import { PipelineConfig } from '../config/PipelineConfig';
import { Clips } from '../config/content';

/** A renderer plus the canvas it draws into. */
interface Deck {
  renderer: VJRenderer;
  canvas: HTMLCanvasElement;
  pattern: VisualPattern;
  /** Set once a frame has thrown, so the failure is reported only once. */
  reportedError?: boolean;
}

/** The deck on its way out during a crossfade. */
interface FadingDeck extends Deck {
  fadeStart: number;
  duration: number;
}

/** One position in the stack: what is playing there, and what it is fading from. */
interface Slot {
  current: Deck;
  outgoing: FadingDeck | null;
}

/**
 * Stacked layers are screened onto the frame rather than painted over it.
 *
 * Renderers fade their trails by drawing translucent black across the whole
 * canvas instead of clearing it, so every layer canvas is fully opaque — laid
 * down with 'source-over' the top one would simply hide everything under it.
 * Screening leaves black untouched and lights only where the strokes are, and
 * unlike plain addition it cannot run past white, so a dense visual softens
 * into the stack instead of clipping it flat.
 */
const LAYER_BLEND: GlobalCompositeOperation = 'screen';

/** How far through its crossfade an outgoing deck is: 0 = just started, 1 = done. */
function fadeProgress(deck: FadingDeck, now: number): number {
  if (deck.duration <= 0) return 1;
  return Math.min(1, (now - deck.fadeStart) / 1000 / deck.duration);
}

interface VJCanvasProps {
  handData: HandData;
  /** Each layer's palette, index-matched to `layers`. */
  layerColors: string[][];
  /** The stack, bottom first. A single entry is the ordinary one-visual case. */
  layers: Layer[];
  videoElement?: HTMLVideoElement | null; // Camera video element for holographic renderer
  audioData?: AudioData;
  /** Slider overrides per layer, index-matched to `layers`. */
  layerParams?: (ParamValues | undefined)[];
  /** Slider overrides for the post pipeline (the FX tab). */
  fxParams?: ParamValues;
  /** What the content-driven visuals show: the words, and the uploaded clip. */
  content: { text: string; clips: Clips };
  /** Tempo for the whole set. Scales every renderer's clock. */
  motion: number;
  /**
   * The visible canvas, whenever it changes.
   *
   * The recorder needs the element itself, and this one is replaced rather
   * than reused when the pipeline falls back to 2D — a canvas keeps its first
   * context kind for life — so a single read at mount would go stale.
   */
  onCanvasReady?: (canvas: HTMLCanvasElement | null) => void;
}

export function VJCanvas({
  handData,
  layerColors,
  layers,
  videoElement,
  audioData,
  layerParams,
  fxParams,
  content,
  motion,
  onCanvasReady,
}: VJCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animationFrameRef = useRef<number | null>(null);

  // A ref callback rather than an effect, so a remount is reported as it
  // happens rather than a frame later.
  const readyRef = useRef(onCanvasReady);
  readyRef.current = onCanvasReady;
  const holdCanvas = useCallback((el: HTMLCanvasElement | null) => {
    canvasRef.current = el;
    readyRef.current?.(el);
  }, []);
  const pipelineRef = useRef<PostPipeline | null>(null);
  const fallbackCtxRef = useRef<CanvasRenderingContext2D | null>(null);
  /**
   * A canvas can only ever hold one kind of context. If the pipeline dies after
   * taking the WebGL2 one — a shader that will not compile on some driver — then
   * asking that same canvas for a 2D context returns null forever, and the page
   * stays black with no way back. Flipping this remounts the canvas as a fresh
   * element so the 2D fallback actually has somewhere to draw.
   */
  const [pipelineFailed, setPipelineFailed] = useState(false);
  /** The stack, bottom first. Index-matched to the `layers` prop. */
  const slotsRef = useRef<Slot[]>([]);
  /** Read by the compose step for each layer's fader, without rebuilding anything. */
  const layersRef = useRef<Layer[]>(layers);
  /**
   * Where the stack is flattened before it reaches the pipeline. Feedback and
   * the rest of the chain then treat the layers as the single image they read
   * as, rather than running once per layer.
   */
  const compositeCtxRef = useRef<CanvasRenderingContext2D | null>(null);

  // Store latest handData and dominantColors in refs so animate loop can access them
  const handDataRef = useRef<HandData>(handData);
  const layerColorsRef = useRef<string[][]>(layerColors);
  const videoElementRef = useRef<HTMLVideoElement | null>(videoElement ?? null);
  const audioDataRef = useRef<AudioData | undefined>(audioData);
  const layerParamsRef = useRef<(ParamValues | undefined)[] | undefined>(layerParams);
  const fxParamsRef = useRef<ParamValues | undefined>(fxParams);
  const contentRef = useRef(content);
  const motionRef = useRef(motion);

  // Update refs whenever props change
  useEffect(() => {
    handDataRef.current = handData;
    layerColorsRef.current = layerColors;
    videoElementRef.current = videoElement ?? null;
    audioDataRef.current = audioData;
    layerParamsRef.current = layerParams;
    layersRef.current = layers;
    fxParamsRef.current = fxParams;
    contentRef.current = content;
    motionRef.current = motion;
  }, [handData, layerColors, videoElement, audioData, layerParams, layers, fxParams, content, motion]);

  // Retyping the words must not rebuild the renderer, any more than a slider does.
  useEffect(() => {
    for (const slot of slotsRef.current) {
      if (!slot) continue;
      const clip = content.clips[slot.current.pattern];
      slot.current.renderer.setText?.(content.text);
      slot.current.renderer.setClipUrl?.(clip?.url ?? null, clip?.kind);
    }
  }, [content]);

  // Slider moves must not rebuild the renderer - that would reset its particles,
  // its trails and, for the three.js ones, its whole scene.
  useEffect(() => {
    slotsRef.current.forEach((slot, index) => {
      slot?.current.renderer.setParams?.(layerParams?.[index] ?? {});
    });
  }, [layerParams]);

  useEffect(() => {
    pipelineRef.current?.setParams(fxParams ?? {});
  }, [fxParams]);

  // The post pipeline owns the visible canvas and outlives every pattern switch,
  // so its WebGL context is created once rather than per renderer.
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    if (pipelineFailed) {
      fallbackCtxRef.current = canvas.getContext('2d');
      return;
    }

    let pipeline: PostPipeline | null = null;
    try {
      pipeline = new PostPipeline(canvas);
      pipeline.setParams(fxParamsRef.current ?? {});
      pipelineRef.current = pipeline;
    } catch (error) {
      console.error('Post pipeline unavailable, falling back to direct output:', error);
      pipelineRef.current = null;
      setPipelineFailed(true);
    }

    return () => {
      pipeline?.destroy();
      pipelineRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pipelineFailed]);

  // ═══════════════════════════════════════════════════════════════════════
  // DECKS
  // ═══════════════════════════════════════════════════════════════════════
  // Every layer owns a slot, and every slot owns its canvas and its renderer.
  // A pattern change does not tear the old renderer down. It becomes that
  // slot's outgoing deck and keeps drawing for the length of the crossfade, so
  // the transition is between two live visuals rather than a cut or a fade from
  // a frozen frame. Both decks run at once for that window.
  //
  // The slots are flattened into one composite canvas each frame, and it is the
  // composite that the pipeline sees — so feedback, bloom and the rest run once
  // over the finished stack rather than once per layer.

  // One rAF loop for the lifetime of the component, driving whichever decks
  // exist. Rebuilding it per pattern is what forced the hard cut before.
  useEffect(() => {
    const composite = document.createElement('canvas');
    compositeCtxRef.current = composite.getContext('2d');

    const resize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      composite.width = width;
      composite.height = height;
      for (const slot of slotsRef.current) {
        for (const deck of [slot?.current, slot?.outgoing]) {
          if (deck) {
            deck.canvas.width = width;
            deck.canvas.height = height;
          }
        }
      }
      const visible = canvasRef.current;
      if (visible && !pipelineRef.current) {
        visible.width = width;
        visible.height = height;
      }
    };
    resize();
    window.addEventListener('resize', resize);

    /**
     * One renderer throwing must not end the show.
     *
     * An exception here used to escape the rAF callback, which stops the loop
     * for good: the canvas freezes on its last frame and nothing — not even
     * switching pattern — brings it back without a reload. A single bad frame
     * from one visual is not a reason to lose the set, so it is caught, said
     * once, and the loop carries on. The pattern can still be switched away
     * from, which is the thing that actually recovers it.
     */
    const drawDeck = (deck: Deck, index: number) => {
      try {
        if (videoElementRef.current) {
          deck.renderer.setVideoElement?.(videoElementRef.current);
        }
        const layer = layersRef.current[index];
        deck.renderer.render(
          handDataRef.current,
          layerColorsRef.current[index] ?? layerColorsRef.current[0] ?? [],
          audioDataRef.current,
          layer?.colorMode,
        );
      } catch (error) {
        if (!deck.reportedError) {
          deck.reportedError = true;
          console.error(`Renderer "${deck.pattern}" threw while drawing:`, error);
        }
      }
    };

    let pipelineThrew = false;

    /**
     * Flatten the stack into one frame.
     *
     * The base goes down opaque and the layers above it screen on top, each at
     * its own fader. A slot mid-crossfade dissolves between its two decks: under
     * 'source-over' the outgoing frame is laid down whole and the incoming one
     * fades over it, while a screened layer splits its share between the two so
     * the pair never contributes more than one layer's worth of light.
     */
    const compose = (ctx: CanvasRenderingContext2D, now: number) => {
      ctx.globalCompositeOperation = 'source-over';
      ctx.globalAlpha = 1;
      // Black rather than clear: renderers assume an opaque frame, and the
      // no-pipeline path below blits this straight out without clearing.
      ctx.fillStyle = '#000';
      ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);

      slotsRef.current.forEach((slot, index) => {
        if (!slot) return;
        const isBase = index === 0;
        const opacity = layersRef.current[index]?.opacity ?? 1;
        if (opacity <= 0) return;
        ctx.globalCompositeOperation = isBase ? 'source-over' : LAYER_BLEND;

        const fade = slot.outgoing ? fadeProgress(slot.outgoing, now) : 1;
        if (slot.outgoing) {
          ctx.globalAlpha = opacity * (isBase ? 1 : 1 - fade);
          ctx.drawImage(slot.outgoing.canvas, 0, 0);
        }
        ctx.globalAlpha = opacity * fade;
        ctx.drawImage(slot.current.canvas, 0, 0);
      });

      ctx.globalAlpha = 1;
      ctx.globalCompositeOperation = 'source-over';
    };

    let lastFrame = performance.now();
    const animate = () => {
      const now = performance.now();
      const ctx = compositeCtxRef.current;

      // One tick for the whole stack, before anything draws. Clamped so a tab
      // returning from the background does not jump every visual forwards.
      const delta = Math.min(0.1, (now - lastFrame) / 1000);
      lastFrame = now;
      advanceClock(delta, motionRef.current);

      slotsRef.current.forEach((slot, index) => {
        if (!slot) return;
        drawDeck(slot.current, index);
        if (slot.outgoing) {
          if (fadeProgress(slot.outgoing, now) >= 1) {
            slot.outgoing.renderer.destroy?.();
            slot.outgoing = null;
          } else {
            drawDeck(slot.outgoing, index);
          }
        }
      });

      if (ctx && slotsRef.current.length > 0) {
        compose(ctx, now);

        const pipeline = pipelineRef.current;
        if (pipeline) {
          try {
            pipeline.render(ctx.canvas, now / 1000);
          } catch (error) {
            if (!pipelineThrew) {
              pipelineThrew = true;
              console.error('Post pipeline threw while presenting:', error);
            }
          }
        } else if (fallbackCtxRef.current) {
          fallbackCtxRef.current.drawImage(ctx.canvas, 0, 0);
        }
      }

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resize);
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
      for (const slot of slotsRef.current) {
        slot?.outgoing?.renderer.destroy?.();
        slot?.current.renderer.destroy?.();
      }
      slotsRef.current = [];
      compositeCtxRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Bring the slots in line with the layers prop: build the ones that are new,
  // crossfade the ones whose pattern changed, retire the ones taken off.
  useEffect(() => {
    const slots = slotsRef.current;
    const cfg = withOverrides(PipelineConfig, fxParamsRef.current ?? {}).transition;
    const duration = cfg.enabled >= 0.5 ? cfg.duration : 0;

    const build = (pattern: VisualPattern, index: number): Deck | null => {
      const canvas = document.createElement('canvas');
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      const ctx = canvas.getContext('2d');
      if (!ctx) return null;

      let renderer: VJRenderer;
      try {
        renderer = createRenderer(pattern, canvas, ctx, videoElementRef.current);
      } catch (error) {
        console.error('Failed to create renderer for pattern:', pattern, error);
        return null;
      }
      renderer.setParams?.(layerParamsRef.current?.[index] ?? {});
      renderer.setText?.(contentRef.current.text);
      const clip = contentRef.current.clips[pattern];
      renderer.setClipUrl?.(clip?.url ?? null, clip?.kind);
      return { renderer, canvas, pattern };
    };

    layers.forEach(({ pattern }, index) => {
      const slot = slots[index];
      if (slot?.current.pattern === pattern) return;

      const deck = build(pattern, index);
      if (!deck) return;

      if (!slot) {
        slots[index] = { current: deck, outgoing: null };
        return;
      }

      // Only one deck can be fading per slot; a switch during a fade drops
      // whatever was already on its way out rather than stacking renderers.
      slot.outgoing?.renderer.destroy?.();
      if (duration > 0) {
        slot.outgoing = { ...slot.current, fadeStart: performance.now(), duration };
      } else {
        slot.current.renderer.destroy?.();
        slot.outgoing = null;
      }
      slot.current = deck;
    });

    for (const gone of slots.splice(layers.length)) {
      gone?.outgoing?.renderer.destroy?.();
      gone?.current.renderer.destroy?.();
    }
    // Only the patterns rebuild decks; a fader move must not tear a renderer down.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [layers.map((l) => l.pattern).join('|')]);

  return (
    <canvas
      // Remounting as a new element is the only way to get a 2D context after
      // WebGL2 has claimed the old one.
      key={pipelineFailed ? 'fallback-2d' : 'pipeline-gl'}
      ref={holdCanvas}
      className="absolute inset-0 w-full h-full z-0"
    />
  );
}