// import React, { Component } from 'react'
// import Header from '../Header'
// import Cards from '../Cards'

// const Contacts = () => (
// <div>
//   <Cards />

//   Контакты
// </div>

// )

// export default Contacts;

// import React, { Component } from 'react'
// import Header from '../Header'
// import classes from '../../index.css'

import React, { useContext } from "react";
import { OrdersContext } from "../OrdersContext";
import Header from "../Header";
import classes from "../../index.css";
import Footer from "../Footer";

const Contacts = () => {
  const { orders, removeFromCart } = useContext(OrdersContext);

  return (
    <div className={classes}>
      <div className="pageBody">
        <Header orders={orders} onDelete={removeFromCart} />

        <div className="contacts">
          <h2>З питань реалiзацiї книг та iншими пропозицiями щодо творчої дiяльностi звертатися за наступними контактними даними:</h2>
          <p>
            <span class="contacts-type">e-mail:</span>
            <a class="contacts-link" href="mail:annaskorikpoetry@gmail.com">
              annaskorikpoetry@gmail.com
            </a>
          </p>
          <p>
          <span class="contacts-type">Facebook:</span>
            <a class="contacts-link" href="https://www.facebook.com/profile.php?id=100039640300365m">
              натиснути ТУТ
            </a>
          
          </p>
        </div>
        <Footer />
      </div>
    </div>
  );
};
export default Contacts;
