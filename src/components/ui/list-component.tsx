import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';
import { cn } from '@/lib/utils';

const listVariants = cva('my-6 ml-6', {
  variants: {
    variant: {
      disc: 'list-disc',
      decimal: 'list-decimal',
      roman: 'list-[upper-roman]',
      alpha: 'list-[lower-alpha]',
      circle: 'list-[circle]',
      square: 'list-[square]',
      none: 'list-none ml-0',
    },
    spacing: {
      default: '[&>li]:mt-2',
      tight: '[&>li]:mt-1',
      relaxed: '[&>li]:mt-4',
      none: '[&>li]:mt-0',
    },
  },
  defaultVariants: {
    variant: 'disc',
    spacing: 'default',
  },
});

interface ListProps
  extends
    React.HTMLAttributes<HTMLUListElement | HTMLOListElement>,
    VariantProps<typeof listVariants> {
  as?: 'ul' | 'ol';
}

export const List = React.forwardRef<
  HTMLUListElement | HTMLOListElement,
  ListProps
>(({ className, variant, spacing, as: Tag = 'ul', ...props }, ref) => {
  const finalVariant = variant || (Tag === 'ol' ? 'decimal' : 'disc');
  const Component = Tag as React.ElementType;

  return (
    <Component
      ref={ref}
      className={cn(
        listVariants({ variant: finalVariant, spacing, className }),
      )}
      {...props}
    />
  );
});
List.displayName = 'List';

export const ListItem = React.forwardRef<
  HTMLLIElement,
  React.LiHTMLAttributes<HTMLLIElement>
>(({ className, ...props }, ref) => {
  return <li ref={ref} className={cn('leading-7', className)} {...props} />;
});
ListItem.displayName = 'ListItem';
