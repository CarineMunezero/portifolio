import "../styles/globals.css";
import Link from "next/link";
import { useState } from "react";

function MyApp({ Component, pageProps }) {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div className="page">
      {/* NAVBAR */}
      <header className="site-header">
        <div className="site-header-inner">
          <Link href="/">
            <div className="logo">
              <div className="logo-circle">cm</div>
              <div className="logo-text">Carine Munezero</div>
            </div>
          </Link>

          <nav className="desktop-nav">
            <Link href="/about">About</Link>
            <Link href="/experience">Experience</Link>
            <Link href="/projects">Projects</Link>
          </nav>

          <button
            className="nav-toggle"
            onClick={() => setNavOpen((open) => !open)}
            aria-label="Toggle navigation"
          >
            <span />
          </button>
        </div>

        <nav className={`mobile-nav ${navOpen ? "open" : ""}`}>
          <Link href="/" onClick={() => setNavOpen(false)}>
            Home
          </Link>
          <Link href="/about" onClick={() => setNavOpen(false)}>
            About
          </Link>
          <Link href="/experience" onClick={() => setNavOpen(false)}>
            Experience
          </Link>
          <Link href="/projects" onClick={() => setNavOpen(false)}>
            Projects
          </Link>
        </nav>
      </header>

      {/* PAGE CONTENT */}
      <Component {...pageProps} />

      {/* FOOTER */}
      <footer className="site-footer">
        <div className="site-footer-inner">
          <p>© {new Date().getFullYear()} Carine Munezero. All rights reserved.</p>
          <div className="footer-links">
            <a
              className="footer-link"
              href="https://github.com/CarineMunezero"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              className="footer-link"
              href="https://www.linkedin.com/in/carine-munezero-uwase"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a
              className="footer-link"
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
            >
              Résumé
            </a>
            <a className="footer-link" href="mailto:carinemunezerouwase@gmail.com">
              Let&apos;s connect
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default MyApp;