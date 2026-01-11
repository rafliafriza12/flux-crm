"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

/**
 * Sidebar Component - Organism
 * Navigation sidebar for dashboard pages
 */

export interface SidebarItem {
  label: string;
  href: string;
  icon: string;
  badge?: string | number;
}

export interface SidebarProps {
  items: SidebarItem[];
  className?: string;
  collapsed?: boolean;
  onToggle?: () => void;
}

function Sidebar({
  items,
  className,
  collapsed = false,
  onToggle,
}: SidebarProps) {
  const pathname = usePathname();

  return (
    <aside
      className={cn(
        "flex h-full flex-col border-r border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-950",
        collapsed ? "w-16" : "w-64",
        "transition-all duration-300",
        className
      )}
    >
      {/* Toggle Button */}
      {onToggle && (
        <button
          onClick={onToggle}
          className="flex h-12 items-center justify-center border-b border-gray-200 text-gray-500 hover:bg-gray-50 dark:border-gray-800 dark:hover:bg-gray-900"
          aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          <i
            className={cn(
              "text-lg transition-transform",
              collapsed ? "ri-menu-unfold-line" : "ri-menu-fold-line"
            )}
          />
        </button>
      )}

      {/* Navigation Items */}
      <nav className="flex-1 overflow-y-auto p-2">
        <ul className="space-y-1">
          {items.map((item) => {
            const isActive = pathname === item.href;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                    isActive
                      ? "bg-blue-50 text-blue-600 dark:bg-blue-950 dark:text-blue-400"
                      : "text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-900",
                    collapsed && "justify-center px-2"
                  )}
                  title={collapsed ? item.label : undefined}
                >
                  <i className={cn(item.icon, "text-lg")} />
                  {!collapsed && (
                    <>
                      <span className="flex-1">{item.label}</span>
                      {item.badge && (
                        <span className="rounded-full bg-blue-100 px-2 py-0.5 text-xs font-medium text-blue-600 dark:bg-blue-900 dark:text-blue-400">
                          {item.badge}
                        </span>
                      )}
                    </>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}

export { Sidebar };
