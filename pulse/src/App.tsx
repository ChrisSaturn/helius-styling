import { memo, useEffect, useState } from 'react';
import type {
  NftListingEvent,
  NftSaleEvent,
  PortfolioActivity,
  PortfolioHolding,
  PortfolioProfile,
  PulseMetric,
} from './types';
import {
  latestListings,
  latestSales,
  portfolioActivity,
  portfolioHoldings,
  portfolioMetrics,
  portfolioProfile,
  pulseMetrics,
  timeWindows,
} from './pulseData';

const ACTIVE_TIME_WINDOW = '24H';
type ViewMode = 'pulse' | 'portfolio';

const solFormatter = new Intl.NumberFormat('en-US', {
  maximumFractionDigits: 2,
});

const integerFormatter = new Intl.NumberFormat('en-US', {
  maximumFractionDigits: 0,
});

const usdFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 0,
});

const utcTimeFormatter = new Intl.DateTimeFormat('en-US', {
  hour: '2-digit',
  minute: '2-digit',
  hour12: false,
  timeZone: 'UTC',
});

function App() {
  const [activeView, setActiveView] = useState<ViewMode>('pulse');
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  useEffect(() => {
    if (!isSettingsOpen) {
      return;
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setIsSettingsOpen(false);
      }
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isSettingsOpen]);

  function handleNavigate(view: ViewMode) {
    setActiveView(view);
    setIsSettingsOpen(false);
  }

  return (
    <div className="app">
      <TopNavigation
        activeView={activeView}
        isSettingsOpen={isSettingsOpen}
        onCloseSettings={() => setIsSettingsOpen(false)}
        onNavigate={handleNavigate}
        onToggleSettings={() => setIsSettingsOpen((current) => !current)}
      />
      <main className="pulse-main">
        {activeView === 'portfolio' ? <PortfolioPage /> : <PulsePage />}
      </main>
    </div>
  );
}

function TopNavigation({
  activeView,
  isSettingsOpen,
  onCloseSettings,
  onNavigate,
  onToggleSettings,
}: {
  activeView: ViewMode;
  isSettingsOpen: boolean;
  onCloseSettings: () => void;
  onNavigate: (view: ViewMode) => void;
  onToggleSettings: () => void;
}) {
  return (
    <nav className="top-nav" aria-label="Orb navigation">
      <button
        className="brand-link brand-button"
        type="button"
        aria-label="Pulse home"
        onClick={() => onNavigate('pulse')}
      >
        <span className="brand-mark" aria-hidden="true">
          <span />
        </span>
        <span className="brand-word">orb</span>
      </button>
      <div className="global-search">
        <SearchIcon />
        <label className="visually-hidden" htmlFor="pulse-search">
          Search OrbMarkets
        </label>
        <input id="pulse-search" type="search" placeholder="Search tokens, wallets, NFTs" />
        <button className="search-action" type="button" aria-label="Search options">
          <CommandIcon />
        </button>
        <kbd>/</kbd>
      </div>
      <div className="nav-actions" aria-label="Global links">
        <button
          aria-current={activeView === 'portfolio' ? 'page' : undefined}
          className={`nav-link nav-button ${activeView === 'portfolio' ? 'is-active' : ''}`}
          type="button"
          onClick={() => onNavigate('portfolio')}
        >
          Me
        </button>
        <button className="nav-link nav-button" type="button">
          Network
        </button>
        <div className="settings-control">
          <button
            aria-controls="settings-popup"
            aria-expanded={isSettingsOpen}
            aria-haspopup="dialog"
            aria-label="Settings"
            className={`icon-button ${isSettingsOpen ? 'is-active' : ''}`}
            type="button"
            onClick={onToggleSettings}
          >
            <SettingsIcon />
          </button>
          {isSettingsOpen ? <SettingsPopup onClose={onCloseSettings} /> : null}
        </div>
      </div>
    </nav>
  );
}

function SettingsPopup({ onClose }: { onClose: () => void }) {
  return (
    <aside className="settings-popup" id="settings-popup" role="dialog" aria-labelledby="settings-popup-title">
      <header className="settings-popup-header">
        <span className="settings-popup-title">
          <strong id="settings-popup-title">Settings</strong>
          <span>Placeholder</span>
        </span>
        <button className="settings-popup-close" type="button" aria-label="Close settings" onClick={onClose}>
          <CloseIcon />
        </button>
      </header>
      <div className="settings-popup-body">
        <section className="settings-section" aria-labelledby="settings-display-title">
          <h2 id="settings-display-title">Display</h2>
          <div className="settings-row">
            <span className="settings-label">Theme</span>
            <div className="settings-segmented" aria-label="Theme">
              <button aria-pressed="true" type="button">
                Dark
              </button>
              <button aria-pressed="false" type="button">
                System
              </button>
            </div>
          </div>
          <div className="settings-row">
            <span className="settings-label">Density</span>
            <div className="settings-segmented" aria-label="Density">
              <button aria-pressed="true" type="button">
                Compact
              </button>
              <button aria-pressed="false" type="button">
                Relaxed
              </button>
            </div>
          </div>
        </section>
        <section className="settings-section" aria-labelledby="settings-market-title">
          <h2 id="settings-market-title">Market</h2>
          <div className="settings-row">
            <span className="settings-label">Network</span>
            <div className="settings-segmented" aria-label="Network">
              <button aria-pressed="true" type="button">
                Mainnet
              </button>
              <button aria-pressed="false" type="button">
                Devnet
              </button>
            </div>
          </div>
          <div className="settings-row">
            <span className="settings-label">Sales alerts</span>
            <label className="settings-toggle">
              <input aria-label="Sales alerts" type="checkbox" checked readOnly />
              <span className="settings-toggle-track" aria-hidden="true">
                <span />
              </span>
            </label>
          </div>
        </section>
      </div>
      <footer className="settings-popup-footer">
        <span>Prototype only</span>
        <button type="button" onClick={onClose}>
          Done
        </button>
      </footer>
    </aside>
  );
}

function PulsePage() {
  return (
    <>
      <PulseHeader />
      <MetricStrip ariaLabel="Pulse metrics" metrics={pulseMetrics} />
      <section className="monitor-grid" aria-label="NFT event monitor tables">
        <SalesTable sales={latestSales} />
        <ListingsTable listings={latestListings} />
      </section>
    </>
  );
}

function PulseHeader() {
  return (
    <section className="pulse-header" aria-labelledby="pulse-title">
      <div className="title-stack">
        <div className="title-line">
          <h1 id="pulse-title">Pulse</h1>
          <span className="live-pill">
            <span className="live-dot" aria-hidden="true" />
            Mock live
          </span>
        </div>
        <span className="status-meta">Updated 04:59 UTC</span>
      </div>
      <div className="window-control" aria-label="Time window">
        {timeWindows.map((window) => (
          <button
            key={window}
            aria-pressed={window === ACTIVE_TIME_WINDOW}
            className={window === ACTIVE_TIME_WINDOW ? 'is-active' : undefined}
            type="button"
          >
            {window}
          </button>
        ))}
      </div>
    </section>
  );
}

function PortfolioPage() {
  return (
    <>
      <section className="pulse-header" aria-labelledby="portfolio-title">
        <div className="title-stack">
          <div className="title-line">
            <h1 id="portfolio-title">Profile</h1>
            <span className="live-pill">Portfolio</span>
          </div>
          <span className="status-meta">Wallet 9pQe7...F1r</span>
        </div>
        <div className="window-control" aria-label="Portfolio time window">
          {timeWindows.map((window) => (
            <button
              key={window}
              aria-pressed={window === ACTIVE_TIME_WINDOW}
              className={window === ACTIVE_TIME_WINDOW ? 'is-active' : undefined}
              type="button"
            >
              {window}
            </button>
          ))}
        </div>
      </section>
      <ProfileBand profile={portfolioProfile} />
      <MetricStrip ariaLabel="Portfolio metrics" metrics={portfolioMetrics} />
      <section className="monitor-grid" aria-label="Portfolio tables">
        <PortfolioHoldingsTable holdings={portfolioHoldings} />
        <PortfolioActivityTable activity={portfolioActivity} />
      </section>
    </>
  );
}

function ProfileBand({ profile }: { profile: PortfolioProfile }) {
  return (
    <section className="profile-band" aria-label="Profile summary">
      <div className="profile-identity">
        <span className="profile-avatar" aria-hidden="true">
          {getInitials(profile.wallet)}
        </span>
        <span className="profile-copy">
          <span>{profile.network}</span>
          <strong>{profile.displayName}</strong>
          <span className="profile-wallet">{truncateMiddle(profile.wallet)}</span>
        </span>
      </div>
      <div className="profile-signals" aria-label={profile.headline}>
        {profile.signals.map((signal) => (
          <span className={`profile-signal ${signal.status ?? ''}`} key={signal.label}>
            <span>{signal.label}</span>
            <strong>{signal.value}</strong>
          </span>
        ))}
      </div>
    </section>
  );
}

function MetricStrip({ ariaLabel, metrics }: { ariaLabel: string; metrics: PulseMetric[] }) {
  return (
    <section className="metric-strip" aria-label={ariaLabel}>
      {metrics.map((metric) => (
        <article className="metric-cell" key={metric.label}>
          <span className="metric-label">{metric.label}</span>
          <strong>{metric.value}</strong>
          {metric.delta ? <span className={`metric-delta ${metric.status ?? 'neutral'}`}>{metric.delta}</span> : null}
        </article>
      ))}
    </section>
  );
}

function PortfolioHoldingsTable({ holdings }: { holdings: PortfolioHolding[] }) {
  return (
    <section className="table-panel" aria-labelledby="portfolio-holdings-title">
      <TableHeader title="Portfolio holdings" count={holdings.length} countLabel="collections" />
      <div className="table-scroll">
        <table>
          <colgroup>
            <col className="col-asset" />
            <col className="col-delta" />
            <col className="col-price" />
            <col className="col-price" />
            <col className="col-delta" />
            <col className="col-delta" />
          </colgroup>
          <thead>
            <tr>
              <th scope="col">Collection</th>
              <th scope="col">Items</th>
              <th scope="col">Floor</th>
              <th scope="col">Value</th>
              <th scope="col">Listed</th>
              <th scope="col">24H</th>
            </tr>
          </thead>
          <tbody>
            {holdings.map((holding) => (
              <PortfolioHoldingRow holding={holding} key={holding.id} />
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

function PortfolioActivityTable({ activity }: { activity: PortfolioActivity[] }) {
  return (
    <section className="table-panel" aria-labelledby="portfolio-activity-title">
      <TableHeader title="Portfolio activity" count={activity.length} countLabel="actions" />
      <div className="table-scroll">
        <table>
          <colgroup>
            <col className="col-market" />
            <col className="col-asset" />
            <col className="col-market" />
            <col className="col-price" />
            <col className="col-id" />
            <col className="col-time" />
          </colgroup>
          <thead>
            <tr>
              <th scope="col">Action</th>
              <th scope="col">NFT</th>
              <th scope="col">Market</th>
              <th scope="col">Value</th>
              <th scope="col">Signature</th>
              <th scope="col">Time</th>
            </tr>
          </thead>
          <tbody>
            {activity.map((event) => (
              <PortfolioActivityRow event={event} key={event.id} />
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

function SalesTable({ sales }: { sales: NftSaleEvent[] }) {
  return (
    <section className="table-panel" aria-labelledby="latest-sales-title">
      <TableHeader title="Latest sales" count={sales.length} />
      <div className="table-scroll">
        <table>
          <colgroup>
            <col className="col-asset" />
            <col className="col-market" />
            <col className="col-price" />
            <col className="col-address" />
            <col className="col-address" />
            <col className="col-id" />
            <col className="col-time" />
          </colgroup>
          <thead>
            <tr>
              <th scope="col">NFT</th>
              <th scope="col">Market</th>
              <th scope="col">Price</th>
              <th scope="col">Buyer</th>
              <th scope="col">Seller</th>
              <th scope="col">Signature</th>
              <th scope="col">Time</th>
            </tr>
          </thead>
          <tbody>
            {sales.map((sale) => (
              <SalesRow key={sale.id} sale={sale} />
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

function ListingsTable({ listings }: { listings: NftListingEvent[] }) {
  return (
    <section className="table-panel" aria-labelledby="latest-listings-title">
      <TableHeader title="Latest listings" count={listings.length} />
      <div className="table-scroll">
        <table>
          <colgroup>
            <col className="col-asset" />
            <col className="col-market" />
            <col className="col-price" />
            <col className="col-delta" />
            <col className="col-address" />
            <col className="col-id" />
            <col className="col-time" />
          </colgroup>
          <thead>
            <tr>
              <th scope="col">NFT</th>
              <th scope="col">Market</th>
              <th scope="col">List price</th>
              <th scope="col">Floor</th>
              <th scope="col">Seller</th>
              <th scope="col">Listing ID</th>
              <th scope="col">Time</th>
            </tr>
          </thead>
          <tbody>
            {listings.map((listing) => (
              <ListingRow key={listing.id} listing={listing} />
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

const SalesRow = memo(function SalesRow({ sale }: { sale: NftSaleEvent }) {
  return (
    <tr>
      <td>
        <NftIdentity
          initials={sale.imagePlaceholder.initials}
          label={`${sale.itemName} in ${sale.collection}`}
          primary={sale.itemName}
          secondary={sale.collection}
        />
      </td>
      <td>
        <span className="market-tag">{sale.marketplace}</span>
      </td>
      <td>
        <NumericStack primary={formatSol(sale.priceSol)} secondary={usdFormatter.format(sale.priceUsd)} />
      </td>
      <td>
        <AddressLink value={sale.buyer} label={`Buyer ${sale.buyer}`} />
      </td>
      <td>
        <AddressLink value={sale.seller} label={`Seller ${sale.seller}`} />
      </td>
      <td>
        <AddressLink value={sale.signature} label={`Sale signature ${sale.signature}`} />
      </td>
      <td>
        <EventTime value={sale.timestamp} />
      </td>
    </tr>
  );
});

const ListingRow = memo(function ListingRow({ listing }: { listing: NftListingEvent }) {
  return (
    <tr>
      <td>
        <NftIdentity
          initials={listing.imagePlaceholder.initials}
          label={`${listing.itemName} in ${listing.collection}`}
          primary={listing.itemName}
          secondary={listing.collection}
        />
      </td>
      <td>
        <span className="market-tag">{listing.marketplace}</span>
      </td>
      <td>
        <NumericStack primary={formatSol(listing.listPriceSol)} secondary={usdFormatter.format(listing.listPriceUsd)} />
      </td>
      <td>
        <span className={listing.floorDelta >= 0 ? 'delta-positive' : 'delta-negative'}>
          {formatDelta(listing.floorDelta)}
        </span>
      </td>
      <td>
        <AddressLink value={listing.seller} label={`Listing seller ${listing.seller}`} />
      </td>
      <td>
        <AddressLink value={listing.listingId} label={`Listing ${listing.listingId}`} />
      </td>
      <td>
        <EventTime value={listing.timestamp} />
      </td>
    </tr>
  );
});

const PortfolioHoldingRow = memo(function PortfolioHoldingRow({ holding }: { holding: PortfolioHolding }) {
  return (
    <tr>
      <td>
        <NftIdentity
          initials={getInitials(holding.collection)}
          label={`${holding.collection} portfolio holding`}
          primary={holding.collection}
          secondary={`${integerFormatter.format(holding.itemCount)} items`}
        />
      </td>
      <td>{integerFormatter.format(holding.itemCount)}</td>
      <td>
        <NumericStack primary={formatSol(holding.floorSol)} />
      </td>
      <td>
        <NumericStack primary={formatSol(holding.valueSol)} />
      </td>
      <td>{integerFormatter.format(holding.listedCount)}</td>
      <td>
        <span className={holding.change24h >= 0 ? 'delta-positive' : 'delta-negative'}>
          {formatDelta(holding.change24h)}
        </span>
      </td>
    </tr>
  );
});

const PortfolioActivityRow = memo(function PortfolioActivityRow({ event }: { event: PortfolioActivity }) {
  return (
    <tr>
      <td>
        <span className="market-tag">{event.action}</span>
      </td>
      <td>
        <NftIdentity
          initials={getInitials(event.collection)}
          label={`${event.itemName} in ${event.collection}`}
          primary={event.itemName}
          secondary={event.collection}
        />
      </td>
      <td>
        <span className="market-tag">{event.marketplace}</span>
      </td>
      <td>
        <NumericStack primary={formatSol(event.valueSol)} />
      </td>
      <td>
        <AddressLink value={event.signature} label={`Portfolio activity signature ${event.signature}`} />
      </td>
      <td>
        <EventTime value={event.timestamp} />
      </td>
    </tr>
  );
});

function NumericStack({ primary, secondary }: { primary: string; secondary?: string }) {
  return (
    <span className="numeric-stack">
      <strong>{primary}</strong>
      {secondary ? <span>{secondary}</span> : null}
    </span>
  );
}

function TableHeader({ title, count, countLabel = 'events' }: { title: string; count: number; countLabel?: string }) {
  const id = title.toLowerCase().replace(/\s+/g, '-');

  return (
    <header className="table-title-row">
      <h2 id={`${id}-title`}>{title}</h2>
      <span>
        {count} {countLabel}
      </span>
    </header>
  );
}

function NftIdentity({
  initials,
  label,
  primary,
  secondary,
}: {
  initials: string;
  label: string;
  primary: string;
  secondary: string;
}) {
  return (
    <div className="nft-identity">
      <span className="nft-thumb" aria-hidden="true">
        {initials}
      </span>
      <span className="identity-copy">
        <a href="#" aria-label={label}>
          {primary}
        </a>
        <span>{secondary}</span>
      </span>
    </div>
  );
}

function AddressLink({ value, label }: { value: string; label: string }) {
  return (
    <a className="mono-link" href="#" aria-label={label} title={value}>
      {truncateMiddle(value)}
    </a>
  );
}

function EventTime({ value }: { value: string }) {
  const date = new Date(value);

  return (
    <time dateTime={value} title={value}>
      {utcTimeFormatter.format(date)}
    </time>
  );
}

function formatSol(value: number) {
  return `${solFormatter.format(value)} SOL`;
}

function formatDelta(value: number) {
  return `${value > 0 ? '+' : ''}${value.toFixed(1)}%`;
}

function getInitials(value: string) {
  return value
    .split(/\s+/)
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();
}

function truncateMiddle(value: string) {
  if (value.length <= 13) {
    return value;
  }

  return `${value.slice(0, 5)}...${value.slice(-4)}`;
}

function SearchIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" focusable="false">
      <path d="m20 20-4.7-4.7m2-5.1a7.1 7.1 0 1 1-14.2 0 7.1 7.1 0 0 1 14.2 0Z" />
    </svg>
  );
}

function CommandIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" focusable="false">
      <path d="M9 6H6.5a2.5 2.5 0 0 0 0 5H9V6Zm0 7H6.5a2.5 2.5 0 0 0 0 5H9v-5Zm6-7h2.5a2.5 2.5 0 0 1 0 5H15V6Zm0 7h2.5a2.5 2.5 0 0 1 0 5H15v-5ZM9 11h6v2H9v-2Z" />
    </svg>
  );
}

function SettingsIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" focusable="false">
      <path d="M12 8.2a3.8 3.8 0 1 0 0 7.6 3.8 3.8 0 0 0 0-7.6Z" />
      <path d="M19 12a7 7 0 0 0-.1-1.1l2-1.5-2-3.4-2.4 1a8.4 8.4 0 0 0-1.9-1.1L14.3 3h-4.6l-.3 2.9A8.4 8.4 0 0 0 7.5 7L5.1 6l-2 3.4 2 1.5A7 7 0 0 0 5 12c0 .4 0 .8.1 1.1l-2 1.5 2 3.4 2.4-1a8.4 8.4 0 0 0 1.9 1.1l.3 2.9h4.6l.3-2.9a8.4 8.4 0 0 0 1.9-1.1l2.4 1 2-3.4-2-1.5c.1-.3.1-.7.1-1.1Z" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" focusable="false">
      <path d="M18 6 6 18M6 6l12 12" />
    </svg>
  );
}

export default App;
