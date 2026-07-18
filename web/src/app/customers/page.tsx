"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import CustomerTable from "@/components/customers/CustomerTable";
import { Customer } from "@/types/customer";

export default function CustomersPage() {
  const router = useRouter();

  const [customers, setCustomers] = useState<Customer[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCustomers();
  }, []);

  async function fetchCustomers() {
  try {
    const res = await fetch("/api/customers");
    const data = await res.json();

    console.log("API Response:", data);

    if (data.success) {
      console.log("Customers:", data.customers);
      setCustomers(data.customers);
    }
  } catch (error) {
    console.error(error);
  } finally {
    setLoading(false);
  }
}

  return (
    <div className="space-y-6 p-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Customer Master</h1>
          <p className="text-muted-foreground">
            Total Customers: {customers.length}
          </p>
        </div>

        <button
          onClick={() => router.push("/customers/add")}
          className="rounded-lg bg-blue-600 px-5 py-2 text-white hover:bg-blue-700"
        >
          + Add Customer
        </button>
      </div>

      <CustomerTable customers={customers} loading={loading} />
    </div>
  );
}