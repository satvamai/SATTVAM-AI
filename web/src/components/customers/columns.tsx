"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Customer } from "@/types/customer";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

import { Pencil, Trash2, Phone, Mail, MapPin } from "lucide-react";

export const customerColumns = (
  onEdit: (customer: Customer) => void,
  onDelete: (customer: Customer) => void
): ColumnDef<Customer>[] => [
  {
    accessorKey: "name",
    header: "Customer",
    cell: ({ row }) => (
      <div>
        <p className="font-semibold text-slate-800">
          {row.original.name}
        </p>

        <p className="text-xs text-slate-500">
          ID : {row.original.id.slice(0, 8)}
        </p>
      </div>
    ),
  },

  {
    accessorKey: "mobile",
    header: "Mobile",
    cell: ({ row }) => (
      <div className="flex items-center gap-2">
        <Phone className="h-4 w-4 text-slate-400" />
        {row.original.mobile}
      </div>
    ),
  },

  {
    accessorKey: "email",
    header: "Email",
    cell: ({ row }) => (
      <div className="flex items-center gap-2">
        <Mail className="h-4 w-4 text-slate-400" />
        <span className="truncate max-w-[220px]">
          {row.original.email}
        </span>
      </div>
    ),
  },

  {
    accessorKey: "city",
    header: "City",
    cell: ({ row }) => (
      <div className="flex items-center gap-2">
        <MapPin className="h-4 w-4 text-slate-400" />
        {row.original.city}
      </div>
    ),
  },

  {
    accessorKey: "gstNumber",
    header: "GST",
    cell: ({ row }) => (
      <Badge variant="secondary">
        {row.original.gstNumber || "N/A"}
      </Badge>
    ),
  },

  {
    accessorKey: "openingBalance",
    header: "Opening Balance",
    cell: ({ row }) => (
      <span className="font-semibold text-green-600">
        ₹{" "}
        {Number(row.original.openingBalance).toLocaleString(
          "en-IN"
        )}
      </span>
    ),
  },

  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => {
      const customer = row.original;

      return (
        <div className="flex items-center gap-2">

          <Button
            size="icon"
            variant="outline"
            onClick={() => onEdit(customer)}
          >
            <Pencil className="h-4 w-4 text-blue-600" />
          </Button>

          <Button
            size="icon"
            variant="outline"
            onClick={() => onDelete(customer)}
          >
            <Trash2 className="h-4 w-4 text-red-600" />
          </Button>

        </div>
      );
    },
  },
];