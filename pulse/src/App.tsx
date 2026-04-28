import type { NftListingEvent, NftSaleEvent, PulseMetric } from './types';
import { latestListings, latestSales, pulseMetrics, timeWindows } from './pulseData';

const solFormatter = new Intl.NumberFormat('en-US', {
  maximumFractionDigits: 2,
});

const usdFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 0,
});

function App() {
  return (
    <div className="app">
      <TopNavigation />
      <main className="pulse-main">
        <PulseHeader />
        <MetricStrip metrics={pulseMetrics} />
        <section className="monitor-grid" aria-label="NFT event monitor tables">
          <SalesTable sales={latestSales} />
          <ListingsTable listings={latestListings} />
        </section>
      </main>
    </div>
  );
}

function TopNavigation() {
  return (
    <nav className="top-nav" aria-label="Orb navigation">
      <a className="brand-link" href="#" aria-label="Orb home">
        <span className="brand-mark" aria-hidden="true">
          <span />
        </span>
        <span className="brand-word">orb</span>
      </a>
      <div className="global-search">
        <SearchIcon />
        <label className="visually-hidden" htmlFor="pulse-search">
          Search OrbMarkets
        </label>
        <input id="pulse-search" type="search" placeholder="Search tokens, wallets, NFTs, collections" />
        <button className="search-action" type="button" aria-label="Search options">
          <CommandIcon />
        </button>
        <kbd>/</kbd>
      </div>
      <div className="nav-actions" aria-label="Global links">
        <a href="#" className="nav-link">
          Me
        </a>
        <button className="nav-link nav-button" type="button">
          Network
        </button>
        <button className="icon-button" type="button" aria-label="Settings">
          <SettingsIcon />
        </button>
      </div>
    </nav>
  );
}

function PulseHeader() {
  return (
    <section className="pulse-header" aria-labelledby="pulse-title">
      <div className="title-stack">
        <div className="status-row">
          <span className="live-pill">
            <span className="live-dot" aria-hidden="true" />
            Mock live
          </span>
          <span className="status-meta">Updated 04:59 UTC</span>
        </div>
        <h1 id="pulse-title">Pulse</h1>
      </div>
      <div className="window-control" aria-label="Time window">
        {timeWindows.map((window) => (
          <button key={window} className={window === '24H' ? 'is-active' : undefined} type="button">
            {window}
          </button>
        ))}
      </div>
    </section>
  );
}

function MetricStrip({ metrics }: { metrics: PulseMetric[] }) {
  return (
    <section className="metric-strip" aria-label="Pulse metrics">
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
              <tr key={sale.id}>
                <td>
                  <NftIdentity
                    collection={sale.collection}
                    itemName={sale.itemName}
                    imagePlaceholder={sale.imagePlaceholder}
                  />
                </td>
                <td>
                  <span className="market-tag">{sale.marketplace}</span>
                </td>
                <td className="numeric">
                  <strong>{formatSol(sale.priceSol)}</strong>
                  <span>{usdFormatter.format(sale.priceUsd)}</span>
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
              <tr key={listing.id}>
                <td>
                  <NftIdentity
                    collection={listing.collection}
                    itemName={listing.itemName}
                    imagePlaceholder={listing.imagePlaceholder}
                  />
                </td>
                <td>
                  <span className="market-tag">{listing.marketplace}</span>
                </td>
                <td className="numeric">
                  <strong>{formatSol(listing.listPriceSol)}</strong>
                  <span>{usdFormatter.format(listing.listPriceUsd)}</span>
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
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

function TableHeader({ title, count }: { title: string; count: number }) {
  const id = title.toLowerCase().replace(/\s+/g, '-');

  return (
    <header className="table-title-row">
      <h2 id={`${id}-title`}>{title}</h2>
      <span>{count} events</span>
    </header>
  );
}

function NftIdentity({
  collection,
  itemName,
  imagePlaceholder,
}: Pick<NftSaleEvent, 'collection' | 'itemName' | 'imagePlaceholder'>) {
  return (
    <div className="nft-identity">
      <span className={`nft-thumb tone-${imagePlaceholder.tone}`} aria-hidden="true">
        {imagePlaceholder.initials}
      </span>
      <span className="identity-copy">
        <a href="#" aria-label={`${itemName} in ${collection}`}>
          {itemName}
        </a>
        <span>{collection}</span>
      </span>
    </div>
  );
}

function AddressLink({ value, label }: { value: string; label: string }) {
  return (
    <a className="mono-link" href="#" aria-label={label}>
      {truncateMiddle(value)}
    </a>
  );
}

function EventTime({ value }: { value: string }) {
  const date = new Date(value);

  return (
    <time dateTime={value}>
      {date.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
        timeZone: 'UTC',
      })}
    </time>
  );
}

function formatSol(value: number) {
  return `${solFormatter.format(value)} SOL`;
}

function formatDelta(value: number) {
  return `${value > 0 ? '+' : ''}${value.toFixed(1)}%`;
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

export default App;
