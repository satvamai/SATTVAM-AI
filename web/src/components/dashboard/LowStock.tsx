"use client";

import { AlertTriangle } from "lucide-react";

const products = [
  {
    name: "Premium Atta 5kg",
    stock: 3,
  },
  {
    name: "Besan",
    stock: 5,
  },
  {
    name: "Rice",
    stock: 4,
  },
  {
    name: "Sugar",
    stock: 2,
  },
];

export default function LowStock() {
  return (
    <div className="rounded-2xl bg-white p-6 shadow">
      <h2 className="mb-5 text-xl font-semibold">
        Low Stock Products
      </h2>

      <div className="space-y-4">
        {products.map((item) => (
          <div
            key={item.name}
            className="flex items-center justify-between rounded-xl border p-4"
          >
            <div className="flex items-center gap-3">
              <AlertTriangle
                className="text-red-500"
                size={20}
              />

              <span className="font-medium">
                {item.name}
              </span>
            </div>

            <span className="rounded-lg bg-red-100 px-3 py-1 text-sm font-semibold text-red-600">
              {item.stock} Left
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}