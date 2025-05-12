"use client";

import React from "react";
import {
  ColumnDef,
  ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
  VisibilityState,
} from "@tanstack/react-table";

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Button } from "../ui/button";
import { ArrowUpDown } from "lucide-react";
import { Input } from "../ui/input";

// ✅ Updated phoneNumber to string
type Contact = {
  id: number;
  registerId: number;
  name: string;
  age: number;
  phoneNumber: string;
  email: string;
  address: string;
  city: string;
  zipCode: string;
};

// ✅ Updated dummy data
const contacts: Contact[] = [
  {
    id: 1,
    registerId: 1001,
    name: "Alice Johnson",
    age: 29,
    phoneNumber: "5551234567",
    email: "alice.johnson@example.com",
    address: "123 Maple Street",
    city: "New York",
    zipCode: "10001",
  },
  {
    id: 2,
    registerId: 1002,
    name: "Bob Smith",
    age: 35,
    phoneNumber: "5559876543",
    email: "bob.smith@example.com",
    address: "456 Oak Avenue",
    city: "Los Angeles",
    zipCode: "90001",
  },
  {
    id: 3,
    registerId: 1003,
    name: "Charlie Brown",
    age: 42,
    phoneNumber: "5556543210",
    email: "charlie.brown@example.com",
    address: "789 Pine Lane",
    city: "Chicago",
    zipCode: "60601",
  },
  {
    id: 4,
    registerId: 1004,
    name: "Diana Prince",
    age: 31,
    phoneNumber: "5553217890",
    email: "diana.prince@example.com",
    address: "321 Elm Road",
    city: "San Francisco",
    zipCode: "94101",
  },
  {
    id: 5,
    registerId: 1005,
    name: "Ethan Hunt",
    age: 38,
    phoneNumber: "5558887777",
    email: "ethan.hunt@example.com",
    address: "654 Cedar Blvd",
    city: "Miami",
    zipCode: "33101",
  },
  {
    id: 6,
    registerId: 1006,
    name: "Fiona Gallagher",
    age: 27,
    phoneNumber: "5551112222",
    email: "fiona.gallagher@example.com",
    address: "987 Birch Drive",
    city: "Boston",
    zipCode: "02101",
  },
  {
    id: 7,
    registerId: 1007,
    name: "George Bailey",
    age: 45,
    phoneNumber: "5553334444",
    email: "george.bailey@example.com",
    address: "147 Spruce Street",
    city: "Denver",
    zipCode: "80201",
  },
  {
    id: 8,
    registerId: 1008,
    name: "Hannah Wells",
    age: 33,
    phoneNumber: "5552223333",
    email: "hannah.wells@example.com",
    address: "369 Redwood Avenue",
    city: "Seattle",
    zipCode: "98101",
  },
  {
    id: 9,
    registerId: 1009,
    name: "Ian Fleming",
    age: 41,
    phoneNumber: "5554445555",
    email: "ian.fleming@example.com",
    address: "753 Poplar Road",
    city: "Austin",
    zipCode: "73301",
  },
  {
    id: 10,
    registerId: 1010,
    name: "Jane Eyre",
    age: 30,
    phoneNumber: "5556667777",
    email: "jane.eyre@example.com",
    address: "852 Chestnut St",
    city: "Philadelphia",
    zipCode: "19101",
  },
  {
    id: 11,
    registerId: 1011,
    name: "Kyle Reese",
    age: 37,
    phoneNumber: "5557778888",
    email: "kyle.reese@example.com",
    address: "951 Fir Lane",
    city: "Portland",
    zipCode: "97201",
  },
  {
    id: 12,
    registerId: 1012,
    name: "Lara Croft",
    age: 36,
    phoneNumber: "5559990000",
    email: "lara.croft@example.com",
    address: "246 Aspen Way",
    city: "Phoenix",
    zipCode: "85001",
  },
  {
    id: 13,
    registerId: 1013,
    name: "Michael Scott",
    age: 40,
    phoneNumber: "5550001111",
    email: "michael.scott@example.com",
    address: "369 Sycamore Blvd",
    city: "Scranton",
    zipCode: "18503",
  },
  {
    id: 14,
    registerId: 1014,
    name: "Nina Dobrev",
    age: 28,
    phoneNumber: "5553332222",
    email: "nina.dobrev@example.com",
    address: "753 Cypress Drive",
    city: "Dallas",
    zipCode: "75201",
  },
  {
    id: 15,
    registerId: 1015,
    name: "Oscar Isaac",
    age: 39,
    phoneNumber: "5551114444",
    email: "oscar.isaac@example.com",
    address: "159 Sequoia Ave",
    city: "Atlanta",
    zipCode: "30301",
  },
];

const columns: ColumnDef<Contact>[] = [
  { accessorKey: "id", header: "ID" },
  { accessorKey: "registerId", header: "Register ID" },
  { accessorKey: "name", header: "Name" },
  { accessorKey: "age", header: "Age" },
  { accessorKey: "phoneNumber", header: "Phone Number" },
  {
    accessorKey: "email",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Email
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
  },
  { accessorKey: "address", header: "Address" },
  { accessorKey: "zipCode", header: "Zip Code" },
];

export default function ContactsTable() {
  const [pagination, setPagination] = React.useState({
    pageIndex: 0,
    pageSize: 7,
  });

  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({});

  const table = useReactTable({
    data: contacts,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    state: {
      pagination,
      sorting,
      columnFilters,
      columnVisibility,
    },
    onPaginationChange: setPagination,
  });

  return (
    <div>
      <div className="flex items-center py-4">
        <Input
          placeholder="Filter emails..."
          value={(table.getColumn("email")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("email")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Columns
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => (
                <DropdownMenuCheckboxItem
                  key={column.id}
                  className="capitalize"
                  checked={column.getIsVisible()}
                  onCheckedChange={(value) =>
                    column.toggleVisibility(!!value)
                  }
                >
                  {column.id}
                </DropdownMenuCheckboxItem>
              ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="rounded-md border">
        <Table className="bg-primary-foreground">
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow key={row.id}>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
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
    </div>
  );
}
