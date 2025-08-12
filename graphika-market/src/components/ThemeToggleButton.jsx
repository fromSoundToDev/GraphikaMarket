import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark-invert");
    } else {
      document.documentElement.classList.remove("dark-invert");
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(prev => !prev)}
  className="flex items-center justify-center rounded-full border border-gray-300 
             shadow-sm bg-white dark:bg-gray-800 dark:border-gray-700
             hover:bg-gray-100 dark:hover:bg-gray-700
             transition-all duration-300 ease-in-out
             w-8 h-8"
    >
      {darkMode ? (
        <>
          <Sun className="w-5 h-5 text-yellow-500 transition-transform duration-300 rotate-0" />
        </>
      ) : (
        <>
          <Moon className="w-5 h-5 text-blue-500 transition-transform duration-300 rotate-0" />
        </>
      )}
    </button>
  );
}
