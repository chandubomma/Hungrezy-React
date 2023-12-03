// OrdersList.js

import React from 'react';
import { useSelector } from 'react-redux';
import { selectOrders } from '../../redux/slices/ordersSlice';

const OrderCard = ({ order }) => {
  return (
    <div className="border border-gray-300 p-4 mb-4 rounded-lg shadow-md">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-xl text-gray-600 font-semibold">{order.restaurant}</h3>
        <span className={`px-2 py-1 rounded ${
          order.status === 'delivered' ? 'bg-green-500 text-white' :
          order.status === 'not delivered' ? 'bg-yellow-500 text-black' :
          'bg-red-500 text-white'
        }`}>{order.status}</span>
      </div>
      <ul>
        {order.items.map(item => (
          <li key={item.itemName} className="flex items-center justify-between mb-1">
            <p>{`${item.itemName} x${item.count}`}</p>
            <p>{`Rs ${(item.price * item.count).toFixed(2)}`}</p>
          </li>
        ))}
      </ul>
      <div className="mt-2">
        <p className="text-gray-600">{`Total: Rs ${order.items.reduce((total, item) => total + item.price * item.count, 0).toFixed(2)}`}</p>
      </div>
    </div>
  );
};

const OrdersList = () => {
  const orders = useSelector(selectOrders);

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl text-gray-700 font-semibold mb-4">My Orders</h2>
      {orders.map(order => (
        <OrderCard key={order.id} order={order} />
      ))}
    </div>
  );
};

export default OrdersList;
