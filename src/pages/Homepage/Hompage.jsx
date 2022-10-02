import React, { Component } from 'react'
import Carousel from '../../components/carousel/Carousel';
import Ads from '../../components/ads/ads';

class Hompage extends Component {
  render() {
    return (
      <div>
        <Carousel/>
        <Ads/>
      </div>
    )
  }
}

export default Hompage
