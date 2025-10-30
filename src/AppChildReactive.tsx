import "./App.css";
import { useCounterStore } from "./zustand/store";

export const AppChildReactive = () => {
  const { count } = useCounterStore();

  return (
    <div>
      <h2>Reactive Component</h2>
      <p>Count from hook: {count}</p>
    </div>
  );
};
