import { create } from 'zustand';

type UserData = {
  id: string;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  image?: string;
};

interface AuthState {
  user: UserData | null;
  setUser: (user: UserData | null) => void;
  logOut: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  setUser: (user) => {
    set({ user });
  },
  logOut: () => {
    localStorage.removeItem("user");
    localStorage.removeItem("theme");
    localStorage.removeItem("sidebarExpanded");
    set({ user: null });
  },
}));