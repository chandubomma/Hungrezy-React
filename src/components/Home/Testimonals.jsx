import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { motion, useAnimation } from "framer-motion";
import testimonialsData from "./../../data/testimonals";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const Testimonials = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 2 } },
  };

  return (
    <motion.div
      className="lg:px-48 min-[100px]:px-16 pt-16 flex flex-col justify-between items-center"
      variants={containerVariants}
      initial="hidden"
      animate={controls}
      ref={ref}
    >
      <h2 className="mx-auto font-semibold text-lg text-orange-500">
        TESTIMONIALS
      </h2>
      <p className="lg:mx-auto font-normal text-5xl my-3">
        What our customers say
      </p>
      <div className="flex flex-wrap justify-center">
        {testimonialsData.map((testimonial) => (
          <motion.div
            key={testimonial.id}
            className="w-[450px] h-fit bg-white rounded-lg shadow-md p-5 m-5 relative"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
          >
            <FaQuoteLeft className="w-10 h-10 text-orange-300 absolute -left-2 -top-2" />
            <FaQuoteRight className="w-10 h-10 text-orange-300 absolute -right-2 -bottom-2" />
            <p className="text-gray-800 text-center font-light mt-2">
              {testimonial.review}
            </p>
            <p className="text-gray-600 text-center font-semibold mt-2">
              - {testimonial.name}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Testimonials;
