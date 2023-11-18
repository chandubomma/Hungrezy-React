import React from 'react';
import { FaStar } from "react-icons/fa6";

const RestaurantCard = ({ restaurant }) => {
  return (
    <div className="w-96 mx-auto bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition duration-300 ease-in-out">
      <img className="w-full h-48 object-cover" src={restaurant.image || 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/fartmcdlydc0soohkevd'} alt={restaurant.name} />
      <div className="p-6">
        <h2 className="font-semibold text-xl mb-2">{restaurant.name}</h2>
        <p className="text-gray-600 text-sm mb-4">{restaurant.cuisine}</p>
        <div className="flex items-center justify-between">
          <button className="bg-amber-400 hover:bg-amber-500 text-white font-bold py-2 px-4 rounded-full">
            Order Now
          </button>
          <span className='font-medium'>{restaurant.rating}<FaStar className='inline ml-1 mb-1.5 text-yellow-600' /></span>
          <span className="text-gray-500">{restaurant.cost}</span>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
