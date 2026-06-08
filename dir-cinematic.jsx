// Direction A — Cinematic. Full-bleed YouTube autoplay bg hero (no name) + real project thumbnails.
// Swap HERO_VIDEO_ID with Ammar's own trailer/reel video id.
const HERO_VIDEO_ID = "eRsGyueVLvQ"; // placeholder cinematic loop (Sintel, CC) — replace with real trailer

function ProdCard({ g, feat }) {
  const CardContent = () => (
    <>
      {g.img
        ? <img src={g.img} alt={g.t} />
        : <div className="ph"><span className="ph-label">drop {g.t} key art</span></div>}
      <div className="scrim"></div>
      <span className="ph-tag">{g.tag}</span>
      <div className="meta">
        <div className="gtitle">{g.t}</div>
        <div className="gtags">{g.tags}</div>
      </div>
    </>
  );

  return g.url ? (
    <a href={g.url} target="_blank" rel="noopener noreferrer" className={"pc " + (feat ? "feat" : "small")}>
      <CardContent />
    </a>
  ) : (
    <div className={"pc " + (feat ? "feat" : "small")}>
      <CardContent />
    </div>
  );
}

function DirCinematic() {
  const feature = [
    { t: "Bladefall", img: "media/Bladefall.webp", tags: "GAS Combat · Enemy AI · Niagara VFX", tag: "2023 — Now · Steam", url: "https://store.steampowered.com/app/3066110/Bladefall/" },
    { t: "Malediction: The Lost Villa", img: "media/Malediction.webp", tags: "Horror · Level & Systems Design", tag: "Horror", url: null },
  ];
  const grid = [
    { t: "Celestial", img: "media/Celestial.png", tags: "Sci-Fi · Worldbuilding", tag: "Published", url: "https://alter-learning.com/games/celestial/" },
    { t: "Evil Unleashed", img: "media/EvilUnleashed.jpg", tags: "Horror · Mobile · 3D Art", tag: "Itch.io", url: "https://solodevz.itch.io/evil-unleashed" },
    { t: "Abandoned Desert", img: "media/AbandonedDesert.jpg", tags: "Level Design · Environment Art", tag: "Level Design", url: "https://www.artstation.com/artwork/3qaEzD" },
    { t: "Alien Cosmos", img: "media/AlienCosmos.webp", tags: "Sci-Fi · Multiplayer · Metaverse", tag: "Metaverse", url: "https://www.artstation.com/artwork/gRQ4gZ" },
    { t: "Billion Year War", img: "media/BillionYearWar.jpg", tags: "Survival · Multiplayer", tag: "Itch.io", url: "https://solodevz.itch.io/billion-year-war" },
    { t: "Blair Witch", img: "media/BlairWitch.jpg", tags: "Folklore Horror · Prototype", tag: "ArtStation", url: "https://www.artstation.com/artwork/klzLn6" },
  ];
  return (
    <div className="dir-a">
      <nav className="nav">
        <div className="logo">AMM<b>AR</b></div>
        <div className="navlinks">
          <a href="#">Work</a>
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Contact</a>
          <a className="studio" href="#">The Studio →</a>
        </div>
      </nav>

      <header className="hero">
        <div className="hero-fallback"></div>
        <div className="hero-video">
          <iframe
            src={`https://www.youtube.com/embed/${HERO_VIDEO_ID}?autoplay=1&mute=1&loop=1&playlist=${HERO_VIDEO_ID}&controls=0&showinfo=0&modestbranding=1&playsinline=1&rel=0&disablekb=1`}
            title="hero" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
        </div>
        <div className="hero-grain"></div>
        <div className="hero-scrim"></div>
        <div className="hero-inner">
          <div className="eyebrow">Unreal Engine Game Developer</div>
          <p className="subline">I build cinematic combat, smart enemy AI and immersive worlds in Unreal Engine — from first prototype to shipped game.</p>
        </div>
        <div className="stats">
          <div className="stat"><div className="n">8</div><div className="l">Projects</div></div>
          <div className="stat"><div className="n">8+</div><div className="l">Yrs Since 2017</div></div>
          <div className="stat"><div className="n">UE5</div><div className="l">+ C++ / GAS</div></div>
        </div>
      </header>

      <section className="work">
        <div className="work-head">
          <h2>Products Worked On</h2>
          <div className="idx">01 — 08</div>
        </div>
        <div className="prod-feat">
          {feature.map((g, i) => <ProdCard key={i} g={g} feat={true} />)}
        </div>
        <div className="prod-grid">
          {grid.map((g, i) => <ProdCard key={i} g={g} feat={false} />)}
        </div>
      </section>
    </div>
  );
}
window.DirCinematic = DirCinematic;
