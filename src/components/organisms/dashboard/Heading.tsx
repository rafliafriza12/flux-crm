import {
  BodyMediumMedium,
  BodyMediumRegular,
  Heading1,
} from "@/components/atoms";
import { DropdownButton } from "@/components/atoms/DropdownButton/DropdownButton";
import HeadingButtonList from "@/components/molecules/dashboard/HeadingButtonList";

const HeadingDashboard: React.FC = () => {
  return (
    <div className="w-full flex justify-between items-center">
      <div className="flex flex-col items-start gap-3">
        <Heading1 className="text-[22px]! ipad-horizontal:text-5xl! ">
          Sales Overview
        </Heading1>
        <BodyMediumRegular className="hidden ipad-vertical:block">
          Analyze sales trends to make data-driven decisions
        </BodyMediumRegular>
      </div>

      <HeadingButtonList />
    </div>
  );
};

export default HeadingDashboard;
