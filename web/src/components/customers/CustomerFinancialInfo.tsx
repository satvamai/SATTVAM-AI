"use client";

import { Input } from "@/components/ui/input";
import { UseFormRegister, FieldErrors } from "react-hook-form";
import { CustomerFormValues } from "@/validations/customer-schema";

interface Props {
  register: UseFormRegister<CustomerFormValues>;
  errors: FieldErrors<CustomerFormValues>;
}

export default function CustomerFinancialInfo({
  register,
  errors,
}: Props) {
  return (
    <>
      {/* GST Number */}
      <div>
        <label className="mb-2 block text-sm font-medium">
          GST Number
        </label>

        <Input
          {...register("gstNumber")}
          placeholder="Optional"
        />

        {errors.gstNumber && (
          <p className="mt-1 text-sm text-red-500">
            {errors.gstNumber.message}
          </p>
        )}
      </div>

      {/* Opening Balance */}
      <div>
        <label className="mb-2 block text-sm font-medium">
          Opening Balance
        </label>

        <Input
          type="number"
          step="0.01"
          {...register("openingBalance")}
        />

        {errors.openingBalance && (
          <p className="mt-1 text-sm text-red-500">
            {errors.openingBalance.message}
          </p>
        )}
      </div>

      {/* Credit Limit */}
      <div>
        <label className="mb-2 block text-sm font-medium">
          Credit Limit
        </label>

        <Input
          type="number"
          step="0.01"
          {...register("creditLimit")}
        />

        {errors.creditLimit && (
          <p className="mt-1 text-sm text-red-500">
            {errors.creditLimit.message}
          </p>
        )}
      </div>
    </>
  );
}