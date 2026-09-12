# Nezha Systems Website Review

## Audit scope

- Surface: Nezha Systems single-page portfolio homepage
- User goal: understand Jin Chua's positioning, evaluate his work and thinking, and find a credible next action
- Accessibility target: strong keyboard, responsive, contrast, semantic, and reduced-motion foundations; this is not a claim of full WCAG conformance
- Evidence captured: desktop light, desktop dark, mobile full page, and mobile navigation at 1440 × 1024 and 390 × 844

## Steps

1. **Land on the homepage — Healthy with minor positioning gaps**
   - The headline, flat illustration, and two calls to action establish the AI/enterprise direction immediately.
   - The serif/sans pairing and restrained palette feel differentiated and professional.
   - The hero describes what Jin builds, but not yet the strongest proof of why a visitor should trust Nezha Systems.

2. **Understand the journey — Healthy**
   - The five-stage narrative is easy to follow and turns career history into an evolution story.
   - Desktop scanning is strong; mobile reflow is readable and avoids horizontal overflow.
   - The section would be stronger with one verifiable outcome or named system attached to each major chapter.

3. **Review featured work — Needs improvement**
   - The KYC case-study framing, outcome list, and technology tags are clear.
   - The generated project illustration contains tiny pseudo-labels and an inconsistent process sequence. At large sizes, this weakens credibility.
   - “Discuss the case study” goes to the contact section instead of opening an actual case study, so the action does not match its promise.

4. **Explore the AI Lab — Needs improvement**
   - The dark band creates a useful visual pause and communicates current experimentation succinctly.
   - It reads as a teaser rather than a usable lab: there are no experiments, status indicators, findings, demos, or notes to inspect.
   - The collaboration link opens email, which is functional, but visitors cannot evaluate the work first.

5. **Browse the knowledge library — Needs improvement**
   - The editorial cards and purpose-built cover illustrations establish a coherent publishing system.
   - The article cards are not links and “Join the knowledge journey” sends visitors to contact. This creates a dead-end where users expect reading material.
   - Article metadata is clear and the mobile layout remains legible.

6. **Open mobile navigation — Healthy with accessibility follow-up**
   - The menu opens cleanly, preserves large targets, and closes after selecting Work.
   - The page has no horizontal overflow and no console errors.
   - Keyboard focus containment, Escape-to-close behavior, and focus restoration still require implementation and assistive-technology testing.

7. **Contact or download resume — Needs improvement**
   - Email, LinkedIn, and GitHub are discoverable and functional.
   - The resume downloads as Markdown rather than a polished PDF, which feels unfinished for recruiters and clients.
   - The contact section could reduce uncertainty with a short availability statement, expected response time, or preferred project types.

## Strengths

- Clear, differentiated Nezha Systems identity rather than a generic developer portfolio.
- Cohesive flat-illustration direction across hero, case study, and knowledge covers.
- Strong responsive reflow with no horizontal overflow at 390px.
- Semantic sections, visible focus styles, skip link, reduced-motion support, useful alternative text, and accessible button sizing.
- Working dark theme, mobile navigation, anchor navigation, download control, and contact links.
- No browser console errors in the audited states.

## Highest-impact findings

1. **[P1] Primary content promises are not fulfilled.** Case-study and knowledge actions do not lead to case studies or articles. Build one real case-study detail view and one real article before presenting these as browsable systems.
2. **[P1] Resume format reduces credibility.** Replace the Markdown download with a designed, accessible PDF and optionally an HTML resume page.
3. **[P1] Project illustration has generated pseudo-text.** Replace it with a text-free flat illustration or a real, intentionally designed product screen with readable labels.
4. **[P2] Trust proof is thin.** Add concrete outcomes, client-safe metrics, delivery principles, or anonymized system scale near the hero and featured project.
5. **[P2] Brand mark feels provisional.** The current letterform is clean but generic; create a real Nezha Systems logo asset and use it consistently for favicon, social sharing, and footer.
6. **[P2] Dark mode does not fully art-direct the illustrations.** White-background artwork becomes a bright island against the dark surface. Supply dark variants or frame the images intentionally.
7. **[P2] Mobile menu needs complete dialog-like keyboard behavior.** Add Escape-to-close, focus restoration, and either focus containment or a non-modal disclosure pattern with clear state announcement.

## Evidence limits

- Screenshots support layout, hierarchy, visual quality, responsive reflow, and visible-state findings.
- Automated interaction checks confirmed navigation behavior, viewport width, and absence of console errors.
- Screen-reader announcements, full keyboard order, zoom at 200–400%, real download quality, external-link destinations, color contrast under every theme/state, and network performance need dedicated testing.

## Recommended order

1. Ship a proper PDF resume.
2. Turn the featured project into a real case study and correct its illustration.
3. Publish one real knowledge article and link every card honestly.
4. Add concrete proof near the hero.
5. Finish mobile-menu keyboard behavior and dark-mode asset treatment.
6. Refine the logo and social metadata assets.
