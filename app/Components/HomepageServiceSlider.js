"use client";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";

export default function HomepageServiceSlider() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <Swiper
      className="service_slider" data-aos="fade-up"
      modules={[Navigation, Pagination, Autoplay]}
      slidesPerView={1.65}
      spaceBetween={20}
      loop
      pagination={{ type: "fraction" }}
      autoplay={{
        delay: 3000,
        disableOnInteraction: true,
      }}
      breakpoints={{
        0: { slidesPerView: 1 },
        768: { slidesPerView: 1.75 },
        1024: { slidesPerView: 1.25 },
        1600: { slidesPerView: 1.35 },
        1920: { slidesPerView: 1.65 }

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
        <div className="content">
          <h3>PMC Services</h3>
          <p className="text">
           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <Link href="#" className="common_btn">
            <span>
              Enquire Now <img src="/images/arrow-right.svg" alt="" />
            </span>
          </Link>
        </div>
        <div className="image">
          <img src="/images/pmc-service.png" width='100%'></img>
        </div>
      </SwiperSlide>

         <SwiperSlide>
        <div className="content">
          <h3>PMC Services</h3>
          <p className="text">
           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <Link href="#" className="common_btn">
            <span>
              Enquire Now <img src="/images/arrow-right.svg" alt="" />
            </span>
          </Link>
        </div>
        <div className="image">
          <img src="/images/pmc-service.png" width='100%'></img>
        </div>
      </SwiperSlide>

          <SwiperSlide>
        <div className="content">
          <h3>PMC Services</h3>
          <p className="text">
           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <Link href="#" className="common_btn">
            <span>
              Enquire Now <img src="/images/arrow-right.svg" alt="" />
            </span>
          </Link>
        </div>
        <div className="image">
          <img src="/images/pmc-service.png" width='100%'></img>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
