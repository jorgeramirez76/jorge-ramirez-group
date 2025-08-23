import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { agentSchema } from '@/lib/seo/schema';
import { SiteHeader } from '@/components/site-header';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL('https://www.thejorgeramirezgroup.com'),
  title: {
    default: 'The Jorge Ramirez Group | NJ Real Estate',
    template: '%s | The Jorge Ramirez Group'
  },
  description:
    'Trusted New Jersey real estate—Union, Morris, Essex, Hudson, and Middlesex counties.',
  openGraph: { type: 'website', siteName: 'The Jorge Ramirez Group', locale: 'en_US' },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const site = 'https://www.thejorgeramirezgroup.com';
  return (
    <html lang="en">
      <body className={inter.className}>
        <SiteHeader />
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(agentSchema(site)) }}
        />
      </body>
    </html>
  );
}
