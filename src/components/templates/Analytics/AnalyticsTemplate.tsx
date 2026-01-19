"use client";

import Container from "@/components/atoms/container/Container";
import HeadingAnalytics from "@/components/organisms/analytics/HeadingAnalytics";
import AnalyticsInformationSection from "@/components/organisms/analytics/InformationSection";
import AnalyticsStatisticsSection from "@/components/organisms/analytics/StatisticsSection";

const AnalyticsTemplate: React.FC = () => {
  return (
    <Container className="w-full flex flex-col gap-4 ipad-vertical:gap-7 items-center justify-center text-text dark:text-text-dark lg:pt-0!">
      <HeadingAnalytics variant="all" />
      <AnalyticsInformationSection />
      <AnalyticsStatisticsSection />
    </Container>
  );
};

export default AnalyticsTemplate;
