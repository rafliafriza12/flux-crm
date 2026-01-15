import CustomerSatisfactionCard from "@/components/molecules/dashboard/CustomerSatisfactionCard";
import Statistics from "@/components/molecules/dashboard/Statistics";

const StatisticsSection: React.FC = () => {
  return (
    <div className="w-full grid grid-cols-1 ipad-vertical:grid-cols-7 gap-4 ipad-vertical:gap-7">
      <CustomerSatisfactionCard />
      <Statistics />
    </div>
  );
};

export default StatisticsSection;
