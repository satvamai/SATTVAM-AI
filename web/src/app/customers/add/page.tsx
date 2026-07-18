import CustomerForm from "@/components/customers/CustomerForm";

export default function AddCustomerPage() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">
        Add New Customer
      </h1>

      <CustomerForm />
    </div>
  );
}