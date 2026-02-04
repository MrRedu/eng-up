import type { MDXComponents } from 'mdx/types';
import { GrammarExample } from '@/components/mdx/GrammarExample';
import { Alert } from '@/components/alert-component';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { AlertTriangle } from 'lucide-react';
import { cn } from './lib/utils';
import { Typography } from '@/components/ui/typography';
import { List, ListItem } from '@/components/list-component';
import { Separator } from '@/components/separator-component';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import Link from 'next/link';
import { HasTranslation } from '@/components/ui/has-translation';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    // Estilos para etiquetas estándar
    h1: ({ className, ...props }) => (
      <Typography variant="h1" className={cn(className)} {...props} />
    ),
    h2: ({ className, ...props }) => (
      <Typography variant="h2" className={cn(className)} {...props} />
    ),
    h3: ({ className, ...props }) => (
      <Typography variant="h3" className={cn(className)} {...props} />
    ),
    p: ({ className, ...props }) => (
      <Typography variant="p" className={cn(className)} {...props} />
    ),
    ul: ({ className, ...props }) => (
      <List as="ul" className={cn(className)} {...props} />
    ),
    ol: ({ className, ...props }) => (
      <List as="ol" className={cn(className)} {...props} />
    ),
    li: ({ className, ...props }) => (
      <ListItem className={cn(className)} {...props} />
    ),
    code: ({ className, ...props }) => (
      <Typography variant="code" className={cn(className)} {...props} />
    ),
    hr: ({ className, ...props }) => (
      <Separator className={cn(className)} {...props} />
    ),
    // Componentes personalizados
    GrammarExample,
    Alert,
    Typography,
    List,
    ListItem,
    Link,
    HasTranslation,
    // Shadcn
    // shadcn-Table
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
    // shadcn-Popover
    Popover,
    PopoverContent,
    PopoverTrigger,
    // Icons
    AlertTriangle,
  };
}
