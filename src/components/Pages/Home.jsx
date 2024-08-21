// // import React, { Component } from 'react'
import React, { useContext } from "react";
import { OrdersContext } from "../OrdersContext";
import Header from '../Header'
import Cards from '../Cards'
import classes from '../../index.css';
import Footer from '../Footer';

const Home = () => {
  const { orders, removeFromCart } = useContext(OrdersContext);

  return (
    <div className={classes}>
      <div className="pageBody">
        <Header orders={orders} onDelete={removeFromCart} />
        <div>
          <Cards />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Home;