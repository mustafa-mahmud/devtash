// Mock data for the dashboard UI.
// This is a temporary single source of truth until a database is implemented.
// Keep it simple — it is only for displaying data in the dashboard.

export interface User {
  id: string;
  name: string;
  email: string;
  isPro: boolean;
  avatarUrl: string | null;
}

export interface ItemType {
  id: string;
  name: string;
  icon: string;
  color: string;
  isSystem: boolean;
}

export interface Collection {
  id: string;
  name: string;
  description: string | null;
  isFavorite: boolean;
  createdAt: string;
}

export interface Item {
  id: string;
  title: string;
  contentType: 'text' | 'file';
  content: string | null;
  fileUrl: string | null;
  fileName: string | null;
  url: string | null;
  description: string | null;
  language: string | null;
  isFavorite: boolean;
  isPinned: boolean;
  tags: string[];
  typeId: string;
  collectionId: string | null;
  createdAt: string;
  updatedAt: string;
}

export const currentUser: User = {
  id: 'user_1',
  name: 'Mustafa Mahmud',
  email: 'mustafa@example.com',
  isPro: true,
  avatarUrl: null,
};

export const itemTypes: ItemType[] = [
  {
    id: 'type_snippet',
    name: 'Snippet',
    icon: 'code',
    color: '#3b82f6',
    isSystem: true,
  },
  {
    id: 'type_prompt',
    name: 'Prompt',
    icon: 'sparkles',
    color: '#a855f7',
    isSystem: true,
  },
  {
    id: 'type_note',
    name: 'Note',
    icon: 'sticky-note',
    color: '#eab308',
    isSystem: true,
  },
  {
    id: 'type_command',
    name: 'Command',
    icon: 'terminal',
    color: '#22c55e',
    isSystem: true,
  },
  {
    id: 'type_file',
    name: 'File',
    icon: 'file',
    color: '#64748b',
    isSystem: true,
  },
  {
    id: 'type_image',
    name: 'Image',
    icon: 'image',
    color: '#ec4899',
    isSystem: true,
  },
  {
    id: 'type_url',
    name: 'URL',
    icon: 'link',
    color: '#06b6d4',
    isSystem: true,
  },
];

export const collections: Collection[] = [
  {
    id: 'col_1',
    name: 'React Patterns',
    description: 'Reusable React component patterns and hooks.',
    isFavorite: true,
    createdAt: '2026-06-01T10:00:00.000Z',
  },
  {
    id: 'col_2',
    name: 'Context Files',
    description: 'Project context files for AI assistants.',
    isFavorite: false,
    createdAt: '2026-06-05T12:30:00.000Z',
  },
  {
    id: 'col_3',
    name: 'Python Snippets',
    description: 'Handy Python snippets and scripts.',
    isFavorite: false,
    createdAt: '2026-06-10T09:15:00.000Z',
  },
];

export const items: Item[] = [
  {
    id: 'item_1',
    title: 'useDebounce Hook',
    contentType: 'text',
    content:
      "import { useEffect, useState } from 'react';\n\nexport function useDebounce<T>(value: T, delay: number) {\n  const [debounced, setDebounced] = useState(value);\n  useEffect(() => {\n    const t = setTimeout(() => setDebounced(value), delay);\n    return () => clearTimeout(t);\n  }, [value, delay]);\n  return debounced;\n}",
    fileUrl: null,
    fileName: null,
    url: null,
    description: 'A simple debounce hook for React.',
    language: 'typescript',
    isFavorite: true,
    isPinned: true,
    tags: ['react', 'hooks', 'typescript'],
    typeId: 'type_snippet',
    collectionId: 'col_1',
    createdAt: '2026-06-02T08:00:00.000Z',
    updatedAt: '2026-06-20T14:30:00.000Z',
  },
  {
    id: 'item_2',
    title: 'Code Review Prompt',
    contentType: 'text',
    content:
      'Review the following code for bugs, security issues, and performance. Suggest improvements with examples:\n\n{{ code }}',
    fileUrl: null,
    fileName: null,
    url: null,
    description: 'Reusable prompt for reviewing code with an AI assistant.',
    language: 'markdown',
    isFavorite: false,
    isPinned: false,
    tags: ['ai', 'prompt', 'review'],
    typeId: 'type_prompt',
    collectionId: 'col_2',
    createdAt: '2026-06-06T11:00:00.000Z',
    updatedAt: '2026-06-06T11:00:00.000Z',
  },
  {
    id: 'item_3',
    title: 'Kill process on port 3000',
    contentType: 'text',
    content: 'npx kill-port 3000',
    fileUrl: null,
    fileName: null,
    url: null,
    description: 'Free up port 3000 when a dev server is stuck.',
    language: 'bash',
    isFavorite: false,
    isPinned: true,
    tags: ['terminal', 'dev'],
    typeId: 'type_command',
    collectionId: null,
    createdAt: '2026-06-08T16:45:00.000Z',
    updatedAt: '2026-06-08T16:45:00.000Z',
  },
  {
    id: 'item_4',
    title: 'Flatten a nested list',
    contentType: 'text',
    content:
      'def flatten(nested):\n    result = []\n    for item in nested:\n        if isinstance(item, list):\n            result.extend(flatten(item))\n        else:\n            result.append(item)\n    return result',
    fileUrl: null,
    fileName: null,
    url: null,
    description: 'Recursively flatten a nested Python list.',
    language: 'python',
    isFavorite: true,
    isPinned: false,
    tags: ['python', 'recursion'],
    typeId: 'type_snippet',
    collectionId: 'col_3',
    createdAt: '2026-06-11T09:30:00.000Z',
    updatedAt: '2026-06-11T09:30:00.000Z',
  },
  {
    id: 'item_5',
    title: 'Next.js Docs',
    contentType: 'text',
    content: null,
    fileUrl: null,
    fileName: null,
    url: 'https://nextjs.org/docs',
    description: 'Official Next.js documentation.',
    language: null,
    isFavorite: false,
    isPinned: false,
    tags: ['nextjs', 'docs'],
    typeId: 'type_url',
    collectionId: null,
    createdAt: '2026-06-12T13:20:00.000Z',
    updatedAt: '2026-06-12T13:20:00.000Z',
  },
  {
    id: 'item_6',
    title: 'Project Setup Notes',
    contentType: 'text',
    content:
      '# Project Setup\n\n- Use pnpm as the package manager\n- Enable strict TypeScript\n- Configure ESLint + Prettier\n- Set up Husky for pre-commit hooks',
    fileUrl: null,
    fileName: null,
    url: null,
    description: 'Checklist for bootstrapping a new project.',
    language: 'markdown',
    isFavorite: false,
    isPinned: false,
    tags: ['setup', 'notes'],
    typeId: 'type_note',
    collectionId: 'col_2',
    createdAt: '2026-06-15T10:10:00.000Z',
    updatedAt: '2026-06-15T10:10:00.000Z',
  },
];
