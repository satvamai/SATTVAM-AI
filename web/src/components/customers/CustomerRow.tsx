"use client";

import {
  Ellipsis,
  Pencil,
  Trash2,
  Eye,
  BookOpen,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export interface Customer {
  id: string;
  name: string;
  mobile: string;
  email: string;
  city: string;
  gstNumber: string;
  openingBalance: number;
}

interface CustomerRowProps {
  customer: Customer;
  onEdit: (customer: Customer) => void;
  onDelete: (customer: Customer) => void;
  onView: (customer: Customer) => void;
  onLedger: (customer: Customer) => void;
}

export default function CustomerRow({
  customer,
  onEdit,
  onDelete,
  onView,
  onLedger,
}: CustomerRowProps) {
  return (
    <tr className="hover:bg-slate-50 transition-colors">
      <td className="px-4 py-4 font-medium whitespace-nowrap">
        {customer.name}
      </td>

      <td className="px-4 py-4 whitespace-nowrap">
        {customer.mobile}
      </td>

      <td className="px-4 py-4 text-gray-600">
        {customer.email || "-"}
      </td>

      <td className="px-4 py-4">
        {customer.city}
      </td>

      <td className="px-4 py-4">
        {customer.gstNumber || "-"}
      </td>

      <td className="px-4 py-4 font-semibold text-green-700 whitespace-nowrap">
        ₹ {customer.openingBalance.toLocaleString("en-IN")}
      </td>

      <td className="px-4 py-4">
        <Badge
          variant="outline"
          className="bg-green-50 text-green-700 border-green-200"
        >
          Active
        </Badge>
      </td>

      <td className="px-4 py-4 text-right">
        <DropdownMenu>
          <DropdownMenuTrigger>
  <Button variant="ghost" size="icon">
    <Ellipsis className="h-5 w-5" />
  </Button>
</DropdownMenuTrigger>

          <DropdownMenuContent align="end">

            <DropdownMenuItem onClick={() => onView(customer)}>
              <Eye className="mr-2 h-4 w-4" />
              View Details
            </DropdownMenuItem>

            <DropdownMenuItem onClick={() => onLedger(customer)}>
              <BookOpen className="mr-2 h-4 w-4" />
              Ledger
            </DropdownMenuItem>

            <DropdownMenuItem onClick={() => onEdit(customer)}>
              <Pencil className="mr-2 h-4 w-4" />
              Edit
            </DropdownMenuItem>

            <DropdownMenuItem
              className="text-red-600 focus:text-red-600"
              onClick={() => onDelete(customer)}
            >
              <Trash2 className="mr-2 h-4 w-4" />
              Delete
            </DropdownMenuItem>

          </DropdownMenuContent>
        </DropdownMenu>
      </td>
    </tr>
  );
}