import type { Metadata } from 'next';
import { NextUIProvider } from '@nextui-org/react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';

// Components
import montserrat from '@/assets/fonts';
import Header from '@/layouts/Header';
import { Sidebar } from '@/components';
import './globals.css';

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'Showcase of meta dashboard',
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
          <NextThemesProvider attribute="class" defaultTheme="light">
            <main className="flex">
              <Sidebar />
              <div className="w-full">
                <Header />
                {children}
              </div>
            </main>
          </NextThemesProvider>
        </NextUIProvider>
      </body>
    </html>
  );
}
