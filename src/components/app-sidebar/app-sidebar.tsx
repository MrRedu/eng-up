import { Sidebar } from '@/components/ui/sidebar';
import { HeaderSidebar } from './header-sidebar';
import { FooterSidebar } from './footer-sidebar';
import { ContentSidebar } from './content-sidebar';

export function AppSidebar() {
  return (
    <Sidebar className="border-none">
      <HeaderSidebar />
      <ContentSidebar />
      <FooterSidebar />
    </Sidebar>
  );
}
