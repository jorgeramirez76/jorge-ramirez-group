export type ListingItem = {
  slug: string;
  address: string;
  town: string;
  price: number;
  beds: number;
  baths: number;
  sqft: number;
  description?: string;
  images?: string[];
};
