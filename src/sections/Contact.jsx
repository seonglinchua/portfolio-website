import { ArrowRight } from '@phosphor-icons/react';

export function Contact() {
  return (
    <section className="section contact-section" id="contact">
      <div className="shell contact-grid">
        <div>
          <p className="eyebrow">08 — Start a conversation</p>
          <h2>Have a problem worth building?</h2>
        </div>
        <div>
          <p>Bring the problem, constraints, and ambition. We’ll define the smallest useful system that can create lasting value.</p>
          <a className="button button--primary" href="mailto:seonglinchua@gmail.com">Let’s talk <ArrowRight /></a>
          <a className="contact-email" href="mailto:seonglinchua@gmail.com">seonglinchua@gmail.com</a>
        </div>
      </div>
    </section>
  );
}
