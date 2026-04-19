import { createStore } from "zustand/vanilla";

export interface SharedState {
  count: number;
  lastUpdatedBy: string | null;
  increment: (mfe: string) => void;
  decrement: (mfe: string) => void;
}

export const store = createStore<SharedState>((set) => ({
  count: 0,
  lastUpdatedBy: null,
  increment: (mfe) => set((s) => ({ count: s.count + 1, lastUpdatedBy: mfe })),
  decrement: (mfe) => set((s) => ({ count: s.count - 1, lastUpdatedBy: mfe })),
}));
