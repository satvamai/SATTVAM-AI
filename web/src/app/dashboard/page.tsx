export default function DashboardPage() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <p className="text-gray-500 mt-2">
        Welcome to SATTVAM AI ERP
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="text-gray-500">Today's Sales</h3>
          <p className="text-3xl font-bold text-green-600">₹0</p>
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="text-gray-500">Today's Purchase</h3>
          <p className="text-3xl font-bold text-blue-600">₹0</p>
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="text-gray-500">Cash Balance</h3>
          <p className="text-3xl font-bold text-orange-600">₹0</p>
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="text-gray-500">AI Status</h3>
          <p className="text-3xl font-bold text-purple-600">
            Ready 🤖
          </p>
        </div>
      </div>
    </div>
  );
}