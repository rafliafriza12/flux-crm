"use client";

import { LineChart, Line, XAxis, ResponsiveContainer, CartesianGrid } from "recharts";

const data = [
  { period: "03-07", value: 0 },
  { period: "10-14", value: 88 },
  { period: "17-21", value: 30 },
  { period: "24-28", value: 97, highlight: true },
];

const CustomDot = (props: any) => {
  const { cx, cy, payload } = props;

  if (payload.highlight) {
    return (
      <g>
        <circle cx={cx} cy={cy} r={8} fill="#204E4D" opacity={0.3} />
        <circle cx={cx} cy={cy} r={4} fill="#204E4D" />
      </g>
    );
  }
  return null;
};

const StaffPerformanceChart = () => {
  return (
    <ResponsiveContainer width="100%" height={230}>
      <LineChart data={data} margin={{ top: 10, right: 0, left: 0, bottom: 0 }}>
        <defs>
          <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#204E4D" stopOpacity={0.5} />
            <stop offset="100%" stopColor="#204E4D" stopOpacity={1} />
          </linearGradient>
        </defs>
        <CartesianGrid
          strokeDasharray="4"
          vertical={false}
          className="stroke-border dark:stroke-border-dark"
        />
        <XAxis
          dataKey="period"
          axisLine={false}
          tickLine={false}
          tick={{ fill: "#666", fontSize: 12 }}
          dy={10}
        />
        <Line
          type="monotone"
          dataKey="value"
          stroke="url(#lineGradient)"
          strokeWidth={2}
          dot={<CustomDot />}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default StaffPerformanceChart;
