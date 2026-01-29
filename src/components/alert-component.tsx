import {
  Alert as AlertContainer,
  AlertDescription,
  AlertTitle,
} from '@/components/ui/alert';
import { AlertTriangle, Info, CheckCircle2, AlertCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

type AlertVariant = 'info' | 'success' | 'warn' | 'destructive';

interface AlertProps {
  title?: string;
  description?: string;
  children?: React.ReactNode;
  variant?: AlertVariant;
  className?: string;
}

const variantStyles: Record<AlertVariant, string> = {
  info: 'border-blue-200 bg-blue-50 text-blue-900 dark:border-blue-900/50 dark:bg-blue-900/20 dark:text-blue-100',
  success:
    'border-green-200 bg-green-50 text-green-900 dark:border-green-900/50 dark:bg-green-900/20 dark:text-green-100',
  warn: 'border-amber-200 bg-amber-50 text-amber-900 dark:border-amber-900/50 dark:bg-amber-900/20 dark:text-amber-100',
  destructive:
    'border-red-600 bg-red-200 text-red-900 dark:border-red-900/50 dark:bg-red-900/20 dark:text-red-100',
};

const variantIcons: Record<AlertVariant, React.ElementType> = {
  info: Info,
  success: CheckCircle2,
  warn: AlertTriangle,
  destructive: AlertCircle,
};

export const Alert = ({
  title,
  description,
  children,
  variant = 'info',
  className,
}: AlertProps) => {
  const Icon = variantIcons[variant];

  return (
    <AlertContainer className={cn('my-6', variantStyles[variant], className)}>
      <Icon className="h-4 w-4" />
      {title && <AlertTitle>{title}</AlertTitle>}
      <AlertDescription>{description || children}</AlertDescription>
    </AlertContainer>
  );
};
