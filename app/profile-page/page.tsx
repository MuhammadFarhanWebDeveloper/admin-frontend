import ProfileForm from "@/components/profilePage/ProfileForm";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import React from "react";

export default function page() {
    
    
  return (
    <div className="flex gap-2 justify-center flex-col lg:flex-row p-3">
      <div className=" w-1/3">
        <div className="">
          <Avatar className="h-52 w-52 mx-auto">
            <AvatarImage src="/images/noavatar.png" alt="User Avatar" />
            <AvatarFallback>MF</AvatarFallback>
          </Avatar>
        </div>
      </div>
      <div className=" w-full ">
        <h1 className="text-2xl font-bold  my-5 mb-10 ">Personal Information</h1>
        <ProfileForm />
      </div>
    </div>
  );
}
