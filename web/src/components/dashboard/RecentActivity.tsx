"use client";

import {
  UserPlus,
  PackagePlus,
  Receipt,
  IndianRupee,
} from "lucide-react";

const activities = [
  {
    icon: <UserPlus size={18} className="text-blue-600" />,
    title: "New Customer Added",
    subtitle: "Rahul Sharma",
    time: "2 min ago",
  },
  {
    icon: <PackagePlus size={18} className="text-green-600" />,
    title: "Product Added",
    subtitle: "Premium Atta 5kg",
    time: "15 min ago",
  },
  {
    icon: <Receipt size={18} className="text-purple-600" />,
    title: "Invoice Generated",
    subtitle: "#INV-0001",
    time: "1 hour ago",
  },
  {
    icon: <IndianRupee size={18} className="text-orange-600" />,
    title: "Payment Received",
    subtitle: "₹25,000",
    time: "Today",
  },
];

export default function RecentActivity() {
  return (
    <div className="rounded-2xl bg-white p-6 shadow">
      <h2 className="mb-5 text-xl font-semibold">
        Recent Activity
      </h2>

      <div className="space-y-4">
        {activities.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between rounded-xl border p-4 transition hover:bg-slate-50"
          >
            <div className="flex items-center gap-4">
              <div className="rounded-full bg-slate-100 p-3">
                {item.icon}
              </div>

              <div>
                <p className="font-medium">{item.title}</p>

                <p className="text-sm text-slate-500">
                  {item.subtitle}
                </p>
              </div>
            </div>

            <span className="text-xs text-slate-400">
              {item.time}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}