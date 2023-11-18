import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import testimonialsData from "./../../data/testimonals";

const Testimonals = () => {
  return (
    <div className="lg:px-48 min-[100px]:px-16 pt-16 flex flex-col justify-between items-center">
      <h2 className="mx-auto font-semibold text-lg text-orange-500">
        TESTIMONALS
      </h2>
      <p className="lg:mx-auto font-normal text-5xl my-3">
        What our customers say
      </p>
      <div className="flex flex-wrap justify-center">
        {testimonialsData.map((testimonial) => (
          <div
            key={testimonial.id}
            className="w-[450px] h-fit bg-white rounded-lg shadow-md p-5 m-5 relative"
          >
            <FaQuoteLeft className="w-10 h-10 text-orange-300 absolute -left-2 -top-2" />
            <FaQuoteRight className="w-10 h-10 text-orange-300 absolute -right-2 -bottom-2" />
            <p className="text-gray-800 text-center font-light mt-2">
              {testimonial.review}
            </p>
            <p className="text-gray-600 text-center font-semibold mt-2">
              - {testimonial.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonals;
