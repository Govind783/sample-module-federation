import React from "react";
import { Link, useLocation } from "react-router-dom";

export function Header() {
  const { pathname } = useLocation();

  return (
    <nav className="flex gap-4 mb-3 border-b border-green-200 pb-2">
      <Link
        to="/dashboard"
        className={pathname === "/dashboard" ? "font-bold text-green-700" : "text-green-500 hover:underline"}
      >
        Dashboard
      </Link>
      <Link
        to="/orders"
        className={pathname === "/orders" ? "font-bold text-green-700" : "text-green-500 hover:underline"}
      >
        Orders
      </Link>
    </nav>
  );
}
