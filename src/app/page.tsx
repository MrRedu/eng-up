import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import {
  BookOpen,
  SearchIcon,
  Zap,
  Globe,
  Heart,
  ArrowRight,
  Code,
  Users,
  ShieldCheck,
} from 'lucide-react';
import { Typography } from '@/components/ui/typography';
import { constructMetadata } from '@/lib/seo';

export const metadata = constructMetadata({
  title: 'Eng-Up | Gramática Inglesa Interactiva',
  description:
    'Domina la gramática inglesa con lecciones estructuradas, ejemplos interactivos y una experiencia de usuario premium.',
  keywords: [
    'aprender inglés',
    'gramática inglesa',
    'cuaderno digital',
    'inglés interactivo',
  ],
});

const FEATURES = [
  {
    icon: BookOpen,
    title: 'Lecciones Estructuradas',
    description:
      'Gramática explicada de forma lógica, desde lo básico hasta estructuras avanzadas.',
    color: 'text-blue-500',
    bg: 'bg-blue-500/10',
  },
  {
    icon: Zap,
    title: 'Ejemplos Dinámicos',
    description:
      'Cada regla incluye ejemplos con traducciones instantáneas para facilitar la comprensión.',
    color: 'text-yellow-500',
    bg: 'bg-yellow-500/10',
  },
  {
    icon: SearchIcon,
    title: 'Búsqueda Inteligente',
    description:
      'Encuentra cualquier tema en segundos usando el comando ⌘ K en toda la plataforma.',
    color: 'text-purple-500',
    bg: 'bg-purple-500/10',
  },
];

const COLLABORATORS = [
  {
    name: 'Eduardo R.',
    role: 'Developer & Creator',
    handle: '@MrRedu',
    avatar: 'https://github.com/MrRedu.png',
  },
  {
    name: 'Comunidad',
    role: 'Verificadores & Editores',
    handle: 'Eng-Up Team',
    avatar: '',
  },
];

export default function Home() {
  return (
    <div className="section space-y-16">
      {/* Hero Section */}
      <section className="py-12 w-full">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="mx-auto max-w-4xl text-center">
            <Image
              alt="Eng-Up Logo"
              className="mx-auto mb-6 w-14 md:mb-8 md:w-20 lg:mb-10 lg:w-16"
              src="/logo.svg"
              width={100}
              height={100}
            />
            <Typography
              variant="h1"
              className="mt-4 text-4xl leading-tight text-balance md:text-5xl lg:text-7xl lg:leading-[1.1]"
            >
              Eleva tu <span className="text-primary italic">Inglés</span> al
              siguiente nivel
            </Typography>
            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="h-12 rounded-full px-8 py-6 text-base font-medium"
              >
                <Link href="/topics">
                  Empezar a aprender
                  <ArrowRight className="ml-2 size-5" />
                </Link>
              </Button>
              <Button
                variant="secondary"
                size="lg"
                asChild
                className="h-12 rounded-full px-8 py-6 text-base font-medium"
              >
                <Link href="/about">
                  Conocer más
                  <ArrowRight className="ml-2 size-5" />
                </Link>
              </Button>
            </div>
            <div className="mt-10 lg:mt-12">
              <ul className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground lg:text-base">
                <li className="flex items-center gap-2.5 whitespace-nowrap">
                  <Zap className="size-5 text-primary" />
                  Lecciones Dinámicas
                </li>
                <li className="flex items-center gap-2.5 whitespace-nowrap">
                  <BookOpen className="size-5 text-primary" />
                  Estructuras Claras
                </li>
                <li className="flex items-center gap-2.5 whitespace-nowrap">
                  <ShieldCheck className="size-5 text-primary" />
                  Contenido Verificado
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="space-y-12">
        <div className="text-center space-y-4">
          <Typography variant="h2" className="border-none">
            ¿Por qué usar Eng-Up?
          </Typography>
          <Typography
            variant="p"
            className="text-muted-foreground max-w-2xl mx-auto italic"
          >
            Diseñamos cada lección pensando en la claridad visual y la retención
            del conocimiento.
          </Typography>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {FEATURES.map((feature, i) => (
            <div
              key={i}
              className="group p-8 border rounded-2xl bg-card hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div
                className={`h-12 w-12 rounded-xl ${feature.bg} ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
              >
                <feature.icon className="h-6 w-6" />
              </div>
              <Typography
                variant="h4"
                className="mb-2 uppercase tracking-wide text-sm font-bold"
              >
                {feature.title}
              </Typography>
              <Typography
                variant="p"
                className="text-muted-foreground text-sm leading-relaxed"
              >
                {feature.description}
              </Typography>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Topics / Roadmap Preview */}
      <section className="bg-muted/30 rounded-3xl p-8 md:p-12 border border-border">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="p-2 w-fit rounded-lg bg-primary/10 text-primary">
              <Globe className="h-6 w-6" />
            </div>
            <Typography variant="h2" className="border-none mt-0">
              Contenido Verificado
            </Typography>
            <Typography variant="p" className="text-muted-foreground">
              Todo nuestro contenido gramatical es revisado meticulosamente.
              Desde el <strong>Zero Conditional</strong> hasta el{' '}
              <strong>Reported Speech</strong>, puedes confiar en la precisión
              de nuestras notas.
            </Typography>
            <ul className="grid grid-cols-2 gap-3">
              {[
                'Tiempos Verbales',
                'Condicionales',
                'Modales',
                'Sintaxis',
                'Recursos',
                'Pronombres',
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm">
                  <ShieldCheck className="h-4 w-4 text-primary" />
                  {item}
                </li>
              ))}
            </ul>
            <Button variant="link" asChild className="px-0">
              <Link href="/roadmap" className="gap-2">
                Ver hoja de ruta completa <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="h-32 bg-card border rounded-2xl p-4 flex flex-col justify-end">
                <span className="text-2xl font-bold italic text-primary">
                  50+
                </span>
                <span className="text-[10px] uppercase font-bold text-muted-foreground">
                  Temas
                </span>
              </div>
              <div className="h-48 bg-primary rounded-2xl p-6 flex flex-col justify-between text-primary-foreground">
                <Zap className="h-8 w-8" />
                <span className="text-lg font-bold leading-tight">
                  Gramática que fluye
                </span>
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="h-48 bg-card border rounded-2xl p-6 flex flex-col justify-between">
                <SearchIcon className="h-8 w-8 text-muted-foreground" />
                <span className="text-lg font-bold leading-tight uppercase tracking-tighter">
                  Búsqueda Global
                </span>
              </div>
              <div className="h-32 bg-muted border rounded-2xl p-4 flex flex-col justify-end">
                <span className="text-2xl font-bold italic">100%</span>
                <span className="text-[10px] uppercase font-bold text-muted-foreground">
                  Gratis
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Collaborators Section */}
      <section className="space-y-12">
        <div className="text-center space-y-4">
          <div className="flex justify-center">
            <Heart className="h-10 w-10 text-destructive animate-pulse" />
          </div>
          <Typography variant="h2" className="border-none">
            Miembros & Colaboradores
          </Typography>
          <Typography
            variant="p"
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            Este proyecto crece gracias al esfuerzo de personas apasionadas por
            la educación y el desarrollo.
          </Typography>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {COLLABORATORS.map((member, i) => (
            <div
              key={i}
              className="flex items-center gap-4 p-4 border rounded-2xl bg-card shadow-sm hover:border-primary/50 transition-colors"
            >
              <div className="relative h-12 w-12 rounded-full overflow-hidden bg-muted border">
                {member.avatar ? (
                  <img
                    src={member.avatar}
                    alt={member.name}
                    // fill
                    className="object-cover"
                  />
                ) : (
                  <Users className="h-6 w-6 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-muted-foreground" />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <Typography
                  variant="large"
                  className="truncate leading-none mb-1"
                >
                  {member.name}
                </Typography>
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold text-primary uppercase tracking-tighter">
                    {member.role}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {member.handle}
                  </span>
                </div>
              </div>
              {member.handle.startsWith('@') && (
                <Button size="icon-xs" variant="ghost" asChild>
                  <Link
                    href={`https://github.com/${member.handle.replace('@', '')}`}
                    target="_blank"
                  >
                    <Code className="size-3" />
                  </Link>
                </Button>
              )}
            </div>
          ))}
        </div>

        <div className="bg-primary/5 border border-primary/20 p-8 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-6 max-w-4xl mx-auto">
          <div className="space-y-2">
            <Typography
              variant="h4"
              className="border-none mb-0 tracking-tight"
            >
              ¿Quieres colaborar?
            </Typography>
            <Typography
              variant="p"
              className="text-muted-foreground mt-0! text-sm italic"
            >
              Únete al desarrollo de este cuaderno digital en GitHub.
            </Typography>
          </div>
          <Button asChild variant="outline" className="rounded-full">
            <Link
              href="https://github.com/MrRedu/eng-up"
              target="_blank"
              className="gap-2"
            >
              <Code className="h-4 w-4" /> Ver Repositorio
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
