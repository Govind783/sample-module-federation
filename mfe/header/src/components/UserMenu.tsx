import React from "react";
import { useStore } from "zustand";
import { store } from "shared/store";

export function UserMenu() {
  const lastUpdatedBy = useStore(store, (s) => s.lastUpdatedBy);

  return (
    <div className="mt-2 text-sm text-gray-600">
      Last action by: <strong>{lastUpdatedBy ?? "nobody"}</strong>
      <button
        className="ml-3 px-3 py-1 bg-blue-500 text-white rounded text-xs hover:bg-blue-600"
        onClick={() => store.getState().increment("header")}
      >
        + from Header
      </button>
    </div>
  );
}
