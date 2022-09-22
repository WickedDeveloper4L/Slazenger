import React, { Component } from 'react'
import SHOP_DATA from '../shopData';
import Item from '../../components/Item/Item';
import './sneakers.scss'


export default class Sneakers extends Component {
    constructor(props) {
        super(props);
            this.state = {
                shop: SHOP_DATA
            }
    }
  render() {
    return (
      <div className='sneakers-page'>
            <span className="title">SNEAKERS</span>
            <div className="items-container">
                {
                    this.state.shop[1].items.map(item => <Item key={item.id} item={item}/>)
                }
            </div>
      </div>
    )
  }
}
