export interface ChangelogEntry {
  version: string;
  title: string;
  description: string;
  date: string;
  type: 'feat' | 'fix' | 'refactor' | 'style' | 'docs';
}

export const CHANGELOG_DATA: ChangelogEntry[] = [
  {
    version: 'v1.9.1',
    title: 'Grammar Examples Layout Fix',
    description: 'Fixed grammar examples layout.',
    date: '2026-01-30 00:00:00',
    type: 'fix',
  },
  {
    version: 'v1.9.0',
    title: 'SEO & Grammar Improvements',
    description:
      'Added SEO metadata to all grammar lessons and improved the grammar examples with custom components.',
    date: '2026-01-30 00:00:00',
    type: 'feat',
  },
  {
    version: 'v1.8.3',
    title: 'Project Status Tracker',
    description:
      'Implemented a personal tracking tool for developers to monitor topic completion and verification status.',
    date: '2026-01-29 00:00:00',
    type: 'feat',
  },
  {
    version: 'v1.8.2',
    title: 'Plural Nouns Lesson',
    description:
      'Developed a comprehensive guide on plural nouns, including regular rules (s, es, ies, ves) and common irregular plurals.',
    date: '2026-01-29 00:00:00',
    type: 'feat',
  },
  {
    version: 'v1.8.1',
    title: 'Countable & Uncountable Nouns',
    description:
      'Added a new lesson covering the differences between countable and uncountable nouns, including specific confusing cases and measurement units.',
    date: '2026-01-29 00:00:00',
    type: 'feat',
  },
  {
    version: 'v1.8.0',
    title: 'Articles Lesson & SEO Support',
    description:
      'Added the definite and indefinite articles lesson with pronunciation rules and implemented per-page SEO metadata support for MDX.',
    date: '2026-01-29 00:00:00',
    type: 'feat',
  },
  {
    version: 'v1.7.1',
    title: 'Irregular Verbs Resource',
    description:
      'Created a new resource page with a comprehensive table of the most common irregular verbs in English.',
    date: '2026-01-29 00:00:00',
    type: 'feat',
  },
  {
    version: 'v1.7.0',
    title: 'Present Tense Structures Expanded',
    description:
      'Added negative and interrogative grammatical structures to all present tense lessons (Simple, Continuous, Perfect, Perfect Continuous, and Verb to be/have).',
    date: '2026-01-29 00:00:00',
    type: 'feat',
  },

  {
    version: 'v1.6.1',
    title: 'Multi-Structure Support',
    description:
      'Updated GrammarExample component to support multiple grammatical structures with custom labels.',
    date: '2026-01-29 00:00:00',
    type: 'feat',
  },
  {
    version: 'v1.6.0',
    title: 'Verb "to be" Lessons',
    description:
      'Added detailed lessons for Present Simple and Past Simple verb "to be" with examples.',
    date: '2026-01-29 00:00:00',
    type: 'feat',
  },
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
