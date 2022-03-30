
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css"
import "swiper/components/pagination/pagination.min.css"

import "./styles.css";


// import Swiper core and required modules
import SwiperCore, {
  EffectCoverflow,Pagination
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([EffectCoverflow,Pagination]);


export default function App() {
  
  
  
  return (
   <div>
    <h1 style={{textAlign:'center', color:'rgb(115, 156, 114)'}}>Travel the world with us</h1>
    
    <Swiper effect={'coverflow'} grabCursor={true} centeredSlides={true} slidesPerView={'auto'} coverflowEffect={{
  "rotate": 50,
  "stretch": 0,
  "depth": 100,
  "modifier":1,
  "slideShadows": true
}} pagination={true} className="mySwiper">
  <SwiperSlide><img alt='' src="https://pbs.twimg.com/media/EEBA1alUcAA_ogE.jpg" /></SwiperSlide>
  <SwiperSlide><img alt='' src="https://pbs.twimg.com/media/EEBBLwPUUAAi9GJ.jpg" /></SwiperSlide>
  <SwiperSlide><img alt='' src="https://i.pinimg.com/originals/d3/2d/b0/d32db02cfd309027d0e91574cf48166e.jpg" /></SwiperSlide>
  <SwiperSlide><img alt='' src="https://www.edreams.com/blog/wp-content/uploads/sites/3/2012/06/jungle-elephant-boy-564x564.jpg" /></SwiperSlide>
  <SwiperSlide><img alt='' src="https://abroadanna.com/wp-content/uploads/2020/02/IMG_8614-1.jpg" /></SwiperSlide>
   
  <SwiperSlide><img alt='' src="https://i.pinimg.com/736x/73/0b/81/730b815cb07dafe7a0514318ad10690c.jpg" /></SwiperSlide>
  <SwiperSlide><img alt='' src="https://bucketlistjourney.net/amazon-jungle-travel-things-to-pack-for-the-rainforest/img_3805-copy1-2/" /></SwiperSlide>
  <SwiperSlide><img alt='' src="https://www.eni.com/assets/images/topic/low-carbon/cover-new-trees.jpg.rend.500.700.jpg" /></SwiperSlide>
  <SwiperSlide><img alt='' src="https://bestplacesintheworldtoretire.com/images/users/461/Aerial-Tram-3.jpg" /></SwiperSlide>
  
  </Swiper>
  </div>
    
  )
}