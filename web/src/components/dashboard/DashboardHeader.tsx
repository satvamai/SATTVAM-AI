"use client";

import { Bell, CalendarDays } from "lucide-react";

export default function DashboardHeader() {
  const today = new Date().toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="mb-8 flex items-center justify-between">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          Dashboard
        </h1>

        <p className="mt-2 text-sm text-slate-500">
          Welcome back 👋 Here's what's happening in your business today.
        </p>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 rounded-xl border bg-white px-4 py-3 shadow-sm">
          <CalendarDays size={18} />

          <span className="text-sm font-medium">
            {today}
          </span>
        </div>

        <button className="relative rounded-xl border bg-white p-3 shadow-sm transition hover:shadow-md">
          <Bell size={20} />

          <span className="absolute right-2 top-2 h-2.5 w-2.5 rounded-full bg-red-500"></span>
        </button>
      </div>
    </div>
  );
}