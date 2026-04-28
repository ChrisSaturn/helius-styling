# OrbMarkets Design Documentation

This folder is the front-end design source of truth for OrbMarkets. It starts as a lean documentation scaffold and will be filled with production design evidence from Paper MCP captures.

## Documentation Chain

1. [Documentation System](./00-documentation-system.md) - how these docs are organized and maintained.
2. [Brand Foundation](./01-brand-foundation.md) - core identity, product posture, audience, and tone.
3. [Visual Language](./02-visual-language.md) - color, typography, spacing, density, surfaces, and iconography.
4. [Components](./03-components.md) - reusable UI patterns, states, and implementation expectations.
5. [Page Patterns](./04-page-patterns.md) - layout models for explorer, dashboard, table, detail, and search views.
6. [Interaction and Motion](./05-interaction-motion.md) - feedback, transitions, loading, empty, and error behavior.
7. [Front-End Implementation](./06-frontend-implementation.md) - practical handoff notes for engineering.
8. [Production Design Index](./production-design-index.md) - inventory of live designs reviewed from Paper MCP.
9. [Production Design Template](./production-design-template.md) - template for documenting each captured production screen.

## Current Status

- Baseline documentation structure is in place.
- Home market table production evidence is captured in [home.md](./home.md).
- Token detail production evidence is captured in [token-detail.md](./token-detail.md), with the user-supplied browser screenshot filling the chart content that Paper did not fetch.
- AI token analysis popup production evidence is captured in [ai-analysis-popup.md](./ai-analysis-popup.md).
- Desktop top navigation from Paper node `2-0` is promoted as a reusable component in [Components](./03-components.md).
- Shared visual, component, page pattern, interaction, and implementation docs now include styling guidance from `OM-001-home`, `OM-005-token-detail`, and `OM-009-ai-analysis-popup`.
- Each future Paper MCP design import should create or update one entry in `production-design-index.md`, then add a screen-specific Markdown file using `production-design-template.md`.
