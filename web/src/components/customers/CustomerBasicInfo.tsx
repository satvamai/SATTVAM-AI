"use client";

import { Input } from "@/components/ui/input";
import { UseFormRegister, FieldErrors } from "react-hook-form";
import { CustomerFormValues } from "@/validations/customer-schema";

interface Props {
  register: UseFormRegister<CustomerFormValues>;
  errors: FieldErrors<CustomerFormValues>;
}

export default function CustomerBasicInfo({
  register,
  errors,
}: Props) {
  return (
    <>
      {/* Customer Name */}
      <div>
        <label className="mb-2 block text-sm font-medium">
          Customer Name
        </label>

        <Input
          {...register("name")}
          placeholder="Enter customer name"
        />

        {errors.name && (
          <p className="mt-1 text-sm text-red-500">
            {errors.name.message}
          </p>
        )}
      </div>

      {/* Mobile */}
      <div>
        <label className="mb-2 block text-sm font-medium">
          Mobile Number
        </label>

        <Input
          {...register("mobile")}
          placeholder="9876543210"
        />

        {errors.mobile && (
          <p className="mt-1 text-sm text-red-500">
            {errors.mobile.message}
          </p>
        )}
      </div>

      {/* Email */}
      <div>
        <label className="mb-2 block text-sm font-medium">
          Email
        </label>

        <Input
          {...register("email")}
          placeholder="customer@email.com"
        />

        {errors.email && (
          <p className="mt-1 text-sm text-red-500">
            {errors.email.message}
          </p>
        )}
      </div>

      {/* City */}
      <div>
        <label className="mb-2 block text-sm font-medium">
          City
        </label>

        <Input
          {...register("city")}
          placeholder="Kota"
        />

        {errors.city && (
          <p className="mt-1 text-sm text-red-500">
            {errors.city.message}
          </p>
        )}
      </div>

      {/* Address */}
      <div className="md:col-span-2">
        <label className="mb-2 block text-sm font-medium">
          Address
        </label>

        <textarea
          {...register("address")}
          className="min-h-24 w-full rounded-lg border border-input px-3 py-2"
          placeholder="Enter customer address"
        />

        {errors.address && (
          <p className="mt-1 text-sm text-red-500">
            {errors.address.message}
          </p>
        )}
      </div>
    </>
  );
}