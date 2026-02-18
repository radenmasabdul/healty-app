"use client";

import { useEffect } from "react";
import { useThemeStore, ThemeMode } from "@/store/themeStore";
import { Moon, Sun } from "lucide-react";

export default function DarkModeToggle() {
  const { mode, toggleTheme, setTheme } = useThemeStore();

  useEffect(() => {
    const stored = localStorage.getItem("theme") as ThemeMode | null;
    if (stored) {
      setTheme(stored);
    }
  }, [setTheme]);

  const isDark =
    mode === "dark" ||
    (mode === "system" &&
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches);

  return (
    <button
      onClick={toggleTheme}
      className={`cursor-pointer relative inline-flex items-center h-10 w-20 
        rounded-full transition-all duration-300 focus:outline-none focus:ring-4 
        ${isDark
          ? "bg-indigo-600 focus:ring-indigo-500/50"
          : "bg-amber-400 focus:ring-amber-300/50"
        } shadow-lg hover:shadow-xl hover:scale-105`}
      aria-label="Toggle theme"
    >
      <span
        className={`inline-block h-8 w-8 transform rounded-full bg-white 
          transition-transform duration-300 ease-in-out shadow-md 
          ${isDark ? "translate-x-10" : "translate-x-1"}`}
      >
        <span className="flex items-center justify-center h-full">
          {isDark ? (
            <Moon className="h-4 w-4 text-indigo-600" />
          ) : (
            <Sun className="h-4 w-4 text-amber-500" />
          )}
        </span>
      </span>

      <span className="absolute left-2 top-2.5">
        <Sun className={`h-4 w-4 transition-opacity 
          ${isDark ? "opacity-0" : "opacity-40 text-white"}`}
        />
      </span>
      <span className="absolute right-2 top-2.5">
        <Moon className={`h-4 w-4 transition-opacity 
          ${isDark ? "opacity-40 text-white" : "opacity-0"}`}
        />
      </span>
    </button>
  );
}