"use client";

import { useState } from "react";
import useZustandState from "./useZustandState";

const CompA = () => {
  const { count } = useZustandState();
  const [_count, setCount] = useState(0);

  return (
    <div className="flex flex-col p-8 bg-red-950 w-fit gap-2 items-center">
      <span>comp a - {_count}</span>
      <span>global - {count}</span>
      <button
        onClick={() => setCount((prev) => prev + 1)}
        className="border-1 p-1 rounded-xs cursor-pointer"
      >
        inc
      </button>
    </div>
  );
};

const CompB = () => {
  const { count, increment } = useZustandState();
  const [_count, setCount] = useState(0);

  return (
    <div className="flex flex-col p-8 bg-green-950 w-fit gap-2 items-center">
      <span>comp b - {_count}</span>
      <span>global - {count}</span>
      <button
        onClick={() => setCount((prev) => prev + 1)}
        className="border-1 p-1 rounded-xs cursor-pointer"
      >
        inc
      </button>
      <button
        onClick={increment}
        className="border-1 p-1 rounded-xs cursor-pointer"
      >
        global inc
      </button>
    </div>
  );
};

export default function page() {
  const { count, increment } = useZustandState();

  const Home = () => {
    return (
      <div className="flex flex-col p-8 bg-amber-600 w-fit gap-2 items-center">
        <span>zustand</span>
        <span>global - {count}</span>
        <button
          onClick={increment}
          className="border-1 p-1 rounded-xs cursor-pointer"
        >
          global inc
        </button>
      </div>
    );
  };

  return (
    <div className="flex flex-col gap-8 w-fit p-8">
      <Home />
      <CompA />
      <CompB />
    </div>
  );
}
