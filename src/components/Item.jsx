import React, { Component } from 'react'
import classes from '../../src/index.css';

export class Item extends Component {
  render() {
    return (

      <div className='item'>
        {/* eslint-disable-next-line */}
        <img src={"./img/"+ this.props.item.img} onClick={() => this.props.onShowItem(this.props.item)}/>
        <h2>{this.props.item.title}</h2>
        <p>{this.props.item.descr}</p>
        <h3>{this.props.item.status}</h3>
        <b>{this.props.item.price}$</b>
        {/* кнопка на карточке для заказа товара */}
        <div className='add-to-card' onClick={() => this.props.onAdd(this.props.item)}>+</div> 

      </div>
    )
  }
}

export default Item