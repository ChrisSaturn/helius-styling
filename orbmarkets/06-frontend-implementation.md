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
| Color | `color.border.accent` | Primary action outlines, production-confirmed main active controls, and high-contrast focus treatment. |
| Color | `color.text.primary` | Main labels and values. |
| Color | `color.text.secondary` | Metadata, inactive tabs, secondary token names. |
| Color | `color.text.muted` | Ranks, inactive micro labels, disabled-looking values. |
| Color | `color.brand.orb` | Orb wordmark, selected text fill, and primary product accent. |
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
| Size | `size.popup.settings.width.compact` | ~360 px placeholder settings popup width. |
| Size | `size.popup.settings.header` | ~50 px settings popup title and close row. |
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
- Live event feeds that insert rows without shifting fixed monitor tables.

## Selection and Surface Rules

- Secondary selected states should first use semantic state (`aria-current`, `aria-pressed`, checked state), selected text fill/color, font weight, and a quiet neutral active surface.
- Do not use orange outlines as the default selected treatment for non-essential controls such as settings segments, density choices, secondary navigation utilities, placeholder filters, or inactive feature toggles.
- Reserve orange outlines for primary actions such as Buy, production-confirmed main controls such as captured chart or market timeframe controls, and focus states that need stronger contrast than a neutral ring.
- Keep visible surface hierarchy shallow. A popup, table band, KPI band, chart frame, or modal should be the visible container; rows and controls inside it should usually be separated with spacing and dividers rather than more bordered boxes.
- Settings rows such as `Display`, `Density`, and `Network` should sit directly inside the popup shell. Choices such as `Dark` and `System` should be flat buttons or one minimal segmented group, not separate visible subcontainers.

## Desktop Top Navigation Component Contract

- Compose the reusable nav from brand lockup, global search, utility actions, text nav links, network entry, and settings button.
- Keep the component route-agnostic. Active route, network label, auth state, and search value should be props or state inputs, not hardcoded per page.
- Render the search as a real input and keep it dominant at desktop width. The trailing utility icon and `/` affordance stay inside the search rail.
- Preserve the 69 px desktop header height and stable horizontal rhythm. Avoid wrapping; collapse secondary links at narrower widths once responsive behavior is confirmed.
- Use compact icon buttons for non-text utility actions. `Me` and `Network` remain text entries in the observed desktop state.
- Reserve accessible names for search, copy/share utility, settings, and any network selector. Mark active route or selected network semantically.
- Treat menu panels, auth menus, search suggestions, and mobile behavior as unresolved until captured from production.

## Settings Popup Component Contract

Prototype source: `OM-PROT-003-settings`; not production evidence.

- Open settings from the shared top-navigation icon button without changing the current page view.
- Expose the trigger with `aria-expanded`, `aria-controls`, and `aria-haspopup="dialog"` while the popup is available.
- Render the popup as a labelled dialog with a compact header, icon-only close button, flat control rows, and a footer close action.
- Keep placeholder controls inert except for open and close behavior. Do not persist theme, density, network, or alert values until product rules are confirmed.
- Use real controls for future compatibility: segmented choices should be buttons with `aria-pressed`; toggles should be checkboxes or switches with accessible labels. The selected visual treatment for these secondary controls should be selected text fill/color plus weight before accent outlines.
- Close on Escape and when navigating between local prototype views. Future production work should add focus trap, focus return, outside-click policy, saved state, and persistence errors.
- Keep desktop width around 360 px and use a fixed inset popup on narrow viewports. Labels must fit without resizing rows or colliding with segmented controls.
- Use the Orb popup surface rules: black fill, subtle dividers, compact radii, one visible popup shell, and no nested card layout. Avoid wrapping each settings row or each segment choice in an additional visible box. Use red-orange only for primary emphasis, production-confirmed main active controls, or visible focus treatment.

## Home Table Implementation Rules

- Prefer a fixed table layout for the home market table so live values do not resize columns.
- Keep row height stable around the observed dense table height; hover, loading, and tooltip states must not shift rows.
- Use text truncation for token names, not ticker symbols.
- Use tabular numeric rendering for row metrics where the font supports it; keep price, change, market cap, and volume columns visually aligned during updates.
- Keep the active tab and active timeframe distinguishable by selected text fill, weight, underline or semantic position as well as color. Do not copy orange outlines onto secondary filters unless production confirms the control is a main active control.
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

## NFT Monitor Implementation Rules

Prototype source: `OM-PROT-001-pulse`; not production evidence.

- Keep monitor pages inside the shared app shell with black canvas, compact top navigation, and no marketing hero.
- Model NFT event data with local types before integration: sale events should include collection, item name, image placeholder, marketplace, SOL/USD price, buyer, seller, signature, and timestamp; listing events should include collection, item name, image placeholder, marketplace, list price, floor delta, seller, listing ID, and timestamp.
- Use one KPI band with equal metric cells for monitor summaries. Do not turn monitor metrics into floating cards.
- Use fixed table layouts for sales and listings. Preserve row height, column widths, and numeric alignment during future live inserts.
- Preserve native table semantics for dense lists. Do not put `display: grid`, `display: flex`, or layout containment on `tr`, `th`, or `td`; put stacked identity, numeric, or action content inside inner wrappers.
- Keep NFT identity cells fixed-size with a placeholder image tile, item name, and collection subtitle. Real image loading must not resize rows.
- Truncate addresses, signatures, listing IDs, item names, and collection names with accessible labels that preserve the full value for assistive technology.
- Keep placeholder Orb links inert until real account, signature, collection, and listing URL formats are confirmed.
- At narrow widths, allow horizontal table overflow before dropping important monitor columns. Preserve NFT identity, price, identifier, and timestamp priority.
- Future WebSocket or webhook integrations should batch updates and avoid appending rows in a way that steals focus, shifts scroll position, or reorders content unexpectedly.

Current `/pulse` implementation alignment:

- `pulse/src/App.tsx` uses local view state for the Pulse monitor and `Me` profile/portfolio, `aria-current` for the active `Me` nav state, `aria-pressed` for active timeframes, memoized sales/listing/portfolio row components, module-level SOL/USD/UTC formatters, inner numeric wrappers, and full-value labels for truncated identifiers.
- `pulse/src/App.tsx` also includes the placeholder settings popup with open state, Escape-to-close, active trigger semantics, inert segmented controls, and a labelled toggle.
- `pulse/src/styles.css` maps the prototype to Orb tokens with the 69 px desktop header, 61 px search rail, compact title/status header, profile summary band, 64 px monitor rows, fixed 40 px neutral NFT thumbnails, anchored settings popup, tokenized hover/focus/active states, `content-visibility` on table panels only, and reduced-motion handling.

## Portfolio Implementation Rules

Prototype source: `OM-PROT-002-portfolio`; not production evidence.

- Keep the `Me` portfolio in the shared app shell with search-first navigation and no sidebar or marketing header.
- Treat wallet data as placeholder until auth and route formats are confirmed. Do not infer or read local wallet data for this prototype.
- Model portfolio data with local types before integration: metrics, collection holdings, and wallet activity should stay separate so future fetches can update independently.
- Use the same KPI band contract as Pulse, with equal cells, stable values, and no floating metric cards.
- Use fixed table layouts for holdings and activity. Preserve row height, collection identity width, numeric alignment, signature truncation, and timestamp formatting during future wallet refreshes.
- Use a profile summary band for wallet identity and top signals so `Me` has a clear first-viewport identity while remaining dense and utility-first.
- Mark `Me` as the active route semantically when the portfolio view is shown. The brand action may return to Pulse in the local prototype, but production route behavior remains unresolved.
- Future wallet integrations need disconnected, loading, empty, hidden-wallet, stale, and indexer-error states that reserve the portfolio layout rather than collapsing the page.

## Pulse React Best-Practice Notes

Apply the Vercel React best-practices skill when Pulse moves beyond static prototype data:

- `bundle-barrel-imports`: import table, icon, formatter, and chart helpers directly so the monitor route does not pull unrelated UI code.
- `bundle-dynamic-imports`: defer heavy charting, stream diagnostics, or marketplace-specific panels until the user opens them or the feature is enabled.
- `async-parallel`: fetch independent DAS metadata, marketplace context, and account labels in parallel; start requests early and await only where the UI needs the result.
- `client-event-listeners`: keep one feed listener or subscription manager per live source, then distribute normalized events through local state rather than attaching listeners per table.
- `rerender-memo`: memoize row components, expensive currency/relative-time formatting, and normalized identity objects once real event volume grows.
- `rerender-dependencies`: base effects on primitive filter keys such as timeframe, marketplace, and collection address instead of whole filter objects.
- `rerender-derived-state-no-effect`: derive active labels, empty-state flags, and status colors during render from event data instead of syncing extra state in effects.
- `rendering-content-visibility`: use content visibility or windowing for below-fold monitor tables once row counts exceed the first viewport.
- `js-set-map-lookups`: use `Map` or `Set` for repeated collection, account-label, signature, and listing-ID lookups during event normalization.

## Accessibility Baseline

- Keyboard access for search, menus, tabs, filters, row actions, and AI popup controls.
- Dialog keyboard support for AI and settings popups, including focus trap, Escape, and focus return.
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
