"use client";

import useCache from "./cache";
import CompA from "./compA";
import CompB from "./compB";
import CompC from "./compC";

export default function page() {
  const [_, setCache] = useCache();

  return (
    <div className="flex flex-col gap-8 w-fit p-8">
      <CompA />
      <CompB />
      <CompC />
      <button onClick={() => setCache((prev) => prev + 1)}>
        parent button
      </button>
    </div>
  );
}
