'use client';

import { Header } from '@/components/molecules/Header/Header';
import { Sidebar } from '@/components/molecules/Sidebar/Sidebar';

interface MainLayoutProps {
  children: React.ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className='grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]'>
      <div className='hidden border-r bg-muted/40 md:block'>
        <Sidebar />
      </div>
      <div className='flex flex-col h-screen'>
        <Header />
        <main className='flex-1 overflow-y-scroll'>{children}</main>
      </div>
    </div>
  );
}
