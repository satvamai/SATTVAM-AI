"use client";

import { Search, X } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface CustomerSearchProps {
  search: string;
  total: number;
  onSearchChange: (value: string) => void;
}

export default function CustomerSearch({
  search,
  total,
  onSearchChange,
}: CustomerSearchProps) {
  return (
    <div className="mb-6 rounded-2xl border bg-white p-5 shadow-sm">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="relative w-full lg:max-w-md">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            size={18}
          />

          <Input
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search by Name, Mobile or City..."
            className="pl-10 pr-10 h-11"
          />

          {search && (
            <button
              onClick={() => onSearchChange("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-red-500 transition"
            >
              <X size={18} />
            </button>
          )}
        </div>

        <div className="flex items-center gap-3">
          <p className="text-sm text-gray-500">
            Showing{" "}
            <span className="font-semibold text-black">
              {total}
            </span>{" "}
            customer{total !== 1 ? "s" : ""}
          </p>

          {search && (
            <Button
              variant="outline"
              onClick={() => onSearchChange("")}
            >
              Clear
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}