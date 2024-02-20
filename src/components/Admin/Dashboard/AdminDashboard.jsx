import { useState } from "react";
import { FaChevronRight } from "react-icons/fa6";
import Counter from "../../Counter";
import Graphs from "./Graphs";

const AdminDashboard = () => {
  const [totalCustomers, setTotalCustomers] = useState(1000);
  const [totalOrders, setTotalOrders] = useState(43450);
  const [totalRestaurants, setTotalRestaurants] = useState(400);

  return (
    <div className="w-full px-4">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-medium">Dashboard</h1>
        <div className="flex items-center py-2.5 gap-2 mx-5">
          <p>Admin</p>
          <span>
            <FaChevronRight className="text-gray-500" />
          </span>
          <p className="text-orange-500 underline">Dashboard</p>
        </div>
      </div>
      <div className="grid md:grid-cols-3 gap-6 grid-cols-1">
        <div className="border-1 rounded-md items-center justify-center gap-y-3 p-3 flex flex-col hover:border-orange-500">
          <Counter to={totalCustomers} />
          <p className="text-lg font-medium">Customers</p>
        </div>
        <div className="border-1 rounded-md items-center justify-center gap-y-3 p-3 flex flex-col hover:border-orange-500">
          <Counter to={totalRestaurants} />
          <p className="text-lg font-medium">Restaurants</p>
        </div>
        <div className="border-1 rounded-md items-center justify-center gap-y-3 p-3 flex flex-col hover:border-orange-500">
          <Counter to={totalOrders} />
          <p className="text-lg font-medium">Orders</p>
        </div>
      </div>

      <Graphs />
    </div>
  );
};

export default AdminDashboard;
