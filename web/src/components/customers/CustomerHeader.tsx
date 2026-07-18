"use client";

import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";

interface CustomerHeaderProps {
  totalCustomers: number;
}

export default function CustomerHeader({
  totalCustomers,
}: CustomerHeaderProps) {
  const router = useRouter();

  return (
    <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between mb-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">
          Customer Master
        </h1>

        <p className="mt-1 text-gray-500">
          Manage your customers efficiently.
        </p>

        <p className="mt-2 text-sm text-blue-600 font-semibold">
          Total Customers : {totalCustomers}
        </p>
      </div>

      <button
        onClick={() => router.push("/customers/add")}
        className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-white font-semibold shadow-md transition-all duration-200 hover:bg-blue-700 hover:shadow-lg active:scale-95"
      >
        <Plus size={20} />
        Add Customer
      </button>
    </div>
  );
}