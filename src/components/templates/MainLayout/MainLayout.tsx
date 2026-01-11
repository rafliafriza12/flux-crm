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
  showFooter?: boolean;
}

function MainLayout({
  children,
  className,
  showHeader = true,
  showFooter = true,
}: MainLayoutProps) {
  return (
    <div className="flex min-h-svh flex-col bg-background">
      {showHeader && <Header />}
      <main className={cn("flex-1", className)}>{children}</main>
      {showFooter && <Footer />}
    </div>
  );
}

export { MainLayout };
