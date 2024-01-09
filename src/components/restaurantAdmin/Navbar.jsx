import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "./../../assets/logoAsset.png";
import { FaSearch } from "react-icons/fa";
import {
  Icon,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { FaUser } from "react-icons/fa6";
import { LuUser2 } from "react-icons/lu";
import { IoLogOutOutline } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";

const Navbar = () => {
  const [visible, setVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      setVisible(currentScrollPos <= 50 || currentScrollPos < prevScrollPos);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <motion.div
      className={`w-full fixed top-0 z-[100] ${
        visible ? "bg-white" : "hidden"
      }`}
      animate={{ opacity: visible ? 1 : 0 }}
      transition={{ duration: 0.2 }}
    >
      <div className="hidden lg:flex px-14 w-full justify-between items-center border-b">
        <div className="w-1/6">
          <Link
            to="/"
            className="flex align-middle items-center gap-2 transition-transform transform hover:opacity-80 border-r"
          >
            <img src={logo} alt="logo" className="w-16 py-3" />
            <h2 className="font-bold text-2xl pr-10">Hungrezy</h2>
          </Link>
        </div>
        <div className="flex justify-between items-center w-full ml-10">
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
    </motion.div>
  );
};

export default Navbar;
