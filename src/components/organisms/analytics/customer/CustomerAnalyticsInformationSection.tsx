import {
  BodyMediumMedium,
  BodyMediumRegular,
  BodySmallMedium,
  Icon,
} from "@/components/atoms";
import InformationStatisticCard from "@/components/molecules/analytics/InformationStatisticCard";

const CustomerAnalyticsInformationSection: React.FC = () => {
  const informations = [
    {
      icon: <Icon name="contacts-line" className="text-black" />,
      title: "Total Customers",
      value: "27,127",
      percentage: "12%",
      updated: "2 month ago",
    },
    {
      icon: <Icon name="user-follow-line" className="text-black" />,
      title: "Total Members",
      value: "15,127",
      percentage: "12%",
      updated: "2 month ago",
    },
    {
      icon: <Icon name="user-voice-line" className="text-black" />,
      title: "Total Guests",
      value: "58,098",
      percentage: "12%",
      updated: "2 month ago",
    },
  ];
  return (
    <div className="w-full grid grid-cols-1 ipad-vertical:grid-cols-3 gap-4 ipad-vertical:gap-7">
      {informations.map((info, index) => (
        <InformationStatisticCard key={index}>
          <div className="flex gap-2 items-center">
            <div className="bg-primary rounded-full p-2">
              <div className="w-6 h-6 flex justify-center">{info.icon}</div>
            </div>
            <BodyMediumRegular className="text-[30px]! ">
              {info.title}
            </BodyMediumRegular>
          </div>
          <div className="flex gap-2 items-center">
            <BodyMediumRegular className="text-[32px]! font-medium">
              {info.value}
            </BodyMediumRegular>
            <div className="flex gap-1 items-center text-success bg-alert-success w-fit h-fit rounded-full p-1">
              <Icon name="arrow-up-line" className="text-success" />
              <span className="leading-none font-medium">
                {info.percentage}
              </span>
            </div>
            <p className="text-[#979797] font-medium">vs last years</p>
          </div>
          <div className="flex gap-2 items-center mt-auto">
            <Icon name="refresh-line" size="lg" className="text-[#09121F]"/>
            <p className="text-neutral-text text-base font-medium">Updated <span>{info.updated}</span></p>
          </div>
        </InformationStatisticCard>
      ))}
    </div>
  );
};

export default CustomerAnalyticsInformationSection;
