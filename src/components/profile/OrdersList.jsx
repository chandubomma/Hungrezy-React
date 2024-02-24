// OrdersList.js

import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectOrders } from '../../redux/slices/ordersSlice';
import { useAuth } from "../../AuthContext";



const OrderCard = ({ order }) => {
  console.log(order,"yes");
  return (
    <div className="border border-gray-300 p-4 mb-4 rounded-lg shadow-md">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-xl text-gray-600 font-semibold">{order.restaurantId}</h3>
        <span className={`px-2 py-1 rounded ${
          order.status === 'delivered' ? 'bg-green-500 text-white' :
          order.status === 'not delivered' ? 'bg-yellow-500 text-black' :
          'bg-red-500 text-white'
        }`}>{order.status}</span>
      </div>
      <ul>
        {order.foodItems.map(item => (
          <li key={item._id} className="flex items-center justify-between mb-1">
            <p>{`${item.name} x${item.quantity}`}</p>
            <p>{`Rs ${(item.price * item.quantity).toFixed(2)}`}</p>
          </li>
        ))}
      </ul>
      <div className="mt-2">
        <p className="text-gray-600">{`Total: Rs ${order.paymentDetails.amount.toFixed(2)}`}</p>
      </div>
    </div>
  );
};



const OrdersList = () => {
  //const orders = useSelector(selectOrders);
  const {user,accessToken,loading} = useAuth()
  const [orders,setOrders] = useState([])
  const fetchUserOrders = async(userId,status)=>{
    const url = `${import.meta.env.VITE_HUNGREZY_API}/api/order/user/all/${userId}?status=${status}`;
    try{
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`, 
        },
      });
      if (!response.ok) {
        console.log('Failed to fetch user orders');
        return [];
      }
      const result = await response.json();
      console.log(result)
      if(!result.data)return []
      return result.data
    }catch(error){
      console.log(error)
    }
  }

  useEffect(()=>{
    const fetchData = async () => {
      if (user) {
        const data = await fetchUserOrders(user._id, 'all');
        setOrders(data);
      }
    };
    fetchData();
  },[user])
  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl text-gray-700 font-semibold mb-4">My Orders</h2>
      {orders.length>0 && orders.map(order => (
        <OrderCard key={order._id} order={order} /> 
      ))}
    </div>
  );
};

export default OrdersList;
