"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/atoms/Button";
import { Avatar } from "@/components/atoms/Avatar";
// import { useTheme } from "@/providers/theme-provider";
import { useAuth } from "@/providers/auth-provider";
import { APP_CONFIG, ROUTES } from "@/config/app.config";
import { HeaderNavigate } from "@/config";
import { usePathname } from "next/navigation";
import Container from "@/components/atoms/container/Container";
import Image from "next/image";
import { useState, useEffect } from "react";

export interface HeaderProps {
  className?: string;
}

function Header({ className }: HeaderProps) {
  // const { setTheme, resolvedTheme } = useTheme();
  const { user, isAuthenticated, logout } = useAuth();
  const pathname = usePathname();

  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Sembunyikan navbar jika scroll ke bawah dan sudah melebihi 100px
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsHidden(true);
      } else {
        // Tampilkan navbar jika scroll ke atas
        setIsHidden(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  // const toggleTheme = () => {
  //   setTheme(resolvedTheme === "dark" ? "light" : "dark");
  // };

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full backdrop-blur-sm bg-background transition-transform duration-300 ease-in-out",
        isHidden ? "-translate-y-full" : "translate-y-0",
        className
      )}
    >
      <Container className=" flex h-16 lg:py-10! items-center justify-between">
        <Link href={ROUTES.HOME} className="flex items-center w-20">
          <Image
            src={"/icon/gutech.png"}
            alt="Gutech Developer"
            width={80}
            height={40} // rasio logo
            className="w-full h-auto"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {HeaderNavigate.map((items) => {
            const isActive = pathname === items.href;

            return (
              <Link
                key={items.id}
                href={items.href}
                className={cn(
                  "text-sm font-medium transition-colors border-b-2 border-transparent",
                  isActive
                    ? "text-foreground border-primary"
                    : "text-foreground/60 hover:text-foreground"
                )}
              >
                {items.title}
              </Link>
            );
          })}

          {isAuthenticated && (
            <Link
              href={ROUTES.DASHBOARD}
              className="text-sm font-medium text-foreground/60 hover:text-foreground transition"
            >
              Dashboard
            </Link>
          )}
        </nav>

        {/* <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            <i
              className={cn(
                "text-lg text-foreground",
                resolvedTheme === "dark" ? "ri-sun-line" : "ri-moon-line"
              )}
            />
          </Button>

          {isAuthenticated && user ? (
            <div className="flex items-center gap-3">
              <Avatar src={user.avatar} name={user.name} size="sm" />
              <Button variant="ghost" size="sm" onClick={logout}>
                <i className="ri-logout-box-line" />
                <span className="hidden sm:inline">Logout</span>
              </Button>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <Link href={ROUTES.LOGIN}>
                <Button variant="primary">Contact us</Button>
              </Link>
            </div>
          )}
        </div> */}
      </Container>
    </header>
  );
}

export { Header };
