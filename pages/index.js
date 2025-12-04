import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero-inner">
          <h1 className="hero-title">
            Hi! I&apos;m <span className="hero-highlight">Carine Munezero.</span>
          </h1>
          <p className="hero-body">
            Building tech with purpose, advocating for equity, and bridging the
            gap between ideas and impact. Learn even{" "}
            <Link href="/about">more about me</Link>.
          </p>
          <p className="hero-curious">Curious about my experience?</p>
          <div className="hero-cta-row">
            <Link href="/projects">
              <button className="btn-pill-primary">See my projects</button>
            </Link>
            <Link href="/experience">
              <button className="btn-pill-ghost">View my experience</button>
            </Link>
          </div>
        </div>
      </section>

      {/* SIMPLE INTRO CARDS */}
      <main className="page-inner">
        <section className="section">
          <div className="section-subtitle">
            Here&apos;s a quick snapshot of who I am before you dive into the
            details.
          </div>

          <div className="card-grid">
            <article className="card card-soft">
              <p className="card-tag">Rooted Story</p>
              <h3 className="card-title">From Rwanda to building a life in tech</h3>
              <p className="card-body">
                I was born and raised in Rwanda, and moved to the U.S. on my own.
                I&apos;m now studying Computer Science with a Minor in Innovation
                &amp; Creativity at Gannon University, using each opportunity to
                design a future where tech feels more human.
              </p>
            </article>

            <article className="card">
              <p className="card-tag">Internships</p>
              <h3 className="card-title">Three internships, many perspectives</h3>
              <p className="card-body">
                I&apos;ve worked across quantitative research at Man Group,
                software engineering and observability at Microsoft, and product
                management on the M365 team, plus marketing &amp; communications
                on campus. Each role taught me something new about people,
                systems, and impact.
              </p>
            </article>

            <article className="card">
              <p className="card-tag">What I care about</p>
              <h3 className="card-title">Empathy, access, and possibility</h3>
              <p className="card-body">
                Whether I&apos;m designing a cognitive load system, mentoring
                students, or planning events, I&apos;m driven by the question:
                &quot;How can this make someone else&apos;s life easier, safer,
                or more joyful?&quot;
              </p>
            </article>
          </div>
        </section>
      </main>
    </>
  );
}
