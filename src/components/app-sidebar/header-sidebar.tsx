import Image from 'next/image';
import Link from 'next/link';
import { SidebarHeader } from '../ui/sidebar';
import { Typography } from '../ui/typography';

export const HeaderSidebar = () => {
  return (
    <SidebarHeader className="p-4">
      <Link href="/" className="flex items-center gap-2">
        <Image src="/logo.svg" alt="Logo" width={40} height={40} />
        <Typography variant="h1" className="text-xl">
          Eng-Up
        </Typography>
      </Link>
    </SidebarHeader>
  );
};
