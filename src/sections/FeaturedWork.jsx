import { selectedWorks } from '../data/siteContent';
import { SectionIntro } from '../components/SectionIntro';

export function FeaturedWork() {
  return (
    <section className="section work-section" id="work">
      <div className="shell">
        <SectionIntro
          eyebrow="03 — Selected work"
          title="A few systems worth seeing"
          description="Four artifacts across the ecosystem—selected for what they solve, teach, standardize, or make possible."
        />
        <div className="selected-work-layout">
          {selectedWorks.slice(0, 1).map(({ title, subtitle, pillar, description, icon: Icon }) => (
            <article className="selected-work selected-work--lead" key={title}>
              <div className="selected-work-meta">
                <span>{pillar}</span>
                <span>Lead project</span>
              </div>
              <Icon weight="duotone" aria-hidden="true" />
              <h3>{title}</h3>
              <p className="selected-work-subtitle">{subtitle}</p>
              <p>{description}</p>
            </article>
          ))}
          <div className="selected-work-supporting">
            {selectedWorks.slice(1).map(({ title, subtitle, pillar, description, icon: Icon }, index) => (
              <article className="selected-work" key={title}>
                <div className="selected-work-meta">
                  <span>{pillar}</span>
                  <span>{String(index + 2).padStart(2, '0')}</span>
                </div>
                <Icon weight="duotone" aria-hidden="true" />
                <h3>{title}</h3>
                <p className="selected-work-subtitle">{subtitle}</p>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
