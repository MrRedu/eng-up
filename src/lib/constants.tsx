import { Home, Book, Type, Layers, LucideIcon } from 'lucide-react';

export interface NavLeaf {
  title: string;
  url: string;
}

export interface NavSubItem {
  title: string;
  url?: string;
  subItems?: NavLeaf[];
}

export interface NavItem {
  title: string;
  url?: string;
  icon?: LucideIcon;
  isActive?: boolean;
  subItems?: (NavSubItem | NavLeaf)[];
}

export interface NavGroup {
  title: string;
  items: NavItem[];
}

export const NAVIGATION_DATA: NavGroup[] = [
  {
    title: 'Navegación',
    items: [
      { title: 'Inicio', url: '/', icon: Home },
      { title: 'Ejemplos MDX', url: '/examples', icon: Book },
    ],
  },
  {
    title: 'Gramática',
    items: [
      {
        title: 'Tiempos Verbales',
        icon: Type,
        isActive: true,
        subItems: [
          {
            title: 'Presente',
            subItems: [
              { title: 'Simple', url: '/grammar/present-simple' },
              { title: 'Continuo', url: '/grammar/present-continuous' },
              { title: 'Perfecto', url: '/grammar/present-perfect' },
            ],
          },
          {
            title: 'Pasado',
            subItems: [
              { title: 'Simple', url: '/grammar/past-simple' },
              { title: 'Continuo', url: '/grammar/past-continuous' },
              { title: 'Perfecto', url: '/grammar/past-perfect' },
            ],
          },
          {
            title: 'Futuro',
            subItems: [
              { title: 'Simple', url: '/grammar/future-simple' },
              { title: 'Continuo', url: '/grammar/future-continuous' },
              { title: 'Perfecto', url: '/grammar/future-perfect' },
            ],
          },
        ],
      },
      {
        title: 'Ejemplo 2 Niveles',
        icon: Layers,
        subItems: [
          { title: 'Subtema A', url: '#abc' },
          { title: 'Subtema B', url: '#def' },
        ],
      },
    ],
  },
];
