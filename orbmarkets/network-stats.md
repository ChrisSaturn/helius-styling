# Network Stats Capture

## Metadata

- ID: `OM-008-network-stats`
- Date captured: 2026-04-28
- Source URL: https://app.paper.design/file/01KQ91NY8A16SXDG8G6QEJVM78/1-0/1ZQ-0
- Paper MCP reference: file `Helius`, page `Page 1`, node `1ZQ-0`; child nodes include `1ZT-0` for recent blocks and chart/stat panels, `24E-0` for active validators, `2G3-0` for epoch state, and `1ZR-0` for the page grouping. Detail references: `3RV-0` for the 667 x 298 Network TPS panel sizing and typography; `3Y3-0` for the three-column validator summary distribution.
- Screen or flow: Solana network stats, validator distribution, active validators, and epoch status.
- Viewport: Desktop Paper capture.
- Auth state: Not confirmed.
- Data state: Populated production-like network data. Chart plot series are not visible in the Paper capture; the local Pulse Stats prototype now renders NFT marketplace charts through a tokenized Recharts adapter while real production network chart rendering still needs browser verification.
- Related docs: [Visual Language](./02-visual-language.md), [Components](./03-components.md), [Page Patterns](./04-page-patterns.md), [Interaction and Motion](./05-interaction-motion.md), [Front-End Implementation](./06-frontend-implementation.md)

## Purpose

The network stats screen lets users scan chain activity, validator health, client concentration, software versions, active stake distribution, and epoch progress from one dense explorer page. It is operational rather than promotional: the first viewport prioritizes current blocks, TPS, SOL price, validator counts, active validators, and epoch timing.

## First-Viewport Read

- Primary visual signal: black network dashboard with compact section headers, thin dividers, and dense tabular validator data.
- Main action: inspect current network condition and validator distribution without leaving the Stats view.
- Main data object: Solana network health and validator state.
- Secondary actions: pause recent blocks, switch SOL price timeframe, include or exclude vote transactions, toggle active validators, switch validator grid/table mode, sort validator columns, paginate validators, and open slot or validator links.
- Navigation context: this should sit under the shared desktop app shell from `OM-001-home`. The local Pulse prototype maps this captured production layout to its `Stats` navigation state.

## Layout

- Page shell: full black app canvas with no marketing hero, sidebar, decorative background, or card stack.
- Section rhythm: content is segmented into bordered panels and full-width bands. Panels are shallow square-corner containers with 1 px charcoal borders.
- Header style: section titles are uppercase, mono, and left aligned. They pair with an info icon and a three-line horizontal rule cluster that stretches across the remaining panel width.
- Recent blocks: first panel lists recent block rows with block number, leader name, truncated leader identity, and transaction count. One row appears muted, while active rows are brighter.
- Chart row: two equal-width panels. `3RV-0` confirms the Network TPS panel as a 667 x 298 unit: uppercase mono title around 13-14 px, info icon near the title, large ~30 px headline metric, three thin horizontal rules filling the remaining header width, a secondary metric label near the upper-left body, mostly empty reserved chart space, bottom-left `Last 2h` metadata preceded by a short horizontal rule, and a bottom-right toggle label/control. `SOL PRICE` follows the same panel unit with compact timeframe segments `1H`, `24H`, `7D`, `1M`, `1Y`, with `24H` active.
- Validator summary row: `3Y3-0` confirms a continuous three-column 1336 px band with vertical dividers and no card gaps. Validator count centers a large `748` value in the first column, client distribution positions a compact legend in the lower-middle of the second column, and node versions uses label/value rows with thick square horizontal bars in the third column.
- Active validators: full-width table with a toolbar, active-only toggle, grid icon, sortable rank and active stake headers, validator identity cells, APY, active stake, stake weight, and commission.
- Epoch status: full-width panel with `EPOCH 963`, one progress bar, elapsed and remaining timing, started timestamp, slot values with external-link icons, and epoch-level constants.
- Responsive behavior: not captured. At narrower widths, preserve the vertical order: recent blocks, charts, validator summaries, active validators, epoch. Tables should use horizontal overflow before column compression.

## Visual Rules Observed

- Background: pure or near-pure black canvas.
- Surface: panels use black fill and subtle charcoal borders, not elevated cards.
- Dividers: rows, vertical panel separators, table headers, pagination, and chart metadata rules use low-contrast 1 px lines. Panel headers use inline three-rule clusters instead of full-width bottom borders.
- Typography: dense mono labels for section headers, controls, slot values, identities, and metadata; sans or heavier text for large numeric values and validator names.
- Iconography: small outline info icons, pause square, sort arrows, grid toggle, pagination chevrons, and external-link icons. Icons support visible labels rather than replacing critical text.
- Color: white and gray dominate. Red-orange is reserved for the active SOL price timeframe and shared product accent. Green, amber, red, purple, teal, and white appear only as data-status or distribution markers.
- Corner treatment: panels, controls, progress tracks, toggles, and pagination use 0 px square corners; validator logos may remain circular or logo-shaped when the asset requires it.
- Density: high information density with large values only where scan priority requires it. The validator table remains the largest information surface.

## Components Observed

| Component | Variant | State | Notes |
| --- | --- | --- | --- |
| Network stats section header | Panel title with rule cluster | Default | Uppercase title, optional headline metric, info icon, and three-line horizontal rule cluster. |
| Recent blocks panel | Block stream list | Populated, one muted row | Block, leader, truncated identity, tx count, and pause action. |
| Network TPS panel | Chart panel | Populated headline, empty Paper chart capture, local Recharts-based marketplace prototype reference | Headline TPS, `True TPS`, rendered chart body, footer metadata, vote toggle. |
| SOL price panel | Chart panel | `24H` active | Headline price and five compact timeframe controls. |
| Validator count panel | Large stat | Populated | Centered count and superminority subtext. |
| Client distribution panel | Legend list | Populated | Client rows with colored markers and percentages. |
| Node versions panel | Share bars | Populated | Version labels with percentage bars and `others` bucket. |
| Active validators table | Dense validator table | Populated | Toolbar, active-only toggle, grid toggle, sortable headers, identity cells, APY, stake, weight, commission, pagination. |
| Validator identity cell | Validator table identity | Populated | Logo/placeholder, validator name, identity/version metadata. |
| Epoch status panel | Epoch progress and stats | Populated | Progress bar, elapsed/remaining labels, started time, slot links, duration constants. |

## Interaction Behavior

- Recent blocks: pause action is visible. Resume state, paused label, and live cadence remain unresolved.
- Chart controls: TPS has an include-vote checkbox. SOL price has compact timeframe buttons with `24H` active. Tooltips and chart data update behavior remain unresolved.
- Validator toolbar: active-only toggle is visible and checked. Grid toggle is visible. Filter, search, and inactive-grid behavior remain unresolved.
- Sorting: rank and active stake show sort icons. Direction, multi-sort, and keyboard sort behavior remain unresolved.
- Pagination: active validators table shows `1 - 10 of 879` with previous/next controls. Disabled edge states remain unresolved.
- Links: slot values use external-link icons. Validator identity or leader links are implied by truncated identifiers, but exact target routes remain unresolved.
- Motion: no decorative animation is observed. Future live updates should preserve layout, scroll position, and focus. Use subtle incoming-data feedback only where it clarifies changed rows or refreshed metrics.
- Loading, empty, stale, and error states are not captured.

## Front-End Notes

- Component changes: add a network stats page made from recent blocks, chart panels, validator summary panels, active validators table, and epoch status panel.
- Panel distribution constraints: chart panels should share a contiguous bordered band with column dividers instead of independent floating cards. Three-up stat summaries should also render as one bordered band with equal columns, vertical dividers, and sparse interior alignment.
- Data constraints: block numbers, identities, validator names, versions, stake values, percentages, and slot values must not resize panels or table columns during refresh.
- Chart constraints: Paper captured chart shells but not rendered chart series. The local Pulse Stats prototype uses Recharts only as an NFT marketplace chart adapter with axis labels, custom tooltips, and accessible summaries; keep chart dimensions stable and browser-verify the production network renderer when real data is connected.
- Table constraints: preserve native table semantics. Use inner wrappers for validator identity, values, and icons rather than changing `tr`, `th`, or `td` display behavior.
- Accessibility considerations: expose toggles as real controls, use scoped table headers, label icon-only buttons, include non-color commission/APY meanings, and preserve full identifiers in accessible labels.
- Performance considerations: validator data can be large. Use fixed column widths, memoized rows, and windowing or content visibility when row counts exceed the first viewport.

## Open Questions

- Confirm the production route for network stats and whether it is labelled `Stats`, `Network`, or both.
- Confirm live refresh cadence for recent blocks, TPS, SOL price, validator table, and epoch progress.
- Confirm chart implementation and whether the missing chart series is a Paper capture limitation.
- Confirm sorting behavior, default sort field, validator row click target, and validator detail route.
- Confirm whether the active-only toggle changes counts, pagination totals, and table rows immediately or after a fetch.
- Confirm grid-mode layout and responsive mobile behavior.
- Confirm loading, stale, partial-source, empty, and RPC/source-error states.

## Shared Docs Updated

- [Visual Language](./02-visual-language.md): network panel density, section header rule cluster, validator table, and epoch progress surface notes.
- [Components](./03-components.md): network stats headers, recent blocks, chart panels, validator summaries, active validators, and epoch status.
- [Page Patterns](./04-page-patterns.md): network stats page pattern.
- [Interaction and Motion](./05-interaction-motion.md): chart controls, validator toggles, sorting, pagination, and live-update constraints.
- [Front-End Implementation](./06-frontend-implementation.md): implementation rules for local Stats alignment and future live network data.
