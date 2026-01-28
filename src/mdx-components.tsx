import type { MDXComponents } from 'mdx/types';
import { ImportantNote } from '@/components/mdx/ImportantNote';
import { GrammarExample } from '@/components/mdx/GrammarExample';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    ImportantNote,
    GrammarExample,
  };
}
