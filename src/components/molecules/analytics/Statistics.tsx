import { Heading1 } from "@/components/atoms";
import { DropdownButton } from "@/components/atoms/DropdownButton/DropdownButton";
import SimpleBarChart from "../Chart/SimpleBarchart";

const Statistics: React.FC = () => {
  return (
    <div className="w-full ipad-vertical:col-span-5 bg-white dark:bg-black rounded-3xl flex flex-col justify-start items-start gap-7 p-6 drop-shadow-[0px_0px_1px_#dfe1e7] dark:drop-shadow-none overflow-visible">
      <div className="w-full h-full flex flex-col ipad-vertical:flex-row justify-between items-start gap-3 overflow-visible">
        <Heading1 className=" font-normal!">Statistics</Heading1>
        <div className="w-full ipad-vertical:w-auto overflow-x-auto overflow-y-visible pb-2 scrollbar-hide">
          <div className="h-10.5 ipad-vertical:h-14 flex items-center gap-1 ipad-vertical:gap-3 w-max ipad-vertical:w-auto">
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
      <div className="w-full">
        <SimpleBarChart />
      </div>
    </div>
  );
};

export default Statistics;
