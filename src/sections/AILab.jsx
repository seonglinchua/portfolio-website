import { ArrowRight } from '@phosphor-icons/react';
import { labExplorations } from '../data/siteContent';
import { SectionIntro } from '../components/SectionIntro';

export function AILab() {
  return (
    <section className="section lab-section" id="lab">
      <div className="shell">
        <SectionIntro
          eyebrow="06 — From the lab"
          title="What’s being explored?"
          description="The Lab tests early-stage tools and workflows before they are ready to become products, systems, or reusable knowledge."
        />
        <div className="lab-grid">
          <div className="lab-statement">
            <p>Current question</p>
            <h3>How can agents and new interfaces shorten the path from idea to working system?</h3>
            <a className="text-link" href="mailto:seonglinchua@gmail.com?subject=Nezha%20Systems%20Lab">Collaborate with the lab <ArrowRight /></a>
          </div>
          <ul>
            {labExplorations.map(({ title, icon: Icon }, index) => (
              <li key={title}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <Icon weight="duotone" aria-hidden="true" />
                <strong>{title}</strong>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
