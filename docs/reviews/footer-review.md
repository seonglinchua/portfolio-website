# Footer Review

## Scope

- Desktop light and dark themes at 1440px.
- Mobile light theme at 390px.
- Brand-link behavior, hierarchy, contrast, recovery navigation, and accessibility.
- Evidence: `docs/reviews/evidence/footer/`.

## Overall health

Visually consistent but functionally underdeveloped. The footer matches the site's palette and typography, yet it feels like a status strip rather than the closing section of a premium technology studio.

## Implementation status

Applied after review:

- Expanded brand close with a more distinctive final statement.
- Explore links for Work, AI Lab, Knowledge, and About.
- Connect links for Contact, Email, LinkedIn, and GitHub.
- Singapore / worldwide context and a separated copyright row.
- Functional copy increased to a readable 14px minimum.
- Responsive two-column navigation on mobile.

The current footer check confirms nine working links and successful brand navigation back to the top.

## Strengths

- Light and dark theme surfaces match the surrounding site.
- The divider, spacing, and restrained styling are consistent with the editorial design system.
- The brand lockup remains readable at desktop and mobile sizes.
- The brand link correctly returns to `#top` with a final scroll position of zero.
- Mobile stacking is clean and centered.

## Findings

### P1 — No recovery navigation

- Evidence: the brand mark is the footer's only link.
- Impact: visitors reaching the end cannot move directly to Work, AI Lab, Knowledge, About, Contact, LinkedIn, or GitHub.
- Change: add concise Explore and Connect link groups.

### P2 — Desktop footer is too shallow

- Evidence: the full footer is approximately one narrow row with large unused horizontal space.
- Impact: it feels like an implementation placeholder rather than an intentional closing statement.
- Change: use a two-level footer: brand/mission/navigation above, copyright and location below.

### P2 — Supporting text is undersized

- Evidence: mission and copyright text render at roughly 12px on desktop.
- Impact: readability and perceived quality suffer, particularly on high-density or lower-contrast displays.
- Change: use a minimum of 14px for functional footer copy and preserve comfortable line height.

### P2 — Contact path disappears at the bottom

- Evidence: no email or Contact link exists inside the footer.
- Impact: users who finish reading must scroll back or rely on browser navigation to act.
- Change: include Contact, email, LinkedIn, and GitHub without duplicating the full contact section.

### P3 — The mission line adds little new information

- Evidence: “Building intelligent business systems for the AI era” closely repeats the hero message.
- Impact: the final impression does not deepen the brand.
- Change: use a shorter closing thought such as “Engineering systems that compound value over time,” or pair the existing line with Singapore / worldwide context.

### P3 — Future legal and accessibility paths are absent

- Impact: not urgent for the current static portfolio, but privacy and accessibility links will matter once forms, analytics, consulting, or digital products are added.

## Recommended structure

1. Brand lockup and one-sentence closing statement.
2. Explore: Work, AI Lab, Knowledge, About.
3. Connect: Contact, LinkedIn, GitHub.
4. Bottom line: Singapore / worldwide, copyright, and future legal links.

Keep the footer flat and editorial. Avoid turning each link group into a card or adding heavy backgrounds and gradients.

## Evidence limits

This review confirms visible layout, theme consistency, link count, and the brand link's top-navigation behavior. It does not establish full screen-reader compatibility or legal requirements for future services.
