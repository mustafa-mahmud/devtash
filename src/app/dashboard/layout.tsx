import type { ReactNode } from 'react';

import { TopBar } from '@/components/dashboard/top-bar';

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-screen flex-col">
      <TopBar />
      <div className="flex min-h-0 flex-1">
        <aside className="w-64 shrink-0 border-r p-4">
          <h2 className="text-lg font-semibold">Sidebar</h2>
        </aside>
        <main className="min-w-0 flex-1 overflow-auto p-4">
          <h2 className="text-lg font-semibold">Main</h2>
          {children}
        </main>
      </div>
    </div>
  );
}
