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
10. [Pulse Prototype](./pulse.md) - intentional NFT monitor prototype guidance, not captured production evidence.

## Current Status

- Baseline documentation structure is in place.
- Home market table production evidence is captured in [home.md](./home.md).
- Token detail production evidence is captured in [token-detail.md](./token-detail.md), with the user-supplied browser screenshot filling the chart content that Paper did not fetch.
- AI token analysis popup production evidence is captured in [ai-analysis-popup.md](./ai-analysis-popup.md).
- Pulse NFT monitor, `Me` portfolio, and placeholder Settings popup prototype guidance is captured in [pulse.md](./pulse.md), intentionally marked as prototype-only rather than production evidence. Pulse now includes capped latest sales/listings placeholders, derived monitor metrics that refresh from local mock data every 4.5 seconds, and browser metadata wired to the `winniepoo-mert/favicon_io` favicon bundle through the Vite public asset path.
- Desktop top navigation from Paper node `2-0` is promoted as a reusable component in [Components](./03-components.md).
- Shared visual, component, page pattern, interaction, and implementation docs now include styling guidance from `OM-001-home`, `OM-005-token-detail`, `OM-009-ai-analysis-popup`, prototype-only monitor guidance from `OM-PROT-001-pulse`, prototype-only portfolio guidance from `OM-PROT-002-portfolio`, and prototype-only settings guidance from `OM-PROT-003-settings`, including the Pulse mock-feed boundary for future stream replacement.
- Current refinement: collection names and main clickables should use the White/primary text role; secondary selected states should use selected text fill/color before orange outlines; settings-style utility surfaces should stay shallow with one popup shell, direct rows, subtle dividers, and no nested row or segment containers.
- Each future Paper MCP design import should create or update one entry in `production-design-index.md`, then add a screen-specific Markdown file using `production-design-template.md`.
