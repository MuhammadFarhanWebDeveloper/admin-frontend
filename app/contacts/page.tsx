import ContactsTable from "@/components/contacts/ContactsTable";
import React from "react";

export default function page() {
  return (
    <div className="px-5">
      <h1 className="text-3xl font-bold">CONTACTS</h1>
<p className="text-sm text-muted-foreground capitalize">List of contacts for future reference</p>
      <div className="my-5">
        <ContactsTable />
      </div>
    </div>
  );
}
