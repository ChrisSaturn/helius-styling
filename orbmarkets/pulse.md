# Pulse Prototype

## Metadata

- ID: OM-PROT-001-pulse
- Related prototype IDs: OM-PROT-002-portfolio, OM-PROT-003-settings
- Date captured: 2026-04-28
- Source URL: Local prototype `/pulse`
- Styling reference: current `https://orbmarkets.io/` dense market-table shell and user-supplied screenshot, used for visual alignment only.
- Paper MCP reference: None. This is intentional prototype guidance, not captured production evidence.
- Screen or flow: Pulse NFT sales and listings monitor; `Me` portfolio view; placeholder Settings popup
- Viewport: Desktop-first Vite app with narrow viewport table overflow behavior
- Auth state: Prototype unauthenticated shell
- Data state: Static placeholder NFT event and portfolio data
- Related docs: [Components](./03-components.md), [Page Patterns](./04-page-patterns.md), [Interaction and Motion](./05-interaction-motion.md), [Front-End Implementation](./06-frontend-implementation.md)

## Purpose

Pulse is a prototype monitor view for scanning NFT sale and listing activity before Helius WebSocket, webhook, DAS, or marketplace integrations are wired in. The local `Me` view now adds a portfolio prototype for wallet-level NFT holdings and activity before auth or wallet data integrations are wired in. The shared settings trigger opens a placeholder global settings popup so the top-navigation utility behavior can be styled and tested before real preference persistence exists.

## First-Viewport Read

- Primary visual signal: `Pulse` title with a compact mock-live status and time-window controls.
- Main action: scan the latest NFT sales and listings tables.
- Main data object: placeholder NFT event rows shaped for future on-chain or webhook event ingestion.
- Secondary actions: global search, time-window buttons, settings popup, inert item/address/signature links.
- Navigation context: shared Orb-style top navigation shell.

## Me Profile Read

- Primary visual signal: `Profile` title with compact `Portfolio` status, wallet context, and profile summary band.
- Main action: scan wallet-level portfolio metrics, collection holdings, and recent activity.
- Main data object: placeholder holdings and wallet activity shaped for future auth and wallet-indexer ingestion.
- Secondary actions: global search, time-window buttons, inert collection/NFT/signature links.
- Navigation context: `Me` is the active top-nav control; the brand button returns to the Pulse monitor in the local prototype.

## Settings Popup Read

- Primary visual signal: compact `Settings` popup anchored to the global settings icon.
- Main action: inspect placeholder display, density, network, and sales-alert controls.
- Main data object: static preference placeholders; no real persisted settings.
- Secondary actions: close icon, Done action, Escape key, and local navigation close the popup.
- Navigation context: popup preserves the current Pulse or `Me` page state.

## Layout

- Page shell: black app canvas with the shared top navigation and a constrained content width.
- Header: left-aligned title/status stack with right-aligned time-window segmented control.
- Main grid: KPI strip followed by two full-width monitor tables.
- Sidebar or secondary rail: none.
- Table or list behavior: fixed table layouts, stable row heights, horizontal overflow at narrow widths, two-line NFT identity cells.
- Responsive behavior: navigation and KPI cells stack before table columns compress; dense tables preserve columns through horizontal scroll.
- Profile layout: same shell and KPI/table stack as Pulse, with a profile summary band plus holdings and activity tables instead of sales and listings.
- Settings layout: anchored 360 px utility popup on desktop; fixed inset popup with stacked controls on narrow viewports. The popup should stay shallow: one shell, direct setting rows, subtle dividers, and no nested row cards or per-choice subcontainers.

## Visual Rules Observed

- Background: black canvas from the Orb visual token set.
- Surface: charcoal navigation/search and control fills; monitor tables remain black with dividers.
- Border: 1 px subtle charcoal borders; red-orange accent only for main active controls, primary emphasis, or focus states that need stronger contrast.
- Typography: IBM Plex Sans stack for UI text; Geist Mono stack for metadata, identifiers, chips, and timestamps.
- Iconography: compact inline utility icons in the top shell only.
- Radius: compact 4-6 px controls and table frames.
- Spacing: dense table rhythm with short section headers and stable rows.
- Density: scan-first; no marketing hero, decorative background, or card grid.

## Styling Best-Practice Notes

These notes refine the current Pulse build against the observed Orb table style. They are prototype guidance until confirmed in production.

- Sizing: use the Orb market-table rhythm as the anchor. Header controls, KPI cells, NFT image tiles, and table rows need explicit min/max dimensions so hover, loading, image fetches, or live inserts cannot resize the monitor.
- Color: pull all fills, borders, text, and status values from [Visual Language](./02-visual-language.md). Avoid one-off greens, reds, and charcoal values; only status deltas, chart lines, score states, primary actions, and production-confirmed main active controls should introduce stronger color.
- Highlight usage: separate selected, focused, hovered, and status states. Secondary selected states should use selected text fill/color and weight before orange outlines. The red-orange border is for main controls, primary action emphasis, or visible focus, not generic decoration. Positive and negative highlights must include text or icon meaning, not color alone.
- Surface composition: keep settings and monitor controls flat. Do not place `Display` inside a visible container inside `Settings`, and do not place `Dark` and `System` inside additional visible subcontainers. Use rows, spacing, and dividers to create hierarchy.
- React performance: keep row rendering predictable. Memoize expensive row/cell formatting, use primitive dependencies for filters and time windows, batch future live events before state updates, and defer heavy chart or stream tooling until the feature is active.

## Components Observed

| Component | Variant | State | Notes |
| --- | --- | --- | --- |
| Desktop top navigation | Prototype reuse | Idle/search-ready | Mirrors captured Orb shell proportions and search dominance. |
| Time-window control | Monitor prototype | `24H` active | Uses compact segmented buttons for future event filtering. |
| KPI strip | Monitor prototype | Populated placeholder | Four equal metric cells with optional delta/status text. |
| NFT event table | Sales and listings | Populated placeholder | Fixed columns, stable row heights, horizontal scroll on narrow viewports. |
| NFT identity cell | Placeholder image | Populated placeholder | Small square initials tile plus item and collection copy. |
| Address/signature link | Inert placeholder | Default/focusable | Uses truncation and mono text until real Orb URLs exist. |
| Portfolio KPI strip | `Me` portfolio | Populated placeholder | Reuses the compact metric band for wallet value, held NFTs, listings, and realized activity. |
| Profile summary band | `Me` profile | Populated placeholder | Bordered wallet identity band with a restrained accent rail and compact signal cells. |
| Portfolio holdings table | `Me` portfolio | Populated placeholder | Fixed columns for collection exposure, floor, value, listed count, and 24H change. |
| Portfolio activity table | `Me` portfolio | Populated placeholder | Fixed columns for wallet action, NFT, marketplace, value, signature, and time. |
| Settings popup | Global utility | Open placeholder | Anchored labelled dialog with grouped rows, segmented controls, one toggle, and close/Done actions. |

## Interaction Behavior

- Search: real input in the shared shell; suggestions and query routing are not implemented.
- Navigation: `Me` switches to the portfolio view with `aria-current="page"`; the brand button returns to Pulse.
- Settings: settings opens a labelled placeholder dialog with `aria-expanded` on the trigger and closes on Escape, close, Done, brand navigation, or `Me` navigation.
- Filters: time-window buttons are keyboard-focusable placeholders; filtering logic is intentionally deferred.
- Sorting: not implemented; table headers are static labels in this prototype.
- Table safety: native table cells are preserved; stacked numeric content lives inside inner wrappers so row dividers stay continuous.
- Copy action: not implemented.
- Links: inert anchors preserve future Orb link placement for NFT items, accounts, signatures, and listing IDs.
- Loading: not implemented; future loading states should preserve table heights and column widths.
- Empty: not implemented; future empty states should live inside the table frame without replacing the monitor layout.
- Error: not implemented.

## Front-End Notes

- Token changes: no new production tokens; Pulse reuses Orb black canvas, charcoal controls, subtle borders, selected text fill, muted metadata, and dense table rhythm. Red-orange accent remains reserved for main controls, primary emphasis, and focus.
- Component changes: add reusable monitor and portfolio table patterns for high-frequency event rows, wallet holdings, and wallet activity with stable columns and row height; add a placeholder settings popup pattern for global utility preferences.
- Data constraints: NFT names, collection names, account addresses, signatures, and listing IDs must truncate without resizing columns.
- Accessibility considerations: use real table semantics, visible focus, labelled search, labelled icon buttons, a labelled settings dialog, and accessible names for inert placeholder links.
- Performance considerations: future live feeds should batch incoming events and keep table layout fixed to avoid reflow during updates. Follow the Vercel React rules called out in [Front-End Implementation](./06-frontend-implementation.md), especially direct imports, stable derived state, fixed rendering dimensions, and content visibility for long monitor sections.

## Current Implementation Alignment

- `pulse/src/App.tsx` now uses a compact title/status monitor header, local view state for Pulse and `Me` profile/portfolio, placeholder settings popup state, Escape-to-close behavior, `aria-current` on active nav, `aria-expanded` on the settings trigger, `aria-pressed` on active time windows/settings segments, memoized sales/listing/portfolio rows, module-level currency/time formatters, inner numeric stacks, and full-value accessibility labels for truncated identifiers.
- `pulse/src/styles.css` should align to the updated Orb rules with a 69 px desktop navigation bar, 61 px search rail, anchored settings popup, profile summary band, one bordered KPI band, 64 px table rows, fixed 40 px neutral NFT thumbnails, restrained hover states, selected text fill for secondary states, red-orange reserved for main active/focus treatment, table-panel `content-visibility`, native table-cell preservation, and reduced-motion handling.
- Browser check: the local Vite preview renders Pulse, `Me` portfolio, and Settings popup states without console warnings or errors.

## Open Questions

- Exact Orb route formats for NFT items, marketplace listings, signatures, and account pages.
- Exact Orb route format for `Me`, wallet portfolio pages, and wallet switching.
- Auth, privacy, disconnected-wallet, hidden-wallet, and empty-portfolio states.
- Real settings persistence, saved/error states, focus trap, focus return, outside-click behavior, and account-scoped preferences.
- Whether live Pulse should support row-level copy buttons, sorting, marketplace filters, or collection filters.
- Whether high-volume feeds require virtualization once real-time updates are enabled.

## Documentation Update Status

- `03-components.md` records the monitor KPI strip, NFT event table, NFT identity cell, portfolio components, settings popup implementation constraints, selected text-fill rules, and shallow surface composition rules.
- `04-page-patterns.md` records the Pulse monitor, `Me` portfolio, and global settings popup patterns, including flat settings rows.
- `05-interaction-motion.md` records the active timeframe, mock-live, `Me` navigation, settings popup, inert-link behavior, and secondary selected-state treatment.
- `06-frontend-implementation.md` records the `/pulse` implementation alignment target plus future live-feed, portfolio, settings integration, accent hierarchy, and surface-depth rules.
