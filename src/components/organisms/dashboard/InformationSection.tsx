import InformationCard from "@/components/molecules/dashboard/InformationCard";

const InformationSection: React.FC = () => {
  return (
    <div className="w-full grid grid-cols-3 gap-7">
      <InformationCard variant="primary" />
      <InformationCard />
      <InformationCard />
    </div>
  );
};

export default InformationSection;
