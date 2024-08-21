import React, {Component} from 'react'

export class Categories extends Component {
    constructor(props){
        super(props)
        this.state = {
            categories: [
                {
                    key: 'all',
                    name: 'Все'
                },
                {
                    key: 'poems about nature',
                    name: 'Пейзажна лiрика'
                },
                {
                    key: 'poems for kids',
                    name: 'Вiршi для дiтей'
                },
                {
                    key: 'poems about love and nature',
                    name: 'Пейзажна та любовна лiрика'
                }
            ]
        }
    }
  render(){
    return (
        <div className='categories'>
          {this.state.categories.map(el => (
            <div key={el.key} onClick={() => this.props.chooseCategory(el.key)}>{el.name}</div>) )}
        
        </div>
      )
    }
  }
    

export default Categories
