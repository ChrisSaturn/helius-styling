# Interaction and Motion

This page documents behavior that affects how OrbMarkets feels during use.

## Interaction Principles

- Keep data navigation immediate.
- Make copy, drill-down, and search actions predictable.
- Preserve context when moving between related entities.
- Use motion only to clarify state changes.
- Do not let animation slow down table scanning or explorer workflows.
- For secondary selected states, prefer selected text fill/color, font weight, semantic state, and a quiet neutral surface before using an orange outline.
- Make collection names and main clickables visually immediate with the White or primary text role; secondary metadata links can stay muted only when they are not the row's primary action.

## Behavior To Capture

| Area | Questions |
| --- | --- |
| Search | Does it support keyboard shortcuts, live suggestions, recent queries, or command-palette behavior? |
| Tables | Are rows clickable, selectable, expandable, sortable, paginated, or virtualized? |
| Charts | Are plots Recharts, canvas, or custom SVG; do they have hover tooltips, live updates, zooming, and keyboard-readable summaries? |
| Copy actions | How is success communicated, and how long does feedback persist? |
| AI analysis tools | How do AI requests start, load, complete, fail, rate-limit, and preserve token context? |
| Settings | Which preferences exist, which persist, and how should settings, network, and notification controls validate or fail? |
| Loading | Skeletons, spinners, optimistic placeholders, or stale-while-refresh behavior? |
| Refresh | Manual refresh, automatic refresh, timestamp labels, or live updates? |
| Errors | Inline errors, toasts, full-page errors, retry actions, or fallbacks? |
| Navigation | Does the app preserve filters, scroll position, tab state, or search context? |
| Event monitors | How are live rows inserted, paused, filtered, marked stale, or acknowledged without disrupting table scanning? |

## Observed From `OM-001-home`

| Area | Confirmed behavior | Still unresolved |
| --- | --- | --- |
| Search | Header search supports direct text entry and shows a `/` shortcut affordance in the supplied screenshot. | Suggestions, loading, recent queries, and no-result behavior. |
| Navigation | Desktop top navigation shows `Me`, `Network`, a trailing utility action, and settings as global controls. | Active route, menu-open, auth state, network switching, and mobile collapse behavior. |
| Filters | Category tabs and `24H` time-window selection are visible. | Hover, focus, disabled, persistence, and mobile behavior. |
| Tables | Sortable metric headers use chevrons and compact timeframe chips. | Row hover, row click targets, selected state, pagination, and virtualization. |
| Row actions | Token row node `4X-0` confirms favorite star, score badge, and compact Buy action placement. | Watchlist toggle feedback, Buy loading state, row click target, and nested-action behavior. |
| Tooltips | Chart hover tooltip is visible in Paper with price and timestamp. | Trigger delay, keyboard access, and collision behavior. |

## Observed From `OM-005-token-detail`

| Area | Confirmed behavior | Still unresolved |
| --- | --- | --- |
| Token actions | Token header exposes favorite, copy, social/external links, score badge, and compact `BUY` action. | Copied feedback, score explanation, buy flow, disabled states, and authenticated behavior. |
| Charts | Token chart has timeframe controls, line/candle mode controls, right-side axis labels, bottom time labels, and a live chart state in the browser screenshot. | Tooltip behavior, live refresh cadence, canvas/SVG implementation, keyboard summary, error state, and candle mode. |
| Chart capture gap | Paper node `1AG-0` captured the chart shell but did not fetch the rendered chart series, grid, axes, or full labels. | Confirm whether this is a Paper limitation, a chart library limitation, or a production loading race. |
| Tabs | Markets, History, Holders, Metadata, and Social are visible with Markets active. | Whether tabs route, preserve scroll, lazy-load data, or update the URL. |
| Tables | Top Markets table supports sortable metric headers and pagination controls; node `1HQ-0` confirms the row-level market item anatomy. | Row links, row hover, selected state, pagination disabled state, and empty/error table states. |
| Live updates | `Live` appears in the supplied browser screenshot beside chart timeframe controls. | On/off state, refresh interval, stale data labeling, and reduced-motion behavior. |

## Observed From `OM-008-network-stats`

| Area | Confirmed behavior | Still unresolved |
| --- | --- | --- |
| Recent blocks | Recent block stream shows a pause action, active rows, a muted row, leader identity, and transaction count. | Resume state, paused label, live refresh cadence, stale state, and row insertion behavior. |
| Chart controls | Network TPS includes an `Include Vote Txns` checkbox; SOL price exposes `1H`, `24H`, `7D`, `1M`, `1Y` controls with `24H` active. | Chart tooltips, chart rendering source, loading/no-data/error states, and whether timeframe state persists in URL. |
| Validator filters | Active validators toolbar shows total-count copy, a checked `Show active only` toggle, and a grid-mode icon. | Grid mode behavior, filter persistence, inactive validators state, and disabled/loading states. |
| Sorting | Rank and Active Stake headers show sort affordances. | Sort direction, default sort, multi-sort, keyboard behavior, and server/client sorting boundary. |
| Pagination | Active validators table shows `1 - 10 of 879` with previous/next controls. | Disabled edge states, page-size controls, and whether pagination is client-side or server-side. |
| Links | Epoch start/current slot values show external-link icons; leaders and validator identities imply drill-down targets. | Exact route targets, hover/focus behavior, and copied/opened feedback. |
| Motion | No decorative motion is observed in the capture. | Future live row/metric refresh feedback should be subtle, non-disruptive, and reduced-motion aware. |

## Observed From `OM-009-ai-analysis-popup`

| Area | Confirmed behavior | Still unresolved |
| --- | --- | --- |
| Modal dismissal | Header includes an icon-only close action. | Escape key behavior, backdrop click, focus return, close animation. |
| AI analysis | Popup presents a single primary `Analyze` action before analysis starts. | Loading, streaming, generated result, retry, disabled, unsupported token, and rate-limit states. |
| Assistant handoff | Secondary CTA offers `Go deeper with Lana` with a launch-style arrow. | Whether it opens a new route, external destination, assistant panel, or deeper modal state. |
| Copy tone | AI action copy is concise and task-oriented. | Whether token names or risk disclaimers appear in other states. |

## Prototype From `OM-PROT-001-pulse`, `OM-PROT-002-portfolio`, and `OM-PROT-003-settings`

This section documents intentional prototype behavior only; it is not production evidence.

| Area | Prototype behavior | Still unresolved |
| --- | --- | --- |
| Live status | Header shows a compact mock-live status and update timestamp that refreshes from the local mock feed. | Real stream connection states, reconnects, stale labels, and manual pause/resume. |
| Time windows | `5m`, `1H`, `24H`, and `7D` render as keyboard-focusable segmented buttons with `24H` active. | Persistence, URL state, backend query mapping, disabled states, and loading feedback. |
| Event tables | Sales and listings use fixed columns, stable row heights, capped visible latest rows, inert links, and a brief incoming-row animation for newly generated rows. | Sorting, filtering, copy feedback, row click targets, pause/resume behavior, and virtualization. |
| Placeholder data | Placeholder image tiles, identifiers, and generated sale/listing rows keep the table layout stable while exercising live-update behavior. | Real image loading, broken image handling, collection verification, and webhook error states. |
| Me portfolio | `Me` switches to a portfolio view; the brand button returns to the Pulse monitor. | URL routing, authenticated state, wallet switching, privacy states, and persistence. |
| Stats marketplace view | `Stats` replaces the prototype `Network` nav entry and shows only NFT marketplace KPIs, tokenized Recharts marketplace volume and listing-depth graphs, visual summary panels, listing-platform comparison, and collection routing. | URL routing, live marketplace/DAS/aggregator sources, source attribution, stale indicators, filters, and partial data states. |
| Settings popup | Settings opens an anchored placeholder dialog with grouped controls and closes through Escape, close, Done, route change, or brand navigation. | Real preference persistence, outside-click behavior, focus trap, focus return, saved state, and account-scoped settings. |
| Private Payments hero | The Eclipse prototype uses a decorative ASCII frame sequence behind the sparse hero, with Paper holding a static first-frame preview. | Whether the production route should keep the animation, lower the frame rate, or swap to a brand-approved generated asset. |

Refined interaction direction:

- Active timeframe buttons expose `aria-pressed`; selected rendering should prioritize selected text fill and weight. Use an orange inset or outline only for production-confirmed main timeframe controls, not for secondary settings or utility choices.
- Mock-live treatment is limited to the compact square-corner status label and timestamp; avoid decorative motion in the monitor header.
- Mock-feed updates should use one timed source, functional state updates, capped visible rows, and derived metrics. They should not steal focus, resize the tables, or imply real stream connectivity.
- Incoming mock rows can use a short accent fill, left rail, and content slide/fade to signal new data. KPI cells can use a short refresh pulse. Keep these animations CSS-only, under roughly 1.5 seconds, and disabled under reduced-motion preferences.
- Marketplace stats updates should follow the monitor table rules: refresh metric text, Recharts volume/depth buckets, visual summary bars, platform rows, and collection routing rows without changing KPI count, chart height, row height, column width, scroll position, or focus.
- Recharts hover/focus feedback should stay quiet: use the custom black tooltip, neutral cursor fill, and primary-bar contrast. Do not add pulsing chart bars; live updates should replace values without introducing chart-specific animation unless reduced-motion behavior and data meaning are explicitly defined.
- Inert NFT, account, signature, and listing links preserve full values through accessible labels and title text while rendering truncated table text.
- Collection names and main row clickables should stay in the White or primary text role even when the link is inert in the prototype; muted text is for supporting identifiers and metadata.
- The active `Me` and `Stats` nav states use `aria-current="page"` and selected text/fill treatment rather than an orange outline.
- The settings trigger exposes `aria-expanded`/`aria-controls`, renders a labelled dialog while open, and uses selected icon/text fill or quiet neutral active styling unless keyboard focus requires a stronger ring.
- Settings segment choices such as `Dark` and `System` should behave as flat buttons in one group; avoid extra reveal motion or nested active containers for each choice.
- Private Payments hero motion can be more expressive than dense explorer views because it lives in a sparse marketing first viewport. Keep it decorative, `aria-hidden`, low opacity, reduced-motion aware, and out of React state so it never shifts layout or steals focus.

## Motion Guidelines

Pending production validation:

- Use short transitions for hover, focus, selection, and panel reveal.
- Keep AI popup opening and closing quick; the interaction should feel like a lightweight tool, not a page transition.
- Keep settings popup reveal quick and anchored; it should feel like a utility surface, not route navigation.
- Avoid decorative motion in dense data views.
- Keep loading states stable so table columns and layout do not shift.
- Keep AI request loading stable so the popup does not resize while the request is running.
- In event monitors, insert or refresh live rows without changing column widths, row height, scroll position, or keyboard focus.
- Animate incoming event data on table cells and inner wrappers, not by changing native table display semantics or row dimensions.
- Respect reduced-motion preferences.
