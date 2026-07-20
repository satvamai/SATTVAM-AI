"use client";

import { Input } from "@/components/ui/input";
import { UseFormRegister, FieldErrors } from "react-hook-form";
import { CustomerFormValues } from "@/validations/customer-schema";
import { Landmark, Wallet, CreditCard } from "lucide-react";

interface Props {
  register: UseFormRegister<CustomerFormValues>;
  errors: FieldErrors<CustomerFormValues>;
}

export default function CustomerFinancialInfo({
  register,
  errors,
}: Props) {
  return (
    <div className="space-y-6 rounded-2xl border bg-white p-6 shadow-sm">

      <div className="border-b pb-4">
        <h2 className="text-xl font-semibold">
          Financial Information
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Configure GST, opening balance and credit limit.
        </p>
      </div>

      {/* GST Number */}
      <div>
        <label className="mb-2 flex items-center gap-2 text-sm font-medium">
          <Landmark className="h-4 w-4 text-indigo-600" />
          GST Number
        </label>

        <Input
  {...register("gstNumber")}
  placeholder="Optional"
  className="h-11 rounded-xl uppercase"
  onChange={(e) => {
    e.target.value = e.target.value.toUpperCase();
  }}
/>

        {errors.gstNumber && (
          <p className="mt-1 text-sm text-red-500">
            {errors.gstNumber.message}
          </p>
        )}
      </div>

      {/* Opening Balance */}
      <div>
        <label className="mb-2 flex items-center gap-2 text-sm font-medium">
          <Wallet className="h-4 w-4 text-indigo-600" />
          Opening Balance
        </label>

        <Input
          type="number"
          step="0.01"
          {...register("openingBalance")}
          placeholder="0.00"
          className="h-11 rounded-xl"
        />

        {errors.openingBalance && (
          <p className="mt-1 text-sm text-red-500">
            {errors.openingBalance.message}
          </p>
        )}
      </div>

      {/* Credit Limit */}
      <div>
        <label className="mb-2 flex items-center gap-2 text-sm font-medium">
          <CreditCard className="h-4 w-4 text-indigo-600" />
          Credit Limit
        </label>

        <Input
          type="number"
          step="0.01"
          {...register("creditLimit")}
          placeholder="0.00"
          className="h-11 rounded-xl"
        />

        {errors.creditLimit && (
          <p className="mt-1 text-sm text-red-500">
            {errors.creditLimit.message}
          </p>
        )}
      </div>

    </div>
  );
}