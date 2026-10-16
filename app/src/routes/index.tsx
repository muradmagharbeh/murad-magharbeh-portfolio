import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({ component: Home });

const projects = [
  { title: "Al Mutasaweq Market", place: "Baghdad, Iraq", image: "/assets/projects/al-mutasaweq.png" },
  { title: "Mosque in Cuba", place: "Cuba", image: "/assets/projects/mosque-cuba-board.png" },
  { title: "Modern Villa", place: "UAE", image: "/assets/projects/modern-villa-uae.png" },
  { title: "Velora Villa", place: "KSA", image: "/assets/projects/velora-villa-ksa.png" },
  { title: "Selena Design Interior", place: "Montenegro", image: "/assets/projects/selena-montenegro.png" },
  { title: "Tamkeen Rehabilitation Center", place: "Oman", image: "/assets/projects/tamkeen-oman.png" },
  { title: "Asalah", place: "Amman, Jordan", image: "/assets/projects/asalah-amman.png" },
];

function Home() {
  return (
    <main className="portfolio-site">
      <nav className="site-nav">
        <a className="wordmark" href="#top">MURAD MAGHARBEH</a>
        <div><a href="#work">Work</a><a href="#international-projects">International Projects</a><a href="#local-projects">Local Projects</a><a href="#about">About</a><a href="#contact">Contact</a></div>
      </nav>

      <header className="hero" id="top">
        <img src="/assets/projects/mosque-cuba-hero.jpg" alt="Mosque in Cuba architectural project by Murad Magharbeh" />
        <div className="hero-shade" />
        <div className="hero-copy">
          <p>ARCHITECT · AMMAN, JORDAN</p>
          <h1>MURAD<br/>MAGHARBEH</h1>
          <span>Architecture · Interior Design · Engineering</span>
        </div>
      </header>

      <section className="manifesto">
        <p>Architecture shaped by context, material and detail.</p>
        <h2>Designing spaces with a clear identity, from private residences to commercial, cultural and international projects.</h2>
      </section>

      <section className="work-section" id="work"><div id="international-projects" className="nav-anchor" />
        <div className="section-head"><span>01</span><h2>Selected Work</h2><p>Jordan and international projects</p></div>
        <div className="projects-grid">
          {projects.map((p, i) => (
            <article className={"project-card project-" + (i + 1)} key={p.title}>
              <figure><img loading={i > 1 ? "lazy" : "eager"} src={p.image} alt={p.title + " architectural project"} /></figure>
              <div className="project-meta"><span>{String(i+1).padStart(2,"0")}</span><h3>{p.title}</h3><p>{p.place}</p></div>
            </article>
          ))}
        </div>
        <section id="local-projects" className="local-projects"><div className="section-head"><span>LOCAL PROJECTS</span><p>Selected residential work in Jordan.</p></div><div className="local-projects-grid"><figure><img src="/assets/projects/local-01.jpg" alt="Local residential architecture project by Murad Magharbeh" loading="lazy" /></figure><figure><img src="/assets/projects/local-02.jpg" alt="Local residential architecture project by Murad Magharbeh" loading="lazy" /></figure><figure><img src="/assets/projects/local-03.jpg" alt="Local residential architecture project by Murad Magharbeh" loading="lazy" /></figure><figure><img src="/assets/projects/local-04.jpg" alt="Local residential architecture project by Murad Magharbeh" loading="lazy" /></figure><figure><img src="/assets/projects/local-05.jpg" alt="Local residential architecture project by Murad Magharbeh" loading="lazy" /></figure><figure><img src="/assets/projects/local-06.jpg" alt="Local residential architecture project by Murad Magharbeh" loading="lazy" /></figure><figure><img src="/assets/projects/local-07.jpg" alt="Local residential architecture project by Murad Magharbeh" loading="lazy" /></figure><figure><img src="/assets/projects/local-08.jpg" alt="Local residential architecture project by Murad Magharbeh" loading="lazy" /></figure><figure><img src="/assets/projects/local-09.jpg" alt="Local residential architecture project by Murad Magharbeh" loading="lazy" /></figure><figure><img src="/assets/projects/local-10.jpg" alt="Local residential architecture project by Murad Magharbeh" loading="lazy" /></figure><figure><img src="/assets/projects/local-11.jpg" alt="Local residential architecture project by Murad Magharbeh" loading="lazy" /></figure><figure><img src="/assets/projects/local-12.jpg" alt="Local residential architecture project by Murad Magharbeh" loading="lazy" /></figure><figure><img src="/assets/projects/local-13.jpg" alt="Local residential architecture project by Murad Magharbeh" loading="lazy" /></figure></div></section>
      </section>

      <section className="practice">
        <span>INTERNATIONAL PRACTICE</span>
        <h2>Architecture across cultures, climates and scales.</h2>
        <p>Selected work spans Jordan, Iraq, Oman, the UAE, Saudi Arabia, Montenegro and Cuba, bringing a consistent focus on proportion, material quality and the experience of space.</p>
      </section>

      <section className="about" id="about">
        <div><span>02 · PROFILE</span><h2>Murad<br/>Magharbeh</h2></div>
        <div className="about-copy">
          <p className="lead">Architect and designer based in Amman, Jordan.</p>
          <p>My work moves between architecture, interior design and project development, translating a project's identity into precise spatial and material decisions.</p>
          <dl><div><dt>Base</dt><dd>Amman, Jordan</dd></div><div><dt>Practice</dt><dd>Architecture · Interiors · Engineering</dd></div><div><dt>Reach</dt><dd>Jordan · International</dd></div></dl>
        </div>
      </section>

      <section className="contact" id="contact">
        <span>03 · CONTACT</span>
        <h2>Let’s create something<br/>worth remembering.</h2>
        <p>Available for architectural design, interior design and selected international collaborations.</p>
      </section>

      <footer><strong>MURAD MAGHARBEH</strong><span>Architect · Designer · Project Leader</span><span>Amman, Jordan</span></footer>
    </main>
  );
}
