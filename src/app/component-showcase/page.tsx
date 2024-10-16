"use client";

import { Toast } from "@/components";
import { useState } from "react";

export default function page() {
    const [showToast, setShowToast] = useState("");

    return (
        <div className="text">
            cs
            <button onClick={() => setShowToast("toast msg")}>click</button>
            <Toast showToast={showToast} setShowToast={setShowToast} />
        </div>
    );
}
