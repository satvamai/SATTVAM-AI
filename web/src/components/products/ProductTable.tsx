"use client";

import { Product } from "@/types/product";
import { DataTable } from "@/components/common/DataTable";

const productColumns = [
  {
    accessorKey: "name",
    header: "Name",
  },
];

interface ProductTableProps {
  products: Product[];
  loading?: boolean;
}

export default function ProductTable({
  products,
  loading = false,
}: ProductTableProps) {
  return (
    <DataTable
      columns={productColumns}
      data={products}
      loading={loading}
      searchKey="name"
    />
  );
}