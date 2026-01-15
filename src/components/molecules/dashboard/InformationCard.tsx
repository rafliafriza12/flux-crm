interface InformationCardProps {
  variant?: "primary" | "secondary";
  title?: string;
  nominal?: number;
  children?: React.ReactNode;
}
const InformationCard: React.FC<InformationCardProps> = ({
  variant = "secondary",
  title,
  nominal,
  children,
}) => {
  return variant === "primary" ? (
    <div className="w-full">
      <svg
        className="w-full h-auto"
        viewBox="0 0 440 250"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <mask
          id="path-1-outside-1_4184_20104"
          maskUnits="userSpaceOnUse"
          x="-1"
          y="-1"
          width="442"
          height="252"
          fill="black"
        >
          <rect fill="white" x="-1" y="-1" width="442" height="252" />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M24 0C10.7452 0 0 10.7452 0 24V226C0 239.255 10.7452 250 24 250H416C429.255 250 440 239.255 440 226V104.5C440 85.4462 424.554 70 405.5 70C386.446 70 371 54.3056 371 35.2518C371 15.9218 355.33 0 336 0H24Z"
          />
        </mask>
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M24 0C10.7452 0 0 10.7452 0 24V226C0 239.255 10.7452 250 24 250H416C429.255 250 440 239.255 440 226V104.5C440 85.4462 424.554 70 405.5 70C386.446 70 371 54.3056 371 35.2518C371 15.9218 355.33 0 336 0H24Z"
          fill="#9FE870"
        />
        <g clip-path="url(#clip0_4184_20104)">
          <mask
            id="mask0_4184_20104"
            style={{ maskType: "luminance" }}
            maskUnits="userSpaceOnUse"
            x="21"
            y="-10"
            width="320"
            height="320"
          >
            <path d="M21 -10H341V310H21V-10Z" fill="white" />
          </mask>
          <g mask="url(#mask0_4184_20104)">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M181 -10H341L181 150H341L181 310H21L181 150H21L181 -10Z"
              fill="#91DD60"
            />
          </g>
        </g>
        <rect x="380.5" y="0.5" width="59" height="59" rx="29.5" fill="black" />
        <rect
          x="380.5"
          y="0.5"
          width="59"
          height="59"
          rx="29.5"
          stroke="#272835"
        />
        <path
          d="M416.25 23.75L403.75 36.25M416.25 23.75H405M416.25 23.75V35"
          stroke="white"
          stroke-width="2.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <defs>
          <clipPath id="clip0_4184_20104">
            <rect
              width="320"
              height="320"
              fill="white"
              transform="matrix(-1 0 0 1 341 -10)"
            />
          </clipPath>
        </defs>
      </svg>
    </div>
  ) : (
    <div className="w-full">
      <svg
        className="w-full h-auto"
        viewBox="0 0 440 250"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <mask
          id="path-1-outside-1_4184_20104"
          maskUnits="userSpaceOnUse"
          x="-1"
          y="-1"
          width="442"
          height="252"
          fill="black"
        >
          <rect fill="white" x="-1" y="-1" width="442" height="252" />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M24 0C10.7452 0 0 10.7452 0 24V226C0 239.255 10.7452 250 24 250H416C429.255 250 440 239.255 440 226V105C440 85.67 424.33 70 405 70C385.67 70 370 54.33 370 35C370 15.67 354.33 0 335 0H24Z"
          />
        </mask>
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M24 0C10.7452 0 0 10.7452 0 24V226C0 239.255 10.7452 250 24 250H416C429.255 250 440 239.255 440 226V105C440 85.67 424.33 70 405 70C385.67 70 370 54.33 370 35C370 15.67 354.33 0 335 0H24Z"
          fill="black"
        />
        <g clip-path="url(#clip0_4184_20104)">
          <mask
            id="mask0_4184_20104"
            style={{ maskType: "luminance" }}
            maskUnits="userSpaceOnUse"
            x="21"
            y="-10"
            width="320"
            height="320"
          >
            <path d="M21 -10H341V310H21V-10Z" fill="white" />
          </mask>
          <g mask="url(#mask0_4184_20104)">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M181 -10H341L181 150H341L181 310H21L181 150H21L181 -10Z"
              fill="#272835"
            />
          </g>
        </g>
        <rect x="380.5" y="0.5" width="59" height="59" rx="29.5" fill="black" />
        <rect
          x="380.5"
          y="0.5"
          width="59"
          height="59"
          rx="29.5"
          stroke="#272835"
        />
        <path
          d="M416.25 23.75L403.75 36.25M416.25 23.75H405M416.25 23.75V35"
          stroke="white"
          stroke-width="2.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <defs>
          <clipPath id="clip0_4184_20104">
            <rect
              width="320"
              height="320"
              fill="white"
              transform="matrix(-1 0 0 1 341 -10)"
            />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};

export default InformationCard;
