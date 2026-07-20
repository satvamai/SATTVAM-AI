"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

import CustomerForm from "@/components/customers/CustomerForm";
import { Customer } from "@/types/customer";

export default function EditCustomerPage() {
  const params = useParams();
  const id = params.id as string;

  const [customer, setCustomer] = useState<Customer | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCustomer();
  }, []);

  async function fetchCustomer() {
    try {
      const res = await fetch(`/api/customers/${id}`);
      const data = await res.json();

      if (data.success) {
        setCustomer(data.customer);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return (
      <div className="p-8 text-lg">
        Loading customer...
      </div>
    );
  }

  if (!customer) {
    return (
      <div className="p-8 text-red-600">
        Customer not found.
      </div>
    );
  }

  return (
    <div className="p-8">
      <h1 className="mb-6 text-3xl font-bold">
        Edit Customer
      </h1>

      <CustomerForm
        customer={customer}
        isEdit
      />
    </div>
  );
}