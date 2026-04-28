export type EventStatus = 'positive' | 'negative' | 'neutral' | 'live';

export interface PulseMetric {
  label: string;
  value: string;
  delta?: string;
  status?: EventStatus;
}

export interface NftIdentityPlaceholder {
  initials: string;
  tone: 'ember' | 'teal' | 'violet' | 'amber' | 'steel' | 'rose';
}

export interface NftSaleEvent {
  id: string;
  collection: string;
  itemName: string;
  imagePlaceholder: NftIdentityPlaceholder;
  marketplace: string;
  priceSol: number;
  priceUsd: number;
  buyer: string;
  seller: string;
  signature: string;
  timestamp: string;
}

export interface NftListingEvent {
  id: string;
  collection: string;
  itemName: string;
  imagePlaceholder: NftIdentityPlaceholder;
  marketplace: string;
  listPriceSol: number;
  listPriceUsd: number;
  floorDelta: number;
  seller: string;
  listingId: string;
  timestamp: string;
}

export interface PortfolioHolding {
  id: string;
  collection: string;
  itemCount: number;
  floorSol: number;
  valueSol: number;
  listedCount: number;
  change24h: number;
}

export interface PortfolioActivity {
  id: string;
  action: 'Bought' | 'Sold' | 'Listed' | 'Received';
  itemName: string;
  collection: string;
  marketplace: string;
  valueSol: number;
  signature: string;
  timestamp: string;
}

export interface PortfolioProfile {
  displayName: string;
  wallet: string;
  headline: string;
  network: string;
  signals: Array<{
    label: string;
    value: string;
    status?: EventStatus;
  }>;
}
