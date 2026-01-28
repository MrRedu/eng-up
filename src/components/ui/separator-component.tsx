import * as React from 'react';
import { cn } from '@/lib/utils';

interface SeparatorProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'solid' | 'gradient' | 'dotted';
}

export const Separator = React.forwardRef<HTMLDivElement, SeparatorProps>(
  ({ className, variant = 'solid', ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'h-px w-full my-10',
          variant === 'solid' && 'bg-border',
          variant === 'gradient' &&
            'bg-linear-to-r from-transparent via-primary/50 to-transparent h-0.5',
          variant === 'dotted' &&
            'border-t border-dotted border-border bg-transparent h-0',
          className,
        )}
        {...props}
      />
    );
  },
);
Separator.displayName = 'Separator';
