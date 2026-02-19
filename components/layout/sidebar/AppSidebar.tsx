"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { MoreHorizontal, ChevronDown } from "lucide-react";
import { useSidebar } from "@/components/layout/sidebar/hooks/useSidebar";
import type { NavSection } from "./hooks/sidebarTypes";
import Link from "next/link";

type AppSidebarProps = {
  section: NavSection[];
  title?: string;
}

export default function AppSidebar({ section, title="WIT App" }: AppSidebarProps) {
  const pathname = usePathname();
  const {
    isExpanded,
    isHovered,
    isMobile,
    isMobileOpen,
    setIsHovered
  } = useSidebar();

  const isCollapsed = !isExpanded && !isHovered && !isMobileOpen;

  const [openSection, setOpenSection] = useState<Record<string, boolean>>(
    () =>
      section.reduce((acc, sec) => ({ ...acc, [sec.title]: true}), {})
  );
  
  const toggleSection = (section: string) => {
    setOpenSection((prev) => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const isActive = (path?: string) => path && pathname === path;

  return (
    <aside
      className={`
        fixed top-0 left-0 z-50 h-screen border-r bg-surface
        transition-all duration-300
        ${isMobile
          ? isMobileOpen
            ? "translate-x-0"
            : "-translate-x-full"
          : "translate-x-0"
        }
        ${isExpanded || isHovered ? "w-72" : "w-20"}
      `}
      onMouseEnter={() => !isExpanded && setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`flex items-center gap-3 px-4 py-5
          ${isCollapsed ? "justify-center" : ""}`}
      >
        <div className="w-8 h-8 rounded-lg bg-blue-500 flex items-center justify-center shrink-0">
          <span className="text-white font-bold text-sm">W</span>
        </div>
        {!isCollapsed && (
          <span className="text-lg font-bold tracking-wide truncate text-primary">
            {title}
          </span>
        )}
      </div>

      <div className="p-3 flex flex-col gap-1 overflow-y-auto h-[calc(100vh-72px)]">
        {section.map((section) => (
          <div key={section.title} className="mb-2">
            {isCollapsed ? (
              <div className="my-2 flex justify-center">
                <MoreHorizontal size={16} className="text-tertiery" />
              </div>
            ) : (
              <button
                onClick={() => toggleSection(section.title)}
                className="mb-1 flex items-center justify-between w-full
                  text-xs uppercase text-primary font-semibold tracking-wider
                  transition-colors cursor-pointer px-2 py-1"
              >
                <span>{section.title}</span>
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-200 text-primary
                    ${openSection[section.title] ? "rotate-180" : ""}`}
                />
              </button>
            )}

            {(isCollapsed || openSection[section.title]) && (
              <ul className="flex flex-col gap-0.5">
                {section.items.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.path ?? "#"}
                      className={`
                        flex items-center gap-3 px-3 py-2.5 rounded-lg
                        transition-colors duration-150 group
                        ${isActive(item.path)
                          ? "bg-blue-600 text-white"
                          : "text-primary hover:bg-gray-200 dark:hover:bg-blue-600"
                        }
                        ${isCollapsed ? "justify-center" : ""}
                      `}
                      title={isCollapsed ? item.name : undefined}
                    >
                      <span className="shrink-0">{item.icon}</span>
                      {!isCollapsed && (
                        <span className="text-sm font-medium truncate">
                          {item.name}
                        </span>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </aside>
  )
};