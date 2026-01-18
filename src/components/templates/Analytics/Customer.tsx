import Container from "@/components/atoms/container/Container";
import HeadingAnalytics from "@/components/organisms/analytics/Heading";
import InformationSection from "@/components/organisms/analytics/customer/CustomerAnalyticsInformationSection";
import StatisticsSection from "@/components/organisms/analytics/StatisticsSection";
import CustomersListSection from "@/components/organisms/analytics/customer/CustomersListSection";

const AnalyticsCustomerTemplate: React.FC = () => {
  return (
    <Container className="w-full flex flex-col gap-4 ipad-vertical:gap-7 items-center justify-center text-text dark:text-text-dark lg:pt-0!">
      <InformationSection />
      <CustomersListSection />
    </Container>
  );
};

export default AnalyticsCustomerTemplate;
