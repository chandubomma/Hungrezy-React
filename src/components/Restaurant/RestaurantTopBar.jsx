import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaSearch } from "react-icons/fa";
import LocationSearch from "./LocationSearch";

const RestaurantTopBar = ({ location, setLocation }) => {
  const [userLocation, setUserLocation] = useState(null);
  const [selectedOption, setSelectedOption] = useState("setLocation");
  const [isSticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const locateMe = async () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;

          // Use the OpenCage Geocoding API to get the address
          const apiKey = "78c1d7dfb8434e56a448612a32758adf";
          const geocodingApiUrl = `https://api.opencagedata.com/geocode/v1/json?key=${apiKey}&q=${latitude}+${longitude}&language=en`;

          try {
            const response = await axios.get(geocodingApiUrl);
            const city = response.data.results[0].components.suburb;
            const state = response.data.results[0].components.state;

            setUserLocation(`${city}, ${state}`);
            setSelectedOption("gps");
          } catch (error) {
            console.error("Error fetching address:", error.message);
          }
        },
        (error) => {
          console.error("Error getting location:", error.message);
        }
      );
    } else {
      alert("Geolocation is not supported by your browser.");
    }
  };

  const handleDropdownChange = (event) => {
    setSelectedOption(event.target.value);
    if (event.target.value === "gps") {
      locateMe();
    }
  };

  return (
    <div
      className={`p-4 shadow-md flex justify-between h-24 ${
        isSticky ? "bg-white text-white" : "bg-amber-300 text-white"
      } sticky top-0 transition-colors duration-300 ease-in-out z-0`}
    >
      {/* Location Selector */}
      <div className="flex items-center space-x-4 font-semibold">
        {/* <select
          value={selectedOption}
          onChange={handleDropdownChange}
          className={`${
            isSticky ? "bg-white text-gray-500" : "bg-amber-300 text-white"
          }  p-2 rounded w-60 h-12 focus:outline-none`}
        >
          <option value="setLocation">Set Your Location</option>
          <option value="gps">Locate Using GPS</option>
          <option value="location1">Location 1</option>
          <option value="location2">Location 2</option>
        </select> */}
        <LocationSearch
          isSticky={isSticky}
          searchText={location}
          setSearchText={setLocation}
        />
        {/* Display User Location */}
        {userLocation && (
          <div className="">
            <span className="text-white font-semibold text-lg">
              {userLocation}
            </span>
          </div>
        )}
      </div>

      {/* Search Bar */}
      <div className="relative mr-4">
        <input
          type="text"
          placeholder="Search for restaurants..."
          className="w-[40rem] h-12 pl-16 pr-2 rounded  text-gray-500 focus:outline-none"
        />
        <div className="absolute inset-y-0 left-0 flex items-center pl-3">
          <FaSearch className="h-6 w-6 text-gray-300" />
        </div>
      </div>
    </div>
  );
};

export default RestaurantTopBar;
