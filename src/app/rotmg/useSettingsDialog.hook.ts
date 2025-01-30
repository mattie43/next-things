import { signal } from "@preact/signals-react";
import { useCallback, useState, useEffect } from "react";

// Create a single, shared signal outside the hook
const isOpenSignal = signal(false);

export const useSettingsDialog = () => {
  // Use useState to trigger re-renders
  const [isOpen, setIsOpen] = useState(isOpenSignal.value);

  // Use useEffect to subscribe to signal changes
  useEffect(() => {
    const updateIsOpen = () => setIsOpen(isOpenSignal.value);
    updateIsOpen(); // Initial sync

    // Subscribe to changes
    const unsubscribe = isOpenSignal.subscribe(updateIsOpen);

    // Cleanup subscription on unmount
    return unsubscribe;
  }, []);

  const openDialog = useCallback(() => {
    isOpenSignal.value = true;
  }, []);

  const closeDialog = useCallback(() => {
    isOpenSignal.value = false;
  }, []);

  return {
    isOpen,
    openDialog,
    closeDialog,
  };
};
