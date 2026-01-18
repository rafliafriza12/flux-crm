import Container from "@/components/atoms/container/Container";
import HeadingAnalytics from "@/components/organisms/analytics/Heading";
import InformationSection from "@/components/organisms/analytics/InformationSection";
import StatisticsSection from "@/components/organisms/analytics/StatisticsSection";

const AnalyticsTemplate: React.FC = () => {
  return (
    <Container className="w-full flex flex-col gap-4 ipad-vertical:gap-7 items-center justify-center text-text dark:text-text-dark lg:pt-0!">
      <HeadingAnalytics />
      <InformationSection />
      <StatisticsSection />
    </Container>
  );
};

export default AnalyticsTemplate;
