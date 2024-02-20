import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaChevronRight, FaStar } from "react-icons/fa6";
import { IoEye } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
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
import { restaurantsData } from "../../../data/restaurants";
import { BadgeCheckIcon } from "@heroicons/react/outline";
import { RxCross2 } from "react-icons/rx";
import { MdOutlinePending } from "react-icons/md";

const RestaurantsList = () => {
  const [statusFilter, setStatusFilter] = useState("all");
  const [ratingFilter, setRatingFilter] = useState("all");
  const [restaurants, setRestaurants] = useState(restaurantsData);

  useEffect(() => {
    setRestaurants(restaurantsData);
  }, [statusFilter, ratingFilter]);

  const filteredRestaurants = restaurants.filter((restaurant) => {
    if (statusFilter !== "all" && restaurant.status !== statusFilter) {
      return false;
    }
    if (
      ratingFilter !== "all" &&
      parseFloat(restaurant.rating) < parseFloat(ratingFilter)
    ) {
      return false;
    }

    return true;
  });

  return (
    <div className="px-4">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-medium">Restaurants List</h1>
        <div className="flex items-center py-2.5 gap-2 mx-5">
          <p>Admin</p>
          <span>
            <FaChevronRight className="text-gray-500" />
          </span>
          <p className="text-orange-500 underline">Restaurants List</p>
        </div>
      </div>
      <div className="flex sm:flex-row flex-col gap-y-5 items-center mt-2 sm:gap-x-5">
        <div className="flex items-center gap-2">
          <p className="text-sm font-semibold text-gray-500 pt-3">
            Status: &nbsp;
          </p>
          <Select
            className="w-[10rem]"
            placeholder="Status"
            value={statusFilter}
            onValueChange={setStatusFilter}
            defaultValue="all"
          >
            <SelectItem value="all" className="cursor-pointer">
              All
            </SelectItem>
            <SelectItem value="approved" className="cursor-pointer">
              Approved
            </SelectItem>
            <SelectItem value="rejected" className="cursor-pointer">
              Rejected
            </SelectItem>
            <SelectItem value="suspended" className="cursor-pointer">
              Suspended
            </SelectItem>
            <SelectItem value="inprogress" className="cursor-pointer">
              In Progress
            </SelectItem>
          </Select>
        </div>
        <div className="flex items-center gap-2">
          <p className="text-sm font-semibold text-gray-500 pt-3">
            Rating: &nbsp;
          </p>
          <Select
            className="w-[10rem]"
            placeholder="Rating"
            value={ratingFilter}
            onValueChange={setRatingFilter}
            defaultValue="all"
          >
            <SelectItem value="all" className="cursor-pointer">
              All
            </SelectItem>
            <SelectItem value="4" className="cursor-pointer">
              4+
            </SelectItem>
            <SelectItem value="3" className="cursor-pointer">
              3+
            </SelectItem>
            <SelectItem value="2" className="cursor-pointer">
              2+
            </SelectItem>
            <SelectItem value="1" className="cursor-pointer">
              1+
            </SelectItem>
          </Select>
        </div>
      </div>
      <Table className="mt-4 h-[30rem] overflow-y-scroll">
        <TableHead>
          <TableRow>
            <TableHeaderCell>Name</TableHeaderCell>
            <TableHeaderCell>Email</TableHeaderCell>
            <TableHeaderCell>Rating</TableHeaderCell>
            <TableHeaderCell>Status</TableHeaderCell>
            <TableHeaderCell>Actions</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredRestaurants.map((restaurant) => (
            <TableRow key={restaurant.id}>
              <TableCell>{restaurant.name}</TableCell>
              <TableCell>
                <div className="flex gap-x-2">
                  <MdEmail className="w-5 h-5 text-gray-500" />
                  {restaurant.email}
                </div>
              </TableCell>
              <TableCell>
                <div className="flex gap-x-2">
                  <FaStar className="w-5 h-5 text-yellow-500" />
                  {restaurant.rating}
                </div>
              </TableCell>
              <TableCell>
                <Badge
                  className="px-3 py-1 flex items-center w-28"
                  color={
                    restaurant.status === "approved"
                      ? "green"
                      : restaurant.status === "suspended"
                      ? "yellow"
                      : restaurant.status === "inprogress"
                      ? "blue"
                      : "red"
                  }
                  icon={
                    restaurant.status === "approved"
                      ? BadgeCheckIcon
                      : restaurant.status === "rejected"
                      ? RxCross2
                      : restaurant.status === "inprogress"
                      ? MdOutlinePending
                      : RxCross2
                  }
                >
                  <Text>
                    {restaurant.status.charAt(0).toUpperCase() +
                      restaurant.status.slice(1)}
                  </Text>
                </Badge>
              </TableCell>
              <TableCell>
                <Link to={`/admin/restaurants/${restaurant.id}`}>
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

export default RestaurantsList;
