"use client";

import * as React from "react";
import {
  Controller,
  FormProvider,
  useFormContext,
  type ControllerProps,
  type FieldPath,
  type FieldValues,
} from "react-hook-form";

export const Form = FormProvider;

export function FormField<
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>,
>({
  ...props
}: ControllerProps<TFieldValues, TName>) {
  return <Controller {...props} />;
}

const FormFieldContext = React.createContext<{
  name: string;
} | null>(null);

export function FormItem({
  className = "",
  children,
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={`space-y-2 ${className}`}>
      {children}
    </div>
  );
}

export function FormLabel({
  className = "",
  children,
  ...props
}: React.LabelHTMLAttributes<HTMLLabelElement>) {
  return (
    <label
      className={`text-sm font-medium text-zinc-700 ${className}`}
      {...props}
    >
      {children}
    </label>
  );
}

export function FormControl({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

export function FormDescription({
  className = "",
  children,
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p className={`text-xs text-zinc-500 ${className}`}>
      {children}
    </p>
  );
}

export function FormMessage() {
  const { formState } = useFormContext();

  const error = Object.values(formState.errors)[0];

  if (!error) return null;

  return (
    <p className="text-sm text-red-500">
      {String(error.message)}
    </p>
  );
}