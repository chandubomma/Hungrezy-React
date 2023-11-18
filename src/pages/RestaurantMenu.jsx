import React, { useState } from 'react';

const RestaurantMenu = ({ restaurant }) => {
  const [foodItems, setFoodItems] = useState(restaurant.menu);

  // Set the initial visibility state with the first 3 categories expanded
  const initialVisibility = Object.keys(foodItems).reduce((acc, category, index) => {
    acc[category] = index < 4;
    return acc;
  }, {});

  const [categoryVisibility, setCategoryVisibility] = useState(initialVisibility);

  const toggleCategoryVisibility = (category) => {
    setCategoryVisibility((prevVisibility) => ({
      ...prevVisibility,
      [category]: !prevVisibility[category],
    }));
  };

  const handleIncrement = (category, itemName) => {
    setFoodItems((prevFoodItems) => {
      const updatedFoodItems = { ...prevFoodItems };
      updatedFoodItems[category][itemName].count += 1;
      return updatedFoodItems;
    });
  };

  const handleDecrement = (category, itemName) => {
    setFoodItems((prevFoodItems) => {
      const updatedFoodItems = { ...prevFoodItems };
      if (updatedFoodItems[category][itemName].count > 0) {
        updatedFoodItems[category][itemName].count -= 1;
      }
      return updatedFoodItems;
    });
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{restaurant.name}</h1>
      <p className="text-xl mb-2">Rating: {restaurant.rating}</p>
      <p className="text-xl mb-4">Rating Count: {restaurant.rating_count}</p>

      {Object.keys(foodItems).map((category) => (
        <div key={category} className="mb-6">
          <div className="flex items-center cursor-pointer" onClick={() => toggleCategoryVisibility(category)}>
            <span className="text-2xl font-semibold mb-2">{category}</span>
            <svg
              className={`ml-2 h-6 w-6 transition-transform transform ${
                categoryVisibility[category] ? 'rotate-180' : 'rotate-0'
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </div>
          {categoryVisibility[category] && (
            <div>
              {Object.keys(foodItems[category]).map((itemName) => (
                <div key={itemName} className="flex justify-between items-center mb-2">
                  <div>
                    <p className="text-lg">{itemName}</p>
                    <p className="text-gray-600">Cost: {foodItems[category][itemName].price}</p>
                  </div>
                  <div className="flex items-center">
                    <button
                      onClick={() => handleDecrement(category, itemName)}
                      className="bg-gray-300 px-2 py-1 rounded-full"
                    >
                      -
                    </button>
                    <span className="mx-2">{foodItems[category][itemName].count}</span>
                    <button
                      onClick={() => handleIncrement(category, itemName)}
                      className="bg-gray-300 px-2 py-1 rounded-full"
                    >
                      +
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default RestaurantMenu;
