"use client";

import {
  LayoutDashboard,
  Users,
  Truck,
  Package,
  ShoppingCart,
  ShoppingBag,
  BookOpen,
  Settings,
  Boxes,
  ChartColumn,
  Bot,
  FileText,
} from "lucide-react";

import { usePathname, useRouter } from "next/navigation";

export default function Sidebar() {
  const router = useRouter();
  const pathname = usePathname();

  const menu = [
    { name: "Dashboard", icon: LayoutDashboard, path: "/dashboard" },

    { heading: "Masters" },

    { name: "Customers", icon: Users, path: "/customers" },
    { name: "Vendors", icon: Truck, path: "/vendors" },
    { name: "Products", icon: Package, path: "/products" },

    { heading: "Transactions" },

    { name: "Sales", icon: ShoppingCart, path: "/sales" },
    { name: "Purchase", icon: ShoppingBag, path: "/purchase" },

    { heading: "Business" },

    { name: "Inventory", icon: Boxes, path: "/inventory" },
    { name: "Accounts", icon: BookOpen, path: "/accounts" },
    { name: "Reports", icon: ChartColumn, path: "/reports" },
    { name: "GST", icon: FileText, path: "/gst" },

    { heading: "System" },

    { name: "AI Assistant", icon: Bot, path: "/ai" },
    { name: "Settings", icon: Settings, path: "/settings" },
  ];

  return (
    <aside className="w-72 min-h-screen bg-slate-900 text-white flex flex-col shadow-2xl">
      {/* Logo */}
      <div className="p-6 border-b border-slate-700">
        <h1 className="text-2xl font-bold tracking-wide">
          SATTVAM AI ERP
        </h1>
        <p className="text-sm text-slate-400 mt-1">
          Business Management System
        </p>
      </div>

      {/* Menu */}
      <div className="flex-1 overflow-y-auto px-4 py-5">
        {menu.map((item, index) => {
          if ("heading" in item) {
            return (
              <p
                key={index}
                className="text-xs uppercase text-slate-500 font-semibold mt-6 mb-2 px-3"
              >
                {item.heading}
              </p>
            );
          }

          const Icon = item.icon;
          const active = pathname === item.path;

          return (
            <button
              key={item.name}
              onClick={() => router.push(item.path)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 mb-2 ${
                active
                  ? "bg-blue-600 text-white shadow-lg"
                  : "hover:bg-slate-800 text-slate-300"
              }`}
            >
              <Icon size={20} />
              <span className="font-medium">{item.name}</span>
            </button>
          );
        })}
      </div>

      {/* Footer */}
      <div className="p-4 border-t border-slate-700">
        <button
          onClick={() => router.push("/login")}
          className="w-full rounded-xl bg-red-600 hover:bg-red-700 py-3 font-semibold transition"
        >
          Logout
        </button>
      </div>
    </aside>
  );
}