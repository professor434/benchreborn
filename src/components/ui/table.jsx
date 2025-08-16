"use client";
import * as React from "react";

export function Table({ children, className = "", ...props }) {
  return (
    <table className={`w-full text-sm border-collapse ${className}`} {...props}>
      {children}
    </table>
  );
}

export function TableHead({ children }) {
  return <thead className="bg-gray-100 dark:bg-[#222222]">{children}</thead>;
}

export function TableRow({ children }) {
  return <tr>{children}</tr>;
}

export function TableHeader({ children }) {
  return (
    <th className="border-b border-gray-200 px-2 py-3 text-left dark:border-gray-700">
      {children}
    </th>
  );
}

export function TableCell({ children }) {
  return (
    <td className="border-b border-gray-200 px-2 py-3 dark:border-gray-700">
      {children}
    </td>
  );
}

export function TableBody({ children }) {
  return <tbody>{children}</tbody>;
}
