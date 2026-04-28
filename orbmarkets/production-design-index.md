# Production Design Index

This index tracks live OrbMarkets designs reviewed through Paper MCP.

## Capture Log

| ID | Date | Source | Screen or Flow | Status | Notes |
| --- | --- | --- | --- | --- | --- |
| OM-000 | 2026-04-28 | Documentation scaffold | Baseline docs | Created | Production evidence pending. |
| OM-001-home | 2026-04-28 | [Paper capture](https://app.paper.design/file/01KQ91NY8A16SXDG8G6QEJVM78/1-0/2I1-0), [nav node](https://app.paper.design/file/01KQ91NY8A16SXDG8G6QEJVM78/1-0/2-0), [token row node](https://app.paper.design/file/01KQ91NY8A16SXDG8G6QEJVM78/1-0/4X-0) | Home, Trending market table, desktop top navigation, token row | Captured | See [home.md](./home.md). Paper nodes `2I1-0`, `16-0`, `2-0`, and `4X-0`; desktop top navigation and token market row promoted to [Components](./03-components.md). |
| OM-005-token-detail | 2026-04-28 | [Paper capture](https://app.paper.design/file/01KQ91NY8A16SXDG8G6QEJVM78/1-0/1AG-0), [market item row](https://app.paper.design/file/01KQ91NY8A16SXDG8G6QEJVM78/1-0/1HQ-0), user-supplied browser screenshot | Token detail, Wrapped SOL open token view, market item row | Captured with chart caveat | See [token-detail.md](./token-detail.md). Paper node `1AG-0` captured the shell, metrics, tabs, and markets table; node `1HQ-0` confirms the market item row; the screenshot supplies the missing chart series, axes, grid, and `24H` state. |
| OM-009-ai-analysis-popup | 2026-04-28 | [Paper capture](https://app.paper.design/file/01KQ91NY8A16SXDG8G6QEJVM78/1-0/1QP-0) | AI token analysis tool popup | Captured | See [ai-analysis-popup.md](./ai-analysis-popup.md). Paper node `1QP-0`; AI tool popup, primary AI action, and assistant handoff CTA promoted to [Components](./03-components.md). |

## Naming Convention

Use stable IDs for future captures:

- `OM-001-home`
- `OM-002-search-results`
- `OM-003-transaction-detail`
- `OM-004-account-detail`
- `OM-005-token-detail`
- `OM-006-program-detail`
- `OM-007-validator-detail`
- `OM-008-network-stats`
- `OM-009-ai-analysis-popup`

Each capture should link to a dedicated Markdown file created from [Production Design Template](./production-design-template.md).
