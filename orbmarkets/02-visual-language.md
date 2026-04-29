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
| Border active | `color.border.accent` | `#ef553f` | Primary action outlines, production-confirmed main active controls, and focus emphasis where a neutral ring is insufficient | `OM-001-home`, approximate |
| Text primary | `color.text.primary` | `#f4f4f4` | Token symbols, prices, active labels, collection names, and main clickable labels | `OM-001-home`, approximate |
| Text secondary | `color.text.secondary` | `#858585` | Token names, inactive tabs, metadata | `OM-001-home`, approximate |
| Text muted | `color.text.muted` | `#5c5c5c` | Rank numbers, inactive small controls | `OM-001-home`, approximate |
| Brand accent | `color.brand.orb` | `#ef553f` | Orb wordmark, selected text fill, primary trading accent, and confirmed brand moments | `OM-001-home`, approximate |
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
| Chart bar primary | `color.chart.bar.primary` | `#f4f4f4` | Pulse Recharts marketplace volume bars | `OM-PROT-004-stats`, prototype only |
| Chart bar secondary | `color.chart.bar.secondary` | `#858585` | Pulse Recharts listing-depth bars | `OM-PROT-004-stats`, prototype only |
| Chart cursor | `color.chart.cursor` | `rgba(239, 85, 63, 0.08)` | Recharts hover/focus bucket cursor | `OM-PROT-004-stats`, prototype only |
| Chart tooltip surface | `color.chart.tooltip.surface` | `#050505` | Recharts tooltip body | `OM-PROT-004-stats`, prototype only |
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
| Network stats section label | Mono | ~11-12 px | 700 | Recent Blocks, Network TPS, validators, node versions, epoch headers | `OM-008-network-stats` |
| Network headline value | Sans | ~54-88 px for validator count, ~12-20 px in headers | 700 | Validator count and panel header metrics | `OM-008-network-stats` |
| Validator table identity | Sans plus mono metadata | ~14-15 px name, ~12 px metadata | 700 name, 400 metadata | Active validators table | `OM-008-network-stats` |
| Slot and epoch metadata | Mono | ~11-13 px | 400-600 | Epoch progress labels and slot values | `OM-008-network-stats` |
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
| Site max width | 1480 px outer shell | Shared header and page rail for local prototypes | `OM-PROT-001-pulse`, prototype only |
| Site horizontal gutter, desktop | 18 px | Shared inline page/header spacing at desktop widths | `OM-PROT-001-pulse`, prototype only |
| Site horizontal gutter, tablet | 14 px | Shared inline page/header spacing below 980 px | `OM-PROT-001-pulse`, prototype only |
| Site horizontal gutter, mobile | 12 px | Shared inline page/header spacing below 640 px | `OM-PROT-001-pulse`, prototype only |
| Settings popup | ~360 px wide, ~50 px header | Placeholder global settings utility surface | `OM-PROT-003-settings`, prototype only |
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
| Network chart panel | 667 x 298 px unit | TPS and SOL price chart panels; local prototypes should preserve this sparse panel rhythm when rendering marketplace Recharts adapters | `OM-008-network-stats`, Paper node `3RV-0` |
| Network summary grid | 1336 px wide, three equal columns | Validators, client distribution, node versions in one continuous band with vertical dividers | `OM-008-network-stats`, Paper node `3Y3-0` |
| Network section header | ~50 px high in chart/stat panels | Uppercase title, info icon, optional large metric, and three-line horizontal rule cluster | `OM-008-network-stats`, Paper nodes `3RV-0`, `3Y3-0` |
| Active validator row | ~56-64 px high | Validator identity and stake table rows | `OM-008-network-stats`, approximate |
| Epoch progress bar | ~8 px high | Epoch completion display | `OM-008-network-stats`, approximate |
| AI analysis popup | 380 x 331 px | Compact AI tool modal reference | Paper node `1QP-0` |
| AI popup header | ~50 px high | Title, AI icon, close action, divider | Paper node `1QP-0`, approximate |
| AI popup primary action | ~112 x 36 px | Filled `Analyze` button | Paper node `1QP-0`, approximate |
| Assistant handoff CTA | ~222 x 58 px | Bordered `Go deeper with Lana` action | Paper node `1QP-0`, approximate |
| Assistant CTA icon tile | ~32 x 32 px | Left icon tile inside secondary CTA | Paper node `1QP-0`, approximate |
| Visible UI corner radius | 0 px | Buttons, segments, chips, table frames, panels, popups, modals, command blocks, and CTA shells | Orb product direction, 2026-04-28 |
| Circular or asset-defined shapes | Asset-defined | Orb mark, token logos, paired market logos, and chart points | Production/prototype asset behavior |
| Token logo size | ~40 px | Token identity cell | `OM-001-home` |
| Border width | 1 px | Table frame, dividers, controls | `OM-001-home` |

Still resolve:

- Mobile breakpoints.
- Page gutters across full browser widths.
- Detail panel padding on non-home screens.

## Pulse Styling Refinement Notes

Prototype source: `OM-PROT-001-pulse`; current Orb market-table styling reference: `https://orbmarkets.io/` and user-supplied screenshot.

- Sizing: dense rows should stay close to the observed market-table cadence. Use stable dimensions for time-window buttons, KPI cells, identity thumbnails, score/status badges, and row actions before tuning visual polish.
- Horizontal spacing: prototypes use one shared site rail: 1480 px max shell, 18 px desktop gutter, 14 px tablet gutter, and 12 px mobile gutter. Header content, page content, profile bands, KPI bands, and table panels must align to this rail rather than each declaring separate inline padding.
- Color usage: black canvas and charcoal controls remain dominant. Red-orange accent is reserved for brand moments, primary actions, production-confirmed main active controls, and focus emphasis where neutral treatment is not clear enough. Status green/red/yellow are for data meaning only.
- Text hierarchy: collection names and main clickable labels use the White or primary text role, `color.text.primary`, even inside dense two-line identity cells. Reserve secondary and muted roles for supporting metadata such as venues, marketplaces, account labels, timestamps, inactive controls, and non-primary subtitles.
- Corner treatment: visible interface containers and controls use square 0 px corners. Do not add rounded corners to searches, buttons, segmented controls, table panels, KPI bands, settings popups, modals, command blocks, progress tracks, or landing tiles. Circular treatment is reserved for asset-defined logos, brand marks, and chart points.
- Selection usage: secondary selected states should use text fill/color, font weight, semantic state, and a quiet neutral surface before using an orange outline. Avoid orange outlines on non-essential controls such as placeholder settings segments, density choices, secondary nav utilities, and inactive filter groups.
- Highlight usage: active sort, active timeframe, keyboard focus, hover, and status deltas each need distinct treatment. Do not use a stronger fill or brighter border unless the state changes user intent, primary action priority, or data meaning.
- Contrast: muted labels and inactive controls can be quiet, but row-critical values, identifiers, and selected states must remain readable at table-scanning distance.
- Stats panel distribution: use the Paper network panels as the sizing reference. Chart rows should be continuous two-column bands with 298 px panel height, sparse body space, large headline metrics only in the header, and bottom metadata anchored to the panel edge. The local marketplace graphs now use a tokenized Recharts bar adapter for 2-hour volume and floor-band listing depth instead of generic line/area placeholders. Three-up summary rows should be one bordered band with equal columns and vertical dividers, not separate cards with gaps.
- Current Pulse implementation alignment target: compact title/status header, profile summary band for `Me`, Paper-aligned Stats chart and summary bands, 64 px monitor rows, fixed neutral NFT thumbnails, anchored settings popup, tokenized hover states, selected text fill for secondary controls, and red-orange reserved for main active controls, primary action emphasis, profile emphasis, and focus treatment.

## Private Payments API Prototype Notes

Prototype source: `OM-PROT-005-private-payments-api`, Paper node `3JV-0`; layout reference: `https://www.solana.new/`; product copy supplied by the user.

- Landing pages can use a more spacious first viewport than explorer views, but should still preserve the black app canvas, shallow surfaces, compact controls, and command-forward developer tone.
- The Private Payments API page uses the existing 1480 px rail, 18 px desktop gutter, 72 px Helius header, IBM Plex Sans UI copy, and Geist Mono command/chip/terminal content.
- The hero command now uses the install terminal treatment from Paper node `3R7-0`: one red-orange bordered shell, compact dark title bar, centered mono label, copy affordance, and a supporting Helius tool row.
- Red-orange remains the primary action and high-signal accent for command borders, active nav/tabs, and CTA buttons. Status green is reserved for readiness/live indicators and should not become a decorative palette.
- Capability tiles are future lower-section surfaces for this page; if added, they should be shallow bordered surfaces with mono glyphs and direct utility copy rather than marketing cards with shadows, illustrations, or nested panel stacks.
- Terminal previews are future lower-section surfaces for this page; if added, they should use one visible shell with a compact title bar and preformatted mono content. Commands and outputs must remain readable and truncate or wrap without resizing the page section.
- Landing-page command blocks, tiles, terminal shells, chips, and CTA controls follow the same square 0 px corner rule as the explorer UI.

## Surfaces

Track how the product separates content:

- Full-page shell: black canvas, no decorative background.
- Navigation surface: 69 px top header with a reserved logo rail, dominant charcoal search rail, inline utility affordance, compact text links, and square settings control.
- Table surface: black body with row dividers instead of cards.
- Row surface: token rows are not separate cards; the visual separation is a black row surface, 1 px divider, and stable column rhythm.
- Market item surface: token detail market rows use the same black row and subtle divider model, but the identity cell uses overlapping pair logos and a muted venue subtitle instead of rank, favorite, score, or buy controls.
- Token detail surface: header, stat grid, KPI band, chart, tabs, and markets table remain part of one dense black analysis page rather than independent cards.
- Network stats surface: recent blocks, chart panels, validator summary panels, active validators, and epoch state are segmented by shallow bordered bands with compact section headers and three-line rule clusters, not floating cards. Adjacent chart and summary panels should share a parent border and vertical dividers where Paper shows continuous rows.
- Agent landing surface: hero, command block, capability tiles, terminal preview, workflow rail, and final CTA use shallow black panels on the same canvas. The page can be promotional, but it should still feel like a developer tool surface rather than a decorative marketing page.
- Chart surface: a reserved black plot area with subtle grid lines, right-side y-axis text, bottom bucket labels, active timeframe border when controls are present, and red corner brackets where production confirms the token-detail chart frame. Recharts surfaces must inherit these tokens instead of generic `--chart-*` defaults.
- Inline controls: segmented timeframe controls and compact chips use subtle charcoal fills and borders. On secondary controls, selected state should start with selected text fill/color and weight; do not add orange outlines by default.
- Tooltip surface: black or near-black popover with thin border and compact text.
- Modal popup surface: `OM-009-ai-analysis-popup` confirms a compact black tool popup with a red accent stroke, low-contrast header divider, centered content, and a bordered secondary CTA.
- Settings popup surface: `OM-PROT-003-settings` should use the same black utility surface language with flat grouped rows, subtle dividers, compact segmented controls, and selected text fill rather than orange outlines on secondary choices. This is prototype guidance, not production evidence.
- Detail panels, drawers, and menus remain pending production evidence.

## Surface Composition Rules

- Use one visible surface per functional region: app shell, table band, modal, popup, chart frame, or KPI band.
- Keep visible surface and control corners square at 0 px. The square-corner rule applies to shell frames, rows, buttons, chips, segmented controls, popups, progress tracks, and terminal/command surfaces.
- Prefer spacing, alignment, and subtle dividers over nested visible containers.
- In settings popups, place labels such as `Display`, `Density`, and `Network` directly on rows inside the popup shell. Do not wrap each row in its own bordered card.
- Segment choices such as `Dark` and `System` should sit inside one minimal control group or render as flat text buttons. Do not wrap each choice in an additional visible subcontainer.
- Inner wrappers are allowed for layout, truncation, hit targets, or accessibility, but they should not introduce extra borders, fills, or shadows unless the wrapper has a distinct semantic purpose.

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
| Prototype Lucide utility icons | 12-18 px | Thin line, inherited stroke | Muted text by default, brand fill for selected or high-signal states | `OM-PROT-001-pulse`, nav, settings, table headers, metric cells, address links, timestamps |
| Prototype section icon tiles | 28-32 px tile | Thin line inside subtle bordered tile | Brand text fill on neutral surface | `OM-PROT-001-pulse`, page titles and metric cells |

For front-end consistency, each future icon entry should define:

- Name or glyph.
- Size.
- Stroke weight.
- Color role.
- Hover and active behavior.
- Associated action or semantic meaning.

Prototype implementation notes:

- Use `lucide-react` for reusable interface icons in the local React prototype.
- Keep icons decorative when adjacent text already names the action or value; expose accessible names on the parent button/link instead.
- Use 12-13 px icons inside dense table cells and metadata, 15-18 px icons inside nav/buttons, and 28-32 px tiles only for page-title or metric emphasis.
- Do not introduce icon-only meaning for data status. Positive, negative, live, and selected states still need text or semantic state.
