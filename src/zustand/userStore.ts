import { create } from "zustand";

type UserStore = {
  //   filters?: GetUsersFilters;
  //   setFilters: (filters?: GetUsersFilters) => void;
  filters?: any;
  setFilters: (filters?: any) => void;
};

export const useUserStore = create<UserStore>((set) => ({
  filters: undefined,
  setFilters: (filters) => set({ filters }),
}));

// Define state type
type CounterState = {
  count: number;
};

// Define actions type
type CounterActions = {
  increment: () => void;
  incrementAsync: () => Promise<void>;
  decrement: () => void;
};

// Combined store type
type CounterStore = CounterState & CounterActions;

export const useCounterStore = create<CounterStore>((set) => ({
  // State
  count: 0,

  // Actions
  increment: () => {
    set((state) => ({ count: state.count + 1 }));
  },

  incrementAsync: async () => {
    const response = await new Promise<number>((resolve) =>
      setTimeout(() => resolve(1), 1000)
    );
    set((state) => ({ count: state.count + response }));
  },

  decrement: () => {
    set((state) => ({ count: state.count - 1 }));
  },
}));
