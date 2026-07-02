'use client';

import { useState, type ReactNode } from 'react';
import Link from 'next/link';
import {
  Clock,
  Folder,
  LogOut,
  PanelLeftClose,
  PanelLeftOpen,
  Settings,
  Star,
  type LucideIcon,
} from 'lucide-react';

import { cn } from '@/lib/utils';
import { getItemTypeIcon, typeToSlug } from '@/lib/icons';
import { collections, currentUser, items, itemTypes } from '@/lib/mock-data';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';

interface SidebarContentProps {
  collapsed?: boolean;
  onToggleCollapse?: () => void;
  onNavigate?: () => void;
}

const favoriteCollections = collections.filter((c) => c.isFavorite);
const recentCollections = [...collections]
  .sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
  )
  .slice(0, 5);

/** Number of items per item type. */
const itemCountByType = items.reduce<Record<string, number>>((acc, item) => {
  acc[item.typeId] = (acc[item.typeId] ?? 0) + 1;
  return acc;
}, {});

/** Number of items per collection. */
const itemCountByCollection = items.reduce<Record<string, number>>(
  (acc, item) => {
    if (item.collectionId) {
      acc[item.collectionId] = (acc[item.collectionId] ?? 0) + 1;
    }
    return acc;
  },
  {},
);

function getInitials(name: string) {
  return name
    .split(' ')
    .map((part) => part[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();
}

function SidebarSectionLabel({
  icon: Icon,
  children,
}: {
  icon?: LucideIcon;
  children: ReactNode;
}) {
  return (
    <div className="flex items-center gap-1.5 px-2 pb-1 pt-2 text-xs font-medium tracking-wide text-muted-foreground uppercase">
      {Icon && <Icon className="size-3.5" />}
      {children}
    </div>
  );
}

/**
 * Presentational sidebar body. Shared by the desktop collapsible aside and the
 * mobile drawer so the markup stays in sync.
 */
export function SidebarContent({
  collapsed = false,
  onToggleCollapse,
  onNavigate,
}: SidebarContentProps) {
  return (
    <div className="bg-sidebar text-sidebar-foreground flex h-full flex-col">
      {/* Header */}
      <div
        className={cn(
          'flex h-14 shrink-0 items-center border-b border-sidebar-border',
          collapsed ? 'justify-center' : 'justify-between px-4',
        )}
      >
        {!collapsed && (
          <span className="text-sm font-semibold tracking-tight">DevStash</span>
        )}
        {onToggleCollapse && (
          <Button
            variant="ghost"
            size="icon"
            className="size-8"
            onClick={onToggleCollapse}
            aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
          >
            {collapsed ? (
              <PanelLeftOpen className="size-4" />
            ) : (
              <PanelLeftClose className="size-4" />
            )}
          </Button>
        )}
      </div>

      <ScrollArea className="flex-1">
        <nav
          className={cn('flex flex-col gap-1 p-2', collapsed && 'items-center')}
        >
          {/* Item types */}
          {!collapsed && <SidebarSectionLabel>Items</SidebarSectionLabel>}
          <div className="flex flex-col gap-0.5">
            {itemTypes.map((type) => {
              const Icon = getItemTypeIcon(type.icon);
              return (
                <Link
                  key={type.id}
                  href={`/items/${typeToSlug(type.name)}`}
                  onClick={onNavigate}
                  title={type.name}
                  className={cn(
                    'flex items-center gap-2 rounded-md px-2 py-1.5 text-sm text-sidebar-foreground/80 transition-colors hover:bg-sidebar-accent hover:text-sidebar-accent-foreground',
                    collapsed && 'justify-center px-0',
                  )}
                >
                  <Icon
                    className="size-4 shrink-0"
                    style={{ color: type.color }}
                  />
                  {!collapsed && (
                    <>
                      <span className="min-w-0 flex-1 truncate">
                        {type.name}
                      </span>
                      <span className="ml-auto shrink-0 text-xs tabular-nums text-muted-foreground">
                        {itemCountByType[type.id] ?? 0}
                      </span>
                    </>
                  )}
                </Link>
              );
            })}
          </div>

          {!collapsed && (
            <>
              <Separator className="my-1 bg-sidebar-border" />

              {/* Favorite collections */}
              <SidebarSectionLabel icon={Star}>Favorites</SidebarSectionLabel>
              <div className="flex flex-col gap-0.5">
                {favoriteCollections.length === 0 ? (
                  <p className="px-2 py-1 text-xs text-muted-foreground">
                    No favorites yet
                  </p>
                ) : (
                  favoriteCollections.map((collection) => (
                    <Link
                      key={collection.id}
                      href={`/collections/${collection.id}`}
                      onClick={onNavigate}
                      className="flex items-center gap-2 rounded-md px-2 py-1.5 text-sm text-sidebar-foreground/80 transition-colors hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                    >
                      <Star className="size-4 shrink-0 fill-current text-amber-500" />
                      <span className="min-w-0 flex-1 truncate">
                        {collection.name}
                      </span>
                      <span className="ml-auto shrink-0 text-xs tabular-nums text-muted-foreground">
                        {itemCountByCollection[collection.id] ?? 0}
                      </span>
                    </Link>
                  ))
                )}
              </div>

              <Separator className="my-1 bg-sidebar-border" />

              {/* Recent collections */}
              <SidebarSectionLabel icon={Clock}>Recent</SidebarSectionLabel>
              <div className="flex flex-col gap-0.5">
                {recentCollections.map((collection) => (
                  <Link
                    key={collection.id}
                    href={`/collections/${collection.id}`}
                    onClick={onNavigate}
                    className="flex items-center gap-2 rounded-md px-2 py-1.5 text-sm text-sidebar-foreground/80 transition-colors hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                  >
                    <Folder className="size-4 shrink-0" />
                    <span className="min-w-0 flex-1 truncate">
                      {collection.name}
                    </span>
                    <span className="ml-auto shrink-0 text-xs tabular-nums text-muted-foreground">
                      {itemCountByCollection[collection.id] ?? 0}
                    </span>
                  </Link>
                ))}
              </div>
            </>
          )}
        </nav>
      </ScrollArea>

      {/* User area */}
      <div
        className={cn(
          'shrink-0 border-t border-sidebar-border p-2',
          collapsed ? 'flex justify-center' : 'flex items-center gap-2',
        )}
      >
        <Avatar size="default">
          {currentUser.avatarUrl && (
            <AvatarImage src={currentUser.avatarUrl} alt={currentUser.name} />
          )}
          <AvatarFallback>{getInitials(currentUser.name)}</AvatarFallback>
        </Avatar>
        {!collapsed && (
          <>
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-1">
                <span className="truncate text-sm font-medium">
                  {currentUser.name}
                </span>
                {currentUser.isPro && (
                  <span className="rounded bg-primary px-1 py-0.5 text-[10px] font-semibold text-primary-foreground">
                    PRO
                  </span>
                )}
              </div>
              <span className="block truncate text-xs text-muted-foreground">
                {currentUser.email}
              </span>
            </div>
            <div className="flex items-center">
              <Button
                variant="ghost"
                size="icon"
                className="size-8"
                aria-label="Settings"
              >
                <Settings className="size-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="size-8"
                aria-label="Log out"
              >
                <LogOut className="size-4" />
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

/**
 * Desktop collapsible sidebar. Hidden on mobile (the drawer in the TopBar is
 * used there instead).
 */
export function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside
      className={cn(
        'bg-sidebar text-sidebar-foreground hidden shrink-0 flex-col border-r border-sidebar-border transition-[width] duration-200 md:flex',
        collapsed ? 'w-16' : 'w-72',
      )}
    >
      <SidebarContent
        collapsed={collapsed}
        onToggleCollapse={() => setCollapsed((value) => !value)}
      />
    </aside>
  );
}
