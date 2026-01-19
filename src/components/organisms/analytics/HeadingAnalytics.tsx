"use client";

import { BodySmallMedium, Heading1 } from "@/components/atoms";
import HeadingButtonList from "@/components/molecules/analytics/HeadingButtonList";
import CustomerHeadingButtonList from "@/components/molecules/analytics/CustomerHeadingButtonList";
import TaskHeadingButtonList from "@/components/molecules/analytics/TaskHeadingButtonList";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface HeadingAnalyticsProps {
  variant?: "all" | "customer" | "task";
  onAddNewTask?: () => void;
}

const HeadingAnalytics: React.FC<HeadingAnalyticsProps> = ({ variant = "all", onAddNewTask }) => {
  const pathname = usePathname();

  // Determine current tab based on pathname
  const getCurrentTab = () => {
    if (pathname === "/analytics/customer" || pathname.startsWith("/analytics/customer/")) {
      return "customer";
    }
    if (pathname === "/analytics/task" || pathname.startsWith("/analytics/task/")) {
      return "task";
    }
    return "all";
  };

  const currentTab = variant !== "all" ? variant : getCurrentTab();

  const tabs = [
    {
      name: "all",
      headingText: "Analytics",
      label: "All",
      href: "/analytics",
      icon: (
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_12102_14976)">
            <path
              d="M12 13.5V15H3.75V13.5H12ZM15.75 8.25V9.75H2.25V8.25H15.75ZM14.25 3V4.5H6V3H14.25Z"
              className={`${currentTab === "all" ? "fill-black" : "dark:fill-white fill-black"}`}
            />
          </g>
          <defs>
            <clipPath id="clip0_12102_14976">
              <rect width="18" height="18" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ),
    },
    {
      name: "customer",
      headingText: "Customer",
      label: "Customer",
      href: "/analytics/customer",
      icon: (
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_12102_15980)">
            <path
              d="M15 16.5H13.5V15C13.5 14.4033 13.2629 13.831 12.841 13.409C12.419 12.9871 11.8467 12.75 11.25 12.75H6.75C6.15326 12.75 5.58097 12.9871 5.15901 13.409C4.73705 13.831 4.5 14.4033 4.5 15V16.5H3V15C3 14.0054 3.39509 13.0516 4.09835 12.3483C4.80161 11.6451 5.75544 11.25 6.75 11.25H11.25C12.2446 11.25 13.1984 11.6451 13.9017 12.3483C14.6049 13.0516 15 14.0054 15 15V16.5ZM9 9.75C8.40905 9.75 7.82389 9.6336 7.27792 9.40746C6.73196 9.18131 6.23588 8.84984 5.81802 8.43198C5.40016 8.01412 5.06869 7.51804 4.84254 6.97208C4.6164 6.42611 4.5 5.84095 4.5 5.25C4.5 4.65905 4.6164 4.07389 4.84254 3.52792C5.06869 2.98196 5.40016 2.48588 5.81802 2.06802C6.23588 1.65016 6.73196 1.31869 7.27792 1.09254C7.82389 0.866396 8.40905 0.75 9 0.75C10.1935 0.75 11.3381 1.22411 12.182 2.06802C13.0259 2.91193 13.5 4.05653 13.5 5.25C13.5 6.44347 13.0259 7.58807 12.182 8.43198C11.3381 9.27589 10.1935 9.75 9 9.75V9.75ZM9 8.25C9.79565 8.25 10.5587 7.93393 11.1213 7.37132C11.6839 6.80871 12 6.04565 12 5.25C12 4.45435 11.6839 3.69129 11.1213 3.12868C10.5587 2.56607 9.79565 2.25 9 2.25C8.20435 2.25 7.44129 2.56607 6.87868 3.12868C6.31607 3.69129 6 4.45435 6 5.25C6 6.04565 6.31607 6.80871 6.87868 7.37132C7.44129 7.93393 8.20435 8.25 9 8.25V8.25Z"
              className={`${currentTab === "customer" ? "fill-black" : "dark:fill-white fill-black"}`}
            />
          </g>
          <defs>
            <clipPath id="clip0_12102_15980">
              <rect width="18" height="18" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ),
    },
    {
      name: "task",
      headingText: "Task",
      label: "Task",
      href: "/analytics/task",
      icon: (
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_12102_26284)">
            <path
              d="M15.75 6V15.7448C15.7507 15.8432 15.732 15.9409 15.6949 16.0322C15.6579 16.1234 15.6032 16.2065 15.534 16.2766C15.4649 16.3468 15.3826 16.4026 15.2919 16.4409C15.2011 16.4792 15.1037 16.4993 15.0052 16.5H2.99475C2.79736 16.5 2.60804 16.4216 2.4684 16.2821C2.32875 16.1426 2.2502 15.9534 2.25 15.756V2.244C2.25 1.84125 2.58675 1.5 3.0015 1.5H11.2477L15.75 6ZM14.25 6.75H10.5V3H3.75V15H14.25V6.75Z"
              className={`${currentTab === "task" ? "fill-black" : "dark:fill-white fill-black"}`}
            />
          </g>
          <defs>
            <clipPath id="clip0_12102_26284">
              <rect width="18" height="18" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ),
    },
  ];

  const renderButtonList = () => {
    switch (currentTab) {
      case "customer":
        return <CustomerHeadingButtonList />;
      case "task":
        return <TaskHeadingButtonList onAddNewTask={onAddNewTask} />;
      default:
        return <HeadingButtonList />;
    }
  };

  return (
    <div className="w-full flex justify-between items-center">
      <div className="flex items-center gap-6">
        <Heading1 className="text-[22px]! ipad-horizontal:text-5xl! ">
          {tabs.find((tab) => tab.name === currentTab)?.headingText || "Analytics"}
        </Heading1>
        <div className="flex gap-2 bg-greyscale-50-light dark:bg-greyscale-50-dark rounded-full p-1">
          {tabs.map((tab, index) => (
            <Link
              key={index}
              href={tab.href}
              className={`rounded-full py-2.5 px-4 flex items-center gap-3 min-w-32.5 w-32.5 justify-center hover:opacity-50 duration-200 ${currentTab === tab.name ? "bg-primary text-black" : "text-black dark:text-white"}`}
            >
              {tab.icon}
              <BodySmallMedium>{tab.label}</BodySmallMedium>
            </Link>
          ))}
        </div>
      </div>

      {renderButtonList()}
    </div>
  );
};

export default HeadingAnalytics;
