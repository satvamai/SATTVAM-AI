export interface Product {
  id: string;

  name: string;
  sku: string;
  hsnCode: string;

  category: string;
  brand: string;
  unit: string;

  purchasePrice: number;
  sellingPrice: number;

  gst: number;

  openingStock: number;
  minimumStock: number;

  status: boolean;

  createdAt?: string;
  updatedAt?: string;
}