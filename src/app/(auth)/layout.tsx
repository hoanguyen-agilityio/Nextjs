import type { Metadata } from 'next';

// Components
import Header from '@/layouts/Header';
import { Sidebar } from '@/components';

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

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <main className="flex">
        <Sidebar />
        <div className="w-full">
          <Header />
          {children}
        </div>
      </main>
    </>
  );
}
