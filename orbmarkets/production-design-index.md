# Production Design Index

This index tracks live OrbMarkets designs reviewed through Paper MCP.

## Capture Log

| ID | Date | Source | Screen or Flow | Status | Notes |
| --- | --- | --- | --- | --- | --- |
| OM-000 | 2026-04-28 | Documentation scaffold | Baseline docs | Created | Production evidence pending. |
| OM-001-home | 2026-04-28 | [Paper capture](https://app.paper.design/file/01KQ91NY8A16SXDG8G6QEJVM78/1-0/2I1-0), [nav node](https://app.paper.design/file/01KQ91NY8A16SXDG8G6QEJVM78/1-0/2-0), [token row node](https://app.paper.design/file/01KQ91NY8A16SXDG8G6QEJVM78/1-0/4X-0) | Home, Trending market table, desktop top navigation, token row | Captured | See [home.md](./home.md). Paper nodes `2I1-0`, `16-0`, `2-0`, and `4X-0`; desktop top navigation and token market row promoted to [Components](./03-components.md). |
| OM-005-token-detail | 2026-04-28 | [Paper capture](https://app.paper.design/file/01KQ91NY8A16SXDG8G6QEJVM78/1-0/1AG-0), [market item row](https://app.paper.design/file/01KQ91NY8A16SXDG8G6QEJVM78/1-0/1HQ-0), user-supplied browser screenshot | Token detail, Wrapped SOL open token view, market item row | Captured with chart caveat | See [token-detail.md](./token-detail.md). Paper node `1AG-0` captured the shell, metrics, tabs, and markets table; node `1HQ-0` confirms the market item row; the screenshot supplies the missing chart series, axes, grid, and `24H` state. |
| OM-008-network-stats | 2026-04-28 | [Paper capture](https://app.paper.design/file/01KQ91NY8A16SXDG8G6QEJVM78/1-0/1ZQ-0), [TPS detail](https://app.paper.design/file/01KQ91NY8A16SXDG8G6QEJVM78/1-0/3RV-0), [summary distribution](https://app.paper.design/file/01KQ91NY8A16SXDG8G6QEJVM78/1-0/3Y3-0) | Network stats, recent blocks, validator distribution, active validators, epoch status | Captured | See [network-stats.md](./network-stats.md). Paper node `1ZQ-0`; child nodes `1ZT-0`, `24E-0`, `2G3-0`, and `1ZR-0`; detail nodes `3RV-0` and `3Y3-0` refine panel sizing, text scale, positioning, and continuous band distribution; chart series are not visible in Paper and need browser verification when wired. |
| OM-009-ai-analysis-popup | 2026-04-28 | [Paper capture](https://app.paper.design/file/01KQ91NY8A16SXDG8G6QEJVM78/1-0/1QP-0) | AI token analysis tool popup | Captured | See [ai-analysis-popup.md](./ai-analysis-popup.md). Paper node `1QP-0`; AI tool popup, primary AI action, and assistant handoff CTA promoted to [Components](./03-components.md). |
| OM-PROT-001-pulse | 2026-04-28 | Local prototype `/pulse`; no Paper capture | Pulse NFT sales and listings monitor | Prototype, not production evidence | See [pulse.md](./pulse.md). Intentional Vite prototype using Orb style tokens, placeholder NFT event types, derived mock KPIs, capped latest sales/listings tables, incoming-data animations, and a 4.5 second mock-feed refresh for future Helius/WebSocket or webhook integration. Current notes now include sizing, color, highlight, Vercel React best-practice guidance, and the local implementation alignment pass. |
| OM-PROT-002-portfolio | 2026-04-28 | Local prototype `/pulse`, `Me` navigation state; no Paper capture | Me profile, portfolio holdings, and activity | Prototype, not production evidence | See [pulse.md](./pulse.md). Local `Me` view using the shared Orb shell, profile summary band, portfolio KPI strip, dense holdings table, and recent activity table with placeholder wallet data until auth, route formats, and wallet integrations are confirmed. |
| OM-PROT-003-settings | 2026-04-28 | Local prototype `/pulse`, settings icon state; no Paper capture | Placeholder Settings popup | Prototype, not production evidence | See [pulse.md](./pulse.md). Local settings utility popup using the shared Orb shell, compact labelled dialog, flat grouped rows, selected text-fill treatment for secondary choices, Escape-to-close behavior, and shallow popup surface rules until real preference persistence is confirmed. |
| OM-PROT-004-stats | 2026-04-28 | Local prototype `/pulse`, `Stats` navigation state, visually aligned to `OM-008-network-stats` detail nodes `3RV-0` and `3Y3-0` | Local NFT marketplace stats implementation | Prototype implementation alignment | See [pulse.md](./pulse.md). Local `Stats` is now NFT-only: tokenized Recharts marketplace volume/depth bar charts, platform share, collection volume, floor momentum, marketplace overview, and collection routing. It borrows the captured continuous chart-band and summary-band panel style without rendering chain-health data. |
| OM-PROT-005-private-payments-api | 2026-04-28 | [solana.new](https://www.solana.new/) layout reference, user-supplied Private Payments API copy, Paper artboard node `3JV-0`, nav source node `3OA-0`, install command source node `3R7-0`, local Vite implementation `../eclipse (private-payments)` | Private Payments API landing page | Prototype implementation alignment | See [private-payments-api.md](./private-payments-api.md). Paper artboard `3JV-0` now uses a Helius-styled install terminal replacing the prior `API CAPABILITY` hero block; the local Vite site implements the current header and hero, including command copy feedback; lower landing sections are deferred because they are no longer present in the current Paper tree. |

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

Prototype entries use the `OM-PROT-*` prefix and must clearly state that they are implementation guidance, not captured production evidence.
