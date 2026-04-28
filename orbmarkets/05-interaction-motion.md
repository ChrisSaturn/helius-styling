# Interaction and Motion

This page documents behavior that affects how OrbMarkets feels during use.

## Interaction Principles

- Keep data navigation immediate.
- Make copy, drill-down, and search actions predictable.
- Preserve context when moving between related entities.
- Use motion only to clarify state changes.
- Do not let animation slow down table scanning or explorer workflows.

## Behavior To Capture

| Area | Questions |
| --- | --- |
| Search | Does it support keyboard shortcuts, live suggestions, recent queries, or command-palette behavior? |
| Tables | Are rows clickable, selectable, expandable, sortable, paginated, or virtualized? |
| Charts | Are plots canvas or SVG, do they have hover tooltips, live updates, zooming, and keyboard-readable summaries? |
| Copy actions | How is success communicated, and how long does feedback persist? |
| AI analysis tools | How do AI requests start, load, complete, fail, rate-limit, and preserve token context? |
| Loading | Skeletons, spinners, optimistic placeholders, or stale-while-refresh behavior? |
| Refresh | Manual refresh, automatic refresh, timestamp labels, or live updates? |
| Errors | Inline errors, toasts, full-page errors, retry actions, or fallbacks? |
| Navigation | Does the app preserve filters, scroll position, tab state, or search context? |

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

## Observed From `OM-009-ai-analysis-popup`

| Area | Confirmed behavior | Still unresolved |
| --- | --- | --- |
| Modal dismissal | Header includes an icon-only close action. | Escape key behavior, backdrop click, focus return, close animation. |
| AI analysis | Popup presents a single primary `Analyze` action before analysis starts. | Loading, streaming, generated result, retry, disabled, unsupported token, and rate-limit states. |
| Assistant handoff | Secondary CTA offers `Go deeper with Lana` with a launch-style arrow. | Whether it opens a new route, external destination, assistant panel, or deeper modal state. |
| Copy tone | AI action copy is concise and task-oriented. | Whether token names or risk disclaimers appear in other states. |

## Motion Guidelines

Pending production validation:

- Use short transitions for hover, focus, selection, and panel reveal.
- Keep AI popup opening and closing quick; the interaction should feel like a lightweight tool, not a page transition.
- Avoid decorative motion in dense data views.
- Keep loading states stable so table columns and layout do not shift.
- Keep AI request loading stable so the popup does not resize while the request is running.
- Respect reduced-motion preferences.
