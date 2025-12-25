"use client";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";

export default function HomepageBlogSlider() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <Swiper className="blog_slider" data-aos='fade-up'
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
      <div ref={prevRef} className="custom-prev black">
        <img src="/images/slider-prev.svg" alt="prev" />
      </div>

      <div ref={nextRef} className="custom-next black">
        <img src="/images/slider-next.svg" alt="next" />
      </div>

      {/* Slides */}
      <SwiperSlide>
        <div className="image">
          <img src="/images/blog1.png" width='100%'></img>
        </div>
        <p className="date">12 Jul 2025</p>
        <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
              <Link href='#' className='link_btn'><span>Read More <img src='/images/arrow-right-orange.svg' alt='logo' /></span> </Link>

      </SwiperSlide>
          <SwiperSlide>
        <div className="image">
          <img src="/images/blog2.png" width='100%'></img>
        </div>
        <p className="date">12 Jul 2025</p>
        <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
              <Link href='#' className='link_btn'><span>Read More <img src='/images/arrow-right-orange.svg' alt='logo' /></span> </Link>

      </SwiperSlide>
          <SwiperSlide>
        <div className="image">
          <img src="/images/blog3.png" width='100%'></img>
        </div>
        <p className="date">12 Jul 2025</p>
        <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
              <Link href='#' className='link_btn'><span>Read More <img src='/images/arrow-right-orange.svg' alt='logo' /></span> </Link>

      </SwiperSlide>
          <SwiperSlide>
        <div className="image">
          <img src="/images/blog4.png" width='100%'></img>
        </div>
        <p className="date">12 Jul 2025</p>
        <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
              <Link href='#' className='link_btn'><span>Read More <img src='/images/arrow-right-orange.svg' alt='logo' /></span> </Link>

      </SwiperSlide>
     <SwiperSlide>
        <div className="image">
          <img src="/images/blog1.png" width='100%'></img>
        </div>
        <p className="date">12 Jul 2025</p>
        <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
              <Link href='#' className='link_btn'><span>Read More <img src='/images/arrow-right-orange.svg' alt='logo' /></span> </Link>

      </SwiperSlide>
         
    </Swiper>
  );
}
