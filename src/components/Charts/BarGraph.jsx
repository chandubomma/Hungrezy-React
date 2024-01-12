import { BarChart } from "@tremor/react";

const chartdata = [
  {
    name: "Jan - Mar",
    "Number of orders": 2488,
  },
  {
    name: "Apr - Jun",
    "Number of orders": 1445,
  },
  {
    name: "Jul - Sep",
    "Number of orders": 743,
  },
  {
    name: "Oct - Dec",
    "Number of orders": 281,
  },
];

const valueFormatter = (number) =>
  `${number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;

export default function BarGraph() {
  return (
    <BarChart
      className="mt-6"
      data={chartdata}
      index="name"
      categories={["Number of orders"]}
      colors={["orange-300"]}
      valueFormatter={valueFormatter}
      yAxisWidth={48}
    />
  );
}
