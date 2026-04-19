import React from "react";
import { useStore } from "zustand";
import { store } from "shared/store";
import moment from "moment";

export function StatsCard() {
  const count = useStore(store, (s) => s.count);
  const lastUpdatedBy = useStore(store, (s) => s.lastUpdatedBy);

  return (
    <div>
      <p className="text-2xl font-bold">{count}</p>
      <p className="text-sm text-gray-500">
        by {lastUpdatedBy ?? "—"} · {moment().format("h:mm a")}
      </p>
    </div>
  );
}
