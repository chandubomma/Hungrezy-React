import { BarChart } from "@tremor/react";
import { ordersData } from "../../data/orderItems";

const janToMar = ordersData.filter((order) => {
  const orderDate = new Date(order.date);
  return orderDate.getMonth() >= 0 && orderDate.getMonth() <= 2;
});

const aprToJun = ordersData.filter((order) => {
  const orderDate = new Date(order.date);
  return orderDate.getMonth() >= 3 && orderDate.getMonth() <= 5;
});

const julToSep = ordersData.filter((order) => {
  const orderDate = new Date(order.date);
  return orderDate.getMonth() >= 6 && orderDate.getMonth() <= 8;
});

const octToDec = ordersData.filter((order) => {
  const orderDate = new Date(order.date);
  return orderDate.getMonth() >= 9 && orderDate.getMonth() <= 11;
});

const chartdata = [
  {
    name: "Jan - Mar",
    "Number of orders": janToMar.length,
  },
  {
    name: "Apr - Jun",
    "Number of orders": aprToJun.length,
  },
  {
    name: "Jul - Sep",
    "Number of orders": julToSep.length,
  },
  {
    name: "Oct - Dec",
    "Number of orders": octToDec.length,
  },
];

const valueFormatter = (number) =>
  `${number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;

export default function BarGraph() {
  return (
    <BarChart
      className="mt-2"
      data={chartdata}
      index="name"
      categories={["Number of orders"]}
      colors={["orange-300"]}
      valueFormatter={valueFormatter}
      yAxisWidth={48}
    />
  );
}
