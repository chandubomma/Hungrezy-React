import { Image } from "@chakra-ui/react";
import { BadgeCheckIcon } from "@heroicons/react/outline";
import { Badge, Select, SelectItem, Text } from "@tremor/react";
import { useEffect, useState } from "react";
import { RiDraftLine } from "react-icons/ri";
import error from "../../../assets/error.png";
import Skeleton from "./Skeleton";

const OrdersTable = ({ customerId }) => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [statusFilter, setStatusFilter] = useState("all");

  useEffect(() => {
    setLoading(true);
    fetchOrders();
    setLoading(false);
  }, [customerId, statusFilter]);

  console.log(orders);

  const fetchOrders = async () => {
    const response = await fetch(
      `${
        import.meta.env.VITE_HUNGREZY_API
      }/api/order/user/${customerId}?status=${statusFilter}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    if (!response.ok) {
      setError("An error occurred while fetching orders");
      setOrders([]);
      return;
    }
    const result = await response.json();
    setOrders(result.data);
  };

  if (loading) {
    return <Skeleton />;
  }

  return (
    <div className="px-4">
      <div className="flex sm:flex-row flex-col gap-y-5 items-center mt-2 sm:gap-x-5">
        <div className="flex items-center gap-2">
          <p className="text-sm font-semibold text-gray-500 pt-3">
            Status: &nbsp;
          </p>
          <Select
            className="w-[10rem]"
            placeholder="Status"
            defaultValue="all"
            value={statusFilter}
            onValueChange={setStatusFilter}
          >
            <SelectItem className="cursor-pointer" value="all">
              All
            </SelectItem>
            <SelectItem className="cursor-pointer" value="processing">Processing</SelectItem>
            <SelectItem className="cursor-pointer" value="delivered">Delivered</SelectItem>
            <SelectItem className="cursor-pointer" value="cancelled">Cancelled</SelectItem>
          </Select>
        </div>
      </div>
      {orders.length === 0 ? (
        <div className="flex flex-col items-center justify-center my-20">
          <p className="text-orange-600 text-base font-semibold text-center">
            No orders found
          </p>
          <Image src={error} alt="No Orders" />
        </div>
      ) : (
        <div className="overflow-scroll border border-gray-200 rounded-md h-[30rem] mb-10 mt-4">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Date
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Address
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Price
                </th>

                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {orders.map((item) => (
                <tr key={item._id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {new Date(item.orderedAt).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {item.address}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {item.paymentDetails.method.charAt(0).toUpperCase() +
                      item.paymentDetails.method.slice(1)}{" "}
                    &#8377; {item.paymentDetails.amount}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {item.status ? (
                      <Badge
                        className="px-3 py-1 flex items-center w-28"
                        color={
                          item.status === "delivered"
                            ? "green"
                            : item.status === "processing"
                            ? "blue"
                            : "red"
                        }
                        icon={
                          item.status === "delivered"
                            ? BadgeCheckIcon
                            : item.status === "processing"
                            ? RiDraftLine
                            : RiDraftLine
                        }
                      >
                        <Text>
                          {item.status.charAt(0).toUpperCase() +
                            item.status.slice(1)}
                        </Text>
                      </Badge>
                    ) : (
                      "N/A"
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default OrdersTable;
