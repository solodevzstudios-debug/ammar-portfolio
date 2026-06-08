// Direction B — Arcade. Neon multicolor, playful, itch.io energy.
function DirArcade() {
  const cards = [
    { t: "Bladefall", chips: ["GAS Combat", "Enemy AI", "Steam"], c: "var(--c1)" },
    { t: "Billion Year War", chips: ["Survival", "Multiplayer"], c: "var(--c2)" },
    { t: "Evil Unleashed", chips: ["Horror", "Mobile"], c: "var(--c4)" },
    { t: "Celestial", chips: ["Immersive", "Worlds"], c: "var(--c5)" },
    { t: "Blair Witch", chips: ["Folklore", "Prototype"], c: "var(--c3)" },
    { t: "ARtistery Haven", chips: ["AR", "Interiors"], c: "var(--c1)" },
  ];
  return (
    <div className="dir-b">
      <div className="grid-bg"></div>
      <nav className="nav">
        <div className="logo"><span className="dot"></span>AMMAR</div>
        <div className="navlinks">
          <a href="#">Work</a>
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Contact</a>
          <a className="studio" href="#">★ The Studio</a>
        </div>
      </nav>

      <header className="hero">
        <div className="badge"><span className="pulse"></span> Available for game projects</div>
        <h1 className="title">I make <span className="g1">games</span><br/>that <span className="g2">hit different</span>.</h1>
        <p className="subline">Unreal Engine developer & 3D artist building combat systems, smart AI and worlds you want to live in. 5 titles shipped — and counting.</p>
        <div className="cta-row">
          <a className="btn btn-fill" href="#">⛶ Play the Work</a>
          <a className="btn btn-ghost" href="#">Meet the Studio</a>
        </div>
      </header>

      <div className="marquee">
        <span>UNREAL ENGINE 5</span><span>•</span><span><b>C++</b></span><span>•</span><span>GAMEPLAY ABILITY SYSTEM</span><span>•</span><span><b>BEHAVIOR TREES</b></span><span>•</span><span>NIAGARA VFX</span><span>•</span><span><b>BLENDER</b></span><span>•</span><span>SUBSTANCE PAINTER</span><span>•</span><span><b>MULTIPLAYER</b></span>
      </div>

      <section className="work">
        <h2>The Arcade</h2>
        <p className="sub">// SELECT A TITLE TO INSERT COIN</p>
        <div className="cards">
          {cards.map((g, i) => (
            <div className="card" key={i}>
              <div className="ph" style={{ backgroundColor: "#120f1d" }}>
                <span className="ph-label">drop cover art — 640×360</span>
              </div>
              <div className="body">
                <div className="gtitle">{g.t}</div>
                <div className="chips">
                  {g.chips.map((c, j) => (
                    <span className="chip" key={j} style={{ color: g.c, border: `1px solid ${g.c}`, background: "rgba(255,255,255,.02)" }}>{c}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
window.DirArcade = DirArcade;
