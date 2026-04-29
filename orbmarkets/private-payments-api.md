# Private Payments API Prototype

## Metadata

- ID: `OM-PROT-005-private-payments-api`
- Date created: 2026-04-28
- Source URL: [solana.new](https://www.solana.new/)
- Product source: user-supplied Private Payments API copy; previous scaffold referenced [Helius for Agents docs](https://www.helius.dev/docs/agents), [Helius MCP docs](https://www.helius.dev/docs/agents/mcp), and [Helius agents landing page](https://www.helius.dev/agents)
- Paper MCP reference: Paper file `Helius`, page `Page 1`, artboard node `3JV-0`, artboard name `OM-PROT-005 Private Payments API`, nav source node `3OA-0`, install command source node `3R7-0`, replacement hero install node `4BN-0`
- Local implementation: `../eclipse (private-payments)` Vite React site, created 2026-04-28
- Screen or flow: Private Payments API landing page prototype
- Viewport: Desktop, 1512 x 2483
- Auth state: Public landing page, unauthenticated
- Data state: Static product copy and setup commands
- Related docs: [Visual Language](./02-visual-language.md), [Components](./03-components.md), [Page Patterns](./04-page-patterns.md), [Front-End Implementation](./06-frontend-implementation.md)

## Purpose

Create a clean, Solana.new-inspired landing page for a Private Payments API while retaining the existing Orb-style black canvas, compact surfaces, red-orange accent, IBM Plex Sans, Geist Mono, and dense developer-product posture.

This is prototype guidance, not production evidence.

## Local Vite Implementation

- Implementation path: `../eclipse (private-payments)`.
- Stack: Vite 8, React 19, TypeScript 6, `lucide-react`.
- Scope: implements the current Paper `3JV-0` artboard exactly as a two-part page: Helius nav clone plus hero/install command. The large blank black lower canvas is preserved as empty page space because the current Paper tree only contains `Desktop Header - Helius Nav 3OA` and `Hero`.
- Behavior added in code: the hero install command has a real copy button with copied-state feedback and accessible labelling.
- Verification: `npm install` completed with zero vulnerabilities after updating to current package ranges; `npm run build` completed successfully; Vite dev server ran locally at `http://127.0.0.1:5179/`.

## First-Viewport Read

- Primary visual signal: current Paper hero headline is `Become invisible`, centered on a black app canvas above the Private Payments API value prop.
- Main action: Helius-styled install terminal replaces the prior `API CAPABILITY` hero block.
- Main data object: unsigned SPL token transaction construction for deposits, transfers, withdrawals, swaps, and mint initialization.
- Secondary actions: compact MCP, CLI, SDK, TypeScript SDK, Rust SDK, LaserStream, and Webhooks chips sit under the install command.
- Navigation context: centered Helius navigation cloned from Paper node `3OA-0`, including logo, product/solution/resource links, Docs, and Sign In.

## Layout

- Page shell: one 1512 px desktop artboard with a 72 px top header and full-width stacked sections.
- Header: cloned from Paper nav node `3OA-0` inside a full-width wrapper.
- Hero: centered headline, user-supplied value prop, install command terminal sourced from Paper node `3R7-0`, and compact tool strip.
- Capability grid: not present in the current `3JV-0` Paper tree; defer until the lower landing content is redrawn.
- Workflow section: not present in the current `3JV-0` Paper tree; defer until the lower landing content is redrawn.
- Footer: not present in the current `3JV-0` Paper tree; defer until the lower landing content is redrawn.
- Responsive behavior: local implementation collapses navigation and stacks command metadata on smaller screens. A production mobile variant still needs Paper validation.

## Visual Rules Chosen

- Background: `#000000` full-page shell.
- Surfaces: `#050505` and `#0b0b0b` shallow panels; no decorative gradients or nested card stacks.
- Border: `#1c1c1c` subtle dividers; `#ef553f` only for primary command and selected/high-signal states.
- Typography: IBM Plex Sans for UI copy; Geist Mono for commands, chips, terminal content, and step indices.
- Iconography: ASCII/mono marks for prototype-only product glyphs; use real icons or approved logos in implementation.
- Corner treatment: 0 px square corners for command blocks, capability tiles, chips, terminal shells, workflow tabs, and CTA controls.
- Spacing: 1480 px shared rail with 18 px desktop page gutter.
- Density: sparse landing-page first viewport with black lower canvas reserved for future sections.

## Components Introduced

| Component | Variant | State | Notes |
| --- | --- | --- | --- |
| Developer landing header | Helius nav clone | Static | Uses Paper nav source node `3OA-0`, centered inside the page header. |
| Hero install terminal | Solana.new install command | Default | Terminal-style command shell sourced from Paper node `3R7-0`, adapted to Helius/Orb black surfaces, Geist Mono, square corners, and red-orange copy action. |
| Developer tool chip | Compact mono chip | Static | MCP, CLI, SDK, TypeScript SDK, Rust SDK, LaserStream, and Webhooks labels under the install command. |
| Developer capability tile | Future lower section | Not present | Defer until Paper includes lower landing content. |
| Developer workflow terminal | Future lower section | Not present | Defer until Paper includes lower landing content. |
| Developer workflow rail | Future lower section | Not present | Defer until Paper includes lower landing content. |
| Developer final CTA | Future lower section | Not present | Defer until Paper includes lower landing content. |

## Content Source Notes

- `solana.new` informed the layout sequence: concise hero, install command, tool/client strip, idea/tool grid, workflow tabs, terminal-style section, and final CTA.
- Helius docs informed factual content: MCP as the recommended path for AI agents, 60+ MCP tools, CLI `--json` automation, TypeScript and Rust SDKs, webhooks, LaserStream, programmatic signup, and plugin/MCP installation paths.
- The hero copy now uses the user-supplied line verbatim: "The Private Payments API builds unsigned SPL token transactions for deposits, transfers, withdrawals, swaps, and mint initialization across Solana."
- The prior hero `API CAPABILITY` block was replaced with the user-supplied install command pattern from Paper node `3R7-0`. The current canvas command remains `curl -fsSL https://www.solana.new/setup.sh | bash` until a canonical Private Payments setup path is confirmed. The page header uses the Helius nav cloned from node `3OA-0`.
- The local Vite implementation deliberately does not recreate prior lower scaffold sections because the current Paper artboard no longer includes them.

## Interaction Behavior

- Search: header search rail is static in Paper; implementation should render a real command/search input if used.
- Copy action: command blocks should expose real copy buttons with accessible labels and copied/error feedback.
- Tabs: `Connect`, `Build`, and `Ship` are static in Paper; implementation should use semantic tabs or segmented buttons if interactive.
- Links: docs, MCP, SDK, and client labels need route targets before implementation.
- Loading: no loading state designed.
- Empty: no empty state needed for static landing content.
- Error: copy/install failures should use inline feedback inside the command surface.

## Front-End Notes

- Token changes: no new core tokens required; reuse current app background, control surface, border, text, accent, and mono/sans tokens.
- Component changes: current local code adds a landing nav, hero label/copy block, install terminal, tool chips, and copy command feedback. Capability tiles, terminal preview, and workflow rail remain future work because they are absent from the current Paper tree.
- Data constraints: commands must truncate without resizing command blocks; long tool/client names must wrap within chip rows or collapse into overflow.
- Accessibility considerations: command copy buttons need accessible names; terminal samples should not be the only source of setup instructions; tabs need semantic active state if interactive.
- Performance considerations: no heavy visual assets required for the prototype; if logos are added, import them as static assets and keep them sized to stable chip/tile dimensions.

## Open Questions

- Should this live as a Helius marketing page, an OrbMarkets product education page, or a docs-adjacent route?
- Should the primary install command continue to point at `solana.new`, or should it become a Private Payments API setup command once the canonical path exists?
- Should Helius brand colors override the Orb red-orange accent on public Helius pages?
- What is the canonical route: `/private-payments`, `/payments-api`, or docs content only?
- What mobile sequence should be used if lower capability sections are added?
