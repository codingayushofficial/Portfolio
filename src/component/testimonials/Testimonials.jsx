import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg';
import AVTR2 from '../../assets/avatar2.jpg';
import AVTR3 from '../../assets/avatar3.jpg';
import AVTR4 from '../../assets/avatar4.jpg';


import { Navigation, Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';



const data = [
  {
    id: 1,
    avatar: AVTR1,
    name: 'Tina Show',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam similique explicabo sapiente voluptate nam tempore vel quas perferendis error molestiae, provident consectetur enim aliquam eius ipsa itaque nulla accusantium cupiditate?'
  },
  {
    id: 2,
    avatar: AVTR2,
    name: 'Shatta Wale',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam similique explicabo sapiente voluptate nam tempore vel quas perferendis error molestiae, provident consectetur enim aliquam eius ipsa itaque nulla accusantium cupiditate?'
  },
  {
    id: 3,
    avatar: AVTR3,
    name: 'Kwane Despite',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam similique explicabo sapiente voluptate nam tempore vel quas perferendis error molestiae, provident consectetur enim aliquam eius ipsa itaque nulla accusantium cupiditate?'
  },
  {
    id: 4,
    avatar: AVTR4,
    name: 'Nana Ama McBrown',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam similique explicabo sapiente voluptate nam tempore vel quas perferendis error molestiae, provident consectetur enim aliquam eius ipsa itaque nulla accusantium cupiditate?'
  }
]



const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container" 
       // install Swiper modules
       modules={[ Pagination,Navigation]}
       spaceBetween={50}
       slidesPerView={1}
       pagination={{ clickable: true }}
      >

        {
          data.map(({ id, avatar, name, review }) => {
            return (
              <SwiperSlide key={id} className="testimonial">
                <div className="client__avatar">
                  <img src={avatar} alt="Avatar one" />
                </div>
                <h5 className='client__name'>{name}</h5>
                <small className="client__review">
                  {review}
                </small>
              </SwiperSlide>
            )
          })
        }




      </Swiper>
    </section>
  )
}

export default Testimonials