import { z } from "zod";

export const productSchema = z.object({
  // General Information
  name: z
    .string()
    .trim()
    .min(2, "Product name must be at least 2 characters."),

  sku: z.string().trim().optional(),

  barcode: z.string().trim().optional(),

  hsnCode: z.string().trim().optional(),

  category: z
    .string()
    .trim()
    .min(2, "Category is required."),

  brand: z
    .string()
    .trim()
    .min(2, "Brand is required."),

  unit: z
    .string()
    .trim()
    .min(1, "Unit is required."),

  // Pricing
  purchasePrice: z.coerce.number().min(0, "Invalid purchase price."),

  sellingPrice: z.coerce.number().min(0, "Invalid selling price."),

  gst: z.coerce.number().min(0).max(100),

  // Inventory
  openingStock: z.coerce.number().min(0),

  minimumStock: z.coerce.number().min(0),

  // Additional
  description: z.string().trim().optional(),

  status: z.boolean().default(true),
});

export type ProductFormData = z.infer<typeof productSchema>;