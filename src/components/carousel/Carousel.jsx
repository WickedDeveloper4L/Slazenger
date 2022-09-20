
import {Pagination, Scrollbar, A11y } from 'swiper';
import './carusel.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade } from 'swiper';


import 'swiper/css';
import 'swiper/scss/effect-fade';
import 'swiper/css/pagination';
import Carousel1 from './sabina-0zAHoJ1gnGg-unsplash.webp'
import Carousel2 from './spacejoy-KSfe2Z4REEM-unsplash.webp'



 const Carousel=() => {
  return (
    <div className='carousel_component'>
    <Swiper
      // install Swiper modules
      modules={[EffectFade, Pagination, Scrollbar, A11y]}
      spaceBetween={0}
      slidesPerView={1}
      effect='fade'
      pagination={{ clickable: true }}
      className='carousel'
      
    >
      <SwiperSlide className='swiper'><img src={Carousel1} alt="" className='swiper__container'/></SwiperSlide>
      <SwiperSlide className='swiper'><img src={Carousel2} alt="" className='swiper__container'/></SwiperSlide>
    </Swiper>
    </div>
    
  );

};

export default Carousel