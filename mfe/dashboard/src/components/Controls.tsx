import React from "react";
import { store } from "shared/store";

export function Controls() {
  return (
    <div className="mt-3 flex gap-2">
      <button
        className="px-3 py-1 bg-red-500 text-white rounded text-xs hover:bg-red-600"
        onClick={() => store.getState().decrement("dashboard")}
      >
        - from Dashboard
      </button>
      <button
        className="px-3 py-1 bg-green-500 text-white rounded text-xs hover:bg-green-600"
        onClick={() => store.getState().increment("dashboard")}
      >
        + from Dashboard
      </button>
    </div>
  );
}
