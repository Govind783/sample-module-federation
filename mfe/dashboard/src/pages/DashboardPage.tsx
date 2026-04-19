import React from "react";
import { StatsCard } from "../components/StatsCard";
import { Controls } from "../components/Controls";

export function DashboardPage() {
  return (
    <div>
      <p className="text-sm font-semibold text-green-800 mb-2">This is /dashboard route</p>
      <StatsCard />
      <Controls />
    </div>
  );
}
