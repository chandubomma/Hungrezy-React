import { useState, useRef, useEffect } from "react";
import RestaurantMenuCategory from "../components/Restaurant/RestaurantMenuCategory";
import { FaCircleInfo } from "react-icons/fa6";
import { FaStar } from "react-icons/fa6";
import { MdRestaurantMenu } from "react-icons/md";
import RestaurantReviews from "../components/Restaurant/RestaurantReviews";
import BookTable from "../components/Restaurant/BookTable";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  removeFromCart,
  selectCartItems,
} from "../redux/slices/cartSlice";
import toast from "react-hot-toast";

const RestaurantMenu = () => {
  const location = useLocation();
  const restaurant = location.state?.restaurant;
  const [foodItems, setFoodItems] = useState(restaurant.menu);
  const [activeTab, setActiveTab] = useState("menu");
  const [isCategoryListVisible, setCategoryListVisible] = useState(false);
  const cartItems = useSelector(selectCartItems);

  const initialVisibility = Object.keys(foodItems).reduce(
    (acc, category, index) => {
      acc[category] = index < 4;
      return acc;
    },
    {}
  );
  const dispatch = useDispatch();

  const [categoryVisibility, setCategoryVisibility] =
    useState(initialVisibility);
  const categoryRefs = useRef({});

  const toggleCategoryVisibility = (category) => {
    setCategoryVisibility((prevVisibility) => ({
      ...prevVisibility,
      [category]: !prevVisibility[category],
    }));
  };

  const handleIncrement = (category, itemName, price, veg_or_non_veg) => {
    dispatch(
      addToCart({
        restaurant: restaurant.name,
        category,
        itemName,
        price,
        veg_or_non_veg,
      })
    );

    toast.success("Item added to cart", {
      position: "bottom-center",
      duration: 2000,
    });

    const item = cartItems.find(
      (item) => item.category === category && item.itemName === itemName
    );

    if (item) {
      setFoodItems((prevFoodItems) => {
        const updatedFoodItems = { ...prevFoodItems };
        if (!updatedFoodItems[category][itemName].count) {
          updatedFoodItems[category][itemName].count = 1;
        } else {
          updatedFoodItems[category][itemName].count += 1;
        }
        return updatedFoodItems;
      });
    } else {
      setFoodItems((prevFoodItems) => {
        const updatedFoodItems = { ...prevFoodItems };
        updatedFoodItems[category][itemName].count = 1;
        return updatedFoodItems;
      });
    }
  };

  const handleDecrement = (category, itemName) => {
    dispatch(removeFromCart({ restaurant: restaurant.name, itemName }));

    const item = cartItems.find(
      (item) => item.category === category && item.itemName === itemName
    );

    if (item) {
      setFoodItems((prevFoodItems) => {
        const updatedFoodItems = { ...prevFoodItems };
        if (updatedFoodItems[category][itemName].count === 1) {
          updatedFoodItems[category][itemName].count = 0;
        } else {
          updatedFoodItems[category][itemName].count -= 1;
        }
        return updatedFoodItems;
      });
    } else {
      setFoodItems((prevFoodItems) => {
        const updatedFoodItems = { ...prevFoodItems };
        updatedFoodItems[category][itemName].count = 0;
        return updatedFoodItems;
      });
    }
  };

  useEffect(() => {
    // Update foodItems based on cart items from the Redux store
    const updatedFoodItems = { ...foodItems };

    cartItems.forEach((cartItem) => {
      const { category, itemName, count } = cartItem;

      if (updatedFoodItems[category] && updatedFoodItems[category][itemName]) {
        updatedFoodItems[category][itemName].count = count;
      }
    });

    setFoodItems(updatedFoodItems);
  }, [cartItems]);

  const switchTab = (tab) => {
    setActiveTab(tab);
  };

  const scrollToCategory = (category) => {
    if (categoryRefs[category]) {
      categoryRefs[category].scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  const toggleCategoryList = () => {
    setCategoryListVisible((prevVisible) => !prevVisible);
  };

  return (
    <div className="container w-[55rem] mx-auto p-4 mt-28">
      <div className="flex h-fit bg-gradient-to-r from-amber-200 to-orange-400/90 py-8 px-4 rounded-md shadow-md">
        <div>
          <h2 className="text-3xl font-extrabold pt-2 text-gray-600">
            {restaurant.name}
          </h2>
          <p className="text-gray-500 font-semibold text-sm mt-1 ml-1 ">
            {restaurant.cuisine}
          </p>
          <p className="text-gray-500 font-semibold text-lg mt-4 ml-1 ">
            {restaurant.address}
          </p>
          <p className="text-gray-500 font-semibold text-lg mt-2 ml-1 ">
            <FaCircleInfo className="inline text-lg mr-2 mb-1" />
            Based on distance, an additional delivery fee will apply
          </p>
        </div>
      </div>
      <div className="mt-4 ml-2 flex">
        <p className="text-lg font-semibold text-gray-500">
          {restaurant.rating}
          <FaStar className="inline text-xl mb-1 mx-1" />
        </p>
        <p className="ml-6 text-lg font-semibold text-gray-500">
          {restaurant.rating_count}
        </p>
      </div>

      {/* Tab Switcher */}
      <div className="flex my-4">
        <button
          className={`mr-4 px-4 py-2 text-xl font-semibold ${
            activeTab === "menu"
              ? "text-amber-500 border-b-2 border-amber-500"
              : "text-gray-400"
          } `}
          onClick={() => switchTab("menu")}
        >
          Menu
        </button>
        <button
          className={`px-4 py-2 text-xl font-semibold ${
            activeTab === "booktable"
              ? " text-amber-500 border-b-2 border-amber-500"
              : "text-gray-400"
          } `}
          onClick={() => switchTab("booktable")}
        >
          Book Table
        </button>
        <button
          className={`px-4 py-2 text-xl font-semibold ${
            activeTab === "reviews"
              ? " text-amber-500 border-b-2 border-amber-500"
              : "text-gray-400"
          } `}
          onClick={() => switchTab("reviews")}
        >
          Reviews
        </button>
      </div>

      {activeTab == "menu" && (
        <div className="">
          {Object.keys(foodItems).map((category) => (
            <div key={category} ref={(ref) => (categoryRefs[category] = ref)}>
              <RestaurantMenuCategory
                toggleCategoryVisibility={toggleCategoryVisibility}
                category={category}
                categoryVisibility={categoryVisibility}
                foodItems={foodItems}
                handleDecrement={handleDecrement}
                handleIncrement={handleIncrement}
              />
            </div>
          ))}
        </div>
      )}

      {activeTab == "booktable" && (
        <div>
          <BookTable/>
        </div>
      )}

      {activeTab == "reviews" && (
        <div>
          <RestaurantReviews />
        </div>
      )}

      {activeTab == "menu" && (
        <div>
          {/* Browse Menu Button */}
          <button
            className="fixed bottom-8 right-8 bg-gradient-to-r from-amber-400 to-orange-500 shadow-lg text-white px-4 py-4 rounded-full cursor-pointer "
            onClick={toggleCategoryList}
          >
            <MdRestaurantMenu className="inline text-xl mr-2" />
            Menu
          </button>

          {/* Category List */}
          {isCategoryListVisible && (
            <CategoryList
              categories={Object.keys(foodItems)}
              scrollToCategory={scrollToCategory}
              onHide={toggleCategoryList}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default RestaurantMenu;

const CategoryList = ({ categories, scrollToCategory, onHide }) => {
  return (
    <div className="bg-white min-w-64 max-h-96  px-8 py-4 shadow-md   rounded-md fixed bottom-32 right-8 overflow-scroll scrollbar-hide">
      <ul>
        {categories.map((category) => (
          <li key={category} className="mb-2">
            <button
              onClick={() => {
                scrollToCategory(category);
                onHide();
              }}
              className="text-gray-400 font-medium ease-in-out duration-300 hover:text-gray-500 hover:scale-110 focus:outline-none"
            >
              {category}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
