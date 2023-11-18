import React from 'react';

const RestaurantCard = ({ restaurant }) => {
  return (
    <div className="w-96 mx-auto bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition duration-300 ease-in-out">
      <img className="w-full h-48 object-cover" src={restaurant.image} alt={restaurant.name} />
      <div className="p-6">
        <h2 className="font-semibold text-xl mb-2">{restaurant.name}</h2>
        <p className="text-gray-600 text-sm mb-4">{restaurant.cuisine}</p>
        <div className="flex items-center justify-between">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
            Order Now
          </button>
          <span className="text-gray-500">${restaurant.price}</span>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
