'use client';
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyTitle,
} from '@/components/ui/empty';
import { Kbd } from '@/components/ui/kbd';
import Link from 'next/link';

export default function NotFoundPage() {
  return (
    <div className="grid place-items-center h-[calc(100vh-240px)]">
      <Empty>
        <EmptyHeader>
          <EmptyTitle>#404 - No encontrado</EmptyTitle>
          <EmptyDescription>
            La página que buscas no ha sido encontrada. Intenta buscar lo que
            necesitas abajo.
          </EmptyDescription>
        </EmptyHeader>
        <EmptyContent>
          <div
            className="flex items-center gap-4 justify-between border rounded-md px-3 py-1.5 text-muted-foreground bg-muted/50 cursor-pointer w-full max-w-xs"
            onClick={() => {
              const e = new KeyboardEvent('keydown', {
                key: 'k',
                metaKey: true,
              });
              document.dispatchEvent(e);
            }}
          >
            <span className="text-sm whitespace-nowrap">Buscar tema...</span>
            <Kbd className="whitespace-nowrap">{`⌘ K`}</Kbd>
          </div>
          <EmptyDescription>
            ¿Necesitas ayuda? <Link href="#">Contacta a soporte</Link>
          </EmptyDescription>
        </EmptyContent>
      </Empty>
    </div>
  );
}
