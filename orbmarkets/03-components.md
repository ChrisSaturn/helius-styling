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
| Data table | Observed in `OM-001-home` | Dense market table, fixed columns, 20 visible rows, sorting affordances. |
| Token market row | Observed in `OM-001-home` | Individual token row from Paper node `4X-0`; sizing, colors, and action placement confirmed. |
| Hash or address display | Pending capture | Truncation, copy action, link behavior, monospace usage. |
| Score badge | Observed in `OM-001-home` | Hex grade badge for A/B/C market score. |
| Status badge | Pending capture | Transaction status, validator status, risk or health states. |
| Stat tile | Pending capture | Network metrics and compact KPI display. |
| Detail panel | Pending capture | Label/value pairs, grouped metadata, nested actions. |
| Tabs | Observed in `OM-001-home` | Category navigation with underline active state. |
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
- Accessibility expectations: use a landmark `nav`, expose the search as a labeled input, give the utility/settings icon buttons accessible names, preserve visible focus rings, and mark active route/network state without relying only on color.
- Implementation notes: build this as a reusable navigation component, with global search as a child component rather than duplicating search markup per route. Keep nav links text-based and compact; use icon buttons only for utility actions.
- Production evidence: `OM-001-home`, Paper node `2-0`, source `https://app.paper.design/file/01KQ91NY8A16SXDG8G6QEJVM78/1-0/2-0`.

## Global Search

- Purpose: primary route entry for token lookup and market navigation.
- Anatomy: search icon, placeholder or typed input text, trailing utility action, `/` shortcut affordance.
- States: typed state observed in Paper node `2-0`; empty, suggestions, loading, and no-result states pending.
- Data constraints: placeholder and typed values must fit inside the header without resizing the header.
- Accessibility expectations: expose a real input, visible focus state, keyboard shortcut hint, and accessible label.
- Production evidence: `OM-001-home`, Paper node `2-0`.

## Category Tabs

- Purpose: switch the home market table between watchlist and market categories.
- Anatomy: text-only tabs with underline active state.
- Variants: Watchlist, Trending, Majors, DeFi, Stocks, Commodities, Cults.
- States: active and inactive observed; hover and focus pending.
- Implementation notes: active state uses both color and underline, not color alone.
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
