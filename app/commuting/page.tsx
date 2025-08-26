import type { Metadata } from 'next';
import CommutingGuide from '../resources/commuting-guide/commuting-guide';

export const metadata: Metadata = {
  title: 'Commuting',
  description: 'Explore NJ Transit rail options from New Jersey communities to New York City',
};

export default function Page() {
  return <CommutingGuide />;
}
