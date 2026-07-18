import Sidebar from "@/components/layout/Sidebar";
import { prisma } from "@/lib/prisma";

export default async function DashboardPage() {
  const customerCount = await prisma.customer.count();
  const vendorCount = 0;
  const productCount = 0;

  const stats = [
    {
      title: "Customers",
      value: customerCount,
      color: "bg-blue-500",
    },
    {
      title: "Products",
      value: productCount,
      color: "bg-green-500",
    },
    {
      title: "Vendors",
      value: vendorCount,
      color: "bg-purple-500",
    },
    {
      title: "Today's Sales",
      value: "₹0",
      color: "bg-orange-500",
    },
    {
      title: "Today's Purchase",
      value: "₹0",
      color: "bg-pink-500",
    },
    {
      title: "Low Stock",
      value: "0",
      color: "bg-red-500",
    },
  ];

  return (
    <div className="flex min-h-screen bg-slate-100">
      <Sidebar />

      <main className="flex-1 p-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-slate-800">
            SATTVAM AI ERP
          </h1>

          <p className="text-slate-500 mt-2">
            Welcome back! Here's your business overview.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {stats.map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-6"
            >
              <div className={`w-12 h-12 rounded-xl ${item.color} mb-4`} />

              <h2 className="text-slate-500 text-sm">{item.title}</h2>

              <p className="text-3xl font-bold mt-2">{item.value}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}