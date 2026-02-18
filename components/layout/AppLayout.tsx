/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useSidebar } from "@/components/layout/sidebar/hooks/useSidebar";
import type { NavSection } from "./sidebar/hooks/sidebarTypes";
import AppSidebar from "@/components/layout/sidebar/AppSidebar";
import Backdrop from "./sidebar/components/Backdrop"
import SidebarResizeHandler from "./sidebar/components/SidebarResizeHandler";
import Navbar from "./navbar/Navbar";

type AppLayoutProps = {
  children: React.ReactNode;
  section: NavSection[];
}

export default function AppLayout({ children, section }: AppLayoutProps) {
  const router = useRouter();

  const { isExpanded, isHovered, isMobileOpen } = useSidebar();
  const [ready, setReady] = useState<boolean>(false);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (!storedUser) {
      router.replace("/login");
    } else {
      setReady(true);
    }
  },[]);

  if (!ready) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="flex flex-col items-center gap-3 animate-pulse">
          <div className="w-12 h-12 rounded-full bg-surface" />
          <div className="w-32 h-4 rounded bg-surface" />
        </div>
      </div>
    );
  };

  return (
    <>
      <SidebarResizeHandler />
      <div className="min-h-screen flex bg-background">
        <AppSidebar section={section} />
        <Backdrop />
        <div
          className={`flex-1 transition-all duration-300
            ${isExpanded || isHovered ? "lg:ml-72" : "lg:ml-20"}
            ${isMobileOpen ? "ml-0" : ""}`}
        >
          <Navbar />
          <div className="p-4 md:p-6">{children}</div>
        </div>
      </div>
    </>
  );
};