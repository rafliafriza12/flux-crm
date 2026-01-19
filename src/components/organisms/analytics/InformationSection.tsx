import {
  BodyMediumMedium,
  BodyMediumRegular,
  BodySmallMedium,
  Icon,
} from "@/components/atoms";
import SalesPerformanceChart from "@/components/molecules/Chart/SalesPerformanceChart";
import ProfileMarginsChart from "@/components/molecules/Chart/ProfileMarginsChart";
import StaffPerformanceChart from "@/components/molecules/Chart/StaffPerformanceChart";

const AnalyticsInformationSection = () => {
  const informations = [
    {
      title: "Sales Performance",
      value: "$17,127",
      percentage: "12%",
      chart: <SalesPerformanceChart />,
    },
    {
      title: "Profile Margins",
      value: "$8,132",
      percentage: "12%",
      chart: <ProfileMarginsChart />,
    },
    {
      title: "Staff Performance",
      value: "$97 / 100",
      percentage: "12%",
      chart: <StaffPerformanceChart />,
    },
  ];
  return (
    <div className="w-full grid grid-cols-1 ipad-vertical:grid-cols-3 gap-4 ipad-vertical:gap-7">
      {informations.map((info, index) => (
        <div key={index} className="bg-white dark:bg-black rounded-3xl border border-greyscale-50-light dark:border-greyscale-50-dark w-full p-6 flex flex-col gap-1">
          <div className="flex flex-col gap-1">
            <BodyMediumRegular className="text-[30px]! text-black dark:text-white">
              {info.title}
            </BodyMediumRegular>
            <div className="flex gap-2 items-center">
              <BodyMediumRegular className="text-[32px]! font-medium text-black dark:text-white">
                {info.value}
              </BodyMediumRegular>
              <div className="flex gap-1 items-center text-success bg-alert-success w-fit h-fit rounded-full p-1">
                <Icon name="arrow-up-line" className="text-success" />
                <span className="leading-none font-medium text-success">{info.percentage}</span>
              </div>
              <p className="text-[#979797] font-medium">vs last years</p>
            </div>
            {info.chart}
          </div>
        </div>
      ))}
    </div>
  );
};

export default AnalyticsInformationSection;
