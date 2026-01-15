import React from "react";
import { BodySmallMedium, Heading1 } from "./Text";

interface SemiCircleGaugeProps {
  value: number;
  max?: number;
  segments?: number;
}

export const SemiCircleGauge: React.FC<SemiCircleGaugeProps> = ({
  value,
  max = 300,
  segments = 14,
}) => {
  const activeSegments = Math.round((value / max) * segments);
  const hue = 179;

  return (
    <svg
      className="w-[80%] mx-auto "
      viewBox="0 0 360 200"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g transform="translate(180,180)">
        {Array.from({ length: segments }).map((_, i) => {
          const angle = -180 + (i * 180) / (segments - 1);
          const isActive = i < activeSegments;

          const lightness = 22 + (i / (segments - 1)) * (55 - 22);

          return (
            <rect
              key={i}
              x={120}
              y={-8}
              width={48}
              height={18}
              rx={8}
              className={
                isActive ? `` : "fill-foreground dark:fill-foreground-dark"
              }
              fill={isActive ? `hsl(${hue}, 40%, ${lightness}%)` : ""}
              transform={`rotate(${angle})`}
            />
          );
        })}
      </g>
      <foreignObject x="0" y="0" width="360" height="200">
        <div className="w-full h-full flex flex-col gap-2 items-center justify-end ">
          <Heading1>{value}</Heading1>
          <BodySmallMedium className="text-placeholder dark:text-placeholder-dark">
            Responses this month
          </BodySmallMedium>
        </div>
      </foreignObject>
    </svg>
  );
};
