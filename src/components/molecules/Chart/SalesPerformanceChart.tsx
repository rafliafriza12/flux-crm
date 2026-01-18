"use client";

import { AreaChart, Area, XAxis, ResponsiveContainer, CartesianGrid } from "recharts";

const data = [
  { month: "Jan", value: 3000 },
  { month: "Feb", value: 2800 },
  { month: "Mar", value: 3500 },
  { month: "Apr", value: 3200 },
  { month: "May", value: 3800 },
  { month: "Jun", value: 3400 },
  { month: "Jul", value: 3100 },
];

const SalesPerformanceChart = () => {
  return (
    <ResponsiveContainer width="100%" height={230}>
      <AreaChart data={data} margin={{ top: 10, right: 0, left: 0, bottom: 0 }}>
        <defs>
          <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#9FE870" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#9FE870" stopOpacity={0.1} />
          </linearGradient>
        </defs>
        <CartesianGrid
          strokeDasharray="4"
          vertical={false}
          className="stroke-border dark:stroke-border-dark"
        />
        <XAxis
          dataKey="month"
          axisLine={false}
          tickLine={false}
          tick={{ fill: "#666", fontSize: 12 }}
          dy={10}
        />
        <Area
          type="monotone"
          dataKey="value"
          stroke="#9FE870"
          strokeWidth={2}
          fill="url(#colorSales)"
          dot={false}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default SalesPerformanceChart;
