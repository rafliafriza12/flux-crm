"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Header } from "@/components/organisms/Header";
import { Sidebar, type SidebarItem } from "@/components/organisms/Sidebar";

/**
 * DashboardLayout Template
 * Layout with sidebar for dashboard/admin pages
 */

export interface DashboardLayoutProps {
  children: React.ReactNode;
  sidebarItems: SidebarItem[];
  className?: string;
}

function DashboardLayout({
  children,
  sidebarItems,
  className,
}: DashboardLayoutProps) {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <div className="flex flex-1">
        <Sidebar
          items={sidebarItems}
          collapsed={sidebarCollapsed}
          onToggle={() => setSidebarCollapsed(!sidebarCollapsed)}
        />
        <main className={cn("flex-1 overflow-auto p-6", className)}>
          {children}
        </main>
      </div>
    </div>
  );
}

export { DashboardLayout };
