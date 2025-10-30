import "./App.css";
import { useCounterStore } from "./zustand/store";

export const About = () => {
  return (
    <div className="max-w-md mx-auto p-6 space-y-4">
      <h1>About</h1>
      <h1>TEST ZUSTAND GETSTATE: {useCounterStore.getState().count}</h1>
    </div>
  );
};
