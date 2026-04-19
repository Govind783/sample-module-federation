import React from "react";
import { useStore } from "zustand";
import { store } from "shared/store";
import moment from "moment";
import clsx from "clsx"; // MFE-specific dep — bundled INTO header's output, NOT shared

export function Nav() {
  const count = useStore(store, (s) => s.count);
  const hasActivity = count > 0;

  return (
    <nav className="flex items-center justify-between">
      <span className="font-bold text-lg">MyApp</span>
      <span className={clsx("text-sm", hasActivity ? "text-green-600 font-medium" : "text-gray-400")}>
        Items: {count} · {moment().format("h:mm a")}
      </span>
    </nav>
  );
}
