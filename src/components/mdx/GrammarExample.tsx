import { cn } from '@/lib/utils';
import { Badge } from '../ui/badge';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { Typography } from '../ui/typography';

export function GrammarExample({
  structure,
  examples,
}: {
  structure?: string | { label?: string; value: string }[];
  examples: { type: string; text: string; translation: string }[];
}) {
  const structures =
    typeof structure === 'string' ? [{ value: structure }] : structure;

  return (
    <div className="rounded-xl border bg-muted/30 p-6">
      {structures && (
        <div className="mb-6 space-y-4">
          {structures.length > 1 && (
            <Typography variant="h4" className={cn('text-sm! uppercase')}>
              Estructura Gramatical
            </Typography>
          )}
          {structures.map((s, idx) => (
            <div
              key={idx}
              className={cn(
                'space-y-2',
                structures.length > 1 ? 'md:pl-4' : '',
              )}
            >
              <Typography
                variant="h4"
                className={cn('text-sm! uppercase text-muted-foreground/70')}
              >
                {s.label ||
                  (structures.length > 1
                    ? `Estructura ${idx + 1}`
                    : 'Estructura Gramatical')}
              </Typography>
              <Typography variant="code">{s.value}</Typography>
            </div>
          ))}
        </div>
      )}
      <div className="space-y-4">
        <Typography variant="h4" className={cn('text-sm! uppercase')}>
          Ejemplos de uso
        </Typography>
        <div className="grid gap-3 md:pl-4">
          {examples.map((ex, i) => (
            <div
              key={i}
              className="flex flex-col border-b border-border/50 pb-2 last:border-0 last:pb-0"
            >
              <Badge variant="outline">{ex.type}</Badge>
              <Popover>
                <PopoverTrigger asChild>
                  <Typography className="pl-2 mt-0! font-medium cursor-pointer underline underline-offset-4 decoration-dotted decoration-primary/30">
                    {ex.text}
                  </Typography>
                </PopoverTrigger>
                <PopoverContent
                  align="start"
                  className="w-fit max-w-70 p-3 text-sm italic"
                >
                  {ex.translation}
                </PopoverContent>
              </Popover>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
