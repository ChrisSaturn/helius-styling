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

## Motion Guidelines

Pending production validation:

- Use short transitions for hover, focus, selection, and panel reveal.
- Avoid decorative motion in dense data views.
- Keep loading states stable so table columns and layout do not shift.
- Respect reduced-motion preferences.

