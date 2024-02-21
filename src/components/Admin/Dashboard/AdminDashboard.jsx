import { useEffect, useState } from "react";
import { FaChevronRight } from "react-icons/fa6";
import Counter from "../../Counter";
import Graphs from "./Graphs";

// Loading Skeleton Component for Restaurants
const LoadingSkeletonRestaurants = () => (
  <div className="border-1 rounded-md animate-pulse items-center justify-center gap-y-3 p-3 flex flex-col">
    <div className="h-10 w-20 bg-gray-200 rounded-md"></div>
    <div className="h-8 w-16 bg-gray-200 rounded-md"></div>
  </div>
);

const AdminDashboard = () => {
  const [totalCustomers, setTotalCustomers] = useState(1000);
  const [totalOrders, setTotalOrders] = useState(43450);
  const [totalRestaurants, setTotalRestaurants] = useState(null);
  const [loadingRestaurants, setLoadingRestaurants] = useState(true);
  const [restaurants, setRestaurants] = useState([
    {
      name: "approved",
      value: 0,
    },
    {
      name: "suspended",
      value: 0,
    },
    {
      name: "inprogress",
      value: 0,
    },
    {
      name: "rejected",
      value: 0,
    },
  ]);

  useEffect(() => {
    fetchRestaurants();
  }, []);

  const fetchRestaurants = async () => {
    try {
      setLoadingRestaurants(true);
      const response = await fetch(
        `${import.meta.env.VITE_HUNGREZY_API}/api/restaurant/count`
      );
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const result = await response.json();
      setTotalRestaurants(result.total);
      const { approved, suspended, inprogress, rejected } = result;

      // Update the state with the extracted counts
      setRestaurants([
        {
          name: "approved",
          value: approved,
        },
        {
          name: "suspended",
          value: suspended,
        },
        {
          name: "inprogress",
          value: inprogress,
        },
        {
          name: "rejected",
          value: rejected,
        },
      ]);
      setLoadingRestaurants(false);
    } catch (error) {
      console.error("Error fetching restaurants count:", error);
      setLoadingRestaurants(false);
    }
  };

  return (
    <div className="w-full px-4">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-medium">Dashboard</h1>
        <div className="flex items-center py-2.5 gap-2 mx-2">
          <p>Admin</p>
          <span>
            <FaChevronRight className="text-gray-500" />
          </span>
          <p className="text-orange-500 underline">Dashboard</p>
        </div>
      </div>
      <div className="grid md:grid-cols-3 gap-6 grid-cols-1">
        {/* Customers Card */}
        <div className="border-1 rounded-md items-center justify-center gap-y-3 p-3 flex flex-col hover:border-orange-500">
          <Counter to={totalCustomers} />
          <p className="text-lg font-medium">Customers</p>
        </div>

        {/* Restaurants Card */}
        {loadingRestaurants || totalRestaurants === null ? (
          <LoadingSkeletonRestaurants />
        ) : (
          <div className="border-1 rounded-md items-center justify-center gap-y-3 p-3 flex flex-col hover:border-orange-500">
            <Counter to={totalRestaurants} />
            <p className="text-lg font-medium">Restaurants</p>
          </div>
        )}

        {/* Orders Card */}
        <div className="border-1 rounded-md items-center justify-center gap-y-3 p-3 flex flex-col hover:border-orange-500">
          <Counter to={totalOrders} />
          <p className="text-lg font-medium">Orders</p>
        </div>
      </div>

      <Graphs restaurants={restaurants} loading={loadingRestaurants} />
    </div>
  );
};

export default AdminDashboard;
