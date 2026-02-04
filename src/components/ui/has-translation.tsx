import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { cn } from '@/lib/utils';

interface HasTranslationProps extends React.HTMLAttributes<HTMLElement> {
  /** The translation text or content shown in the popover */
  translation: React.ReactNode;
  /** The text or element that triggers the translation */
  children: React.ReactNode;
  /** The HTML tag or component to use for the trigger. Defaults to "span" */
  as?: React.ElementType;
  /** Whether the trigger text should not wrap. Useful for labels like "Example:" */
  nowrap?: boolean;
}

/**
 * A component that wraps text or an element with a dotted underline and shows
 * a translation in a popover when clicked/hovered.
 */
export function HasTranslation({
  translation,
  children,
  as: Component = 'span',
  className,
  nowrap = false,
  ...props
}: HasTranslationProps) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Component
          className={cn(
            'cursor-pointer underline underline-offset-4 decoration-dotted decoration-primary/30 hover:decoration-primary/60 transition-colors',
            nowrap && 'text-nowrap',
            className,
          )}
          {...props}
        >
          {children}
        </Component>
      </PopoverTrigger>
      <PopoverContent
        align="start"
        className="w-fit max-w-70 p-3 text-sm italic bg-popover text-popover-foreground shadow-lg border border-border"
      >
        {translation}
      </PopoverContent>
    </Popover>
  );
}
