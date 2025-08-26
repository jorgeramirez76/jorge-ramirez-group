import type { Metadata } from 'next';
import CommutingGuide from '../resources/commuting-guide/commuting-guide';

export const metadata: Metadata = {
  title: 'Commuting',
  description: 'NJ Transit lines serving Union, Morris, and Essex counties',
};

export default function Page() {
  return <CommutingGuide />;
}
