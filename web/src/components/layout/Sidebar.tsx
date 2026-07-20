"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Users,
  Package,
  Truck,
  ShoppingCart,
  Boxes,
  BookOpen,
  BarChart3,
  Settings,
  Building2,
} from "lucide-react";

const menu = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },

  {
    heading: "Masters",
  },

  {
    title: "Customers",
    href: "/customers",
    icon: Users,
  },

  {
    title: "Vendors",
    href: "#",
    icon: Building2,
  },

  {
    title: "Products",
    href: "/products",
    icon: Package,
  },

  {
    heading: "Transactions",
  },

  {
    title: "Sales",
    href: "#",
    icon: ShoppingCart,
  },

  {
    title: "Purchase",
    href: "#",
    icon: Truck,
  },

  {
    heading: "Business",
  },

  {
    title: "Inventory",
    href: "#",
    icon: Boxes,
  },

  {
    title: "Accounts",
    href: "#",
    icon: BookOpen,
  },

  {
    title: "Reports",
    href: "#",
    icon: BarChart3,
  },

  {
    heading: "System",
  },

  {
    title: "Settings",
    href: "#",
    icon: Settings,
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="sticky top-0 flex h-screen w-72 flex-col bg-slate-950 text-white">
      <div className="border-b border-slate-800 px-7 py-7">
        <h1 className="text-2xl font-bold tracking-tight">
          SATTVAM
        </h1>

        <p className="text-lg font-semibold text-blue-400">
          AI ERP
        </p>

        <p className="mt-2 text-sm text-slate-400">
          Business Management System
        </p>
      </div>

      <nav className="flex-1 overflow-y-auto px-4 py-5">
        {menu.map((item, index) => {
          if ("heading" in item) {
            return (
              <p
                key={index}
                className="mb-3 mt-7 px-3 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500"
              >
                {item.heading}
              </p>
            );
          }

          const Icon = item.icon;
          const active = pathname === item.href;

          return (
            <Link
              key={item.title}
              href={item.href}
              className={`mb-2 flex items-center gap-3 rounded-2xl px-4 py-3 text-[15px] font-medium transition-all duration-200 ${
                active
                  ? "bg-blue-600 text-white shadow-lg"
                  : "text-slate-300 hover:bg-slate-900 hover:text-white"
              }`}
            >
              <Icon size={20} />

              {item.title}
            </Link>
          );
        })}
      </nav>

      <div className="border-t border-slate-800 p-5">
        <div className="rounded-2xl bg-slate-900 p-4">
          <p className="text-sm text-slate-400">
            Logged in as
          </p>

          <p className="mt-1 font-semibold">
            Administrator
          </p>
        </div>
      </div>
    </aside>
  );
}