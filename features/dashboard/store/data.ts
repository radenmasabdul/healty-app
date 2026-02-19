import {
  Users,
  Pill,
  TrendingUp,
  TrendingDown,
  Activity,
  AlertCircle,
  ClipboardList,
} from "lucide-react";

export const menuCards = [
  {
    id: "1",
    title: "Patients",
    description: "Manage and monitor all registered patients",
    href: "/dashboard/pasien",
    icon: Users,
    color: "bg-blue-500",
    lightColor: "bg-blue-50 dark:bg-blue-950",
    textColor: "text-blue-600 dark:text-blue-400",
    stats: "312 total patients",
    trend: "+24 this month",
    borderColor: "border-blue-500",
    trendIcon: TrendingUp,
    trendColor: "text-emerald-500",
  },
  {
    id: "2",
    title: "Medicine Stock",
    description: "Track medicine inventory and stock levels",
    href: "/dashboard/stock",
    icon: Pill,
    color: "bg-emerald-500",
    lightColor: "bg-emerald-50 dark:bg-emerald-950",
    textColor: "text-emerald-600 dark:text-emerald-400",
    stats: "87 medicines available",
    trend: "-5 this week",
    borderColor: "border-emerald-500",
    trendIcon: TrendingDown,
    trendColor: "text-rose-500",
  },
];

export const summaryStats = [
  {
    id: "1",
    label: "Total Visits",
    value: "1,248",
    icon: Activity,
    tren: "+8.2%",
    trenUp: true,
    color: "text-blue-500",
    bg: "bg-blue-50 dark:bg-blue-950",
    borderColor: "border-blue-500",
  },
  {
    id: "2",
    label: "Total Patients",
    value: "312",
    icon: Users,
    tren: "+24",
    trenUp: true,
    color: "text-emerald-500",
    bg: "bg-emerald-50 dark:bg-emerald-950",
    borderColor: "border-emerald-500",
  },
  {
    id: "3",
    label: "Low Stock Alert",
    value: "5 items",
    icon: AlertCircle,
    tren: "+2",
    trenUp: false,
    color: "text-rose-500",
    bg: "bg-rose-50 dark:bg-rose-950",
    borderColor: "border-rose-500",
  },
  {
    id: "4",
    label: "Patients Today",
    value: "38",
    icon: ClipboardList,
    tren: "+6",
    trenUp: true,
    color: "text-violet-500",
    bg: "bg-violet-50 dark:bg-violet-950",
    borderColor: "border-violet-500",
  },
];

export const recentActivity: Array<{
  id: string;
  title: string;
  detail: string;
  time: string;
  type: "product" | "stock" | "alert";
}> = [
  {
    id: "1",
    title: "New patient registered",
    detail: "Budi Santoso — General Practice",
    time: "2 minutes ago",
    type: "product",
  },
  {
    id: "2",
    title: "Medicine stock updated",
    detail: "Paracetamol 500mg — restocked 200 tablets",
    time: "1 hour ago",
    type: "stock",
  },
  {
    id: "3",
    title: "Low stock alert",
    detail: "Amoxicillin 500mg — only 15 capsules left",
    time: "3 hours ago",
    type: "alert",
  },
  {
    id: "4",
    title: "New patient registered",
    detail: "Siti Rahayu — Dental Clinic",
    time: "Yesterday",
    type: "product",
  },
  {
    id: "5",
    title: "Medicine stock updated",
    detail: "Vitamin C 1000mg — restocked 100 tablets",
    time: "Yesterday",
    type: "stock",
  },
];