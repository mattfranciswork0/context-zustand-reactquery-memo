import { useState } from "react";
import "./App.css";
import { useCounterStore } from "./zustand/store";

export const AppChild = () => {
  // This will NOT cause re-renders when count changes
  const currentCount = useCounterStore.getState().count;
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    console.log("e", e.target.value);
    setValue(e.target.value);
  };
  return (
    <div>
      <h2>Non-Reactive Component</h2>
      <p>Count from getState(): {currentCount}</p>
      <p>⚠️ This will show stale data!</p>
      <input type="text" value={value} onChange={handleChange} />
      <p>You typed: {value}</p>
    </div>
  );
};
