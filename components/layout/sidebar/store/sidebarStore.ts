import { create } from "zustand";

type SidebarState = {
  isExpanded: boolean;
  isMobileOpen: boolean;
  isMobile: boolean;
  isHovered: boolean;
  activeItem: string | null;
  openSubmenu: string | null;

  toggleSidebar: () => void;
  toggleMobileSidebar: () => void;
  setIsMobile: (isMobile: boolean) => void;
  setIsHovered: (isHovered: boolean) => void;
  setActiveItem: (item: string | null) => void;
  setOpenSubmenu: (submenu: string | null) => void;
};

const SIDEBAR_KEY = "sidebarExpanded";

export const useSidebarStore = create<SidebarState>((set) => ({
  isExpanded:
    typeof window !== "undefined"
      ? localStorage.getItem(SIDEBAR_KEY) !== "false"
      : true,
  isMobileOpen: false,
  isMobile: false,
  isHovered: false,
  activeItem: null,
  openSubmenu: null,

  toggleSidebar: () =>
    set((state) => {
      const next = !state.isExpanded;
      if (typeof window !== "undefined") {
        localStorage.setItem(SIDEBAR_KEY, String(next));
      }
      return { isExpanded: next };
    }),

  toggleMobileSidebar: () =>
    set((state) => ({ isMobileOpen: !state.isMobileOpen })),

  setIsMobile: (isMobile) =>
    set((state) => ({
      isMobile,
      isMobileOpen: isMobile ? state.isMobileOpen : false,
    })),

  setIsHovered: (isHovered) => set({ isHovered }),
  setActiveItem: (activeItem) => set({ activeItem }),
  setOpenSubmenu: (openSubmenu) => set({ openSubmenu }),
}));