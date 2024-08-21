

import React, { createContext, useState } from 'react';

const OrdersContext = createContext();

const OrdersProvider = ({ children }) => {
  const [orders, setOrders] = useState([]);

  const addToCart = (item) => {
    const existingItem = orders.find(order => order.id === item.id);
    if (existingItem) {
      setOrders(orders.map(order => 
        order.id === item.id ? { ...order, quantity: order.quantity + 1 } : order
      ));
    } else {
      setOrders([...orders, { ...item, quantity: 1 }]);
    }
  };

  const removeFromCart = (itemId) => {
    const updatedOrders = orders
      .map(order => order.id === itemId ? { ...order, quantity: order.quantity - 1 } : order)
      .filter(order => order.quantity > 0);
    setOrders(updatedOrders);
  };

  return (
    <OrdersContext.Provider value={{ orders, addToCart, removeFromCart }}>
      {children}
    </OrdersContext.Provider>
  );
};

export { OrdersProvider, OrdersContext };
