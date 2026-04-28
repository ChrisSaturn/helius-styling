# Page Patterns

This page defines reusable layout models for OrbMarkets. Add patterns here only after they are observed or intentionally chosen for implementation.

## Candidate Page Types

| Page Type | Purpose | Expected Front-End Concerns | Status |
| --- | --- | --- | --- |
| Home or search landing | Entry point for network lookup and market scanning | Search dominance, category tabs, dense market table, responsive first viewport | Observed in `OM-001-home` |
| Search results | Resolve query into entities | Result grouping, ranking, empty states, ambiguous queries | Pending capture |
| Transaction detail | Inspect one transaction | Signature display, account changes, instruction hierarchy, logs | Pending capture |
| Account detail | Inspect wallet or program account | Ownership, balances, tokens, activity tables | Pending capture |
| Token detail | Inspect token metadata and activity | Supply, holders, markets, transfers | Pending capture |
| Program detail | Inspect program activity | Program authority, interactions, transaction tables | Pending capture |
| Validator detail | Inspect validator health | Stake, performance, identity, epoch stats | Pending capture |
| Network stats | Inspect chain-level activity | Time-series metrics, dense stat groups, refresh cadence | Pending capture |

## Layout Documentation Checklist

For each page pattern, capture:

- Route or URL shape.
- Primary user intent.
- Information hierarchy.
- Header and navigation behavior.
- Main content grid.
- Table behavior.
- Responsive behavior.
- Loading and empty states.
- Error handling.
- Cross-links to related pages.

## Home Market Table Pattern

Observed in `OM-001-home`.

- Route or URL shape: home route not confirmed from Paper; document as the product home market table until live routing is captured.
- Primary user intent: search for tokens and scan ranked market activity.
- Information hierarchy: header search first, category tabs second, table metrics third, row action last.
- Header and navigation behavior: desktop uses the reusable top navigation component from Paper node `2-0`: `orb` lockup, dominant global search, utility affordance, `Me`, `Network`, and settings.
- Main content grid: single dense table, no cards or side rails.
- Table behavior: category tabs and time-window control filter the data; metric headers expose sorting affordances.
- Responsive behavior: unresolved; desktop should keep fixed columns and stable row heights.
- Loading and empty states: unresolved.
- Error handling: unresolved.
- Cross-links to related pages: token rows likely link to token detail; exact click targets pending live validation.

## Global Navigation Pattern

Observed in `OM-001-home`, Paper node `2-0`.

- Use the desktop top navigation as shared product chrome for primary OrbMarkets views.
- Keep search as the dominant navigation affordance. Route links and global utilities support search rather than competing with it.
- Preserve a black app background with a charcoal search rail, compact text links, and square utility controls.
- Do not introduce sidebars, marketing headers, oversized cards, or decorative backgrounds around the nav on explorer pages.
- Treat mobile, tablet, open-menu, active-route, and authenticated states as unresolved until captured.
