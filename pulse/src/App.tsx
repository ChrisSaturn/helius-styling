import { lazy, memo, Suspense, useCallback, useEffect, useMemo, useState, type ReactNode } from 'react';
import type { LucideIcon } from 'lucide-react';
import {
  Activity as ActivityIcon,
  BadgeDollarSign as BadgeDollarSignIcon,
  Bell as BellIcon,
  ChartColumn as ChartColumnIcon,
  Check as CheckIcon,
  CircleDollarSign as CircleDollarSignIcon,
  Clock3 as ClockIcon,
  Gauge as GaugeIcon,
  Gem as GemIcon,
  Globe2 as GlobeIcon,
  Hash as HashIcon,
  Info as InfoIcon,
  ListFilter as ListFilterIcon,
  Monitor as MonitorIcon,
  Search as SearchIcon,
  Settings as SettingsIcon,
  SlidersHorizontal as SlidersHorizontalIcon,
  Sparkles as SparklesIcon,
  Store as StoreIcon,
  Tag as TagIcon,
  UserRound as UserRoundIcon,
  WalletCards as WalletCardsIcon,
  X as XIcon,
  Zap as ZapIcon,
} from 'lucide-react';
import type {
  ChartSeriesPoint,
  EventStatus,
  NftListingEvent,
  NftSaleEvent,
  PortfolioActivity,
  PortfolioHolding,
  PortfolioProfile,
  PulseMetric,
} from './types';
import {
  MOCK_FEED_INTERVAL_MS,
  buildPulseMetrics,
  createInitialPulseFeed,
  createNextPulseFeed,
  marketplaceCollectionStats,
  marketplaceListingSeries,
  marketplaceMetrics,
  marketplaceStats,
  marketplaceVolumeSeries,
  portfolioActivity,
  portfolioHoldings,
  portfolioMetrics,
  portfolioProfile,
  timeWindows,
} from './pulseData';

const ACTIVE_TIME_WINDOW = '24H';
type ViewMode = 'pulse' | 'portfolio' | 'stats';
type MarketplaceStat = (typeof marketplaceStats)[number];
type MarketplaceCollectionStat = (typeof marketplaceCollectionStats)[number];
type ChartTone = 'volume' | 'listings';

const StatsRechartsBarChart = lazy(async () => {
  const module = await import('./StatsRechartsBarChart');

  return { default: module.StatsRechartsBarChart };
});

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

const PulseLogo = memo(function PulseLogo() {
  return (
    <svg
      className="brand-mark"
      aria-hidden="true"
      viewBox="0 0 1036.82 878.91"
      focusable="false"
    >
      <path
        fill="currentColor"
        d="M516.72,428.66l49.43-.62c11.57-.15,21.57-6.13,29.05-14.73,7.56-8.69,11.09-19.99,11.06-31.68l-.13-46.04c-.08-25.67,17.03-47.79,43.5-49.7l57.73-.9c20.3-1.77,36.98-16.12,44.62-34.91,9.31-22.91,6.78-49.69-6.45-70.51s-37.22-31.34-61.81-30.57c-47.44,1.48-78.03,40.61-76.03,86.6,1.17,26.95-17.7,50.9-45.31,52.2l-65.06.66c-25.5,1.45-46.4,18.37-56.89,41.18-6.48,14.09-8.48,29.34-7.47,44.86,1.88,29.04-19.51,51.68-48.63,51.75l-44.93.11c-25.04.06-46.38,20.29-46.61,45.39l-.55,61.95c-.21,23.09-19.64,42.45-42.7,43.65l-53.91.6c-26.5,1.6-48.1,22.04-48.28,48.68l-.37,55.07c-.16,23.52-19.15,43.1-43.06,44.17l-59.49.24c-23.06.09-44.25-18.25-44.3-41.76L0,624.68c-.05-23.27,19.34-42.16,42.59-43.68l62.8-.75c22.69-.27,41.09-19.52,41.32-42.13l.69-66.5c.24-23.36,19.92-41.53,43.05-42.77l53-.51c11.31-.11,21.78-4.03,30.03-11.8,8.89-8.38,15.15-20.32,15.18-32.89l.12-51.19c.06-24.14,18.08-44.97,42.91-46.48l60.7-.57c21.78-.2,40.02-20.58,40.27-42.83l.5-45.67c1.41-21.89,18.94-41.28,41.63-42.69,26.32-1.63,52.03-.39,78.58-.54,15.2-.08,28.25-5.43,37.95-17.42,4.71-5.83,7.84-12.61,11.19-19.6,10.3-21.5,30.79-35.82,54.88-35.99l27.05-.19c15.5-.11,28.41-7.17,38.92-18.01l42.78-44.12c11.73-12.1,34.57-24.98,44.41-14.47,3.74,4,4.48,9.1,2.58,14.44l-28.38,79.57c-4.31,12.08-2.31,25.4,6.83,34.67l75.88,76.95c11.91,12.08,17.34,29.49,17.57,45.91l.32,23.31c.12,8.86,3.42,18.53,9.99,25.11l124.84,124.88c9.15,9.15,16.67,19.77,16.65,33.42l-.13,88.01c-.04,27.65-24.86,46.12-51.2,44.93l-62.12-.53c-17.08-.15-31.64-12-38.69-27.1l-11.18-23.95c-8.69-15.29-23.57-26.56-41.25-28.58l-27.81-.52c-31.52-.59-47.77-21.18-54.08-50.79-4.92-23.09-22.14-40.9-45.92-40.8l-47.72.21c-28.42.12-49.1,23.61-49.1,51.66l-.02,226.8c0,14.95,9.09,27.3,25.14,27.68,23.23.55,44.22,18.01,45.27,42.58l.14,62.9c.06,24.15-20.52,44.13-44.71,44.16l-79.98.11c-27.38.04-47.35-23.93-46.45-52.35s-6.92-58.99-26.78-79.8c-11.6-12.15-26.62-20.93-43.87-20.88l-53.77.17c-27.55,1.49-49.9,24.17-50.18,51.48l-.62,58.76c-.25,24.14-21.4,42.67-45.32,42.62l-60.15-.12c-22.3-.04-42.33-18.79-42.29-41.28l.1-64.86c.03-22.37,19.83-41.56,42.29-42.61l68.05-.33c20.59-.1,37.88-14.89,37.91-36.24l.06-61.88c.03-25.87,16.79-48.35,43.62-50.32l57.48-.84c21.32-.31,38.53-19.58,38.72-40.82l.61-67.9c.21-23.29,20.28-42.75,43.87-43.05Z"
      />
    </svg>
  );
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

  const closeSettings = useCallback(() => {
    setIsSettingsOpen(false);
  }, []);

  const handleNavigate = useCallback((view: ViewMode) => {
    setActiveView(view);
    setIsSettingsOpen(false);
  }, []);

  const toggleSettings = useCallback(() => {
    setIsSettingsOpen((current) => !current);
  }, []);

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

  return (
    <div className="app">
      <TopNavigation
        activeView={activeView}
        isSettingsOpen={isSettingsOpen}
        onCloseSettings={closeSettings}
        onNavigate={handleNavigate}
        onToggleSettings={toggleSettings}
      />
      <main className="pulse-main">
        {activeView === 'portfolio' ? <PortfolioPage /> : activeView === 'stats' ? <StatsPage /> : <PulsePage />}
      </main>
    </div>
  );
}

const TopNavigation = memo(function TopNavigation({
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
        <PulseLogo />
        <span className="brand-word">Pulse</span>
      </button>
      <div className="global-search">
        <SearchIcon aria-hidden="true" />
        <label className="visually-hidden" htmlFor="pulse-search">
          Search OrbMarkets
        </label>
        <input id="pulse-search" type="search" placeholder="Search tokens, wallets, NFTs" />
        <button className="search-action" type="button" aria-label="Search options">
          <SlidersHorizontalIcon aria-hidden="true" />
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
          <UserRoundIcon aria-hidden="true" />
          <span>Me</span>
        </button>
        <button
          aria-current={activeView === 'stats' ? 'page' : undefined}
          className={`nav-link nav-button ${activeView === 'stats' ? 'is-active' : ''}`}
          type="button"
          onClick={() => onNavigate('stats')}
        >
          <ChartColumnIcon aria-hidden="true" />
          <span>Stats</span>
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
            <SettingsIcon aria-hidden="true" />
          </button>
          {isSettingsOpen ? <SettingsPopup onClose={onCloseSettings} /> : null}
        </div>
      </div>
    </nav>
  );
});

const SettingsPopup = memo(function SettingsPopup({ onClose }: { onClose: () => void }) {
  return (
    <aside className="settings-popup" id="settings-popup" role="dialog" aria-labelledby="settings-popup-title">
      <header className="settings-popup-header">
        <span className="settings-popup-title">
          <span className="settings-title-line">
            <SettingsIcon aria-hidden="true" />
            <strong id="settings-popup-title">Settings</strong>
          </span>
          <span>Placeholder</span>
        </span>
        <button className="settings-popup-close" type="button" aria-label="Close settings" onClick={onClose}>
          <XIcon aria-hidden="true" />
        </button>
      </header>
      <div className="settings-popup-body">
        <section className="settings-section" aria-labelledby="settings-display-title">
          <h2 id="settings-display-title">
            <MonitorIcon aria-hidden="true" />
            Display
          </h2>
          <div className="settings-row">
            <span className="settings-label">
              <SparklesIcon aria-hidden="true" />
              Theme
            </span>
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
            <span className="settings-label">
              <GaugeIcon aria-hidden="true" />
              Density
            </span>
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
          <h2 id="settings-market-title">
            <ChartColumnIcon aria-hidden="true" />
            Market
          </h2>
          <div className="settings-row">
            <span className="settings-label">
              <GlobeIcon aria-hidden="true" />
              Network
            </span>
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
            <span className="settings-label">
              <BellIcon aria-hidden="true" />
              Sales alerts
            </span>
            <label className="settings-toggle">
              <input aria-label="Sales alerts" type="checkbox" checked readOnly />
              <span className="settings-toggle-track" aria-hidden="true">
                <span>
                  <CheckIcon />
                </span>
              </span>
            </label>
          </div>
        </section>
      </div>
      <footer className="settings-popup-footer">
        <span>Prototype only</span>
        <button type="button" onClick={onClose}>
          <CheckIcon aria-hidden="true" />
          Done
        </button>
      </footer>
    </aside>
  );
});

function PulsePage() {
  const [feed, setFeed] = useState(createInitialPulseFeed);
  const metrics = useMemo(() => buildPulseMetrics(feed), [feed]);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setFeed(createNextPulseFeed);
    }, MOCK_FEED_INTERVAL_MS);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <>
      <PulseHeader updatedAt={feed.updatedAt} />
      <MetricStrip ariaLabel="Pulse metrics" metrics={metrics} updateSequence={feed.sequence} />
      <section className="monitor-grid" aria-label="NFT event monitor tables">
        <SalesTable sales={feed.sales} updateSequence={feed.sequence} />
        <ListingsTable listings={feed.listings} updateSequence={feed.sequence} />
      </section>
    </>
  );
}

function PulseHeader({ updatedAt }: { updatedAt: string }) {
  const updatedTime = utcTimeFormatter.format(new Date(updatedAt));

  return (
    <section className="pulse-header" aria-labelledby="pulse-title">
      <div className="title-stack">
        <div className="title-line">
          <span className="page-title-mark" aria-hidden="true">
            <ActivityIcon />
          </span>
          <h1 id="pulse-title">Pulse</h1>
          <span className="live-pill">
            <ZapIcon aria-hidden="true" />
            Mock live
          </span>
        </div>
        <span className="status-meta">Updated {updatedTime} UTC</span>
      </div>
      <TimeWindowControl ariaLabel="Time window" />
    </section>
  );
}

function PortfolioPage() {
  return (
    <>
      <section className="pulse-header" aria-labelledby="portfolio-title">
        <div className="title-stack">
          <div className="title-line">
            <span className="page-title-mark" aria-hidden="true">
              <WalletCardsIcon />
            </span>
            <h1 id="portfolio-title">Profile</h1>
            <span className="live-pill">
              <WalletCardsIcon aria-hidden="true" />
              Portfolio
            </span>
          </div>
          <span className="status-meta">Wallet 9pQe7...F1r</span>
        </div>
        <TimeWindowControl ariaLabel="Portfolio time window" />
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

function StatsPage() {
  return (
    <section className="stats-page" aria-label="NFT marketplace stats">
      <section className="pulse-header" aria-labelledby="stats-title">
        <div className="title-stack">
          <div className="title-line">
            <span className="page-title-mark" aria-hidden="true">
              <ChartColumnIcon />
            </span>
            <h1 id="stats-title">Stats</h1>
            <span className="live-pill">
              <StoreIcon aria-hidden="true" />
              NFT markets
            </span>
          </div>
          <span className="status-meta">Marketplace volume, depth, and routing across ME, Tensor, OKX, and more</span>
        </div>
        <TimeWindowControl ariaLabel="NFT marketplace stats time window" />
      </section>
      <MetricStrip ariaLabel="NFT marketplace stats metrics" metrics={marketplaceMetrics} />
      <section className="stats-split-grid" aria-label="NFT marketplace trend charts">
        <MarketplaceGraphPanel
          axisFormatter={(value) => integerFormatter.format(value)}
          chartLabel="24H SOL volume"
          metric={formatSol(sumSeriesValues(marketplaceVolumeSeries))}
          series={marketplaceVolumeSeries}
          sourceLabel="2H marketplace buckets"
          title="Marketplace volume"
          tone="volume"
          valueFormatter={formatSol}
        />
        <MarketplaceGraphPanel
          axisFormatter={(value) => integerFormatter.format(value)}
          chartLabel="Listings by floor band"
          metric={integerFormatter.format(sumSeriesValues(marketplaceListingSeries))}
          series={marketplaceListingSeries}
          sourceLabel="Floor-band depth"
          title="Listing depth"
          tone="listings"
          valueFormatter={(value) => `${integerFormatter.format(value)} listings`}
        />
      </section>
      <section className="stats-card-grid" aria-label="NFT marketplace visual summaries">
        <MarketplaceSharePanel stats={marketplaceStats} />
        <CollectionVolumePanel collections={marketplaceCollectionStats} />
        <FloorMomentumPanel stats={marketplaceStats} />
      </section>
      <section className="monitor-grid" aria-label="NFT marketplace stats tables">
        <MarketplaceStatsTable stats={marketplaceStats} />
        <MarketplaceCollectionsTable collections={marketplaceCollectionStats} />
      </section>
    </section>
  );
}

const TimeWindowControl = memo(function TimeWindowControl({ ariaLabel }: { ariaLabel: string }) {
  return (
    <div className="window-control" aria-label={ariaLabel}>
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
  );
});

function ProfileBand({ profile }: { profile: PortfolioProfile }) {
  return (
    <section className="profile-band" aria-label="Profile summary">
      <div className="profile-identity">
        <span className="profile-avatar" aria-hidden="true">
          <WalletCardsIcon />
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
            <span>
              <ProfileSignalIcon label={signal.label} status={signal.status} />
              {signal.label}
            </span>
            <strong>{signal.value}</strong>
          </span>
        ))}
      </div>
    </section>
  );
}

function MetricStrip({
  ariaLabel,
  metrics,
  updateSequence = 0,
}: {
  ariaLabel: string;
  metrics: PulseMetric[];
  updateSequence?: number;
}) {
  const isUpdating = updateSequence > 0;

  return (
    <section className="metric-strip" aria-label={ariaLabel}>
      {metrics.map((metric) => (
        <article
          className={`metric-cell ${isUpdating ? 'is-updating' : ''}`}
          key={`${metric.label}-${updateSequence}`}
        >
          <span className="metric-icon" aria-hidden="true">
            <MetricIcon label={metric.label} status={metric.status} />
          </span>
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

function MarketplaceStatsTable({ stats }: { stats: MarketplaceStat[] }) {
  return (
    <section className="table-panel" aria-labelledby="marketplace-overview-title">
      <TableHeader title="Marketplace overview" count={stats.length} countLabel="platforms" />
      <div className="table-scroll">
        <table>
          <colgroup>
            <col className="col-platform" />
            <col className="col-share" />
            <col className="col-price" />
            <col className="col-delta" />
            <col className="col-delta" />
            <col className="col-price" />
            <col className="col-delta" />
          </colgroup>
          <thead>
            <tr>
              <th scope="col">Platform</th>
              <th scope="col">Share</th>
              <th scope="col">Volume</th>
              <th scope="col">Sales</th>
              <th scope="col">Listings</th>
              <th scope="col">Avg sale</th>
              <th scope="col">Floor 24H</th>
            </tr>
          </thead>
          <tbody>
            {stats.map((stat) => (
              <MarketplaceStatsRow key={stat.id} stat={stat} />
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

function MarketplaceCollectionsTable({ collections }: { collections: MarketplaceCollectionStat[] }) {
  return (
    <section className="table-panel" aria-labelledby="collection-routing-title">
      <TableHeader title="Collection routing" count={collections.length} countLabel="collections" />
      <div className="table-scroll">
        <table>
          <colgroup>
            <col className="col-asset" />
            <col className="col-market" />
            <col className="col-price" />
            <col className="col-delta" />
            <col className="col-delta" />
            <col className="col-price" />
            <col className="col-delta" />
          </colgroup>
          <thead>
            <tr>
              <th scope="col">Collection</th>
              <th scope="col">Top market</th>
              <th scope="col">Floor</th>
              <th scope="col">Listings</th>
              <th scope="col">Sales</th>
              <th scope="col">Volume</th>
              <th scope="col">Spread</th>
            </tr>
          </thead>
          <tbody>
            {collections.map((collection) => (
              <MarketplaceCollectionRow collection={collection} key={collection.id} />
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

function MarketplaceSharePanel({ stats }: { stats: MarketplaceStat[] }) {
  const topMarketplace = getTopMarketplace(stats);

  return (
    <section className="stats-panel marketplace-visual-panel" aria-labelledby="marketplace-share-title">
      <StatsPanelHeader title="Platform share" />
      <h2 className="visually-hidden" id="marketplace-share-title">
        Platform share
      </h2>
      <div className="marketplace-leader-body">
        <strong>{formatPercent(topMarketplace.share)}</strong>
        <span>{topMarketplace.marketplace} leads visible marketplace share</span>
      </div>
    </section>
  );
}

function CollectionVolumePanel({ collections }: { collections: MarketplaceCollectionStat[] }) {
  const totalVolume = collections.reduce((sum, collection) => sum + collection.volumeSol, 0);

  return (
    <section className="stats-panel marketplace-visual-panel" aria-labelledby="collection-volume-title">
      <StatsPanelHeader title="Collection volume" />
      <h2 className="visually-hidden" id="collection-volume-title">
        Collection volume
      </h2>
      <div className="marketplace-visual-list">
        {collections.map((collection) => {
          const share = totalVolume > 0 ? (collection.volumeSol / totalVolume) * 100 : 0;

          return (
            <div className="marketplace-visual-row" key={collection.id}>
              <span>{collection.collection}</span>
              <strong>{formatSol(collection.volumeSol)}</strong>
              <i className="marketplace-share-bar" aria-hidden="true">
                <i style={{ width: `${share}%` }} />
              </i>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function FloorMomentumPanel({ stats }: { stats: MarketplaceStat[] }) {
  const maxMove = Math.max(...stats.map((stat) => Math.abs(stat.floorDelta)), 1);

  return (
    <section className="stats-panel marketplace-visual-panel" aria-labelledby="floor-momentum-title">
      <StatsPanelHeader title="Floor momentum" />
      <h2 className="visually-hidden" id="floor-momentum-title">
        Floor momentum
      </h2>
      <div className="floor-momentum-list">
        {stats.map((stat) => {
          const width = (Math.abs(stat.floorDelta) / maxMove) * 100;

          return (
            <div className={stat.floorDelta >= 0 ? 'floor-momentum-row positive' : 'floor-momentum-row negative'} key={stat.id}>
              <span>{stat.marketplace}</span>
              <strong>{formatDelta(stat.floorDelta)}</strong>
              <i className="floor-momentum-track" aria-hidden="true">
                <i style={{ width: `${width}%` }} />
              </i>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function StatsPanelHeader({
  action,
  metric,
  title,
}: {
  action?: ReactNode;
  metric?: string;
  title: string;
}) {
  return (
    <header className="stats-panel-header">
      <span className="stats-panel-title">
        {title}
        <InfoIcon aria-hidden="true" />
        {metric ? <strong>{metric}</strong> : null}
      </span>
      <span className="stats-panel-rule" aria-hidden="true">
        <span />
        <span />
        <span />
      </span>
      {action ? <span className="stats-panel-action">{action}</span> : null}
    </header>
  );
}

function MarketplaceGraphPanel({
  axisFormatter,
  chartLabel,
  metric,
  series,
  sourceLabel,
  title,
  tone,
  valueFormatter,
}: {
  axisFormatter: (value: number) => string;
  chartLabel: string;
  metric: string;
  series: ChartSeriesPoint[];
  sourceLabel: string;
  title: string;
  tone: ChartTone;
  valueFormatter: (value: number) => string;
}) {
  const peak = getPeakPoint(series);
  const bucketLabel = tone === 'volume' ? 'time bucket' : 'floor band';
  const summary = peak
    ? `${title} plots ${valueFormatter(sumSeriesValues(series))} across ${series.length} ${bucketLabel}s. The highest ${bucketLabel} is ${peak.label} at ${valueFormatter(peak.value)}.`
    : `${title} has no plotted marketplace data for the selected window.`;

  return (
    <section className="stats-panel chart-panel" aria-labelledby={`${tone}-chart-title`}>
      <StatsPanelHeader metric={metric} title={title} />
      <h2 className="visually-hidden" id={`${tone}-chart-title`}>
        {title}
      </h2>
      <div className="stats-chart-body">
        <span className="stats-chart-label">{chartLabel}</span>
        <Suspense
          fallback={
            <div className={`stats-recharts ${tone} is-loading`} role="status">
              <span className="visually-hidden">Loading {title} chart…</span>
            </div>
          }
        >
          <StatsRechartsBarChart
            axisFormatter={axisFormatter}
            chartId={`${tone}-chart`}
            label={`${title} over the selected NFT marketplace window`}
            points={series}
            summary={summary}
            tone={tone}
            valueFormatter={valueFormatter}
          />
        </Suspense>
      </div>
      <footer className="chart-footer">
        <span className="chart-legend">Last 24H</span>
        <span className="chart-legend">{sourceLabel}</span>
      </footer>
    </section>
  );
}

function SalesTable({ sales, updateSequence }: { sales: NftSaleEvent[]; updateSequence: number }) {
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
            {sales.map((sale, index) => (
              <SalesRow key={sale.id} isIncoming={updateSequence > 0 && index === 0} sale={sale} />
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

function ListingsTable({ listings, updateSequence }: { listings: NftListingEvent[]; updateSequence: number }) {
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
            {listings.map((listing, index) => (
              <ListingRow key={listing.id} isIncoming={updateSequence > 0 && index === 0} listing={listing} />
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

const SalesRow = memo(function SalesRow({
  isIncoming,
  sale,
}: {
  isIncoming: boolean;
  sale: NftSaleEvent;
}) {
  return (
    <tr className={isIncoming ? 'row-incoming' : undefined}>
      <td>
        <NftIdentity
          initials={sale.imagePlaceholder.initials}
          label={`${sale.itemName} in ${sale.collection}`}
          primary={sale.itemName}
          secondary={sale.collection}
        />
      </td>
      <td>
        <IconPill icon={StoreIcon} label={sale.marketplace} />
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

const ListingRow = memo(function ListingRow({
  isIncoming,
  listing,
}: {
  isIncoming: boolean;
  listing: NftListingEvent;
}) {
  return (
    <tr className={isIncoming ? 'row-incoming' : undefined}>
      <td>
        <NftIdentity
          initials={listing.imagePlaceholder.initials}
          label={`${listing.itemName} in ${listing.collection}`}
          primary={listing.itemName}
          secondary={listing.collection}
        />
      </td>
      <td>
        <IconPill icon={StoreIcon} label={listing.marketplace} />
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

const MarketplaceStatsRow = memo(function MarketplaceStatsRow({ stat }: { stat: MarketplaceStat }) {
  return (
    <tr>
      <td>
        <PlatformIdentity
          label={`${stat.marketplace} marketplace stats`}
          primary={stat.marketplace}
          secondary={stat.coverage}
          shortName={stat.shortName}
        />
      </td>
      <td>
        <span className="share-value">{formatPercent(stat.share)}</span>
      </td>
      <td>
        <NumericStack primary={formatSol(stat.volumeSol)} />
      </td>
      <td>{integerFormatter.format(stat.salesCount)}</td>
      <td>{integerFormatter.format(stat.listingCount)}</td>
      <td>
        <NumericStack primary={formatSol(stat.averageSaleSol)} />
      </td>
      <td>
        <span className={stat.floorDelta >= 0 ? 'delta-positive' : 'delta-negative'}>
          {formatDelta(stat.floorDelta)}
        </span>
      </td>
    </tr>
  );
});

const MarketplaceCollectionRow = memo(function MarketplaceCollectionRow({
  collection,
}: {
  collection: MarketplaceCollectionStat;
}) {
  return (
    <tr>
      <td>
        <NftIdentity
          initials={getInitials(collection.collection)}
          label={`${collection.collection} marketplace routing stats`}
          primary={collection.collection}
          secondary={`${integerFormatter.format(collection.listingCount)} active listings`}
        />
      </td>
      <td>
        <IconPill icon={StoreIcon} label={collection.topMarketplace} />
      </td>
      <td>
        <NumericStack primary={formatSol(collection.floorSol)} />
      </td>
      <td>{integerFormatter.format(collection.listingCount)}</td>
      <td>{integerFormatter.format(collection.salesCount)}</td>
      <td>
        <NumericStack primary={formatSol(collection.volumeSol)} />
      </td>
      <td>
        <span className={collection.spread >= 0 ? 'delta-positive' : 'delta-negative'}>
          {formatDelta(collection.spread)}
        </span>
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
        <IconPill icon={getActivityIcon(event.action)} label={event.action} />
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
        <IconPill icon={StoreIcon} label={event.marketplace} />
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
  const Icon = getTableIcon(title);

  return (
    <header className="table-title-row">
      <span className="table-heading">
        <Icon aria-hidden="true" />
        <h2 id={`${id}-title`}>{title}</h2>
      </span>
      <span className="table-count">
        <ListFilterIcon aria-hidden="true" />
        {count} {countLabel}
      </span>
    </header>
  );
}

function IconPill({ icon: Icon, label }: { icon: LucideIcon; label: string }) {
  return (
    <span className="market-tag">
      <Icon aria-hidden="true" />
      {label}
    </span>
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
        <a className="identity-link" href="#" aria-label={label}>
          <GemIcon aria-hidden="true" />
          <span>{primary}</span>
        </a>
        <span>{secondary}</span>
      </span>
    </div>
  );
}

function PlatformIdentity({
  label,
  primary,
  secondary,
  shortName,
}: {
  label: string;
  primary: string;
  secondary: string;
  shortName: string;
}) {
  return (
    <div className="platform-identity">
      <span className="platform-logo" aria-hidden="true">
        {shortName}
      </span>
      <span className="identity-copy">
        <a className="identity-link" href="#" aria-label={label}>
          <StoreIcon aria-hidden="true" />
          <span>{primary}</span>
        </a>
        <span>{secondary}</span>
      </span>
    </div>
  );
}

function AddressLink({ value, label }: { value: string; label: string }) {
  return (
    <a className="mono-link" href="#" aria-label={label} title={value}>
      <HashIcon aria-hidden="true" />
      <span>{truncateMiddle(value)}</span>
    </a>
  );
}

function EventTime({ value }: { value: string }) {
  const date = new Date(value);

  return (
    <time dateTime={value} title={value}>
      <ClockIcon aria-hidden="true" />
      <span>{utcTimeFormatter.format(date)}</span>
    </time>
  );
}

function MetricIcon({ label, status }: { label: string; status?: EventStatus }) {
  const Icon = getMetricIcon(label, status);
  return <Icon />;
}

function ProfileSignalIcon({ label, status }: { label: string; status?: EventStatus }) {
  const Icon = getProfileSignalIcon(label, status);
  return <Icon aria-hidden="true" />;
}

function getMetricIcon(label: string, status?: EventStatus): LucideIcon {
  if (status === 'live') {
    return ZapIcon;
  }

  if (label.includes('Floor') || label.includes('held')) {
    return GemIcon;
  }

  if (label.includes('Sales') || label.includes('Realized') || label.includes('value')) {
    return CircleDollarSignIcon;
  }

  if (label.includes('Listings') || label.includes('Listed')) {
    return TagIcon;
  }

  return ChartColumnIcon;
}

function getProfileSignalIcon(label: string, status?: EventStatus): LucideIcon {
  if (status === 'positive') {
    return CheckIcon;
  }

  if (status === 'live') {
    return ZapIcon;
  }

  if (label.includes('collection')) {
    return GemIcon;
  }

  return GaugeIcon;
}

function getTableIcon(title: string): LucideIcon {
  const normalized = title.toLowerCase();

  if (normalized.includes('marketplace') || normalized.includes('market')) {
    return StoreIcon;
  }

  if (normalized.includes('collection')) {
    return GemIcon;
  }

  if (normalized.includes('sales')) {
    return BadgeDollarSignIcon;
  }

  if (normalized.includes('listings')) {
    return TagIcon;
  }

  if (normalized.includes('holdings')) {
    return WalletCardsIcon;
  }

  if (normalized.includes('activity')) {
    return ActivityIcon;
  }

  return ChartColumnIcon;
}

function getActivityIcon(action: PortfolioActivity['action']): LucideIcon {
  if (action === 'Bought' || action === 'Sold') {
    return BadgeDollarSignIcon;
  }

  if (action === 'Listed') {
    return TagIcon;
  }

  return WalletCardsIcon;
}

function formatSol(value: number) {
  return `${solFormatter.format(value)} SOL`;
}

function formatDelta(value: number) {
  return `${value > 0 ? '+' : ''}${value.toFixed(1)}%`;
}

function formatPercent(value: number, fractionDigits = 1) {
  return `${value.toFixed(fractionDigits)}%`;
}

function getTopMarketplace(stats: MarketplaceStat[]) {
  return stats.reduce((current, stat) => (stat.share > current.share ? stat : current));
}

function sumSeriesValues(points: ChartSeriesPoint[]) {
  return points.reduce((total, point) => total + point.value, 0);
}

function getPeakPoint(points: ChartSeriesPoint[]) {
  if (points.length === 0) {
    return undefined;
  }

  return points.reduce((current, point) => (point.value > current.value ? point : current), points[0]);
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

export default App;
