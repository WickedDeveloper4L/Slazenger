import React, { Component } from 'react'
import SHOP_DATA from '../shopData';
import Item from '../../components/Item/Item';
import './jackets.scss'


export default class Jackets extends Component {
    constructor(props) {
        super(props);
            this.state = {
                shop: SHOP_DATA
            }
    }
  render() {
    return (
      <div className='jackets-page'>
            <span className="title">JACKETS</span>
            <div className="items-container">
                {
                    this.state.shop[2].items.map(item => <Item key={item.id} item={item}/>)
                }
            </div>
      </div>
    )
  }
}
