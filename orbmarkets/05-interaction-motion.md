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
| Copy actions | How is success communicated, and how long does feedback persist? |
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

## Motion Guidelines

Pending production validation:

- Use short transitions for hover, focus, selection, and panel reveal.
- Avoid decorative motion in dense data views.
- Keep loading states stable so table columns and layout do not shift.
- Respect reduced-motion preferences.
