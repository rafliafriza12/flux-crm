import { BodyMediumMedium } from "@/components/atoms";
import { DropdownButton } from "@/components/atoms/DropdownButton/DropdownButton";

const HeadingButtonList: React.FC = () => {
  return (
    <div className="flex items-center gap-1 ipad-vertical:gap-3 h-10.5 ipad-vertical:h-14">
      <DropdownButton defaultOption="Monthly" options={["Daily", "Monthly"]} />
      <div className="h-full w-10.5 ipad-vertical:w-auto ipad-vertical:px-6 rounded-full flex items-center justify-center gap-2.5 bg-foreground dark:bg-foreground-dark">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 17V19C4 19.5304 4.21071 20.0391 4.58579 20.4142C4.96086 20.7893 5.46957 21 6 21H18C18.5304 21 19.0391 20.7893 19.4142 20.4142C19.7893 20.0391 20 19.5304 20 19V17M7 11L12 16M12 16L17 11M12 16V4"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>

        <BodyMediumMedium className="hidden ipad-vertical:block">
          Export
        </BodyMediumMedium>
      </div>
      <div className="h-full ipad-vertical:p-1 ipad-vertical:pr-4 rounded-full flex items-center justify-center gap-2.5 bg-[#204E4D]">
        <div className="h-full w-10.5 ipad-vertical:w-12 ipad-vertical:h-12 rounded-full bg-primary flex justify-center items-center">
          <svg
            width="18"
            height="19"
            viewBox="0 0 18 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 1H17V3.172C16.9999 3.70239 16.7891 4.21101 16.414 4.586L12 9V16L6 18V9.5L1.52 4.572C1.18545 4.20393 1.00005 3.7244 1 3.227V1Z"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <BodyMediumMedium className="text-white hidden ipad-vertical:block">
          Filter
        </BodyMediumMedium>
      </div>
    </div>
  );
};

export default HeadingButtonList;
