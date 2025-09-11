import { useEffect, useMemo, useState } from "react";
import "./App.css";
import { useApp } from "./AppContext";
import { useCounterStore } from "./zustand/store";
import { useUserStore } from "./zustand/userStore";
import { useQuery } from "@tanstack/react-query";
import { useAppOther } from "./AppContextOther";
import { Link } from "react-router";
import { getMovies, postMovies } from "./api/user";

const setCount = () => {
  useCounterStore.setState({ count: 1 }); //Outside of componenet, so this is how we set count
};

const initialItems = [
  { id: 1, isSelected: false },
  { id: 2, isSelected: true }, // this one will be selected
  { id: 3, isSelected: false },
];

export const AppContent = () => {
  const count = useCounterStore((state) => state.count);
  const increment = useCounterStore((state) => state.increment);
  const decrement = useCounterStore((state) => state.decrement);
  const { state, dispatch } = useApp();
  const {
    counter,
    increment: appOtherIncrement,
    decrement: appOtherDecrement,
  } = useAppOther();
  const [name, setName] = useState("");
  useEffect(() => {
    setCount();
  }, []);
  // const [data, setData] = useState(null);
  // const [isLoading, setIsLoading] = useState(false);
  //UseMemo stuff
  //const items = [{ isSelected: true, text: "foo" }];
  //Will run very render
  // const selectedItem = items.find((item) => item.isSelected);
  //You can prevent this from re-running every render with useMemo:
  // const selectedItem = useMemo(() => {
  //   return items.find((item) => item.isSelected);
  // }, []);
  // useEffect(() => {
  //   console.log("This runs every render");
  // }, [selectedItem]); //If the items are created outside of the component...As long as the items are not being individually recreated every render,
  // then selectedItem will be the same from render-to-render, so the useEffect will not re-run.
  //But it does still create a new function everytime it re-renders even when the items are outside of the component, hence why useMemo is important:
  //https://youtu.be/vpE9I_eqHdM?si=LHXTnUOhvH3mTGuM&t=324

  //When the provider re-renders, it causes the consumer to re-render (i.e this componenet)
  //The context rerenders, but returns the same functions for the memoized increment and decrement function because they're wrapped in useCallback.
  // When the context runs, it'll check the useCallback deps to see if any have changed (which, there aren't any, so they never will) and if not, returns the same function as the previous render.
  //try using the increment and decrement  that is not under  useCallback and it keeps rendering the function
  useEffect(() => {
    console.log("aa");
  }, [appOtherIncrement]);

  useEffect(() => {
    console.log("aa2");
  }, [appOtherDecrement]);

  const { filters, setFilters } = useUserStore();

  const { data, isLoading, error } = useQuery({
    queryKey: ["users"],
    queryFn: () => getMovies(),
    // staleTime: 5 * 60 * 1000,
  });
  // const getMovieData = async () => {
  //   setIsLoading(true);
  //   try {
  //     const response = await fetch(`${BASE_URL}/rq-test`);

  //     if (!response.ok) {
  //       throw new Error(
  //         `Failed to fetch users: ${response.status} ${response.statusText}`
  //       );
  //     }

  //     const data = await response.json();
  //     setData(data);
  //   } catch (err) {
  //     console.error("Error fetching users:", err);
  //     throw err;
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };
  // useEffect(() => {
  //   getMovieData();
  // }, []);
  const handleSetNameFilter = () => {
    setFilters({ name: "John", age: 25 });
  };
  //Dont  store server from the backend to the  zustand store it  is duplicaiton,
  // just use it directly ( Only store client-side state or derived data in Zustand):
  //   const { users, setUsers } = useUserStore();

  if (isLoading) return <h1> Loading</h1>;
  // if (error) return <h1>{error.message}</h1>;
  if (data)
    return (
      <div className="max-w-md mx-auto p-6 space-y-4">
        <button onClick={() => postMovies()}>MAKE A POST REQUEST</button>
        <div className="bg-green-100 p-4 rounded">
          <text>Movie title: {data.title} </text>
          <Link to="/about">REDIRECT TO NEW LINK</Link>
          <h3 className="font-bold">
            Hello, {state.name} {name}!
          </h3>
          <text>
            This feature is used to force a re-render of the component
          </text>
          <input
            type="text"
            value={state.name}
            onChange={(e) =>
              dispatch({ type: "SET_NAME", payload: e.target.value })
            }
            className="border p-2 rounded mt-2 w-full"
            placeholder="Enter your name"
          />
        </div>
        <button
          onClick={() => dispatch({ type: "RESET" })}
          className="bg-gray-500 text-white px-4 py-2 rounded w-full"
        >
          Reset Everything
        </button>
        <div className="bg-blue-100 p-4 rounded">
          <h3 className="font-bold">Counter: {counter}</h3>
          <div className="flex gap-2 mt-2">
            <button
              onClick={appOtherIncrement}
              className="bg-green-500 text-white px-3 py-1 rounded"
            >
              PLUS
            </button>
            <button
              onClick={appOtherDecrement}
              className="bg-red-500 text-white px-3 py-1 rounded"
            >
              MINUS
            </button>
          </div>

          <h3 className="font-bold">Counter: {state.count}</h3>
          <div className="flex gap-2 mt-2">
            <button
              onClick={() => dispatch({ type: "INCREMENT" })}
              className="bg-green-500 text-white px-3 py-1 rounded"
            >
              + (CONTEXT WITH REDUCER)
            </button>
            <button
              onClick={() => dispatch({ type: "DECREMENT" })}
              className="bg-red-500 text-white px-3 py-1 rounded"
            >
              - (CONTEXT WITH REDUCER)
            </button>
          </div>
          <h3 className="font-bold">Counter: {count}</h3>
          <div className="flex gap-2 mt-2">
            <button onClick={handleSetNameFilter}>Set Name & Age Filter</button>
            <button
              onClick={increment}
              className="bg-green-500 text-white px-3 py-1 rounded"
            >
              + (ZUSTAND)
            </button>
            <button
              onClick={decrement}
              className="bg-red-500 text-white px-3 py-1 rounded"
            >
              - (ZUSTAND)
            </button>
          </div>
        </div>
      </div>
    );
};
