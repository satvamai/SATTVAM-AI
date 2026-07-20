"use client";

import { Input } from "@/components/ui/input";
import { UseFormRegister, FieldErrors } from "react-hook-form";
import { CustomerFormValues } from "@/validations/customer-schema";
import {
  User,
  Phone,
  Mail,
  MapPin,
  Home,
} from "lucide-react";

interface Props {
  register: UseFormRegister<CustomerFormValues>;
  errors: FieldErrors<CustomerFormValues>;
}

export default function CustomerBasicInfo({
  register,
  errors,
}: Props) {
  return (
    <div className="space-y-6 rounded-2xl border bg-white p-6 shadow-sm">

      <div className="border-b pb-4">
        <h2 className="text-xl font-semibold">
          Basic Information
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Enter your customer's basic details.
        </p>
      </div>

      {/* Customer Name */}
      <div>
        <label className="mb-2 flex items-center gap-2 text-sm font-medium">
          <User className="h-4 w-4 text-indigo-600" />
          Customer Name
          <span className="text-red-500">*</span>
        </label>

        <Input
  {...register("name")}
  placeholder="Enter customer name"
  className="h-11 rounded-xl"
  onChange={(e) => {
    e.target.value = e.target.value.replace(
      /\b\w/g,
      (char) => char.toUpperCase()
    );
  }}
/>

        {errors.name && (
          <p className="mt-1 text-sm text-red-500">
            {errors.name.message}
          </p>
        )}
      </div>

      {/* Mobile */}
      <div>
        <label className="mb-2 flex items-center gap-2 text-sm font-medium">
          <Phone className="h-4 w-4 text-indigo-600" />
          Mobile Number
        </label>

        <Input
          {...register("mobile")}
          placeholder="Optional"
          className="h-11 rounded-xl"
        />

        {errors.mobile && (
          <p className="mt-1 text-sm text-red-500">
            {errors.mobile.message}
          </p>
        )}
      </div>

      {/* Email */}
      <div>
        <label className="mb-2 flex items-center gap-2 text-sm font-medium">
          <Mail className="h-4 w-4 text-indigo-600" />
          Email Address
        </label>

        <Input
          {...register("email")}
          placeholder="Optional"
          className="h-11 rounded-xl"
        />

        {errors.email && (
          <p className="mt-1 text-sm text-red-500">
            {errors.email.message}
          </p>
        )}
      </div>

      {/* City */}
      <div>
        <label className="mb-2 flex items-center gap-2 text-sm font-medium">
          <MapPin className="h-4 w-4 text-indigo-600" />
          City
        </label>

        <Input
  {...register("city")}
  placeholder="Optional"
  className="h-11 rounded-xl"
  onChange={(e) => {
    e.target.value = e.target.value.replace(
      /\b\w/g,
      (char) => char.toUpperCase()
    );
  }}
/>

        {errors.city && (
          <p className="mt-1 text-sm text-red-500">
            {errors.city.message}
          </p>
        )}
      </div>

      {/* Address */}
      <div>
        <label className="mb-2 flex items-center gap-2 text-sm font-medium">
          <Home className="h-4 w-4 text-indigo-600" />
          Address
        </label>

        <textarea
  {...register("address")}
  placeholder="Optional"
  onChange={(e) => {
    e.target.value = e.target.value.replace(
      /\b\w/g,
      (char) => char.toUpperCase()
    );
  }}
  className="min-h-28 w-full rounded-xl border border-input bg-background px-3 py-3 text-sm outline-none transition focus:ring-2 focus:ring-indigo-500"
/>

        {errors.address && (
          <p className="mt-1 text-sm text-red-500">
            {errors.address.message}
          </p>
        )}
      </div>

    </div>
  );
}