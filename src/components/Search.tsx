'use client';

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from '@/components/ui/command';
import { useRouter } from 'next/navigation';
import { NAVIGATION_DATA, NavItem } from '@/lib/constants';
import { cn } from '@/lib/utils';
import { useEffect, useState, useCallback, Fragment } from 'react';

export function Search() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  const runCommand = useCallback((command: () => void) => {
    setOpen(false);
    command();
  }, []);

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput placeholder="Encuentra un tema (ej: Simple)..." />
      <CommandList className="max-h-[70svh]">
        <CommandEmpty>No se encontraron resultados.</CommandEmpty>

        {NAVIGATION_DATA.map((group, groupIndex) => (
          <Fragment key={group.title}>
            {groupIndex > 0 && <CommandSeparator />}
            {/* Primero renderizamos items de nivel 1 que son links directos (ej: Inicio) */}
            {group.items.some((i) => !i.subItems) && (
              <CommandGroup heading={group.title}>
                {group.items
                  .filter((i) => !i.subItems)
                  .map((item) => (
                    <CommandItem
                      key={item.url}
                      onSelect={() => runCommand(() => router.push(item.url!))}
                    >
                      {item.icon && <item.icon className="mr-2 size-4" />}
                      <span>{item.title}</span>
                    </CommandItem>
                  ))}
              </CommandGroup>
            )}

            {/* Luego renderizamos los items que tienen sub-niveles (ej: Tiempos Verbales) */}
            {group.items
              .filter((i) => i.subItems)
              .map((l1: NavItem, l1Index) => (
                <CommandGroup
                  key={`${l1.title}-${l1Index}`}
                  heading={
                    <div className="font-bold uppercase pt-2 flex items-center gap-2">
                      {l1.icon && <l1.icon className="size-4" />}
                      <span className="text-sm">{l1.title}</span>
                    </div>
                  }
                >
                  {l1.subItems?.map((l2, l2Index) => {
                    if ('subItems' in l2) {
                      // NIVEL 3: Caso Tiempos Verbales -> Presente -> Simple
                      return (
                        <Fragment key={`${l2.title}-${l2Index}`}>
                          <div
                            className={`pl-12 py-1 text-xs font-bold uppercase tracking-widest select-none ${l2Index > 0 ? 'mt-2' : ''}`}
                          >
                            <span className="font-semibold uppercase text-muted-foreground">
                              {l2.title}
                            </span>
                          </div>
                          {l2.subItems?.map((l3, l3Index) => (
                            <CommandItem
                              key={`${l3.url}-${l2Index}-${l3Index}`}
                              onSelect={() =>
                                runCommand(() => router.push(l3.url))
                              }
                              className={cn('pl-16! cursor-pointer')}
                            >
                              <span className="sr-only">{l2.title}</span>
                              {l3.title}
                            </CommandItem>
                          ))}
                        </Fragment>
                      );
                    } else {
                      // NIVEL 2: Caso Ejemplo -> Subtema A
                      return (
                        <CommandItem
                          key={`${l2.url}-${l2Index}`}
                          onSelect={() =>
                            runCommand(() => router.push(l2.url || '#'))
                          }
                        >
                          <span>{l2.title}</span>
                        </CommandItem>
                      );
                    }
                  })}
                </CommandGroup>
              ))}
          </Fragment>
        ))}
      </CommandList>
    </CommandDialog>
  );
}
