# Visual Language

This page captures the visual rules that front-end implementation should follow once production evidence is available.

## Color

Values below are capture-derived approximations from reviewed production captures. Confirm exact values from live CSS before locking implementation tokens.

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
| Detail metric surface | `color.surface.metric` | `#0b0b0b` | Token detail KPI band and summary stat grid cells | `OM-005-token-detail`, approximate |
| Chart grid | `color.chart.grid` | `#151515` | Token detail chart grid and minor dividers | `OM-005-token-detail`, screenshot approximate |
| Chart axis text | `color.chart.axisText` | `#757575` | Token detail y-axis and x-axis labels | `OM-005-token-detail`, screenshot approximate |
| Chart negative line | `color.chart.line.negative` | `#ff2f55` | Wrapped SOL 24H price line | `OM-005-token-detail`, screenshot approximate |
| Chart frame accent | `color.chart.frame.accent` | `#ef553f` | Chart corner brackets and active timeframe border | `OM-005-token-detail`, screenshot approximate |
| Modal border accent | `color.modal.border.accent` | `#ef3f32` | AI analysis popup outer stroke | Paper node `1QP-0`, approximate |
| Modal divider | `color.modal.divider` | `#1b1b1b` | AI analysis popup header divider | Paper node `1QP-0`, approximate |
| AI action surface | `color.action.ai.surface` | `#ef3f32` | Filled `Analyze` button | Paper node `1QP-0`, approximate |
| Assistant CTA surface | `color.surface.assistant.cta` | `#050505` | `Go deeper with Lana` secondary CTA | Paper node `1QP-0`, approximate |
| Assistant icon tile | `color.surface.assistant.icon` | `#1c1c1c` | Left icon tile inside Lana CTA | Paper node `1QP-0`, approximate |

## Typography

Observed font evidence:

| Role | Family | Token or Source | Usage | Confidence |
| --- | --- | --- | --- | --- |
| Sans | `IBM Plex Sans`, `IBM Plex Sans Fallback` | `.ibm_plex_sans_3e2a4a3c-module__0Pz8ra__className` | Primary UI sans family where this class is applied. | Medium |
| Mono | `Geist Mono`, `Geist Mono Fallback` | `--font-geist-mono` | Monospace token for hashes, addresses, code-like values, and technical metadata. | Medium |

Implementation note: the provided CSS shows IBM Plex Sans as the active `font-family` for that generated class. Do not document IBM Plex Sans as only a fallback unless the production cascade shows another sans font taking priority.

Observed type roles from production captures:

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
| Market item pair | Sans | ~18-20 px | 600 | `SOL-USDC` market pair in token detail markets table | Paper node `1HQ-0` |
| Market item venue | Sans or mono | ~12-13 px | 400 | Muted venue label such as `Bisonfi` | Paper node `1HQ-0` |
| Market item numeric | Sans or mono | ~17-19 px | 400-500 | Rate, liquidity, volume, trades, and unique counts | Paper node `1HQ-0` |
| Token detail title | Sans | ~20-22 px | 700 | `Wrapped SOL` detail heading | `OM-005-token-detail` |
| Detail KPI value | Sans | ~30-36 px | 700 | Price, holders, and 24H volume values | `OM-005-token-detail` |
| Detail stat label | Sans or mono | ~12-13 px | 500 | Supply, Liquidity, Market Cap, FDV labels | `OM-005-token-detail` |
| Chart axis label | Mono | ~11-12 px | 400 | Time and price axis labels | `OM-005-token-detail`, screenshot |
| Entity tab label | Sans | ~16-18 px | 600 active, 500 inactive | Markets, History, Holders, Metadata, Social | `OM-005-token-detail` |
| Modal title | Sans | ~18-20 px | 700 | `AI Token Analysis` popup title | Paper node `1QP-0` |
| Modal heading | Sans | ~16 px | 600 | `Analyze this token with AI` centered heading | Paper node `1QP-0` |
| Modal body | Sans | ~13-14 px | 400 | Explanatory AI popup copy | Paper node `1QP-0` |
| AI primary action | Mono | ~15-16 px | 500 | `Analyze` filled button label | Paper node `1QP-0` |
| Assistant CTA label | Sans | ~15-16 px | 700 | `Go deeper with Lana` secondary action | Paper node `1QP-0` |

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
| Token detail summary grid | Right-aligned 2 x 2 matrix | Supply, Liquidity, Market Cap, and FDV | `OM-005-token-detail`, approximate |
| Token detail KPI band | Three equal columns | Price, Holders, and 24H Volume panels | `OM-005-token-detail`, approximate |
| Token detail chart height | ~300 px | Main price chart plot area | `OM-005-token-detail`, Paper shell plus screenshot chart |
| Token detail tab bar | ~52 px | Markets, History, Holders, Metadata, Social | Paper node `1FI-0`, approximate |
| Market item row | ~50-56 px high | One Top Markets row inside token detail | Paper node `1HQ-0`, approximate |
| Market item logo cluster | ~40 px wide | Two overlapping circular token logos in the market identity cell | Paper node `1HQ-0`, approximate |
| Market item identity stack | Two-line text stack | Market pair above venue label | Paper node `1HQ-0` |
| AI analysis popup | 380 x 331 px | Compact AI tool modal reference | Paper node `1QP-0` |
| AI popup header | ~50 px high | Title, AI icon, close action, divider | Paper node `1QP-0`, approximate |
| AI popup primary action | ~112 x 36 px | Filled `Analyze` button | Paper node `1QP-0`, approximate |
| Assistant handoff CTA | ~222 x 58 px | Bordered `Go deeper with Lana` action | Paper node `1QP-0`, approximate |
| Assistant CTA icon tile | ~32 x 32 px | Left icon tile inside secondary CTA | Paper node `1QP-0`, approximate |
| Button/control radius | ~4-6 px | Buy buttons, segments, chips | `OM-001-home` |
| Popup/modal radius | ~8 px | AI analysis popup and assistant CTA | Paper node `1QP-0`, approximate |
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
- Market item surface: token detail market rows use the same black row and subtle divider model, but the identity cell uses overlapping pair logos and a muted venue subtitle instead of rank, favorite, score, or buy controls.
- Token detail surface: header, stat grid, KPI band, chart, tabs, and markets table remain part of one dense black analysis page rather than independent cards.
- Chart surface: a reserved black plot area with subtle grid lines, right-side y-axis text, bottom time labels, active timeframe border, and red corner brackets.
- Inline controls: segmented timeframe controls and compact chips use subtle charcoal fills and borders.
- Tooltip surface: black or near-black popover with thin border and compact text.
- Modal popup surface: `OM-009-ai-analysis-popup` confirms a compact black tool popup with a red accent stroke, low-contrast header divider, centered content, and a bordered secondary CTA.
- Detail panels, drawers, and menus remain pending production evidence.

## Icons

Observed icon style from `OM-001-home`:

| Icon type | Size | Stroke or treatment | Color role | Usage |
| --- | --- | --- | --- | --- |
| Header/search icons | ~18-20 px | Thin line | Secondary or muted text | Search, copy, settings, shortcut affordances |
| Header brand mark | ~34-42 px high | Segmented orange circular mark plus lowercase wordmark | Brand accent | Global navigation identity |
| Favorite star | ~18-20 px | Thin outline | Secondary text | Watchlist action in table rows |
| Sort chevron | ~14-16 px | Thin line | Secondary text, primary when active | Sortable metric headers |
| Token logo | ~40 px | Circular image | Asset-provided | Token identity |
| Market pair logos | ~24-28 px each, overlapped | Circular asset images with dark stroke or mask | Asset-provided | Token detail market item identity |
| Score badge | ~32 px | Hex badge with tinted outline and fill | Positive, warning, negative | Token score grade |
| AI analysis icon | ~18-24 px | Filled or compact pictogram | Brand accent or white | Modal title and primary AI action |
| Modal close icon | ~18-20 px | Thin line | Secondary text | Dismiss AI popup |
| Assistant CTA icons | ~18-24 px | Directional mark plus launch arrow | Primary text or muted text | `Go deeper with Lana` handoff |

For front-end consistency, each future icon entry should define:

- Name or glyph.
- Size.
- Stroke weight.
- Color role.
- Hover and active behavior.
- Associated action or semantic meaning.
