# Nezha Systems — Section-by-Section Review

## Scope and evidence

- Reviewed the live homepage at 1440 × 1024 and 390 × 844.
- Captured isolated desktop and mobile screenshots for the hero, journey, featured work, AI Lab, knowledge library, contact section, and footer.
- Also tested the sticky header, theme toggle, mobile navigation, anchor navigation, viewport overflow, and browser console.
- Screenshot evidence: `docs/reviews/evidence/sections/`.

## 1. Header and navigation — Healthy with follow-up work

### What works

- Compact desktop navigation keeps attention on the content.
- Sticky positioning, clear labels, and large mobile targets make navigation easy to use.
- Mobile menu opens clearly and closes after a navigation choice.
- Theme switching works and persists.

### Issues

- **P2 — The logo looks provisional.** The clipped “N” is readable but does not yet feel like a durable identity for a studio brand.
- **P2 — No active-section state.** Visitors cannot see where they are while moving through the long page.
- **P2 — Mobile keyboard behavior is incomplete.** Escape-to-close, focus restoration, and focus containment were not implemented.
- **P3 — Contact has the same emphasis as every navigation item.** A subtle CTA treatment would make the conversion path clearer.

### Recommendation

Create a real logo asset and favicon, add `aria-current` based on the visible section, and complete keyboard behavior for the mobile menu.

## 2. Hero — Strong visual direction, incomplete proof

### What works

- The headline communicates the AI/enterprise position immediately.
- Newsreader and DM Sans create a distinct editorial voice without feeling decorative.
- The flat illustration matches the Nezha Systems premise and is much more memorable than a generic portrait.
- Primary and secondary actions remain clear on desktop and mobile.
- The mobile composition reflows cleanly without horizontal overflow.

### Issues

- **P1 — “Download Resume” delivers Markdown.** That format feels unfinished for recruiters and clients.
- **P2 — The hero is assertion-heavy.** There is no supporting proof such as years of experience, systems delivered, industries served, or an anonymized outcome.
- **P2 — The desktop headline is close to overpowering the illustration.** Its scale gives the hero energy, but the last two lines push hard into the art column.
- **P3 — The mobile eyebrow is long and visually small.** It feels more like metadata than a useful introduction.

### Recommendation

Add a compact credibility line below the CTAs, ship a polished PDF resume, and reduce the desktop headline by roughly 5–8% or slightly widen its column.

## 3. Journey — Clear story, too little evidence

### What works

- The section reframes career history as an evolution rather than a résumé timeline.
- Desktop sequencing is easy to scan, with restrained icons and connective arrows.
- Mobile retains the correct reading order and generous spacing.
- Each milestone uses outcome-oriented language.

### Issues

- **P1 — The timeline does not match the supplied story.** The brief calls for 2026 “AI + Design Systems”; the implementation ends at 2025 and then “Future.”
- **P2 — Milestones lack proof.** They describe evolution but do not connect to named projects, measurable outcomes, or artifacts.
- **P2 — Mobile is too vertically loose.** The large gap between milestone blocks makes this one section disproportionately long.
- **P3 — “Future” is vague.** A concrete Nezha Systems founding year or launch phase would feel more credible.

### Recommendation

Restore the 2026 milestone, attach one evidence link or outcome to key milestones, and reduce mobile milestone spacing by about 20–25%.

## 4. Featured work — Highest-priority section to fix

### What works

- The problem statement, outcomes, and technology tags establish a useful case-study anatomy.
- The left/right desktop layout creates a clear reading path.
- Mobile keeps the narrative before the illustration.

### Issues

- **P0 if fictional / P1 if anonymized — Project truth is unclear.** “AI-Powered KYC Automation Platform” was not among the projects supplied in the brief. It must not be presented as delivered work unless it is real or clearly labelled as a concept.
- **P1 — The illustration is vertically distorted.** Responsive styles constrain width but preserve the HTML height attribute. This stretches the image on desktop and especially mobile.
- **P1 — Generated labels reduce trust.** Several labels are malformed and the process numbering places step 7 before step 6.
- **P1 — The CTA is misleading.** “Discuss the case study” jumps to Contact instead of opening a case study.
- **P2 — Business impact is absent.** The section lists capabilities but no verified result, scale, before/after change, or architectural decision.

### Recommendation

Replace this with a real project from the supplied list, or explicitly mark it “Concept.” Add `height: auto` to responsive images, replace the pseudo-text artwork, and create a real case-study route or change the CTA wording to “Start a conversation.”

## 5. AI Lab — Good teaser, not yet a lab

### What works

- The dark surface is a strong visual transition.
- “Useful AI—not AI for its own sake” is crisp positioning.
- The mobile card is balanced and readable.

### Issues

- **P1 — There is nothing to inspect.** Visitors cannot see experiments, methods, status, demos, findings, or repositories.
- **P2 — The desktop strip is too compressed.** It reads like a promotional banner rather than a meaningful product area.
- **P2 — The email CTA asks for collaboration before establishing evidence.** This is a high-friction conversion sequence.

### Recommendation

Show three experiments with a status, question, short result, and “View notes” action. Let visitors inspect the work before asking them to collaborate.

## 6. Knowledge library — Strong system, broken content expectation

### What works

- The section has a clear editorial identity and can scale into a long-term knowledge hub.
- Categories, dates, and read times create useful information scent.
- The illustrations share a coherent flat visual language.

### Issues

- **P1 — Article cards are not links.** They look interactive but cannot be opened.
- **P1 — The images are vertically distorted.** The same missing responsive height reset makes covers extremely tall and visually dominates the mobile page.
- **P1 — Article availability is unclear.** If these articles are not written, displaying publication dates implies content that does not exist.
- **P2 — “Join the knowledge journey” goes to Contact.** It does not match the expected action of browsing or subscribing.
- **P3 — The card copy is visually compressed beneath oversized imagery.** Fixing the aspect ratio will restore balance.

### Recommendation

Publish and link at least one real article, label unreleased content honestly, fix all image sizing, and replace the final CTA with a truthful action such as “Browse all notes” or “Get updates.”

## 7. Contact — Clear and appropriately simple

### What works

- The headline connects directly to the studio’s promise of simplifying complex systems.
- Email is the strongest action, with LinkedIn and GitHub available as alternatives.
- Mobile spacing and type hierarchy are strong.

### Issues

- **P2 — Visitors lack engagement context.** There is no indication of preferred project types, location/time zone, availability, or expected response time.
- **P3 — A raw email address is less intentional than a concise action label.** “Start a conversation” could be the button label, with the address shown nearby.
- **P3 — The CTA has no reassurance.** A short line such as “Usually replies within two business days” would reduce uncertainty if accurate.

### Recommendation

Add a concise availability and fit statement, while keeping email as the primary low-friction action.

## 8. Footer — Functional but underdeveloped

### What works

- The footer is quiet and does not compete with the contact section.
- Brand ownership and copyright are clear.
- The mobile centered layout feels deliberate.

### Issues

- **P2 — Desktop footer text is too small and sparse.** It feels closer to a placeholder than the end of a premium studio homepage.
- **P2 — It omits useful recovery navigation.** There is no quick path back to Work, Knowledge, AI Lab, or the top.
- **P3 — No legal or accessibility links.** These are not mandatory at this stage but will matter as the site expands.

### Recommendation

Add compact navigation and social links, keep type at a comfortable minimum size, and plan space for privacy/accessibility pages.

## 9. Global design system and accessibility — Good foundation

### Confirmed strengths

- No horizontal overflow at desktop or 390px mobile.
- No browser console errors in audited states.
- Semantic sections and headings, a skip link, useful alternative text, visible focus styling, reduced-motion support, and large controls are present.
- Tokens separate color, type, spacing, radii, and surface behavior.
- Light and dark themes are implemented.

### Risks

- **P1 — Global responsive image behavior is incomplete.** Add `height: auto` to ordinary images and explicit `aspect-ratio` plus `object-fit` where cards require fixed crops.
- **P2 — Dark-mode artwork remains light-first.** Large white illustration panels look pasted onto the dark surface rather than art-directed for it.
- **P2 — Full keyboard and screen-reader behavior is not yet verified.** Focus order, menu announcements, 200–400% zoom, and external-link announcements need dedicated testing.
- **P3 — The site has limited motion despite the brief requesting subtle animated sections.** This is acceptable for accessibility and performance, but one restrained entrance or connection-path animation could add craft.

## Priority order

1. Confirm that every featured project and article is real; label concepts clearly.
2. Fix the stretched images globally.
3. Replace generated pseudo-text in the KYC illustration.
4. Deliver a proper PDF resume.
5. Make project and article actions lead to real content.
6. Add proof and measurable outcomes.
7. Tighten mobile timeline spacing and finish menu accessibility.
8. Refine the logo, footer, and dark-mode image treatment.

## Evidence limits

This review supports visible layout, responsive behavior, interaction-state, content, hierarchy, and apparent accessibility findings. It does not establish full WCAG compliance, real-world performance, screen-reader behavior, or the factual accuracy of project outcomes.
