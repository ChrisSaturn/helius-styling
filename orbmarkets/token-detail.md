# Token Detail Capture

## Metadata

- ID: `OM-005-token-detail`
- Date captured: 2026-04-28
- Source URL: https://app.paper.design/file/01KQ91NY8A16SXDG8G6QEJVM78/1-0/1AG-0
- Market item source URL: https://app.paper.design/file/01KQ91NY8A16SXDG8G6QEJVM78/1-0/1HQ-0
- Chart completion source: user-supplied Orb browser screenshot in chat attachment. Paper captured the chart shell but did not fetch the rendered chart series, grid, axes, or full labels.
- Paper MCP reference: file `Helius`, page `Page 1`, node `1AG-0`; child nodes include `1AI-0` for the token header, KPI band, and chart shell, `1FI-0` for the entity tabs, `1G7-0` for the top markets table, and `1HQ-0` for one market item row.
- Screen or flow: Token detail, open token view for Wrapped SOL.
- Viewport: Desktop wide. Paper artboard is 1336 px by 1449 px; supplied browser screenshot is a wide desktop viewport.
- Auth state: Not confirmed.
- Data state: Populated Wrapped SOL token detail. Paper shows `1H` selected in the chart control and the browser screenshot shows `24H` selected with live chart data.
- Related docs: [Visual Language](./02-visual-language.md), [Components](./03-components.md), [Page Patterns](./04-page-patterns.md), [Interaction and Motion](./05-interaction-motion.md), [Front-End Implementation](./06-frontend-implementation.md)

## Purpose

The token detail screen lets users inspect one asset, verify token identity, compare headline market metrics, read price movement over time, and drill into token-specific markets, history, holders, metadata, and social context.

## First-Viewport Read

- Primary visual signal: a dense black token analysis surface with Wrapped SOL identity on the left, market summary metrics on the right, and a large time-series chart below.
- Main action: inspect current token price movement and decide whether to use the compact `BUY` action.
- Main data object: Wrapped SOL token, with price, holders, 24H volume, supply, liquidity, market cap, FDV, and markets table data.
- Secondary actions: favorite token, copy token address, open social or external links, switch chart timeframe, toggle chart mode, switch entity tabs, sort the markets table, and paginate markets.
- Navigation context: this screen should use the same desktop global navigation pattern as `OM-001-home`; the Paper node starts below the global header, while the supplied screenshot includes the header.

## Layout

- Page shell: full black app canvas, dense explorer content, no card-heavy layout.
- Header: reusable desktop top navigation from `OM-001-home` remains the product chrome. In the supplied screenshot, the global search spans most of the header and `Me`, `Network`, and settings remain on the right.
- Token identity region: left-aligned token cluster with favorite star, circular token logo, verification badge, title, token type, truncated address, copy action, score badge, social icons, and compact `BUY` button.
- Summary stat grid: right-aligned 2 by 2 label/value matrix for Supply, Liquidity, Market Cap, and FDV. Labels sit left in each cell, values align right.
- KPI band: three equal-width horizontal panels for Price, Holders, and 24H Volume. Price and volume include status direction and timeframe metadata; holders is a standalone count.
- Chart region: full-width chart frame below the KPI band, using thin red corner brackets, faint grid lines, right-side y-axis labels, bottom x-axis labels, timeframe controls at top-left, chart mode toggles at bottom-left, and an optional `Live` control in the browser screenshot.
- Secondary navigation: text tab bar below the chart with Markets active, then History, Holders, Metadata, and Social.
- Table or list behavior: active Markets tab renders a dense Top Markets table with columns for Market, Rate, Liquidity, Volume (24H), Trades (24H), Unique (24H), plus rows-per-page and pagination controls. Node `1HQ-0` confirms a single market item row: paired overlapping token logos, `SOL-USDC`, muted venue `Bisonfi`, then right-aligned numeric values `84.09`, `$4,056,371.01`, `$193,628,182.23`, `241,681`, and `21,913`.
- Responsive behavior: not captured. Desktop should preserve the token header, summary grid, KPI band, chart, tabs, and table in that order before any mobile-specific reflow is designed.

## Visual Rules Observed

- Background: app canvas remains pure or near-pure black.
- Surface: token header, KPI band, chart, tabs, and table sit directly on the app canvas with thin borders rather than floating cards.
- Border: summary stats, KPI panels, chart frame, table rows, tabs, and pagination use low-contrast 1 px charcoal dividers.
- Typography: IBM Plex Sans and Geist Mono remain the observed type families. The token title and major KPI values are bold sans; addresses, chips, axes, and table labels skew technical and compact.
- Iconography: thin outline icons for favorite, copy, social links, chart mode, sort, and pagination; token and market logos are asset images.
- Radius: compact controls use small radii. The token logo is circular; the score badge keeps the angular hex shape from the market table.
- Spacing: the first viewport is vertically stacked and dense, with large whitespace reserved only for the chart plot area.
- Density: values are large enough for scan priority, but surrounding labels and controls stay compact.
- Chart gap: Paper captured the chart frame and controls but omitted the rendered chart content. The supplied screenshot confirms the missing chart should include a red 24H price line, faint horizontal and vertical grid, right y-axis values, bottom time labels, active `24H` segment, and `Live` chip.

## Components Observed

| Component | Variant | State | Notes |
| --- | --- | --- | --- |
| App shell | Desktop dark shell | Default | Uses the same black canvas and global navigation pattern as home. |
| Token detail header | Token identity summary | Wrapped SOL | Favorite star, token logo, verification badge, title, type, truncated address, copy, score badge, social links, and `BUY`. |
| Summary stat grid | 2 by 2 token stats | Populated | Supply, Liquidity, Market Cap, and FDV with label/value alignment. |
| KPI band | Three-column metric strip | Populated | Price, Holders, and 24H Volume, each separated by vertical dividers. |
| Label chip | Hatched metric label | Default | `PRICE`, `HOLDERS`, and `24H VOLUME` use compact gray chips with a patterned leading edge. |
| Time-series chart | Token price chart | Paper shell plus screenshot-complete chart | Paper misses the rendered plot; screenshot confirms red line, grid, axes, and time labels. |
| Timeframe control | Chart segmented control | `1H` in Paper, `24H` in screenshot | Browser screenshot shows `1H`, `24H`, `7D`, `1M`, `1Y`, and `Live`; Paper shows `5m`, `1H`, `24H`, `7D`. |
| Chart mode toggle | Line and candle controls | Default | Bottom-left icon buttons switch chart display mode. |
| Entity tabs | Token sections | Markets active | Markets, History, Holders, Metadata, Social. |
| Top markets table | Token market liquidity table | Populated | Dense rows with pool identity, venue, rate, liquidity, volume, trades, unique traders, rows-per-page, and pagination. |
| Market item row | Token market table row | SOL-USDC on Bisonfi | Node `1HQ-0` confirms paired overlapping token logos, two-line market identity, centered/right-aligned numeric columns, and a thin bottom divider. |
| Floating support/action button | Circular orange overlay | Visible in Paper only | The orange circular button appears in Paper near the chart lower right but is not visible in the supplied screenshot; treat as unresolved overlay behavior. |

## Interaction Behavior

- Search: global search behavior is inherited from the desktop top navigation pattern; suggestions and result states remain unresolved.
- Token actions: favorite, copy, social/external links, score badge explanation, and `BUY` action are visible; hover, focus, disabled, and async states remain unresolved.
- Chart timeframe: active segment changes the chart data window. Paper and screenshot disagree on the active timeframe, so the implementation should support all observed labels and state changes.
- Chart mode: bottom-left controls imply at least line and candle modes. Keyboard access, active-state styling, and data availability need confirmation.
- Live mode: supplied screenshot shows a `Live` chip next to timeframe controls. Its on/off behavior and refresh cadence are unresolved.
- Tabs: Markets is active. Tab changes should preserve token context and avoid reloading the entire app shell.
- Sorting: markets table shows sortable metric headers, including Liquidity and Volume (24H).
- Pagination: rows-per-page selector and page navigation are visible at the bottom of the markets table.
- Loading: not captured. Chart and table need stable skeleton or empty states.
- Empty: not captured.
- Error: not captured. The chart requires a specific fallback because Paper already demonstrates that chart content can be missing from a capture.

## Front-End Notes

- Token changes: add token-detail-specific chart tokens for plot line, grid, axes, chart corner brackets, and active segment border. Reuse existing app background, muted text, subtle border, brand accent, positive, and negative status tokens.
- Component changes: add reusable token detail header, summary stat grid, KPI band, time-series chart shell, chart controls, entity tab bar, and top markets table.
- Data constraints: long token addresses must truncate with copy access; very large market cap, liquidity, FDV, and volume values must align without resizing the layout; market rows need venue names and paired token-pair logos to degrade cleanly when either logo or venue name is missing.
- Accessibility considerations: chart controls, tabs, favorite, copy, social links, `BUY`, sort headers, rows-per-page, and pagination must be keyboard reachable and expose non-color state. The chart needs an accessible data summary or table fallback.
- Performance considerations: render chart data without shifting layout; preserve fixed chart dimensions during loading, missing data, and live refresh. Avoid letting live updates resize y-axis labels or metric cells.

## Open Questions

- Confirm the exact production route and live URL for a token detail page.
- Confirm whether the chart is canvas, SVG, or a third-party widget, and whether its data can be rendered server-side or must hydrate client-side.
- Resolve the active timeframe discrepancy: Paper shows `1H`, while the supplied browser screenshot shows `24H`.
- Confirm whether `5m` is an available timeframe in production or a Paper-only stale state.
- Confirm the floating orange button source and whether it belongs to Orb, a support widget, or a capture artifact.
- Confirm market item row height, row hover, row click target, market link behavior, tab persistence, and chart tooltip behavior.

## Shared Docs Updated

- [Visual Language](./02-visual-language.md): chart, KPI, stat, and token-detail spacing tokens.
- [Components](./03-components.md): token detail header, summary stat grid, KPI band, chart, entity tabs, top markets table, and market item row.
- [Page Patterns](./04-page-patterns.md): token detail page pattern.
- [Interaction and Motion](./05-interaction-motion.md): chart, tab, sort, pagination, and live refresh behavior notes.
- [Front-End Implementation](./06-frontend-implementation.md): engineering rules for token-detail charts, stable metrics, and Paper chart gaps.
