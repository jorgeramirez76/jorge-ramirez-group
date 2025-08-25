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
  status?: "active" | "pending" | "sold";
};

export interface IDXProvider {
  featured(_count?: number): Promise<Listing[]>;
  byCity(_citySlug: string, _count?: number): Promise<Listing[]>;
  byId(_id: string): Promise<Listing | null>;
}

import { mockProvider } from "./mock";

export function getIDX(): IDXProvider {
  if (process.env.IDX_PROVIDER === "mock") return mockProvider;
  // Replace with your real provider implementation
  return mockProvider;
}
