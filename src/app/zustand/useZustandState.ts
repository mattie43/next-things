import { create } from "zustand";

type TState = {
  count: number;
  increment: () => void;
};

const useZustandState = create<TState>((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
}));

export default useZustandState;
