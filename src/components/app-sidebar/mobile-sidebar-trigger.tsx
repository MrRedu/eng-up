'use client';

import * as React from 'react';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { useIsMobile } from '@/hooks/use-mobile';

export function MobileSidebarTrigger() {
  const isMobile = useIsMobile();
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      // Mostrar cuando el scroll supera el 75% de la altura de la pantalla
      if (scrollY > windowHeight * 0.75) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isMobile || !isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-in fade-in slide-in-from-bottom-2 duration-400 ">
      <SidebarTrigger className="size-12 rounded-full border bg-background [&_svg]:size-6 transition-all active:scale-95 cursor-pointer" />
    </div>
  );
}
