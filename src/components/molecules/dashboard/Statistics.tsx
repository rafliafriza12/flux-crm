import { Heading1 } from "@/components/atoms";
import { DropdownButton } from "@/components/atoms/DropdownButton/DropdownButton";

const Statistics: React.FC = () => {
  return (
    <div className="w-full col-span-5 bg-white dark:bg-black rounded-3xl flex flex-col p-6">
      <div className="w-full flex justify-between items-center">
        <Heading1 className=" font-normal!">Statistics</Heading1>
        <div className="h-14 flex items-center gap-3">
          <DropdownButton
            defaultOption="Customer Satisfaction"
            options={["Customer Satisfaction", "Customer Test"]}
          />
          <DropdownButton
            defaultOption="Summary"
            options={["Summary", "Gross", "Net"]}
          />
          <DropdownButton
            variant="primary"
            defaultOption="Yearly"
            options={["Yearly", "Monthly", "Weekly", "Daily"]}
          />
        </div>
      </div>
    </div>
  );
};

export default Statistics;
