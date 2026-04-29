# Page Patterns

This page defines reusable layout models for OrbMarkets. Add patterns here only after they are observed or intentionally chosen for implementation.

## Candidate Page Types

| Page Type | Purpose | Expected Front-End Concerns | Status |
| --- | --- | --- | --- |
| Home or search landing | Entry point for network lookup and market scanning | Search dominance, category tabs, dense market table, responsive first viewport | Observed in `OM-001-home` |
| Developer API landing page | Introduce a developer API and drive action through commands or examples | Command CTAs, API capability guidance, terminal previews, setup copy actions, responsive landing sequence | Prototype in `OM-PROT-005-private-payments-api`, not production evidence |
| Tool popup or modal launcher | Start a focused action without leaving the current entity context | Dialog semantics, focus management, loading/result states, compact copy, escape routes | Observed in `OM-009-ai-analysis-popup` |
| Global settings popup | Adjust app-level preferences without leaving the current view | Anchored dialog semantics, compact grouped controls, placeholder persistence, escape routes | Prototype in `OM-PROT-003-settings`, not production evidence |
| Search results | Resolve query into entities | Result grouping, ranking, empty states, ambiguous queries | Pending capture |
| Transaction detail | Inspect one transaction | Signature display, account changes, instruction hierarchy, logs | Pending capture |
| Account detail | Inspect wallet or program account | Ownership, balances, tokens, activity tables | Pending capture |
| Token detail | Inspect token metadata and activity | Token identity, summary stats, KPI band, chart, section tabs, markets table | Observed in `OM-005-token-detail` |
| NFT event monitor | Scan recent NFT sales and listings | Live-feed batching, mock-feed refresh, stable KPI strip, fixed event-table columns, placeholder and stale states | Prototype in `OM-PROT-001-pulse`, not production evidence |
| NFT marketplace stats | Compare NFT listing platforms and collection liquidity routing | Marketplace KPIs, Recharts volume/depth graphs, platform comparison table, collection routing table, future marketplace/API source states | Prototype in `OM-PROT-004-stats`, not production evidence |
| Wallet portfolio | Inspect owned NFT exposure and account activity | Auth state, wallet identifier, portfolio KPI strip, holdings table, activity table, sensitive-data boundaries | Prototype in `OM-PROT-002-portfolio`, not production evidence |
| Program detail | Inspect program activity | Program authority, interactions, transaction tables | Pending capture |
| Validator detail | Inspect validator health | Stake, performance, identity, epoch stats | Pending capture |
| Network stats | Inspect chain-level activity | Recent blocks, chart panels, validator summaries, active validator table, epoch progress, refresh cadence | Observed in `OM-008-network-stats` |

## Layout Documentation Checklist

For each page pattern, capture:

- Route or URL shape.
- Primary user intent.
- Information hierarchy.
- Header and navigation behavior.
- Main content grid.
- Table behavior.
- Responsive behavior.
- Loading and empty states.
- Error handling.
- Cross-links to related pages.

## Home Market Table Pattern

Observed in `OM-001-home`.

- Route or URL shape: home route not confirmed from Paper; document as the product home market table until live routing is captured.
- Primary user intent: search for tokens and scan ranked market activity.
- Information hierarchy: header search first, category tabs second, table metrics third, row action last.
- Header and navigation behavior: desktop uses the reusable top navigation component from Paper node `2-0`: `orb` lockup, dominant global search, utility affordance, `Me`, `Network`, and settings.
- Main content grid: single dense table, no cards or side rails.
- Table behavior: category tabs and time-window control filter the data; metric headers expose sorting affordances.
- Responsive behavior: unresolved; desktop should keep fixed columns and stable row heights.
- Loading and empty states: unresolved.
- Error handling: unresolved.
- Cross-links to related pages: token rows likely link to token detail; exact click targets pending live validation.

## Developer API Landing Pattern

Prototype in `OM-PROT-005-private-payments-api`; not production evidence.

- Route or URL shape: unresolved. Candidate route could be `/private-payments`, `/payments-api`, or a docs-adjacent page.
- Primary user intent: understand what the Private Payments API builds and where to start with unsigned SPL token transaction flows.
- Information hierarchy: compact navigation first, hero headline and value prop second, terminal-style install command third, tool chips fourth. Capability grid, workflow/terminal guidance, and final CTA are future lower sections because they are absent from the current `3JV-0` Paper tree.
- Header and navigation behavior: current Paper prototype uses a 72 px Helius nav cloned from node `3OA-0`. If implemented, preserve the Helius logo, Products/Solutions/Resources dropdown affordances, Blog/Pricing/Careers/Stake links, Docs action, and Sign In action unless product direction changes.
- Main content grid: current implementation is one header plus one hero section on a shared 1480 px rail. The black lower canvas remains empty until Paper adds lower landing content.
- Command behavior: current Paper prototype uses the `3R7-0` install command treatment in place of the prior hero `API CAPABILITY` block. Verify the command target before production implementation.
- Responsive behavior: local Vite implementation collapses secondary nav, keeps the hero and command readable, and stacks command metadata. Production mobile still needs Paper validation.
- Loading and empty states: none for static content; future dynamic docs/tool listings should reserve section height.
- Error handling: copy failures and install-link failures should show inline feedback in the command block.
- Cross-links to related pages: docs, MCP tool catalog, CLI reference, SDK docs, and Helius agents landing page.

## Global Navigation Pattern

Observed in `OM-001-home`, Paper node `2-0`.

- Use the desktop top navigation as shared product chrome for primary OrbMarkets views.
- Keep search as the dominant navigation affordance. Route links and global utilities support search rather than competing with it.
- Preserve a black app background with a charcoal search rail, compact text links, and 0 px square-corner utility controls.
- Do not introduce sidebars, marketing headers, oversized cards, or decorative backgrounds around the nav on explorer pages.
- Treat mobile, tablet, open-menu, active-route, and authenticated states as unresolved until captured.

## Tool Popup Pattern

Observed in `OM-009-ai-analysis-popup`.

- Use compact modal or popup surfaces for focused tool launches that should not replace the user's current token or explorer context.
- Lead with a direct title, one short explanatory paragraph, one primary action, and one optional secondary handoff.
- Keep the shell visually connected to OrbMarkets through square-corner black surfaces, a red accent stroke, subtle dividers, and compact iconography.
- Do not expand the idle state into a full analysis panel. Generated results, loading, and errors should be captured before adding them to the pattern.
- Treat overlay placement, backdrop treatment, mobile behavior, and focus return target as unresolved until the full parent screen is captured.

## Global Settings Popup Pattern

Prototype in `OM-PROT-003-settings`; not production evidence.

- Route or URL shape: local `/pulse` prototype app, opened from the shared top-navigation settings icon.
- Primary user intent: inspect or adjust global display, density, network, and alert preferences while keeping current page context.
- Information hierarchy: shared top navigation remains visible; popup title and close action first, grouped setting rows second, footer close action last.
- Header and navigation behavior: settings trigger shows a compact open state using selected icon/text fill or a quiet neutral active surface. Avoid persistent orange outlines for this secondary utility state unless it is the current keyboard focus.
- Main content grid: one anchored square-corner utility popup; setting groups render as flat rows with dividers inside the shell. Do not create a page-level card grid, sidebar, backdrop, marketing section, row cards, or nested segment containers.
- Responsive behavior: desktop anchors to the settings control; narrow viewports use a fixed inset popup with stacked controls.
- Loading and empty states: unresolved; placeholder state should not imply saved user preferences.
- Error handling: unresolved; future persistence errors should stay inside the popup without replacing page content.
- Cross-links to related pages: none until account, preferences, or notification routes are confirmed.

## Token Detail Pattern

Observed in `OM-005-token-detail`.

- Route or URL shape: live route not confirmed from Paper; document as the token detail or open token view until production routing is captured.
- Primary user intent: inspect one token's identity, market health, price movement, liquidity venues, and related token sections.
- Information hierarchy: global search first, token identity second, summary stats and headline KPIs third, chart fourth, section tabs and detailed tables fifth.
- Header and navigation behavior: use the shared desktop top navigation pattern from `OM-001-home`; the token detail content should not introduce a secondary sidebar or marketing header.
- Main content grid: vertical detail stack with a token identity and 2 by 2 stat grid at the top, three-column KPI band, full-width chart, entity tabs, then a dense markets table.
- Chart behavior: reserve the chart region even when data is loading or missing. Paper node `1AG-0` captured the empty chart shell, while the supplied browser screenshot confirms the complete plot with red 24H series, grid, right y-axis, x-axis labels, active `24H` control, and `Live` chip.
- Table behavior: Markets tab uses a dense table with fixed numeric columns, sortable metrics, rows-per-page control, and pagination. Individual market rows, confirmed by Paper node `1HQ-0`, use paired overlapping token logos, a two-line pair/venue identity cell, and fixed numeric cells for rate, liquidity, volume, trades, and unique users.
- Responsive behavior: unresolved. At narrow widths, preserve token identity, price/KPI, chart, tabs, and markets table priority before less critical summary stats.
- Loading and empty states: unresolved; chart and table must keep stable dimensions.
- Error handling: unresolved; chart fetch failures need an inline no-data state that does not collapse the chart.
- Cross-links to related pages: markets table rows likely link to market or pool detail views; exact target and nested action rules are pending live validation.

## Network Stats Pattern

Observed in `OM-008-network-stats`.

- Route or URL shape: live route not confirmed from Paper; document as the network stats or Stats view until production routing is captured.
- Primary user intent: inspect current chain activity, validator distribution, active stake, and epoch progress.
- Information hierarchy: shared global navigation first, recent blocks second, TPS and SOL price chart panels third, validator summary panels fourth, active validators table fifth, epoch status sixth.
- Header and navigation behavior: use the shared desktop top navigation pattern from `OM-001-home`. The local `/pulse` prototype maps this captured hierarchy to its `Stats` nav state.
- Main content grid: vertical stack with one full-width recent-block stream, two half-width chart panels, three compact validator summary panels, one full-width validator table, and one full-width epoch panel.
- Chart behavior: preserve chart dimensions even when chart series are missing or loading. Paper captured headline values and chart shells but not rendered series; the local NFT Stats prototype uses Recharts only for NFT marketplace charts and uses this network capture as visual reference.
- Table behavior: active validators use fixed columns, a toolbar, active-only toggle, grid control, sortable rank/stake headers, validator identity cells, commission status text, and pagination.
- Responsive behavior: unresolved. Preserve vertical order and use horizontal table overflow before compressing validator columns.
- Loading and empty states: unresolved; recent blocks, chart panels, validator summaries, validator table, and epoch panel should reserve their dimensions.
- Error handling: unresolved; RPC, validator-index, price, and chart-source failures should stay inline within their panel rather than replacing the page.
- Cross-links to related pages: validators, leaders, and slots likely link to validator or slot detail pages; exact route targets remain pending.

## NFT Marketplace Stats Pattern

Prototype in `OM-PROT-004-stats`; not production evidence.

- Route or URL shape: local `/pulse` prototype app, switched through the `Stats` navigation state.
- Primary user intent: compare NFT marketplace activity across listing platforms such as Magic Eden, Tensor, OKX NFT, Exchange.Art, and Hyperspace.
- Information hierarchy: shared top navigation first, `Stats` marketplace title/status and time window second, marketplace KPI strip third, continuous visual trend and summary bands fourth, platform and collection tables fifth.
- Header and navigation behavior: `Stats` replaces the prototype `Network` nav entry and becomes the active compact nav control.
- Main content grid: one KPI band, one continuous two-panel Recharts graph band for 2-hour marketplace volume and floor-band listing depth, one continuous three-panel summary band for platform share, collection volume, and floor momentum, then two dense table panels for marketplace overview and collection routing.
- Chart behavior: Pulse Stats charts use the shared Recharts adapter with black plot surface, subtle grid, right-side y-axis labels, bottom bucket labels, square bars, custom tooltip, hidden summary, and stable lazy-loading fallback. Do not replace these with generic chart themes or rounded/gradient chart treatments.
- Table behavior: marketplace rows use fixed platform, share, volume, sales, listings, average-sale, and floor-delta columns; collection routing rows use fixed collection, top-market, floor, listing, sales, volume, and spread columns.
- Responsive behavior: stack header controls and KPI cells, then preserve table readability with horizontal overflow before compressing columns.
- Loading and empty states: future marketplace, DAS, aggregator, and indexer loading/empty/stale/error states should reserve the KPI and table regions.
- Error handling: marketplace-source failures should remain inline within the affected table or metric cell and should not replace the full Stats page.
- Cross-links to related pages: future rows should map to marketplace, collection, item, listing, and account routes once route formats are confirmed.

## NFT Event Monitor Pattern

Prototype in `OM-PROT-001-pulse`; not production evidence.

- Route or URL shape: local `/pulse` prototype app.
- Primary user intent: scan placeholder NFT sale and listing activity in a dense monitor format.
- Information hierarchy: shared top navigation first, monitor title/status and time window second, KPI strip third, event tables fourth.
- Header and navigation behavior: use the shared Orb-style top navigation and search-dominant shell. Do not introduce marketing copy, sidebars, or decorative backgrounds.
- Main content grid: vertical monitor stack with one KPI band followed by separate latest sales and latest listings tables. The top navigation, page header, KPI band, and table panels align to one shared 1480 px site rail with responsive 18/14/12 px gutters.
- Table behavior: tables use fixed columns, stable row heights, two-line NFT identity cells, mono identifiers, capped visible mock rows, and horizontal overflow on narrow widths. Collection names and main row clickables render in the White or primary text role, not muted metadata gray.
- Mock-feed behavior: local prototype rows seed from static placeholders, then a single interval inserts generated sale/listing rows, updates the monitor timestamp, and recalculates KPI strip values from the current visible snapshot. This behavior is a substitute for future Helius stream/webhook data, not production evidence.
- Incoming data behavior: newest rows animate with a brief accent fill, left rail, and content slide/fade while KPI cells pulse on snapshot refresh. The animation is feedback only; it must preserve table dimensions, scroll position, and focus.
- Responsive behavior: stack header controls and KPI cells before allowing table columns to collapse. Preserve table readability through scroll.
- Loading and empty states: future loading, empty, stale, and error states should remain inside the table frame and reserve row/table height.
- Error handling: future stream or webhook errors need inline status that does not replace the monitor layout.
- Cross-links to related pages: future rows should map to Orb account, signature, NFT, collection, and listing routes once route formats are confirmed.

## Wallet Portfolio Pattern

Prototype in `OM-PROT-002-portfolio`; not production evidence.

- Route or URL shape: local `/pulse` prototype app, switched through the `Me` navigation state.
- Primary user intent: inspect wallet-level NFT exposure, listed inventory, realized activity, and recent portfolio events.
- Information hierarchy: shared top navigation first, `Profile` title and wallet context second, time-window control third, profile summary band fourth, KPI strip fifth, holdings and activity tables sixth.
- Header and navigation behavior: `Me` becomes the active compact nav control; the `orb` brand button returns to the Pulse monitor view in the current prototype until route formats are confirmed.
- Main content grid: one profile summary band, one portfolio KPI band, then full-width holdings and recent activity tables. All outer surfaces align to the shared site rail used by Pulse.
- Table behavior: holdings rows use collection identity, item count, floor, value, listed count, and 24H change; activity rows use action, NFT identity, marketplace, value, signature, and time. Collection names and primary collection links should use the White or primary text role.
- Responsive behavior: preserve the KPI strip stacking and horizontal table overflow behavior used by the Pulse monitor.
- Loading and empty states: unresolved; future wallet loading, disconnected, empty-wallet, hidden-wallet, and indexer-error states should reserve the KPI and table regions.
- Error handling: unresolved; auth or wallet-indexing errors should be inline within the portfolio surface and should not replace global navigation.
- Cross-links to related pages: future rows should map to account, collection, item, listing, and signature routes once route formats are confirmed.
