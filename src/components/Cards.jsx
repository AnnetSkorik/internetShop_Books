import React, { useState } from 'react';
import Items from "./../components/Items";
import Categories from "./../components/Categories";
import ShowFullItem from "./../components/ShowFullItem";
import { OrdersContext } from './OrdersContext';

class Cards extends React.Component {
  static contextType = OrdersContext;

  constructor(props) {
    super(props);
    this.state = {
      currentItems: [],
      items: [
        {
          id: 1,
          title: "Лiричнi вiршi",
          img: "lirics.jpg",
          descr: "Пейзажна та любовна лiрика",
          category: "poems about love and nature",
          status: "немає в наявностi",
          price: "15",
        },
        {
          id: 2,
          title: "Мої поезiї",
          img: "my_poems1.jpg",
          descr: "Пейзажна та любовна лiрика",
          category: "poems about love and nature",
          status: "немає в наявностi",
          price: "17",
        },
        {
          id: 3,
          title: "Збiрка поезiй",
          img: "collect.jpg",
          descr: "Пейзажна лiрика",
          category: "poems about nature",
          status: "немає в наявностi",
          price: "18",
        },
        {
          id: 4,
          title: "Вiршi для дiтей",
          img: "for_kids1.jpg",
          descr: "Вiршi для дiтей",
          category: "poems for kids",
          status: "немає в наявностi",
          price: "14",
        },
        {
          id: 5,
          title: "МадаМ",
          img: "book_Madam.png",
          descr: "Пейзажна та любовна лiрика",
          category: "poems about love and nature",
          status: "є в наявностi",
          price: "20",
        },
      ],
      showFullItem: false,
      fullItem: {},
    };

    this.chooseCategory = this.chooseCategory.bind(this);
    this.onShowItem = this.onShowItem.bind(this);
  }

  componentDidMount() {
    this.setState({ currentItems: this.state.items });
  }

  render() {
    const { cart, addToCart, removeFromCart } = this.context;

    return (
      <div className="wrapper">
        <Categories chooseCategory={this.chooseCategory} />
        <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={addToCart} />

        {this.state.showFullItem && <ShowFullItem onAdd={addToCart} onShowItem={this.onShowItem} item={this.state.fullItem} />}
        
      </div>
    );
  }

  onShowItem(item) {
    this.setState({ fullItem: item, showFullItem: !this.state.showFullItem });
  }

  chooseCategory(category) {
    if (category === 'all') {
      this.setState({ currentItems: this.state.items });
      return;
    }

    this.setState({
      currentItems: this.state.items.filter(el => el.category === category),
    });
  }
}

export default Cards; 