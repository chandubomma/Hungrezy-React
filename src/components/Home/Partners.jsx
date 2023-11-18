import {
  FaArrowRight,
  FaUtensils,
  FaHandshake,
  FaMotorcycle,
} from "react-icons/fa";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const Partners = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  return (
    <motion.div
      className="lg:px-48 min-[100px]:px-16 pt-16 flex flex-col justify-between items-center bg-yellow-50"
      variants={containerVariants}
      initial="hidden"
      animate={controls}
      ref={ref}
    >
      <h2 className="text-xl font-bold text-center mb-4 text-orange-500">
        Become a Partner
      </h2>
      <p className="text-gray-600 text-3xl text-center font-light mb-4">
        Join us and grow your business
      </p>
      <div className="flex flex-wrap justify-center">
        {/* Restaurant Partner Card */}
        <motion.div
          key="restaurant"
          className="w-[450px] h-fit bg-white rounded-lg shadow-md p-5 m-5 relative"
          variants={itemVariants}
        >
          <FaUtensils className="absolute -left-4 -top-4 text-amber-500 w-8 h-8" />
          <p className="text-gray-800 text-center font-light mt-2">
            Become a Restaurant Partner
          </p>
          <p className="text-gray-600 text-center font-semibold mt-2">
            - Join us today
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            type="button"
            className="mx-auto py-3 px-8 bg-amber-500 hover:bg-amber-600 transition-colors duration-300 text-white rounded-full flex items-center mt-4"
          >
            <span className="align-baseline"> Click Here </span>
            <FaArrowRight className="ml-2 align-baseline" />
          </motion.button>
        </motion.div>

        {/* Organization Partner Card */}
        <motion.div
          key="organization"
          className="w-[450px] h-fit bg-white rounded-lg shadow-md p-5 m-5 relative"
          variants={itemVariants}
        >
          <FaHandshake className="absolute -left-4 -top-4 text-amber-500 w-8 h-8" />
          <p className="text-gray-800 text-center font-light mt-2">
            Become an Organization Partner
          </p>
          <p className="text-gray-600 text-center font-semibold mt-2">
            - Explore collaboration opportunities
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            type="button"
            className="mx-auto py-3 px-8 bg-amber-500 hover:bg-amber-600 transition-colors duration-300 text-white rounded-full flex items-center mt-4"
          >
            <span className="align-baseline"> Click Here </span>
            <FaArrowRight className="ml-2 align-baseline" />
          </motion.button>
        </motion.div>

        {/* Driver Partner Card */}
        <motion.div
          key="driver"
          className="w-[450px] h-fit bg-white rounded-lg shadow-md p-5 m-5 relative"
          variants={itemVariants}
        >
          <FaMotorcycle className="absolute -left-4 -top-4 text-amber-500 w-8 h-8" />
          <p className="text-gray-800 text-center font-light mt-2">
            Join as a Delivery Driver
          </p>
          <p className="text-gray-600 text-center font-semibold mt-2">
            - Start earning with us
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            type="button"
            className="mx-auto py-3 px-8 bg-amber-500 hover:bg-amber-600 transition-colors duration-300 text-white rounded-full flex items-center mt-4"
          >
            <span className="align-baseline"> Apply Now </span>
            <FaArrowRight className="ml-2 align-baseline" />
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Partners;
