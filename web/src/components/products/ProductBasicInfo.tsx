"use client";

import { Control, Controller } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { ProductFormValues } from "@/validations/product-schema";

interface Props {
  control: Control<ProductFormValues>;
}

export default function ProductBasicInfo({ control }: Props) {
  return (
    <div className="space-y-5">

      <Controller
        control={control}
        name="name"
        render={({ field, fieldState }) => (
          <div>
            <label className="text-sm font-medium">Product Name</label>
            <Input {...field} placeholder="Enter product name" />
            {fieldState.error && (
              <p className="text-red-500 text-xs mt-1">
                {fieldState.error.message}
              </p>
            )}
          </div>
        )}
      />

      <Controller
        control={control}
        name="sku"
        render={({ field, fieldState }) => (
          <div>
            <label className="text-sm font-medium">SKU</label>
            <Input {...field} placeholder="SKU" />
            {fieldState.error && (
              <p className="text-red-500 text-xs mt-1">
                {fieldState.error.message}
              </p>
            )}
          </div>
        )}
      />

      <Controller
        control={control}
        name="hsnCode"
        render={({ field, fieldState }) => (
          <div>
            <label className="text-sm font-medium">HSN Code</label>
            <Input {...field} placeholder="HSN Code" />
            {fieldState.error && (
              <p className="text-red-500 text-xs mt-1">
                {fieldState.error.message}
              </p>
            )}
          </div>
        )}
      />

      <Controller
        control={control}
        name="category"
        render={({ field, fieldState }) => (
          <div>
            <label className="text-sm font-medium">Category</label>
            <Input {...field} placeholder="Category" />
            {fieldState.error && (
              <p className="text-red-500 text-xs mt-1">
                {fieldState.error.message}
              </p>
            )}
          </div>
        )}
      />

      <Controller
        control={control}
        name="brand"
        render={({ field, fieldState }) => (
          <div>
            <label className="text-sm font-medium">Brand</label>
            <Input {...field} placeholder="Brand" />
            {fieldState.error && (
              <p className="text-red-500 text-xs mt-1">
                {fieldState.error.message}
              </p>
            )}
          </div>
        )}
      />

      <Controller
        control={control}
        name="unit"
        render={({ field, fieldState }) => (
          <div>
            <label className="text-sm font-medium">Unit</label>
            <Input {...field} placeholder="Kg / Pcs / Box" />
            {fieldState.error && (
              <p className="text-red-500 text-xs mt-1">
                {fieldState.error.message}
              </p>
            )}
          </div>
        )}
      />

    </div>
  );
}