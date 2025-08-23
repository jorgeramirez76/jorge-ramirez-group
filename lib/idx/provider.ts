export type Listing = {
  id: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  price: number;
  beds: number;
  baths: number;
  sqft?: number;
  image: string;
  url?: string;
  status?: 'active' | 'pending' | 'sold';
};

export interface IDXProvider {
  featured(count?: number): Promise<Listing[]>;
  byCity(citySlug: string, count?: number): Promise<Listing[]>;
  byId(id: string): Promise<Listing | null>;
}

export function getIDX(): IDXProvider {
  if (process.env.IDX_PROVIDER === 'mock') return require('./mock').mockProvider;
  // Replace with your real provider implementation
  return require('./mock').mockProvider;
}
