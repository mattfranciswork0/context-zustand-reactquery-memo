import { createContext, useContext } from "react";

// ========== CONTEXT PROVIDER COMPONENT ==========
type AppContextOtherType = {
  setCounter: (number: number) => void;
  counter: number | undefined;
};
export const AppContextOther = createContext<AppContextOtherType>({
  setCounter: () => {},
  counter: undefined,
});

// ========== CUSTOM HOOK ==========
export const useAppOther = () => {
  const context = useContext(AppContextOther);
  if (!context) {
    throw new Error("useApp must be used within AppProvider");
  }
  return context;
};
