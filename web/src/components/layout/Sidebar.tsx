import {
  LayoutDashboard,
  Users,
  Truck,
  Package,
  ShoppingCart,
  ShoppingBag,
  BookOpen,
  Settings,
} from "lucide-react";

export default function Sidebar() {
  const menu = [
    { name: "Dashboard", icon: LayoutDashboard },
    { name: "Customers", icon: Users },
    { name: "Vendors", icon: Truck },
    { name: "Products", icon: Package },
    { name: "Sales", icon: ShoppingCart },
    { name: "Purchase", icon: ShoppingBag },
    { name: "Accounts", icon: BookOpen },
    { name: "Settings", icon: Settings },
  ];

  return (
    <aside className="w-64 min-h-screen bg-slate-900 text-white">
      <div className="p-6 border-b border-slate-700">
        <h1 className="text-2xl font-bold">SATTVAM AI ERP</h1>
      </div>

      <nav className="p-4">
        {menu.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.name}
              className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800 transition mb-2"
            >
              <Icon size={20} />
              <span>{item.name}</span>
            </button>
          );
        })}
      </nav>
    </aside>
  );
}