import type {
  NftListingEvent,
  NftSaleEvent,
  PortfolioActivity,
  PortfolioHolding,
  PortfolioProfile,
  PulseFeedSnapshot,
  PulseMetric,
} from './types';

export const timeWindows = ['5m', '1H', '24H', '7D'] as const;

export const portfolioProfile: PortfolioProfile = {
  displayName: 'Collector profile',
  wallet: '9pQe7U9h4AjC7rtR6F1r',
  headline: 'NFT exposure, listings, and wallet activity',
  network: 'Mock wallet on Solana',
  signals: [
    {
      label: 'Top collection',
      value: 'Mad Lads',
    },
    {
      label: 'Momentum',
      value: '+5.8% 24H',
      status: 'positive',
    },
    {
      label: 'Visibility',
      value: 'Tracked',
      status: 'live',
    },
  ],
};

export const portfolioMetrics: PulseMetric[] = [
  {
    label: 'Portfolio value',
    value: '184.72 SOL',
    delta: '+5.8% 24H',
    status: 'positive',
  },
  {
    label: 'NFTs held',
    value: '42',
    delta: '9 collections',
    status: 'neutral',
  },
  {
    label: 'Listed',
    value: '7',
    delta: '16.7% of bag',
    status: 'live',
  },
  {
    label: 'Realized 24H',
    value: '12.4 SOL',
    delta: '+2 sales',
    status: 'positive',
  },
];

export const portfolioHoldings: PortfolioHolding[] = [
  {
    id: 'holding-01',
    collection: 'Mad Lads',
    itemCount: 3,
    floorSol: 54.2,
    valueSol: 162.6,
    listedCount: 1,
    change24h: 3.4,
  },
  {
    id: 'holding-02',
    collection: 'Famous Fox Federation',
    itemCount: 4,
    floorSol: 8.75,
    valueSol: 35,
    listedCount: 0,
    change24h: 1.6,
  },
  {
    id: 'holding-03',
    collection: 'Claynosaurz',
    itemCount: 2,
    floorSol: 22.95,
    valueSol: 45.9,
    listedCount: 1,
    change24h: -2.4,
  },
  {
    id: 'holding-04',
    collection: 'Solana Monkey Business',
    itemCount: 1,
    floorSol: 31.4,
    valueSol: 31.4,
    listedCount: 0,
    change24h: 5.7,
  },
  {
    id: 'holding-05',
    collection: 'Tensorian Shards',
    itemCount: 6,
    floorSol: 3.62,
    valueSol: 21.72,
    listedCount: 2,
    change24h: -0.8,
  },
];

export const portfolioActivity: PortfolioActivity[] = [
  {
    id: 'portfolio-activity-01',
    action: 'Bought',
    itemName: 'Mad Lad #7421',
    collection: 'Mad Lads',
    marketplace: 'Tensor',
    valueSol: 54.2,
    signature: '4jQWr3ZaPortfolioPlaceholder1n7aQm',
    timestamp: '2026-04-28T04:58:00Z',
  },
  {
    id: 'portfolio-activity-02',
    action: 'Listed',
    itemName: 'Claynosaurz #812',
    collection: 'Claynosaurz',
    marketplace: 'Magic Eden',
    valueSol: 21.8,
    signature: '5kRt9PulsePortfolioListing2mVq4',
    timestamp: '2026-04-28T04:50:00Z',
  },
  {
    id: 'portfolio-activity-03',
    action: 'Sold',
    itemName: 'Fox #1846',
    collection: 'Famous Fox Federation',
    marketplace: 'Tensor',
    valueSol: 8.75,
    signature: '2qXc9PortfolioSalePlaceholder3Av7kP',
    timestamp: '2026-04-28T04:36:00Z',
  },
  {
    id: 'portfolio-activity-04',
    action: 'Received',
    itemName: 'Shard #0288',
    collection: 'Tensorian Shards',
    marketplace: 'Wallet',
    valueSol: 3.62,
    signature: '9pLsPortfolioTransferPlaceholder4Vn2',
    timestamp: '2026-04-28T04:18:00Z',
  },
];

export const latestSales: NftSaleEvent[] = [
  {
    id: 'sale-01',
    collection: 'Mad Lads',
    itemName: 'Mad Lad #7421',
    imagePlaceholder: { initials: 'ML', tone: 'ember' },
    marketplace: 'Tensor',
    priceSol: 54.2,
    priceUsd: 8346,
    buyer: '9pQe7U9h4AjC7rtR6F1r',
    seller: 'Fo3mK2aN9xvVh14tUQe8',
    signature: '4jQWr3ZaPulseSalePlaceholder1n7aQm',
    timestamp: '2026-04-28T04:58:00Z',
  },
  {
    id: 'sale-02',
    collection: 'Famous Fox Federation',
    itemName: 'Fox #1846',
    imagePlaceholder: { initials: 'FF', tone: 'teal' },
    marketplace: 'Magic Eden',
    priceSol: 8.75,
    priceUsd: 1347,
    buyer: 'D8m3rK4uVkLx5jN2cRs9',
    seller: '2Lq8AvhR9nQyZ1uP7xJ3',
    signature: '2qXc9HzPulseSalePlaceholder2Av7kP',
    timestamp: '2026-04-28T04:54:00Z',
  },
  {
    id: 'sale-03',
    collection: 'Claynosaurz',
    itemName: 'Claynosaurz #390',
    imagePlaceholder: { initials: 'CZ', tone: 'amber' },
    marketplace: 'Tensor',
    priceSol: 22.95,
    priceUsd: 3534,
    buyer: 'Gd4v9LkQpT1c8Ryu6Mn2',
    seller: '7BkR5Frp1eYoN3s9Hq8v',
    signature: '3pN9sCwPulseSalePlaceholder3fQk4U',
    timestamp: '2026-04-28T04:49:00Z',
  },
  {
    id: 'sale-04',
    collection: 'Solana Monkey Business',
    itemName: 'SMB #2117',
    imagePlaceholder: { initials: 'SM', tone: 'violet' },
    marketplace: 'Exchange.Art',
    priceSol: 31.4,
    priceUsd: 4836,
    buyer: '6BkyX8vWmN1qpA9eTr7c',
    seller: 'Ho1z8nVzR4sUmLk6Qa2d',
    signature: '5rVmKp4PulseSalePlaceholder4xZq6c',
    timestamp: '2026-04-28T04:43:00Z',
  },
  {
    id: 'sale-05',
    collection: 'Tensorian Shards',
    itemName: 'Shard #0288',
    imagePlaceholder: { initials: 'TS', tone: 'steel' },
    marketplace: 'Tensor',
    priceSol: 3.62,
    priceUsd: 557,
    buyer: 'Ah7nPc4sTbR9xV2wKq5m',
    seller: '3VTn2kxLp8sRyF4mEc9u',
    signature: 'n76QkLwPulseSalePlaceholder5vYm2R',
    timestamp: '2026-04-28T04:38:00Z',
  },
];

export const latestListings: NftListingEvent[] = [
  {
    id: 'listing-01',
    collection: 'Mad Lads',
    itemName: 'Mad Lad #1930',
    imagePlaceholder: { initials: 'ML', tone: 'rose' },
    marketplace: 'Tensor',
    listPriceSol: 55,
    listPriceUsd: 8469,
    floorDelta: 1.8,
    seller: 'E9vy2GwrP6tmKq1nZc4s',
    listingId: 'tensor-ml-1930-placeholder',
    timestamp: '2026-04-28T04:59:00Z',
  },
  {
    id: 'listing-02',
    collection: 'Claynosaurz',
    itemName: 'Claynosaurz #812',
    imagePlaceholder: { initials: 'CZ', tone: 'amber' },
    marketplace: 'Magic Eden',
    listPriceSol: 21.8,
    listPriceUsd: 3357,
    floorDelta: -2.4,
    seller: '4UjK8rVw3LsP9amQx2Te',
    listingId: 'me-cz-812-placeholder',
    timestamp: '2026-04-28T04:57:00Z',
  },
  {
    id: 'listing-03',
    collection: 'Famous Fox Federation',
    itemName: 'Fox #7712',
    imagePlaceholder: { initials: 'FF', tone: 'teal' },
    marketplace: 'Tensor',
    listPriceSol: 9.12,
    listPriceUsd: 1404,
    floorDelta: 4.2,
    seller: '7GkRt2VpQx8Nw3YhLs5m',
    listingId: 'tensor-ff-7712-placeholder',
    timestamp: '2026-04-28T04:52:00Z',
  },
  {
    id: 'listing-04',
    collection: 'y00ts',
    itemName: 'y00t #6049',
    imagePlaceholder: { initials: 'Y0', tone: 'steel' },
    marketplace: 'Magic Eden',
    listPriceSol: 5.48,
    listPriceUsd: 844,
    floorDelta: 0.6,
    seller: 'CJ2rW6xHp4qM9cUv8Le1',
    listingId: 'me-y00t-6049-placeholder',
    timestamp: '2026-04-28T04:47:00Z',
  },
  {
    id: 'listing-05',
    collection: 'Solana Monkey Business',
    itemName: 'SMB #944',
    imagePlaceholder: { initials: 'SM', tone: 'violet' },
    marketplace: 'Tensor',
    listPriceSol: 33.2,
    listPriceUsd: 5113,
    floorDelta: 5.7,
    seller: 'Bv6mN3xLq9PcTe1Wr4Kh',
    listingId: 'tensor-smb-944-placeholder',
    timestamp: '2026-04-28T04:41:00Z',
  },
];

export const MOCK_FEED_INTERVAL_MS = 4500;

const MAX_VISIBLE_MOCK_EVENTS = 5;
const BASE_ACTIVE_LISTING_COUNT = 1248;
const MOCK_SOL_USD_RATE = 154;

const metricSolFormatter = new Intl.NumberFormat('en-US', {
  maximumFractionDigits: 2,
});

const metricIntegerFormatter = new Intl.NumberFormat('en-US', {
  maximumFractionDigits: 0,
});

type MockCollection = {
  collection: string;
  itemPrefix: string;
  slug: string;
  initials: string;
  tone: NftSaleEvent['imagePlaceholder']['tone'];
  baseFloorSol: number;
  itemBase: number;
};

const mockCollections: MockCollection[] = [
  {
    collection: 'Mad Lads',
    itemPrefix: 'Mad Lad',
    slug: 'ml',
    initials: 'ML',
    tone: 'ember',
    baseFloorSol: 54.2,
    itemBase: 1200,
  },
  {
    collection: 'Famous Fox Federation',
    itemPrefix: 'Fox',
    slug: 'ff',
    initials: 'FF',
    tone: 'teal',
    baseFloorSol: 8.75,
    itemBase: 1800,
  },
  {
    collection: 'Claynosaurz',
    itemPrefix: 'Claynosaurz',
    slug: 'cz',
    initials: 'CZ',
    tone: 'amber',
    baseFloorSol: 22.95,
    itemBase: 300,
  },
  {
    collection: 'Solana Monkey Business',
    itemPrefix: 'SMB',
    slug: 'smb',
    initials: 'SM',
    tone: 'violet',
    baseFloorSol: 31.4,
    itemBase: 900,
  },
  {
    collection: 'Tensorian Shards',
    itemPrefix: 'Shard',
    slug: 'ts',
    initials: 'TS',
    tone: 'steel',
    baseFloorSol: 3.62,
    itemBase: 80,
  },
  {
    collection: 'y00ts',
    itemPrefix: 'y00t',
    slug: 'y00t',
    initials: 'Y0',
    tone: 'rose',
    baseFloorSol: 5.48,
    itemBase: 6000,
  },
];

const mockMarketplaces = ['Tensor', 'Magic Eden', 'Exchange.Art'] as const;

const mockWallets = [
  '9pQe7U9h4AjC7rtR6F1r',
  'Fo3mK2aN9xvVh14tUQe8',
  'D8m3rK4uVkLx5jN2cRs9',
  '2Lq8AvhR9nQyZ1uP7xJ3',
  'Gd4v9LkQpT1c8Ryu6Mn2',
  '7BkR5Frp1eYoN3s9Hq8v',
  '6BkyX8vWmN1qpA9eTr7c',
  'Ho1z8nVzR4sUmLk6Qa2d',
] as const;

const mockSignatureSeeds = ['4jQWr3Za', '2qXc9Hz', '3pN9sCw', '5rVmKp4', 'n76QkLw', '8mQp2Xa'] as const;

export function createInitialPulseFeed(): PulseFeedSnapshot {
  return {
    sales: latestSales,
    listings: latestListings,
    updatedAt: latestListings[0]?.timestamp ?? latestSales[0]?.timestamp ?? new Date().toISOString(),
    sequence: 0,
  };
}

export function createNextPulseFeed(current: PulseFeedSnapshot): PulseFeedSnapshot {
  const sequence = current.sequence + 1;
  const timestamp = new Date().toISOString();

  return {
    sales: [createMockSaleEvent(sequence, timestamp), ...current.sales].slice(0, MAX_VISIBLE_MOCK_EVENTS),
    listings: [createMockListingEvent(sequence, timestamp), ...current.listings].slice(0, MAX_VISIBLE_MOCK_EVENTS),
    updatedAt: timestamp,
    sequence,
  };
}

export function buildPulseMetrics(feed: PulseFeedSnapshot): PulseMetric[] {
  const latestSale = feed.sales[0];
  const latestListing = feed.listings[0];
  const saleVolumeSol = feed.sales.reduce((total, sale) => total + sale.priceSol, 0);
  const listingFloors = feed.listings.map((listing) => listing.listPriceSol / (1 + listing.floorDelta / 100));
  const floorSol = listingFloors.length > 0 ? Math.min(...listingFloors) : 0;
  const activeListingCount = BASE_ACTIVE_LISTING_COUNT + ((feed.sequence * 7) % 43) - Math.round(latestListing?.floorDelta ?? 0);
  const activeCollectionCount = new Set([
    ...feed.sales.map((sale) => sale.collection),
    ...feed.listings.map((listing) => listing.collection),
  ]).size;
  const floorDelta = latestListing?.floorDelta ?? 0;
  const latestSaleDelta = getLatestSaleDelta(feed.sales);

  return [
    {
      label: 'Floor',
      value: `${metricSolFormatter.format(floorSol)} SOL`,
      delta: `${formatMetricDelta(floorDelta)} latest listing`,
      status: getDeltaStatus(floorDelta),
    },
    {
      label: 'Sales volume',
      value: `${metricSolFormatter.format(saleVolumeSol)} SOL`,
      delta: latestSale ? `${formatMetricDelta(latestSaleDelta)} latest sale` : 'mock feed',
      status: 'live',
    },
    {
      label: 'Listings',
      value: metricIntegerFormatter.format(activeListingCount),
      delta: `${feed.listings.length} latest rows`,
      status: getDeltaStatus(floorDelta),
    },
    {
      label: 'Active collections',
      value: metricIntegerFormatter.format(activeCollectionCount),
      delta: 'visible mock feed',
      status: 'neutral',
    },
  ];
}

export const pulseMetrics: PulseMetric[] = buildPulseMetrics(createInitialPulseFeed());

function createMockSaleEvent(sequence: number, timestamp: string): NftSaleEvent {
  const collection = pick(mockCollections, sequence);
  const priceSol = roundToHundredths(collection.baseFloorSol * (0.94 + (sequence % 5) * 0.018));
  const marketplace = pick(mockMarketplaces, sequence);

  return {
    id: `sale-mock-${sequence}`,
    collection: collection.collection,
    itemName: buildItemName(collection, sequence),
    imagePlaceholder: {
      initials: collection.initials,
      tone: collection.tone,
    },
    marketplace,
    priceSol,
    priceUsd: Math.round(priceSol * MOCK_SOL_USD_RATE),
    buyer: pick(mockWallets, sequence, 1),
    seller: pick(mockWallets, sequence, 5),
    signature: buildMockSignature(sequence, 'Sale'),
    timestamp,
  };
}

function createMockListingEvent(sequence: number, timestamp: string): NftListingEvent {
  const collection = pick(mockCollections, sequence, 2);
  const floorDelta = roundToTenths(((sequence % 7) - 3) * 1.15);
  const listPriceSol = roundToHundredths(collection.baseFloorSol * (1 + floorDelta / 100));
  const marketplace = pick(mockMarketplaces, sequence, 1);
  const itemName = buildItemName(collection, sequence, 43);

  return {
    id: `listing-mock-${sequence}`,
    collection: collection.collection,
    itemName,
    imagePlaceholder: {
      initials: collection.initials,
      tone: collection.tone,
    },
    marketplace,
    listPriceSol,
    listPriceUsd: Math.round(listPriceSol * MOCK_SOL_USD_RATE),
    floorDelta,
    seller: pick(mockWallets, sequence, 3),
    listingId: `${marketplace.toLowerCase().replace(/\W/g, '')}-${collection.slug}-${itemName.replace(/\W/g, '').toLowerCase()}-${sequence}`,
    timestamp,
  };
}

function getLatestSaleDelta(sales: NftSaleEvent[]) {
  if (sales.length < 2) {
    return 0;
  }

  const [, ...previousSales] = sales;
  const previousAverage = previousSales.reduce((total, sale) => total + sale.priceSol, 0) / previousSales.length;

  if (previousAverage === 0) {
    return 0;
  }

  return ((sales[0].priceSol - previousAverage) / previousAverage) * 100;
}

function getDeltaStatus(value: number): PulseMetric['status'] {
  if (value > 0) {
    return 'positive';
  }

  if (value < 0) {
    return 'negative';
  }

  return 'neutral';
}

function formatMetricDelta(value: number) {
  return `${value > 0 ? '+' : ''}${value.toFixed(1)}%`;
}

function buildItemName(collection: MockCollection, sequence: number, offset = 0) {
  const number = collection.itemBase + ((sequence * 137 + offset) % 9000);
  return `${collection.itemPrefix} #${String(number).padStart(4, '0')}`;
}

function buildMockSignature(sequence: number, label: 'Sale' | 'Listing') {
  return `${pick(mockSignatureSeeds, sequence)}Pulse${label}${sequence.toString(36)}Mock${sequence * 17}`;
}

function pick<T>(items: readonly T[], sequence: number, offset = 0) {
  return items[(sequence + offset) % items.length];
}

function roundToHundredths(value: number) {
  return Number(value.toFixed(2));
}

function roundToTenths(value: number) {
  return Number(value.toFixed(1));
}
