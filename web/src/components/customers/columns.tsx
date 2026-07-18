"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Customer } from "@/types/customer";

export const customerColumns: ColumnDef<Customer>[] = [
  {
    accessorKey: "name",
    header: "Customer Name",
  },
  {
    accessorKey: "mobile",
    header: "Mobile",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "city",
    header: "City",
  },
  {
    accessorKey: "gstNumber",
    header: "GST Number",
  },
  {
    accessorKey: "openingBalance",
    header: "Opening Balance",
    cell: ({ row }) => {
      return (
        <span className="font-medium">
          ₹ {Number(row.original.openingBalance).toLocaleString("en-IN")}
        </span>
      );
    },
  },
];