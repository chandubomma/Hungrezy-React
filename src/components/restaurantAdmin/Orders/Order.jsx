import { FaChevronRight, FaCalendarAlt, FaUser } from "react-icons/fa";
import { ordersData } from "../../../data/orderItems";
import { useParams } from "react-router-dom";
import { Badge, Text } from "@tremor/react";
import { BadgeCheckIcon } from "@heroicons/react/outline";
import {
  MdFoodBank,
  MdOutlineFoodBank,
  MdOutlinePending,
} from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { BiSolidFoodMenu } from "react-icons/bi";
import { IoPricetag } from "react-icons/io5";
import { RiQuestionFill } from "react-icons/ri";

const Order = () => {
  const { id } = useParams();
  const orderData = ordersData.find((item) => item.orderId === id);

  return (
    <div className="px-4">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-medium">View Order</h1>
        <div className="flex items-center py-3 gap-2 mx-5">
          <p>Restaurant</p>
          <span>
            <FaChevronRight className="text-gray-500" />
          </span>
          <p className="text-orange-500 underline">Order</p>
        </div>
      </div>
      <div className="border rounded p-4 max-w-4xl items-center mx-auto justify-center">
        <div className="grid grid-cols-1 gap-4 mb-4">
          <div className="flex flex-col">
            <div className="flex justify-between mb-2">
              <p className="text-gray-500 flex items-center">
                <BiSolidFoodMenu className="mr-2" />
                Order ID:
              </p>
              <p className="text-gray-700">{orderData.orderId}</p>
            </div>
            <div className="flex justify-between mb-2">
              <p className="text-gray-500 flex items-center">
                <FaCalendarAlt className="mr-2" />
                Date:
              </p>
              <p className="text-gray-700">{orderData.date}</p>
            </div>
            <div className="flex justify-between mb-2">
              <p className="text-gray-500 flex items-center">
                <FaUser className="mr-2" />
                Customer Name:
              </p>
              <p className="text-gray-700">{orderData.customerName}</p>
            </div>
            <div className="flex justify-between">
              <p className="text-gray-500 flex items-center">
                <IoPricetag className="mr-2" />
                Total Amount:
              </p>
              <p className="text-orange-500 text-xl">
                &#8377;{orderData.total}
              </p>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex justify-between mb-2">
              <p className="text-gray-500 flex items-center">
                <RiQuestionFill className="mr-2" />
                Status:
              </p>
              <Badge
                className="px-3 py-1 flex items-center"
                color={
                  orderData.status === "delivered"
                    ? "green"
                    : orderData.status === "pending"
                    ? "yellow"
                    : orderData.status === "new"
                    ? "blue"
                    : "red"
                }
                icon={
                  orderData.status === "delivered"
                    ? BadgeCheckIcon
                    : orderData.status === "pending"
                    ? MdOutlinePending
                    : orderData.status === "new"
                    ? MdFoodBank
                    : RxCross2
                }
              >
                <Text>
                  {orderData.status.charAt(0).toUpperCase() +
                    orderData.status.slice(1)}
                </Text>
              </Badge>
            </div>
          </div>
        </div>
        <div className="border-t mt-4 pt-4 h-[15rem] overflow-y-scroll">
          <h2 className="text-lg font-semibold mb-2 text-tremor-background-emphasis">Items Ordered</h2>
          <ul>
            {orderData.items.map((item, index) => (
              <li key={index} className="mb-2">
                <div className="flex justify-between">
                  <p className="flex items-center gap-x-3">
                    <MdOutlineFoodBank className="text-orange-500" />

                    {item.itemName}
                  </p>
                  <p className="text-gray-500">
                    {item.quantity} x &#8377;{item.price}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Order;
