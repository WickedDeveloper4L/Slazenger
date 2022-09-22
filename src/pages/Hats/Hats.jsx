import React, { Component } from 'react'
import SHOP_DATA from '../shopData';
import Item from '../../components/Item/Item';
import './hats.scss'


export default class Hats extends Component {
    constructor(props) {
        super(props);
            this.state = {
                shop: SHOP_DATA
            }
    }
  render() {
    return (
      <div className='hats-page'>
            <span className="title">HATS</span>
            <div className="items-container">
                {
                    this.state.shop[0].items.map(item => <Item key={item.id} item={item}/>)
                }
            </div>
      </div>
    )
  }
}
