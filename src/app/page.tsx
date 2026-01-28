import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { BookOpen, Search, Clock } from 'lucide-react';

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto space-y-12">
      <section className="text-center space-y-4 py-12">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl text-primary">
          Eng-Up
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Tu cuaderno de notas de inglés, transformado en una plataforma digital
          moderna y rápida.
        </p>
        <div className="flex justify-center gap-4 pt-4">
          <Button asChild size="lg">
            <Link href="/topics">Ver glosario</Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="/topics">Explorar temas</Link>
          </Button>
        </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="p-6 border rounded-xl bg-card space-y-3">
          <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
            <BookOpen className="h-5 w-5" />
          </div>
          <h3 className="text-xl font-semibold">Organizado</h3>
          <p className="text-muted-foreground text-sm">
            Estructura tus notas con MDX para una legibilidad perfecta.
          </p>
        </div>

        <div className="p-6 border rounded-xl bg-card space-y-3">
          <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
            <Search className="h-5 w-5" />
          </div>
          <h3 className="text-xl font-semibold">Búsqueda Rápida</h3>
          <p className="text-muted-foreground text-sm">
            Presiona{' '}
            <kbd className="px-1.5 py-0.5 border rounded bg-muted">⌘ K</kbd>{' '}
            para encontrar cualquier tema al instante.
          </p>
        </div>

        <div className="p-6 border rounded-xl bg-card space-y-3">
          <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
            <Clock className="h-5 w-5" />
          </div>
          <h3 className="text-xl font-semibold">Progreso</h3>
          <p className="text-muted-foreground text-sm">
            Respaldo de 5 meses de estudio, listo para el nivel conversacional.
          </p>
        </div>
      </div>
    </div>
  );
}
