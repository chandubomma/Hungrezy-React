import { BadgeCheckIcon } from "@heroicons/react/outline";
import { Badge, Text } from "@tremor/react";
import { useEffect, useState } from "react";
import { BiSolidFoodMenu } from "react-icons/bi";
import { FaChevronRight, FaStar } from "react-icons/fa6";
import { IoPricetag } from "react-icons/io5";
import { MdEmail, MdOutlinePending, MdPlace } from "react-icons/md";
import { RiQuestionFill } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import { useParams } from "react-router-dom";

const RestaurantDetails = () => {
  const [restaurant, setRestaurant] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchRestaurant(id);
  }, [id]);

  const fetchRestaurant = async (id) => {
    const response = await fetch(
      `${import.meta.env.VITE_HUNGREZY_API}/api/restaurant/${id}`
    );
    if (!response.ok) {
      setRestaurant(null);
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const result = await response.json();
    setRestaurant(result.data);
  };

  return (
    <div className="px-4">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-medium">View Restaurant</h1>
        <div className="flex items-center py-3 gap-2 mx-5">
          <p>Admin</p>
          <span>
            <FaChevronRight className="text-gray-500" />
          </span>
          <p className="text-orange-500 underline">Restaurant</p>
        </div>
      </div>

      <div className="flex lg:flex-row flex-col items-center my-4">
        <div className="lg:flex-[3]">
          <img
            src={restaurant?.image}
            alt={restaurant?.name}
            className="xl:h-[20rem] xl:w-[20rem] md:h-[18rem] md:w-[18rem] w-[25rem] h-[25rem] rounded-full"
          />
        </div>

        <div className="border rounded p-4 items-center my-4 justify-center lg:flex-[5] md:w-[40rem] w-[20rem]">
          <div className="grid grid-cols-1 gap-4 mb-4">
            <div className="flex flex-col">
              <div className="flex justify-between mb-2">
                <p className="text-gray-500 flex items-center">
                  <BiSolidFoodMenu className="mr-2" />
                  Name:
                </p>
                <p className="text-gray-700">{restaurant?.name}</p>
              </div>
              <div className="flex justify-between mb-2">
                <p className="text-gray-500 flex items-center">
                  <MdEmail className="mr-2" />
                  Email:
                </p>
                <p className="text-gray-700">{restaurant?.email}</p>
              </div>
              <div className="flex justify-between mb-2">
                <p className="text-gray-500 flex items-center">
                  <FaStar className="mr-2" />
                  Rating:
                </p>
                <p className="text-gray-700">{restaurant?.rating}</p>
              </div>
              <div className="flex justify-between mb-2">
                <p className="text-gray-500 flex items-center">
                  <IoPricetag className="mr-2" />
                  Cost:
                </p>
                <p className="text-orange-500 text-xl">{restaurant?.cost}</p>
              </div>
              <div className="flex justify-between mb-2">
                <p className="text-gray-500 flex items-center">
                  <MdPlace className="mr-2" />
                  Cuisine:
                </p>
                <p className="text-gray-700">{restaurant?.cuisine}</p>
              </div>
              <div className="flex justify-between mb-2">
                <p className="text-gray-500 flex items-center">
                  <MdPlace className="mr-2" />
                  Address:
                </p>
                <p className="text-gray-700">
                  {restaurant?.area}, {restaurant?.city}
                </p>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex justify-between mb-2">
                <p className="text-gray-500 flex items-center">
                  <RiQuestionFill className="mr-2" />
                  Status:
                </p>
                {restaurant?.status && (
                  <Badge
                    className="px-3 py-1 flex items-center w-28"
                    color={
                      restaurant.status === "approved"
                        ? "green"
                        : restaurant.status === "suspended"
                        ? "yellow"
                        : restaurant.status === "inprogress"
                        ? "blue"
                        : "red"
                    }
                    icon={
                      restaurant.status === "approved"
                        ? BadgeCheckIcon
                        : restaurant.status === "rejected"
                        ? RxCross2
                        : restaurant.status === "inprogress"
                        ? MdOutlinePending
                        : RxCross2
                    }
                  >
                    <Text>
                      {restaurant.status.charAt(0).toUpperCase() +
                        restaurant.status.slice(1)}
                    </Text>
                  </Badge>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantDetails;
