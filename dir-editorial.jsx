// Direction C — Editorial Studio. Refined, magazine-like, for publishers/investors.
function DirEditorial() {
  const rows = [
    { n: "01", t: "Bladefall", d: "Core combat built from scratch with the Gameplay Ability System; enemy AI via Behavior & State Trees.", y: "2023 — Now" },
    { n: "02", t: "Billion Year War", d: "Complete survival multiplayer title — concept to deployment. UE5, Blender, Substance.", y: "2022 — 23" },
    { n: "03", t: "Evil Unleashed", d: "Full horror mobile game, owned end-to-end including 3D asset creation and design.", y: "2018 — 20" },
    { n: "04", t: "Celestial", d: "Immersive worldbuilding and gameplay systems for a published title.", y: "Published" },
    { n: "05", t: "Blair Witch", d: "Folklore horror prototype — game-ready assets, enemy AI, level & lighting design.", y: "Prototype" },
  ];
  return (
    <div className="dir-c">
      <nav className="nav">
        <div className="logo">Muhammad Ammar</div>
        <div className="navlinks">
          <a href="#">Work</a>
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Contact</a>
          <a className="studio" href="#">Studio</a>
        </div>
      </nav>

      <header className="hero">
        <div className="left">
          <div className="meta-num">Unreal Engine Developer — Est. 2017 — Karachi, PK</div>
          <h1 className="title">Worlds, systems &amp; <em>stories</em> built in Unreal Engine.</h1>
        </div>
        <div className="right">
          <p>Gameplay programmer and 3D generalist crafting combat, AI and immersive environments. I take games from the first grey-box prototype all the way to a shipped, optimized title.</p>
          <div className="sig">5 titles · C++ / GAS · Blender + Substance</div>
        </div>
      </header>

      <div className="filmstrip">
        <div className="ph"><span className="ph-label">still 01</span></div>
        <div className="ph"><span className="ph-label">still 02</span></div>
        <div className="ph"><span className="ph-label">still 03</span></div>
        <div className="ph"><span className="ph-label">still 04</span></div>
      </div>

      <section className="work">
        <div className="work-head">
          <h2>Selected Work</h2>
          <div className="lbl">Index · 2018 — 2026</div>
        </div>
        <div className="rows">
          {rows.map((r, i) => (
            <div className="row" key={i}>
              <div className="rn">{r.n}</div>
              <div className="rt">{r.t}</div>
              <div className="rd">{r.d}</div>
              <div className="ry">{r.y}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
window.DirEditorial = DirEditorial;
