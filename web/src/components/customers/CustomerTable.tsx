"use client";

import { Customer } from "@/types/customer";
import { DataTable } from "@/components/common/DataTable";
import { customerColumns } from "./columns";

interface CustomerTableProps {
  customers: Customer[];
  loading?: boolean;
}

export default function CustomerTable({
  customers,
  loading = false,
}: CustomerTableProps) {
  return (
    <DataTable
      columns={customerColumns}
      data={customers}
      loading={loading}
      searchKey="name"
    />
  );
}