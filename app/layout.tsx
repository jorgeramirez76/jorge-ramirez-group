import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { agentSchema } from '@/lib/seo/schema';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL('https://www.thejorgeramirezgroup.com'),
  title: {
    default: 'The Jorge Ramirez Group | NJ Real Estate',
    template: '%s | The Jorge Ramirez Group'
  },
  description:
    'Premier real estate experts in Summit, Short Hills, Chatham, and across Northern & Central New Jersey.',
  keywords: [
    'Summit NJ real estate',
    'Short Hills real estate',
    'Chatham NJ realtor',
    'Northern NJ real estate',
    'Central NJ homes',
    'The Jorge Ramirez Group'
  ],
  openGraph: {
    type: 'website',
    siteName: 'The Jorge Ramirez Group',
    locale: 'en_US',
    description:
      'Premier real estate experts in Summit, Short Hills, Chatham, and across Northern & Central New Jersey.'
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const site = 'https://www.thejorgeramirezgroup.com';
  return (
    <html lang="en">
      <body className={`${inter.className} flex min-h-screen flex-col`}>
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(agentSchema(site)) }}
        />
      </body>
    </html>
  );
}
