'use client';

import { Kbd } from '@/components/ui/kbd';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import { Moon, Sun } from 'lucide-react';

export function Header() {
  const { setTheme, theme } = useTheme();

  return (
    <header className="flex h-16 shrink-0 items-center justify-between border-b px-4">
      <div className="flex items-center gap-4">
        <SidebarTrigger />
        <div
          className="hidden md:flex flex-row items-center gap-2 border rounded-md px-3 py-1.5 text-muted-foreground bg-muted/50 cursor-pointer"
          onClick={() => {
            const e = new KeyboardEvent('keydown', { key: 'k', metaKey: true });
            document.dispatchEvent(e);
          }}
        >
          <span className="text-sm">Search notes...</span>
          <Kbd>⌘ K</Kbd>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        >
          <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </div>
    </header>
  );
}
