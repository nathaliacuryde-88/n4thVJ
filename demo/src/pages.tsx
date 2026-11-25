export type PageName = 'about' | 'instrument' | 'performances' | 'contact';

const SHOWS = [1, 2, 3, 4].map((i) => ({ src: `./media/show-${i}.mp4`, poster: `./media/show-${i}.jpg` }));

/** The classic pages, over the instrument: it keeps playing behind them. */
export function Pages({ page, onClose, onGo }: { page: PageName; onClose: () => void; onGo: (p: PageName) => void }) {
  return (
    <div className="page" onClick={onClose}>
      <article onClick={(e) => e.stopPropagation()}>
        <nav className="tabs">
          {(['about', 'instrument', 'performances', 'contact'] as PageName[]).map((p) => (
            <button key={p} className={p === page ? 'on' : ''} onClick={() => onGo(p)}>{p}</button>
          ))}
          <button className="close" onClick={onClose}>close ×</button>
        </nav>

        {page === 'about' && (
          <section>
            <h2>The machine reads, the hand leads.</h2>
            <p>
              n4th plays visuals like an instrument. The instrument was built in conversation with AI:
              a visual tool designed and coded together with it, and played live with the hands.
            </p>
            <p>
              A camera reads the hands — speed in the fingers, a fist that gathers, an open palm that releases,
              a clap that breaks everything open — while the music sets the pulse. The visuals are not clips:
              they are played.
            </p>
            <p className="todo">[ bio — to come ]</p>
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
              conversation with AI. That is the question the performance stays with: who is listening to whom?
            </p>
          </section>
        )}

        {page === 'performances' && (
          <section>
            <h2>Performances</h2>
            <p className="sub">Stuttgart, November 2026 — live with a DJ set.</p>
            <div className="shows">
              {SHOWS.map((s) => (
                <video key={s.src} src={s.src} poster={s.poster} controls playsInline preload="none" />
              ))}
            </div>
          </section>
        )}

        {page === 'contact' && (
          <section>
            <h2>Contact</h2>
            <p className="todo">[ email / instagram — to come ]</p>
          </section>
        )}
      </article>
    </div>
  );
}
