# Home Capture

## Metadata

- ID: `OM-001-home`
- Date captured: 2026-04-28
- Source URL: https://app.paper.design/file/01KQ91NY8A16SXDG8G6QEJVM78/1-0/2I1-0
- Header/nav source URL: https://app.paper.design/file/01KQ91NY8A16SXDG8G6QEJVM78/1-0/2-0
- Token row source URL: https://app.paper.design/file/01KQ91NY8A16SXDG8G6QEJVM78/1-0/4X-0
- Paper MCP reference: file `Helius`, page `Page 1`, nodes `2I1-0`, `16-0`, `2-0`, and `4X-0`
- Screen or flow: Home market discovery, Trending token table
- Viewport: Desktop wide; Paper target is 1512 px wide for the header and home table captures
- Auth state: Not confirmed
- Data state: Populated market table, `Trending` category selected, `24H` time window selected
- Related docs: [Visual Language](./02-visual-language.md), [Components](./03-components.md), [Page Patterns](./04-page-patterns.md), [Front-End Implementation](./06-frontend-implementation.md)

## Purpose

The home screen is a dense market scanning surface. Users search for tokens, switch market categories, compare ranked assets, and act on token rows through drill-down or buy entry points.

## First-Viewport Read

- Primary visual signal: black trading surface with the orange `orb` wordmark and a dominant global search field.
- Main action: search for tokens from the header.
- Main data object: ranked token table with price, trend, change, market cap, volume, score, and buy action.
- Secondary actions: category tabs, time-window filter, score scan, favorite stars, row actions.
- Navigation context: `Trending` is active in a horizontal category group.

## Layout

- Page shell: full black canvas with a fixed-height top header and a centered data region.
- Header: 69 px high in Paper. The reusable desktop top navigation uses an orange `orb` lockup on the left, a dominant charcoal search rail, a trailing utility action, `/` shortcut affordance, `Me`, `Network`, and a square settings control on the right.
- Main grid: single-column market table layout optimized for wide desktop scanning.
- Sidebar or secondary rail: none observed.
- Table or list behavior: 20 visible rows in the Paper table captures; rows are approximately 64 px high with stable column widths.
- Responsive behavior: not captured; mobile should be treated as unresolved.

## Visual Rules Observed

- Background: app canvas is pure or near-pure black.
- Surface: header search field and compact controls use a slightly raised charcoal surface.
- Border: table, header, row dividers, segmented controls, tooltip, and buttons use thin low-contrast borders.
- Typography: IBM Plex Sans and Geist Mono are present. Token symbols use bold uppercase styling; secondary labels and compact chips use a more technical mono treatment.
- Iconography: thin line icons for search, copy, settings, stars, and chevrons; token logos are circular image assets.
- Radius: controls use small radii, roughly 4-6 px; token logos are circular; score badges use angular hex forms.
- Spacing: the table is dense but readable, with wide column gutters and compact header controls.
- Density: table density is high; avoid oversized padding or card layouts in this screen.

## Components Observed

| Component | Variant | State | Notes |
| --- | --- | --- | --- |
| App shell | Desktop dark shell | Default | Black canvas with reusable desktop top navigation. |
| Desktop top navigation | Search-first header | Typed search | 69 px header; `orb` lockup, search rail, trailing utility action, `/`, `Me`, `Network`, and settings. |
| Global search | Header search | Typed | Paper node `2-0` shows `Search for token` with cursor; `/` shortcut affordance is visible. |
| Category tabs | Horizontal text tabs | `Trending` active | Active tab is white with a thin underline; inactive tabs are muted gray. |
| Market table | Dense token ranking table | Populated | Fixed columns, row dividers, rank, favorite, token identity, metrics, score, and buy action. |
| Token market row | Desktop dense row | SOL row | Paper node `4X-0` confirms row-level sizing, colors, and spacing for an individual token. |
| Time-window control | Segmented control | `24H` active | Active segment uses orange outline or highlight; inactive segments remain muted. |
| Sort header | Metric header with chip | `Volume 24H` active | Sortable headers use chevrons and compact timeframe chips. |
| Token identity cell | Logo, symbol, name | Truncated | Long token names truncate; symbols remain prominent. |
| Sparkline | Inline trend chart | Present in supplied screenshot, incomplete in some Paper nodes | Red and green lines with faint filled area. |
| Tooltip | Chart hover | Visible in Paper capture | Dark tooltip with border, price, and timestamp. |
| Score badge | Hex grade | A, B, C | Grade color maps to score quality: green, yellow, red. |
| Buy button | Outline action | Default | Compact red-orange outline button on each row. |

## Interaction Behavior

- Search: header search appears to support keyboard entry and a `/` shortcut affordance; Paper node `2-0` shows a typed search state. Suggestion behavior is not captured.
- Navigation: `Me`, `Network`, trailing utility action, and settings are visible as global header controls; active route, auth state, open menus, and network switching behavior are not captured.
- Filters: category tabs and time-window segmented control are visible.
- Sorting: metric headers show sortable affordances; `Volume 24H` is the active sort context in the supplied screenshot.
- Copy action: a copy icon is visible near header utility controls; row-level copy behavior is not captured.
- Links: token rows likely drill into token details, but exact click target rules are not captured.
- Loading: not captured.
- Empty: not captured.
- Error: not captured.

## Front-End Notes

- Token changes: add dark shell, charcoal surface, low-contrast border, orange accent, success, danger, warning, muted text, and tooltip tokens.
- Component changes: prioritize reusable desktop top navigation, global search, category tabs, dense market table, token market row, segmented controls, score badges, and outline buy buttons.
- Data constraints: token symbols must stay visible; token names can truncate; numeric columns need consistent alignment and compact formatting for large values and high precision prices.
- Row-level sizing: node `4X-0` confirms a roughly 1336 px by 64 px desktop row, 40 px token logo, 18-20 px favorite icon, 32-40 px score badge footprint, and about 56 px by 40 px Buy button.
- Accessibility considerations: active tab, active time window, sortable headers, score badges, and buy actions need non-color state indicators and keyboard focus states.
- Performance considerations: use fixed table layout and stable row heights; virtualize only after preserving column alignment and keyboard navigation.

## Open Questions

- Confirm exact colors from live CSS or computed styles.
- Confirm whether the top header in `2-0` is the current production header for the home route.
- Confirm mobile and tablet responsive behavior.
- Confirm row hover, row click, sort direction, and chart tooltip behavior from the live application.
- Confirm whether values use tabular numeric features or mono font for alignment.

## Shared Docs Updated

- [Brand Foundation](./01-brand-foundation.md): observed lowercase `orb` header lockup.
- [Visual Language](./02-visual-language.md): capture-derived colors, typography, spacing, surfaces, and icons.
- [Components](./03-components.md): reusable controls from the home table.
- [Page Patterns](./04-page-patterns.md): home market table pattern.
- [Interaction and Motion](./05-interaction-motion.md): observed filter, sorting, and tooltip behavior.
- [Front-End Implementation](./06-frontend-implementation.md): token and dense-table handoff rules.
