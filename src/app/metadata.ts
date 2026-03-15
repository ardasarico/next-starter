import type { Metadata } from 'next';

import { baseUrl } from '@/lib/env';

const siteConfig = {
  author: 'Your Name',
  description: 'Your site description here.',
  name: 'Your Site Name',
  url: baseUrl,
};

export const metadata: Metadata = {
  alternates: {
    canonical: siteConfig.url,
  },

  authors: [{ name: siteConfig.author }],

  description: siteConfig.description,

  icons: {
    apple: '/metadata/favicons/apple-touch-icon.png',
    icon: [
      { url: '/metadata/favicons/favicon.ico' },
      {
        sizes: '16x16',
        type: 'image/png',
        url: '/metadata/favicons/favicon-16x16.png',
      },
      {
        sizes: '32x32',
        type: 'image/png',
        url: '/metadata/favicons/favicon-32x32.png',
      },
      {
        sizes: '192x192',
        type: 'image/png',
        url: '/metadata/favicons/android-chrome-192x192.png',
      },
      {
        sizes: '512x512',
        type: 'image/png',
        url: '/metadata/favicons/android-chrome-512x512.png',
      },
    ],
  },

  metadataBase: new URL(siteConfig.url),

  openGraph: {
    description: siteConfig.description,
    images: [
      {
        alt: siteConfig.name,
        height: 630,
        url: '/metadata/og-image.jpg',
        width: 1200,
      },
    ],
    locale: 'en_US',
    siteName: siteConfig.name,
    title: siteConfig.name,
    type: 'website',
    url: siteConfig.url,
  },

  robots: {
    follow: true,
    index: true,
  },

  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },

  twitter: {
    card: 'summary_large_image',
    creator: '@yourhandle',
    description: siteConfig.description,
    images: [
      {
        alt: siteConfig.name,
        url: '/metadata/og-image.jpg',
      },
    ],
    site: '@yourhandle',
    title: siteConfig.name,
  },
};
