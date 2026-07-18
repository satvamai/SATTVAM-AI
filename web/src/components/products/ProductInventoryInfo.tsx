"use client";

import { Control, Controller } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { ProductFormValues } from "@/validations/product-schema";

interface Props {
  control: Control<ProductFormValues>;
}

export default function ProductInventoryInfo({ control }: Props) {
  return (
    <div className="space-y-5">

      <Controller
        control={control}
        name="openingStock"
        render={({ field, fieldState }) => (
          <div>
            <label className="text-sm font-medium">
              Opening Stock
            </label>

            <Input
              type="number"
              placeholder="0"
              value={field.value?.toString() ?? ""}
              onChange={(e) =>
                field.onChange(Number(e.target.value))
              }
            />

            {fieldState.error && (
              <p className="text-xs text-red-500 mt-1">
                {fieldState.error.message}
              </p>
            )}
          </div>
        )}
      />

      <Controller
        control={control}
        name="minimumStock"
        render={({ field, fieldState }) => (
          <div>
            <label className="text-sm font-medium">
              Minimum Stock
            </label>

            <Input
              type="number"
              placeholder="0"
              value={field.value?.toString() ?? ""}
              onChange={(e) =>
                field.onChange(Number(e.target.value))
              }
            />

            {fieldState.error && (
              <p className="text-xs text-red-500 mt-1">
                {fieldState.error.message}
              </p>
            )}
          </div>
        )}
      />

    </div>
  );
}