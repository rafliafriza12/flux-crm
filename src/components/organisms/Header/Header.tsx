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
import { BodyMediumMedium, BodySmallMedium, Icon } from "@/components/atoms";

export interface HeaderProps {
  className?: string;
}

// Navigation items for mobile sidebar
const navigationItems = [
  { label: "Dashboard", href: ROUTES.DASHBOARD, icon: "home-smile-2-line" },
  { label: "Analytics", href: ROUTES.ANALYTICS, icon: "bar-chart-2-line" },
  { label: "Products", href: ROUTES.PRODUCTS, icon: "function-line" },
  { label: "Invoices", href: ROUTES.INVOICES, icon: "file-copy-2-line" },
  { label: "Calendar", href: ROUTES.CALENDAR, icon: "calendar-check-line" },
];

function Header({ className }: HeaderProps) {
  // const { setTheme, resolvedTheme } = useTheme();
  const { user, isAuthenticated, logout } = useAuth();
  const pathname = usePathname();

  // const [isHidden, setIsHidden] = useState(false);
  // const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const currentScrollY = window.scrollY;

  //     // Sembunyikan navbar jika scroll ke bawah dan sudah melebihi 100px
  //     if (currentScrollY > lastScrollY && currentScrollY > 100) {
  //       setIsHidden(true);
  //     } else {
  //       // Tampilkan navbar jika scroll ke atas
  //       setIsHidden(false);
  //     }

  //     setLastScrollY(currentScrollY);
  //   };

  //   window.addEventListener("scroll", handleScroll, { passive: true });

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, [lastScrollY]);

  useEffect(() => {}, [pathname]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <div className="ipad-horizontal:hidden w-full sticky top-0 z-50 bg-background dark:bg-background-dark">
        <Container className="w-full flex items-center justify-between bg-white dark:bg-black">
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="w-10 h-10 flex items-center justify-center "
            aria-label="Open menu"
          >
            <Icon
              name="menu-4-fill"
              size="lg"
              className=" text-2xl"
            />
          </button>

          <div className="flex items-center gap-2">
            <button className="w-10 h-10 rounded-full flex items-center justify-center border border-border dark:border-border-dark">
              <Icon
                name="search-line"
                size="lg"
                className=" "
              />
            </button>
            <button className="w-10 h-10 rounded-full flex items-center justify-center border border-border dark:border-border-dark">
              <Icon
                name="notification-3-line"
                size="lg"
                className=""
              />
            </button>
            <div className="h-10 rounded-full flex items-center justify-center gap-1.5 bg-foreground dark:bg-foreground-dark pl-1 pr-2">
              <div className="relative w-8 h-8 rounded-full overflow-hidden">
                <Image
                  src="/avatar/1.png"
                  alt="Avatar"
                  fill
                  className="object-cover"
                  sizes="32px"
                  priority
                />
              </div>
              <Icon
                name="arrow-down-s-line"
                size="md"
                className=""
              />
            </div>
          </div>
        </Container>
      </div>

      <div
        className={cn(
          "fixed inset-0 z-100 bg-black/50 transition-opacity duration-300 ipad-horizontal:hidden",
          isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      <aside
        className={cn(
          "fixed top-0 left-0 z-100 h-full w-64 bg-background dark:bg-background-dark transition-transform duration-300 ease-out ipad-horizontal:hidden",
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex items-center justify-between p-4 border-b border-border dark:border-border-dark">
          <div className="flex items-center gap-2">
            <svg
              className="w-6 h-auto"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M20 0H40L20 20H40L20 40H0L20 20H0L20 0Z"
                fill="#9FE870"
              />
            </svg>
            <span className="text-lg font-semibold ">
              FluxCRM
            </span>
          </div>
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-foreground dark:hover:bg-foreground-dark"
            aria-label="Close menu"
          >
            <Icon
              name="layout-right-2-line"
              size="lg"
              className=""
            />
          </button>
        </div>

        <nav className="p-3">
          <ul className="space-y-1">
            {navigationItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      "flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium transition-colors",
                      isActive
                        ? "bg-primary text-black"
                        : " hover:bg-foreground dark:hover:bg-foreground-dark"
                    )}
                  >
                    <Icon name={item.icon} size="lg" />
                    <span>{item.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </aside>

      {/* Desktop Header */}
      <Container className="hidden ipad-horizontal:flex w-full max-w-480 mx-auto items-center justify-between sticky top-0 z-100 backdrop-blur-[5px]">
        <div className=" w-49">
          <svg
            className="w-full h-auto"
            viewBox="0 0 196 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_4184_20104)">
              <mask
                id="mask0_4184_20104"
                style={{ maskType: "luminance" }}
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="40"
                height="40"
              >
                <path d="M0 0H40V40H0V0Z" fill="white" />
              </mask>
              <g mask="url(#mask0_4184_20104)">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M20 0H40L20 20H40L20 40H0L20 20H0L20 0Z"
                  fill="#9FE870"
                />
              </g>
            </g>
            <path
              d="M52.988 34.5V7.68H69.98V10.92H56.516V19.596H68.72V22.836H56.516V34.5H52.988ZM73.2203 34.5V7.248H76.5683V34.5H73.2203ZM88.2793 34.932C86.8873 34.932 85.6273 34.608 84.4993 33.96C83.3953 33.312 82.5313 32.412 81.9073 31.26C81.3073 30.084 81.0073 28.74 81.0073 27.228V15.096H84.3553V26.868C84.3553 27.828 84.5473 28.668 84.9313 29.388C85.3393 30.108 85.8913 30.672 86.5873 31.08C87.3073 31.488 88.1233 31.692 89.0353 31.692C89.9473 31.692 90.7513 31.488 91.4473 31.08C92.1673 30.672 92.7193 30.084 93.1033 29.316C93.5113 28.548 93.7153 27.636 93.7153 26.58V15.096H97.0993V34.5H93.8233V30.72L94.3633 31.044C93.9073 32.268 93.1273 33.228 92.0233 33.924C90.9433 34.596 89.6953 34.932 88.2793 34.932ZM99.7301 34.5L106.534 24.78L99.7661 15.096H103.798L109.594 23.52H107.542L113.266 15.096H117.334L110.566 24.78L117.298 34.5H113.266L107.542 26.076H109.558L103.834 34.5H99.7301ZM132.697 34.932C130.801 34.932 129.049 34.596 127.441 33.924C125.857 33.228 124.465 32.256 123.265 31.008C122.089 29.76 121.177 28.296 120.529 26.616C119.881 24.936 119.557 23.1 119.557 21.108C119.557 19.092 119.881 17.244 120.529 15.564C121.177 13.884 122.089 12.42 123.265 11.172C124.441 9.924 125.833 8.964 127.441 8.292C129.049 7.596 130.801 7.248 132.697 7.248C134.545 7.248 136.201 7.572 137.665 8.22C139.153 8.868 140.401 9.708 141.409 10.74C142.441 11.772 143.173 12.876 143.605 14.052L140.365 15.528C139.741 14.04 138.769 12.84 137.449 11.928C136.129 10.992 134.545 10.524 132.697 10.524C130.825 10.524 129.157 10.968 127.693 11.856C126.253 12.744 125.125 13.98 124.309 15.564C123.493 17.148 123.085 18.996 123.085 21.108C123.085 23.196 123.493 25.032 124.309 26.616C125.125 28.2 126.253 29.436 127.693 30.324C129.157 31.212 130.825 31.656 132.697 31.656C134.545 31.656 136.129 31.2 137.449 30.288C138.769 29.352 139.741 28.14 140.365 26.652L143.605 28.128C143.173 29.304 142.441 30.408 141.409 31.44C140.401 32.472 139.153 33.312 137.665 33.96C136.201 34.608 134.545 34.932 132.697 34.932ZM148.043 34.5V7.68H157.511C159.287 7.68 160.847 8.016 162.191 8.688C163.535 9.36 164.579 10.32 165.323 11.568C166.091 12.816 166.475 14.28 166.475 15.96C166.475 17.856 165.995 19.464 165.035 20.784C164.075 22.104 162.779 23.052 161.147 23.628L167.375 34.5H163.271L156.719 22.872L159.059 24.24H151.571V34.5H148.043ZM151.571 21H157.619C158.675 21 159.599 20.796 160.391 20.388C161.183 19.98 161.795 19.392 162.227 18.624C162.683 17.856 162.911 16.968 162.911 15.96C162.911 14.928 162.683 14.04 162.227 13.296C161.795 12.528 161.183 11.94 160.391 11.532C159.599 11.124 158.675 10.92 157.619 10.92H151.571V21ZM171.027 34.5V7.68H174.267L184.311 21.972H182.655L192.627 7.68H195.867V34.5H192.303V12.144L193.563 12.54L183.591 26.58H183.303L173.439 12.54L174.555 12.144V34.5H171.027Z"
              className="fill-black dark:fill-white"
            />
            <defs>
              <clipPath id="clip0_4184_20104">
                <rect
                  width="40"
                  height="40"
                  fill="white"
                  transform="matrix(-1 0 0 1 40 0)"
                />
              </clipPath>
            </defs>
          </svg>
        </div>

        <div className="h-15 flex items-center p-1  rounded-full bg-foreground dark:bg-foreground-dark">
          <Link
            href={ROUTES.DASHBOARD}
            className={`rounded-full flex items-center gap-3 h-full px-4 hover:opacity-60 duration-200 ${
              pathname === ROUTES.DASHBOARD ? "bg-secound text-white" : "text-black dark:text-white"
            }`}
          >
            <Icon
              name="home-smile-2-line"
              size="lg"
              className=""
            />
            <BodyMediumMedium>
              Dashboard
            </BodyMediumMedium>
          </Link>
          <Link
            href={ROUTES.ANALYTICS}
            className={`rounded-full flex items-center gap-3 h-full px-4 hover:opacity-60 duration-200 ${
              pathname === ROUTES.ANALYTICS ? "bg-secound text-white" : "text-black dark:text-white"
            }`}
          >
            <Icon
              name="bar-chart-2-line"
              size="lg"
              className=""
            />
            <BodyMediumMedium>
              Analytics
            </BodyMediumMedium>
          </Link>
          <Link
            href={ROUTES.PRODUCTS}
            className={`rounded-full flex items-center gap-3 h-full px-4 hover:opacity-60 duration-200 ${
              pathname === ROUTES.PRODUCTS ? "bg-secound text-white" : "text-black dark:text-white"
            }`}
          >
            <Icon
              name="function-line"
              size="lg"
              className=""
            />
            <BodyMediumMedium>
              Products
            </BodyMediumMedium>
          </Link>
          <Link
            href={ROUTES.INVOICES}
            className={`rounded-full flex items-center gap-3 h-full px-4 hover:opacity-60 duration-200 ${
              pathname === ROUTES.INVOICES ? "bg-secound text-white" : "text-black dark:text-white"
            }`}
          >
            <Icon
              name="file-copy-2-line"
              size="lg"
              className=""
            />
            <BodyMediumMedium>
              Invoices
            </BodyMediumMedium>
          </Link>
          <Link
            href={ROUTES.CALENDAR}
            className={`rounded-full flex items-center gap-3 h-full px-4 hover:opacity-60 duration-200 ${
              pathname === ROUTES.CALENDAR ? "bg-secound text-white" : "text-black dark:text-white"
            }`}
          >
            <Icon
              name="calendar-check-line"
              size="lg"
              className=""
            />
            <BodyMediumMedium>
              Calendar
            </BodyMediumMedium>
          </Link>
        </div>
        <div className="flex items-center gap-3 h-15">
          <div className="h-full w-15 rounded-full flex items-center justify-center bg-foreground dark:bg-foreground-dark">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 19L13 13M1 8C1 8.91925 1.18106 9.82951 1.53284 10.6788C1.88463 11.5281 2.40024 12.2997 3.05025 12.9497C3.70026 13.5998 4.47194 14.1154 5.32122 14.4672C6.1705 14.8189 7.08075 15 8 15C8.91925 15 9.82951 14.8189 10.6788 14.4672C11.5281 14.1154 12.2997 13.5998 12.9497 12.9497C13.5998 12.2997 14.1154 11.5281 14.4672 10.6788C14.8189 9.82951 15 8.91925 15 8C15 7.08075 14.8189 6.1705 14.4672 5.32122C14.1154 4.47194 13.5998 3.70026 12.9497 3.05025C12.2997 2.40024 11.5281 1.88463 10.6788 1.53284C9.82951 1.18106 8.91925 1 8 1C7.08075 1 6.1705 1.18106 5.32122 1.53284C4.47194 1.88463 3.70026 2.40024 3.05025 3.05025C2.40024 3.70026 1.88463 4.47194 1.53284 5.32122C1.18106 6.1705 1 7.08075 1 8Z"
                className="stroke-text dark:stroke-text-dark"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div className="h-full w-15 rounded-full flex items-center justify-center bg-foreground dark:bg-foreground-dark">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 17V18C9 18.7956 9.31607 19.5587 9.87868 20.1213C10.4413 20.6839 11.2044 21 12 21C12.7956 21 13.5587 20.6839 14.1213 20.1213C14.6839 19.5587 15 18.7956 15 18V17M10 5C10 4.46957 10.2107 3.96086 10.5858 3.58579C10.9609 3.21071 11.4696 3 12 3C12.5304 3 13.0391 3.21071 13.4142 3.58579C13.7893 3.96086 14 4.46957 14 5C15.1484 5.54303 16.1274 6.38833 16.8321 7.4453C17.5367 8.50227 17.9404 9.73107 18 11V14C18.0753 14.6217 18.2954 15.2171 18.6428 15.7381C18.9902 16.2592 19.4551 16.6914 20 17H4C4.54494 16.6914 5.00981 16.2592 5.35719 15.7381C5.70457 15.2171 5.92474 14.6217 6 14V11C6.05956 9.73107 6.4633 8.50227 7.16795 7.4453C7.8726 6.38833 8.85159 5.54303 10 5Z"
                className="stroke-text dark:stroke-text-dark"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div className="h-full rounded-full flex items-center justify-center gap-2.5 bg-foreground dark:bg-foreground-dark p-4 pl-1 ">
            <div className="relative w-12.5 h-12.5 rounded-full overflow-hidden">
              <Image
                src="/avatar/1.png"
                alt="FluxCRM"
                fill
                className="object-cover"
                sizes="50px"
                priority
              />
            </div>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 9L12 15L18 9"
                className="stroke-text dark:stroke-text-dark"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </Container>
    </>
  );
}

export { Header };
