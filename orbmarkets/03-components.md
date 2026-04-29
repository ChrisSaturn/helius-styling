# Components

This page documents reusable OrbMarkets UI components. Add a component here when it appears in multiple production captures or is likely to be reused by front-end implementation.

## Component Record Format

Each component should include:

- Purpose.
- Anatomy.
- Variants.
- States.
- Data constraints.
- Responsive behavior.
- Accessibility expectations.
- Production evidence.
- Implementation notes.

## Initial Component Inventory

| Component | Status | Notes |
| --- | --- | --- |
| App shell | Observed in `OM-001-home` | Page container plus reusable desktop top navigation placement. |
| Desktop top navigation | Observed in `OM-001-home` | `orb` lockup, search rail, utility action, route links, network entry, settings control. |
| Global search | Observed in `OM-001-home` | Header search with placeholder and `/` shortcut affordance; suggestions still pending. |
| Settings popup | Prototype in `OM-PROT-003-settings` | Anchored global settings dialog with placeholder display, density, network, and alert controls; not production evidence. |
| AI analysis popup | Observed in `OM-009-ai-analysis-popup` | Compact tool modal with red outline, centered copy, primary AI action, and Lana handoff. |
| Primary AI action button | Observed in `OM-009-ai-analysis-popup` | Filled red `Analyze` button with AI icon and mono label. |
| Assistant handoff CTA | Observed in `OM-009-ai-analysis-popup` | Bordered secondary CTA for `Go deeper with Lana`. |
| Data table | Observed in `OM-001-home` | Dense market table, fixed columns, 20 visible rows, sorting affordances. |
| Token market row | Observed in `OM-001-home` | Individual token row from Paper node `4X-0`; sizing, colors, and action placement confirmed. |
| Token detail header | Observed in `OM-005-token-detail` | Token identity, favorite, score, copy, social links, and compact `BUY` action. |
| Summary stat grid | Observed in `OM-005-token-detail` | 2 by 2 token stat matrix for Supply, Liquidity, Market Cap, and FDV. |
| Token KPI band | Observed in `OM-005-token-detail` | Three-column Price, Holders, and 24H Volume metric strip. |
| Time-series chart | Observed in `OM-005-token-detail` | Paper captured the shell; screenshot confirms red line, grid, axes, timeframe, mode, and live controls. |
| Recharts chart adapter | Prototype in `OM-PROT-004-stats` | Tokenized Pulse adapter for Recharts bar charts; not production evidence. |
| Entity tab bar | Observed in `OM-005-token-detail` | Markets, History, Holders, Metadata, Social. |
| Top markets table | Observed in `OM-005-token-detail` | Token-specific market rows with liquidity, volume, trades, unique count, and pagination. |
| Market item row | Observed in `OM-005-token-detail` | Individual token market row from Paper node `1HQ-0`; paired logos, venue subtitle, and fixed numeric columns. |
| Monitor KPI strip | Prototype in `OM-PROT-001-pulse` | Four compact metric cells for event-monitor summary values derived from the current mock feed snapshot; not production evidence. |
| NFT event table | Prototype in `OM-PROT-001-pulse` | Dense sales/listings tables with fixed columns, stable row heights, capped mock-refresh rows, and future live-feed constraints. |
| NFT identity cell | Prototype in `OM-PROT-001-pulse` | Placeholder image tile plus item and collection copy for monitor rows. |
| Profile summary band | Prototype in `OM-PROT-002-portfolio` | Bordered wallet identity and signal band under `Me`; not production evidence. |
| Portfolio holdings table | Prototype in `OM-PROT-002-portfolio` | Dense collection exposure table under `Me`; not production evidence. |
| Portfolio activity table | Prototype in `OM-PROT-002-portfolio` | Dense wallet activity table under `Me`; not production evidence. |
| Marketplace trend chart | Prototype in `OM-PROT-004-stats` | NFT marketplace-volume and listing-depth Recharts bar panels under `Stats`; not production evidence. |
| Marketplace visual summary panel | Prototype in `OM-PROT-004-stats` | Platform share, collection volume, and floor momentum bars under `Stats`; not production evidence. |
| Marketplace stats table | Prototype in `OM-PROT-004-stats` | Dense NFT listing-platform comparison table under `Stats`; not production evidence. |
| Collection routing table | Prototype in `OM-PROT-004-stats` | Dense top-marketplace table for NFT collections under `Stats`; not production evidence. |
| Network stats section header | Observed in `OM-008-network-stats` | Uppercase panel title, optional headline metric, info icon, and three-line rule cluster. |
| Recent blocks panel | Observed in `OM-008-network-stats` | Compact block stream with leader, identity, transaction count, muted row, and pause action. |
| Network chart panel | Observed in `OM-008-network-stats` | TPS and SOL price panels with headline values and compact controls; production evidence only, not used in local NFT Stats. |
| Validator summary panels | Observed in `OM-008-network-stats` | Validator count, client distribution, and node version share bars. |
| Active validators table | Observed in `OM-008-network-stats` | Dense validator table with toolbar, toggles, sorting, stake values, commission states, and pagination. |
| Epoch status panel | Observed in `OM-008-network-stats` | Epoch progress bar, elapsed/remaining copy, slot links, and epoch constants. |
| Developer landing header | Prototype in `OM-PROT-005-private-payments-api` | 72 px Helius nav clone from Paper node `3OA-0`; not production evidence. |
| Developer command block | Prototype in `OM-PROT-005-private-payments-api` | Red-accent command surface for install commands, API examples, or copy actions. |
| Developer tool chip | Prototype in `OM-PROT-005-private-payments-api` | Compact mono chips below the hero command for MCP, CLI, SDK, TypeScript SDK, Rust SDK, LaserStream, and Webhooks. |
| Developer capability tile | Future Private Payments lower section | Shallow six-card developer capability grid is not present in the current `3JV-0` Paper tree; defer until redrawn. |
| Developer workflow terminal | Future Private Payments lower section | Static terminal preview pattern is not present in the current `3JV-0` Paper tree; defer until redrawn. |
| Developer workflow rail | Prototype in `OM-PROT-005-private-payments-api` | Four-step recommendation rail for developer workflows. |
| Hash or address display | Pending capture | Truncation, copy action, link behavior, monospace usage. |
| Score badge | Observed in `OM-001-home` | Hex grade badge for A/B/C market score. |
| Status badge | Pending capture | Transaction status, validator status, risk or health states. |
| Stat tile | Observed in `OM-005-token-detail` | Token summary stats and KPI panels. |
| Detail panel | Observed in `OM-005-token-detail` | Label/value pairs, grouped token metadata, nested actions. |
| Tabs | Observed in `OM-001-home`, `OM-005-token-detail` | Category navigation and token entity section navigation. |
| Filters | Observed in `OM-001-home` | Time-window segmented control for market table. |
| Toast or feedback | Pending capture | Copy confirmation, errors, and async action feedback. |

## App Shell

- Purpose: provide the page frame for dense explorer and market views.
- Anatomy: reusable desktop top navigation, black app canvas, route content area.
- States: default observed; hover, focus, auth, and menu-open states pending.
- Implementation notes: keep the header compact at desktop widths; do not replace the search-first header with a marketing hero.
- Production evidence: `OM-001-home`, Paper node `2-0`.

## Desktop Top Navigation

- Purpose: anchor every primary OrbMarkets view with brand identity, token search, user entry, network context, and global settings.
- Anatomy: left `orb` lockup, full-height search rail with leading search icon, typed value or placeholder, trailing utility icon, `/` keyboard shortcut affordance, `Me` route link, `Network` route or selector, and square settings button.
- Variants: desktop default observed; authenticated user, active route, network menu open, settings menu open, compact tablet, and mobile variants remain pending.
- States: typed search state observed in Paper node `2-0`; hover, focus, active route, disabled, menu-open, and loading/search-suggestion states pending.
- Data constraints: search content must truncate before colliding with the trailing utility cluster; `Network` must support longer network labels or degrade into an icon/selector at narrower widths.
- Responsive behavior: at desktop width, preserve a 69 px header height and keep search dominant. Do not wrap the nav row. Below the unresolved breakpoint, collapse secondary links before reducing search tap target quality.
- Accessibility expectations: use a landmark `nav`, expose the search as a labeled input, give the utility/settings icon buttons accessible names, preserve visible focus rings, and mark active route/network state with semantic attributes plus selected text/fill treatment instead of relying only on color.
- Implementation notes: build this as a reusable navigation component, with global search as a child component rather than duplicating search markup per route. Keep nav links text-based and compact; use icon buttons only for utility actions.
- Prototype note: the local `/pulse` implementation now uses the observed secondary nav slot as a `Stats` route for mock NFT marketplace stats and borrows the compact panel styling from `OM-008-network-stats`; production naming between `Stats` and `Network` still needs route confirmation.
- Production evidence: `OM-001-home`, Paper node `2-0`, source `https://app.paper.design/file/01KQ91NY8A16SXDG8G6QEJVM78/1-0/2-0`.

## Global Search

- Purpose: primary route entry for token lookup and market navigation.
- Anatomy: search icon, placeholder or typed input text, trailing utility action, `/` shortcut affordance.
- States: typed state observed in Paper node `2-0`; empty, suggestions, loading, and no-result states pending.
- Data constraints: placeholder and typed values must fit inside the header without resizing the header.
- Accessibility expectations: expose a real input, visible focus state, keyboard shortcut hint, and accessible label.
- Production evidence: `OM-001-home`, Paper node `2-0`.

## Settings Popup

- Purpose: expose global product preferences without leaving the current explorer, Pulse, or portfolio context.
- Anatomy: anchored popup shell, compact icon/title row, icon-only close action, grouped setting rows with small leading icons, segmented controls, one toggle, and a small footer action.
- Variants: placeholder open state exists in `OM-PROT-003-settings`; persisted preferences, loading, auth-gated settings, and mobile full-screen variants remain unresolved.
- States: closed trigger, open trigger, active segment, inactive segment, checked toggle, hover, and focus states are implemented locally. Disabled and saved/error states remain unresolved.
- Data constraints: setting labels and segment labels must truncate or fit inside the compact popup without changing row height.
- Responsive behavior: desktop anchors to the settings icon; narrow viewports use a fixed inset popup and full-width segment groups.
- Accessibility expectations: trigger exposes `aria-expanded`, `aria-controls`, and `aria-haspopup="dialog"`; popup renders as a labelled dialog, closes on Escape, and has a labelled close button.
- Implementation notes: keep the popup to one visible square-corner shell with direct rows and subtle dividers, not nested cards. Do not wrap `Display`, `Density`, or `Network` rows in separate bordered containers, and do not wrap choices such as `Dark` and `System` in their own visible subcontainers. Use selected text fill/color and weight as the default selected marker for secondary settings controls. Reserve red-orange outlines for primary or production-confirmed main controls and visible focus treatment, not routine placeholder selection. Icons are Lucide-based, decorative beside visible labels, and sized small enough to preserve row density.
- Prototype reference: [pulse.md](./pulse.md). This is not production evidence.

## AI Analysis Popup

- Purpose: invite the user to run AI-generated token analysis while preserving the current token context.
- Anatomy: red-accent modal shell, header AI icon, `AI Token Analysis` title, close icon, divider, centered heading, explanatory copy, filled `Analyze` button, and bordered `Go deeper with Lana` secondary CTA.
- Variants: idle state observed; analyzing, generated result, error, rate-limit, unsupported token, and mobile full-screen variants remain pending.
- States: default idle state observed; hover, focus, disabled, loading, close transition, and post-analysis result states pending.
- Sizing: Paper node `1QP-0` is 380 px wide by 331 px high. Header is roughly 50 px high. Primary action is approximately 112 x 36 px. Secondary CTA is approximately 222 x 58 px.
- Color: black modal fill, red outer stroke, charcoal divider, red primary button, muted body text, bordered black secondary CTA, and darker left icon tile inside the Lana CTA.
- Data constraints: keep the explanatory copy short enough to remain a centered two-line paragraph at 380 px width. Do not insert long token names into the title area unless a wider or responsive variant is captured.
- Responsive behavior: unresolved. Treat 380 px as the compact reference and keep the action stack centered until the full overlay behavior is captured.
- Accessibility expectations: render as a labelled dialog, trap focus while open, close on Escape, return focus to the trigger, expose the close button label, and include token context in the primary action label when available.
- Implementation notes: keep the popup focused on one decision. Do not add extra panels, helper rows, or analysis output in the idle state unless production confirms them.
- Production evidence: `OM-009-ai-analysis-popup`, Paper node `1QP-0`, source `https://app.paper.design/file/01KQ91NY8A16SXDG8G6QEJVM78/1-0/1QP-0`.

## Primary AI Action Button

- Purpose: start AI token analysis from the popup.
- Anatomy: compact filled red button, leading AI icon, `Analyze` label.
- Typography: label appears mono and technical, matching the product's data-forward tone.
- States: default observed; hover, focus, disabled, loading, success, and error states pending.
- Accessibility expectations: use a real button, announce loading state, prevent duplicate requests while analysis is running, and include token context in the accessible name when available.
- Production evidence: `OM-009-ai-analysis-popup`, Paper node `1QP-0`.

## Assistant Handoff CTA

- Purpose: route the user from a lightweight analysis prompt into the deeper Lana assistant path.
- Anatomy: bordered square-corner container, left dark icon tile, bold `Go deeper with Lana` label, and right diagonal arrow.
- States: default observed; hover, focus, pressed, loading, and unavailable states pending.
- Data constraints: preserve enough horizontal room for the Lana label; if the assistant name changes, recheck the 380 px popup width.
- Accessibility expectations: expose whether the action opens a new route, external destination, or assistant panel once behavior is confirmed.
- Implementation notes: this is a secondary action, not a second primary button. Keep it visually quieter than `Analyze`.
- Production evidence: `OM-009-ai-analysis-popup`, Paper node `1QP-0`.

## Token Detail Header

- Purpose: identify the selected token and provide immediate token-level actions.
- Anatomy: favorite star, circular token logo, verification badge, title, token type, truncated token address, copy action, score badge, social/external icons, and compact `BUY` button.
- States: default populated Wrapped SOL header observed; hover, focus, watchlisted, copied, disabled, and buy-loading states pending.
- Data constraints: title and ticker must remain readable while long addresses truncate before the copy action. Missing logos, missing verification, or missing socials should not shift the title and action rhythm.
- Accessibility expectations: favorite, copy, social links, score badge, and `BUY` action require explicit labels with token context.
- Production evidence: `OM-005-token-detail`, Paper node `1AG-0`.

## Summary Stat Grid

- Purpose: expose secondary token fundamentals near the header without competing with the chart.
- Anatomy: 2 by 2 matrix with label/value pairs for Supply, Liquidity, Market Cap, and FDV.
- States: populated observed; loading, missing, stale, and error states pending.
- Data constraints: values can be very large and should align right without forcing the grid to resize.
- Implementation notes: use fixed columns at desktop width and tabular numeric rendering where available.
- Production evidence: `OM-005-token-detail`, Paper node `1AI-0`.

## Token KPI Band

- Purpose: summarize the chart-adjacent headline metrics before the user reads the plot.
- Anatomy: three equal panels for Price, Holders, and 24H Volume; each panel uses a compact label chip, optional status direction, timeframe text, and a large value.
- States: price negative and volume positive states observed; neutral holders state observed. Loading, stale, missing, and zero states pending.
- Data constraints: large values such as 24H volume must fit without changing column widths.
- Implementation notes: preserve equal columns and dividers; do not turn these panels into independent floating cards.
- Production evidence: `OM-005-token-detail`, Paper node `1AI-0`.

## Time-Series Chart

- Purpose: show token price movement for the selected timeframe.
- Anatomy: chart frame, red corner brackets, top-left timeframe segmented control, optional `Live` chip, plot grid, red or green series line, right-side y-axis labels, bottom x-axis labels, and bottom-left line/candle mode controls.
- States: Paper captured an empty chart shell; the supplied browser screenshot confirms the complete 24H rendered state. Loading, empty, no-data, error, live-on, live-off, tooltip, and candle mode states remain pending.
- Data constraints: y-axis labels must fit on the right without changing the plot size during live updates. The chart must reserve a stable height while hydrating or when data is missing.
- Accessibility expectations: expose controls as real buttons or tabs, provide visible focus, and include a non-visual summary of the chart data or a data-table fallback.
- Implementation notes: treat the chart as a reusable shell with independently rendered data layers. Paper may not capture canvas-rendered series, so front-end QA must verify the rendered line, axes, grid, and tooltip in a browser.
- Production evidence: `OM-005-token-detail`, Paper node `1AG-0`, user-supplied browser screenshot.

## Recharts Chart Adapter

- Purpose: give Pulse and future Orb prototype charts a shared Recharts implementation that still follows Orb chart tokens, spacing, and accessibility rules.
- Anatomy: stable chart figure, lazy-loaded Recharts renderer, `ResponsiveContainer`, `BarChart`, horizontal `CartesianGrid`, bottom `XAxis`, right `YAxis`, tokenized `Bar`, black custom tooltip, non-visual summary, and stable loading fallback.
- Variants: marketplace volume bars and listing-depth histogram bars in `OM-PROT-004-stats`; future line, area, and composed variants should reuse the same shell before adding new chart-library styling.
- States: loaded, lazy-loading, hover/focus tooltip, reduced-motion-aware animation, no-data, stale, and source-error states. The current Pulse prototype implements loaded, lazy-loading, and hover/focus tooltip states.
- Data constraints: chart data should be normalized to `{ label, value, detail }`-style points before it reaches the visual component. Axis labels and tooltip content must format through caller-provided `Intl` formatters so marketplace, token, and network charts do not hardcode number formats.
- Responsive behavior: chart height is reserved by the surrounding panel; Recharts must resize inside that area without changing the Stats band height or moving footer metadata.
- Accessibility expectations: enable Recharts `accessibilityLayer`, keep a labelled figure and hidden summary, expose tooltip values in visible text, preserve keyboard focus, and avoid relying only on bar color for meaning.
- Implementation notes: use Orb CSS variables such as `--color-chart-grid`, `--color-chart-axis-text`, `--color-chart-bar`, `--color-chart-bar-hover`, and `--color-chart-cursor`; do not use generic `--chart-1`/`--chart-2` tokens, shadcn chart fills, rounded Recharts defaults, tiny default bars, or pulse animations unless they are explicitly mapped to Orb roles. Define explicit square bar sizes per chart variant so the 12-bucket volume chart remains sparse at desktop and still compresses cleanly. Lazy-load heavy Recharts renderers from the route that needs them so the default monitor bundle does not pull chart code.
- Prototype reference: [pulse.md](./pulse.md). This is not production evidence.

## Entity Tab Bar

- Purpose: switch between token-specific sections without leaving token context.
- Anatomy: text tabs for Markets, History, Holders, Metadata, and Social.
- States: Markets active observed; hover, focus, disabled, and loading states pending.
- Implementation notes: active state uses selected text fill, font weight, and section position. Do not add orange outlines to secondary tabs.
- Production evidence: `OM-005-token-detail`, Paper node `1FI-0`.

## Top Markets Table

- Purpose: list token markets by venue and liquidity/activity metrics.
- Anatomy: table title, column headers, market item rows, rate, liquidity, volume, trades, unique count, rows-per-page control, and pagination.
- States: populated table observed; sort indicators visible for Liquidity and Volume (24H). Loading, empty, error, row hover, selected row, and pagination disabled states pending.
- Data constraints: pool names, venue names, rates, and high-volume values must align without column jumping.
- Accessibility expectations: use real table semantics, labeled sort buttons, row links with market context, and accessible pagination.
- Production evidence: `OM-005-token-detail`, Paper node `1G7-0`.

## Market Item Row

- Purpose: show one liquidity venue or pool for the active token in a scan-friendly table row.
- Anatomy: paired overlapping circular token logos, two-line market identity with pair name and venue subtitle, rate, liquidity, volume (24H), trades (24H), and unique (24H).
- Sizing: Paper node `1HQ-0` is a full-width table row within the token detail markets table. The row is approximately 50-56 px high, with a compact paired-logo cluster and a two-line identity stack.
- Color: row background is black; bottom divider is subtle charcoal; pair name and numeric values are near-white; venue subtitle is muted gray.
- States: default row observed; hover, selected, focused, loading, empty-logo, missing-venue, and row-error states pending.
- Data constraints: market pair names should truncate after preserving both token symbols when possible. Venue labels are secondary and can truncate first. Numeric columns should stay fixed and align consistently for currency, decimal, and integer formats.
- Responsive behavior: desktop row observed; responsive pruning is unresolved. Preserve market identity, liquidity, and 24H volume before lower-priority activity columns at narrow widths.
- Accessibility expectations: if the row links to a market or pool detail, expose pair and venue in the link name. Logo images need useful alt text or should be hidden when redundant with text.
- Implementation notes: do not reuse the home `Token Market Row` component directly. This row has no favorite, rank, score, or buy action, and its identity cell represents a market pair plus venue rather than a single token.
- Production evidence: `OM-005-token-detail`, Paper node `1HQ-0`, source `https://app.paper.design/file/01KQ91NY8A16SXDG8G6QEJVM78/1-0/1HQ-0`.

## Monitor KPI Strip

- Purpose: summarize a live or near-live event monitor without breaking the dense table workflow.
- Anatomy: equal-width metric cells with label, value, and optional delta/status text.
- States: derived mock-feed placeholder and refresh animation observed in `OM-PROT-001-pulse`; loading, stale, empty, and error states are future work.
- Data constraints: metric values must truncate or scale within the cell without resizing neighboring cells. When metrics are derived from live or mock rows, recalculation must not change cell count or band height.
- Responsive behavior: four columns on desktop, two columns on tablet, one column on narrow mobile.
- Accessibility expectations: expose the strip as a labelled region and keep status/delta text readable without relying only on color.
- Implementation notes: keep the strip as one bordered band with dividers, not a grid of floating cards. The current Pulse build uses fixed minimum cell height, tabular values, subtle Lucide icon tiles, responsive 4/2/1 column behavior, KPI values derived from the current mock sales/listings snapshot, and a CSS-only refresh pulse keyed by snapshot sequence.
- Prototype reference: [pulse.md](./pulse.md). This is not production evidence.

## NFT Event Table

- Purpose: scan recent NFT sales or listings in a monitor view shaped for future WebSocket or webhook event streams.
- Anatomy: table title row, fixed table columns, NFT identity cell, marketplace, price, account identifiers, signature or listing ID, and timestamp.
- States: populated and mock-refreshing placeholder observed in `OM-PROT-001-pulse`; newest mock rows receive a short incoming animation. Hover, sorting, loading, empty, error, pinned, and paused-live states remain unresolved.
- Data constraints: item names, collection names, addresses, signatures, listing IDs, and marketplace names must truncate without changing row height or column widths.
- Responsive behavior: preserve columns through horizontal overflow at narrow widths rather than compressing values into unreadable fragments.
- Accessibility expectations: use real table semantics, scoped headers, visible focus, and labelled links for item, account, signature, and listing targets.
- Implementation notes: use a fixed table layout and stable row height so future live inserts do not cause layout shift. Collection names and main row/entity clickables should use the White or primary text role, `color.text.primary`; reserve secondary and muted text for supporting marketplace, account, signature, listing, and timestamp metadata. The current Pulse build uses 64 px rows, fixed column widths, horizontal overflow, memoized row components, Lucide icons in table headers, square-corner market/action labels, identifiers, timestamps, capped visible mock rows, CSS-only incoming-row animation on table cells and inner content, and `content-visibility` on table panels. Batch or window incoming rows before rendering high-volume live feeds.
- Prototype reference: [pulse.md](./pulse.md). This is not production evidence.

## NFT Identity Cell

- Purpose: identify the NFT event subject in a compact table row.
- Anatomy: small square placeholder image or future NFT image, item name, and collection subtitle.
- States: placeholder image observed in `OM-PROT-001-pulse`; real image loading, broken image, verified collection, and compressed mobile variants remain unresolved.
- Data constraints: preserve item names before collection names. Collection names can truncate first but should not be demoted to muted metadata; render them in the White or primary text role, `color.text.primary`, when they identify or link to the collection.
- Accessibility expectations: avoid redundant image alt text when adjacent text already names the item; row links need item and collection context.
- Implementation notes: placeholder tiles must keep a fixed footprint so image loading or missing metadata does not alter row height. The current Pulse build uses a neutral 40 x 40 px tile instead of collection-tone fills, keeping strong color reserved for active controls and data status.
- Prototype reference: [pulse.md](./pulse.md). This is not production evidence.

## Marketplace Stats Table

- Purpose: compare NFT listing platforms in the `Stats` view before live marketplace or aggregator sources are wired.
- Anatomy: table title row, platform identity cell, market share, SOL volume, sales count, listing count, average sale, and 24H floor movement.
- States: populated placeholder observed in `OM-PROT-004-stats`; sorting, platform filters, loading, stale, empty, and source-error states remain unresolved.
- Data constraints: marketplace names, coverage descriptions, volume, sales, listings, and percentage deltas must truncate or format without changing row height or fixed column widths.
- Responsive behavior: preserve platform, share, volume, listings, and floor movement through horizontal overflow before dropping less-critical coverage copy.
- Accessibility expectations: use real table semantics, scoped headers, non-color text for positive/negative deltas, and accessible labels for inert marketplace links.
- Implementation notes: reuse the dense table-panel rhythm, fixed columns, 64 px row cadence, primary text treatment for platform names, mono numeric values, and neutral platform logo tile from the Pulse monitor. Keep mock platform data separate from network stats so future ME, Tensor, OKX, Exchange.Art, Hyperspace, DAS, or aggregator integrations can replace it cleanly.
- Prototype reference: [pulse.md](./pulse.md). This is not production evidence.

## Marketplace Trend Chart

- Purpose: make NFT marketplace activity more visual without introducing live network metrics.
- Anatomy: stats-style panel header, three-line rule cluster, headline metric, Recharts bar or histogram buckets, grid lines, right-side y-axis labels, bottom x-axis labels, custom tooltip, accessible summary, and compact footer metadata.
- Variants: 2-hour marketplace volume columns and floor-band listing-depth histogram.
- States: rendered Recharts prototype graph fixtures observed in `OM-PROT-004-stats`; live, stale, no-data, and source-error states remain unresolved.
- Data constraints: chart labels and values must not resize the panel. The marketplace volume chart uses exactly 12 two-hour buckets for the 24H view; do not substitute 24 network TPS-style buckets or live chain metrics. Real marketplace source changes should update the series without shifting surrounding cards or tables.
- Accessibility expectations: each Recharts graph needs `accessibilityLayer`, a labelled figure, a non-visual summary, keyboard-reachable tooltip behavior where practical, and visible text that backs the visual encoding.
- Implementation notes: reuse the captured `3RV-0` network stats panel rhythm, but keep the data strictly NFT marketplace related. Render marketplace graphs as one continuous two-column band with a shared outer border, vertical divider, 298 px panel height, large header metric derived from plotted buckets, sparse body, and footer metadata pinned to the lower edge. Style Recharts through the Orb chart adapter with neutral primary bars, neutral cursor fill, right-side y-axis labels, bottom bucket labels, and no per-bar pulse/entry animation rather than ad hoc SVG geometry or generic chart palette variables. Do not show SOL price, TPS, validators, client distribution, or epoch data in the local Stats view.
- Prototype reference: [pulse.md](./pulse.md). This is not production evidence.

## Marketplace Visual Summary Panel

- Purpose: summarize marketplace share, collection volume, and floor momentum before the user scans dense tables.
- Anatomy: stats-style panel header, compact rows, mono values, horizontal share or momentum bars, and positive/negative text states.
- Variants: platform share, collection volume, and floor momentum.
- States: populated placeholder observed in `OM-PROT-004-stats`; filtering, loading, stale, empty, and source-error states remain unresolved.
- Data constraints: marketplace and collection names must truncate before moving numeric values or changing panel height.
- Implementation notes: follow the `3Y3-0` summary distribution: one continuous three-column band with shared outer border, vertical dividers, no card gaps, a dominant centered value in the first panel, a compact legend/list in the middle panel, and thicker square bars in the third panel. Bars are supporting visuals and must be backed by visible text.
- Prototype reference: [pulse.md](./pulse.md). This is not production evidence.

## Collection Routing Table

- Purpose: show which marketplace currently leads liquidity for tracked NFT collections in the `Stats` view.
- Anatomy: table title row, collection identity cell, top marketplace label, floor, listing count, sales count, volume, and spread.
- States: populated placeholder observed in `OM-PROT-004-stats`; collection filters, loading, stale, empty, and source-error states remain unresolved.
- Data constraints: collection names, top-market labels, floor values, counts, volumes, and spreads must remain stable under refresh and truncate inside fixed columns.
- Responsive behavior: preserve collection, top market, floor, volume, and spread through horizontal overflow on narrow viewports.
- Accessibility expectations: keep native table semantics and include signed spread text so direction is not color-only.
- Implementation notes: reuse the NFT identity cell and fixed table rhythm from monitor and portfolio tables. Collection names and primary collection links stay in `color.text.primary`/White; supporting listing counts and market labels can use secondary roles.
- Prototype reference: [pulse.md](./pulse.md). This is not production evidence.

## Table Cell Safety

- Purpose: keep dense tables visually continuous and semantically correct across production and prototype lists.
- Rule: do not apply `display: grid`, `display: flex`, `display: block`, or layout containment directly to `table`, `thead`, `tbody`, `tr`, `th`, or `td` unless replacing native table semantics intentionally.
- Anatomy: use native table elements for structure, then place stacked content inside inner wrappers such as numeric stacks, identity cells, or action clusters.
- Failure mode: styling a `<td>` as grid or flex can fragment row dividers, desynchronize column height, and produce broken list lines like the reference screenshot.
- Accessibility expectations: keep real table semantics, scoped headers, and predictable cell relationships for assistive technology.
- Implementation notes: continuous dividers, stable row height, and fixed columns must be verified in browser after table CSS changes.

## Profile Summary Band

- Purpose: make the `Me` profile view feel distinct without introducing marketing layout or floating cards.
- Anatomy: one bordered full-width band with a wallet avatar tile, wallet/profile copy, accent rail, and compact signal cells.
- States: populated placeholder observed in `OM-PROT-002-portfolio`; connected-wallet, disconnected, hidden-wallet, stale-index, and multi-wallet states remain unresolved.
- Data constraints: wallet labels, addresses, and signal values must truncate inside their cells without resizing the band.
- Responsive behavior: two-column band on wider viewports, stacked identity and signal rows on narrow viewports.
- Accessibility expectations: expose the band as a labelled profile summary region and keep signal meaning in text, not color alone.
- Implementation notes: use restrained brand accent for identity/emphasis only; keep the band inside the dense app shell.
- Prototype reference: [pulse.md](./pulse.md). This is not production evidence.

## Portfolio Holdings Table

- Purpose: summarize wallet-owned collection exposure under the `Me` portfolio view.
- Anatomy: table title row, collection identity cell, item count, floor price, portfolio value, listed count, and 24H change.
- States: populated placeholder observed in `OM-PROT-002-portfolio`; connected-wallet, disconnected, loading, empty, hidden-wallet, and indexer-error states remain unresolved.
- Data constraints: collection names, item counts, floor values, total values, and listed counts must not resize columns during wallet refreshes.
- Responsive behavior: preserve horizontal overflow at narrow widths and keep collection identity, value, and 24H change readable first.
- Accessibility expectations: use real table semantics; expose collection links with portfolio context and include non-color text for positive/negative change.
- Implementation notes: reuse the neutral NFT identity tile and fixed 64 px table-row rhythm from the Pulse monitor. Collection names and primary collection links use `color.text.primary`/White, while secondary holding metadata can stay muted. Keep stacked numeric content inside wrappers so `<td>` remains a table cell.
- Prototype reference: [pulse.md](./pulse.md). This is not production evidence.

## Portfolio Activity Table

- Purpose: show recent wallet actions without leaving the `Me` portfolio context.
- Anatomy: action badge, NFT identity cell, marketplace, SOL value, signature link, and timestamp.
- States: populated placeholder observed in `OM-PROT-002-portfolio`; loading, empty, failed activity fetch, copied signature, and pagination states remain unresolved.
- Data constraints: action labels should stay compact; signatures truncate visually while preserving full accessible labels and title text.
- Responsive behavior: preserve action, NFT, value, signature, and timestamp through horizontal table overflow before dropping less-critical marketplace context.
- Accessibility expectations: table headers must be scoped; signature links need full-value labels; timestamps need machine-readable `dateTime` values.
- Implementation notes: keep portfolio activity visually equivalent to monitor events so wallet and live-feed tables share a common dense table contract. Keep stacked numeric content inside wrappers so `<td>` remains a table cell.
- Prototype reference: [pulse.md](./pulse.md). This is not production evidence.

## Network Stats Section Header

- Purpose: give each network stats panel a compact title while preserving a dense dashboard rhythm.
- Anatomy: uppercase title, optional headline metric, info icon, three-line horizontal rule cluster, and optional right-side control.
- States: default observed; tooltip, loading, and error variants remain unresolved.
- Data constraints: long titles should truncate before colliding with right-side controls. Headline metrics remain short and tabular.
- Implementation notes: use this inside network stat panels only; it is a section header, not a card title pattern for marketing layouts.
- Production evidence: `OM-008-network-stats`, Paper node `1ZQ-0`.

## Recent Blocks Panel

- Purpose: show current block production in a scan-friendly stream.
- Anatomy: header with pause control, block rows, block number, leader name, truncated leader identity, and transaction count.
- States: populated and one muted row observed; paused, resumed, stale, empty, and error states remain unresolved.
- Data constraints: block numbers, leader names, identities, and tx counts must not change row height during refresh.
- Accessibility expectations: expose the pause action as a labelled button and preserve full leader identity in link labels or titles.
- Implementation notes: rows can animate on refresh, but row dimensions, scroll position, and focus must remain stable.
- Production evidence: `OM-008-network-stats`, child node `1ZT-0`.

## Network Chart Panel

- Purpose: reserve chart real estate for chain activity and price movement while keeping headline values visible.
- Anatomy: 667 x 298 px panel unit with uppercase title, info icon, large headline metric, three-line rule cluster, sparse chart field, secondary metric label, bottom metadata line, checkbox toggle, or compact timeframe controls.
- Variants: Network TPS and SOL price.
- States: populated headline with chart shell observed in Paper; the local Stats prototype uses this rhythm for marketplace Recharts bars with axis labels, custom tooltips, and accessible summaries. Loading, no-data, stale, and error states remain unresolved.
- Data constraints: chart axes and values must fit without moving controls during live updates. Header metrics should stay in the header group; footer metadata and toggles stay anchored to the bottom edge.
- Accessibility expectations: toggles and timeframe buttons need semantic state; chart content needs a labelled chart region, keyboard-reachable data where practical, and a non-visual summary.
- Production evidence: `OM-008-network-stats`, child node `1ZT-0`.

## Validator Summary Panels

- Purpose: summarize validator count, client concentration, and node version distribution before the user reads the full table.
- Anatomy: one continuous three-column band with vertical dividers; large centered validator count in the first column; client legend rows positioned in the lower-middle of the second column; node version label/value rows with thick square horizontal share bars in the third column.
- States: populated observed; loading, zero, partial-source, and stale states remain unresolved.
- Data constraints: percentages and version strings must truncate or wrap inside the panel without changing the three-panel row height.
- Implementation notes: color dots are data markers; include client names and percentages in text so meaning is not color-only. Do not render validator summaries as separate floating cards with gaps.
- Production evidence: `OM-008-network-stats`, child node `1ZT-0`.

## Active Validators Table

- Purpose: let users compare validator stake, version, APY, weight, and commission at network scale.
- Anatomy: title/toolbar row, total count copy, active-only toggle, grid button, sortable headers, validator identity cell, APY, active stake, stake weight, commission, and pagination.
- States: populated table observed; sorting, filtered, grid mode, row hover, selected row, loading, empty, stale, and error states remain unresolved.
- Data constraints: validator names, identities, versions, stake values, and percentages must fit fixed columns. Commission color must be backed by text.
- Responsive behavior: keep native table semantics and horizontal overflow at narrow widths.
- Accessibility expectations: use scoped headers, labelled sort controls, labelled toggles, non-color commission state, and labelled pagination.
- Implementation notes: validator data can grow large; memoize rows and use windowing or content visibility when needed. Do not apply flex or grid display to native table rows or cells.
- Production evidence: `OM-008-network-stats`, child node `24E-0`.

## Validator Identity Cell

- Purpose: identify one validator in the active validators table.
- Anatomy: fixed logo or placeholder, primary validator name, and muted identity/version metadata.
- States: populated observed; missing logo, unverified name, delinquent, and inactive variants remain unresolved.
- Data constraints: preserve the validator name first, then truncate identity/version metadata.
- Implementation notes: keep the logo footprint fixed so real logos and placeholders do not change row height.
- Production evidence: `OM-008-network-stats`, child node `24E-0`.

## Epoch Status Panel

- Purpose: show where the network is within the current epoch and expose slot-level context.
- Anatomy: epoch header, progress bar, elapsed/remaining copy, started timestamp, start/current/elapsed slot values, epochs per year, slots in epoch, and estimated duration.
- States: populated observed; near-boundary epoch transition, stale, loading, and RPC-error states remain unresolved.
- Data constraints: large slot values must use tabular formatting and must not resize the panel.
- Accessibility expectations: progress needs an accessible label; slot links need full-value labels and should not rely only on external-link icons.
- Production evidence: `OM-008-network-stats`, child node `2G3-0`.

## Developer Command Block

- Purpose: make install/setup commands the primary action on developer landing pages.
- Anatomy: shallow black command shell, compact terminal chrome when used as the hero install block, mono label, mono command text, red-orange accent border, and compact copy/start action.
- Variants: install command terminal, API request example, SDK install, MCP install, plugin install, CLI signup, generic config snippet.
- States: default prototype observed; copied, copy-error, focus, hover, loading, and disabled states remain unresolved.
- Data constraints: commands can be long and must truncate or wrap without changing the block height unexpectedly.
- Accessibility expectations: copy buttons need explicit labels such as `Copy Private Payments API request example` and copied/error feedback.
- Implementation notes: use red-orange only for the primary command in the section. Secondary commands should use subtle borders unless they are the main CTA. The current Private Payments hero uses source node `3R7-0` adapted into replacement node `4BN-0`.
- Local implementation: `../eclipse (private-payments)` renders this as a real copyable command block with copied-state feedback.
- Prototype reference: `OM-PROT-005-private-payments-api`, Paper node `3JV-0`; install source node `3R7-0`.

## Developer Tool Chip

- Purpose: identify supported Helius setup surfaces without turning the hero into a full product matrix.
- Anatomy: shallow black chip, subtle border, mono label.
- Variants: MCP, CLI, SDK, TypeScript SDK, Rust SDK, LaserStream, Webhooks.
- States: static prototype observed; hover/link states remain unresolved.
- Data constraints: longer SDK names should wrap or move to the next chip row without resizing the command block.
- Implementation notes: treat chips as secondary labels unless route targets are confirmed. Keep the square-corner treatment and do not add icons or colored status dots to every chip.
- Prototype reference: `OM-PROT-005-private-payments-api`, Paper node `3JV-0`.

## Developer Capability Tile

- Purpose: summarize one developer-facing Helius primitive in a compact landing-page grid.
- Anatomy: mono glyph or future icon, primary title, short utility copy, shallow black surface, and subtle border.
- Variants: unresolved for Private Payments API; the current Paper tree does not include capability tiles.
- States: static prototype observed; hover, focus, link, selected, and disabled states remain unresolved.
- Data constraints: titles should stay one line where practical; body copy should stay within two to three compact lines.
- Implementation notes: keep tiles shallow and avoid decorative images unless approved product logos are used. Do not nest cards inside tiles.
- Prototype reference: `OM-PROT-005-private-payments-api`, Paper node `3JV-0`.

## Developer Workflow Terminal

- Purpose: show how a developer or agent can execute a Helius setup, API, or transaction-building workflow without leaving the page.
- Anatomy: terminal shell, small title bar, status dots, mono command/output transcript, and optional adjacent workflow rail.
- States: future pattern only for the Private Payments API; running, success, error, copied, and expanded states remain unresolved.
- Data constraints: generated examples should be plausible but not expose real keys, emails, wallets, or signatures.
- Accessibility expectations: terminal content should be supplemented by normal text instructions when it is essential to the flow.
- Prototype reference: `OM-PROT-005-private-payments-api`, Paper node `3JV-0`.

## Category Tabs

- Purpose: switch the home market table between watchlist and market categories.
- Anatomy: text-only tabs with underline active state.
- Variants: Watchlist, Trending, Majors, DeFi, Stocks, Commodities, Cults.
- States: active and inactive observed; hover and focus pending.
- Implementation notes: active state uses selected text fill and underline, not color alone. Do not turn category tabs into pill-style controls or outlined button groups.
- Production evidence: `OM-001-home`.

## Market Data Table

- Purpose: let users scan ranked tokens and compare live market metrics.
- Anatomy: favorite action, rank, token identity, price, trendline, change, market cap, volume, score, buy action.
- Variants: category and time-window filtered views.
- States: populated rows, active sort context, and chart tooltip observed; loading, empty, error, and selected rows pending.
- Data constraints: symbols stay prominent, names truncate, values use compact units, and prices support high precision.
- Responsive behavior: desktop wide observed; mobile and tablet unresolved.
- Accessibility expectations: meaningful table headers, keyboard reachable sort controls, non-color score labels, and accessible row actions.
- Implementation notes: use fixed column widths and stable row heights to prevent layout shift during live updates.
- Production evidence: `OM-001-home`, Paper nodes `16-0` and `2I1-0`.

## Token Market Row

- Purpose: present one ranked token in a scan-friendly row with enough actions for watchlisting, detail navigation, score review, and buying.
- Anatomy: favorite star, rank, circular token logo, symbol/name stack, price, change, market cap, volume, score badge, and Buy action.
- Sizing: node `4X-0` is approximately 1336 px wide by 64 px high. Token logo is ~40 px. Favorite icon is ~18-20 px. Buy button is ~56 px wide by ~40 px high. Score badge occupies roughly a 32-40 px square footprint.
- Color: row background is black; row dividers use subtle charcoal; primary values are near-white; token name and rank are muted gray; negative change is red; A score badge uses green text and outline with a dark green fill; Buy uses black fill with orange-red outline.
- States: default row observed; hover, selected, focused, watchlisted, row-loading, row-error, and Buy loading states pending.
- Data constraints: keep ticker symbols untruncated where possible; truncate token names first; preserve numeric column alignment for large market caps, high-volume values, and high-precision prices.
- Responsive behavior: desktop row observed; responsive column pruning is unresolved. Preserve token identity, price/change, and primary action longest.
- Accessibility expectations: star button needs a label such as `Add SOL to watchlist`; Buy button should include token context such as `Buy SOL`; score badge needs a non-color label; nested row actions need clear keyboard order.
- Implementation notes: maintain the 64 px row height with invisible hit areas where needed. Do not increase the visible star icon or Buy button just to meet hit-target size; expand the interactive box around them.
- Production evidence: `OM-001-home`, Paper node `4X-0`, source `https://app.paper.design/file/01KQ91NY8A16SXDG8G6QEJVM78/1-0/4X-0`.

## Score Badge

- Purpose: compress market quality into a fast-scannable grade.
- Anatomy: angular hex badge, grade letter, tinted fill and outline.
- Sizing: node `4X-0` shows the badge occupying roughly a 32-40 px square footprint inside the 64 px row.
- Color: `A` uses green text/outline and a very dark green fill. `B` and `C` are observed elsewhere in `OM-001-home` as warning yellow and negative red variants.
- Variants: `A` positive green, `B` warning yellow, `C` negative red.
- States: default observed; tooltip, hover, and explanation state pending.
- Accessibility expectations: expose the grade and score meaning as text, not only color.
- Production evidence: `OM-001-home`, Paper node `4X-0`.

## Buy Button

- Purpose: row-level trading entry point.
- Anatomy: compact text button with orange-red outline.
- Sizing: node `4X-0` shows an approximately 56 px by 40 px button inside the 64 px row.
- Color: black fill, orange-red border, muted light text.
- States: default observed; hover, focus, disabled, loading, and pending transaction states unresolved.
- Accessibility expectations: label the action with token context, for example `Buy SOL`.
- Implementation notes: preserve the compact footprint; avoid primary filled styling unless production confirms it.
- Production evidence: `OM-001-home`, Paper node `4X-0`.

## State Checklist

For every interactive component, confirm:

- Default.
- Hover.
- Focus.
- Active or selected.
- Disabled.
- Loading.
- Empty.
- Error.

For secondary or utility controls, selected state should prefer selected text fill/color, font weight, semantic attributes, and quiet neutral surfaces before any orange outline. Orange outlines belong to primary actions, production-confirmed main controls, or visible focus states that need extra contrast.

Main clickables, row drill-down labels, and collection names should read as White or `color.text.primary`. Avoid styling the user's primary click target as secondary gray unless the action is intentionally de-emphasized.
