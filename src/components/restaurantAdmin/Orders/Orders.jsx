import {
  Badge,
  Select,
  SelectItem,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
  Text,
} from "@tremor/react";
import { BadgeCheckIcon } from "@heroicons/react/outline";
import { MdOutlinePending } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";
import { FaChevronRight } from "react-icons/fa6";

const ordersData = [
  {
    date: "2023-01-01",
    orderId: "1",
    customerName: "John Doe",
    total: "$200",
    status: "delivered",
  },
  {
    date: "2023-01-05",
    orderId: "2",
    customerName: "Jane Doe",
    total: "$150",
    status: "pending",
  },
  {
    date: "2024-01-10",
    orderId: "3",
    customerName: "Bob Smith",
    total: "$300",
    status: "delivered",
  },
  {
    date: "2023-12-15",
    orderId: "4",
    customerName: "Alice Johnson",
    total: "$250",
    status: "pending",
  },
  {
    date: "2024-01-10",
    orderId: "5",
    customerName: "Charlie Brown",
    total: "$180",
    status: "delivered",
  },
  {
    date: "2024-01-12",
    orderId: "6",
    customerName: "Eve Williams",
    total: "$220",
    status: "cancelled",
  },
  {
    date: "2023-10-30",
    orderId: "7",
    customerName: "David Lee",
    total: "$190",
    status: "delivered",
  },
  {
    date: "2024-01-01",
    orderId: "8",
    customerName: "Grace Miller",
    total: "$210",
    status: "cancelled",
  },
];

const Orders = () => {
  const [statusFilter, setStatusFilter] = useState("all");
  const [dateFilter, setDateFilter] = useState("all");

  const filteredOrders = ordersData.filter((order) => {
    if (
      (!statusFilter || statusFilter === "all") &&
      (!dateFilter || dateFilter === "all")
    ) {
      return true;
    }

    const statusCondition = !statusFilter || statusFilter === order.status;
    const orderDate = new Date(order.date);
    const today = new Date();
    let lastWeek = new Date(today);
    lastWeek.setDate(today.getDate() - 7);
    let lastMonth = new Date(today);
    lastMonth.setMonth(today.getMonth() - 1);
    let lastYear = new Date(today);
    lastYear.setFullYear(today.getFullYear() - 1);

    switch (dateFilter) {
      case "today":
        return (
          statusCondition &&
          orderDate.getDate() === today.getDate() &&
          orderDate.getMonth() === today.getMonth() &&
          orderDate.getFullYear() === today.getFullYear()
        );
      case "last-week":
        return statusCondition && orderDate >= lastWeek;
      case "last-month":
        return statusCondition && orderDate >= lastMonth;
      case "last-year":
        return statusCondition && orderDate >= lastYear;
      default:
        return statusCondition;
    }
  });

  return (
    <div className="p-3">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-medium">Orders</h1>
        <div className="flex items-center py-3 gap-2 mx-5">
          <p>Admin</p>
          <span>
            <FaChevronRight className="text-gray-500" />
          </span>
          <p className="text-orange-500 underline">Orders</p>
        </div>
      </div>
      <div className="flex items-center mt-2 gap-x-5">
        <div className="flex items-center">
          <p className="text-sm font-semibold text-gray-500">Status: &nbsp;</p>
          <Select
            className="w-[10rem]"
            placeholder="Status"
            value={statusFilter}
            onValueChange={setStatusFilter}
            defaultValue="all"
          >
            <SelectItem value="all" className="cursor-pointer" defaultChecked>
              All
            </SelectItem>
            <SelectItem value="delivered" className="cursor-pointer">
              Delivered
            </SelectItem>
            <SelectItem value="pending" className="cursor-pointer">
              Pending
            </SelectItem>
            <SelectItem value="cancelled" className="cursor-pointer">
              Cancelled
            </SelectItem>
          </Select>
        </div>
        <div className="flex items-center">
          <p className="text-sm font-semibold text-gray-500">Date: &nbsp;</p>
          <Select
            className="w-[10rem]"
            placeholder="Date"
            value={dateFilter}
            onValueChange={setDateFilter}
            defaultValue="all"
          >
            <SelectItem value="all" className="cursor-pointer">
              All
            </SelectItem>
            <SelectItem value="today" className="cursor-pointer">
              Today
            </SelectItem>
            <SelectItem value="last-week" className="cursor-pointer">
              Last Week
            </SelectItem>
            <SelectItem value="last-month" className="cursor-pointer">
              Last Month
            </SelectItem>
            <SelectItem value="last-year" className="cursor-pointer">
              Last Year
            </SelectItem>
          </Select>
        </div>
      </div>
      <Table className="mt-4 h-[30rem] overflow-y-scroll">
        <TableHead>
          <TableRow>
            <TableHeaderCell>Date</TableHeaderCell>
            <TableHeaderCell>Order ID</TableHeaderCell>
            <TableHeaderCell>Customer Name</TableHeaderCell>
            <TableHeaderCell>Total</TableHeaderCell>
            <TableHeaderCell>Status</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredOrders.map((order) => (
            <TableRow key={order.orderId}>
              <TableCell>{order.date}</TableCell>
              <TableCell>{order.orderId}</TableCell>
              <TableCell>{order.customerName}</TableCell>
              <TableCell>{order.total}</TableCell>
              <TableCell>
                <Badge
                  className="px-3 py-1 flex items-center w-28"
                  color={
                    order.status === "delivered"
                      ? "green"
                      : order.status === "pending"
                      ? "yellow"
                      : "red"
                  }
                  icon={
                    order.status === "delivered"
                      ? BadgeCheckIcon
                      : order.status === "pending"
                      ? MdOutlinePending
                      : RxCross2
                  }
                >
                  <Text>
                    {order.status.charAt(0).toUpperCase() +
                      order.status.slice(1)}
                  </Text>
                </Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Orders;
