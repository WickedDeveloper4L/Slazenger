
import {Pagination, Scrollbar, A11y } from 'swiper';
import './carusel.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade } from 'swiper';


import 'swiper/css';
import 'swiper/scss/effect-fade';
import 'swiper/css/pagination';
import Carousel1 from './sabina-0zAHoJ1gnGg-unsplash.webp'
import Carousel2 from './spacejoy-KSfe2Z4REEM-unsplash.webp'
import Carousel3 from './luke-chesser-vCF5sB7QecM-unsplash.jpg'
import Carousel4 from './markus-winkler-1lmPFQ7ZXeM-unsplash.jpg'
import Carousel5 from './martin-adams-zbPDL84kvRg-unsplash.jpg'
import Carousel6 from './burgess-milner-OYYE4g-I5ZQ-unsplash.jpg'



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
      <SwiperSlide className='swiper'><img src={Carousel3} alt="" className='swiper__container'/></SwiperSlide>
      <SwiperSlide className='swiper'><img src={Carousel4} alt="" className='swiper__container'/></SwiperSlide>
      <SwiperSlide className='swiper'><img src={Carousel5} alt="" className='swiper__container'/></SwiperSlide>
      <SwiperSlide className='swiper'><img src={Carousel6} alt="" className='swiper__container'/></SwiperSlide>
    </Swiper>
    </div>
    
  );

};

export default Carousel