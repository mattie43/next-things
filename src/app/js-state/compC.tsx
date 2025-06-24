"use client";

import React from "react";
import { useState } from "react";

const CompC = React.memo(function CompC() {
  const [internalState, setInternalState] = useState(0);

  return (
    <div>
      comp c | internal - {internalState} |{" "}
      <button onClick={() => setInternalState(internalState + 1)}>
        increment
      </button>
    </div>
  );
});

export default CompC;
