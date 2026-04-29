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
- Corner treatment tokens.
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
| Color | `color.text.primary` | Main labels, values, collection names, and primary clickable labels. |
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
| Layout | `layout.site.maxWidth` | 1480 px shared app shell for local prototypes. |
| Layout | `layout.site.gutter.desktop` | 18 px shared horizontal gutter for desktop header and page content. |
| Layout | `layout.site.gutter.tablet` | 14 px shared horizontal gutter below 980 px. |
| Layout | `layout.site.gutter.mobile` | 12 px shared horizontal gutter below 640 px. |
| Size | `size.table.row.dense` | ~64 px market table row. |
| Size | `size.table.row.width.desktop` | ~1336 px observed desktop table row. |
| Size | `size.table.row.marketItem` | ~50-56 px token detail market item row. |
| Size | `size.token.logo.md` | ~40 px circular token image. |
| Size | `size.marketPair.logo.sm` | ~24-28 px overlapping circular market pair logos. |
| Size | `size.table.row.buyButton` | ~56 x 40 px compact row action. |
| Size | `size.score.badge.md` | ~32-40 px score badge footprint. |
| Size | `size.chart.tokenDetail.height.desktop` | ~300 px token detail chart plot area. |
| Size | `size.networkStats.chartPanel.height.desktop` | ~270 px network TPS and SOL price panel reference height. |
| Size | `size.networkStats.summaryPanel.height.desktop` | ~176 px compact validator summary panel body. |
| Size | `size.networkStats.validatorTable.row` | ~56-64 px active validator row cadence. |
| Size | `size.networkStats.epochPanel.height` | Stable epoch progress and slot-stat band height. |
| Layout | `layout.tokenDetail.summaryGrid.desktop` | 2 by 2 stat grid for Supply, Liquidity, Market Cap, and FDV. |
| Layout | `layout.tokenDetail.kpiBand.desktop` | Three equal KPI columns for Price, Holders, and 24H Volume. |
| Layout | `layout.networkStats.chartGrid.desktop` | Two equal chart panels for TPS and SOL price. |
| Layout | `layout.networkStats.summaryGrid.desktop` | Three equal validator summary panels. |
| Color | `color.chart.grid` | Faint token detail chart grid lines. |
| Color | `color.chart.axisText` | Right y-axis and bottom x-axis labels. |
| Color | `color.chart.line.negative` | Red token price line when selected period is down. |
| Color | `color.chart.frame.accent` | Chart corner brackets and active timeframe border. |
| Color | `color.chart.bar.primary` | Pulse Recharts marketplace volume and listing-depth bars. |
| Color | `color.chart.bar.secondary` | Reserved for inactive or comparison chart bars, not default Stats graph series. |
| Color | `color.chart.cursor` | Neutral Recharts hover/focus cursor fill. |
| Color | `color.chart.tooltip.surface` | Recharts tooltip body. |
| Size | `size.popup.aiAnalysis.width.compact` | 380 px AI analysis popup reference width. |
| Size | `size.popup.aiAnalysis.height.idle` | 331 px AI analysis popup idle reference height. |
| Size | `size.popup.aiAnalysis.header` | ~50 px AI popup header. |
| Size | `size.popup.settings.width.compact` | ~360 px placeholder settings popup width. |
| Size | `size.popup.settings.header` | ~50 px settings popup title and close row. |
| Size | `size.action.ai.primary` | ~112 x 36 px `Analyze` button. |
| Size | `size.action.assistant.cta` | ~222 x 58 px Lana secondary CTA. |
| Radius | `radius.corner.none` | 0 px for visible UI corners on controls, panels, popups, modals, command blocks, progress tracks, and CTA shells. |
| Border | `border.subtle` | 1 px low-contrast divider and control border. |

## Front-End Constraints To Track

- Long hashes and addresses.
- Very large numeric values.
- Unknown or missing token metadata.
- Program names that do not resolve.
- Failed, pending, and partially decoded transactions.
- Tables with many columns.
- Mobile layouts for dense data.
- Live updates without layout jumps, including mock-refresh snapshots used before real streams exist.
- Client-rendered chart layers that may be absent from design captures.
- Font loading and fallback behavior for dense numeric and identifier-heavy views.
- Live event feeds, including local mock-feed substitutes, that insert rows without shifting fixed monitor tables.

## Selection and Surface Rules

- Secondary selected states should first use semantic state (`aria-current`, `aria-pressed`, checked state), selected text fill/color, font weight, and a quiet neutral active surface.
- Do not use orange outlines as the default selected treatment for non-essential controls such as settings segments, density choices, secondary navigation utilities, placeholder filters, or inactive feature toggles.
- Reserve orange outlines for primary actions such as Buy, production-confirmed main controls such as captured chart or market timeframe controls, and focus states that need stronger contrast than a neutral ring.
- Render collection names, primary row drill-down labels, and main clickable text in `color.text.primary`/White. Use `color.text.secondary` or `color.text.muted` for supporting metadata only, such as marketplaces, venues, timestamps, inactive utility controls, and non-primary identifiers.
- Keep visible surface hierarchy shallow. A popup, table band, KPI band, chart frame, or modal should be the visible container; rows and controls inside it should usually be separated with spacing and dividers rather than more bordered boxes.
- Set visible UI corner radius to 0 px across Orb surfaces and controls. Do not round searches, nav utilities, buttons, chips, segmented controls, table panels, KPI bands, popups, modals, command blocks, progress tracks, toggles, or landing tiles.
- Preserve circular or asset-defined shapes only where the shape is intrinsic to the asset or plot mark, such as the Orb mark, token logos, paired market logos, or chart points.
- Settings rows such as `Display`, `Density`, and `Network` should sit directly inside the popup shell. Choices such as `Dark` and `System` should be flat buttons or one minimal segmented group, not separate visible subcontainers.

## Recharts Implementation Contract

- Use Recharts for Pulse `Stats` marketplace volume and listing-depth charts through a small adapter component rather than hand-rolled SVG geometry in the page component.
- Keep chart data normalized before rendering. The current adapter expects labelled `{ label, value, detail }` buckets and caller-provided formatters for axes, tooltips, and summary text.
- Style Recharts through Orb tokens: `--color-chart-grid`, `--color-chart-baseline`, `--color-chart-axis-text`, `--color-chart-bar`, `--color-chart-bar-hover`, `--color-chart-cursor`, and `--color-chart-tooltip-bg`.
- Do not use generic `--chart-1`/`--chart-2`, `hsl(var(--chart-1))` fills, rounded bar defaults, gradients, chart-card wrappers, animated pulse bars, or external tooltip themes unless those values are explicitly mapped back to Orb chart roles.
- Use `ResponsiveContainer` inside a fixed-height panel, right-side `YAxis`, bottom `XAxis`, horizontal grid only, explicit square bar sizes per chart variant, custom black tooltip, and `accessibilityLayer`.
- Keep the default Recharts interaction minimal: neutral cursor fill, primary white bars, no series entry animation, and hover/focus emphasis through opacity or the same primary bar token rather than orange.
- Preserve a hidden chart summary and stable lazy-loading fallback so chart loading, empty data, or source errors do not collapse the Stats band.
- Lazy-load heavy Recharts renderers from the feature view that needs them. The default Pulse monitor route should not import Recharts until the `Stats` chart band renders.

## Site Spacing Contract

- Use one site-wide horizontal rail for app chrome and page content. In CSS this should be tokenized as `--layout-site-max`, `--layout-page-gutter`, and `--layout-page-rail`.
- Desktop prototypes use a 1480 px max shell and 18 px inline gutter. Tablet and mobile reduce only the gutter, to 14 px below 980 px and 12 px below 640 px.
- Top navigation and main content must align on the same left and right rail. Do not let the header use a different hardcoded inline padding than the page body.
- Full-width bands such as profile summary, KPI strip, and table panels should fill the rail. Internal cell padding can vary by component, but the outer left/right edge must remain aligned.
- Settings popups on narrow viewports should inset from the same mobile gutter instead of introducing a separate 10 px fixed offset.

## Icon Implementation Contract

- Use `lucide-react` for shared React prototype icons instead of local one-off SVG components.
- Prefer static named imports for icons used in the route; avoid dynamic icon registries for common UI icons because they can pull more code than the route needs.
- Icons next to visible text are decorative and should use `aria-hidden="true"`. Keep accessible names on the parent button, link, input, or region.
- Keep icon dimensions stable: 12-13 px in dense cells and metadata, 15-18 px in buttons/nav, and 28-32 px only for page-title or metric icon tiles.
- Icon color follows the text hierarchy: muted by default, primary on hover where text also brightens, and brand fill for selected or high-signal states.

## Desktop Top Navigation Component Contract

- Compose the reusable nav from brand lockup, global search, utility actions, text nav links, network entry, and settings button.
- Keep the component route-agnostic. Active route, network label, auth state, and search value should be props or state inputs, not hardcoded per page.
- Render the search as a real input and keep it dominant at desktop width. The trailing utility icon and `/` affordance stay inside the search rail.
- Preserve the 69 px desktop header height and stable horizontal rhythm on the shared site rail. Avoid wrapping; collapse secondary links at narrower widths once responsive behavior is confirmed.
- Use compact icon buttons for non-text utility actions. `Me` and `Network` remain text entries in the observed desktop state; the local prototype labels the second entry `Stats`.
- In the local `/pulse` prototype, the observed `Network` slot is intentionally used as a `Stats` route for mock NFT marketplace stats. It borrows compact panel styling from the captured network stats hierarchy without rendering network data.
- Reserve accessible names for search, copy/share utility, settings, and any network selector. Mark active route or selected network semantically.
- Treat menu panels, auth menus, search suggestions, and mobile behavior as unresolved until captured from production.

## Private Payments Hero Background Contract

Prototype source: `OM-PROT-005-private-payments-api`; not production evidence.

- Use the supplied `eclipse (private-payments)/animation.js` frame source as the canonical local animation input. Keep `ascii-animation.html` as the standalone source preview.
- Load the frame source as a Vite URL asset and fetch it from the hero background component. Do not import the 431 KB frame list directly into React render state.
- Animate the decorative `<pre>` by mutating `textContent` inside `requestAnimationFrame`; cap the cadence to the source 24 fps and cancel the frame loop on unmount.
- Mark the background `aria-hidden="true"` and keep all existing hero label, headline, body copy, command, and chip content above it in the stacking order.
- Respect `prefers-reduced-motion: reduce` by displaying the first loaded frame without advancing frames.
- Use the generated `public/ascii-hero-frame.svg` only as the Paper/static design preview. Runtime code should continue to use the JS frame source so Paper and implementation stay traceable to the same animation.

## Settings Popup Component Contract

Prototype source: `OM-PROT-003-settings`; not production evidence.

- Open settings from the shared top-navigation icon button without changing the current page view.
- Expose the trigger with `aria-expanded`, `aria-controls`, and `aria-haspopup="dialog"` while the popup is available.
- Render the popup as a labelled dialog with a compact header, icon-only close button, flat control rows, and a footer close action.
- Keep placeholder controls inert except for open and close behavior. Do not persist theme, density, network, or alert values until product rules are confirmed.
- Use real controls for future compatibility: segmented choices should be buttons with `aria-pressed`; toggles should be checkboxes or switches with accessible labels. The selected visual treatment for these secondary controls should be selected text fill/color plus weight before accent outlines.
- Close on Escape and when navigating between local prototype views. Future production work should add focus trap, focus return, outside-click policy, saved state, and persistence errors.
- Keep desktop width around 360 px and use a fixed inset popup on narrow viewports. Labels must fit without resizing rows or colliding with segmented controls.
- Use the Orb popup surface rules: black fill, subtle dividers, square 0 px corners, one visible popup shell, and no nested card layout. Avoid wrapping each settings row or each segment choice in an additional visible box. Use red-orange only for primary emphasis, production-confirmed main active controls, or visible focus treatment.

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
- Degrade missing market identity data in this order: preserve pair symbols, then venue, then logos. Missing logos should fall back to neutral fixed-size placeholders without changing row height.
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
- Until Helius or marketplace integrations exist, seed Pulse from local placeholder rows and update a capped mock-feed snapshot on one interval. Generated mock rows should exercise latest sales, latest listings, updated timestamp, and derived KPI behavior without implying production stream health.
- Use one KPI band with equal metric cells for monitor summaries. Do not turn monitor metrics into floating cards.
- Derive monitor KPI values from the current event snapshot where practical: floor from listing prices/deltas, sales volume from visible sales, listing count from a mock aggregate, and active collections from visible event rows.
- Animate incoming mock or live data with CSS classes derived from event identity and snapshot sequence. New row feedback should animate `td` background/rail and inner wrappers only; KPI feedback should animate metric cells only. Do not animate `tr` layout, change row height, alter column widths, move scroll position, or steal keyboard focus.
- Use fixed table layouts for sales and listings. Preserve row height, column widths, and numeric alignment during future live inserts.
- Preserve native table semantics for dense lists. Do not put `display: grid`, `display: flex`, or layout containment on `tr`, `th`, or `td`; put stacked identity, numeric, or action content inside inner wrappers.
- Keep NFT identity cells fixed-size with a placeholder image tile, item name, and collection subtitle. Real image loading must not resize rows.
- Render collection names and the main item or row links in `color.text.primary`/White. Supporting account, signature, listing, marketplace, and timestamp metadata can use secondary or muted text.
- Truncate addresses, signatures, listing IDs, item names, and collection names with accessible labels that preserve the full value for assistive technology.
- Keep placeholder Orb links inert until real account, signature, collection, and listing URL formats are confirmed.
- At narrow widths, allow horizontal table overflow before dropping important monitor columns. Preserve NFT identity, price, identifier, and timestamp priority.
- Future WebSocket or webhook integrations should batch updates and avoid appending rows in a way that steals focus, shifts scroll position, or reorders content unexpectedly.

Current `/pulse` implementation alignment:

- `pulse/src/App.tsx` uses local view state for the Pulse monitor, `Me` profile/portfolio, and NFT-only `Stats` marketplace views, local Pulse feed state seeded from placeholder rows, one mock-refresh interval with functional state updates, derived Pulse KPI metrics, incoming row flags for the newest generated sales/listings, KPI refresh sequencing, lazy-loaded Recharts marketplace charts, `aria-current` for the active `Me` and `Stats` nav states, `aria-pressed` for active timeframes, static Lucide icon imports, memoized navigation/settings/timeframe and sales/listing/portfolio/stats row components, module-level SOL/USD/UTC formatters, inner numeric wrappers, and full-value labels for truncated identifiers.
- `pulse/src/App.tsx` also includes the placeholder settings popup with open state, Escape-to-close, active trigger semantics, inert segmented controls, and a labelled toggle.
- `pulse/index.html` links the Pulse favicon set from `/winniepoo-mert/favicon_io/`; Vite serves the copied bundle from `pulse/public/winniepoo-mert/favicon_io`, including the `.ico`, PNG sizes, Apple touch icon, and manifest with Pulse app names and black theme/background colors.
- `pulse/src/pulseData.ts` owns the mock feed and stats boundaries through `createInitialPulseFeed`, `createNextPulseFeed`, `buildPulseMetrics`, deterministic generated row factories, marketplace stats placeholders, 2-hour marketplace-volume buckets, floor-band listing-depth buckets, collection routing placeholders, a fixed visible-row cap, and the 4.5 second refresh constant so future stream, marketplace, DAS, and aggregator sources can replace mock data without rewriting row components.
- `pulse/src/styles.css` maps the prototype to Orb tokens with the 1480 px shared shell, 18/14/12 px responsive gutters, 69 px desktop header, 61 px search rail, square 0 px visible UI corners, compact title/status header, profile summary band, continuous Paper-aligned marketplace graph and summary bands, neutral tokenized Recharts surfaces/tooltips, marketplace stats tables, 64 px monitor rows, fixed 40 px neutral NFT/platform thumbnails, anchored settings popup, tokenized hover/focus/active states, CSS-only incoming row and metric refresh animations outside chart bars, `content-visibility` on table panels only, and reduced-motion handling.

## Portfolio Implementation Rules

Prototype source: `OM-PROT-002-portfolio`; not production evidence.

- Keep the `Me` portfolio in the shared app shell with search-first navigation and no sidebar or marketing header.
- Treat wallet data as placeholder until auth and route formats are confirmed. Do not infer or read local wallet data for this prototype.
- Model portfolio data with local types before integration: metrics, collection holdings, and wallet activity should stay separate so future fetches can update independently.
- Use the same KPI band contract as Pulse, with equal cells, stable values, and no floating metric cards.
- Use fixed table layouts for holdings and activity. Preserve row height, collection identity width, numeric alignment, signature truncation, and timestamp formatting during future wallet refreshes.
- Render collection names and primary collection links in `color.text.primary`/White across holdings and activity tables. Do not use muted gray for the main portfolio drill-down target.
- Use a profile summary band for wallet identity and top signals so `Me` has a clear first-viewport identity while remaining dense and utility-first.
- Mark `Me` as the active route semantically when the portfolio view is shown. The brand action may return to Pulse in the local prototype, but production route behavior remains unresolved.
- Future wallet integrations need disconnected, loading, empty, hidden-wallet, stale, and indexer-error states that reserve the portfolio layout rather than collapsing the page.

## Stats Implementation Rules

Visual source: `OM-008-network-stats`; local alignment source: `OM-PROT-004-stats`.

- Keep the `Stats` view in the shared app shell with search-first navigation and no sidebar or marketing header.
- Lead the local `Stats` prototype with NFT marketplace stats: a KPI band, marketplace volume and listing-depth graphs, visual summary panels, marketplace overview table, and collection routing table for listing platforms such as Magic Eden, Tensor, OKX NFT, Exchange.Art, and Hyperspace.
- Model marketplace stats with local types before integration: platform rows should include marketplace name, short label, source coverage, SOL volume, sales count, listing count, average sale, floor movement, and share; collection rows should include collection, top marketplace, floor, listings, sales, volume, and spread.
- Treat local marketplace data as placeholder until marketplace APIs, DAS queries, indexer output, or aggregator sources are confirmed. Do not infer marketplace stats from the mock Pulse event feed.
- Use the captured network stats visual language only as styling reference: shallow bordered bands, uppercase section titles, optional metric, info icon, and the three-line horizontal rule cluster. Keep the local Stats view scoped to NFT marketplace data.
- Render local NFT marketplace graph fixtures through the shared Recharts adapter with grid lines, right-axis labels, bottom bucket labels, custom tooltip, `accessibilityLayer`, and accessible summaries. The volume graph should use exactly 12 two-hour SOL-volume buckets for the 24H view; the listing-depth graph should use floor-band inventory buckets rather than another generic time line. Chart panels should follow the `3RV-0` sizing relationship: one continuous two-column band, 298 px panel height, shared outer border, vertical divider, large header metric derived from the plotted buckets, sparse body field, and footer metadata anchored to the lower edge. Keep chart panels stable when the renderer is lazy-loading, missing, loading, or no-data, and browser-QA any future production chart layer.
- Render marketplace visual summaries with the `3Y3-0` distribution model: one continuous three-column band, shared outer border, vertical dividers, no card gaps, dominant first-panel value, compact middle-list content, and thicker square bars in the third panel.
- Use fixed table layouts for marketplace overview and collection routing. Preserve row height, platform/collection identity width, numeric alignment, percentage formatting, and horizontal overflow during future refreshes.
- Preserve native table semantics for marketplace and collection tables; stacked identity, value, and trend content must live inside inner wrappers.
- Mark `Stats` as the active route semantically when the marketplace stats view is shown. The local prototype replaces the observed `Network` slot, but production route behavior remains unresolved.
- Future marketplace integrations need loading, stale, partial-source, empty, and source-error states that reserve the NFT Stats layout rather than collapsing the page.

## Private Payments API Landing Implementation Rules

Prototype source: `OM-PROT-005-private-payments-api`; Paper node `3JV-0`.

- Treat the Paper artboard as prototype guidance, not captured production evidence.
- Current local implementation lives in `../eclipse (private-payments)` and uses Vite 8, React 19, TypeScript 6, and `lucide-react`.
- Scope the current build to the active Paper tree: Helius nav clone plus hero/install command. Do not recreate older capability grids, workflow tabs, terminal previews, or footers unless they reappear in Paper or receive explicit content direction.
- Keep the page on the shared black app canvas with the 1480 px rail, 18 px desktop gutter, 72 px Helius nav clone from Paper node `3OA-0`, IBM Plex Sans UI copy, Geist Mono command/terminal content, and square 0 px corners on command blocks, tiles, chips, terminal shells, and CTAs.
- Current Paper state uses `Become invisible` as the hero headline over the Private Payments API value prop. Confirm whether production should keep that marketing headline or return the H1 to the product/page name for route clarity.
- Use one primary command block per section. The hero now uses the terminal-style install pattern from Paper node `3R7-0`, adapted into node `4BN-0`; verify the command target before production implementation.
- Implement command blocks with real buttons for copy/start actions, visible focus, copied/error feedback, and accessible labels that include the command purpose.
- Keep capability tiles shallow: one border, one surface, mono glyph or approved icon, title, and short copy. Do not introduce shadows, nested cards, or decorative gradients.
- If the workflow tabs become interactive, use semantic tabs or `aria-pressed` segmented buttons and keep the active treatment as selected fill/weight plus the red-orange primary accent.
- Terminal previews should use redacted placeholder addresses, emails, signatures, and API keys. Never render real secrets in marketing/demo transcripts.
- Keep Private Payments API facts current before implementation: supported transaction types, unsigned transaction format, swap routing behavior, mint initialization requirements, and authentication model may change.
- Responsive implementation should collapse capability tiles to one column, keep command blocks readable, and allow terminal lines to wrap or scroll horizontally without changing section order.

## Pulse React Best-Practice Notes

Apply the Vercel React best-practices skill when Pulse moves beyond static prototype data:

- `bundle-barrel-imports`: import table, icon, formatter, and chart helpers directly so the monitor route does not pull unrelated UI code.
- `bundle-conditional`: keep future heavy charting, validator diagnostics, marketplace, or stream-inspection icon sets out of the initial monitor route until their panels are opened.
- `bundle-dynamic-imports`: defer heavy charting, stream diagnostics, validator diagnostics, or marketplace-specific panels until the user opens them or the feature is enabled. Pulse currently lazy-loads `StatsRechartsBarChart` so Recharts stays out of the initial monitor bundle.
- `async-parallel`: fetch independent DAS metadata, network stats, validator context, marketplace context, and account labels in parallel; start requests early and await only where the UI needs the result.
- `client-event-listeners`: keep one feed listener or subscription manager per live source, then distribute normalized events through local state rather than attaching listeners per table.
- `rerender-memo`: memoize row components, expensive currency/relative-time formatting, and normalized identity objects once real event volume grows.
- `rerender-functional-setstate`: use functional state updates for mock or real feed inserts so interval/listener callbacks do not depend on stale snapshots.
- `rendering-animate-svg-wrapper`: animate row/cell wrappers and metric cells rather than SVG icons directly.
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
