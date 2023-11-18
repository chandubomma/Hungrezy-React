import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaSearch } from "react-icons/fa";

const RestaurantTopBar = () => {
  const [userLocation, setUserLocation] = useState(null);
  const [selectedOption, setSelectedOption] = useState('setLocation');

  const locateMe = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;

          // Use the OpenCage Geocoding API to get the address
          const apiKey = '78c1d7dfb8434e56a448612a32758adf';
          const geocodingApiUrl = `https://api.opencagedata.com/geocode/v1/json?key=${apiKey}&q=${latitude}+${longitude}&language=en`;

          try {
            const response = await axios.get(geocodingApiUrl);
            const city = response.data.results[0].components.suburb;
            const state = response.data.results[0].components.state;
            console.log(response.data)

            setUserLocation(`${city}, ${state}`);
            setSelectedOption('gps');
          } catch (error) {
            console.error('Error fetching address:', error.message);
          }
        },
        (error) => {
          console.error('Error getting location:', error.message);
        }
      );
    } else {
      alert('Geolocation is not supported by your browser.');
    }
  };

  const handleDropdownChange = (event) => {
    setSelectedOption(event.target.value);
    if (event.target.value === 'gps') {
      locateMe();
    }
  };

  return (
    <div className="bg-gray-800 p-4 shadow-md flex justify-between">
      {/* Location Selector */}
      <div className="flex items-center space-x-4">
        <select
          value={selectedOption}
          onChange={handleDropdownChange}
          className="bg-gray-700 text-white p-2 rounded w-60 h-12"
        >
          {/* Add location options here */}
          <option value="setLocation">Set Your Location</option>
          <option value="gps">Locate Using GPS</option>
          <option value="location1">Location 1</option>
          <option value="location2">Location 2</option>
          {/* Add more city options as needed */}
        </select>
        {/* Display User Location */}
        {userLocation && (
            <div className="">
            <span className="text-white font-semibold text-lg">{userLocation}</span>
            </div>
        )}
      </div>

      

    {/* Search Bar */}
    <div className="relative mr-4">
      <input
        type="text"
        placeholder="Search for restaurants..."
        className="w-[40rem] h-12 pl-16 pr-2 rounded bg-gray-700 text-white"
      />
      <div className="absolute inset-y-0 left-0 flex items-center pl-3">
        <FaSearch className="h-6 w-6 text-gray-300" />
      </div>
    </div>

     
    </div>
  );
};

export default RestaurantTopBar;