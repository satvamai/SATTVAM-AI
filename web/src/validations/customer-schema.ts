import { z } from "zod";

export const customerSchema = z.object({
  name: z
    .string()
    .trim()
    .min(3, "Customer name must be at least 3 characters"),

  mobile: z
    .string()
    .regex(/^[6-9]\d{9}$/, "Enter a valid 10-digit mobile number"),

  email: z
    .string()
    .trim()
    .email("Enter a valid email address"),

  city: z
    .string()
    .trim()
    .min(2, "City is required"),

  address: z
    .string()
    .trim()
    .min(5, "Address is required"),

  gstNumber: z
    .string()
    .trim()
    .optional(),

  openingBalance: z.coerce
    .number()
    .min(0, "Opening balance cannot be negative"),

  creditLimit: z.coerce
    .number()
    .min(0, "Credit limit cannot be negative"),
});

export type CustomerFormValues = z.input<typeof customerSchema>;