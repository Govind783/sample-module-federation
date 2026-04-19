import React from "react";
import { nanoid } from "nanoid"; // MFE-specific dep — bundled INTO dashboard's output, NOT shared

const orderId = nanoid(8);

export function OrdersPage() {
  return (
    <div>
      <p className="text-sm font-semibold text-green-800 mb-2">This is /orders route</p>
      <p className="text-gray-600">Sample order ID: {orderId}</p>
    </div>
  );
}
