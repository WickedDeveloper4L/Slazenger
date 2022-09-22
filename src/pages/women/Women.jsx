import React, { Component } from 'react'
import SHOP_DATA from '../shopData';
import Item from '../../components/Item/Item';
import './women.scss'


export default class Women extends Component {
    constructor(props) {
        super(props);
            this.state = {
                shop: SHOP_DATA
            }
    }
  render() {
    return (
      <div className='womens-page'>
            <span className="title">WOMEN'S</span>
            <div className="items-container">
                {
                    this.state.shop[3].items.map(item => <Item key={item.id} item={item}/>)
                }
            </div>
      </div>
    )
  }
}
