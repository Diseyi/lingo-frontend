import * as React from "react";
import { useTheme } from "next-themes";
import { useThemeContext } from "../hooks/useThemeContext";

const DarkModeToggle: React.FC = () => {
  const [mounted, setMounted] = React.useState(false);
  const { theme, setTheme } = useTheme();

  const { dispatch } = useThemeContext() as any;

  React.useEffect(() => setMounted(true), []);

  const handleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
    dispatch({ type: theme });
  };

  return (
    <button
      aria-label="Toggle Dark Mode"
      type="button"
      className="bg-trueGray-200 dark:bg-trueGray-800 rounded p-3 h-10 w-10"
      onClick={handleTheme}
    >
      {mounted && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          stroke="currentColor"
          className="h-4 w-4 text-gray-800 dark:text-gray-200"
        >
          {theme === "dark" ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            />
          )}
        </svg>
      )}
    </button>
  );
};

export default DarkModeToggle;