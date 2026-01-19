import React from "react";

const InformationStatisticCard = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="w-full relative">
      <svg
        viewBox="0 0 440 200"
        fill="none"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <mask
          id="path-1-outside-1_4184_20104"
          maskUnits="userSpaceOnUse"
          x="-1"
          y="-1"
          width="442"
          height="202"
          className="dark:fill-black fill-white"
        >
          <rect fill="white" x="-1" y="-1" width="442" height="202" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M24 0C10.7452 0 0 10.7452 0 24V176C0 189.255 10.7452 200 24 200H416C429.255 200 440 189.255 440 176V104.318C440 85.3649 424.635 70 405.682 70C386.728 70 371.363 54.2977 371.363 35.3442C371.363 16.0142 355.693 0 336.363 0H24Z"
          />
        </mask>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M24 0C10.7452 0 0 10.7452 0 24V176C0 189.255 10.7452 200 24 200H416C429.255 200 440 189.255 440 176V104.318C440 85.3649 424.635 70 405.682 70C386.728 70 371.363 54.2977 371.363 35.3442C371.363 16.0142 355.693 0 336.363 0H24Z"
          className="dark:fill-black fill-white"
        />
        <path
          d="M1 24C1 11.2975 11.2975 1 24 1V-1C10.1929 -1 -1 10.1929 -1 24H1ZM1 176V24H-1V176H1ZM24 199C11.2975 199 1 188.703 1 176H-1C-1 189.807 10.1929 201 24 201V199ZM416 199H24V201H416V199ZM439 176C439 188.703 428.703 199 416 199V201C429.807 201 441 189.807 441 176H439ZM439 104.318V176H441V104.318H439ZM24 1H336.363V-1H24V1ZM372.363 35.3442C372.363 15.4747 356.258 -1 336.363 -1V1C355.128 1 370.363 16.5537 370.363 35.3442H372.363ZM405.682 69C387.293 69 372.363 53.7582 372.363 35.3442H370.363C370.363 54.8372 386.163 71 405.682 71V69ZM441 104.318C441 84.8126 425.187 69 405.682 69V71C424.083 71 439 85.9171 439 104.318H441Z"
          className="dark:fill-[#272835] fill-[#ECEFF3]"
          mask="url(#path-1-outside-1_4184_20104)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M220 -5H345L220 120H345L220 245H95L220 120H95L220 -5Z"
          className="dark:fill-[#272835] fill-[#ECEFF3]"
        />
        <foreignObject x="0" y="0" width="440" height="200">
          <button className="absolute right-0 top-0 w-14.75 h-14.75 dark:bg-black bg-white border-[2.5px] hover:opacity-50 duration-200 border-greyscale-50-light dark:border-greyscale-50-dark rounded-full flex justify-center items-center z-10">
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 15C5 15.3315 5.1317 15.6495 5.36612 15.8839C5.60054 16.1183 5.91848 16.25 6.25 16.25C6.58152 16.25 6.89946 16.1183 7.13388 15.8839C7.3683 15.6495 7.5 15.3315 7.5 15C7.5 14.6685 7.3683 14.3505 7.13388 14.1161C6.89946 13.8817 6.58152 13.75 6.25 13.75C5.91848 13.75 5.60054 13.8817 5.36612 14.1161C5.1317 14.3505 5 14.6685 5 15ZM13.75 15C13.75 15.3315 13.8817 15.6495 14.1161 15.8839C14.3505 16.1183 14.6685 16.25 15 16.25C15.3315 16.25 15.6495 16.1183 15.8839 15.8839C16.1183 15.6495 16.25 15.3315 16.25 15C16.25 14.6685 16.1183 14.3505 15.8839 14.1161C15.6495 13.8817 15.3315 13.75 15 13.75C14.6685 13.75 14.3505 13.8817 14.1161 14.1161C13.8817 14.3505 13.75 14.6685 13.75 15ZM22.5 15C22.5 15.3315 22.6317 15.6495 22.8661 15.8839C23.1005 16.1183 23.4185 16.25 23.75 16.25C24.0815 16.25 24.3995 16.1183 24.6339 15.8839C24.8683 15.6495 25 15.3315 25 15C25 14.6685 24.8683 14.3505 24.6339 14.1161C24.3995 13.8817 24.0815 13.75 23.75 13.75C23.4185 13.75 23.1005 13.8817 22.8661 14.1161C22.6317 14.3505 22.5 14.6685 22.5 15Z"
                className="dark:stroke-white stroke-black"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <div className="w-full h-full p-6 flex flex-col items-start gap-1 relative z-0">
            {children}
          </div>
        </foreignObject>
      </svg>
    </div>
  );
};

export default InformationStatisticCard;
