import {
  Home,
  Book,
  Type,
  Layers,
  LucideIcon,
  Bookmark,
  Globe,
  Zap,
  HelpCircle,
  MessageSquare,
} from 'lucide-react';

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
      { title: 'Glosario de Temas', url: '/topics', icon: Book },
    ],
  },
  {
    title: 'Fundamentos',
    items: [
      {
        title: 'Básicos',
        icon: Bookmark,
        subItems: [
          { title: 'Cardinal numbers', url: '/topics/cardinal-numbers' },
          { title: 'Ordinal numbers', url: '/topics/ordinal-numbers' },
          {
            title: 'Definite and indefinite articles',
            url: '/topics/articles',
          },
          { title: 'Plural nouns', url: '/topics/plural-nouns' },
          { title: 'There is / There are', url: '/topics/there-is-there-are' },
          {
            title: 'Countable & Uncountable',
            url: '/topics/countable-uncountable',
          },
          { title: 'Much / Many', url: '/topics/much-many' },
          { title: 'Saxon genitive', url: '/topics/saxon-genitive' },
        ],
      },
      {
        title: 'Pronombres y Adjetivos',
        icon: Globe,
        subItems: [
          {
            title: 'Possessive adjectives',
            url: '/topics/possessive-adjectives',
          },
          { title: 'Possessive pronouns', url: '/topics/possessive-pronouns' },
          { title: 'Object pronouns', url: '/topics/object-pronouns' },
          { title: 'Reflexive pronouns', url: '/topics/reflexive-pronouns' },
          { title: 'Comparative & Superlative', url: '/topics/comparatives' },
          {
            title: 'Inferiority comparison',
            url: '/topics/comparatives-inferiority',
          },
        ],
      },
    ],
  },
  {
    title: 'Gramática Central',
    items: [
      {
        title: 'Tiempos Verbales',
        icon: Type,
        isActive: true,
        subItems: [
          {
            title: 'Presente',
            subItems: [
              { title: 'Simple (do/does)', url: '/grammar/present-simple' },
              {
                title: 'Continuous (-ing)',
                url: '/grammar/present-continuous',
              },
              { title: 'Perfect', url: '/grammar/present-perfect' },
              {
                title: 'Perfect Continuous',
                url: '/grammar/present-perfect-continuous',
              },
              { title: 'Verb to have', url: '/grammar/present-verb-to-have' },
            ],
          },
          {
            title: 'Pasado',
            subItems: [
              { title: 'Simple (was/were)', url: '/grammar/past-be' },
              {
                title: 'Simple (Regular/Irregular)',
                url: '/grammar/past-simple',
              },
              { title: 'Continuous', url: '/grammar/past-continuous' },
              { title: 'Perfect', url: '/grammar/past-perfect' },
              { title: 'Used to / Be used to', url: '/grammar/used-to' },
            ],
          },
          {
            title: 'Futuro',
            subItems: [
              { title: 'Simple (Will)', url: '/grammar/future-simple' },
              { title: 'Going to', url: '/grammar/future-going-to' },
              { title: 'Continuous', url: '/grammar/future-continuous' },
              { title: 'Perfect', url: '/grammar/future-perfect' },
              {
                title: 'Perfect Continuous',
                url: '/grammar/future-perfect-continuous',
              },
            ],
          },
        ],
      },
      {
        title: 'Modales y Auxiliares',
        icon: Zap,
        subItems: [
          { title: 'Can / Could / Must', url: '/topics/modals-basic' },
          { title: 'Have to', url: '/topics/modal-have-to' },
          {
            title: 'Can / Could / Able to / May / Might',
            url: '/topics/modals-ability-possibility',
          },
          { title: 'Should / Ought to', url: '/topics/modals-advice' },
          { title: "Auxiliar 'Did'", url: '/topics/auxiliary-did' },
        ],
      },
    ],
  },
  {
    title: 'Estructuras Avanzadas',
    items: [
      {
        title: 'Condicionales',
        icon: HelpCircle,
        subItems: [
          { title: 'Zero Conditional', url: '/topics/zero-conditional' },
          { title: 'First Conditional', url: '/topics/first-conditional' },
          { title: 'Second Conditional', url: '/topics/second-conditional' },
          { title: 'Third Conditional', url: '/topics/third-conditional' },
          {
            title: "Subjunctive after 'Wish'",
            url: '/topics/subjunctive-wish',
          },
        ],
      },
      {
        title: 'Sintaxis y Discurso',
        icon: MessageSquare,
        subItems: [
          { title: 'Reported Speech', url: '/topics/reported-speech' },
          { title: 'WH Questions', url: '/topics/wh-questions' },
          { title: 'Tag Questions', url: '/topics/tag-questions' },
          { title: 'Negative Questions', url: '/topics/negative-questions' },
          { title: 'Word Order', url: '/topics/word-order' },
          { title: 'Causative Form', url: '/topics/causative-form' },
        ],
      },
    ],
  },
  {
    title: 'Expresiones y Get',
    items: [
      {
        title: "Uso de 'Get'",
        icon: Zap,
        subItems: [
          { title: 'Get ☠', url: '/topics/get-basic' },
          { title: "Phrasal verb 'Get'", url: '/topics/phrasal-verb-get' },
          { title: 'Get used to', url: '/topics/get-used-to' },
        ],
      },
      {
        title: 'Expresiones',
        icon: Layers,
        subItems: [
          { title: 'Have as an idiom', url: '/topics/have-idioms' },
          { title: 'Adverbs of frequency', url: '/topics/adverbs-frequency' },
          { title: 'Time expressions', url: '/topics/time-expressions' },
          { title: 'Either / Neither', url: '/topics/either-neither' },
          { title: 'Emphatic form', url: '/topics/emphatic-form' },
        ],
      },
    ],
  },
];
