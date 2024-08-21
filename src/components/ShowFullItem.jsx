import React, { Component }  from 'react'

export class ShowFullItem extends Component {
    render(){
        return (
            <div className='full-item'>
              <div>
                 {/* Кнопка-крестик для закрытия полного окна*/}
         <div className='close-btn' onClick={() => this.props.onShowItem(null)}>
                       X 
                       {/* &times; */}
          </div>
        <img src={"./img/"+ this.props.item.img} onClick={() => this.props.onShowItem(this.props.item)}/>
        <h2>{this.props.item.title}</h2>
        <p>{this.props.item.descr}</p>
        <h3>{this.props.item.status}</h3>
        <b>{this.props.item.price}$</b>
        {/* кнопка на увеличенной странице карточки */}
        <div className='add-to-card' onClick={() => this.props.onAdd(this.props.item)}>+</div> 
              </div>
            </div>
          )
        }
    }
 

export default ShowFullItem

