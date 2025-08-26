import type { Metadata } from 'next';
import CommutingGuide from './commuting-guide';

export const metadata: Metadata = {
  title: 'Commuting Guide',
  description: 'NJ Transit lines serving Union, Morris, and Essex counties',
};

export default function Page() {
  return <CommutingGuide />;
}
