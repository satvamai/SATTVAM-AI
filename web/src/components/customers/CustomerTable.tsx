"use client";

import { useRouter } from "next/navigation";
import { Customer } from "@/types/customer";
import { DataTable } from "@/components/common/DataTable";
import { customerColumns } from "./columns";

interface CustomerTableProps {
  customers: Customer[];
  loading?: boolean;
  onRefresh: () => Promise<void>;
}

export default function CustomerTable({
  customers,
  loading = false,
  onRefresh,
}: CustomerTableProps) {
  const router = useRouter();

  const handleEdit = (customer: Customer) => {
    router.push(`/customers/edit/${customer.id}`);
  };

  const handleDelete = async (customer: Customer) => {
    const confirmed = window.confirm(
      `Are you sure you want to delete "${customer.name}"?`
    );

    if (!confirmed) return;

    try {
      const res = await fetch("/api/customers", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: customer.id,
        }),
      });

      const data = await res.json();

      if (data.success) {
        alert("Customer deleted successfully.");
        await onRefresh();
      } else {
        alert(data.message || "Failed to delete customer.");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong.");
    }
  };

  return (
    <DataTable
      columns={customerColumns(handleEdit, handleDelete)}
      data={customers}
      loading={loading}
      searchKey="name"
    />
  );
}