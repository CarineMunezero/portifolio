import { useState } from "react";

const photos = [
  {
    src: "/carine-1.jpeg",
    caption: "Speaking about tech, resilience, and community.",
  },
  {
    src: "/carine-2.jpeg",
    caption: "Documenting campus life and student stories.",
  },
  {
    src: "/carine-3.jpeg",
    caption: "Exploring new cities and finding joy in small things.",
  },
  {
    src: "/carine-4.jpeg",
    caption: "Building and presenting projects with amazing teams.",
  },
   {
    src: "/carine-5.jpeg",
    caption: "Exploring new cities and finding joy in small things.",
  },
   {
    src: "/carine-6.jpeg",
    caption: "Exploring new cities and finding joy in small things.",
  },
];

export default function About() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((i) => (i + 1) % photos.length);
  const prev = () => setIndex((i) => (i - 1 + photos.length) % photos.length);

  const current = photos[index];

  return (
    <main className="page-inner">
      {/* Intro block */}
      <section className="section">
        <h1 className="section-title">A Little Bit About Me</h1>
        <p className="section-subtitle">
          I&apos;m a developer, student, and forever-in-progress problem solver.
        </p>
        <div className="timeline-line"></div>

        <div className="about-layout">
          <div className="about-text">
            <p>
              I was born and raised in Rwanda, and eventually moved to the
              United States on my own. Today I&apos;m studying Computer Science
              with a Minor in Innovation &amp; Creativity at Gannon University.
              That basically means I build things, ask a lot of questions, and
              think deeply about how people experience technology.
            </p>

            <p>
              I&apos;ve completed three internships across{" "}
              <span className="about-highlight">
                quantitative research, software engineering, and product
                management
              </span>{" "}
              and I&apos;ve also spent several years working as an integrated
              marketing influencer for my university. I like tech that has real
              impact: tools that help teams make better decisions, products that
              feel inclusive, and systems that respect human limits.
            </p>

            <p>
              Outside of titles and roles, I really value community and
              advocacy. I&apos;ve led student organizations, represented my peers
              in university spaces, and helped build programs that open doors
              for underrepresented students in tech. I&apos;m usually either
              building something, helping someone, or planning the next idea in a
              Notion board.
            </p>
          </div>

          {/* Photo slider */}
          <aside className="photo-slider">
            <div className="photo-frame">
              <img src={current.src} alt={current.caption} />
            </div>
            <p className="photo-caption">{current.caption}</p>
            <div className="photo-controls">
              <button className="photo-arrow-btn" onClick={prev}>
                {"<"}
              </button>
              <div className="photo-dot-row">
                {photos.map((_, i) => (
                  <div
                    key={i}
                    className={`photo-dot ${i === index ? "active" : ""}`}
                  />
                ))}
              </div>
              <button className="photo-arrow-btn" onClick={next}>
                {">"}
              </button>
            </div>
          </aside>
        </div>
      </section>

      {/* Four cards section */}
      <section className="section about-cards">
        <div className="section-subtitle">
          A few themes that have shaped how I show up in the world.
        </div>

        <div className="card-grid">
          <article className="card">
            <p className="card-tag">Resilience</p>
            <h3 className="card-title">Saying yes to opportunity</h3>
            <p className="card-body">
              I came to the U.S. by myself and learned how to navigate school,
              immigration, and life far from home. I&apos;ve said yes to research
              fellowships, leadership roles, conferences, and hard classes even
              when they felt intimidating. That resilience shows up in how I
              debug, how I lead, and how I keep moving when the path isn&apos;t
              perfectly clear.
            </p>
          </article>

          <article className="card">
            <p className="card-tag">Photography</p>
            <h3 className="card-title">Capturing real student stories</h3>
            <p className="card-body">
              As an integrated marketing influencer, I documented dozens of
              events, took photos for digital campaigns, and helped launch a
              responsive web magazine edition. I love using visuals to make
              students feel seen – whether it&apos;s move-in day energy,
              graduation joy, or a quiet moment in the chapel.
            </p>
          </article>

          <article className="card">
            <p className="card-tag">Storytelling</p>
            <h3 className="card-title">Writing that centers people</h3>
            <p className="card-body">
              I enjoy creative writing and long-form storytelling. Some of my
              favorite pieces came from reflecting on our Alternative Break
              Service Trip, where I wrote about community, faith, and justice
              work. Those stories remind me that engineering decisions always
              have human consequences.
            </p>
          </article>

          <article className="card">
            <p className="card-tag">Outside of coding</p>
            <h3 className="card-title">Playlists, hikes, and small joys</h3>
            <p className="card-body">
              Outside of software development you&apos;ll usually find me
              listening to Afrobeats and gospel, planning a hike, or watching
              something cozy. I like finding joy in little things – a good
              smoothie, a sunset walk, or a deep conversation with friends.
            </p>
          </article>
        </div>
      </section>

      {/* Milestones timeline */}
      <section className="section timeline">
        <div className="timeline-header">
          <h2 className="section-title">Milestones</h2>
          <p className="section-subtitle">
            A few moments that made this journey feel very real.
          </p>
        </div>
        <div className="timeline-line"></div>

        <ul className="timeline-list">
          <li className="timeline-item">
            <div className="timeline-bullet" />
            <div className="timeline-card">
              <div className="timeline-title">
                Harvard WeCode – Selected Fellow
              </div>
              <div className="timeline-meta">Spring 2024</div>
              <div className="timeline-body">
                Joined hundreds of women in tech to learn, network, and build
                alongside engineers across the industry.
              </div>
            </div>
          </li>

          <li className="timeline-item">
            <div className="timeline-bullet" />
            <div className="timeline-card">
              <div className="timeline-title">PwC Externship</div>
              <div className="timeline-meta">Spring 2025</div>
              <div className="timeline-body">
                Explored how technology, data, and consulting intersect, and
                learned how teams think about risk, clients, and long-term
                impact.
              </div>
            </div>
          </li>

          <li className="timeline-item">
            <div className="timeline-bullet" />
            <div className="timeline-card">
              <div className="timeline-title">
                ColorStack @ Gannon – Founder &amp; President
              </div>
              <div className="timeline-meta">2023 – Present</div>
              <div className="timeline-body">
                Started and led a chapter focused on supporting Black and Latinx
                students in computing, hosting events and building community for
                underrepresented students in tech.
              </div>
            </div>
          </li>

          <li className="timeline-item">
            <div className="timeline-bullet" />
            <div className="timeline-card">
              <div className="timeline-title">
                Student Representation &amp; Service
              </div>
              <div className="timeline-meta">Ongoing</div>
              <div className="timeline-body">
                Served on technology advisory committees and in student
                leadership roles, while also participating in an Alternative
                Break Service Trip that deepened my commitment to justice and
                accessibility.
              </div>
            </div>
          </li>
        </ul>
      </section>
    </main>
  );
}

