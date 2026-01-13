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
    <div className="w-full min-h-svh bg-background p-8">
      {showHeader && <Header />}
      <main className={cn("", className)}>{children}</main>
      {showFooter && <Footer />}
    </div>
  );
}

export { MainLayout };
