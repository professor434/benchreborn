"use client";
import * as React from "react";

export function Input({ className = "", ...props }) {
  return (
    <input
      className={`w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm
        dark:bg-[#1d1d1d] dark:border-gray-700 dark:text-gray-100
        ${className}`}
      {...props}
    />
  );
}
