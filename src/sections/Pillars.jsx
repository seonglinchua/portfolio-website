import { pillars } from '../data/siteContent';
import { SectionIntro } from '../components/SectionIntro';

export function Pillars() {
  return (
    <section className="section section--border pillars-section" id="pillars">
      <div className="shell">
        <SectionIntro
          eyebrow="02 — Four pillars"
          title="One ecosystem. Four ways to create value."
          description="The work is broad, but the model is simple: build useful things, share what we learn, design for consistency, and keep exploring."
        />
        <div className="pillar-grid">
          {pillars.map(({ id, number, title, strapline, text, icon: Icon }) => (
            <article className="pillar" id={id} key={title}>
              <div className="pillar-heading">
                <span>{number}</span>
                <Icon weight="duotone" aria-hidden="true" />
              </div>
              <h3>{title}</h3>
              <p className="pillar-strapline">{strapline}</p>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
