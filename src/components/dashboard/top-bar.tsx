'use client';

import { useState } from 'react';
import { Menu, Plus, Search } from 'lucide-react';

import { SidebarContent } from '@/components/dashboard/sidebar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Sheet, SheetContent, SheetTitle } from '@/components/ui/sheet';

export function TopBar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <header className="bg-background/95 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 flex h-14 items-center gap-2 border-b px-4 backdrop-blur">
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setMobileOpen(true)}
          aria-label="Open navigation"
        >
          <Menu className="size-5" />
        </Button>

        <div className="flex items-center gap-2">
          <span className="text-lg font-bold tracking-tight">DevStash</span>
        </div>

        <div className="relative ml-auto w-full max-w-md">
          <Search className="text-muted-foreground pointer-events-none absolute top-1/2 left-2.5 size-4 -translate-y-1/2" />
          <Input
            type="search"
            placeholder="Search..."
            className="pl-8"
            aria-label="Search"
          />
        </div>

        <Button size="sm">
          <Plus className="size-4" />
          New Item
        </Button>
      </header>

      <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
        <SheetContent side="left" className="w-72 p-0">
          <SheetTitle className="sr-only">Navigation</SheetTitle>
          <SidebarContent onNavigate={() => setMobileOpen(false)} />
        </SheetContent>
      </Sheet>
    </>
  );
}
