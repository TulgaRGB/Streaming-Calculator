import { useState, useEffect } from "react";

function getStorageValue<T>(key: string, defaultValue: T) {
  // getting stored value
  if (typeof window !== "undefined") {

    const saved = localStorage.getItem(key);
    if (saved != null) {
      const initial = JSON.parse(saved);
      return initial;
    }
    return defaultValue
  }
}

export function useLocalStorage<T>(key: string, defaultValue: T) {
  const [value, setValue] = useState(() => {
    return getStorageValue(key, defaultValue);
  });

  useEffect(() => {
    // storing input name
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};
