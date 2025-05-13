"use client";

import { generateRandomString } from "@/helpers";
import { CardDescription } from "@/ui";
import { useEffect, useState } from "react";

export default function Body() {
  const [rand, setRand] = useState(0);

  useEffect(() => {
    setRand(Math.floor(Math.random() * 40) + 10);
  }, []);

  return (
    <CardDescription className="text-xs py-2">
      {generateRandomString(rand)}
    </CardDescription>
  );
}
