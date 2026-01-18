import {
  BodyMediumMedium,
  BodyMediumRegular,
  BodyXSmallMedium,
  Heading4,
} from "@/components/atoms";
import { SemiCircleGauge } from "@/components/atoms/SemiCircleGauge";

const CustomerSatisfactionCard: React.FC = () => {
  return (
    <div className="ipad-vertical:col-span-2 drop-shadow-[0px_0px_1px_#dfe1e7] dark:drop-shadow-none w-full">
      <svg
        className="w-full h-auto"
        viewBox="0 0 402 452"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <mask
          id="path-1-outside-1_4184_20104"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="402"
          height="452"
          fill="black"
        >
          <rect fill="white" width="402" height="452" />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M25 1C11.7452 1 1 11.7452 1 25V427C1 440.255 11.7452 451 25 451H377C390.255 451 401 440.255 401 427V105.818C401 86.5887 385.411 71 366.182 71C346.952 71 331.363 55.3207 331.363 36.0911C331.363 16.7611 315.693 1 296.363 1H25Z"
          />
        </mask>
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M25 1C11.7452 1 1 11.7452 1 25V427C1 440.255 11.7452 451 25 451H377C390.255 451 401 440.255 401 427V105.818C401 86.5887 385.411 71 366.182 71C346.952 71 331.363 55.3207 331.363 36.0911C331.363 16.7611 315.693 1 296.363 1H25Z"
          className="fill-white dark:fill-black"
        />
        <rect
          x="341.5"
          y="1.5"
          width="59"
          height="59"
          rx="29.5"
          className="fill-white dark:fill-black"
        />
        <rect
          x="341.5"
          y="1.5"
          width="59"
          height="59"
          rx="29.5"
          className="stroke-border dark:stroke-border-dark"
        />
        <path
          d="M361 31C361 31.3315 361.132 31.6495 361.366 31.8839C361.601 32.1183 361.918 32.25 362.25 32.25C362.582 32.25 362.899 32.1183 363.134 31.8839C363.368 31.6495 363.5 31.3315 363.5 31C363.5 30.6685 363.368 30.3505 363.134 30.1161C362.899 29.8817 362.582 29.75 362.25 29.75C361.918 29.75 361.601 29.8817 361.366 30.1161C361.132 30.3505 361 30.6685 361 31ZM369.75 31C369.75 31.3315 369.882 31.6495 370.116 31.8839C370.351 32.1183 370.668 32.25 371 32.25C371.332 32.25 371.649 32.1183 371.884 31.8839C372.118 31.6495 372.25 31.3315 372.25 31C372.25 30.6685 372.118 30.3505 371.884 30.1161C371.649 29.8817 371.332 29.75 371 29.75C370.668 29.75 370.351 29.8817 370.116 30.1161C369.882 30.3505 369.75 30.6685 369.75 31ZM378.5 31C378.5 31.3315 378.632 31.6495 378.866 31.8839C379.101 32.1183 379.418 32.25 379.75 32.25C380.082 32.25 380.399 32.1183 380.634 31.8839C380.868 31.6495 381 31.3315 381 31C381 30.6685 380.868 30.3505 380.634 30.1161C380.399 29.8817 380.082 29.75 379.75 29.75C379.418 29.75 379.101 29.8817 378.866 30.1161C378.632 30.3505 378.5 30.6685 378.5 31Z"
          className="stroke-black dark:stroke-white"
          stroke-width="2.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <foreignObject x="0" y="0" width="402" height="452">
          <div className="w-full h-full p-6 flex flex-col gap-5 items-start justify-between relative z-0 overflow-hidden">
            <div className="flex flex-col  items-start">
              <Heading4 className="font-normal!">
                Customer Satisfaction
              </Heading4>
              <BodyMediumRegular className="text-placeholder dark:text-placeholder-dark">
                Top Positive Feedback
              </BodyMediumRegular>
            </div>
            <SemiCircleGauge value={180} max={300} segments={13} />
            <div className="w-full flex gap-2.5 justify-center">
              <div className="flex items-center gap-1.75">
                <div className="rounded-full w-2.25 h-2.25 bg-[#224F4E]"></div>
                <BodyMediumMedium>Low</BodyMediumMedium>
              </div>
              <div className="flex items-center gap-1.75">
                <div className="rounded-full w-2.25 h-2.25 bg-[#5EBAB9]"></div>
                <BodyMediumMedium>High</BodyMediumMedium>
              </div>
            </div>
            <div className="w-full p-1 flex items-center gap-3 border border-border dark:border-border-dark rounded-full bg-[#F8FAFB] dark:bg-[#0D0D12] ">
              <div className="flex items-center gap-1 py-2 px-3 rounded-full bg-primary">
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
                <BodyMediumMedium className="text-black">
                  + 12%
                </BodyMediumMedium>
              </div>
              <BodyXSmallMedium className="text-placeholder dark:text-placeholder-dark">
                Customer Satisfaction (CSAT): 4.7/5
              </BodyXSmallMedium>
            </div>
            <BodyMediumMedium className="w-full text-center">
              Exceptional support and quick responses
            </BodyMediumMedium>
          </div>
        </foreignObject>
      </svg>
    </div>
  );
};

export default CustomerSatisfactionCard;
