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

## Initial Token Map From Reviewed Captures

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
| Color | `color.modal.border.accent` | AI analysis popup outer stroke. |
| Color | `color.modal.divider` | AI analysis popup header divider. |
| Color | `color.action.ai.surface` | Filled primary AI action. |
| Color | `color.surface.assistant.cta` | Secondary Lana CTA body. |
| Color | `color.surface.assistant.icon` | Left icon tile inside the Lana CTA. |
| Typography | `font.sans` | IBM Plex Sans primary UI text. |
| Typography | `font.mono` | Geist Mono technical labels, chips, identifiers, and possible numeric alignment. |
| Size | `size.header.desktop` | 69 px app header. |
| Size | `size.header.searchRail` | ~61 px search rail height inside the desktop header. |
| Size | `size.header.settingsControl` | ~36-40 px square settings button. |
| Layout | `layout.header.logoRail` | ~165-175 px reserved desktop brand area before search. |
| Size | `size.table.row.dense` | ~64 px market table row. |
| Size | `size.table.row.width.desktop` | ~1336 px observed desktop table row. |
| Size | `size.table.row.marketItem` | ~50-56 px token detail market item row. |
| Size | `size.token.logo.md` | ~40 px circular token image. |
| Size | `size.marketPair.logo.sm` | ~24-28 px overlapping circular market pair logos. |
| Size | `size.table.row.buyButton` | ~56 x 40 px compact row action. |
| Size | `size.score.badge.md` | ~32-40 px score badge footprint. |
| Size | `size.chart.tokenDetail.height.desktop` | ~300 px token detail chart plot area. |
| Layout | `layout.tokenDetail.summaryGrid.desktop` | 2 by 2 stat grid for Supply, Liquidity, Market Cap, and FDV. |
| Layout | `layout.tokenDetail.kpiBand.desktop` | Three equal KPI columns for Price, Holders, and 24H Volume. |
| Color | `color.chart.grid` | Faint token detail chart grid lines. |
| Color | `color.chart.axisText` | Right y-axis and bottom x-axis labels. |
| Color | `color.chart.line.negative` | Red token price line when selected period is down. |
| Color | `color.chart.frame.accent` | Chart corner brackets and active timeframe border. |
| Size | `size.popup.aiAnalysis.width.compact` | 380 px AI analysis popup reference width. |
| Size | `size.popup.aiAnalysis.height.idle` | 331 px AI analysis popup idle reference height. |
| Size | `size.popup.aiAnalysis.header` | ~50 px AI popup header. |
| Size | `size.action.ai.primary` | ~112 x 36 px `Analyze` button. |
| Size | `size.action.assistant.cta` | ~222 x 58 px Lana secondary CTA. |
| Radius | `radius.control.sm` | ~4-6 px buttons, chips, segmented controls. |
| Radius | `radius.modal.md` | ~8 px AI popup and assistant CTA. |
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
- Client-rendered chart layers that may be absent from design captures.
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

## Token Detail Implementation Rules

- Compose token detail pages from the shared app shell, token detail header, summary stat grid, KPI band, time-series chart, entity tab bar, and section table components.
- Keep the token detail stack on the black app canvas. Do not wrap the header, KPI band, chart, or tab area in floating cards.
- Preserve the 2 by 2 summary stat grid at desktop width and align large numeric values right.
- Keep the Price, Holders, and 24H Volume KPI band as three equal columns with stable dividers and large values.
- Treat the time-series chart as a browser-verified component. Paper node `1AG-0` can miss chart layers, so QA must verify the rendered series, grid, axes, labels, timeframe state, mode controls, and tooltips in a live browser.
- Reserve a stable chart height before data arrives. Loading, empty, no-data, and error states must not collapse the chart or move the tab bar.
- Support all observed timeframe controls until production is confirmed: Paper shows `5m`, `1H`, `24H`, `7D`; the browser screenshot shows `1H`, `24H`, `7D`, `1M`, `1Y`, and `Live`.
- Expose chart controls with semantic buttons or tabs, visible focus, and accessible names. Provide a text summary or data-table fallback for the active chart window.
- Keep right y-axis labels and bottom time labels outside the plot line layer so live updates do not resize the plot region.
- Do not treat the orange circular overlay visible in Paper as part of the chart layout until its source is confirmed.
- Implement the Top Markets table with fixed numeric columns, sortable headers, venue labels, paired token logos, rows-per-page control, and pagination semantics.
- Use a dedicated Market Item Row component for token-detail market tables. It should render paired overlapping token logos, market pair, venue subtitle, rate, liquidity, 24H volume, 24H trades, and 24H unique counts.
- Keep market item numeric columns fixed and right or center aligned per column so live liquidity and volume changes do not move neighboring cells.
- Degrade missing market identity data in this order: preserve pair symbols, then venue, then logos. Missing logos should fall back to neutral circular placeholders without changing row height.
- Do not attach favorite, score, or Buy controls to market item rows unless a separate production capture confirms those actions in this table.

## AI Analysis Popup Component Contract

- Compose the popup from a reusable modal shell, header title row, icon-only close button, centered content stack, primary AI action, and assistant handoff CTA.
- Use dialog semantics with `aria-labelledby`, focus trap, Escape-to-close, and focus return to the triggering control.
- Keep the idle state compact at the observed 380 x 331 px reference. Loading, result, and error states must reserve stable space or use a separately captured expanded variant.
- Keep `Analyze` as the single primary action. The Lana CTA is secondary and should not share the filled red treatment.
- Disable or busy-state the primary button during AI requests to prevent duplicate submissions.
- Preserve concise copy. If token-specific names are injected, test long names so the centered paragraph and button stack do not overflow.
- Treat backdrop, overlay placement, mobile presentation, streaming output, and assistant route target as unresolved until captured from production.

## Accessibility Baseline

- Keyboard access for search, menus, tabs, filters, row actions, and AI popup controls.
- Dialog keyboard support for AI popups, including focus trap, Escape, and focus return.
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
