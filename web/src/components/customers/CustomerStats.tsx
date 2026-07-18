"use client";

import {
  Users,
  MapPin,
  Wallet,
  UserPlus,
} from "lucide-react";

interface CustomerStatsProps {
  totalCustomers: number;
  totalCities: number;
  totalOutstanding: number;
  todayCustomers: number;
}

export default function CustomerStats({
  totalCustomers,
  totalCities,
  totalOutstanding,
  todayCustomers,
}: CustomerStatsProps) {
  const cards = [
    {
      title: "Total Customers",
      value: totalCustomers,
      icon: Users,
      color: "bg-blue-500",
    },
    {
      title: "Cities",
      value: totalCities,
      icon: MapPin,
      color: "bg-green-500",
    },
    {
      title: "Outstanding",
      value: `₹ ${totalOutstanding.toLocaleString("en-IN")}`,
      icon: Wallet,
      color: "bg-orange-500",
    },
    {
      title: "Today's Added",
      value: todayCustomers,
      icon: UserPlus,
      color: "bg-purple-500",
    },
  ];

  return (
    <div className="grid gap-6 mb-8 grid-cols-1 sm:grid-cols-2 xl:grid-cols-4">
      {cards.map((card) => {
        const Icon = card.icon;

        return (
          <div
            key={card.title}
            className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 hover:shadow-lg transition duration-300"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">
                  {card.title}
                </p>

                <h2 className="text-3xl font-bold mt-2 text-gray-900">
                  {card.value}
                </h2>
              </div>

              <div
                className={`${card.color} h-14 w-14 rounded-xl flex items-center justify-center text-white`}
              >
                <Icon size={28} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}