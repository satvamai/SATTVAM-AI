"use client";

import { Input } from "@/components/ui/input";
import {
  UseFormRegister,
  FieldErrors,
} from "react-hook-form";
import { ProductFormValues } from "@/validations/product-schema";

interface Props {
  register: UseFormRegister<ProductFormValues>;
  errors: FieldErrors<ProductFormValues>;
}

export default function ProductPricingInfo({
  register,
  errors,
}: Props) {
  return (
    <>
      {/* Purchase Price */}
      <div>
        <label className="mb-2 block text-sm font-medium">
          Purchase Price
        </label>

        <Input
          type="number"
          step="0.01"
          {...register("purchasePrice", {
            valueAsNumber: true,
          })}
        />

        {errors.purchasePrice && (
          <p className="mt-1 text-sm text-red-500">
            {errors.purchasePrice.message}
          </p>
        )}
      </div>

      {/* Selling Price */}
      <div>
        <label className="mb-2 block text-sm font-medium">
          Selling Price
        </label>

        <Input
          type="number"
          step="0.01"
          {...register("sellingPrice", {
            valueAsNumber: true,
          })}
        />

        {errors.sellingPrice && (
          <p className="mt-1 text-sm text-red-500">
            {errors.sellingPrice.message}
          </p>
        )}
      </div>

      {/* GST */}
      <div>
        <label className="mb-2 block text-sm font-medium">
          GST (%)
        </label>

        <Input
          type="number"
          {...register("gst", {
            valueAsNumber: true,
          })}
          placeholder="5 / 12 / 18 / 28"
        />

        {errors.gst && (
          <p className="mt-1 text-sm text-red-500">
            {errors.gst.message}
          </p>
        )}
      </div>
    </>
  );
}