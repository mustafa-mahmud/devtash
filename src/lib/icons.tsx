import {
  Code,
  File,
  Image as ImageIcon,
  Link as LinkIcon,
  Sparkles,
  StickyNote,
  Terminal,
  type LucideIcon,
} from 'lucide-react';

// Maps the string `icon` field on an ItemType to a Lucide component.
const iconMap: Record<string, LucideIcon> = {
  code: Code,
  sparkles: Sparkles,
  'sticky-note': StickyNote,
  terminal: Terminal,
  file: File,
  image: ImageIcon,
  link: LinkIcon,
};

export function getItemTypeIcon(icon: string): LucideIcon {
  return iconMap[icon] ?? File;
}

// Converts an ItemType name (e.g. "Snippet") into a URL slug (e.g. "snippets").
export function typeToSlug(name: string): string {
  const slug = name.toLowerCase().replace(/\s+/g, '-');
  return slug.endsWith('s') ? slug : `${slug}s`;
}
