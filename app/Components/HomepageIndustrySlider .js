"use client";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";

export default function HomepageIndustrySlider({color}) {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <Swiper className={`center_pagination industry_slider ${color === 'black' ?"": 'white_pagination' }`} data-aos="fade-up"
      modules={[Navigation, Pagination, Autoplay]}
      slidesPerView={3.65}
      spaceBetween={30}
      loop
      pagination={{ type: "fraction" }}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
   breakpoints={{
  0: {
    slidesPerView: 1,
    spaceBetween: 20,
  },
  768: {
    slidesPerView: 2.7,
     spaceBetween: 20,
  },
  1024: {
    slidesPerView: 3,
     spaceBetween: 20,
  },
  1600: {
    slidesPerView: 3,
    spaceBetween: 30,
  },
  1920: {
    slidesPerView: 3.65,
  },
}}

      navigation={{
        prevEl: prevRef.current,
        nextEl: nextRef.current,
      }}
      onBeforeInit={(swiper) => {
        swiper.params.navigation.prevEl = prevRef.current;
        swiper.params.navigation.nextEl = nextRef.current;
      }}
    >
      {/* Navigation Buttons */}
      <div ref={prevRef} className={`custom-prev ${color === 'black' ? 'black' : ''}`}>
        <img src="/images/slider-prev.svg" alt="prev" />
      </div>

      <div ref={nextRef} className={`custom-next ${color === 'black' ? 'black' : 'white_btn'}`}>
        <img src="/images/slider-next.svg" alt="next" />
      </div>

      {/* Slides */}
      <SwiperSlide>
        <div className="image">
          <img src="/images/construction.png" width='100%'></img>
        </div>
        <p className={`text ${color === 'black' ? 'black_text' : 'white_text'}`}>Construction </p>
      </SwiperSlide>

          <SwiperSlide>
        <div className="image">
          <img src="/images/construction.png" width='100%'></img>
        </div>
        <p className={`text ${color === 'black' ? 'black_text' : 'white_text'}`}>Construction </p>
      </SwiperSlide>

           <SwiperSlide>
        <div className="image">
          <img src="/images/construction.png" width='100%'></img>
        </div>
        <p className={`text ${color === 'black' ? 'black_text' : 'white_text'}`}>Construction </p>
      </SwiperSlide>
       <SwiperSlide>
        <div className="image">
          <img src="/images/construction.png" width='100%'></img>
        </div>
        <p className={`text ${color === 'black' ? 'black_text' : 'white_text'}`}>Construction </p>
      </SwiperSlide>

          <SwiperSlide>
        <div className="image">
          <img src="/images/construction.png" width='100%'></img>
        </div>
        <p className={`text ${color === 'black' ? 'black_text' : 'white_text'}`}>Construction </p>
      </SwiperSlide>

           <SwiperSlide>
        <div className="image">
          <img src="/images/construction.png" width='100%'></img>
        </div>
        <p className={`text ${color === 'black' ? 'black_text' : 'white_text'}`}>Construction </p>
      </SwiperSlide>
    </Swiper>
  );
}
