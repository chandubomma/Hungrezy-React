import { LuLayoutDashboard } from "react-icons/lu";
import { Link, useLocation } from "react-router-dom";
import { FaChevronUp, FaRegUser } from "react-icons/fa";
import { IoLogOutOutline } from "react-icons/io5";
import { useState } from "react";
import CustomerLink from "./Sidebar/CustomerLink";
import { CiViewList } from "react-icons/ci";
import { RiPlayListAddFill } from "react-icons/ri";
import { MdOutlineMenuBook, MdReviews } from "react-icons/md";
import { CgDetailsMore } from "react-icons/cg";

const AdminSidebar = () => {
  const { pathname } = useLocation();
  const isLinkActive = (path) => {
    return pathname.startsWith(path);
  };
  const [isCustomerOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isCustomerOpen);
  };

  return (
    <>
      <div className="border-r left-0 w-[17.5rem] h-[70vh] overflow-y-scroll p-3 lg:flex flex-col gap-y-2 none hidden">
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

        <div onClick={toggleMenu}>
          <div
            className={`${
              isCustomerOpen ? "text-gray-500 bg-gray-50" : "text-gray-500"
            } hover:bg-gray-100 w-full px-4 transition-colors duration-300 hover:opacity-80 flex items-center gap-x-4 py-[10px] rounded-md cursor-pointer`}
          >
            <FaRegUser size={24} />
            <span className="text-base">Customers</span>
            {isCustomerOpen ? (
              <FaChevronUp
                className="ml-auto text-lg transition duration-300"
                color={isCustomerOpen ? "#f97316" : "#9ca3af"}
                size={12}
              />
            ) : (
              <FaChevronUp
                color={isCustomerOpen ? "#f97316" : "#9ca3af"}
                size={12}
                className="ml-auto text-lg transform rotate-180 transition duration-300"
              />
            )}
          </div>
        </div>

        {isCustomerOpen && (
          <>
            <div className="ml-8 transition duration-300 transform">
              <CustomerLink
                isCustomerOpen={isLinkActive("/admin/customers")}
                to="customers"
                icon={<CiViewList size={20} />}
                text="Customer List"
              />
              <CustomerLink
                to={`customers/1`}
                isCustomerOpen={isLinkActive("/admin/customers")}
                icon={<CgDetailsMore size={20} />}
                text="Customer Details"
              />
            </div>
          </>
        )}

        <Link to="reviews">
          <div
            className={`${
              isLinkActive("/restaurant/reviews")
                ? "text-orange-500 bg-orange-50"
                : "text-gray-500"
            } hover:bg-gray-100 w-full px-4 transition-colors duration-300 hover:opacity-80 flex items-center gap-x-4 py-[10px] rounded-md cursor-pointer`}
          >
            <MdReviews size={24} />
            <span className="text-base">Reviews</span>
          </div>
        </Link>
      </div>

      <div className="border-r left-0 w-[17.5rem] h-[16vh] p-3 lg:flex flex-col gap-y-2 hidden">
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

export default AdminSidebar;
