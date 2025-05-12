"use client";
import React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarSeparator,
} from "./ui/sidebar";
import {
  AreaChartIcon,
  BarChart,
  Calendar,
  ChevronDown,
  Contact,
  FileText,
  HelpCircle,
  Home,
  Inbox,
  PieChart,
  Plus,
  Projector,
  Search,
  Settings,
  User,
  Users,
} from "lucide-react";
import Link from "next/link";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./ui/collapsible";

const items = [
  {
    label: "Data",
    items: [
      {
        title: "Team",
        url: "/team",
        icon: Users,
      },
      {
        title: "Contacts Information",
        url: "/contacts",
        icon: Contact,
      },
    ],
  },

  {
    label: "Pages",
    items: [
      {
        title: "Profile Page",
        url: "/profile-page",
        icon: User,
      },
      {
        title: "FAQs Page",
        url: "/faqs",
        icon: HelpCircle,
      },
    ],
  },
  {
    label: "Charts",
    items: [
      {
        title: "Bar Chart",
        url: "#",
        icon: BarChart,
      },
      {
        title: "Pie Chart",
        url: "#",
        icon: PieChart,
      },
      {
        title: "Area Chart",
        url: "#",
        icon: AreaChartIcon,
      },
    ],
  },
];
export default function AppSidebar() {
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="py-5">
        <SidebarMenu className="mx-0 px-0">
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link href="/">
                <div className="flex items-center  gap-3">
                  <Avatar className="w-[25px] h-[25px]">
                    <AvatarImage src="/images/noavatar.png" alt="User avatar" />
                    <AvatarFallback>MF</AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col">
                    <h1 className="font-semibold leading-none">M Farhan</h1>
                  </div>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarSeparator />
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent className="pb-10">
        {/* Sidebar Groups */}

        <SidebarGroup>
          <SidebarMenuButton asChild>
            <Link href={"/"}>
              <Home />
              <span>Home</span>
            </Link>
          </SidebarMenuButton>
        </SidebarGroup>

        {/* Application */}
        {items.map((menuItems, index) => (
          <SidebarGroup key={index}>
            <SidebarGroupLabel>{menuItems.label}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {menuItems.items.map((item, index) => {
                  return (
                    <SidebarMenuItem key={index}>
                      <SidebarMenuButton asChild>
                        <Link href={item.url}>
                          <item.icon />
                          <span>{item.title}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  );
                })}
              </SidebarMenu>
            </SidebarGroupContent>
            <SidebarSeparator />
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}
