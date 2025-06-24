"use client";

import { useState } from "react";
import useCache from "./cache";

export default function CompB() {
  const [internalState, setInternalState] = useState(0);
  const [cache] = useCache();

  return (
    <div>
      comp b | internal - {internalState} |{" "}
      <button onClick={() => setInternalState(internalState + 1)}>
        increment
      </button>
      <br />
      cache - {cache}
    </div>
  );
}
