export type PageName = 'about' | 'instrument' | 'performances';

// Wide ones first, then the upright one; each a different visual.
const WIDE = ['w2', 'w1', 'w3', 'w5'].map((n) => ({ src: `/media/${n}.mp4`, poster: `/media/${n}.jpg` }));
const TALL = ['t2', 't3', 't1'].map((n) => ({ src: `/media/${n}.mp4`, poster: `/media/${n}.jpg` }));

/** The classic pages, over the instrument: it keeps playing behind them. */
export function Pages({ page, onClose, onGo }: { page: PageName; onClose: () => void; onGo: (p: PageName) => void }) {
  return (
    <div className={`page ${page === 'performances' ? 'wide' : ''}`} onClick={onClose}>
      <article onClick={(e) => e.stopPropagation()}>
        <nav className="tabs">
          {(['about', 'instrument', 'performances'] as PageName[]).map((p) => (
            <button key={p} className={p === page ? 'on' : ''} onClick={() => onGo(p)}>{p}</button>
          ))}
          <button className="close" onClick={onClose} aria-label="close"><span className="cl">close </span>×</button>
        </nav>

        {page === 'about' && (
          <section>
            <h2>The machine reads, the hand leads.</h2>
            <p>
              <b>&lt;N4TH&gt;</b> is the visual instrument of Nathalia Cury, a Brazilian art director based in Stuttgart
              for six years. With a background in typography, editorial design and brand identity, she brings a
              designer's eye to the club.
            </p>
            <p>
              She built &lt;N4TH&gt; together with AI, using it as a design partner from the first sketches in Figma Make
              to hand tracking with MediaPipe and real-time graphics in Three.js. The result is a tool that sits between
              graphic design, code and performance.
            </p>
            <p>
              On stage, a camera reads her hands and the music reads the room. Every gesture becomes a move in the
              visuals: a fist gathers, an open palm releases, a clap breaks everything open. She moves between 2D and 3D
              worlds, turns colour palettes live, or lets the system run on its own and evolve with the night.
            </p>
            <h3>Contact</h3>
            <p>
              <a href="mailto:cury.nathalia@gmail.com">cury.nathalia@gmail.com</a><br />
              <a href="https://instagram.com/nathcury" target="_blank" rel="noreferrer">@nathcury</a>
            </p>
          </section>
        )}

        {page === 'instrument' && (
          <section>
            <h2>Built with AI, played by hand.</h2>
            <p>
              The tool runs in a browser. It listens to the music — its kicks, its builds, its silences — and it
              watches the hands. Every visual answers both: the sound gives the pulse, the hand gives the decision.
            </p>
            <ul>
              <li><b>one finger</b> slow · <b>five</b> fast</li>
              <li><b>a fist</b> gathers · <b>an open palm</b> releases</li>
              <li><b>a clap</b> breaks everything open</li>
              <li>the music: pulse, kicks, build-ups, the drop</li>
            </ul>
            <p>
              Every part of it — the visuals, the way they listen, the way they read a gesture — was written in
              conversation with AI. The machine can play on its own, so the performance stays with the question: who leads and who follows?
            </p>
            <figure>
              <img src="/media/instrument.jpg" alt="The instrument: the visuals of the set, layers, effects, the sound and the hands" />
              <figcaption>The instrument as it is played: the set of visuals, the layers, the effects, what it hears.</figcaption>
            </figure>
            <figure>
              <img src="/media/library.jpg" alt="The library of visuals, and the set chosen from it" />
              <figcaption>The library: every visual of the instrument, and below, the set chosen for the night.</figcaption>
            </figure>
          </section>
        )}

        {page === 'performances' && (
          <section>
            <h2>Performances</h2>
            <p className="sub">Stuttgart, November 2026 — Nische at Kultur Bunker. Live with a DJ set.</p>
            <div className="shows wide">
              {WIDE.map((v) => <video key={v.src} src={v.src} poster={v.poster} autoPlay muted loop playsInline disablePictureInPicture disableRemotePlayback />)}
            </div>
            <div className="shows tall">
              {TALL.map((v) => <video key={v.src} src={v.src} poster={v.poster} autoPlay muted loop playsInline disablePictureInPicture disableRemotePlayback />)}
            </div>
          </section>
        )}
      </article>
    </div>
  );
}
