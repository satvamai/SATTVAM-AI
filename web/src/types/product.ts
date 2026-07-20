export interface Product {
  id: string;

  // General Information
  name: string;
  sku?: string;
  barcode?: string;
  hsnCode?: string;

  category: string;
  brand: string;
  unit: string;

  // Pricing
  purchasePrice: number;
  sellingPrice: number;
  gst: number;

  // Inventory
  openingStock: number;
  minimumStock: number;

  // Additional
  description?: string;
  status: boolean;

  createdAt: string;
  updatedAt: string;
}

export interface ProductFormValues {
  name: string;

  sku?: string;
  barcode?: string;
  hsnCode?: string;

  category: string;
  brand: string;
  unit: string;

  purchasePrice: number;
  sellingPrice: number;
  gst: number;

  openingStock: number;
  minimumStock: number;

  description?: string;

  status: boolean;
}