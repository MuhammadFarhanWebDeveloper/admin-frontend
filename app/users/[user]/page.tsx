import React from "react";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";
import CardList from "@/components/CardList";

type Params = Promise<{ user: string }>;

export default async function page({ params }: { params: Params }) {
  const { user } = await params;
  return (
    <div className="p-4">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <Link href="/">Dashboard</Link>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <Link href="/users">Users</Link>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{user}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      {/* Container */}
      <div className="flex flex-col lg:flex-row mt-4 gap-6">
        <div className="w-full lg:w-1/3 space-y-4">
        <div className="bg-primary-foreground p-3 rounded-lg">Badge</div>
        <div className="bg-primary-foreground p-3 rounded-lg">Info</div>
        <div className="bg-primary-foreground p-3 rounded-lg">
            <CardList title="Recent Transactions" />
        </div>
        </div>
        <div className="w-full lg:w-2/3 space-y-4">
        <div className="bg-primary-foreground p-3 rounded-lg">User Card</div>
        <div className="bg-primary-foreground p-3 rounded-lg">Chart</div>
        </div>
      </div>

    </div>
  );
}
