# Pulse Prototype

## Metadata

- ID: OM-PROT-001-pulse
- Related prototype IDs: OM-PROT-002-portfolio, OM-PROT-003-settings, OM-PROT-004-stats
- Date captured: 2026-04-28
- Source URL: Local prototype `/pulse`
- Styling reference: current `https://orbmarkets.io/` dense market-table shell and user-supplied screenshot, used for visual alignment only.
- Paper MCP reference: None. This is intentional prototype guidance, not captured production evidence.
- Screen or flow: Pulse NFT sales and listings monitor; `Me` portfolio view; `Stats` NFT marketplace stats view using the `OM-008-network-stats` visual panel style without network data; placeholder Settings popup
- Viewport: Desktop-first Vite app with narrow viewport table overflow behavior
- Auth state: Prototype unauthenticated shell
- Data state: Seeded placeholder NFT event rows with a 4.5 second mock-feed refresh for Pulse sales, listings, timestamp, and derived KPI metrics; portfolio and NFT marketplace stats data remain static placeholder data, with Recharts Stats graph fixtures split into hourly marketplace-volume buckets and floor-band listing-depth buckets
- Related docs: [Components](./03-components.md), [Page Patterns](./04-page-patterns.md), [Interaction and Motion](./05-interaction-motion.md), [Front-End Implementation](./06-frontend-implementation.md)

## Purpose

Pulse is a prototype monitor view for scanning NFT sale and listing activity before Helius WebSocket, webhook, DAS, or marketplace integrations are wired in. The local Pulse monitor now simulates a live feed by replacing the visible latest sales and latest listings rows with generated mock events every 4.5 seconds and recalculating monitor KPIs from the current mock snapshot. The local `Me` view adds a portfolio prototype for wallet-level NFT holdings and activity before auth or wallet data integrations are wired in. The local `Stats` view is now NFT-only: it compares marketplace stats across listing platforms such as Magic Eden, Tensor, OKX NFT, Exchange.Art, and Hyperspace, while borrowing the compact chart-panel and three-line rule styling from `OM-008-network-stats` without rendering chain-health panels. Its top graphs use a lazy-loaded, tokenized Recharts adapter: a 2-hour marketplace-volume column chart and a floor-band listing-depth histogram. The shared settings trigger opens a placeholder global settings popup so the top-navigation utility behavior can be styled and tested before real preference persistence exists.

## First-Viewport Read

- Primary visual signal: `Pulse` title with a compact mock-live status and time-window controls.
- Main action: scan the latest NFT sales and listings tables as mock rows refresh in place.
- Main data object: placeholder NFT event snapshots shaped for future on-chain or webhook event ingestion.
- Secondary actions: global search, time-window buttons, settings popup, inert item/address/signature links.
- Navigation context: shared Orb-style top navigation shell with the user-supplied Pulse logo rendered in the Orb red-orange accent and the `winniepoo-mert/favicon_io` browser icon bundle wired through Vite static assets.

## Me Profile Read

- Primary visual signal: `Profile` title with compact `Portfolio` status, wallet context, and profile summary band.
- Main action: scan wallet-level portfolio metrics, collection holdings, and recent activity.
- Main data object: placeholder holdings and wallet activity shaped for future auth and wallet-indexer ingestion.
- Secondary actions: global search, time-window buttons, inert collection/NFT/signature links.
- Navigation context: `Me` is the active top-nav control; the brand button returns to the Pulse monitor in the local prototype.

## Stats Read

- Primary visual signal: `Stats` title with compact NFT marketplace status and time-window controls.
- Main action: compare marketplace volume, listing depth, platform share, collection volume, floor movement, and top collection routing across listing platforms.
- Main data object: placeholder marketplace and collection stats shaped for future marketplace, DAS, aggregator, or indexer ingestion.
- Secondary actions: global search, time-window buttons, keyboard-focusable graph buckets, and inert marketplace or collection links.
- Navigation context: `Stats` is the active top-nav control and replaces the local prototype `Network` entry.

## Settings Popup Read

- Primary visual signal: compact `Settings` popup anchored to the global settings icon.
- Main action: inspect placeholder display, density, network, and sales-alert controls.
- Main data object: static preference placeholders; no real persisted settings.
- Secondary actions: close icon, Done action, Escape key, and local navigation close the popup.
- Navigation context: popup preserves the current Pulse, `Me`, or `Stats` page state.

## Layout

- Page shell: black app canvas with the shared top navigation and a constrained content width.
- Site rail: header and main content share the same horizontal spacing tokens: 1480 px max shell, 18 px desktop gutter, 14 px tablet gutter, and 12 px mobile gutter.
- Header: left-aligned title/status stack with right-aligned time-window segmented control.
- Main grid: KPI strip followed by two full-width monitor tables.
- Sidebar or secondary rail: none.
- Table or list behavior: fixed table layouts, stable row heights, horizontal overflow at narrow widths, two-line NFT identity cells, and capped visible latest rows while mock events rotate through the tables.
- Responsive behavior: navigation and KPI cells stack before table columns compress; dense tables preserve columns through horizontal scroll.
- Profile layout: same shell and KPI/table stack as Pulse, with a profile summary band plus holdings and activity tables instead of sales and listings.
- Stats layout: marketplace KPI strip, a Paper-aligned two-panel chart band, a Paper-aligned three-panel visual summary band, and two dense NFT marketplace tables.
- Settings layout: anchored 360 px utility popup on desktop; fixed inset popup with stacked controls on narrow viewports. The popup should stay shallow: one shell, direct setting rows, subtle dividers, and no nested row cards or per-choice subcontainers.

## Visual Rules Observed

- Background: black canvas from the Orb visual token set.
- Surface: charcoal navigation/search and control fills; monitor tables remain black with dividers.
- Border: 1 px subtle charcoal borders; red-orange accent only for main active controls, primary emphasis, or focus states that need stronger contrast.
- Typography: IBM Plex Sans stack for UI text; Geist Mono stack for metadata, identifiers, chips, and timestamps.
- Iconography: compact Lucide utility icons across navigation, settings rows, page titles, metric cells, profile signals, table headers, market/action labels, identifiers, and timestamps, plus the Pulse logo mark in the brand rail and the `winniepoo-mert/favicon_io` favicon set for browser and installed-app surfaces. Icons support labels rather than replacing them.
- Corner treatment: 0 px corners on visible controls, table frames, KPI bands, settings popup, progress tracks, data markers, and utility surfaces. Circular treatment is reserved for asset-defined logos and plot points.
- Spacing: dense table rhythm with short section headers and stable rows.
- Density: scan-first; no marketing hero, decorative background, or card grid.

## Styling Best-Practice Notes

These notes refine the current Pulse build against the observed Orb table style. They are prototype guidance until confirmed in production.

- Sizing: use the Orb market-table rhythm as the anchor. Header controls, KPI cells, NFT image tiles, and table rows need explicit min/max dimensions so hover, loading, image fetches, or live inserts cannot resize the monitor.
- Horizontal spacing: header content, page header, profile summary band, KPI strip, and table panels must sit on the same site rail. Do not hardcode separate left/right padding values for top navigation and page content.
- Color: pull all fills, borders, text, and status values from [Visual Language](./02-visual-language.md). Avoid one-off greens, reds, and charcoal values; only status deltas, chart lines, score states, primary actions, and production-confirmed main active controls should introduce stronger color.
- Text hierarchy: collection names and main clickables use the White or primary text role, `color.text.primary`, including inert prototype links. Keep muted gray for supporting metadata like marketplace, account, signature, listing, and timestamp labels.
- Highlight usage: separate selected, focused, hovered, and status states. Secondary selected states should use selected text fill/color and weight before orange outlines. The red-orange border is for main controls, primary action emphasis, or visible focus, not generic decoration. Positive and negative highlights must include text or icon meaning, not color alone.
- Surface composition: keep settings and monitor controls flat. Do not place `Display` inside a visible container inside `Settings`, and do not place `Dark` and `System` inside additional visible subcontainers. Use rows, spacing, and dividers to create hierarchy.
- Corner treatment: Pulse follows Orb with square 0 px corners for search, nav controls, segmented controls, status labels, metric bands, table panels, popups, toggles, progress bars, and marketplace labels. Do not reintroduce rounded corners for prototype polish.
- Icon usage: use 12-13 px icons in dense table metadata, 15-18 px icons in nav/buttons, and restrained 28-32 px icon tiles only for page titles or metric emphasis. Do not rely on icons alone for status meaning.
- React performance: keep row rendering predictable. Memoize expensive row/cell formatting, use primitive dependencies for filters and time windows, batch future live events before state updates, and defer heavy chart or stream tooling until the feature is active.

## Components Observed

| Component | Variant | State | Notes |
| --- | --- | --- | --- |
| Desktop top navigation | Prototype reuse | Idle/search-ready | Mirrors captured Orb shell proportions and search dominance. |
| Time-window control | Monitor prototype | `24H` active | Uses compact segmented buttons for future event filtering. |
| KPI strip | Monitor prototype | Derived mock feed | Four equal metric cells with optional delta/status text and compact Lucide metric icons; Pulse metrics are recalculated from the current mock sales/listings snapshot. |
| NFT event table | Sales and listings | Mock-refreshing placeholder | Fixed columns, stable row heights, icon-labelled table headers, capped visible latest rows, and horizontal scroll on narrow viewports. |
| NFT identity cell | Placeholder image | Populated placeholder | Small square initials tile plus item and collection copy with a subtle NFT icon beside the item link. |
| Address/signature link | Inert placeholder | Default/focusable | Uses a small hash icon, truncation, and mono text until real Orb URLs exist. |
| Portfolio KPI strip | `Me` portfolio | Populated placeholder | Reuses the compact metric band for wallet value, held NFTs, listings, and realized activity. |
| Profile summary band | `Me` profile | Populated placeholder | Bordered wallet identity band with a restrained accent rail and compact signal cells. |
| Portfolio holdings table | `Me` portfolio | Populated placeholder | Fixed columns for collection exposure, floor, value, listed count, and 24H change. |
| Portfolio activity table | `Me` portfolio | Populated placeholder | Fixed columns for wallet action, NFT, marketplace, value, signature, and time. |
| Marketplace trend chart band | `Stats` marketplace view | Rendered Recharts bar charts from static prototype fixtures | Marketplace volume and listing-depth graphs in one continuous two-panel band with shared outer border, vertical divider, Paper-style header scale, derived headline metrics, grid lines, right-side y-axis labels, x-axis bucket labels, custom tooltip, accessible summaries, and stable 298 px panel rhythm. |
| Marketplace visual summary band | `Stats` marketplace view | Populated placeholder | Three continuous panels with shared outer border, vertical dividers, dominant platform share value, collection volume list, and floor momentum bars. |
| Marketplace stats table | `Stats` marketplace view | Populated placeholder | Fixed columns for listing platform, market share, volume, sales, listings, average sale, and 24H floor movement across ME, Tensor, OKX NFT, Exchange.Art, and Hyperspace. |
| Collection routing table | `Stats` marketplace view | Populated placeholder | Fixed columns for collection, top marketplace, floor, listings, sales, volume, and spread. |
| Settings popup | Global utility | Open placeholder | Anchored labelled dialog with grouped rows, segmented controls, one toggle, and close/Done actions. |

## Interaction Behavior

- Search: real input in the shared shell; suggestions and query routing are not implemented.
- Navigation: `Me` switches to the portfolio view and `Stats` switches to the NFT marketplace stats view with `aria-current="page"`; the brand button returns to Pulse.
- Settings: settings opens a labelled placeholder dialog with `aria-expanded` on the trigger and closes on Escape, close, Done, brand navigation, or `Me` navigation.
- Filters: time-window buttons are keyboard-focusable placeholders; filtering logic is intentionally deferred.
- Mock refresh: the Pulse view seeds the tables from local placeholder rows, then inserts one generated sale and one generated listing every 4.5 seconds while keeping the visible row count capped and updating the header timestamp.
- Incoming data animation: the newest generated sale/listing rows use a brief accent-fill, left-rail, and content slide/fade treatment. The derived KPI cells use a short refresh pulse when the mock snapshot changes. Animations must not change row height, column width, scroll position, or keyboard focus.
- Sorting: not implemented; table headers are static labels in this prototype.
- Table safety: native table cells are preserved; stacked numeric content lives inside inner wrappers so row dividers stay continuous.
- Copy action: not implemented.
- Links: inert anchors preserve future Orb link placement for NFT items, accounts, signatures, and listing IDs.
- Loading: not implemented; future loading states should preserve table heights and column widths. The current mock refresh is not a loading state and should not imply real stream health.
- Empty: not implemented; future empty states should live inside the table frame without replacing the monitor layout.
- Error: not implemented.

## Front-End Notes

- Token changes: no new production tokens; Pulse reuses Orb black canvas, charcoal controls, subtle borders, selected text fill, muted metadata, and dense table rhythm. Red-orange accent remains reserved for main controls, primary emphasis, and focus.
- Component changes: add reusable monitor, portfolio, and marketplace stats patterns for high-frequency event rows, wallet holdings, wallet activity, Recharts marketplace volume/depth graphs, platform share, collection volume, floor momentum, marketplace overview rows, and collection routing rows with stable dimensions; add a placeholder settings popup pattern for global utility preferences; use the supplied Pulse SVG mark with the `Pulse` wordmark in the nav brand rail; publish the `winniepoo-mert/favicon_io` bundle from Vite `public` assets and link it from `pulse/index.html`; keep mock-feed generation and marketplace stats fixtures separate from rendering so future Helius, DAS, marketplace, or aggregator normalization can replace them.
- Data constraints: NFT names, collection names, platform names, account addresses, signatures, and listing IDs must truncate without resizing columns. Collection names, marketplace names, and main clickable labels remain White/`color.text.primary`; secondary metadata can truncate in muted roles.
- Accessibility considerations: use real table semantics, visible focus, labelled search, labelled icon buttons, a labelled settings dialog, and accessible names for inert placeholder links.
- Performance considerations: future live feeds should batch incoming events and keep table layout fixed to avoid reflow during updates. The local mock feed uses one interval with functional state updates, caps visible rows, derives KPI metrics during render from primitive snapshot data, and runs incoming-data feedback through CSS animations keyed by row identity and snapshot sequence. Follow the Vercel React rules called out in [Front-End Implementation](./06-frontend-implementation.md), especially direct imports, stable derived state, fixed rendering dimensions, and content visibility for long monitor sections.

## Current Implementation Alignment

- `pulse/src/App.tsx` now uses the supplied Pulse SVG mark in the nav brand rail, a compact icon/title/status monitor header, local view state for Pulse, `Me` profile/portfolio, and NFT-only `Stats` marketplace visuals, local Pulse feed state seeded from placeholder rows, a single mock-refresh interval, derived Pulse KPI metrics, incoming-row flags for the newest generated sale/listing rows, KPI refresh sequencing, lazy-loaded Recharts bar graphs with derived totals for marketplace volume and listing depth, placeholder settings popup state, Escape-to-close behavior, `aria-current` on active nav, `aria-expanded` on the settings trigger, `aria-pressed` on active time windows/settings segments, static Lucide icon imports, memoized sales/listing/portfolio/stats rows, module-level currency/time formatters, inner numeric stacks, and full-value accessibility labels for truncated identifiers.
- `pulse/src/StatsRechartsBarChart.tsx` owns the Recharts-specific renderer for Pulse Stats, including `ResponsiveContainer`, `BarChart`, right-side `YAxis`, bottom `XAxis`, horizontal grid, square bars, custom tooltip, `accessibilityLayer`, chart-domain ticks, and non-visual summaries. It is lazy-loaded from the Stats chart band so Recharts does not enter the initial Pulse monitor bundle.
- `pulse/index.html` links `favicon.ico`, 16 px and 32 px PNG icons, Apple touch icon, and the web app manifest from `/winniepoo-mert/favicon_io/`; `pulse/public/winniepoo-mert/favicon_io` contains the served favicon bundle, and the manifest now uses Pulse names plus black theme/background colors.
- `pulse/src/pulseData.ts` owns the mock feed helpers and static stats placeholders: `createInitialPulseFeed`, `createNextPulseFeed`, `buildPulseMetrics`, generated mock sale/listing row factories, fixed visible-row caps, deterministic collection/marketplace/wallet pools, NFT marketplace stats, 2-hour marketplace-volume buckets, floor-band listing-depth buckets, collection routing stats, and the 4.5 second mock interval constant.
- `pulse/src/styles.css` should align to the updated Orb rules with a shared 1480 px site shell, 18/14/12 px horizontal gutters, 69 px desktop navigation bar, 61 px search rail, square 0 px visible UI corners, Pulse logo sizing in the brand rail, anchored settings popup, profile summary band, one bordered KPI band, Paper-aligned continuous Stats chart and summary bands, tokenized Recharts chart surfaces/tooltips, 64 px table rows, fixed 40 px neutral NFT thumbnails, restrained hover states, selected text fill for secondary states, Lucide icon sizing rules, red-orange reserved for brand/main active/focus treatment, table-panel `content-visibility`, native table-cell preservation, incoming row and KPI refresh animations, and reduced-motion handling.
- Browser check: the local Vite preview renders Pulse, `Me` portfolio, and Settings popup states without console warnings or errors.

## Open Questions

- Exact Orb route formats for NFT items, marketplace listings, signatures, and account pages.
- Exact Orb route format for `Me`, wallet portfolio pages, and wallet switching.
- Auth, privacy, disconnected-wallet, hidden-wallet, and empty-portfolio states.
- Real settings persistence, saved/error states, focus trap, focus return, outside-click behavior, and account-scoped preferences.
- Whether live Pulse should support row-level copy buttons, sorting, marketplace filters, collection filters, pause/resume controls, or a visible distinction between generated mock rows and real stream rows.
- Whether high-volume feeds require virtualization once real-time updates are enabled.
- Which marketplace APIs, marketplace normalizer, DAS query, or aggregator source should back `Stats` once mock platform data is replaced.

## Documentation Update Status

- `03-components.md` records the monitor KPI strip, NFT event table, NFT identity cell, portfolio components, Recharts chart adapter, NFT marketplace stats components, settings popup implementation constraints, selected text-fill rules, White/primary text treatment for collection names and main clickables, mock-feed metric derivation, and shallow surface composition rules.
- `04-page-patterns.md` records the Pulse monitor, `Me` portfolio, NFT-only `Stats` marketplace view, and global settings popup patterns, including flat settings rows and capped mock-refresh rows.
- `05-interaction-motion.md` records the active timeframe, mock-live refresh cadence, incoming-data animation, `Me` and `Stats` navigation, marketplace stats placeholder behavior, settings popup, inert-link behavior, and secondary selected-state treatment.
- `06-frontend-implementation.md` records the `/pulse` implementation alignment target plus future live-feed, portfolio, Recharts marketplace stats, settings integration, favicon static-asset wiring, accent hierarchy, collection/main-clickable text hierarchy, mock-feed helper boundaries, incoming-animation constraints, and surface-depth rules.
