"use client";

import CustomerForm from "@/components/customers/CustomerForm";
import { ArrowLeft, UserPlus } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function AddCustomerPage() {
  return (
    <div className="space-y-6">

      {/* Header */}
      <div className="flex flex-col gap-4 rounded-2xl border bg-white p-6 shadow-sm md:flex-row md:items-center md:justify-between">

        <div>
          <div className="mb-2 flex items-center gap-2 text-sm text-muted-foreground">
            <Link
              href="/customers"
              className="hover:text-primary"
            >
              Customers
            </Link>

            <span>/</span>

            <span>Add Customer</span>
          </div>

          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-indigo-100 p-3">
              <UserPlus className="h-6 w-6 text-indigo-600" />
            </div>

            <div>
              <h1 className="text-3xl font-bold">
                Add Customer
              </h1>

              <p className="text-muted-foreground">
                Create a new customer profile.
              </p>
            </div>
          </div>
        </div>

        <Link href="/customers">
          <Button variant="outline">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>
        </Link>

      </div>

      {/* Form */}
      <CustomerForm />

    </div>
  );
}