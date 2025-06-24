"use client";

import { useState } from "react";
import useCache from "./cache";

export default function CompA() {
  const [internalState, setInternalState] = useState(0);
  const [cache] = useCache();

  return (
    <div>
      comp a | internal - {internalState} |{" "}
      <button onClick={() => setInternalState(internalState + 1)}>
        increment
      </button>
      <br />
      cache - {cache}
    </div>
  );
}
