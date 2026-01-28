import Link from 'next/link';
import { NAVIGATION_DATA, NavLeaf } from '@/lib/constants';
import { ChevronRight } from 'lucide-react';

export default function TopicsPage() {
  return (
    <div className="max-w-5xl mx-auto space-y-8">
      <div className="space-y-2 text-center md:text-left">
        <h1 className="text-3xl font-bold tracking-tight">Glosario de Temas</h1>
        <p className="text-muted-foreground">
          Explora todos los temas disponibles. Haz clic en cualquier tema para
          ver tus notas.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {NAVIGATION_DATA.filter((group) => group.title !== 'Navegación').map(
          (group) => (
            <div key={group.title} className="space-y-4">
              <h2 className="text-xl font-semibold border-b pb-2 text-primary">
                {group.title}
              </h2>
              <div className="grid gap-6">
                {group.items.map((item) => (
                  <div key={item.title} className="space-y-3">
                    <h3 className="text-sm font-bold text-foreground flex items-center gap-2 uppercase tracking-wide">
                      {item.icon && (
                        <item.icon className="h-4 w-4 text-primary" />
                      )}
                      {item.title}
                    </h3>
                    <div className="grid gap-1">
                      {item.subItems?.map((sub) => {
                        if ('subItems' in sub) {
                          return (
                            <div
                              key={sub.title}
                              className="pl-4 space-y-1 my-2"
                            >
                              <span className="text-[10px] font-black text-muted-foreground/50 uppercase tracking-tighter">
                                {sub.title}
                              </span>
                              <div className="grid gap-1 border-l pl-3 ml-1">
                                {sub.subItems?.map((leaf: NavLeaf) => (
                                  <Link
                                    key={leaf.url}
                                    href={leaf.url}
                                    className="flex items-center justify-between py-1 px-2 rounded hover:bg-accent transition-colors group"
                                  >
                                    <span className="text-sm text-foreground/80 group-hover:text-foreground">
                                      {leaf.title}
                                    </span>
                                    <ChevronRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                                  </Link>
                                ))}
                              </div>
                            </div>
                          );
                        }
                        return (
                          <Link
                            key={sub.url}
                            href={sub.url!}
                            className="flex items-center justify-between p-2 rounded-md hover:bg-accent transition-colors group border border-transparent hover:border-border"
                          >
                            <span className="text-sm font-medium">
                              {sub.title}
                            </span>
                            <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ),
        )}
      </div>
    </div>
  );
}
