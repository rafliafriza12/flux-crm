import { cn } from "@/lib/utils";
import { Header } from "@/components/organisms/Header";
import { Footer } from "@/components/organisms/Footer";

/**
 * MainLayout Template
 * Main layout with header and footer for public pages
 */

export interface MainLayoutProps {
  children: React.ReactNode;
  className?: string;
  showHeader?: boolean;
}

function MainLayout({
  children,
  className,
  showHeader = true,
}: MainLayoutProps) {
  return (
    <div className="w-full min-h-svh bg-background dark:bg-background-dark ">
      {showHeader && <Header />}
      <main className={cn("max-w-480 mx-auto", className)}>{children}</main>
    </div>
  );
}

export { MainLayout };
