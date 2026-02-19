import { create } from "zustand";

export type ThemeMode = "light" | "dark" | "system";

interface ThemeState {
  mode: ThemeMode;
  toggleTheme: () => void;
  setTheme: (mode: ThemeMode) => void;
}

const applyTheme = (mode: ThemeMode) => {
  const isDark =
    mode === "dark" ||
    (mode === "system" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches);
  document.documentElement.classList.toggle("dark", isDark);
};

export const useThemeStore = create<ThemeState>((set, get) => ({
  mode: "system",

  toggleTheme: () => {
    const current = get().mode;
    const next: ThemeMode =
      current === "light" ? "dark" : current === "dark" ? "light" : "dark";
    localStorage.setItem("theme", next);
    applyTheme(next);
    set({ mode: next });
  },

  setTheme: (mode: ThemeMode) => {
    localStorage.setItem("theme", mode);
    applyTheme(mode);
    set({ mode });
  },
}));