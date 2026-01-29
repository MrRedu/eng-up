export interface ChangelogEntry {
  version: string;
  title: string;
  description: string;
  date: string;
  type: 'feat' | 'fix' | 'refactor' | 'style' | 'docs';
}

export const CHANGELOG_DATA: ChangelogEntry[] = [
  {
    version: 'v1.5.1',
    title: 'Sidebar Footer Optimization',
    description:
      'Consolidated secondary navigation links into a clean dropdown menu in the sidebar footer.',
    date: '2026-01-29 00:00:00',
    type: 'style',
  },
  {
    version: 'v1.5.0',
    title: 'Changelog Page',
    description: 'Created the changelog page.',
    date: '2026-01-29 00:00:00',
    type: 'feat',
  },
  {
    version: 'v1.4.0',
    title: 'Interactive Learning & Roadmap',
    description:
      'Added interactive roadmap with progress tracking and popovers for translations in MDX files.',
    date: '2026-01-28 00:00:00',
    type: 'feat',
  },
  {
    version: 'v1.3.0',
    title: 'Spanish SEO & About Page',
    description:
      'Improved SEO metadata for Spanish speakers and created the project information page.',
    date: '2026-01-28 00:00:00',
    type: 'docs',
  },
  {
    version: 'v1.2.0',
    title: 'MDX Components & Styling',
    description:
      'Integrated custom Alert, List, Separator, and Typography components for rich MDX formatting.',
    date: '2026-01-28 00:00:00',
    type: 'style',
  },
  {
    version: 'v1.1.0',
    title: 'Glossary & Hierarchical Navigation',
    description:
      'Centralized navigation data and implemented 3-level hierarchy in sidebar and search.',
    date: '2026-01-28 00:00:00',
    type: 'refactor',
  },
  {
    version: 'v1.0.0',
    title: 'Initial Release',
    description:
      'Base project setup with Next.js, Tailwind CSS, and Shadcn/UI.',
    date: '2026-01-28 00:00:00',
    type: 'feat',
  },
];
