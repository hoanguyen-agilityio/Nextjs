import type { Metadata } from 'next';
import { NextUIProvider } from '@nextui-org/react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';

// Components
import montserrat from '@/assets/fonts';
import './globals.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { SessionProvider } from 'next-auth/react';

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
        <SessionProvider>
          <NextUIProvider>
            <NextThemesProvider attribute="class" defaultTheme="light">
              {children}
              <ToastContainer />
            </NextThemesProvider>
          </NextUIProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
