export default function Experience() {
  return (
    <main className="page-inner">
      <section className="section">
        <h1 className="section-title">My Experience</h1>
        <p className="section-subtitle">
          In the professional world, I&apos;ve worked in small, medium, and large
          settings and collaborated with teams across research, engineering,
          marketing, and product. Along the way I&apos;ve learned when to pivot,
          how to communicate clearly, and how to build trust with the people I
          work with.
        </p>

        {/* three intro cards */}
        <div className="card-grid">
          <article className="card card-soft">
            <p className="card-tag">Minor in Innovation &amp; Creativity</p>
            <h3 className="card-title">Design thinking in practice</h3>
            <p className="card-body">
              Through my minor I explored design thinking, storytelling, and
              creative problem-solving. Classes were hands-on: we prototyped,
              workshopped ideas, critiqued each other&apos;s work, and practiced
              communicating complex ideas in simple, human language.
            </p>
          </article>

          <article className="card">
            <p className="card-tag">Languages &amp; stacks</p>
            <h3 className="card-title">From web apps to data pipelines</h3>
            <p className="card-body">
              I&apos;ve worked with Python, Java, JavaScript/React/Next.js, C#,
              C++, SQL, HTML/CSS, and tools like Azure, Firebase, Spark, and
              Apache Airflow. I like moving across the stack – from data and
              APIs to the UI where users actually feel the impact.
            </p>
          </article>

          <article className="card">
            <p className="card-tag">Startup energy</p>
            <h3 className="card-title">An idea I&apos;m dreaming about</h3>
            <p className="card-body">
              I&apos;m exploring a startup concept that centers students
              navigating cognitive load, mental health, and productivity. It
              pulls together what I&apos;ve learned from my cognitive load
              research, internships, and community work – and it&apos;s something
              I&apos;d love to grow over time.
            </p>
          </article>
        </div>
      </section>

      {/* Detailed experience cards */}
      <section className="section">
        <h2 className="section-title">Professional roles</h2>

        <article className="experience-card">
          <div className="experience-header">
            <div>
              <div className="experience-title">
                Quantitative Research Intern
              </div>
              <div className="experience-org">Man Group · Man Numeric</div>
            </div>
            <div className="timeline-meta">Summer 2025 · Boston, MA</div>
          </div>
          <p className="experience-body">
            Designed and implemented an LLM workflow to turn qualitative broker
            reports into structured investment signals, generating new alpha and
            reducing manual review. I then automated the pipeline with Spark and
            Airflow, cutting processing time and collaborating closely with
            research and portfolio teams.
          </p>
          <div className="tag-row">
            <span className="tech-tag">Python</span>
            <span className="tech-tag">LLMs</span>
            <span className="tech-tag">Spark</span>
            <span className="tech-tag">Apache Airflow</span>
            <span className="tech-tag">Quant research</span>
          </div>
        </article>

        <article className="experience-card">
          <div className="experience-header">
            <div>
              <div className="experience-title">
                Software Engineering Intern – Observability Intelligence
              </div>
              <div className="experience-org">Microsoft</div>
            </div>
            <div className="timeline-meta">Summer 2024 · Redmond, WA</div>
          </div>
          <p className="experience-body">
            Engineered an automated system that streamlined remediation of
            non-compliant pull requests across 200+ teams using Kusto, Azure
            DevOps APIs, and Python. I also led product research for the Hera
            Compliance Viewer, running syncs and presenting findings to
            stakeholders.
          </p>
          <div className="tag-row">
            <span className="tech-tag">Python</span>
            <span className="tech-tag">Azure DevOps</span>
            <span className="tech-tag">Kusto</span>
            <span className="tech-tag">Automation</span>
          </div>
        </article>

        <article className="experience-card">
          <div className="experience-header">
            <div>
              <div className="experience-title">
                Product Management Intern – M365 Core
              </div>
              <div className="experience-org">
                Microsoft · New Technologists Program
              </div>
            </div>
            <div className="timeline-meta">Summer 2023 · Redmond, WA</div>
          </div>
          <p className="experience-body">
            Co-created Drip Doctor, an AR-powered wardrobe assistant using the
            OpenAI API and React. I coordinated a team of five, led standups,
            facilitated conflict resolution, and made sure we shipped a product
            that made users feel more confident.
          </p>
          <div className="tag-row">
            <span className="tech-tag">Product management</span>
            <span className="tech-tag">React</span>
            <span className="tech-tag">OpenAI API</span>
            <span className="tech-tag">Figma</span>
          </div>
        </article>

        <article className="experience-card">
          <div className="experience-header">
            <div>
              <div className="experience-title">
                Integrated Marketing Influencer
              </div>
              <div className="experience-org">
                Gannon Marketing &amp; Communication
              </div>
            </div>
            <div className="timeline-meta">2022 – Present · Erie, PA</div>
          </div>
          <p className="experience-body">
            Designed and launched a responsive online magazine edition, managed
            Edge Media&apos;s website and social channels, and covered many
            campus events. This role sharpened my storytelling, user empathy,
            and comfort with shipping content on a regular cadence.
          </p>
          <div className="tag-row">
            <span className="tech-tag">Content strategy</span>
            <span className="tech-tag">Photography</span>
            <span className="tech-tag">Web publishing</span>
          </div>
        </article>
      </section>
    </main>
  );
}

