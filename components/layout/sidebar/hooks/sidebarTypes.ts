import { type ReactNode } from "react";

export type NavItem = {
  name: string;
  icon: ReactNode;
  path?: string;
  subItems?: { name: string; path: string }[];
};

export type NavSection = {
  title: string;
  items: NavItem[];
};