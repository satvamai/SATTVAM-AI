"use client";

import { Input } from "@/components/ui/input";
import {
  UseFormRegister,
  FieldErrors,
} from "react-hook-form";
import { ProductFormValues } from "@/validations/product-schema";
import {
  Package,
  AlertTriangle,
} from "lucide-react";

interface Props {
  register: UseFormRegister<ProductFormValues>;
  errors: FieldErrors<ProductFormValues>;
}

export default function ProductInventoryInfo({
  register,
  errors,
}: Props) {
  return (
    <div className="space-y-6 rounded-2xl border bg-white p-6 shadow-sm">

      <div className="border-b pb-4">
        <h2 className="text-xl font-semibold">
          Inventory Information
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Configure stock settings for this product.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2">

        <div>
          <label className="mb-2 flex items-center gap-2 text-sm font-medium">
            <Package className="h-4 w-4 text-indigo-600" />
            Opening Stock
          </label>

          <Input
            type="number"
            placeholder="0"
            {...register("openingStock", {
              valueAsNumber: true,
            })}
          />

          {errors.openingStock && (
            <p className="mt-1 text-sm text-red-500">
              {errors.openingStock.message}
            </p>
          )}
        </div>

        <div>
          <label className="mb-2 flex items-center gap-2 text-sm font-medium">
            <AlertTriangle className="h-4 w-4 text-orange-500" />
            Minimum Stock
          </label>

          <Input
            type="number"
            placeholder="0"
            {...register("minimumStock", {
              valueAsNumber: true,
            })}
          />

          {errors.minimumStock && (
            <p className="mt-1 text-sm text-red-500">
              {errors.minimumStock.message}
            </p>
          )}
        </div>

        <div className="md:col-span-2">
          <label className="mb-2 text-sm font-medium block">
            Description
          </label>

          <textarea
            rows={4}
            placeholder="Product description..."
            className="w-full rounded-xl border border-input bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-500"
            {...register("description")}
          />

          {errors.description && (
            <p className="mt-1 text-sm text-red-500">
              {errors.description.message}
            </p>
          )}
        </div>

      </div>

    </div>
  );
}