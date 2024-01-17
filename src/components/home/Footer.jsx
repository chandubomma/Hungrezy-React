import { motion, useAnimation } from "framer-motion";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import logo from "./../../assets/logoAsset.png";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const Footer = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  const socialIconVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
  };

  return (
    <motion.footer
      className="bg-gray-800 text-white py-24 pl-6 md:pl-0 mt-4 w-full"
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      ref={ref}
    >
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <motion.div
          className="col-span-1 md:col-span-1 flex flex-col items-center"
          variants={containerVariants}
        >
          <motion.div
            className="flex items-center justify-center rounded-full h-16 w-16 mb-4"
            variants={socialIconVariants}
          >
            <motion.img src={logo} alt="logo" whileHover={{ scale: 1.1 }} />
          </motion.div>
          <motion.div className="text-center" variants={containerVariants}>
            <h2 className="font-bold text-3xl">Hungrezy</h2>
            <p className="text-md font-light my-2">Food Delivery App</p>
          </motion.div>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          className="col-span-1 md:col-span-1"
          variants={containerVariants}
        >
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
        </motion.div>

        {/* Quick Links */}
        <motion.div
          className="col-span-1 md:col-span-1"
          variants={containerVariants}
        >
          <div className="mb-4">Quick Links:</div>
          <motion.ul className="list-none" variants={containerVariants}>
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
          </motion.ul>
        </motion.div>

        {/* Social Media */}
        <motion.div
          className="col-span-1 md:col-span-1"
          variants={containerVariants}
        >
          <div className="mb-4">Connect with Us:</div>
          <motion.div
            className="flex items-center space-x-4"
            variants={socialIconVariants}
          >
            <motion.span whileHover={{ scale: 1.1 }}>
              <FaFacebook className="text-2xl hover:text-blue-600 cursor-pointer" />
            </motion.span>
            <motion.span whileHover={{ scale: 1.1 }}>
              <FaInstagram className="text-2xl hover:text-pink-600 cursor-pointer" />
            </motion.span>
            <motion.span whileHover={{ scale: 1.1 }}>
              <FaTwitter className="text-2xl hover:text-blue-400 cursor-pointer" />
            </motion.span>
          </motion.div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
