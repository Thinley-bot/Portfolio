import React from 'react'
import "./Portfolio.css"
import {Swiper, SwiperSlide} from 'swiper/react'

import Sidebar from "../../img/trans.png";
import Ecommerce from "../../img/guest.png";

import inter from "../../img/intercollege.jpeg";
import  intra from "../../img/IntraCollege.jpeg";
import freelancing from "../../img/freelancing.jpeg";
import cyber from "../../img/cyber.jpeg";
import { themeContext } from '../../Context';
import { useContext } from "react";

import 'swiper/css'

const Portfolio = () => {
    const theme = useContext(themeContext);
    const darkMode =theme.state.darkMode;
  return (
    <div className="portfolio" id="Portfolio">
        <span style={{color: darkMode? "white":""}}>Recent Projects</span>
        <span>& Achievements</span>

        <Swiper spaceBetween={30} slidesPerView={3} grabCursor={true} className='portfolio-slider'>
            <SwiperSlide>
                <img src={Sidebar} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={freelancing} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={cyber} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={inter} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={intra} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={Ecommerce} alt="" />
            </SwiperSlide>


        </Swiper>


    </div>
  );
}

export default Portfolio