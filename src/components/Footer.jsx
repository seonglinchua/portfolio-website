import { BrandMark } from './BrandMark';

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-main">
        <div className="footer-brand">
          <BrandMark />
          <p>Building practical digital systems and reusable knowledge for a better tomorrow.</p>
        </div>

        <nav className="footer-group" aria-labelledby="footer-explore-title">
          <h2 id="footer-explore-title">Explore</h2>
          <ul>
            <li><a href="#build">Build</a></li>
            <li><a href="#pillar-knowledge">Knowledge</a></li>
            <li><a href="#design">Design</a></li>
            <li><a href="#pillar-lab">Lab</a></li>
            <li><a href="#about">About</a></li>
          </ul>
        </nav>
        <nav className="footer-group" aria-labelledby="footer-connect-title">
          <h2 id="footer-connect-title">Connect</h2>
          <ul>
            <li><a href="#contact">Contact</a></li>
            <li><a href="mailto:seonglinchua@gmail.com">Email</a></li>
            <li><a href="https://linkedin.com/in/jinchua" target="_blank" rel="noreferrer">LinkedIn<span className="visually-hidden"> (opens in a new tab)</span></a></li>
            <li><a href="https://github.com/jinchua" target="_blank" rel="noreferrer">GitHub<span className="visually-hidden"> (opens in a new tab)</span></a></li>
          </ul>
        </nav>
      </div>

      <div className="shell footer-bottom">
        <p>Nezha Systems <span aria-hidden="true">×</span> Build By Rat <span aria-hidden="true">·</span> Singapore</p>
        <p>© {new Date().getFullYear()} Nezha Systems. All rights reserved.</p>
      </div>
    </footer>
  );
}
