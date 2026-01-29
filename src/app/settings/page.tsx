import { Typography } from '@/components/ui/typography';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/separator-component';
import { History, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { CHANGELOG_DATA } from '@/lib/changelog-data';

export default function SettingsPage() {
  const currentVersion = CHANGELOG_DATA[0]?.version || 'v0.0.0';

  return (
    <div className="max-w-3xl mx-auto py-10 space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="space-y-2">
        <Typography variant="h1">Configuración</Typography>
        <Typography variant="p" className="text-muted-foreground text-center">
          Ajustes generales de la plataforma. (Más opciones próximamente).
        </Typography>
      </div>

      <Separator />

      <section className="space-y-4">
        <div className="flex items-center justify-between p-4 border rounded-xl bg-card">
          <div className="flex items-center gap-4">
            <div className="p-2 rounded-full bg-primary/10 text-primary">
              <History className="h-5 w-5" />
            </div>
            <div className="space-y-0.5">
              <Typography variant="p" className="font-medium mt-0!">
                Registro de cambios
              </Typography>
              <Typography variant="small" className="text-muted-foreground">
                Consulta las últimas actualizaciones y mejoras técnicas.
              </Typography>
            </div>
          </div>
          <Button variant="ghost" size="icon" asChild>
            <Link href="/settings/changelog">
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      <div className="pt-8 text-center">
        <Typography variant="small" className="text-muted-foreground">
          Versión actual: {currentVersion}
        </Typography>
      </div>
    </div>
  );
}
