'use client';

import * as React from 'react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { SidebarProvider } from '@/components/ui/sidebar';

interface ProvidersProps {
  children: React.ReactNode;
  isSidebarOpen?: boolean;
}

export function Providers({ children, isSidebarOpen }: ProvidersProps) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <SidebarProvider defaultOpen={isSidebarOpen}>{children}</SidebarProvider>
    </NextThemesProvider>
  );
}
