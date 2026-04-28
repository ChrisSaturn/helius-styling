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

