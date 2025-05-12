"use client";
import React from "react";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "../ui/button";
import { Briefcase, ShieldCheck, User } from "lucide-react";
import { Checkbox } from "../ui/checkbox";

type TeamMember = {
  id: number;
  name: string;
  age: number;
  phoneNumber: string;
  email: string;
  accessLevel: "Admin" | "Manager" | "User";
};

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "John Doe",
    age: 25,
    phoneNumber: "123-456-7890",
    email: "john.doe@example.com",
    accessLevel: "Admin",
  },
  {
    id: 2,
    name: "Jane Smith",
    age: 30,
    phoneNumber: "987-654-3210",
    email: "jane.smith@example.com",
    accessLevel: "Manager",
  },
  {
    id: 3,
    name: "Alice Johnson",
    age: 28,
    phoneNumber: "555-123-4567",
    email: "alice.j@example.com",
    accessLevel: "User",
  },
  {
    id: 4,
    name: "Bob Brown",
    age: 35,
    phoneNumber: "444-222-1111",
    email: "bob.brown@example.com",
    accessLevel: "User",
  },
  {
    id: 5,
    name: "Charlie Black",
    age: 40,
    phoneNumber: "333-888-9999",
    email: "charlie.black@example.com",
    accessLevel: "Manager",
  },
  {
    id: 6,
    name: "Diana White",
    age: 26,
    phoneNumber: "222-333-4444",
    email: "diana.white@example.com",
    accessLevel: "Admin",
  },
  {
    id: 7,
    name: "Ethan Green",
    age: 32,
    phoneNumber: "111-222-3333",
    email: "ethan.green@example.com",
    accessLevel: "User",
  },
  {
    id: 8,
    name: "Fiona Blue",
    age: 29,
    phoneNumber: "777-888-9999",
    email: "fiona.blue@example.com",
    accessLevel: "Manager",
  },
  {
    id: 9,
    name: "George Yellow",
    age: 38,
    phoneNumber: "888-999-0000",
    email: "george.yellow@example.com",
    accessLevel: "User",
  },
  {
    id: 10,
    name: "Hannah Purple",
    age: 24,
    phoneNumber: "999-000-1111",
    email: "hannah.purple@example.com",
    accessLevel: "Admin",
  },
  {
    id: 11,
    name: "Ian Gray",
    age: 27,
    phoneNumber: "666-555-4444",
    email: "ian.gray@example.com",
    accessLevel: "User",
  },
  {
    id: 12,
    name: "Julia Red",
    age: 33,
    phoneNumber: "111-999-8888",
    email: "julia.red@example.com",
    accessLevel: "Manager",
  },
  {
    id: 13,
    name: "Kevin Orange",
    age: 31,
    phoneNumber: "222-888-7777",
    email: "kevin.orange@example.com",
    accessLevel: "User",
  },
  {
    id: 14,
    name: "Laura Pink",
    age: 36,
    phoneNumber: "333-444-5555",
    email: "laura.pink@example.com",
    accessLevel: "Admin",
  },
  {
    id: 15,
    name: "Mike Silver",
    age: 29,
    phoneNumber: "444-555-6666",
    email: "mike.silver@example.com",
    accessLevel: "Manager",
  },
];

const columns: ColumnDef<TeamMember>[] = [
    {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "age",
    header: "Age",
  },

  {
    accessorKey: "phoneNumber",
    header: "Phone Number",
  },

  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "accessLevel",
    header: "Access Level",
    cell: ({ row }) => {
      const accessLevel = row.getValue("accessLevel") as string;
      const Icon =
        accessLevel === "Admin"
          ? ShieldCheck
          : accessLevel === "Manager"
          ? Briefcase
          : User;
      return (
        <div className={`flex items-center gap-3 ${accessLevel==="Admin"?"bg-green-600":"bg-green-800"} w-[140px] py-2 rounded-sm text-white px-3`}>
          <Icon size={20}/>
          {accessLevel}
        </div>
      );
    },
  },
];

export default function TeamTable() {
  const [pagination, setPagination] = React.useState({
    pageIndex: 0,
    pageSize: 5,
  });

  const table = useReactTable({
    data: teamMembers,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    state: {
      pagination,
    },
    onPaginationChange: setPagination,
  });

  return (
    <div className="rounded-md  border">
      <Table className="bg-primary-foreground ">
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                );
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
      <div className="flex items-center justify-end space-x-2 py-4">
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          Previous
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          Next
        </Button>
      </div>
    </div>
  );
}
