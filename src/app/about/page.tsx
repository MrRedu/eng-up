import { Typography } from '@/components/ui/typography';
import { Separator } from '@/components/separator-component';
import { Info, Code, Users, ShieldAlert, Heart } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-12 py-8">
      {/* Header Section */}
      <div className="text-center space-y-4">
        <Typography
          variant="h1"
          className="text-4xl font-extrabold tracking-tight lg:text-5xl"
        >
          Sobre Eng-Up
        </Typography>
        <Typography
          variant="p"
          className="text-xl text-muted-foreground max-w-2xl mx-auto"
        >
          Una plataforma dedicada a simplificar el aprendizaje de la gramática
          inglesa a través de una estructura clara, interactiva y moderna.
        </Typography>
      </div>

      <Separator variant="gradient" />

      {/* Objective Section */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-primary/10 text-primary">
            <Info className="h-6 w-6" />
          </div>
          <Typography variant="h2" className="border-none mt-0">
            Nuestro Objetivo
          </Typography>
        </div>
        <Typography variant="p">
          Eng-Up nació de la necesidad de tener un recurso de consulta rápido y
          visualmente atractivo. Creemos que la gramática no tiene por qué ser
          aburrida ni estar enterrada en libros pesados; puede ser accesible,
          digital e interactiva.
        </Typography>
      </section>

      {/* Team / Development */}
      <div className="grid md:grid-cols-2 gap-12">
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-primary/10 text-primary">
              <Code className="h-6 w-6" />
            </div>
            <Typography variant="h2" className="border-none mt-0">
              Desarrollo
            </Typography>
          </div>
          <Typography variant="p">
            Este proyecto fue diseñado y desarrollado con el fin de proporcionar
            una herramienta de código abierto para estudiantes autodidactas y
            entusiastas del idioma inglés.
          </Typography>
          <Typography variant="p" className="font-semibold text-primary italic">
            — Desarrollado por el equipo de Eng-Up.
          </Typography>
        </section>

        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-primary/10 text-primary">
              <Users className="h-6 w-6" />
            </div>
            <Typography variant="h2" className="border-none mt-0">
              Verificación
            </Typography>
          </div>
          <Typography variant="p">
            Todo el contenido gramatical ha sido revisado y verificado por
            hablantes nativos y profesionales del lenguaje para asegurar la
            mayor precisión posible en los ejemplos y explicaciones.
          </Typography>
        </section>
      </div>

      <Separator />

      {/* Acknowledgements Section */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-primary/10 text-primary">
            <Heart className="h-6 w-6" />
          </div>
          <Typography variant="h2" className="border-none mt-0">
            Agradecimientos Especiales
          </Typography>
        </div>
        <Typography variant="p">
          Queremos expresar nuestro más profundo agradecimiento a las personas
          que aceptaron el reto de verificar y validar el contenido gramatical
          de esta plataforma. Su compromiso con la precisión ha sido fundamental
          para que este proyecto pueda ser una herramienta de confianza para
          todos los estudiantes.
        </Typography>
      </section>

      <Separator />

      {/* Legal / Disclaimer */}
      <section className="bg-muted/50 p-6 rounded-xl border space-y-4">
        <div className="flex items-center gap-3 text-destructive">
          <ShieldAlert className="h-5 w-5" />
          <Typography variant="h3" className="mt-0 font-bold">
            Aviso Legal
          </Typography>
        </div>
        <Typography
          variant="p"
          className="text-sm leading-relaxed text-muted-foreground"
        >
          La información proporcionada en Eng-Up tiene fines estrictamente
          educativos. Aunque nos esforzamos por mantener la precisión, no nos
          hacemos responsables del uso que los usuarios den a esta información
          ni de las consecuencias derivadas de malentendidos gramaticales en
          contextos profesionales o académicos.
        </Typography>
      </section>

      <footer className="text-center pt-8 text-muted-foreground text-xs">
        <p>
          &copy; {new Date().getFullYear()} Eng-Up Project. Casi todos los
          derechos reservados.
        </p>
      </footer>
    </div>
  );
}
