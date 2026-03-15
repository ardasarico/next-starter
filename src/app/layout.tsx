import { Providers } from '@/components/providers/providers';

import './globals.css';
export { metadata } from './metadata';

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://rsms.me/" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </head>
      <body className="antialiased">
        <Providers>
          <div className="root grid min-h-screen w-screen place-content-center">{children}</div>
        </Providers>
      </body>
    </html>
  );
}
