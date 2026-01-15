import Container from "@/components/atoms/container/Container";
import HeadingDashboard from "@/components/organisms/dashboard/Heading";
import InformationSection from "@/components/organisms/dashboard/InformationSection";
import StatisticsSection from "@/components/organisms/dashboard/StatisticsSection";

const DashboardTemplate: React.FC = () => {
  return (
    <Container className="w-full flex flex-col gap-4 ipad-vertical:gap-7 items-center justify-center text-text dark:text-text-dark lg:pt-0!">
      <HeadingDashboard />
      <InformationSection />
      <StatisticsSection />
    </Container>
  );
};

export default DashboardTemplate;
