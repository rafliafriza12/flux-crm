"use client";

import Container from "@/components/atoms/container/Container";
import HeadingAnalytics from "@/components/organisms/analytics/HeadingAnalytics";
import CustomerAnalyticsInformationSection from "@/components/organisms/analytics/customer/CustomerAnalyticsInformationSection";
import CustomersListSection from "@/components/organisms/analytics/customer/CustomersListSection";

const CustomerAnalyticsTemplate: React.FC = () => {
  return (
    <Container className="w-full flex flex-col gap-4 ipad-vertical:gap-7 items-center justify-center text-text dark:text-text-dark lg:pt-0!">
      <HeadingAnalytics variant="customer" />
      <CustomerAnalyticsInformationSection />
      <CustomersListSection />
    </Container>
  );
};

export default CustomerAnalyticsTemplate;
