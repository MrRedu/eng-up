import Link from 'next/link';
import { SidebarFooter, SidebarMenuButton } from '../ui/sidebar';
import { Info } from 'lucide-react';

export const FooterSidebar = () => {
  return (
    <SidebarFooter>
      <SidebarMenuButton asChild tooltip="Información">
        <Link href="/about">
          <Info className="h-4 w-4" />
          <span>Información</span>
        </Link>
      </SidebarMenuButton>
    </SidebarFooter>
  );
};
