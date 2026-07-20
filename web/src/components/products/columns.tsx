"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Product } from "@/types/product";

export const productColumns: ColumnDef<Product>[] = [
  {
    accessorKey: "name",
    header: "Product Name",
  },
  {
    accessorKey: "sku",
    header: "SKU",
  },
  {
    accessorKey: "category",
    header: "Category",
  },
  {
    accessorKey: "sellingPrice",
    header: "Selling Price",
    cell: ({ row }) => `₹${row.original.sellingPrice}`,
  },
  {
    accessorKey: "openingStock",
    header: "Stock",
  },
  {
    accessorKey: "gst",
    header: "GST",
    cell: ({ row }) => `${row.original.gst}%`,
  },
];