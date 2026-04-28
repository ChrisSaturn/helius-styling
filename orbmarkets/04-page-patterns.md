# Page Patterns

This page defines reusable layout models for OrbMarkets. Add patterns here only after they are observed or intentionally chosen for implementation.

## Candidate Page Types

| Page Type | Purpose | Expected Front-End Concerns | Status |
| --- | --- | --- | --- |
| Home or search landing | Entry point for network lookup and market scanning | Search dominance, category tabs, dense market table, responsive first viewport | Observed in `OM-001-home` |
| Tool popup or modal launcher | Start a focused action without leaving the current entity context | Dialog semantics, focus management, loading/result states, compact copy, escape routes | Observed in `OM-009-ai-analysis-popup` |
| Global settings popup | Adjust app-level preferences without leaving the current view | Anchored dialog semantics, compact grouped controls, placeholder persistence, escape routes | Prototype in `OM-PROT-003-settings`, not production evidence |
| Search results | Resolve query into entities | Result grouping, ranking, empty states, ambiguous queries | Pending capture |
| Transaction detail | Inspect one transaction | Signature display, account changes, instruction hierarchy, logs | Pending capture |
| Account detail | Inspect wallet or program account | Ownership, balances, tokens, activity tables | Pending capture |
| Token detail | Inspect token metadata and activity | Token identity, summary stats, KPI band, chart, section tabs, markets table | Observed in `OM-005-token-detail` |
| NFT event monitor | Scan recent NFT sales and listings | Live-feed batching, stable KPI strip, fixed event-table columns, placeholder and stale states | Prototype in `OM-PROT-001-pulse`, not production evidence |
| Wallet portfolio | Inspect owned NFT exposure and account activity | Auth state, wallet identifier, portfolio KPI strip, holdings table, activity table, sensitive-data boundaries | Prototype in `OM-PROT-002-portfolio`, not production evidence |
| Program detail | Inspect program activity | Program authority, interactions, transaction tables | Pending capture |
| Validator detail | Inspect validator health | Stake, performance, identity, epoch stats | Pending capture |
| Network stats | Inspect chain-level activity | Time-series metrics, dense stat groups, refresh cadence | Pending capture |

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

## Global Navigation Pattern

Observed in `OM-001-home`, Paper node `2-0`.

- Use the desktop top navigation as shared product chrome for primary OrbMarkets views.
- Keep search as the dominant navigation affordance. Route links and global utilities support search rather than competing with it.
- Preserve a black app background with a charcoal search rail, compact text links, and square utility controls.
- Do not introduce sidebars, marketing headers, oversized cards, or decorative backgrounds around the nav on explorer pages.
- Treat mobile, tablet, open-menu, active-route, and authenticated states as unresolved until captured.

## Tool Popup Pattern

Observed in `OM-009-ai-analysis-popup`.

- Use compact modal or popup surfaces for focused tool launches that should not replace the user's current token or explorer context.
- Lead with a direct title, one short explanatory paragraph, one primary action, and one optional secondary handoff.
- Keep the shell visually connected to OrbMarkets through black surfaces, a red accent stroke, subtle dividers, and compact iconography.
- Do not expand the idle state into a full analysis panel. Generated results, loading, and errors should be captured before adding them to the pattern.
- Treat overlay placement, backdrop treatment, mobile behavior, and focus return target as unresolved until the full parent screen is captured.

## Global Settings Popup Pattern

Prototype in `OM-PROT-003-settings`; not production evidence.

- Route or URL shape: local `/pulse` prototype app, opened from the shared top-navigation settings icon.
- Primary user intent: inspect or adjust global display, density, network, and alert preferences while keeping current page context.
- Information hierarchy: shared top navigation remains visible; popup title and close action first, grouped setting rows second, footer close action last.
- Header and navigation behavior: settings trigger shows a compact open state using selected icon/text fill or a quiet neutral active surface. Avoid persistent orange outlines for this secondary utility state unless it is the current keyboard focus.
- Main content grid: one anchored utility popup; setting groups render as flat rows with dividers inside the shell. Do not create a page-level card grid, sidebar, backdrop, marketing section, row cards, or nested segment containers.
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

## NFT Event Monitor Pattern

Prototype in `OM-PROT-001-pulse`; not production evidence.

- Route or URL shape: local `/pulse` prototype app.
- Primary user intent: scan placeholder NFT sale and listing activity in a dense monitor format.
- Information hierarchy: shared top navigation first, monitor title/status and time window second, KPI strip third, event tables fourth.
- Header and navigation behavior: use the shared Orb-style top navigation and search-dominant shell. Do not introduce marketing copy, sidebars, or decorative backgrounds.
- Main content grid: vertical monitor stack with one KPI band followed by separate sales and listings tables.
- Table behavior: tables use fixed columns, stable row heights, two-line NFT identity cells, mono identifiers, and horizontal overflow on narrow widths.
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
- Main content grid: one profile summary band, one portfolio KPI band, then full-width holdings and recent activity tables.
- Table behavior: holdings rows use collection identity, item count, floor, value, listed count, and 24H change; activity rows use action, NFT identity, marketplace, value, signature, and time.
- Responsive behavior: preserve the KPI strip stacking and horizontal table overflow behavior used by the Pulse monitor.
- Loading and empty states: unresolved; future wallet loading, disconnected, empty-wallet, hidden-wallet, and indexer-error states should reserve the KPI and table regions.
- Error handling: unresolved; auth or wallet-indexing errors should be inline within the portfolio surface and should not replace global navigation.
- Cross-links to related pages: future rows should map to account, collection, item, listing, and signature routes once route formats are confirmed.
