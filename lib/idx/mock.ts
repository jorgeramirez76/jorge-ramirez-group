import type { IDXProvider, Listing } from './provider';

const demo: Listing[] = [
  {
    id: 'demo-1',
    address: '12 Oak St',
    city: 'Summit',
    state: 'NJ',
    zip: '07901',
    price: 1595000,
    beds: 5,
    baths: 4,
    sqft: 3800,
    image: '/images/listings/oak-st.jpg',
    url: '/contact?interest=12-oak-st-summit-nj-07901',
    status: 'active'
  },
  {
    id: 'demo-2',
    address: '45 Brook Ln',
    city: 'Short Hills',
    state: 'NJ',
    zip: '07078',
    price: 3250000,
    beds: 6,
    baths: 6,
    sqft: 5200,
    image: '/images/listings/brook-ln.jpg',
    url: '/contact?interest=45-brook-ln-short-hills-nj-07078',
    status: 'active'
  }
];

export const mockProvider: IDXProvider = {
  async featured(count = 12) { return demo.slice(0, count); },
  async byCity(_city, count = 12) { return demo.slice(0, count); },
  async byId(id) { return demo.find((d) => d.id === id) ?? null; }
};
