import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import SwiperCore, { Autoplay, Pagination } from 'swiper';

// Install Swiper modules
SwiperCore.use([Autoplay, Pagination]);

function Slider() {
  return (
    <Swiper
      loop={true}
      autoplay={{
        delay: 5000, // Change slide every 5 seconds
      }}
      pagination={{ clickable: true }}
    >
      <SwiperSlide>
        <div className="bg-red-500 text-white p-4">
          Slide 1 Content
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="bg-blue-500 text-white p-4">
          Slide 2 Content
        </div>
      </SwiperSlide>
      {/* Add more slides as needed */}
    </Swiper>
  );
}

export default Slider;
