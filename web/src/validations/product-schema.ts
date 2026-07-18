import { z } from "zod";

export const productSchema = z.object({
  name: z
    .string()
    .trim()
    .min(3, "Product name must be at least 3 characters"),

  sku: z
    .string()
    .trim()
    .min(2, "SKU is required"),

  hsnCode: z
    .string()
    .trim()
    .min(4, "HSN Code is required"),

  category: z
    .string()
    .trim()
    .min(2, "Category is required"),

  brand: z
    .string()
    .trim()
    .min(2, "Brand is required"),

  unit: z
    .string()
    .trim()
    .min(1, "Unit is required"),

  purchasePrice: z.coerce
    .number()
    .min(0, "Purchase price cannot be negative"),

  sellingPrice: z.coerce
    .number()
    .min(0, "Selling price cannot be negative"),

  gst: z.coerce
    .number()
    .min(0, "GST cannot be negative")
    .max(28, "GST cannot exceed 28%"),

  openingStock: z.coerce
    .number()
    .min(0, "Opening stock cannot be negative"),

  minimumStock: z.coerce
    .number()
    .min(0, "Minimum stock cannot be negative"),
});

export type ProductFormValues = z.input<typeof productSchema>;