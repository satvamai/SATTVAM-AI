"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import ProductTable from "@/components/products/ProductTable";
import { Product } from "@/types/product";

export default function ProductsPage() {
  const router = useRouter();

  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts();
  }, []);

  async function fetchProducts() {
    try {
      const res = await fetch("/api/products");
      const data = await res.json();

      console.log("API Response:", data);

      if (data.success) {
        setProducts(data.products);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="space-y-6 p-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Product Master</h1>
          <p className="text-muted-foreground">
            Total Products: {products.length}
          </p>
        </div>

        <button
          onClick={() => router.push("/products/add")}
          className="rounded-lg bg-blue-600 px-5 py-2 text-white hover:bg-blue-700"
        >
          + Add Product
        </button>
      </div>

      <ProductTable
        products={products}
        loading={loading}
      />
    </div>
  );
}