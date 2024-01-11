import { FaChevronRight } from "react-icons/fa";
import Counter from "./Counter";
import Graphs from "./Graphs";

const Dashboard = () => {
  return (
    <div className="w-full p-3">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-medium">Dashboard</h1>
        <div className="flex items-center py-3 gap-2 mx-5">
          <p className="hover:underline cursor-pointer hover:text-amber-500">
            Admin
          </p>
          <span>
            <FaChevronRight className="text-orange-500" />
          </span>
          <p>Dashboard</p>
        </div>
      </div>
      <div className="grid md:grid-cols-3 gap-6 grid-cols-1">
        <div className="border rounded-md items-center justify-center gap-y-3 p-3 flex flex-col">
          <Counter to={357200} />
          <p className="text-lg font-medium">Total Revenue</p>
        </div>
        <div className="border rounded-md items-center justify-center gap-y-3 p-3 flex flex-col">
          <Counter to={3200} />
          <p className="text-lg font-medium">New Orders</p>
        </div>
        <div className="border rounded-md items-center justify-center gap-y-3 p-3 flex flex-col">
          <Counter to={521} />
          <p className="text-lg font-medium">Received Orders</p>
        </div>
        <div className="border rounded-md items-center justify-center gap-y-3 p-3 flex flex-col">
          <Counter to={8900} />
          <p className="text-lg font-medium">Reviews</p>
        </div>
        <div className="border rounded-md items-center justify-center gap-y-3 p-3 flex flex-col">
          <Counter to={190} />
          <p className="text-lg font-medium">New Reach</p>
        </div>
        <div className="border rounded-md items-center justify-center gap-y-3 p-3 flex flex-col">
          <Counter to={19048} />
          <p className="text-lg font-medium">Successful Orders</p>
        </div>
      </div>

      <Graphs />
    </div>
  );
};

export default Dashboard;
