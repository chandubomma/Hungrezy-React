import { motion } from "framer-motion";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "./../../assets/logoAsset.png";
import { FaBars, FaSearch } from "react-icons/fa";
import {
  Icon,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { FaUser, FaXmark } from "react-icons/fa6";
import { LuUser2 } from "react-icons/lu";
import { IoLogOutOutline } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";

const RestaurantNavbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const { pathname } = useLocation();

  const isLinkActive = (path) => {
    return pathname === path;
  };

  const handleDrawerToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <div>
      <div className="hidden lg:flex px-14 w-full justify-between items-center border-b">
        <div className="w-[14rem] border-r">
          <Link
            to="/"
            className="flex align-middle items-center gap-2 transition-transform transform hover:opacity-80"
          >
            <img src={logo} alt="logo" className="w-16 py-3" />
            <h2 className="font-bold text-2xl">Hungrezy</h2>
          </Link>
        </div>
        <div className="flex-[11] flex justify-between items-center w-full ml-10">
          <div className="flex items-center gap-x-4 border px-4 py-2 rounded-3xl bg-gray-50">
            <FaSearch className="text-gray-500 font-light" />
            <input
              className="outline-none focus:outline-none bg-gray-50"
              placeholder="Search for items..."
            />
          </div>
          <div className="flex gap-x-4 items-center">
            <Menu>
              <MenuButton
                as={IconButton}
                aria-label="Options"
                icon={<IoMdNotificationsOutline className="w-6 h-6" />}
                variant="outline"
                className="bg-gray-200"
                borderRadius={"50%"}
                size={"lg"}
              />
              <MenuList>
                <MenuItem>Notification</MenuItem>
              </MenuList>
            </Menu>
            <Menu>
              <MenuButton
                as={IconButton}
                aria-label="Options"
                icon={<FaUser className="w-6 h-6" />}
                variant="outline"
                className="bg-gray-200"
                borderRadius={"50%"}
                size={"lg"}
              />
              <MenuList>
                <MenuItem icon={<LuUser2 className="w-[18px] h-[18px]" />}>
                  My Profile
                </MenuItem>
                <MenuItem
                  className="flex gap-[10px] items-center"
                  _hover={{ backgroundColor: "red.50" }}
                >
                  <Icon color={"red.400"} as={IoLogOutOutline} w={5} h={5} />
                  <p className="text-red-400">Log Out</p>
                </MenuItem>
              </MenuList>
            </Menu>
            <div className="py-2">
              <p className="text-base font-semibold">Pista House</p>
              <p className="text-sm font-normal">pistahouse@gmail.com</p>
            </div>
          </div>
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

        <div className="flex items-center justify-between gap-3">
          <div className="relative flex gap-x-3">
            <Menu>
              <MenuButton
                as={IconButton}
                aria-label="Options"
                icon={<IoMdNotificationsOutline className="w-6 h-6" />}
                variant="outline"
                className="bg-gray-200"
                borderRadius={"50%"}
                size={"lg"}
              />
              <MenuList>
                <MenuItem>Notification</MenuItem>
              </MenuList>
            </Menu>
            <Menu>
              <MenuButton
                as={IconButton}
                aria-label="Options"
                icon={<FaUser className="w-6 h-6" />}
                variant="outline"
                className="bg-gray-200"
                borderRadius={"50%"}
                size={"lg"}
              />
              <MenuList>
                <MenuItem icon={<LuUser2 className="w-[18px] h-[18px]" />}>
                  My Profile
                </MenuItem>
                <MenuItem
                  className="flex gap-[10px] items-center"
                  _hover={{ backgroundColor: "red.50" }}
                >
                  <Icon color={"red.400"} as={IoLogOutOutline} w={5} h={5} />
                  <p className="text-red-400">Log Out</p>
                </MenuItem>
              </MenuList>
            </Menu>
          </div>
          <FaBars
            onClick={handleDrawerToggle}
            className="text-3xl cursor-pointer"
          />
        </div>
      </div>

      {/* Drawer for Mobile */}
      {isDrawerOpen && (
        <motion.div
          className="lg:hidden fixed inset-0 bg-black/80 bg-opacity-30 z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="bg-white h-full w-72 p-4 fixed top-0 left-0"
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex justify-end">
              <FaXmark
                className="text-3xl cursor-pointer"
                onClick={handleDrawerToggle}
              />
            </div>
            <motion.div
              className="flex flex-col gap-4"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
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
                to="/profile"
                className={`${
                  isLinkActive("/profile")
                    ? "text-black font-bold"
                    : "text-gray-500"
                } hover:text-amber-500 transition-colors duration-300`}
              >
                Account
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
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default RestaurantNavbar;
