import { Badge } from '../ui/badge';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { Typography } from '../ui/typography';

export function GrammarExample({
  structure,
  examples,
}: {
  structure: string;
  examples: { type: string; text: string; translation: string }[];
}) {
  return (
    <div className="rounded-xl border bg-muted/30 p-6">
      <div className="mb-4">
        <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
          Estructura Gramatical
        </h4>
        <code className="mt-2 block rounded bg-primary/10 px-4 py-2 text-lg font-mono text-primary">
          {structure}
        </code>
      </div>
      <div className="space-y-4">
        <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
          Ejemplos
        </h4>
        <div className="grid gap-3">
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
