import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Providers } from '@/components/Providers';
import { AppSidebar } from '@/components/AppSidebar';
import { Header } from '@/components/Header';
import { Search } from '@/components/Search';
import { SidebarInset } from '@/components/ui/sidebar';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Eng-Up | My English Learning Notes',
  description:
    'A virtual backup for my English notes, tracking my progress and topics learned over 5 months.',
  keywords: ['English', 'Learning', 'Grammar', 'Notes', 'Backup'],
  authors: [],
  creator: '',
  publisher: '',
  openGraph: undefined,
  twitter: undefined,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-sans`}
      >
        <Providers>
          <AppSidebar />
          <SidebarInset className="bg-sidebar">
            <div className="relative bg-background mx-2 my-2 border shadow-sm rounded-xl flex flex-col flex-1 min-h-screen">
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
