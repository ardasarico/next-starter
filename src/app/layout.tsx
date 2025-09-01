import type { Metadata } from 'next';

import localFont from 'next/font/local';
import './globals.css';

const interVariable = localFont({
  src: '../../public/assets/fonts/InterVariable.woff2',
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Nextjs 15 Starter Template',
  description: 'made by arda',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${interVariable.variable} h-screen min-h-fit antialiased`}>{children}</body>
    </html>
  );
}
