/**
 * ═══════════════════════════════════════════════════════════════════════════
 * THE OUTPUT WINDOW
 * ═══════════════════════════════════════════════════════════════════════════
 * What the room sees, separately from what she sees.
 *
 * Playing means reading sliders, the key strip, the layer faders and the hand
 * readout. Projecting means none of that — just the work, black to the edges.
 * Full-screening this page cannot do both: hiding the controls blinds her, and
 * leaving them up puts them on the wall.
 *
 * So the output lives in a second window, to be dragged onto the projector and
 * full-screened there. It holds one <video> playing a live stream taken off
 * the visuals canvas — not a copy of this page, which is why no control can
 * appear on it and why the camera preview cannot either: the camera is drawn
 * into the recorder's own frame, never into the canvas this reads.
 *
 * A stream rather than copying pixels across every frame: the browser moves
 * the frames itself, at the canvas's own rate, without this page spending
 * anything per frame to make it happen.
 * ═══════════════════════════════════════════════════════════════════════════
 */

/** Frames a second for the projected stream. */
const FPS = 60;

const PAGE = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>N4TH — OUTPUT</title>
    <style>
      html, body {
        height: 100%;
        margin: 0;
        background: #000;
        overflow: hidden;
      }
      /* The pointer is needed while she is placing the window and is nothing
         but a distraction once it is on the wall, so it follows full screen. */
      body:fullscreen { cursor: none; }
      video {
        width: 100%;
        height: 100%;
        display: block;
        /* Letterboxed rather than cropped: a projector rarely matches the
           window's shape, and losing the edges of a composition is worse
           than black bars. */
        object-fit: contain;
        background: #000;
      }
      #hint {
        position: fixed;
        inset: auto 0 0 0;
        padding: 14px;
        text-align: center;
        color: rgba(255, 255, 255, 0.4);
        font: 12px/1.5 ui-monospace, SFMono-Regular, Menlo, monospace;
        transition: opacity 0.6s;
      }
      /* The hint is for placing the window, never for the wall. It goes the
         moment this is full screen, whether that is in two seconds or two
         minutes — a timer would either rush her or show the audience. */
      body.projecting #hint { opacity: 0; }
    </style>
  </head>
  <body>
    <video id="out" autoplay playsinline muted></video>
    <p id="hint">Drag onto the projector, then press F — or double-click — for full screen</p>
    <script>
      function settle() {
        document.body.classList.toggle('projecting', !!document.fullscreenElement);
      }
      addEventListener('fullscreenchange', settle);
      addEventListener('keydown', function (e) {
        if (e.key.toLowerCase() !== 'f') return;
        if (document.fullscreenElement) document.exitFullscreen();
        else document.documentElement.requestFullscreen().catch(function () {});
      });
      // Double-click is what people try on a video before they try a key.
      addEventListener('dblclick', function () {
        if (document.fullscreenElement) document.exitFullscreen();
        else document.documentElement.requestFullscreen().catch(function () {});
      });
    <\/script>
  </body>
</html>`;

export class OutputWindow {
  private win: Window | null = null;
  private stream: MediaStream | null = null;
  private onClose: () => void;
  private poll = 0;

  constructor(onClose: () => void) {
    this.onClose = onClose;
  }

  get open(): boolean {
    return this.win !== null && !this.win.closed;
  }

  /**
   * Opens the window on a canvas. Returns a reason when it could not, so the
   * caller can say so rather than leaving a button that appears to do nothing
   * — a blocked popup is silent by design.
   */
  show(canvas: HTMLCanvasElement | null): string | null {
    if (this.open) {
      this.win?.focus();
      return null;
    }
    if (!canvas) return 'The visuals are not running yet.';
    if (typeof canvas.captureStream !== 'function') {
      return 'This browser cannot send a canvas to a second window.';
    }

    const win = window.open('', 'n4thvj-output', 'width=1280,height=720');
    if (!win) {
      return 'The browser blocked the window. Allow pop-ups for this page and try again.';
    }

    win.document.open();
    win.document.write(PAGE);
    win.document.close();

    this.win = win;
    this.attach(canvas);

    // A closed window fires nothing reliable across browsers, so it is polled.
    // Twice a second is enough to notice and costs nothing.
    this.poll = window.setInterval(() => {
      if (this.win && this.win.closed) this.close();
    }, 500);
    return null;
  }

  /**
   * Points the window at a canvas, replacing whatever it was showing.
   *
   * Called again when the visible canvas is rebuilt — it is replaced rather
   * than reused when the post pipeline falls back to 2D, and the old stream
   * dies with it, so without this the projector would freeze on its last frame.
   */
  attach(canvas: HTMLCanvasElement | null): void {
    const win = this.win;
    if (!win || win.closed || !canvas) return;
    if (typeof canvas.captureStream !== 'function') return;

    const video = win.document.getElementById('out') as HTMLVideoElement | null;
    if (!video) return;

    for (const track of this.stream?.getTracks() ?? []) track.stop();
    this.stream = canvas.captureStream(FPS);
    video.srcObject = this.stream;
    video.play().catch(() => {
      // Muted autoplay is allowed everywhere this runs; if it is refused the
      // first frame still shows and the next play() attempt succeeds.
    });
  }

  close(): void {
    clearInterval(this.poll);
    this.poll = 0;
    for (const track of this.stream?.getTracks() ?? []) track.stop();
    this.stream = null;
    const win = this.win;
    this.win = null;
    if (win && !win.closed) win.close();
    this.onClose();
  }
}
