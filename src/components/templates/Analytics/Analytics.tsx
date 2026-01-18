import Container from "@/components/atoms/container/Container";
import CustomerAnalyticsInformationSection from "@/components/organisms/analytics/customer/CustomerAnalyticsInformationSection";
import CustomersListSection from "@/components/organisms/analytics/customer/CustomersListSection";
import HeadingAnalytics from "@/components/organisms/analytics/Heading";
import AnalyticsInformationSection from "@/components/organisms/analytics/InformationSection";
import AnalyticsStatisticsSection from "@/components/organisms/analytics/StatisticsSection";
import TaskListSection from "@/components/organisms/analytics/task/TaskListSection";
import { useSearchParams } from "next/navigation";

const AnalyticsTemplate: React.FC = () => {
  const searchParams = useSearchParams();
  const currentTab = searchParams.get("tab") || "all";
  const tabs = [
    {
      name: "All",
      query: "all",
      components: (
        <>
          <AnalyticsInformationSection />
          <AnalyticsStatisticsSection />
        </>
      ),
    },
    {
      name: "Customer",
      query: "customer",
      components: (
        <>
          <CustomerAnalyticsInformationSection />
          <CustomersListSection />
        </>
      ),
    },
    {
      name: "Task",
      query: "task",
      components: (
        <>
          <TaskListSection />
        </>
      ),
    },
  ];

  const activeTab = tabs.find((tab) => tab.query === currentTab);

  return (
    <Container className="w-full flex flex-col gap-4 ipad-vertical:gap-7 items-center justify-center text-text dark:text-text-dark lg:pt-0!">
      <HeadingAnalytics />
      {activeTab?.components}
    </Container>
  );
};

export default AnalyticsTemplate;
