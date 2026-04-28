# Visual Language

This page captures the visual rules that front-end implementation should follow once production evidence is available.

## Color

Values below are capture-derived approximations from `OM-001-home`. Confirm exact values from live CSS before locking implementation tokens.

| Role | Token | Value | Usage | Evidence |
| --- | --- | --- | --- | --- |
| Page background | `color.bg.app` | `#000000` | App shell and primary canvas | `OM-001-home` |
| Header/search surface | `color.surface.header` | `#111111` | Top nav and global search field | `OM-001-home`, approximate |
| Nav utility surface | `color.surface.nav.utility` | `#151515` | Settings button and compact header utility controls | Paper node `2-0`, approximate |
| Table surface | `color.surface.table` | `#000000` | Dense market table body | `OM-001-home` |
| Control surface | `color.surface.control` | `#0b0b0b` | Time-window segments, chips, tooltip | `OM-001-home`, approximate |
| Border | `color.border.subtle` | `#1c1c1c` | Table frame, row dividers, header/search boundary | `OM-001-home`, approximate |
| Border active | `color.border.accent` | `#ef553f` | Active `24H` segment, buy button outline | `OM-001-home`, approximate |
| Text primary | `color.text.primary` | `#f4f4f4` | Token symbols, prices, active labels | `OM-001-home`, approximate |
| Text secondary | `color.text.secondary` | `#858585` | Token names, inactive tabs, metadata | `OM-001-home`, approximate |
| Text muted | `color.text.muted` | `#5c5c5c` | Rank numbers, inactive small controls | `OM-001-home`, approximate |
| Brand accent | `color.brand.orb` | `#ef553f` | Orb wordmark, selected outlines, primary trading accent | `OM-001-home`, approximate |
| Success | `color.status.positive` | `#4ee982` | Positive percent change, A score badge | `OM-001-home`, approximate |
| Warning | `color.status.warning` | `#c99a22` | B score badge | `OM-001-home`, approximate |
| Error | `color.status.negative` | `#f04455` | Negative percent change, C score badge | `OM-001-home`, approximate |
| Row danger text | `color.data.negative` | `#e7475b` | Negative token change inside the market row | Paper node `4X-0`, approximate |
| Score positive fill | `color.score.positive.surface` | `#062b19` | A score badge interior | Paper node `4X-0`, approximate |
| Buy action surface | `color.action.buy.surface` | `#050505` | Compact row Buy button fill | Paper node `4X-0`, approximate |

## Typography

Observed font evidence:

| Role | Family | Token or Source | Usage | Confidence |
| --- | --- | --- | --- | --- |
| Sans | `IBM Plex Sans`, `IBM Plex Sans Fallback` | `.ibm_plex_sans_3e2a4a3c-module__0Pz8ra__className` | Primary UI sans family where this class is applied. | Medium |
| Mono | `Geist Mono`, `Geist Mono Fallback` | `--font-geist-mono` | Monospace token for hashes, addresses, code-like values, and technical metadata. | Medium |

Implementation note: the provided CSS shows IBM Plex Sans as the active `font-family` for that generated class. Do not document IBM Plex Sans as only a fallback unless the production cascade shows another sans font taking priority.

Observed type roles from `OM-001-home`:

| Role | Family | Size | Weight | Usage | Evidence |
| --- | --- | --- | --- | --- | --- |
| Header search | Sans | ~20 px | 500 | Placeholder and typed search text | Supplied screenshot, Paper node `2-0` |
| Header nav link | Sans or mono | ~16-18 px | 500 | `Me`, `Network`, and compact route entries | Paper node `2-0` |
| Category tab | Sans | ~18-20 px | 600 active, 500 inactive | Watchlist, Trending, Majors, DeFi, Stocks, Commodities, Cults | `OM-001-home` |
| Table header | Sans or mono | ~13-14 px | 500 | Column labels and small timeframe chips | `OM-001-home` |
| Token symbol | Sans | ~16-18 px | 700 | Uppercase token ticker | `OM-001-home` |
| Token secondary label | Mono | ~12-13 px | 400 | Token name and truncated metadata | `OM-001-home` |
| Numeric value | Sans or mono | ~15-16 px | 500 | Prices, market cap, volume, percentage change | `OM-001-home` |
| Row action label | Sans | ~14 px | 500 | Compact `Buy` button text | Paper node `4X-0` |
| Micro chip | Mono | ~10-11 px | 500 | `24H`, `7D`, `30D` compact labels | `OM-001-home` |

Still capture these from production:

- Base text size.
- Heading scale.
- Tabular or monospace usage for addresses, hashes, slots, and amounts.
- Line-height strategy for dense tables.

## Spacing and Density

OrbMarkets should optimize for scan speed. `OM-001-home` confirms a dense market table with restrained spacing.

| Rule | Observed value | Usage | Evidence |
| --- | --- | --- | --- |
| Header height | 69 px | Global app header | Paper node `2-0` |
| Header logo rail | ~165-175 px wide | Left brand lockup reservation before the search rail | Paper node `2-0`, approximate |
| Header search rail | ~61 px high | Dominant search surface inside the 69 px header | Paper node `2-0`, approximate |
| Header settings control | ~36-40 px square | Final global settings button | Paper node `2-0`, approximate |
| Table row height | ~64 px | Home market rows | Paper nodes `16-0`, `2I1-0` |
| Token market row | ~1336 x 64 px | Desktop row component width and height | Paper node `4X-0`, approximate |
| Row favorite action | ~20 px icon inside larger cell | Watchlist star at the start of each row | Paper node `4X-0`, approximate |
| Row rank text | ~16 px text | Rank index after favorite action | Paper node `4X-0`, approximate |
| Row token identity block | ~40 px logo with two-line text stack | Token avatar, symbol, and token name | Paper node `4X-0`, approximate |
| Row buy action | ~56 x 40 px | Compact row-level trading action | Paper node `4X-0`, approximate |
| Row score badge footprint | ~32-40 px | Hex grade badge area | Paper node `4X-0`, approximate |
| Table toolbar height | ~42 px | Total volume and time-window row | `OM-001-home` |
| Table header height | ~36 px | Column labels and sort controls | `OM-001-home` |
| Button/control radius | ~4-6 px | Buy buttons, segments, chips | `OM-001-home` |
| Token logo size | ~40 px | Token identity cell | `OM-001-home` |
| Border width | 1 px | Table frame, dividers, controls | `OM-001-home` |

Still resolve:

- Mobile breakpoints.
- Page gutters across full browser widths.
- Detail panel padding on non-home screens.

## Surfaces

Track how the product separates content:

- Full-page shell: black canvas, no decorative background.
- Navigation surface: 69 px top header with a reserved logo rail, dominant charcoal search rail, inline utility affordance, compact text links, and square settings control.
- Table surface: black body with row dividers instead of cards.
- Row surface: token rows are not separate cards; the visual separation is a black row surface, 1 px divider, and stable column rhythm.
- Inline controls: segmented timeframe controls and compact chips use subtle charcoal fills and borders.
- Tooltip surface: black or near-black popover with thin border and compact text.
- Detail panels, modals, drawers, and menus remain pending production evidence.

## Icons

Observed icon style from `OM-001-home`:

| Icon type | Size | Stroke or treatment | Color role | Usage |
| --- | --- | --- | --- | --- |
| Header/search icons | ~18-20 px | Thin line | Secondary or muted text | Search, copy, settings, shortcut affordances |
| Header brand mark | ~34-42 px high | Segmented orange circular mark plus lowercase wordmark | Brand accent | Global navigation identity |
| Favorite star | ~18-20 px | Thin outline | Secondary text | Watchlist action in table rows |
| Sort chevron | ~14-16 px | Thin line | Secondary text, primary when active | Sortable metric headers |
| Token logo | ~40 px | Circular image | Asset-provided | Token identity |
| Score badge | ~32 px | Hex badge with tinted outline and fill | Positive, warning, negative | Token score grade |

For front-end consistency, each future icon entry should define:

- Name or glyph.
- Size.
- Stroke weight.
- Color role.
- Hover and active behavior.
- Associated action or semantic meaning.
