"use client";

import { DashboardLayout } from "@/components/templates/DashboardLayout";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/molecules/Card";
import { Badge } from "@/components/atoms/Badge";
import type { SidebarItem } from "@/components/organisms/Sidebar";

/**
 * Dashboard Page
 */

const sidebarItems: SidebarItem[] = [
  { label: "Dashboard", href: "/dashboard", icon: "ri-dashboard-line" },
  {
    label: "Users",
    href: "/dashboard/users",
    icon: "ri-user-line",
    badge: "New",
  },
  {
    label: "Analytics",
    href: "/dashboard/analytics",
    icon: "ri-bar-chart-line",
  },
  {
    label: "Settings",
    href: "/dashboard/settings",
    icon: "ri-settings-3-line",
  },
];

const stats = [
  { label: "Total Users", value: "2,543", icon: "ri-user-line", trend: "+12%" },
  {
    label: "Active Sessions",
    value: "1,234",
    icon: "ri-pulse-line",
    trend: "+5%",
  },
  {
    label: "Revenue",
    value: "$45,678",
    icon: "ri-money-dollar-circle-line",
    trend: "+23%",
  },
  {
    label: "Growth Rate",
    value: "15.3%",
    icon: "ri-line-chart-line",
    trend: "+2%",
  },
];

export default function DashboardPage() {
  return (
    <DashboardLayout sidebarItems={sidebarItems}>
      <div className="space-y-6">
        {/* Page Header */}
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
            Dashboard
          </h1>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            Welcome back! Here&apos;s an overview of your application.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <Card key={stat.label}>
              <CardContent className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900">
                  <i
                    className={`${stat.icon} text-xl text-blue-600 dark:text-blue-400`}
                  />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {stat.label}
                  </p>
                  <div className="flex items-center gap-2">
                    <p className="text-xl font-bold text-gray-900 dark:text-gray-100">
                      {stat.value}
                    </p>
                    <Badge variant="success" size="xs">
                      {stat.trend}
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Recent Activity */}
        <div className="grid gap-6 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>
                Latest actions in your application
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    action: "User registered",
                    user: "John Doe",
                    time: "2 minutes ago",
                  },
                  {
                    action: "Payment received",
                    user: "Jane Smith",
                    time: "5 minutes ago",
                  },
                  {
                    action: "Order completed",
                    user: "Bob Johnson",
                    time: "10 minutes ago",
                  },
                  {
                    action: "Comment added",
                    user: "Alice Brown",
                    time: "15 minutes ago",
                  },
                ].map((activity, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between border-b border-gray-100 pb-3 last:border-0 last:pb-0 dark:border-gray-800"
                  >
                    <div>
                      <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
                        {activity.action}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        by {activity.user}
                      </p>
                    </div>
                    <span className="text-xs text-gray-400">
                      {activity.time}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
              <CardDescription>Common tasks and shortcuts</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: "Add User", icon: "ri-user-add-line" },
                  { label: "Create Report", icon: "ri-file-chart-line" },
                  { label: "Send Email", icon: "ri-mail-send-line" },
                  { label: "View Analytics", icon: "ri-bar-chart-2-line" },
                ].map((action) => (
                  <button
                    key={action.label}
                    className="flex items-center gap-2 rounded-lg border border-gray-200 p-3 text-left transition-colors hover:bg-gray-50 dark:border-gray-800 dark:hover:bg-gray-900"
                  >
                    <i className={`${action.icon} text-lg text-gray-500`} />
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      {action.label}
                    </span>
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}
