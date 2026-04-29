# AI Analysis Popup Capture

## Metadata

- ID: `OM-009-ai-analysis-popup`
- Date captured: 2026-04-28
- Source URL: https://app.paper.design/file/01KQ91NY8A16SXDG8G6QEJVM78/1-0/1QP-0
- Paper MCP reference: file `Helius`, page `Page 1`, node `1QP-0`
- Screen or flow: AI token analysis tool popup
- Viewport: Component artboard, 380 px wide by 331 px high
- Auth state: Not confirmed
- Data state: Idle, before AI analysis has started
- Related docs: [Brand Foundation](./01-brand-foundation.md), [Visual Language](./02-visual-language.md), [Components](./03-components.md), [Page Patterns](./04-page-patterns.md), [Interaction and Motion](./05-interaction-motion.md), [Front-End Implementation](./06-frontend-implementation.md)

## Purpose

The popup introduces AI-generated token analysis without leaving the current token context. It gives the user one primary action to analyze the token and one secondary path to continue into the Lana assistant experience.

## First-Viewport Read

- Primary visual signal: compact black modal with a red outline and AI analysis icon.
- Main action: `Analyze`.
- Main data object: current token context, implied by the copy rather than shown as a visible token identity row.
- Secondary actions: close dialog and `Go deeper with Lana`.
- Navigation context: modal or popover context over a token detail or token action surface; parent screen is not captured.

## Layout

- Page shell: not captured; only the popup artboard is visible.
- Header: compact top bar with left AI icon and title, right close icon, and a thin divider.
- Main grid: vertically centered content stack with heading, explanatory copy, primary button, and secondary CTA.
- Sidebar or secondary rail: none.
- Table or list behavior: none.
- Responsive behavior: unresolved. Treat the 380 px width as the minimum compact desktop or mobile-dialog reference until the full overlay is captured.

## Visual Rules Observed

- Background: pure black modal fill.
- Surface: modal body and secondary CTA use black or near-black surfaces; the secondary CTA is separated by a subtle border and a darker icon tile.
- Border: outer modal uses a red accent stroke; header divider and secondary CTA border use low-contrast charcoal.
- Typography: title and content use IBM Plex Sans; the primary `Analyze` label appears in Geist Mono for a technical action tone.
- Iconography: red AI icon in the header, white AI icon inside the primary button, muted close icon, left arrow-stack mark, and a diagonal arrow for the secondary CTA.
- Corner treatment: correction from Orb direction - modal shell, inner CTA, icon tile, close button, and primary button should use 0 px square corners.
- Spacing: header is compact; body content is centered with generous vertical gaps between copy, primary action, and secondary CTA.
- Density: compact and focused. Do not add extra metadata, cards, or helper text inside this popup unless production confirms it.

## Components Observed

| Component | Variant | State | Notes |
| --- | --- | --- | --- |
| AI analysis popup | Compact modal | Idle | 380 x 331 px capture, red outline, black surface, centered action stack. |
| Modal header | Title with close action | Default | Left AI icon and title, right close icon, divider below. |
| Primary AI action button | Filled red | Default | `Analyze` label, white AI icon, mono label styling. |
| Assistant handoff CTA | Bordered secondary action | Default | `Go deeper with Lana`, left dark icon tile, right external or launch arrow. |
| Close button | Icon-only | Default | Muted gray X in the header. |

## Interaction Behavior

- Search: none.
- Filters: none.
- Sorting: none.
- Copy action: none.
- Links: `Go deeper with Lana` likely opens a deeper assistant flow or external route; exact target is unresolved.
- Loading: not captured. The `Analyze` action needs a loading and generated-result state before implementation is complete.
- Empty: not applicable.
- Error: not captured. AI service errors, unsupported token states, and rate-limit states remain unresolved.

## Front-End Notes

- Token changes: add modal accent border, modal divider, AI action fill, assistant CTA surface, and assistant icon tile tokens.
- Component changes: implement a reusable tool popup or modal shell, primary AI action button, assistant handoff CTA, and icon-only close action.
- Data constraints: body copy should remain two compact lines at this width; avoid injecting long token names into the centered copy unless the layout is revalidated.
- Accessibility considerations: use dialog semantics, focus trap, Escape-to-close behavior, labelled title, accessible close label, and button labels that include token context when available.
- Performance considerations: AI request states should not resize the popup. Reserve space for loading text or progress affordances before the result state is captured.

## Open Questions

- Confirm whether the popup appears as a centered modal, anchored popover, drawer, or inline tool panel in the live app.
- Confirm the generated-result state after `Analyze`.
- Confirm the loading, disabled, error, rate-limit, and unsupported-token states.
- Confirm whether `Lana` is the canonical assistant name and whether the secondary CTA opens an external page, in-app chat, or deeper analysis panel.
- Confirm keyboard and mobile behavior.

## Shared Docs Updated

- [Brand Foundation](./01-brand-foundation.md): AI copy tone and `Lana` naming question.
- [Visual Language](./02-visual-language.md): modal, AI action, assistant CTA, typography, spacing, and icon tokens.
- [Components](./03-components.md): AI popup, primary AI action, assistant handoff CTA, and close button guidance.
- [Page Patterns](./04-page-patterns.md): tool popup pattern.
- [Interaction and Motion](./05-interaction-motion.md): AI request and modal behavior questions.
- [Front-End Implementation](./06-frontend-implementation.md): component contract and accessibility requirements.
