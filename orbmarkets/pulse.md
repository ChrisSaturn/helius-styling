# Pulse Prototype

## Metadata

- ID: OM-PROT-001-pulse
- Date captured: 2026-04-28
- Source URL: Local prototype `/pulse`
- Paper MCP reference: None. This is intentional prototype guidance, not captured production evidence.
- Screen or flow: Pulse NFT sales and listings monitor
- Viewport: Desktop-first Vite app with narrow viewport table overflow behavior
- Auth state: Prototype unauthenticated shell
- Data state: Static placeholder NFT event data
- Related docs: [Components](./03-components.md), [Page Patterns](./04-page-patterns.md), [Interaction and Motion](./05-interaction-motion.md), [Front-End Implementation](./06-frontend-implementation.md)

## Purpose

Pulse is a prototype monitor view for scanning NFT sale and listing activity before Helius WebSocket, webhook, DAS, or marketplace integrations are wired in.

## First-Viewport Read

- Primary visual signal: `Pulse` title with a compact mock-live status and time-window controls.
- Main action: scan the latest NFT sales and listings tables.
- Main data object: placeholder NFT event rows shaped for future on-chain or webhook event ingestion.
- Secondary actions: global search, time-window buttons, inert item/address/signature links.
- Navigation context: shared Orb-style top navigation shell.

## Layout

- Page shell: black app canvas with the shared top navigation and a constrained content width.
- Header: left-aligned title/status stack with right-aligned time-window segmented control.
- Main grid: KPI strip followed by two full-width monitor tables.
- Sidebar or secondary rail: none.
- Table or list behavior: fixed table layouts, stable row heights, horizontal overflow at narrow widths, two-line NFT identity cells.
- Responsive behavior: navigation and KPI cells stack before table columns compress; dense tables preserve columns through horizontal scroll.

## Visual Rules Observed

- Background: black canvas from the Orb visual token set.
- Surface: charcoal navigation/search and control fills; monitor tables remain black with dividers.
- Border: 1 px subtle charcoal borders; red-orange accent for active controls and focus.
- Typography: IBM Plex Sans stack for UI text; Geist Mono stack for metadata, identifiers, chips, and timestamps.
- Iconography: compact inline utility icons in the top shell only.
- Radius: compact 4-6 px controls and table frames.
- Spacing: dense table rhythm with short section headers and stable rows.
- Density: scan-first; no marketing hero, decorative background, or card grid.

## Components Observed

| Component | Variant | State | Notes |
| --- | --- | --- | --- |
| Desktop top navigation | Prototype reuse | Idle/search-ready | Mirrors captured Orb shell proportions and search dominance. |
| Time-window control | Monitor prototype | `24H` active | Uses compact segmented buttons for future event filtering. |
| KPI strip | Monitor prototype | Populated placeholder | Four equal metric cells with optional delta/status text. |
| NFT event table | Sales and listings | Populated placeholder | Fixed columns, stable row heights, horizontal scroll on narrow viewports. |
| NFT identity cell | Placeholder image | Populated placeholder | Small square initials tile plus item and collection copy. |
| Address/signature link | Inert placeholder | Default/focusable | Uses truncation and mono text until real Orb URLs exist. |

## Interaction Behavior

- Search: real input in the shared shell; suggestions and query routing are not implemented.
- Filters: time-window buttons are keyboard-focusable placeholders; filtering logic is intentionally deferred.
- Sorting: not implemented; table headers are static labels in this prototype.
- Copy action: not implemented.
- Links: inert anchors preserve future Orb link placement for NFT items, accounts, signatures, and listing IDs.
- Loading: not implemented; future loading states should preserve table heights and column widths.
- Empty: not implemented; future empty states should live inside the table frame without replacing the monitor layout.
- Error: not implemented.

## Front-End Notes

- Token changes: no new production tokens; Pulse reuses Orb black canvas, charcoal controls, subtle borders, red-orange accent, muted metadata, and dense table rhythm.
- Component changes: add a reusable monitor table pattern for high-frequency event rows with stable columns and row height.
- Data constraints: NFT names, collection names, account addresses, signatures, and listing IDs must truncate without resizing columns.
- Accessibility considerations: use real table semantics, visible focus, labelled search, labelled icon buttons, and accessible names for inert placeholder links.
- Performance considerations: future live feeds should batch incoming events and keep table layout fixed to avoid reflow during updates.

## Open Questions

- Exact Orb route formats for NFT items, marketplace listings, signatures, and account pages.
- Whether live Pulse should support row-level copy buttons, sorting, marketplace filters, or collection filters.
- Whether high-volume feeds require virtualization once real-time updates are enabled.

## Follow-Up Updates

- Update `03-components.md` with the monitor table and NFT identity cell guidance.
- Update `04-page-patterns.md` with the Pulse monitor page pattern.
- Update `05-interaction-motion.md` with placeholder live monitor interaction rules.
- Update `06-frontend-implementation.md` with implementation rules for fixed live-event tables.
