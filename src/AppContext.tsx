import { createContext, useContext } from "react";

// ========== CONTEXT SETUP ==========
export const initialState = { count: 0, name: "Guest" };

type State = {
  count: number;
  name: string;
};

// Action type (union of all possible actions)
type Action =
  | { type: "INCREMENT" }
  | { type: "DECREMENT" }
  | { type: "SET_NAME"; payload: string }
  | { type: "RESET" };

type ContextType = {
  state: State;
  dispatch: React.Dispatch<Action>;
};

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 };
    case "DECREMENT":
      return { ...state, count: state.count - 1 };
    case "SET_NAME":
      return { ...state, name: action.payload };
    case "RESET":
      return initialState;
    default:
      return state;
  }
};

// ========== CONTEXT PROVIDER COMPONENT ==========
export const AppContext = createContext<ContextType | undefined>(undefined);

// ========== CUSTOM HOOK ==========
export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useApp must be used within AppProvider");
  }
  return context;
};
