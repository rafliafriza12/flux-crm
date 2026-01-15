import { BodyMediumMedium, BodySmallMedium } from "@/components/atoms";
import InformationCard from "@/components/molecules/dashboard/InformationCard";

const InformationSection: React.FC = () => {
  return (
    <div className="w-full grid grid-cols-1 ipad-vertical:grid-cols-3 gap-4 ipad-vertical:gap-7">
      <InformationCard title="Revenue" nominal={120873} variant="primary">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1 px-3 py-2 rounded-full bg-[#D9F6C6]">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.1665 5.8335L5.83313 14.1668M14.1665 5.8335H6.66646M14.1665 5.8335V13.3335"
                stroke="black"
                stroke-width="1.66667"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <BodyMediumMedium className="text-black">+ 17%</BodyMediumMedium>
          </div>
          <BodyMediumMedium className="text-black">
            Than last month
          </BodyMediumMedium>
        </div>
      </InformationCard>
      <InformationCard title="Total Purchase" nominal={89203}>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1 px-3 py-2 rounded-full bg-primary">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.1665 5.8335L5.83313 14.1668M14.1665 5.8335H6.66646M14.1665 5.8335V13.3335"
                stroke="black"
                stroke-width="1.66667"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <BodyMediumMedium className="text-black">+ 12%</BodyMediumMedium>
          </div>
          <BodyMediumMedium className="">Than last month</BodyMediumMedium>
        </div>
      </InformationCard>
      <InformationCard title="Sales Target" nominal={50901}>
        <div className="flex h-10 justify-between w-full">
          <div className="rounded-[10px] h-full w-[60%] bg-[#204E4D]"></div>
          <div className="rounded-[10px] h-full w-[28%] bg-primary"></div>
          <div className="rounded-[10px] h-full w-[7%] bg-[#ECFAE2]"></div>
        </div>
        <div className="w-full flex items-center justify-between">
          <div className=" flex items-center gap-4">
            <div className="rounded-full w-4 h-4 bg-[#204E4D]"></div>
            <BodySmallMedium className="text-placeholder dark:text-placeholder-dark">
              Profit
            </BodySmallMedium>
          </div>
          <div className=" flex items-center gap-4">
            <div className="rounded-full w-4 h-4 bg-primary"></div>
            <BodySmallMedium className="text-placeholder dark:text-placeholder-dark">
              Total Earning
            </BodySmallMedium>
          </div>
          <div className=" flex items-center gap-4">
            <div className="rounded-full w-4 h-4 bg-[#ECFAE2]"></div>
            <BodySmallMedium className="text-placeholder dark:text-placeholder-dark">
              Total Target
            </BodySmallMedium>
          </div>
        </div>
      </InformationCard>
    </div>
  );
};

export default InformationSection;
