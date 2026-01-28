export function GrammarExample({
  structure,
  examples,
}: {
  structure: string;
  examples: { type: string; text: string; translation: string }[];
}) {
  return (
    <div className="my-8 rounded-xl border bg-muted/30 p-6">
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
              <span className="text-xs font-medium text-primary/70">
                {ex.type}
              </span>
              <span className="text-base font-medium">{ex.text}</span>
              <span className="text-sm text-muted-foreground italic">
                {ex.translation}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
