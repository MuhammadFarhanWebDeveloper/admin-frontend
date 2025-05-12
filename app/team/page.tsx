import TeamTable from "@/components/team/TeamTable";
import React from "react";

export default function page() {
  return (
    <div className="px-5">
      <h1 className="text-3xl font-bold">TEAM</h1>
<p className="text-sm text-muted-foreground ">All Team Members</p>
      <div className="my-5">
        <TeamTable />
      </div>
    </div>
  );
}
