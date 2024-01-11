import { LineChart } from "@tremor/react";

const userData = [
  {
    date: "Jan",
    Users: 167,
  },
  {
    date: "Feb",
    Users: 125,
  },
  {
    date: "Mar",
    Users: 156,
  },
  {
    date: "Apr",
    Users: 165,
  },
  {
    date: "May",
    Users: 153,
  },
  {
    date: "Jun",
    Users: 124,
  },
  {
    date: "Jul",
    Users: 164,
  },
  {
    date: "Aug",
    Users: 123,
  },
  {
    date: "Sep",
    Users: 132,
  },
  {
    date: "Oct",
    Users: 132,
  },
  {
    date: "Nov",
    Users: 132,
  },
  {
    date: "Dec",
    Users: 132,
  },
];

const customTooltip = ({ payload, active }) => {
  if (!active || !payload) return null;
  return (
    <div className="w-56 rounded-tremor-default text-tremor-default bg-tremor-background p-2 shadow-tremor-dropdown border border-tremor-border">
      {payload.map((category, idx) => (
        <div key={idx} className="flex flex-1 space-x-2.5">
          <div
            className={`w-1 flex flex-col bg-${category.color}-500 rounded`}
          />
          <div className="space-y-1">
            <p className="text-tremor-content">{category.dataKey}</p>
            <p className="font-medium text-tremor-content-emphasis">
              {category.value} Users
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export const AreaGraph = () => {
  return (
    <LineChart
      className="h-72 mt-4"
      data={userData}
      index="date"
      categories={["Users"]}
      colors={["sky"]}
      yAxisWidth={30}
      customTooltip={customTooltip}
    />
  );
};
