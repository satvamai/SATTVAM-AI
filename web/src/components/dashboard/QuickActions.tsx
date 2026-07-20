"use client";

import { Plus } from "lucide-react";
import Link from "next/link";

const actions = [
  {
    title: "Add Customer",
    href: "/customers/add",
  },
  {
    title: "Add Product",
    href: "/products/add",
  },
  {
    title: "New Sale",
    href: "#",
  },
  {
    title: "New Purchase",
    href: "#",
  },
];

export default function QuickActions() {
  return (
    <div className="rounded-2xl bg-white p-6 shadow">
      <h2 className="mb-5 text-xl font-semibold">
        Quick Actions
      </h2>

      <div className="grid gap-4 md:grid-cols-2">
        {actions.map((action) => (
          <Link
            key={action.title}
            href={action.href}
            className="flex items-center gap-3 rounded-xl border p-4 transition hover:bg-blue-50 hover:border-blue-500"
          >
            <Plus className="text-blue-600" size={22} />
            <span className="font-medium">{action.title}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}