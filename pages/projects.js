export default function Projects() {
  return (
    <main className="page-inner">
      <section className="section">
        <h1 className="section-title">Projects</h1>
        <p className="section-subtitle">
          The whole reason I build things is not just to learn new technologies,
          but to help people and make their lives easier through technology. A
          few projects that reflect that goal:
        </p>

        {/* Cognisense */}
        <article className="project-card">
          <div className="project-header">
            <div>
              <div className="project-title">Cognisense</div>
              <div className="project-org">
                Cognitive Load Measurement System · Lockheed-sponsored capstone
              </div>
            </div>
            <div className="timeline-meta">2024 – 2025</div>
          </div>
          <p className="project-body">
            Led a multidisciplinary team to design and implement a system that
            measures cognitive load using EEG signals, facial emotion
            recognition, gameplay, and NASA-TLX surveys. I owned full-stack
            integrations, real-time data pipelines, and system performance,
            improving responsiveness and measurement precision.
          </p>
          <div className="tag-row">
            <span className="tech-tag">Next.js</span>
            <span className="tech-tag">Firebase</span>
            <span className="tech-tag">Face API</span>
            <span className="tech-tag">LabStreamingLayer</span>
            <span className="tech-tag">Python</span>
          </div>
        </article>

        {/* Broker / LLM workflow */}
        <article className="project-card">
          <div className="project-header">
            <div>
              <div className="project-title">Broker Insight LLM Workflow</div>
              <div className="project-org">Man Group · Research project</div>
            </div>
            <div className="timeline-meta">Summer 2025</div>
          </div>
          <p className="project-body">
            Built an end-to-end workflow that uses LLMs to analyze unstructured
            broker reports and convert them into structured investment signals.
            The pipeline scales across thousands of documents and significantly
            improved automation compared to a previous NLP approach.
          </p>
          <div className="tag-row">
            <span className="tech-tag">Python</span>
            <span className="tech-tag">LLMs</span>
            <span className="tech-tag">Spark</span>
            <span className="tech-tag">Airflow</span>
          </div>
        </article>

        {/* Drip Doctor */}
        <article className="project-card">
          <div className="project-header">
            <div>
              <div className="project-title">Drip Doctor</div>
              <div className="project-org">
                Microsoft New Technologists · Team project
              </div>
            </div>
            <div className="timeline-meta">Summer 2023</div>
          </div>
          <p className="project-body">
            An AR-powered wardrobe assistant that uses the OpenAI API and React
            to generate personalized outfit recommendations for young
            professionals. Our goal was simple: help people feel confident
            before they step out the door.
          </p>
          <div className="tag-row">
            <span className="tech-tag">React</span>
            <span className="tech-tag">OpenAI API</span>
            <span className="tech-tag">Figma</span>
          </div>
        </article>

        {/* Fraud detection */}
        <article className="project-card">
          <div className="project-header">
            <div>
              <div className="project-title">Credit Card Fraud Detection</div>
              <div className="project-org">Class project · Security &amp; ML</div>
            </div>
            <div className="timeline-meta">2024</div>
          </div>
          <p className="project-body">
            Evaluated multiple machine learning models for detecting credit card
            fraud, including logistic regression and neural networks. Tuned
            models with metrics like precision, recall, and F1-score to reduce
            false positives while keeping high accuracy.
          </p>
          <div className="tag-row">
            <span className="tech-tag">Python</span>
            <span className="tech-tag">ML</span>
            <span className="tech-tag">TensorFlow / Keras</span>
          </div>
        </article>
      </section>
    </main>
  );
}

