export default function Home() {
  return (
    <main className="min-h-screen bg-slate-100">
      <header className="bg-blue-700 text-white p-6 shadow">
        <h1 className="text-3xl font-bold">SATTVAM AI ERP</h1>
        <p className="mt-2">
          AI Powered Accounting & Business Management
        </p>
      </header>

      <section className="p-8">
        <h2 className="text-2xl font-bold mb-6">Dashboard</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
            <p className="text-xl font-bold text-purple-600">Ready 🤖</p>
          </div>
        </div>
      </section>
    </main>
  );
}