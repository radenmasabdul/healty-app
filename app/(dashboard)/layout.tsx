import AppLayout from "@/components/layout/AppLayout";
import {
  LayoutDashboard,
  Users,
  ShieldHalf,
  Bell,
} from "lucide-react";
import type { NavSection } from "@/components/layout/sidebar/hooks/sidebarTypes";

const menuSection: NavSection[] = [
  {
    title: "Overview",
    items: [
      {
        name: "Dashboard",
        icon: <LayoutDashboard size={20} />,
        path: "/dashboard",
      },
    ],
  },
  {
    title: "Management",
    items: [
      { name: "Pasien", icon: <Users size={20} />, path: "/pasien" },
      { name: "Stock", icon: <ShieldHalf size={20} />, path: "/stock" },
    ],
  },
  {
    title: "Monitoring",
    items: [
      { name: "Notification", icon: <Bell size={20} />, path: "/notification" },
    ],
  },
];

export default function DashboardGroupLayout({ children }: { children: React.ReactNode }) {
  return (
    <AppLayout section={menuSection}>
      {children}
    </AppLayout>
  );
};