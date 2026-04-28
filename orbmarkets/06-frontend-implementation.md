# Front-End Implementation

This page translates the design system into engineering guidance.

## Implementation Goals

- Make repeated UI decisions token-driven.
- Keep data-heavy layouts stable under changing content.
- Preserve accessibility in dense explorer views.
- Prefer reusable components for tables, identifiers, badges, filters, and detail panels.

## Token Categories

Create or map tokens for:

- Color roles.
- Typography roles:
  - `font.sans`: `IBM Plex Sans`, `IBM Plex Sans Fallback`.
  - `font.mono`: `Geist Mono`, `Geist Mono Fallback`.
- Spacing scale.
- Radius scale.
- Border and divider styles.
- Shadow or elevation rules, if used.
- Motion durations and easing.
- Z-index layers.

Use stable token names in implementation. The generated CSS module names from production are evidence only and should not become front-end API names.

## Initial Token Map From `OM-001-home`

Treat these as implementation candidates until live CSS confirms exact values.

| Category | Candidate token | Intended use |
| --- | --- | --- |
| Color | `color.bg.app` | Full app canvas. |
| Color | `color.surface.header` | Header and search surface. |
| Color | `color.surface.nav.utility` | Square header utility buttons and small action surfaces. |
| Color | `color.surface.control` | Chips, segmented controls, tooltip bodies. |
| Color | `color.border.subtle` | Table frame, dividers, inactive controls. |
| Color | `color.border.accent` | Active segment and buy button outline. |
| Color | `color.text.primary` | Main labels and values. |
| Color | `color.text.secondary` | Metadata, inactive tabs, secondary token names. |
| Color | `color.text.muted` | Ranks, inactive micro labels, disabled-looking values. |
| Color | `color.brand.orb` | Orb wordmark and orange product accent. |
| Color | `color.status.positive` | Positive percentage changes and A score badge. |
| Color | `color.status.warning` | B score badge. |
| Color | `color.status.negative` | Negative percentage changes and C score badge. |
| Typography | `font.sans` | IBM Plex Sans primary UI text. |
| Typography | `font.mono` | Geist Mono technical labels, chips, identifiers, and possible numeric alignment. |
| Size | `size.header.desktop` | 69 px app header. |
| Size | `size.header.searchRail` | ~61 px search rail height inside the desktop header. |
| Size | `size.header.settingsControl` | ~36-40 px square settings button. |
| Layout | `layout.header.logoRail` | ~165-175 px reserved desktop brand area before search. |
| Size | `size.table.row.dense` | ~64 px market table row. |
| Size | `size.table.row.width.desktop` | ~1336 px observed desktop table row. |
| Size | `size.token.logo.md` | ~40 px circular token image. |
| Size | `size.table.row.buyButton` | ~56 x 40 px compact row action. |
| Size | `size.score.badge.md` | ~32-40 px score badge footprint. |
| Radius | `radius.control.sm` | ~4-6 px buttons, chips, segmented controls. |
| Border | `border.subtle` | 1 px low-contrast divider and control border. |

## Front-End Constraints To Track

- Long hashes and addresses.
- Very large numeric values.
- Unknown or missing token metadata.
- Program names that do not resolve.
- Failed, pending, and partially decoded transactions.
- Tables with many columns.
- Mobile layouts for dense data.
- Live updates without layout jumps.
- Font loading and fallback behavior for dense numeric and identifier-heavy views.

## Desktop Top Navigation Component Contract

- Compose the reusable nav from brand lockup, global search, utility actions, text nav links, network entry, and settings button.
- Keep the component route-agnostic. Active route, network label, auth state, and search value should be props or state inputs, not hardcoded per page.
- Render the search as a real input and keep it dominant at desktop width. The trailing utility icon and `/` affordance stay inside the search rail.
- Preserve the 69 px desktop header height and stable horizontal rhythm. Avoid wrapping; collapse secondary links at narrower widths once responsive behavior is confirmed.
- Use compact icon buttons for non-text utility actions. `Me` and `Network` remain text entries in the observed desktop state.
- Reserve accessible names for search, copy/share utility, settings, and any network selector. Mark active route or selected network semantically.
- Treat menu panels, auth menus, search suggestions, and mobile behavior as unresolved until captured from production.

## Home Table Implementation Rules

- Prefer a fixed table layout for the home market table so live values do not resize columns.
- Keep row height stable around the observed dense table height; hover, loading, and tooltip states must not shift rows.
- Use text truncation for token names, not ticker symbols.
- Use tabular numeric rendering for row metrics where the font supports it; keep price, change, market cap, and volume columns visually aligned during updates.
- Keep the active tab and active timeframe distinguishable by shape or underline as well as color.
- Render positive, warning, and negative score states with accessible labels in addition to colored badges.
- Keep the Buy action as a compact black-filled, orange-red outline button until production confirms hover, filled, disabled, or loading variants.
- Give icon-only row actions larger invisible hit targets while preserving the observed compact visual size.
- Avoid making the whole row a single interactive control if star and Buy remain nested controls; use a clear row link target or cell-level link strategy.
- Sparkline charts should reserve fixed dimensions even when data is missing.

## Accessibility Baseline

- Keyboard access for search, menus, tabs, filters, and row actions.
- Visible focus states.
- Color contrast that holds across status badges and secondary text.
- Copy buttons with accessible labels.
- Tables with meaningful headers.
- Reduced-motion support.

## Handoff Format

When a pattern is confirmed, document it with:

- Production source.
- Screenshots or capture references.
- Design rule.
- Token mapping.
- Component impact.
- Responsive notes.
- Open questions.
