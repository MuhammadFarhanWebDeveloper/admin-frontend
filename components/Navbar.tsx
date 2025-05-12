import React from "react";
import { ModeToggle } from "./ModeToggle";
import { SidebarTrigger } from "./ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu";


export default function Navbar() {
  return (
    <div className="flex sticky top-0 z-10 border  rounded-lg bg-primary-foreground  mb-2  w-full items-center p-3 justify-between">
      <div>
        <SidebarTrigger />
      </div>
      <div className="flex items-center gap-3">
        <ModeToggle />
      
        <DropdownMenu >
          <DropdownMenuTrigger className="cursor-pointer" asChild>
            <Avatar>
              <AvatarImage src="/images/noavatar.png" />
              <AvatarFallback>MF</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent sideOffset={5} >
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Team</DropdownMenuItem>
            <DropdownMenuItem>Subscription</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
