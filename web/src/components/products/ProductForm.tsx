"use client";

import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Package2 } from "lucide-react";
import { toast } from "sonner";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import { productSchema, ProductFormData } from "@/lib/validations/product-schema";

import ProductBasicInfo from "./ProductBasicInfo";
import ProductPricingInfo from "./ProductPricingInfo";
import ProductInventoryInfo from "./ProductInventoryInfo";

export default function ProductForm() {
  const [loading, setLoading] = useState(false);

  const methods = useForm<ProductFormData>({
    resolver: zodResolver(productSchema),

    defaultValues: {
      name: "",
      sku: "",
      barcode: "",
      hsnCode: "",

      category: "",
      brand: "",
      unit: "",

      purchasePrice: 0,
      sellingPrice: 0,
      gst: 0,

      openingStock: 0,
      minimumStock: 0,

      description: "",

      status: true,
    },
  });

  async function onSubmit(data: ProductFormData) {
    try {
      setLoading(true);

      const res = await fetch("/api/products", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(data),
      });

      if (!res.ok) {
        throw new Error();
      }

      toast.success("Product created successfully.");

      methods.reset();
    } catch {
      toast.error("Unable to save product.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className="space-y-8"
      >
        <Card className="rounded-2xl shadow-sm border">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl">
              <Package2 className="h-7 w-7 text-blue-600" />

              Add New Product
            </CardTitle>

            <p className="text-sm text-muted-foreground">
              Create and manage your inventory professionally.
            </p>
          </CardHeader>

          <CardContent className="space-y-8">
            <BasicInformation />

            <PricingInformation />

            <InventoryInformation />
          </CardContent>
        </Card>

        <div className="flex justify-end gap-4">
          <Button
            type="button"
            variant="outline"
          >
            Cancel
          </Button>

          <Button
            type="submit"
            disabled={loading}
          >
            {loading ? "Saving..." : "Save Product"}
          </Button>
        </div>
      </form>
    </FormProvider>
  );
}