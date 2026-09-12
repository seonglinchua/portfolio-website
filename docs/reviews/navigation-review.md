# Navigation Review

## Scope

- Desktop light and dark navigation at 1440px.
- Mobile closed and open navigation at 390px.
- Anchor navigation, current-section state, keyboard opening, Escape behavior, focus, and visual hierarchy.
- Evidence: `docs/reviews/evidence/navigation/`.

## Health

The navigation is visually healthy and consistent with the Nezha Systems design language. Its main weaknesses are state communication, mobile-menu behavior, and conversion hierarchy.

## Implementation status

Applied after review:

- Active-section tracking with a visible state and `aria-current="location"`.
- Escape-to-close with focus restored to the menu toggle.
- Outside-click dismissal, background scroll locking, and keyboard focus containment.
- Stronger Contact CTA treatment on desktop and mobile.
- Mobile backdrop tint and increased sheet separation.
- Theme-control tooltip and `aria-controls` relationship for the menu.

The dedicated navigation check now confirms the current-section state, Escape dismissal, outside-click dismissal, scroll locking, and focus restoration.

## Strengths

- Clear, compact information architecture: Work, AI Lab, Knowledge, About, Contact.
- Good desktop alignment and generous spacing.
- Light and dark surfaces preserve strong contrast.
- Mobile buttons provide comfortable touch targets.
- The menu button exposes `aria-expanded` and works with Enter.
- The coral focus ring is highly visible.
- The sticky header keeps navigation available without excessive height.

## Findings

### P1 — Escape does not close the mobile menu

- Evidence: after opening with the keyboard and pressing Escape, `aria-expanded` remains `true`.
- Impact: keyboard users cannot dismiss the menu using a standard interaction.
- Change: listen for Escape while open, close the menu, and restore focus to the toggle.

### P1 — Current section is never announced or shown

- Evidence: after navigating to `#knowledge`, its link has no `aria-current` value and no visible active treatment.
- Impact: visitors lose orientation on a long single-page site, and assistive technology receives no current-location signal.
- Change: use an `IntersectionObserver` to set `aria-current="location"` and a restrained underline or blue text state.

### P2 — Mobile background remains interactive

- Evidence: the navigation opens as a floating sheet while the hero remains visible and scrollable behind it.
- Impact: focus and scroll can escape into the page, making the open state less predictable.
- Change: either treat it as a modal menu with a backdrop, focus containment, and scroll lock, or keep it as a disclosure menu but close it on outside click and prevent accidental background interaction.

### P2 — Contact lacks conversion emphasis

- Evidence: Contact has the same appearance as every informational link.
- Impact: the primary business action is not visually prioritized.
- Change: render Contact as a compact outlined button on desktop and a full-width accented row on mobile.

### P2 — Brand mark still feels provisional

- Evidence: the clipped “N” is recognisable but reads as a constructed placeholder rather than a complete identity system.
- Impact: it limits premium brand credibility and cannot scale naturally into favicon and social contexts.
- Change: replace it with a dedicated logo asset and preserve the existing wordmark lockup.

### P3 — Mobile sheet could use stronger separation

- Evidence: the white sheet and white header depend mainly on a thin border.
- Impact: hierarchy is slightly flat, particularly on bright displays.
- Change: add a faint backdrop tint and a restrained shadow; avoid heavy glass effects.

### P3 — Theme control is understandable but unexplained

- Evidence: only the icon is visible; accessible labels are present.
- Impact: sighted first-time visitors may need a moment to infer its purpose.
- Change: add a native tooltip through `title`, or expose “Theme” in the open mobile menu without enlarging the desktop header.

## Recommended change set

1. Add active-section tracking and `aria-current="location"`.
2. Add Escape-to-close and focus restoration.
3. Close on outside click and lock background scrolling while mobile navigation is open.
4. Give Contact a compact CTA treatment.
5. Add a subtle mobile backdrop and sheet shadow.
6. Replace the temporary mark when the final Nezha Systems logo is available.

## Evidence limits

This review confirms visible states and key keyboard behavior. It does not establish full screen-reader compatibility or cover every browser's sticky-header and backdrop-filter behavior.
