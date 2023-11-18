import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import logo from "./../../assets/logoAsset.png";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-24 mt-4">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="col-span-1 md:col-span-1 flex flex-col items-center">
          <div className="flex items-center justify-center rounded-full h-16 w-16 mb-4">
            <img src={logo} alt="logo" className="w-16" />
          </div>
          <div className="text-center">
            <h2 className="font-bold text-3xl">Hungrezy</h2>
            <p className="text-md font-light my-2">Food Delivery App</p>
          </div>
        </div>

        {/* Contact Information */}
        <div className="col-span-1 md:col-span-1">
          <div className="mb-4 font-light">
            <strong className="text-md font-semibold">Contact:</strong>{" "}
            hungrezy@gmail.com
          </div>
          <div className="mb-4">
            <strong>Location:</strong> 123 Main Street, Cityville
          </div>
          <div className="mb-4">
            <strong>Address:</strong> P.O. Box 456, Zip Code
          </div>
          <div className="mb-4">
            <strong>Timings:</strong> Mon-Fri: 9am-6pm
          </div>
        </div>

        {/* Quick Links */}
        <div className="col-span-1 md:col-span-1">
          <div className="mb-4">Quick Links:</div>
          <ul className="list-none">
            <li className="mb-2">
              <a href="/">Home</a>
            </li>
            <li className="mb-2">
              <a href="/restaurants">Menu</a>
            </li>
            <li className="mb-2">
              <a href="/about">About Us</a>
            </li>
            <li className="mb-2">
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="col-span-1 md:col-span-1">
          <div className="mb-4">Connect with Us:</div>
          <div className="flex items-center space-x-4">
            <FaFacebook className="text-2xl hover:text-blue-600 cursor-pointer" />
            <FaInstagram className="text-2xl hover:text-fuchsia-500 cursor-pointer" />
            <FaTwitter className="text-2xl hover:text-sky-500 cursor-pointer" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
