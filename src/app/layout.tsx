import type { Metadata } from 'next';
import { NextUIProvider } from '@nextui-org/react';

// Components
import montserrat from '@/assets/fonts';
import Header from '@/layouts/Header';
import { Sidebar } from '@/components';
import './globals.css';

export const metadata: Metadata = {
  title: 'Next.js Boilerplate',
  description: 'Next.js 14+ boilerplate app',
  icons: [
    {
      rel: 'icon',
      url: '/favicon.ico',
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <NextUIProvider>
          <main className="flex">
            <Sidebar />
            <div className="w-full">
              <Header />
              {children}
            </div>
          </main>
        </NextUIProvider>
      </body>
    </html>
  );
}
