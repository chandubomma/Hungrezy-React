import {
  Select,
  SelectItem,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
} from "@tremor/react";
import { useEffect, useState } from "react";
import { FaChevronRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { IoEye } from "react-icons/io5";
import { customersData } from "../../../data/customers";
import { MdEmail, MdPhone } from "react-icons/md";

const CustomersList = () => {
  const [dateFilter, setDateFilter] = useState("all");
  const [customers, setCustomers] = useState(customersData);

  useEffect(() => {
    setCustomers(customersData);
  }, [dateFilter, customers]);

  const filteredCustomers = customersData.filter((customer) => {
    if (!dateFilter || dateFilter === "all") {
      return true;
    }

    const customerDate = new Date(customer.date);
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
          customerDate.getDate() === today.getDate() &&
          customerDate.getMonth() === today.getMonth() &&
          customerDate.getFullYear() === today.getFullYear()
        );
      case "last-week":
        return customerDate >= lastWeek;
      case "last-month":
        return customerDate >= lastMonth;
      case "last-year":
        return customerDate >= lastYear;
      default:
        return true;
    }
  });

  return (
    <div className="px-4">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-medium">Customers List</h1>
        <div className="flex items-center py-2.5 gap-2 mx-5">
          <p>Admin</p>
          <span>
            <FaChevronRight className="text-gray-500" />
          </span>
          <p className="text-orange-500 underline">Customers List</p>
        </div>
      </div>
      <div className="flex sm:flex-row flex-col gap-y-5 items-center mt-2 sm:gap-x-5">
        <div className="flex items-center gap-2">
          <p className="text-sm font-semibold text-gray-500 pt-3">
            Date: &nbsp;
          </p>
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
            <TableHeaderCell>Name</TableHeaderCell>
            <TableHeaderCell>Email</TableHeaderCell>
            <TableHeaderCell>Mobile Number</TableHeaderCell>
            <TableHeaderCell>Actions</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredCustomers.map((customer) => (
            <TableRow key={customer.id}>
              <TableCell>{customer.date}</TableCell>
              <TableCell>{customer.name}</TableCell>
              <TableCell>
                <div className="flex gap-x-2">
                  <MdEmail className="w-5 h-5 text-gray-500" />
                  {customer.email}
                </div>
              </TableCell>
              <TableCell>
                <div className="flex gap-x-2">
                  <MdPhone className="w-5 h-5 text-gray-500" />
                  {customer.mobileNumber}
                </div>
              </TableCell>
              <TableCell>
                <Link to={`/admin/customers/${customer.id}`}>
                  <IoEye className="w-6 h-6 text-gray-500" />
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default CustomersList;
