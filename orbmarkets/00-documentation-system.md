# Documentation System

The goal is to keep OrbMarkets design documentation useful for front-end work, not to create a static brand deck. Every page should help a developer make better UI decisions with less ambiguity.

## Principles

- Document decisions that affect implementation.
- Prefer observed production evidence over abstract taste.
- Keep stable brand guidance separate from page-specific findings.
- Update shared guidance when multiple production examples reveal the same pattern.
- Record uncertainty explicitly so it can be resolved during review.

## Efficient Documentation Flow

1. Capture the live design through Paper MCP.
2. Add the source to [Production Design Index](./production-design-index.md).
3. Create a page-level Markdown file from [Production Design Template](./production-design-template.md).
4. Extract reusable patterns into the shared docs:
   - Brand and tone go into [Brand Foundation](./01-brand-foundation.md).
   - Colors, type, spacing, and surfaces go into [Visual Language](./02-visual-language.md).
   - Repeated UI controls go into [Components](./03-components.md).
   - Repeated layouts go into [Page Patterns](./04-page-patterns.md).
   - Motion, loading, and feedback behavior go into [Interaction and Motion](./05-interaction-motion.md).
   - Engineering handoff details go into [Front-End Implementation](./06-frontend-implementation.md).

## Fast Styling Capture Path

For front-end styling work, use the shortest path that preserves traceability:

1. Keep one route-level capture file for the screen, such as `home.md`.
2. Record Paper node IDs, viewport, visible states, and capture gaps in that file.
3. Promote only reusable decisions into shared docs:
   - Role-based tokens and density rules in [Visual Language](./02-visual-language.md).
   - Reusable controls and table pieces in [Components](./03-components.md).
   - Route layout rules in [Page Patterns](./04-page-patterns.md).
   - Token names, constraints, and implementation rules in [Front-End Implementation](./06-frontend-implementation.md).
4. Keep approximate visual values marked as capture-derived until live CSS confirms exact values.
5. Do not create a separate CSS dump unless the production implementation is available and needs auditing.

If a Paper node is component-level, such as the desktop top navigation in `OM-001-home`, link the exact node URL from the route-level capture and promote the reusable element directly into [Components](./03-components.md), then mirror its token and behavior implications through the shared docs.

## Recommended Page-Level File Shape

Use one Markdown file per major production screen or flow. Keep names route-oriented and stable:

- `home.md`
- `transaction-detail.md`
- `account-detail.md`
- `token-detail.md`
- `validator-detail.md`
- `search-results.md`
- `network-stats.md`

## Maintenance Rules

- If a production capture contradicts these docs, update the docs or mark the conflict.
- If a component appears in two or more screens, document it in `03-components.md`.
- If a layout appears in two or more screens, document it in `04-page-patterns.md`.
- Keep implementation notes concrete: token names, breakpoints, states, data constraints, and accessibility expectations.
