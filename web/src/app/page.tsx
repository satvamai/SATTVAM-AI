import Sidebar from "@/components/layout/Sidebar";

export default function Home() {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 bg-slate-100 p-8">
        <h1 className="text-4xl font-bold text-slate-800">
          Dashboard
        </h1>

        <p className="text-slate-500 mt-2">
          Welcome to SATTVAM AI ERP 🚀
        </p>

        <div className="grid gap-6 mt-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-gray-500">Today's Sales</h2>
            <p className="text-3xl font-bold text-green-600">₹0</p>
          </div>

          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-gray-500">Purchases</h2>
            <p className="text-3xl font-bold text-blue-600">₹0</p>
          </div>

          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-gray-500">Customers</h2>
            <p className="text-3xl font-bold">0</p>
          </div>

          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-gray-500">AI Status</h2>
            <p className="text-2xl font-bold text-purple-600">
              Ready 🤖
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}