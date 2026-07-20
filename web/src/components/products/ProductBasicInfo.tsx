"use client";

import { Package2 } from "lucide-react";
import { useFormContext } from "react-hook-form";

import { ProductFormData } from "@/lib/validations/product-schema";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ProductBasicInfo() {
  const {
    register,
    formState: { errors },
  } = useFormContext<ProductFormData>();

  return (
    <Card className="rounded-2xl border shadow-sm">
      <CardHeader className="border-b bg-muted/30">
        <CardTitle className="flex items-center gap-2 text-lg font-semibold">
          <Package2 className="h-5 w-5 text-blue-600" />
          Basic Information
        </CardTitle>

        <p className="text-sm text-muted-foreground">
          Enter the basic details of your product.
        </p>
      </CardHeader>

      <CardContent className="pt-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

          {/* Product Name */}

          <div className="space-y-2">
            <label className="text-sm font-medium">
              Product Name
            </label>

            <input
              {...register("name")}
              placeholder="Premium Wheat Flour"
              className="h-11 w-full rounded-xl border px-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            />

            {errors.name && (
              <p className="text-sm text-red-500">
                {errors.name.message}
              </p>
            )}
          </div>

          {/* SKU */}

          <div className="space-y-2">
            <label className="text-sm font-medium">
              SKU
            </label>

            <input
              {...register("sku")}
              placeholder="PWF001"
              className="h-11 w-full rounded-xl border px-3 uppercase outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            />
          </div>

          {/* Barcode */}

          <div className="space-y-2">
            <label className="text-sm font-medium">
              Barcode
            </label>

            <input
              {...register("barcode")}
              placeholder="BAR001"
              className="h-11 w-full rounded-xl border px-3 uppercase outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            />
          </div>

          {/* HSN */}

          <div className="space-y-2">
            <label className="text-sm font-medium">
              HSN Code
            </label>

            <input
              {...register("hsnCode")}
              placeholder="11010000"
              className="h-11 w-full rounded-xl border px-3 uppercase outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            />
          </div>

        </div>
      </CardContent>
    </Card>
  );
}