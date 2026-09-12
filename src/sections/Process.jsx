import { processSteps } from '../data/siteContent';
import { SectionIntro } from '../components/SectionIntro';

export function Process() {
  return (
    <section className="section process-section" id="process">
      <div className="shell">
        <SectionIntro
          eyebrow="04 — How Nezha works"
          title="A system for making systems"
          description="Every project produces more than an output. It creates decisions, patterns, and knowledge the next project can build on."
        />
        <ol className="process-list">
          {processSteps.map(({ title, text, icon: Icon }, index) => (
            <li className={index === processSteps.length - 1 ? 'process-step process-step--reuse' : 'process-step'} key={title}>
              <span className="process-number">{String(index + 1).padStart(2, '0')}</span>
              <Icon weight="duotone" aria-hidden="true" />
              <h3>{title}</h3>
              <p>{text}</p>
            </li>
          ))}
        </ol>
        <p className="process-loop">What gets reused becomes the starting advantage for the next problem.</p>
      </div>
    </section>
  );
}
