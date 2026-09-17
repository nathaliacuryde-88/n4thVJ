import { useCallback, useEffect, useRef, useState } from 'react';
import { VisualPattern } from '../App';
import {
  RENDERER_CATEGORIES,
  RendererCategory,
  RendererInfo,
} from '../config/RendererCategories';
import { MAX_SET, slotKey, keySlot } from '../config/setlist';
import { createRenderer, VJRenderer } from './renderers/create';
import { idleHands } from '../hands/idle';
import { Clips, DEFAULT_TEXT } from '../config/content';

/**
 * ═══════════════════════════════════════════════════════════════════════════
 * THE LIBRARY
 * ═══════════════════════════════════════════════════════════════════════════
 * Every visual, each one actually running, and a set built from them.
 *
 * The previews are the real renderers rather than recordings, so what you pick
 * from is what you get. That costs something, so only the tiles near the
 * viewport are driven and the rest are torn down — a stopped canvas keeps its
 * last frame, which leaves a still rather than a hole.
 * ═══════════════════════════════════════════════════════════════════════════
 */

/**
 * How many previews may run at once, counted separately because the two kinds
 * cost different things.
 *
 * A 3D or TD renderer holds a WebGL context, and browsers allow only a handful
 * before they start dropping the oldest — losing the context out from under a
 * renderer that is still using it. The 2D ones are just canvas work, so the
 * limit there is CPU rather than a hard ceiling, and can be far looser.
 */
const GL_PREVIEWS = 4;
const CANVAS_PREVIEWS = 14;

/**
 * Frames a cold card is given before it can be asked to yield its slot. Enough
 * for a renderer that builds up over time to leave something worth looking at
 * behind, rather than the first almost-black frame.
 */
const WARMUP_FRAMES = 45;

/** Backing store for a preview. Small: these are thumbnails, not the show. */
const PREVIEW_W = 480;
const PREVIEW_H = 300;

/**
 * Previews run in black and white, whatever the VJ page is set to. Colour is
 * something you choose per layer during a set; here it would only get in the
 * way of comparing one visual's shape and motion against another's.
 */
const PREVIEW_COLORS = ['#ffffff', '#d4d4d4', '#ffffff', '#a3a3a3'];

const CATEGORY_STYLE: Record<RendererCategory, string> = {
  '2D': 'text-cyan-300 border-cyan-400/30 bg-cyan-400/10',
  '3D': 'text-violet-300 border-violet-400/30 bg-violet-400/10',
  TD: 'text-emerald-300 border-emerald-400/30 bg-emerald-400/10',
};

const ALL: RendererInfo[] = Object.values(RENDERER_CATEGORIES);
const FAMILIES: RendererCategory[] = ['2D', '3D', 'TD'];

interface Tile {
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  renderer: VJRenderer | null;
  /** Frames drawn so far, which decides who gets a slot next. */
  frames: number;
  failed?: boolean;
}

interface LibraryProps {
  set: VisualPattern[];
  onSetChange: (set: VisualPattern[]) => void;
  onStart: () => void;
  /** Kinetic Type's words, edited on its own card. */
  text: string;
  onTextChange: (text: string) => void;
  /** Clip's footage: the stored file's name, and a picker for a new one. */
  /** Each file-driven visual's own file, keyed by pattern. */
  clips: Clips;
  onClipChange: (pattern: VisualPattern, file: File | null) => void;
}

export function Library({
  set,
  onSetChange,
  onStart,
  text,
  onTextChange,
  clips,
  onClipChange,
}: LibraryProps) {
  const [filter, setFilter] = useState<RendererCategory | 'ALL'>('ALL');
  const [hovered, setHovered] = useState<VisualPattern | null>(null);
  /** The pill being dragged, while the row is being reordered. */
  const [dragging, setDragging] = useState<VisualPattern | null>(null);

  /** Moves a visual to a position in the row, pushing the rest along. */
  const moveTo = useCallback((pattern: VisualPattern, to: number) => {
    const from = set.indexOf(pattern);
    if (from === -1 || from === to) return;
    const next = [...set];
    next.splice(from, 1);
    next.splice(to, 0, pattern);
    onSetChange(next);
  }, [set, onSetChange]);

  const tiles = useRef(new Map<VisualPattern, Tile>());
  const visible = useRef(new Set<VisualPattern>());
  const observer = useRef<IntersectionObserver | null>(null);
  const setRef = useRef(set);
  setRef.current = set;
  const contentRef = useRef({ text, clips });
  contentRef.current = { text, clips };

  const shown = filter === 'ALL' ? ALL : ALL.filter((r) => r.category === filter);

  // ── selection ───────────────────────────────────────────────────────────
  const toggle = useCallback((pattern: VisualPattern) => {
    const current = setRef.current;
    const at = current.indexOf(pattern);
    if (at !== -1) {
      onSetChange(current.filter((p) => p !== pattern));
      return;
    }
    if (current.length >= MAX_SET) return;
    onSetChange([...current, pattern]);
  }, [onSetChange]);

  /**
   * Put a visual on an exact key, sliding whatever was there and below it down
   * one. The row cannot have holes, so a key past the end of the set lands at
   * the end instead of leaving a gap nothing answers to.
   */
  const assignSlot = useCallback((pattern: VisualPattern, slot: number) => {
    const without = setRef.current.filter((p) => p !== pattern);
    const at = Math.min(slot, without.length);
    if (at >= MAX_SET) return;
    const next = [...without];
    next.splice(at, 0, pattern);
    onSetChange(next.slice(0, MAX_SET));
  }, [onSetChange]);

  // Hover a tile and press its number to put it straight on that key.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.ctrlKey || e.metaKey || e.altKey) return;
      if (e.key === 'Enter' && setRef.current.length > 0) {
        onStart();
        return;
      }
      if (!hovered) return;
      const slot = keySlot(e.key);
      if (slot === -1) return;
      e.preventDefault();
      assignSlot(hovered, slot);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [hovered, assignSlot, onStart]);

  // ── previews ────────────────────────────────────────────────────────────
  useEffect(() => {
    observer.current = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const pattern = entry.target.getAttribute('data-pattern') as VisualPattern | null;
          if (!pattern) continue;
          if (entry.isIntersecting) visible.current.add(pattern);
          else visible.current.delete(pattern);
        }
      },
      // Spin a tile up before it arrives and hold it a little past leaving, so
      // scrolling does not thrash three.js scenes in and out.
      { rootMargin: '250px 0px' },
    );
    // The cards mounted their canvases before this effect ran, so the ones
    // already on screen are waiting to be picked up. Without this the first
    // screenful never starts.
    for (const tile of tiles.current.values()) observer.current.observe(tile.canvas);

    let frame = 0;
    const tick = () => {
      frame = requestAnimationFrame(tick);
      if (document.hidden) return;

      const hands = idleHands(Date.now() / 1000);
      let gl = 0;
      let canvas2d = 0;

      /*
       * Cards that have never drawn go first.
       *
       * There are more visuals on a tab than there are context slots, and
       * whichever ones grabbed a slot first would otherwise keep it forever —
       * leaving the rest of the grid black, which reads as broken rather than
       * as waiting. Letting the cold ones in first means every card gets its
       * frames, and once it has them it hands the slot on and keeps that frame
       * on screen as a still.
       */
      const queue = [...tiles.current].sort(([, a], [, b]) => {
        const aCold = a.frames < WARMUP_FRAMES ? 0 : 1;
        const bCold = b.frames < WARMUP_FRAMES ? 0 : 1;
        return aCold - bCold;
      });

      for (const [pattern, tile] of queue) {
        const holdsContext = RENDERER_CATEGORIES[pattern].category !== '2D';
        const room = holdsContext ? gl < GL_PREVIEWS : canvas2d < CANVAS_PREVIEWS;
        const wanted = visible.current.has(pattern) && room && !tile.failed;
        if (wanted) {
          if (!tile.renderer) {
            try {
              tile.renderer = createRenderer(pattern, tile.canvas, tile.ctx, null);
            } catch {
              // No context to spare, or the renderer will not build here. The
              // tile stays a still and the card is still selectable.
              tile.failed = true;
              continue;
            }
          }
          try {
            // Cheap, and it means retyping shows in the preview as you type.
            tile.renderer.setText?.(contentRef.current.text);
            const clip = contentRef.current.clips[pattern];
            tile.renderer.setClipUrl?.(clip?.url ?? null, clip?.kind);
            tile.renderer.render(hands, PREVIEW_COLORS, undefined, 'contrast');
          } catch {
            tile.failed = true;
            tile.renderer.destroy?.();
            tile.renderer = null;
            continue;
          }
          tile.frames++;
          if (holdsContext) gl++;
          else canvas2d++;
        } else if (tile.renderer) {
          tile.renderer.destroy?.();
          tile.renderer = null; // the canvas keeps its last frame
        }
      }
    };
    frame = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(frame);
      observer.current?.disconnect();
      for (const tile of tiles.current.values()) tile.renderer?.destroy?.();
      tiles.current.clear();
    };
  }, []);

  /**
   * One ref callback per pattern, kept for the life of the component.
   *
   * An inline `ref={(el) => ...}` is a new function every render, which React
   * answers by detaching and reattaching — so every re-render tore down every
   * renderer and blanked every canvas, and nothing was ever on screen long
   * enough to draw. A stable identity means these fire on real mount and
   * unmount only.
   */
  const tileRefs = useRef(new Map<VisualPattern, (el: HTMLCanvasElement | null) => void>());
  const tileRef = (pattern: VisualPattern) => {
    let fn = tileRefs.current.get(pattern);
    if (!fn) {
      fn = (el: HTMLCanvasElement | null) => mountTile(pattern, el);
      tileRefs.current.set(pattern, fn);
    }
    return fn;
  };

  /** Register a card's canvas with the preview loop. */
  const mountTile = useCallback((pattern: VisualPattern, canvas: HTMLCanvasElement | null) => {
    if (!canvas) {
      const existing = tiles.current.get(pattern);
      existing?.renderer?.destroy?.();
      tiles.current.delete(pattern);
      visible.current.delete(pattern);
      return;
    }
    if (tiles.current.has(pattern)) return;
    canvas.width = PREVIEW_W;
    canvas.height = PREVIEW_H;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    tiles.current.set(pattern, { canvas, ctx, renderer: null, frames: 0 });
    observer.current?.observe(canvas);
  }, []);

  return (
    <div className="min-h-screen w-full bg-[#07070a] text-white font-mono">
      {/* A single soft light behind the whole thing, so the grid sits on
          something rather than floating on flat black. */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 opacity-70"
        style={{
          background:
            'radial-gradient(60rem 40rem at 50% -10%, rgba(99,102,241,0.18), transparent 70%),' +
            'radial-gradient(40rem 30rem at 85% 15%, rgba(217,70,239,0.10), transparent 70%)',
        }}
      />

      <div className="relative mx-auto max-w-[1500px] px-6 pb-40 pt-14">
        {/* ── masthead ─────────────────────────────────────────────────── */}
        <header className="mb-10">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <h1 className="text-2xl font-semibold tracking-[-0.02em] sm:text-3xl">
                &lt;N4TH&gt;
              </h1>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/45">
                Every visual, running. Pick up to {MAX_SET} and they become your keyboard —
                click to add, or hover one and press the number you want it on.
              </p>
            </div>

            <nav className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] p-1.5">
              {(['ALL', ...FAMILIES] as const).map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`rounded-full px-4 py-1.5 text-[11px] tracking-wider transition-all ${
                    filter === f
                      ? 'bg-white text-black'
                      : 'text-white/45 hover:bg-white/5 hover:text-white/80'
                  }`}
                >
                  {f}
                </button>
              ))}
            </nav>
          </div>
        </header>

        {/* ── the grid ─────────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {shown.map((info) => {
            const slot = set.indexOf(info.pattern);
            const chosen = slot !== -1;
            const full = set.length >= MAX_SET && !chosen;
            // Two visuals take their content from here, so their cards carry a
            // control. That is why a card is a div with a button inside rather
            // than one big button — an input cannot live inside a button.
            const supply =
              info.pattern === 'text'
                ? 'text'
                : info.pattern === 'video' || info.pattern === 'mosaic'
                  ? 'file'
                  : null;

            return (
              <div
                key={info.pattern}
                onMouseEnter={() => setHovered(info.pattern)}
                onMouseLeave={() => setHovered((h) => (h === info.pattern ? null : h))}
                className={`group relative overflow-hidden rounded-2xl border text-left transition-all duration-200 ${
                  chosen
                    ? 'border-white/70 bg-white/[0.06] shadow-[0_0_0_1px_rgba(255,255,255,0.35),0_18px_50px_-20px_rgba(255,255,255,0.35)]'
                    : full
                      ? 'border-white/5 opacity-35'
                      : 'border-white/10 bg-white/[0.02] hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.05]'
                }`}
              >
                <button
                  onClick={() => toggle(info.pattern)}
                  disabled={full}
                  title={
                    full
                      ? 'The set is full — take one off first'
                      : `${info.description}${chosen ? '' : ' · click to add'}`
                  }
                  className={`block w-full text-left ${full ? 'cursor-not-allowed' : ''}`}
                >
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-black">
                    <canvas
                      data-pattern={info.pattern}
                      ref={tileRef(info.pattern)}
                      className="h-full w-full object-cover"
                    />
                    {/* Keeps the name legible over a bright frame. */}
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/85 to-transparent" />

                    {chosen && (
                      <div className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white text-base font-semibold text-black shadow-lg">
                        {slotKey(slot)}
                      </div>
                    )}
                  </div>

                  <div className="flex items-center justify-between gap-3 px-4 pb-3 pt-3">
                    <div className="min-w-0">
                      <div className="truncate text-[13px] tracking-wide text-white/90">
                        {info.name}
                      </div>
                      <div className="mt-0.5 truncate text-[10px] text-white/35">
                        {info.description}
                      </div>
                    </div>
                    <span
                      className={`shrink-0 rounded border px-1.5 py-0.5 text-[9px] tracking-widest ${
                        CATEGORY_STYLE[info.category]
                      }`}
                    >
                      {info.category}
                    </span>
                  </div>
                </button>

                {supply === 'text' && (
                  <div className="px-4 pb-4">
                    <input
                      value={text}
                      onChange={(e) => onTextChange(e.target.value)}
                      // The number keys assign slots while a card is hovered,
                      // which would otherwise eat every digit typed here.
                      onKeyDown={(e) => e.stopPropagation()}
                      placeholder={DEFAULT_TEXT}
                      maxLength={48}
                      aria-label="Words for Kinetic Type"
                      className="w-full rounded-lg border border-white/15 bg-black/60 px-3 py-2 text-[12px] tracking-wide text-white placeholder:text-white/25 focus:border-white/45 focus:outline-none"
                    />
                  </div>
                )}

                {supply === 'file' && (
                  <div className="flex items-center gap-2 px-4 pb-4">
                    <label className="cursor-pointer rounded-lg border border-white/15 bg-black/60 px-3 py-2 text-[11px] tracking-wider text-white/75 transition-colors hover:border-white/45 hover:text-white">
                      {clips[info.pattern] ? 'REPLACE' : 'UPLOAD'}
                      <input
                        type="file"
                        accept="video/*,image/*"
                        className="hidden"
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) onClipChange(info.pattern, file);
                          e.target.value = ''; // so the same file can be picked again
                        }}
                      />
                    </label>
                    <span className="min-w-0 flex-1 truncate text-[10px] text-white/35">
                      {clips[info.pattern]?.name ?? 'no file yet'}
                    </span>
                    {clips[info.pattern] && (
                      <button
                        onClick={() => onClipChange(info.pattern, null)}
                        title="Remove this visual's file"
                        className="shrink-0 px-1 text-white/25 transition-colors hover:text-white/80"
                      >
                        ×
                      </button>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* ── the set, and the way in ──────────────────────────────────────── */}
      <footer className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-black/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1500px] flex-wrap items-center gap-4 px-6 py-4">
          <div className="flex min-w-0 flex-1 flex-wrap items-center gap-2">
            <span className="mr-1 text-[10px] tracking-widest text-white/35">
              SET {set.length}/{MAX_SET}
            </span>
            {set.length === 0 && (
              <span className="text-[11px] text-white/30">
                Nothing chosen yet — pick a visual to start building the row.
              </span>
            )}
            {/*
              Drag a pill to reorder the row.

              The number on a pill is the key it answers to in the set, so the
              order here IS the keyboard layout. Typing a number over a hovered
              card still works and is faster once you know where things go, but
              it means holding the whole arrangement in your head; dragging
              lets you see it. The two write to the same list.
            */}
            {set.map((pattern, i) => (
              <div
                key={pattern}
                draggable
                onDragStart={(e) => {
                  setDragging(pattern);
                  e.dataTransfer.effectAllowed = 'move';
                  // Firefox refuses to start a drag without payload.
                  e.dataTransfer.setData('text/plain', pattern);
                }}
                onDragEnd={() => setDragging(null)}
                onDragOver={(e) => {
                  if (!dragging || dragging === pattern) return;
                  e.preventDefault();
                  e.dataTransfer.dropEffect = 'move';
                }}
                onDrop={(e) => {
                  e.preventDefault();
                  if (dragging) moveTo(dragging, i);
                  setDragging(null);
                }}
                className={`group flex cursor-grab items-center gap-2 rounded-full border py-1 pl-1 pr-3 transition-all active:cursor-grabbing ${
                  dragging === pattern
                    ? 'border-white/60 bg-white/20 opacity-50'
                    : 'border-white/15 bg-white/[0.06] hover:border-white/40 hover:bg-white/10'
                }`}
              >
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-[11px] font-semibold text-black">
                  {slotKey(i)}
                </span>
                <span className="select-none text-[11px] text-white/80">
                  {RENDERER_CATEGORIES[pattern].name}
                </span>
                <button
                  onClick={() => toggle(pattern)}
                  title="Take off the set"
                  className="text-white/25 transition-colors group-hover:text-white/70 hover:!text-white"
                >
                  ×
                </button>
              </div>
            ))}
          </div>

          <div className="flex shrink-0 items-center gap-3">
            {set.length > 0 && (
              <button
                onClick={() => onSetChange([])}
                className="rounded-full px-3 py-2 text-[11px] tracking-wider text-white/40 transition-colors hover:text-white/80"
              >
                CLEAR
              </button>
            )}
            <button
              onClick={onStart}
              disabled={set.length === 0}
              className={`rounded-full px-7 py-3 text-[12px] font-semibold tracking-[0.18em] transition-all ${
                set.length === 0
                  ? 'cursor-not-allowed bg-white/10 text-white/25'
                  : 'bg-white text-black hover:scale-[1.03] hover:shadow-[0_0_40px_-8px_rgba(255,255,255,0.6)]'
              }`}
            >
              START SET →
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
