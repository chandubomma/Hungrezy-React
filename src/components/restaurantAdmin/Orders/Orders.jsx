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
import { MdFoodBank } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { useEffect, useState } from "react";
import { FaChevronRight } from "react-icons/fa6";
import { ordersData } from "../../../data/orderItems";
import { Link } from "react-router-dom";
import { IoEye } from "react-icons/io5";
import { HiMiniBolt } from "react-icons/hi2";

const Orders = () => {
  const [statusFilter, setStatusFilter] = useState("new");
  const [dateFilter, setDateFilter] = useState("today");
  const [orders, setOrders] = useState(ordersData);

  const handleAccept = (orderId) => {
    const orderIndex = ordersData.findIndex(
      (order) => order.orderId === orderId
    );
    const newOrders = [...ordersData];
    newOrders[orderIndex].status = "pending";
    setOrders(newOrders);
  };

  useEffect(() => {
    setOrders(ordersData);
  }, [statusFilter, dateFilter, orders]);

  const filteredOrders = ordersData.filter((order) => {
    if (
      (!statusFilter || statusFilter === "all") &&
      (!dateFilter || dateFilter === "all")
    ) {
      return true;
    }

    const statusCondition =
      !statusFilter || statusFilter === order.status || statusFilter === "all";
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
    <div className="px-4">
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
      <div className="flex sm:flex-row flex-col gap-y-5 items-center mt-2 sm:gap-x-5">
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
            <SelectItem value="new" className="cursor-pointer">
              New
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
            <TableHeaderCell>Actions</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredOrders.map((order) => (
            <TableRow key={order.orderId}>
              <TableCell>{order.date}</TableCell>
              <TableCell>{order.orderId}</TableCell>
              <TableCell>{order.customerName}</TableCell>
              <TableCell>&#8377;{order.total}</TableCell>
              <TableCell>
                <Badge
                  className="px-3 py-1 flex items-center w-28"
                  color={
                    order.status === "delivered"
                      ? "green"
                      : order.status === "pending"
                      ? "yellow"
                      : order.status === "new"
                      ? "blue"
                      : "red"
                  }
                  icon={
                    order.status === "delivered"
                      ? BadgeCheckIcon
                      : order.status === "pending"
                      ? MdOutlinePending
                      : order.status === "new"
                      ? MdFoodBank
                      : RxCross2
                  }
                >
                  <Text>
                    {order.status.charAt(0).toUpperCase() +
                      order.status.slice(1)}
                  </Text>
                </Badge>
              </TableCell>
              {order.status === "new" && (
                <TableCell className="flex items-center justify-center lg:-ml-14 md:-ml-10">
                  <div className="flex w-fit gap-3">
                    <Link
                      to={`/restaurant/orders/${order.orderId}`}
                      className="flex items-center justify-center rounded-md cursor-pointer underline"
                    >
                      <IoEye className="w-5 h-5 text-gray-500" />
                    </Link>
                    <Badge
                      onClick={() => handleAccept(order.orderId)}
                      className="px-3 py-1 flex items-center w-28 cursor-pointer hover:scale-105 transition-all"
                      color={"green"}
                      icon={HiMiniBolt}
                    >
                      <Text>Accept</Text>
                    </Badge>
                  </div>
                </TableCell>
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Orders;
