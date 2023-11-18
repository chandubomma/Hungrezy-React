import { FaList, FaMotorcycle, FaSearch } from "react-icons/fa";

const Working = () => {
  return (
    <div className="lg:px-48 min-[100px]:px-16 lg:mt-64 mt-32 flex flex-col justify-between items-center bg-yellow-50 py-20">
      <h2 className="mx-auto font-semibold text-2xl text-orange-500">
        HOW DOES IT WORK
      </h2>
      <p className="mx-auto font-normal md:text-5xl my-3 text-2xl">
        Get served as an emperor.
      </p>
      <p className="mx-auto text-xl my-2 text-gray-600 font-light">
        We deliver to your doorstep.{" "}
        <span className="text-orange-500">Fast</span> and{" "}
        <span className="text-orange-500">Fresh</span>.
      </p>

      <div className="flex flex-col md:flex-row justify-between items-center w-full mt-10">
        <div className="flex flex-col items-center cursor-pointer">
          <div className="w-24 h-24 bg-amber-500 rounded-full flex justify-center items-center">
            <FaSearch className="w-10 h-10 text-white" />
          </div>
          <p className="text-xl font-semibold mt-3">Search</p>
          <p className="text-gray-600 text-center font-light mt-2">
            Find restaurants that deliver to you by entering your address.
          </p>
        </div>
        <div className="flex flex-col items-center mt-10 md:mt-0 cursor-pointer">
          <div className="w-24 h-24 bg-amber-500 rounded-full flex justify-center items-center">
            <FaList className="w-10 h-10 text-white" />
          </div>
          <p className="text-xl font-semibold mt-3">Choose</p>
          <p className="text-gray-600 text-center font-light mt-2">
            Browse hundreds of menus to find the food you like.
          </p>
        </div>
        <div className="flex flex-col items-center mt-10 md:mt-0 cursor-pointer">
          <div className="w-24 h-24 bg-amber-500 rounded-full flex justify-center items-center">
            <FaMotorcycle className="w-10 h-10 text-white" />
          </div>
          <p className="text-xl font-semibold mt-3">Delivery</p>
          <p className="text-gray-600 text-center font-light mt-2">
            Your order will be delivered to you in no time.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Working;
