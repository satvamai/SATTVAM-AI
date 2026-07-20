import Sidebar from "@/components/layout/Sidebar";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import DashboardGrid from "@/components/dashboard/DashboardGrid";
import QuickActions from "@/components/dashboard/QuickActions";
import RecentActivity from "@/components/dashboard/RecentActivity";
import LowStock from "@/components/dashboard/LowStock";

import { prisma } from "@/lib/prisma";

export default async function DashboardPage() {
  const customerCount = await prisma.customer.count();

  const productCount = await prisma.product.count();

  return (
    <div className="flex min-h-screen bg-slate-100">
      <Sidebar />

      <main className="flex-1 overflow-auto p-8">
        <DashboardHeader />

        <DashboardGrid
          customerCount={customerCount}
          productCount={productCount}
        />

        <div className="mt-8 grid gap-8 xl:grid-cols-2">
          <QuickActions />
          <LowStock />
        </div>

        <div className="mt-8">
          <RecentActivity />
        </div>
      </main>
    </div>
  );
}