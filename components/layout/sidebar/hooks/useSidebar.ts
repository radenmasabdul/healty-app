import { useSidebarStore } from '../store/sidebarStore';

export const useSidebar = () => {
  const sidebar = useSidebarStore((state) => state);

  return {
    ...sidebar,
    isExpanded: sidebar.isMobile ? false : sidebar.isExpanded,
    toggleSidebar: sidebar.toggleSidebar,
    toggleMobileSidebar: sidebar.toggleMobileSidebar,
    setIsHovered: sidebar.setIsHovered,
    setActiveItem: sidebar.setActiveItem,
    setOpenSubmenu: sidebar.setOpenSubmenu,
    setIsMobile: sidebar.setIsMobile,
  };
};