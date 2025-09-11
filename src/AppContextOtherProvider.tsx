import { useCallback, useMemo, useState } from "react";
import { AppContextOther } from "./AppContextOther";

export const AppContextOtherProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [counter, setCounter] = useState(0);

  // const increment = () => {
  //   setCounter((prevState) => prevState + 1);
  // };

  // const decrement = () => {
  //   setCounter((prevState) => prevState - 1);
  // };

  // if you logged counter in the incrementMemo function,
  // then you'd want useCallback to take the counter variable as a dep.
  //  Which would mean it'd be a "new" incrementMemo function every time counter changes, which means the downstream useEffect will run every time counter changes, too.
  const incrementMemo = useCallback(() => {
    setCounter((prevState) => prevState + 1);
  }, []);

  const decrementMemo = useCallback(() => {
    setCounter((prevState) => prevState - 1);
  }, []);

  const value = useMemo(() => {
    return {
      incrementMemo,
      decrementMemo,
      counter,
      setCounter,
    };
  }, [counter, setCounter, incrementMemo, decrementMemo]);

  return (
    <AppContextOther.Provider value={value}>
      {children}
    </AppContextOther.Provider>
  );

  // const value = {
  //   increment,
  //   decrement,
  //   counter,
  //   setCounter,
  // };
  // return (
  //   <AppContextOther.Provider value={value}>
  //     {children}
  //   </AppContextOther.Provider>
  // );
};
