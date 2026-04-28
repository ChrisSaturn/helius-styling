# Page Patterns

This page defines reusable layout models for OrbMarkets. Add patterns here only after they are observed or intentionally chosen for implementation.

## Candidate Page Types

| Page Type | Purpose | Expected Front-End Concerns | Status |
| --- | --- | --- | --- |
| Home or search landing | Entry point for network lookup | Search dominance, recent activity, responsive first viewport | Pending capture |
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

