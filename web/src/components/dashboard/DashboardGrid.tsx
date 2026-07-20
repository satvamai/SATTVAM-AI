"use client";

import {
  Users,
  Package,
  ShoppingCart,
  Truck,
  AlertTriangle,
  Wallet,
  IndianRupee,
  Boxes,
} from "lucide-react";

import StatCard from "./StatCard";

interface Props {
  customerCount: number;
  productCount: number;
}

export default function DashboardGrid({
  customerCount,
  productCount,
}: Props) {
  const cards = [
    {
      title: "Customers",
      value: customerCount,
      color: "bg-blue-500",
      icon: <Users size={28} />,
    },
    {
      title: "Products",
      value: productCount,
      color: "bg-green-500",
      icon: <Package size={28} />,
    },
    {
      title: "Today's Sales",
      value: "₹0",
      color: "bg-orange-500",
      icon: <ShoppingCart size={28} />,
    },
    {
      title: "Today's Purchase",
      value: "₹0",
      color: "bg-purple-500",
      icon: <Truck size={28} />,
    },
    {
      title: "Stock Value",
      value: "₹0",
      color: "bg-cyan-500",
      icon: <Boxes size={28} />,
    },
    {
      title: "Receivable",
      value: "₹0",
      color: "bg-emerald-500",
      icon: <Wallet size={28} />,
    },
    {
      title: "Payable",
      value: "₹0",
      color: "bg-pink-500",
      icon: <IndianRupee size={28} />,
    },
    {
      title: "Low Stock",
      value: "0",
      color: "bg-red-500",
      icon: <AlertTriangle size={28} />,
    },
  ];

  return (
    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
      {cards.map((card) => (
        <StatCard
          key={card.title}
          title={card.title}
          value={card.value}
          color={card.color}
          icon={card.icon}
        />
      ))}
    </div>
  );
}