import ProductForm from "@/components/products/ProductForm";

export default function AddProductPage() {
  return (
    <div className="mx-auto w-full max-w-7xl p-6 space-y-6">

      <div className="rounded-2xl border bg-white p-6 shadow-sm">
        <h1 className="text-3xl font-bold tracking-tight">
          Add Product
        </h1>

        <p className="mt-2 text-muted-foreground">
          Create a new product for inventory.
        </p>
      </div>

      <ProductForm />

    </div>
  );
}