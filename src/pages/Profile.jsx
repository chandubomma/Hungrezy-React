// Profile.js

import React, { useState, useEffect } from 'react';
import { RiUserFill } from 'react-icons/ri';
import { BiSolidShoppingBags } from "react-icons/bi";
import { MdRestaurantMenu } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import { FaAddressBook } from "react-icons/fa";
import { RiCustomerService2Fill } from "react-icons/ri";
import OrdersList from '../components/profile/OrdersList';
import TableBookings from '../components/profile/TableBookings';

const Profile = () => {
  const [scrolling, setScrolling] = useState(false);
  const [activeTab, setActiveTab] = useState('orders'); // Default active tab

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'orders':
        return <OrdersList/>;
      case 'bookings':
        return <TableBookings/>;
      case 'account':
        return <p>Account content goes here.</p>;
      case 'address':
        return <p>Address Book content goes here.</p>;
      case 'help':
        return <p>Help content goes here.</p>;
      default:
        return null;
    }
  };

  return (
    <div
      className={`${
        scrolling ? 'bg-white' : 'bg-orange-300'
      }  transition-all duration-300 mt-32`}
    >
      <div className="container mx-auto p-4">
        <div className="flex items-center my-4">
          <div className="text-4xl font-bold text-white">Ravi Teja Abboju</div>
          <div className="ml-6 text-white">
            <div className="font-bold">6301581943</div>
            <div className=''>abbojuraviteja@gmail.com</div>
          </div>
        </div>

        <div className="flex bg-white mt-5 ">
          <div className="w-1/6 m-5 bg-orange-300  opacity-80 pt-4 pl-5">
            <div className=" pb-80 ">
              <ul className=''>
                <li
                  className={`mb-2 cursor-pointer w-full py-6 px-3 font-bold  text-lg ${
                    activeTab === 'orders' ? 'bg-white' : ''
                  }`}
                  onClick={() => handleTabClick('orders')}
                >
                  <div className="flex items-center">
                    <BiSolidShoppingBags className="mr-3 text-3xl" />
                    Your Orders
                  </div>
                </li>
                <li
                 className={`mb-2 cursor-pointer w-full py-6 px-3 font-bold  text-lg ${
                    activeTab === 'bookings' ? 'bg-white' : ''
                  }`}
                  onClick={() => handleTabClick('bookings')}
                >
                  <div className="flex items-center">
                    <MdRestaurantMenu className="mr-3 text-3xl" />
                    Table Bookings
                  </div>
                </li>
                <li
                 className={`mb-2 cursor-pointer w-full py-6 px-3 font-bold  text-lg ${
                    activeTab === 'account' ? 'bg-white' : ''
                  }`}
                  onClick={() => handleTabClick('account')}
                >
                  <div className="flex items-center">
                    <FaUserCircle className="mr-3 text-3xl" />
                    Account
                  </div>
                </li>
                <li
                 className={`mb-2 cursor-pointer w-full py-6 px-3 font-bold  text-lg ${
                    activeTab === 'address' ? 'bg-white' : ''
                  }`}
                  onClick={() => handleTabClick('address')}
                >
                  <div className="flex items-center">
                    <FaAddressBook className="mr-3 text-3xl" />
                    Address Book
                  </div>
                </li>
                <li
                 className={`mb-2 cursor-pointer w-full py-6 px-3 font-bold  text-lg ${
                    activeTab === 'help' ? 'bg-white' : ''
                  }`}
                  onClick={() => handleTabClick('help')}
                >
                  <div className="flex items-center">
                    <RiCustomerService2Fill className="mr-3 text-3xl" />
                    Help
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="w-5/6 p-4 mt-8">{renderContent()}</div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
