# Eng-Up 🚀

**Eng-Up** es una plataforma interactiva diseñada como un cuaderno de notas digital para estudiantes de inglés. Estructurada para ser rápida, moderna y visualmente atractiva, permite a los usuarios (especialmente hispanohablantes) repasar gramática inglesa de manera eficiente.

![Eng-Up Preview](/public/og-1920x1080.webp)

## ✨ Características Principales

- **Interactividad Total**: Traducciones inteligentes a través de Popovers. Haz clic en las frases para ver su significado sin saturar la vista.
- **Roadmap de Aprendizaje**: Seguimiento de progreso dinámico para tiempos verbales, con guardado automático en `localStorage`.
- **Búsqueda Ultra-rápida**: Acceso instantáneo a cualquier tema mediante la paleta de comandos con `⌘ K`.
- **Navegación Jerárquica**: Sidebar organizado por niveles (Fundamentos, Gramática Central, Estructuras Avanzadas).
- **Contenido en MDX**: Definiciones claras y estructuras gramaticales potentes con componentes personalizados.
- **Diseño Premium**: Interfaz moderna, minimalista y responsiva construida con Tailwind CSS y componentes de Shadcn/UI.

## 🛠️ Stack Tecnológico

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Lenguaje**: [TypeScript](https://www.typescriptlang.org/)
- **Estilos**: [Tailwind CSS](https://tailwindcss.com/)
- **Componentes UI**: [Shadcn/UI](https://ui.shadcn.com/)
- **Manejo de Contenido**: [MDX](https://mdxjs.com/)
- **Iconos**: [Lucide React](https://lucide.dev/)

## 🚀 Instalación y Desarrollo

1. **Clonar el repositorio:**

   ```bash
   git clone https://github.com/MrRedu/eng-up.git
   cd eng-up
   ```

2. **Instalar dependencias:**

   ```bash
   npm install
   ```

3. **Ejecutar el servidor de desarrollo:**
   ```bash
   npm run dev
   ```
   La aplicación estará disponible en [http://localhost:3000](http://localhost:3000).

## 📂 Estructura del Proyecto

- `src/app/`: Rutas de la aplicación (Gramática, Temas, Roadmap, About).
- `src/components/`: Componentes de interfaz y componentes específicos de MDX.
- `src/lib/constants.tsx`: La "fuente de verdad" donde se define toda la estructura de navegación y temas.
- `src/mdx-components.tsx`: Mapeo de etiquetas HTML a componentes personalizados para una legibilidad perfecta.

## 📝 Personalización

Para agregar nuevos temas, simplemente debes:

1. Crear el archivo `.mdx` en la ruta correspondiente dentro de `src/app/`.
2. Registrar el nuevo tema en `src/lib/constants.tsx` dentro del objeto `NAVIGATION_DATA`.

## 🤝 Créditos y Colaboración

Este proyecto es de código abierto. Agradecimientos especiales a todas las personas que han colaborado verificando la precisión de la gramática y contribuyendo con ejemplos prácticos.

Desarrollado con ❤️ por [Eduardo R. (MrRedu)](https://github.com/MrRedu).

---

_Nota: Este proyecto fue diseñado para ser un recurso educativo personal extendible a la comunidad._
