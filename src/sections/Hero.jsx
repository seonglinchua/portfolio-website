import { ArrowRight } from '@phosphor-icons/react';

export function Hero() {
  return (
    <section className="hero shell" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="eyebrow">01 — Nezha Systems</p>
        <h1 id="hero-title">
          <span className="hero-line">Building Practical</span>
          <span className="hero-line">Digital Systems for a</span>
          <span className="hero-line hero-line--accent">Better Tomorrow.</span>
        </h1>
        <p className="hero-lead">A systems studio creating useful software, reusable knowledge, coherent design foundations, and practical experiments.</p>
        <div className="button-row">
          <a className="button button--primary" href="#work">Explore Work <ArrowRight /></a>
        </div>
      </div>
      <div className="hero-art">
        <img src={`${import.meta.env.BASE_URL}images/hero-systems-architect-transparent.png`} alt="Flat illustration of a systems architect connecting people, data, AI, automation, finance, and cloud services" width="1254" height="1254" fetchPriority="high" />
      </div>
    </section>
  );
}
