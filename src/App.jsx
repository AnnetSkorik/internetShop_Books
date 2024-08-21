// import React from "react";
// import Header from "./components/Header";
// import Footer from "./components/Footer";
// import Items from "./components/Items";
// import Categories from "./components/Categories";
// import ShowFullItem from "./components/ShowFullItem";

//  class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       orders: [],
//       currentItems: [],
//       items: [
//         {
//           id: 1,
//           title: "Лiричнi вiршi",
//           img: "lirics.jpg",
//           descr: "Пейзажна та любовна лiрика",
//           category: "poems about love and nature",
//           status: "немає в наявностi",
//           price: "1",
//         },
//         {
//           id: 2,
//           title: "Мої поезiї",
//           img: "my_poems1.jpg",
//           descr: "Пейзажна та любовна лiрика",
//           category: "poems about love and nature",
//           status: "немає в наявностi",
//           price: "2",
//         },
//         {
//           id: 3,
//           title: "Збiрка поезiй",
//           img: "collect.jpg",
//           descr: "Пейзажна лiрика",
//           category: "poems about nature",
//           status: "немає в наявностi",
//           price: "4",
//         },
//         {
//           id: 4,
//           title: "Вiршi для дiтей",
//           img: "for_kids1.jpg",
//           descr: "Вiршi для дiтей",
//           category: "poems for kids",
//           status: "немає в наявностi",
//           price: "3",
//         },
//         {
//           id: 5,
//           title: "МадаМ",
//           img: "book_Madam.png",
//           descr: "Пейзажна та любовна лiрика",
//           category: "poems about love and nature",
//           status: "є в наявностi",
//           price: "5",
//         },
//       ],
//       ShowFullItem: false,
//       fullItem: {}
//     };
//     this.state.currentItems = this.state.items
//     this.addToOrder = this.addToOrder.bind(this)
//     this.deleteOrder = this.deleteOrder.bind(this)
//     this.chooseCategory = this.chooseCategory.bind(this)
//     this.onShowItem = this.onShowItem.bind(this)


//   }
//   render() {
//     return (
//       <div className="wrapper">
//         <Header orders={this.state.orders} onDelete={this.deleteOrder}/>
//         <Categories chooseCategory={this.chooseCategory} />
//         <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder}/>
        
//         {this.state.showFullItem && <ShowFullItem  onAdd={this.addToOrder} onShowItem={this.onShowItem}  item={this.state.fullItem}/>}
//         <Footer />
//       </div>
//     );
//   }

//   onShowItem(item) {
//     this.setState({ fullItem: item });
//     this.setState({ showFullItem: !this.state.showFullItem})
//   }

//   chooseCategory(category){
//     if(category === 'all'){
//       this.setState({currentItems: this.state.items})
//       return
//     }
  
//     // console.log(category);
//     this.setState({
//       currentItems: this.state.items.filter(el => el.category === category)
//     })
//   }

//   deleteOrder(id){
//     // console.log(id);
//     this.setState({orders: this.state.orders.filter(el => el.id !== id)});
//   }

//   addToOrder(item) {
//     let isInArray = false
//     this.state.orders.forEach(el => {
//       if(el.id === item.id)
//         isInArray = true
//     })
//     if(!isInArray)
//  this.setState({orders: [...this.state.orders, item]}, 
  
  
// );
//   }
// }

// export default App;






// import './App.css';

import React, {useState} from 'react'
import { FaShoppingCart } from "react-icons/fa";
import Order from './components/Order';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Home from '../src/components/Pages/Home';
import About from '../src/components/Pages/About';
import Contacts from '../src/components/Pages/Contacts';
import Cards from './components/Cards';
import classes from '../src/index.css';

function App() {
  return (
    <Router>
    <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contacts" element={<Contacts />} />
        <Route exact path="/order" element={<Order />} />
        <Route exact path="/cards" element={<Cards />} />
      </Routes>
    </Router>
  );
}

export default App;