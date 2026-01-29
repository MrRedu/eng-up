import { Typography } from '@/components/ui/typography';
import { CHANGELOG_DATA } from '@/lib/changelog-data';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/separator-component';
import {
  GitBranch,
  GitCommit,
  CheckCircle2,
  FileText,
  Layout,
} from 'lucide-react';

const typeIcons = {
  feat: <CheckCircle2 className="h-4 w-4 text-green-500" />,
  fix: <GitCommit className="h-4 w-4 text-red-500" />,
  refactor: <GitBranch className="h-4 w-4 text-blue-500" />,
  style: <Layout className="h-4 w-4 text-purple-500" />,
  docs: <FileText className="h-4 w-4 text-amber-500" />,
};

export default function ChangelogPage() {
  return (
    <div className="max-w-3xl mx-auto py-10 space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="space-y-4">
        <Typography variant="h1">Changelog</Typography>
        <Typography variant="p" className="text-muted-foreground text-center">
          Registro histórico de actualizaciones y cambios técnicos de Eng-Up.
        </Typography>
      </div>

      <Separator variant="gradient" />

      <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-px before:h-full before:w-0.5 before:bg-linear-to-b before:from-border before:via-border before:to-transparent">
        {CHANGELOG_DATA.map((entry) => (
          <div
            key={entry.version}
            className="relative flex items-start pl-12 group"
          >
            {/* Timeline dot */}
            <div className="absolute left-0 mt-1.5 flex h-10 w-10 items-center justify-center rounded-full border bg-background shadow-sm ring-8 ring-background group-hover:border-primary/50 transition-colors">
              {typeIcons[entry.type]}
            </div>

            <div className="flex-1 space-y-2">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-3">
                  <Badge
                    variant="outline"
                    className="font-mono text-xs font-bold uppercase tracking-wider"
                  >
                    {entry.version}
                  </Badge>
                  <Typography
                    variant="h3"
                    className="mt-0! text-lg font-bold tracking-tight"
                  >
                    {entry.title}
                  </Typography>
                </div>
                <time className="text-xs font-medium text-muted-foreground bg-muted/30 px-2 py-1 rounded-md border">
                  {new Date(entry.date).toLocaleDateString('es-ES', {
                    day: 'numeric',
                    month: 'short',
                    year: 'numeric',
                  })}
                </time>
              </div>

              <Typography
                variant="p"
                className="text-muted-foreground leading-relaxed"
              >
                {entry.description}
              </Typography>
            </div>
          </div>
        ))}
      </div>

      <div className="pt-10 text-center">
        <Typography variant="small" className="text-muted-foreground italic">
          No hay más registros de cambios por ahora.
        </Typography>
      </div>
    </div>
  );
}
