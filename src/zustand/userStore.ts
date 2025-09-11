
import { create } from 'zustand';

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