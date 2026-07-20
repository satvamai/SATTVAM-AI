"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import * as XLSX from "xlsx";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

import { Users, FileSpreadsheet, FileText, Plus } from "lucide-react";

import CustomerTable from "@/components/customers/CustomerTable";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Customer } from "@/types/customer";

export default function CustomersPage() {
  const router = useRouter();

  const [customers, setCustomers] = useState<Customer[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCustomers();
  }, []);

  async function fetchCustomers() {
    try {
      const res = await fetch("/api/customers");
      const data = await res.json();

      if (data.success) {
        setCustomers(data.customers);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  function exportCustomersExcel() {
    const excelData = customers.map((customer) => ({
      "Customer Name": customer.name,
      Mobile: customer.mobile,
      Email: customer.email,
      City: customer.city,
      Address: customer.address,
      "GST Number": customer.gstNumber,
      "Opening Balance": customer.openingBalance,
      "Credit Limit": customer.creditLimit,
    }));

    const worksheet = XLSX.utils.json_to_sheet(excelData);
    const workbook = XLSX.utils.book_new();

    XLSX.utils.book_append_sheet(workbook, worksheet, "Customers");

    XLSX.writeFile(
      workbook,
      `Customers_${new Date().toISOString().split("T")[0]}.xlsx`
    );
  }

  function exportCustomersPDF() {
    const doc = new jsPDF("landscape");

    doc.setFontSize(18);
    doc.text("SATTVAM AI ERP", 14, 15);

    doc.setFontSize(13);
    doc.text("Customer Master Report", 14, 24);

    autoTable(doc, {
      startY: 35,
      head: [[
        "Customer",
        "Mobile",
        "Email",
        "City",
        "GST",
        "Opening",
        "Credit",
      ]],
      body: customers.map((c) => [
        c.name,
        c.mobile,
        c.email,
        c.city,
        c.gstNumber,
        `₹ ${c.openingBalance}`,
        `₹ ${c.creditLimit}`,
      ]),
    });

    doc.save(
      `Customers_${new Date().toISOString().split("T")[0]}.pdf`
    );
  }

  return (
    <div className="space-y-6 p-8 bg-slate-50 min-h-screen">

      {/* Header */}
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

        <div>
          <h1 className="text-4xl font-bold tracking-tight">
            Customers
          </h1>

          <p className="text-slate-500 mt-1">
            Manage all your customers from one place.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">

          <Button variant="outline" onClick={exportCustomersExcel}>
            <FileSpreadsheet className="mr-2 h-4 w-4" />
            Excel
          </Button>

          <Button variant="outline" onClick={exportCustomersPDF}>
            <FileText className="mr-2 h-4 w-4" />
            PDF
          </Button>

          <Button onClick={() => router.push("/customers/add")}>
            <Plus className="mr-2 h-4 w-4" />
            Add Customer
          </Button>

        </div>

      </div>

      {/* Stats */}
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">

        <Card className="rounded-2xl shadow-sm">
          <CardContent className="flex items-center justify-between p-6">

            <div>
              <p className="text-sm text-slate-500">
                Total Customers
              </p>

              <h2 className="mt-2 text-3xl font-bold">
                {customers.length}
              </h2>
            </div>

            <div className="rounded-xl bg-indigo-100 p-3">
              <Users className="h-7 w-7 text-indigo-600" />
            </div>

          </CardContent>
        </Card>

      </div>

      {/* Table */}

      <CustomerTable
        customers={customers}
        loading={loading}
        onRefresh={fetchCustomers}
      />

    </div>
  );
}