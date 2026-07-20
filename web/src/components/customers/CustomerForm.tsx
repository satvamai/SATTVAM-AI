"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import CustomerBasicInfo from "./CustomerBasicInfo";
import CustomerFinancialInfo from "./CustomerFinancialInfo";

import {
  customerSchema,
  CustomerFormValues,
} from "@/validations/customer-schema";

import { Customer } from "@/types/customer";

interface CustomerFormProps {
  customer?: Customer;
  isEdit?: boolean;
}

export default function CustomerForm({
  customer,
  isEdit = false,
}: CustomerFormProps) {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CustomerFormValues>({
    resolver: zodResolver(customerSchema),
    defaultValues: {
      name: customer?.name ?? "",
      mobile: customer?.mobile ?? "",
      email: customer?.email ?? "",
      city: customer?.city ?? "",
      address: customer?.address ?? "",
      gstNumber: customer?.gstNumber ?? "",
      openingBalance: customer?.openingBalance ?? 0,
      creditLimit: customer?.creditLimit ?? 0,
    },
  });

  async function onSubmit(values: CustomerFormValues) {
    try {
      setLoading(true);

      const response = await fetch("/api/customers", {
        method: isEdit ? "PUT" : "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...values,
          id: customer?.id,
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.message || "Failed to create customer");
      }

      toast.success(
        isEdit
          ? "Customer updated successfully."
          : "Customer created successfully."
      );

      reset();

      router.push("/customers");
      router.refresh();
    } catch (error) {
      toast.error(
        error instanceof Error
          ? error.message
          : "Something went wrong."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-8"
    >
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <CustomerBasicInfo
          register={register}
          errors={errors}
        />

        <CustomerFinancialInfo
          register={register}
          errors={errors}
        />
      </div>

      <div className="flex justify-end gap-3">
        <Button
          type="button"
          variant="outline"
          onClick={() => router.back()}
        >
          Cancel
        </Button>

        <Button
          type="submit"
          disabled={loading}
        >
          {loading
            ? "Saving..."
            : isEdit
            ? "Update Customer"
            : "Save Customer"}
        </Button>
      </div>
    </form>
  );
}