"use client";

import { ReactNode } from "react";

interface Props {
  title: string;
  value: string | number;
  color: string;
  icon: ReactNode;
}

export default function StatCard({
  title,
  value,
  color,
  icon,
}: Props) {
  return (
    <div className="rounded-2xl bg-white p-6 shadow transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-slate-500">
            {title}
          </p>

          <h2 className="mt-3 text-3xl font-bold text-slate-800">
            {value}
          </h2>
        </div>

        <div
          className={`flex h-14 w-14 items-center justify-center rounded-2xl text-white ${color}`}
        >
          {icon}
        </div>
      </div>
    </div>
  );
}