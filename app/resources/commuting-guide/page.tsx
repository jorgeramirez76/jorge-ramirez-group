import type { Metadata } from 'next';
import CommutingGuide from './commuting-guide';

export const metadata: Metadata = {
  title: 'Commuting Guide',
  description: 'Explore NJ Transit rail options from New Jersey communities to New York City',
};

export default function Page() {
  return <CommutingGuide />;
}
