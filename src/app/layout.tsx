import type { Metadata } from 'next';
import './globals.css';

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
      <head>
        <link rel="preconnect" href="https://rsms.me/" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </head>
      <body className={'h-screen min-h-fit antialiased'}>{children}</body>
    </html>
  );
}
