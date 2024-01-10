import { LuLayoutDashboard } from "react-icons/lu";
import { Link, useLocation } from "react-router-dom";
import { BiDish } from "react-icons/bi";
import { FaRegUser } from "react-icons/fa";
import { IoLogOutOutline } from "react-icons/io5";

const Sidebar = () => {
  const { pathname } = useLocation();
  const isLinkActive = (path) => {
    return pathname === path;
  };
  return (
    <>
      <div className="border-r left-0 w-[17.5rem] h-[70vh] overflow-y-scroll p-3 flex flex-col gap-y-2">
        <Link to="dashboard">
          <div
            className={`${
              isLinkActive("/restaurant/dashboard")
                ? "text-orange-500 bg-orange-50"
                : "text-gray-500"
            } hover:bg-gray-100 w-full px-4 transition-colors duration-300 hover:opacity-80 flex items-center gap-x-4 py-[10px] rounded-md cursor-pointer`}
          >
            <LuLayoutDashboard size={24} />
            <span className="text-base">Dashboard</span>
          </div>
        </Link>

        <Link to="orders">
          <div
            className={`${
              isLinkActive("/restaurant/orders")
                ? "text-orange-500 bg-orange-50"
                : "text-gray-500"
            } hover:bg-gray-100 w-full px-4 transition-colors duration-300 hover:opacity-80 flex items-center gap-x-4 py-[10px] rounded-md cursor-pointer`}
          >
            <LuLayoutDashboard size={24} />
            <span className="text-base">Orders</span>
          </div>
        </Link>

        <Link to="menu">
          <div
            className={`${
              isLinkActive("/restaurant/menu")
                ? "text-orange-500 bg-orange-50"
                : "text-gray-500"
            } hover:bg-gray-100 w-full px-4 transition-colors duration-300 hover:opacity-80 flex items-center gap-x-4 py-[10px] rounded-md cursor-pointer`}
          >
            <BiDish size={24} />
            <span className="text-base">Menu</span>
          </div>
        </Link>
      </div>

      <div className="border-r left-0 w-[17.5rem] h-[15vh] overflow-y-scroll p-3 flex flex-col gap-y-2">
        <Link to="profile">
          <div
            className={`${
              isLinkActive("/restaurant/profile")
                ? "text-orange-500 bg-orange-50"
                : "text-gray-500"
            } hover:bg-gray-100 w-full px-4 transition-colors duration-300 hover:opacity-80 flex items-center gap-x-4 py-[10px] rounded-md cursor-pointer`}
          >
            <FaRegUser size={24} />
            <span className="text-base">Profile</span>
          </div>
        </Link>
        <Link to="profile">
          <div
            className={`hover:bg-gray-100 w-full px-4 transition-colors duration-300 hover:opacity-80 flex items-center gap-x-4 py-[10px] rounded-md cursor-pointer`}
          >
            <IoLogOutOutline className="text-red-400" size={24} />
            <span className="text-base text-red-400">Logout</span>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Sidebar;
