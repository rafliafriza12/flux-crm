import { useState, useCallback } from "react";

/**
 * useToggle Hook
 * A hook for managing boolean state with toggle, on, off functions
 */

interface UseToggleReturn {
  value: boolean;
  toggle: () => void;
  on: () => void;
  off: () => void;
  setValue: (value: boolean) => void;
}

export function useToggle(initialValue = false): UseToggleReturn {
  const [value, setValue] = useState(initialValue);

  const toggle = useCallback(() => setValue((prev) => !prev), []);
  const on = useCallback(() => setValue(true), []);
  const off = useCallback(() => setValue(false), []);

  return { value, toggle, on, off, setValue };
}
