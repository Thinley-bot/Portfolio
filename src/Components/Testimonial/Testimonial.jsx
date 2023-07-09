import React from 'react';
import './Testimonial.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import prfilePic1 from '../../img/dodrup.png';
import prfilePic2 from '../../img/sonam.png';

import { Pagination } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css'

const Testimonial = () => {

    const clients=[
        {
            img:prfilePic1,
            review: "I had the privilege of working with Thinley Norbu as my FYP project partner, and I must say he is an exceptional asset to our team.",
            author:"Dodrup Wangchuk (Team Leader)"
        },
        {
            img:prfilePic2,
            review: "Mr. Thinley was an outstanding intern project leader. His strong leadership skills, exceptional organization, and clear communication ensured efficient task management and motivated the team.",
            author:"Sonam Yangchen (Incharge)"
        },

    ]

  return (
    <div className="t-wrapper" id='Testimonials'>
        <div className="t-heading">
            <span>Client Always get</span>
            <span> Exceptional Work</span>
            <span> from me...</span>
            <div className="blur t-blur1" style={{background:"var(--purple)"}}></div>
            <div className="blur t-blur2" style={{background:"skyblue"}}></div>
        </div>

        <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{clickable: true}}
        >
            {clients.map((client , index)=>{
                return(
                    <SwiperSlide key={index}>
                        <div className="testimonial">
                        <img src={client.img} alt="" />
                        <span>{client.review}</span>
                        <span>{client.author}</span>
                        </div>
                       
                    </SwiperSlide>
                )
            })}

        </Swiper>


    </div>
  )
}

export default Testimonial