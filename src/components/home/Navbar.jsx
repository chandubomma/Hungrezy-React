import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "./../../assets/logoAsset.png";
import { FaUser, FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
const Navbar = () => {
  const { pathname } = useLocation();
  const [showDropdown, setShowDropdown] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const isLinkActive = (path) => {
    return pathname === path;
  };

  const handleUserClick = () => {
    setShowDropdown(!showDropdown);
  };

  const handleLogout = () => {
    // Implement your logout logic here
    // For example, clear authentication token, user data, etc.
    // Then redirect the user to the home page or login page
    setShowDropdown(false);
  };

  const handleDrawerToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <div className="w-full">
      <div className="hidden lg:flex px-48 py-10 w-full justify-between items-center">
        <Link
          to="/"
          className="flex align-middle items-center gap-2 transition-transform transform hover:scale-110 hover:opacity-80"
        >
          <img src={logo} alt="logo" className="w-16" />
          <h2 className="font-bold text-2xl">Hungrezy</h2>
        </Link>
        <div className="flex items-center gap-10">
          <Link
            to="/"
            className={`${
              isLinkActive("/") ? "text-black font-bold" : "text-gray-500"
            } hover:text-amber-500 transition-colors duration-300 hover:scale-110 hover:opacity-80`}
          >
            Home
          </Link>
          <Link
            to="/restaurants"
            className={`${
              isLinkActive("/restaurants")
                ? "text-black font-bold"
                : "text-gray-500"
            } hover:text-amber-500 transition-colors duration-300 hover:scale-110 hover:opacity-80`}
          >
            Restaurants
          </Link>
          <Link
            to="/about"
            className={`${
              isLinkActive("/about") ? "text-black font-bold" : "text-gray-500"
            } hover:text-amber-500 transition-colors duration-300 hover:scale-110 hover:opacity-80`}
          >
            About
          </Link>
          <Link
            to="/contact"
            className={`${
              isLinkActive("/contact")
                ? "text-black font-bold"
                : "text-gray-500"
            } hover:text-amber-500 transition-colors duration-300 hover:scale-110 hover:opacity-80`}
          >
            Contact Us
          </Link>
        </div>
        <div className="relative">
          <div
            className="w-fit h-fit border-[1.5px] p-2 rounded-full border-gray-500 hover:scale-110 transition-transform transform cursor-pointer"
            onClick={handleUserClick}
          >
            <FaUser className="text-2xl text-gray-500" />
          </div>
          {showDropdown && (
            <div className="absolute top-12 right-0 bg-white border border-gray-300 p-2 w-32 rounded shadow-md">
              <Link
                to="/signup"
                className="block py-1 px-4 hover:font-semibold text-gray-800 hover:text-amber-500 hover:scale-105 transition-colors duration-300 rounded border-b border-gray-300"
              >
                SignUp
              </Link>
              <Link
                to="/signin"
                className="block py-1 px-4 hover:font-semibold text-gray-800 hover:text-amber-500 hover:scale-105 transition-colors duration-300 rounded border-b border-gray-300"
              >
                SignIn
              </Link>
              <button
                onClick={handleLogout}
                className="block py-1 px-4 hover:font-semibold text-gray-800 hover:text-red-500 hover:scale-105 transition-colors duration-300 rounded border-b border-gray-300"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="lg:hidden px-10 py-10 flex justify-between items-center">
        <Link
          to="/"
          className="flex align-middle items-center gap-2 transition-transform transform hover:scale-110 hover:opacity-80"
        >
          <img src={logo} alt="logo" className="w-16" />
          <h2 className="font-bold text-2xl">Hungrezy</h2>
        </Link>
        <div className="relative">
          <div
            className="w-fit h-fit border-[1.5px] p-2 rounded-full border-gray-500 hover:scale-110 transition-transform transform cursor-pointer"
            onClick={handleUserClick}
          >
            <FaUser className="text-2xl text-gray-500" />
          </div>
          {showDropdown && (
            <div className="absolute top-12 right-0 bg-white border border-gray-300 p-2 w-32 rounded shadow-md">
              <Link
                to="/signup"
                className="block py-1 px-4 hover:font-semibold text-gray-800 hover:text-amber-500 hover:scale-105 transition-colors duration-300 rounded border-b border-gray-300"
              >
                SignUp
              </Link>
              <Link
                to="/signin"
                className="block py-1 px-4 hover:font-semibold text-gray-800 hover:text-amber-500 hover:scale-105 transition-colors duration-300 rounded border-b border-gray-300"
              >
                SignIn
              </Link>
              <button
                onClick={handleLogout}
                className="block py-1 px-4 hover:font-semibold text-gray-800 hover:text-red-500 hover:scale-105 transition-colors duration-300 rounded border-b border-gray-300"
              >
                Logout
              </button>
            </div>
          )}
        </div>
        <div>
          <FaBars
            className="text-3xl cursor-pointer"
            onClick={handleDrawerToggle}
          />
        </div>
      </div>

      {/* Drawer for Mobile */}
      {isDrawerOpen && (
        <div className="lg:hidden fixed inset-0 bg-black/80 bg-opacity-30 z-50">
          <div className="bg-white h-full w-72 p-4 fixed top-0 left-0">
            <div className="flex justify-end">
              <FaXmark
                className="text-3xl cursor-pointer"
                onClick={handleDrawerToggle}
              />
            </div>
            <div className="flex flex-col gap-4">
              <Link
                to="/"
                className={`${
                  isLinkActive("/") ? "text-black font-bold" : "text-gray-500"
                } hover:text-amber-500 transition-colors duration-300`}
              >
                Home
              </Link>
              <Link
                to="/restaurants"
                className={`${
                  isLinkActive("/restaurants")
                    ? "text-black font-bold"
                    : "text-gray-500"
                } hover:text-amber-500 transition-colors duration-300`}
              >
                Restaurants
              </Link>
              <Link
                to="/about"
                className={`${
                  isLinkActive("/about")
                    ? "text-black font-bold"
                    : "text-gray-500"
                } hover:text-amber-500 transition-colors duration-300`}
              >
                About
              </Link>
              <Link
                to="/contact"
                className={`${
                  isLinkActive("/contact")
                    ? "text-black font-bold"
                    : "text-gray-500"
                } hover:text-amber-500 transition-colors duration-300`}
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
