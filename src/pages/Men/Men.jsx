import React, { Component } from 'react'
import SHOP_DATA from '../shopData';
import Item from '../../components/Item/Item';
import './men.scss'


export default class Men extends Component {
    constructor(props) {
        super(props);
            this.state = {
                shop: SHOP_DATA
            }
    }
  render() {
    return (
      <div className='mens-page'>
            <span className="title">MEN'S</span>
            <div className="items-container">
                {
                    this.state.shop[4].items.map(item => <Item key={item.id} item={item}/>)
                }
            </div>
      </div>
    )
  }
}
