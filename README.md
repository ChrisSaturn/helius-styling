# helius-styling

Production design styleguides for Helius-adjacent Solana interfaces.

## Styleguide Samples

### 01. Orb Markets

Source: https://orbmarkets.io/

Orb is a full-featured Solana block explorer. It is built by Helius and gives real-time access to transactions, accounts, tokens, programs, validators, and network statistics on Solana.

#### Product Read

- Category: Solana block explorer and market intelligence surface.
- Primary user task: move quickly between wallet, network, token, and market views without losing context.
- Interface posture: dense, operational, data-first.
- Content model: navigation, category filters, ranked tables, time-window controls, balances, token metrics, and network stats.

#### Design Principles

- Prioritize scan speed over decoration.
- Keep the first screen functional, not promotional.
- Use compact controls for repeated filters such as `1H`, `24H`, `7D`, and `30D`.
- Treat tables as the main surface: stable columns, predictable alignment, and clear numeric hierarchy.
- Make wallet, network, and market context persistent enough that users always know what scope they are inspecting.
- Use restrained branding. The product should feel trustworthy, technical, and fast.

#### Layout Notes

- Use a dark application shell for long-session inspection work.
- Reserve the top area for identity, wallet/network context, and primary navigation.
- Put category filters close to the table or chart they control.
- Keep ranked rows vertically consistent so price, change, market cap, volume, and action columns are easy to compare.
- Avoid marketing-card layouts; this is an explorer workspace, so density and alignment matter more than spacious storytelling.

#### Component Patterns

- App header with logo, wallet identity, copy/edit affordances, and network selector.
- Segmented category navigation: `Watchlist`, `Trending`, `Majors`, `DeFi`, `Stocks`, `Commodities`, `Cults`.
- Time-range segmented control: `1H`, `24H`, `7D`, `30D`.
- Ranked market table with fixed numeric lanes.
- Balance summary panels for SOL and token balances.
- Inline actions for buying, copying, editing, or opening detail views.

#### Visual Direction

- Mood: terminal-grade market desk.
- Palette: black or near-black surfaces, high-contrast white text, muted gray secondary labels, one focused red/orange accent for active or risk-state emphasis, and small neutral icon fills.
- Typography: compact sans for product labels and tables, with a monospace option for wallet addresses, hashes, amounts, and technical identifiers.
- Motion: minimal. Use interaction feedback for hover, selection, loading, and live-data changes rather than decorative animation.

#### Production Checklist

- Text and numbers must remain readable in dense table rows.
- All repeated row controls need fixed-width lanes.
- Wallet addresses and transaction hashes should truncate predictably with copy access.
- Live data refreshes should not shift table column widths.
- Empty, loading, and error states must preserve the same layout structure as populated states.
