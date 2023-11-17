import { Link, useLocation } from "react-router-dom";
import logo from "./../../assets/logoAsset.png";
import { FaUser } from "react-icons/fa6";

const Navbar = () => {
  const { pathname } = useLocation();

  const isLinkActive = (path) => {
    return pathname === path;
  };

  const shouldDisplayNavbar = () => {
    const restrictedRoutes = ["/signin", "/signup"];
    const currentPath = pathname;
    return !restrictedRoutes.includes(currentPath);
  };

  return (
    shouldDisplayNavbar() && (
      <div className="px-48 py-10 w-full flex justify-between items-center">
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
              isLinkActive("/") ? "text-black font-semibold" : "text-gray-500"
            } hover:text-amber-500 transition-colors duration-300 hover:scale-110 hover:opacity-80`}
          >
            Home
          </Link>
          <Link
            to="/restaurants"
            className={`${
              isLinkActive("/restaurants")
                ? "text-black font-semibold"
                : "text-gray-500"
            } hover:text-amber-500 transition-colors duration-300 hover:scale-110 hover:opacity-80`}
          >
            Restaurants
          </Link>
          <Link
            to="/about"
            className={`${
              isLinkActive("/about")
                ? "text-black font-semibold"
                : "text-gray-500"
            } hover:text-amber-500 transition-colors duration-300 hover:scale-110 hover:opacity-80`}
          >
            About
          </Link>
          <Link
            to="/contact"
            className={`${
              isLinkActive("/contact")
                ? "text-black font-semibold"
                : "text-gray-500"
            } hover:text-amber-500 transition-colors duration-300 hover:scale-110 hover:opacity-80`}
          >
            Contact Us
          </Link>
        </div>
        <div className="w-fit h-fit border-[1.5px] p-2 rounded-full border-gray-500 hover:scale-110 hover:opacity-80 transition-transform transform">
          <FaUser className="text-2xl text-gray-500" />
        </div>
      </div>
    )
  );
};

export default Navbar;
