import React, { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      className="text-sm font-semibold px-3 py-2 rounded-md border border-gray-300 dark:border-gray-600"
    >
      {dark ? "🌙 Dark" : "☀️ Light"}
    </button>
  );
}
