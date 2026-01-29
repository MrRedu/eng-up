'use client';
import { ChevronRight } from 'lucide-react';
import { NAVIGATION_DATA, NavItem, NavSubItem, NavLeaf } from '@/lib/constants';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import {
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton,
} from '@/components/ui/sidebar';
import { ScrollArea } from '../ui/scroll-area';
import Link from 'next/link';

export const ContentSidebar = () => {
  return (
    <SidebarContent>
      <ScrollArea className="h-full">
        {NAVIGATION_DATA.map((group) => (
          <SidebarGroup key={group.title}>
            <SidebarGroupLabel>{group.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {group.items.map((item: NavItem) => (
                  <SidebarMenuItem key={item.title}>
                    {item.subItems ? (
                      <Collapsible
                        defaultOpen={item.isActive}
                        className="group/collapsible"
                      >
                        <CollapsibleTrigger asChild>
                          <SidebarMenuButton tooltip={item.title}>
                            {item.icon && <item.icon className="h-4 w-4" />}
                            <span>{item.title}</span>
                            <ChevronRight className="ml-auto h-4 w-4 transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                          </SidebarMenuButton>
                        </CollapsibleTrigger>
                        <CollapsibleContent>
                          <SidebarMenuSub>
                            {item.subItems.map(
                              (subItem: NavSubItem | NavLeaf) => (
                                <SidebarMenuItem key={subItem.title}>
                                  {'subItems' in subItem ? (
                                    <Collapsible className="group/sub-collapsible">
                                      <CollapsibleTrigger asChild>
                                        <SidebarMenuSubButton className="flex w-full items-center justify-between py-2 cursor-pointer">
                                          <span>{subItem.title}</span>
                                          <ChevronRight className="h-3 w-3 transition-transform duration-200 group-data-[state=open]/sub-collapsible:rotate-90" />
                                        </SidebarMenuSubButton>
                                      </CollapsibleTrigger>
                                      <CollapsibleContent>
                                        <SidebarMenuSub className="ml-2 border-l pl-2">
                                          {subItem.subItems?.map(
                                            (leaf: NavLeaf) => (
                                              <SidebarMenuSubItem
                                                key={leaf.title}
                                              >
                                                <SidebarMenuSubButton asChild>
                                                  <Link href={leaf.url}>
                                                    <span>{leaf.title}</span>
                                                  </Link>
                                                </SidebarMenuSubButton>
                                              </SidebarMenuSubItem>
                                            ),
                                          )}
                                        </SidebarMenuSub>
                                      </CollapsibleContent>
                                    </Collapsible>
                                  ) : (
                                    <SidebarMenuSubButton asChild>
                                      <Link href={subItem.url || '#'}>
                                        <span>{subItem.title}</span>
                                      </Link>
                                    </SidebarMenuSubButton>
                                  )}
                                </SidebarMenuItem>
                              ),
                            )}
                          </SidebarMenuSub>
                        </CollapsibleContent>
                      </Collapsible>
                    ) : (
                      <SidebarMenuButton asChild tooltip={item.title}>
                        <Link href={item.url!}>
                          {item.icon && <item.icon className="h-4 w-4" />}
                          <span>{item.title}</span>
                        </Link>
                      </SidebarMenuButton>
                    )}
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </ScrollArea>
    </SidebarContent>
  );
};
