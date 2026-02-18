"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ChevronDown, Loader2 } from "lucide-react";
import { useAuthStore } from "@/features/auth/stores/authStore"
import { useAlertStore } from "@/store/useAlertStore";

export default function UserDropdown() {
    const router = useRouter();
    const { logOut } = useAuthStore();
    const { setAlert } = useAlertStore();

    const [loading, setLoading] = useState<boolean>(false);
    const user = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")!) : null;

    const handleLogout = () => {
        try {
            setLoading(true);
            logOut();
            setAlert("Logged out successfully", "success");
            router.push("/login");
        } catch (error) {
            console.error(error);
            setAlert("Error logging out", "error");
        } finally {
            setLoading(false);
        }
    };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          disabled={loading}
          className="cursor-pointer flex items-center gap-2 px-2
            text-primary hover:bg-transparent focus-visible:bg-transparent"
        >
          <span className="font-medium text-sm">
            {user?.fullName ?? "User"}
          </span>

          {loading ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <ChevronDown className="h-4 w-4 transition-transform data-[state=open]:rotate-180" />
          )}
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        sideOffset={20}
        align="end"
        className="w-64 rounded-xl bg-surface border border-default"
      >
        <div className="px-2 py-1">
          <p className="text-sm font-medium text-primary">{user?.name ?? "User"}</p>
          <p className="text-xs text-tertiary">
            {user?.email ?? "user@example.com"}
          </p>
        </div>

        <DropdownMenuSeparator />

        <DropdownMenuItem asChild className="hover:bg-surface-hover">
          <Link href="#" className="text-primary">
            Edit profile
          </Link>
        </DropdownMenuItem>

        <DropdownMenuItem asChild className="hover:bg-surface-hover">
          <Link href="#" className="text-primary">
            Account settings
          </Link>
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        <DropdownMenuItem
          onClick={handleLogout}
          disabled={loading}
          className="cursor-pointer hover:bg-surface-hover text-primary"
        >
          {loading ? "Signing out..." : "Sign out"}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
