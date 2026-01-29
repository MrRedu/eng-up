import type { Metadata } from 'next';
import './globals.css';
import { Geist_Mono, Sora } from 'next/font/google';
import { Providers } from '@/components/Providers';
import { AppSidebar } from '@/components/app-sidebar/app-sidebar';
import { Header } from '@/components/Header';
import { Search } from '@/components/Search';
import { SidebarInset } from '@/components/ui/sidebar';

const soraSans = Sora({
  variable: '--font-sora-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    default: 'Eng-Up | Gramática Inglesa Interactiva',
    template: '%s | Eng-Up',
  },
  description:
    'Tu cuaderno digital de notas de inglés. Aprende gramática con estructuras claras, ejemplos prácticos y lecciones interactivas para hablantes de español.',
  keywords: [
    'aprender inglés',
    'gramática inglesa',
    'notas de inglés',
    'inglés para hispanohablantes',
    'tiempos verbales',
    'verbos ingleses',
    'recursos educativos',
  ],
  authors: [{ name: 'Eduardo R.', url: 'https://github.com/MrRedu' }],
  creator: 'Eduardo R.',
  publisher: 'Eduardo R.',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://eng-up.vercel.app',
    title: 'Eng-Up | Gramática Inglesa Interactiva',
    description:
      'Aprende gramática inglesa de forma sencilla y estructurada con nuestro cuaderno digital interactivo.',
    siteName: 'Eng-Up',
    images: [
      {
        url: '/og-1920x1080.webp',
        width: 1920,
        height: 1080,
        alt: 'Eng-Up | Gramática Inglesa Interactiva',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Eng-Up | Notas de Gramática Inglesa',
    description:
      'Mejora tu nivel de inglés con notas claras y ejemplos prácticos diseñados para hispanohablantes.',
    // creator: '@MrRedu_Dev',
    images: [
      {
        url: '/og-1920x1080.webp',
        width: 1920,
        height: 1080,
        alt: 'Eng-Up | Gramática Inglesa Interactiva',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${soraSans.variable} ${geistMono.variable} antialiased font-sans bg-sidebar`}
      >
        <Providers>
          <AppSidebar />
          <SidebarInset className="bg-sidebar max-w-7xl mx-auto">
            <div className="relative bg-background mx-2 my-2 border shadow-sm rounded-xl flex flex-col flex-1">
              <Header />
              <main className="flex-1 p-6 md:p-8">{children}</main>
            </div>
            <Search />
          </SidebarInset>
        </Providers>
      </body>
    </html>
  );
}
