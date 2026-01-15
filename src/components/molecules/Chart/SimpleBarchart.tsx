import { BodySmallMedium, Heading4 } from "@/components/atoms";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

// #region Sample data
const data = [
  {
    name: "Jan",
    profit: 750,
  },
  {
    name: "Feb",
    profit: 1000,
  },
  {
    name: "Mar",
    profit: 820,
  },
  {
    name: "Apr",
    profit: 300,
  },
  {
    name: "May",
    profit: 980,
  },
  {
    name: "Jun",
    profit: 200,
  },
  {
    name: "Jul",
    profit: 360,
  },
  {
    name: "Aug",
    profit: 578,
  },
  {
    name: "Sep",
    profit: 100,
  },
  {
    name: "Oct",
    profit: 120,
  },
  {
    name: "Nov",
    profit: 999,
  },
  {
    name: "Dec",
    profit: 132,
  },
];

// #endregion

// Custom Tooltip Component
interface CustomTooltipProps {
  active?: boolean;
  payload?: Array<{ value: number; dataKey: string }>;
}

const CustomTooltip = ({ active, payload }: CustomTooltipProps) => {
  if (active && payload && payload.length) {
    const value = payload[0].value;
    return (
      <div className="bg-white dark:bg-black rounded-lg px-4 py-3 shadow-lg">
        <div className="flex items-center gap-2 mb-1">
          <span className="w-2 h-2 rounded-full bg-[#9FE870]"></span>
          <BodySmallMedium className="text-placeholder dark:text-placeholder-dark">
            Profit
          </BodySmallMedium>
        </div>
        <Heading4 className=" font-medium">
          $
          {value.toLocaleString("en-US", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}
        </Heading4>
      </div>
    );
  }
  return null;
};

const SimpleBarChart = () => {
  return (
    <BarChart
      style={{
        width: "100%",
        maxHeight: "300px",
        aspectRatio: 1.618,
      }}
      responsive
      data={data}
      margin={{
        top: 5,
        right: 0,
        left: 0,
        bottom: 5,
      }}
    >
      <XAxis dataKey="name" tickLine={false} axisLine={false} stroke="white" />

      <YAxis width="auto" tickLine={false} axisLine={false} stroke="white" />

      <CartesianGrid
        strokeDasharray="10"
        vertical={false}
        className="stroke-border dark:stroke-border-dark"
      />
      <Tooltip content={<CustomTooltip />} cursor={{ fill: "transparent" }} />
      <Bar dataKey="profit" fill="#9FE870" radius={[10, 10, 10, 10]} />
    </BarChart>
  );
};

export default SimpleBarChart;
