"use client";

import { cn } from "@/lib/utils";
import { Avatar } from "@/components/atoms/Avatar";
import { Badge } from "@/components/atoms/Badge";
import type { User } from "@/types/user.types";

/**
 * UserCard Component - Molecule
 * A card component for displaying user information
 */

export interface UserCardProps extends React.HTMLAttributes<HTMLDivElement> {
  user: Pick<User, "name" | "email" | "avatar" | "role">;
  showRole?: boolean;
  size?: "sm" | "md" | "lg";
}

const roleColors = {
  admin: "danger" as const,
  user: "primary" as const,
  guest: "secondary" as const,
};

function UserCard({
  user,
  showRole = true,
  size = "md",
  className,
  ...props
}: UserCardProps) {
  return (
    <div
      className={cn("flex items-center gap-3 rounded-lg p-3", className)}
      {...props}
    >
      <Avatar
        src={user.avatar}
        name={user.name}
        size={size === "sm" ? "sm" : size === "lg" ? "lg" : "md"}
      />
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2">
          <p
            className={cn(
              "font-medium text-gray-900 dark:text-gray-100 truncate",
              size === "sm"
                ? "text-sm"
                : size === "lg"
                ? "text-lg"
                : "text-base"
            )}
          >
            {user.name}
          </p>
          {showRole && user.role && (
            <Badge variant={roleColors[user.role]} size="xs">
              {user.role}
            </Badge>
          )}
        </div>
        <p
          className={cn(
            "text-gray-500 dark:text-gray-400 truncate",
            size === "sm" ? "text-xs" : "text-sm"
          )}
        >
          {user.email}
        </p>
      </div>
    </div>
  );
}

export { UserCard };
