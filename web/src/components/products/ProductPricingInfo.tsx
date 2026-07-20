"use client";

import { Input } from "@/components/ui/input";
import {
  UseFormRegister,
  FieldErrors,
} from "react-hook-form";
import { ProductFormValues } from "@/validations/product-schema";
import {
  IndianRupee,
  Percent,
  ShoppingCart,
} from "lucide-react";

interface Props {
  register: UseFormRegister<ProductFormValues>;
  errors: FieldErrors<ProductFormValues>;
}

export default function ProductPricingInfo({
  register,
  errors,
}: Props) {
  return (
    <div className="space-y-6 rounded-2xl border bg-white p-6 shadow-sm">

      <div className="border-b pb-4">
        <h2 className="text-xl font-semibold">
          Pricing Information
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Configure purchase price, selling price and GST.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2">

        <div>
          <label className="mb-2 flex items-center gap-2 text-sm font-medium">
            <ShoppingCart className="h-4 w-4 text-indigo-600" />
            Purchase Price
          </label>

          <div className="relative">
            <IndianRupee className="absolute left-3 top-3.5 h-4 w-4 text-slate-400" />

            <Input
              type="number"
              step="0.01"
              placeholder="0.00"
              className="pl-9"
              {...register("purchasePrice", {
                valueAsNumber: true,
              })}
            />
          </div>

          {errors.purchasePrice && (
            <p className="mt-1 text-sm text-red-500">
              {errors.purchasePrice.message}
            </p>
          )}
        </div>

        <div>
          <label className="mb-2 flex items-center gap-2 text-sm font-medium">
            <IndianRupee className="h-4 w-4 text-green-600" />
            Selling Price
          </label>

          <div className="relative">
            <IndianRupee className="absolute left-3 top-3.5 h-4 w-4 text-slate-400" />

            <Input
              type="number"
              step="0.01"
              placeholder="0.00"
              className="pl-9"
              {...register("sellingPrice", {
                valueAsNumber: true,
              })}
            />
          </div>

          {errors.sellingPrice && (
            <p className="mt-1 text-sm text-red-500">
              {errors.sellingPrice.message}
            </p>
          )}
        </div>

        <div className="md:col-span-2">
          <label className="mb-2 flex items-center gap-2 text-sm font-medium">
            <Percent className="h-4 w-4 text-indigo-600" />
            GST (%)
          </label>

          <Input
            type="number"
            placeholder="5 / 12 / 18 / 28"
            {...register("gst", {
              valueAsNumber: true,
            })}
          />

          {errors.gst && (
            <p className="mt-1 text-sm text-red-500">
              {errors.gst.message}
            </p>
          )}
        </div>

      </div>

    </div>
  );
}