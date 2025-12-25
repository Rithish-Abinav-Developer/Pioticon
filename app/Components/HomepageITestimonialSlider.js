"use client";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";

export default function HomepageITestimonialSlider() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <Swiper
      className="white_pagination center_pagination testimonial_slider" data-aos="fade-up"
      modules={[Navigation, Pagination, Autoplay]}
      slidesPerView={2.45}
      spaceBetween={30}
      loop
      pagination={{ type: "fraction" }}
      autoplay={{
        delay: 3000,
        disableOnInteraction: true,
      }}
      breakpoints={{
        0: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 2.3,
          spaceBetween: 20,
        },
        1600: {
          slidesPerView: 2.2,
          spaceBetween: 30,
        },
        1920: {
          slidesPerView: 2.45,
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
      <div ref={prevRef} className="custom-prev">
        <img src="/images/slider-prev.svg" alt="prev" />
      </div>

      <div ref={nextRef} className="custom-next">
        <img src="/images/slider-next.svg" alt="next" />
      </div>

      {/* Slides */}
      <SwiperSlide>
        <div className="test_card">
          <div className="top_section">
            <img src="/images/test_comma.svg"></img>
            <img src="/images/test_logo.svg"></img>
          </div>
          <p>
            Madan provided programme and scheduling management to the Puhoi To
            Warkworth Motorway PPP design and construct delivery team. Working
            with members of both the NZ and Spanish Joint Venture partners, he
            coordinated the planning and reporting activities across multiple
            complex interfaces, providing real time data in formats and
            presentations that was invaluable to the JV and client as well as
            the teams out in the field.
           <br/><br/>
            His communication style and clarity of engagement was recognised and
            appreciated from the construction supervisors through to JV Board
            Executives.
          </p>
          <div className="test_detail">
            <h3>Robert Jones</h3>
            <p>Project Director, Fletcher / Accions</p>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="test_card">
          <div className="top_section">
            <img src="/images/test_comma.svg"></img>
            <img src="/images/test_logo.svg"></img>
          </div>
          <p>
            Madan provided programme and scheduling management to the Puhoi To
            Warkworth Motorway PPP design and construct delivery team. Working
            with members of both the NZ and Spanish Joint Venture partners, he
            coordinated the planning and reporting activities across multiple
            complex interfaces, providing real time data in formats and
            presentations that was invaluable to the JV and client as well as
            the teams out in the field.
             <br/><br/>
            His communication style and clarity of engagement was recognised and
            appreciated from the construction supervisors through to JV Board
            Executives.
          </p>
          <div className="test_detail">
            <h3>Robert Jones</h3>
            <p>Project Director, Fletcher / Accions</p>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="test_card">
          <div className="top_section">
            <img src="/images/test_comma.svg"></img>
            <img src="/images/test_logo.svg"></img>
          </div>
          <p>
            Madan provided programme and scheduling management to the Puhoi To
            Warkworth Motorway PPP design and construct delivery team. Working
            with members of both the NZ and Spanish Joint Venture partners, he
            coordinated the planning and reporting activities across multiple
            complex interfaces, providing real time data in formats and
            presentations that was invaluable to the JV and client as well as
            the teams out in the field.
             <br/><br/>
            His communication style and clarity of engagement was recognised and
            appreciated from the construction supervisors through to JV Board
            Executives.
          </p>
          <div className="test_detail">
            <h3>Robert Jones</h3>
            <p>Project Director, Fletcher / Accions</p>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="test_card">
          <div className="top_section">
            <img src="/images/test_comma.svg"></img>
            <img src="/images/test_logo.svg"></img>
          </div>
          <p>
            Madan provided programme and scheduling management to the Puhoi To
            Warkworth Motorway PPP design and construct delivery team. Working
            with members of both the NZ and Spanish Joint Venture partners, he
            coordinated the planning and reporting activities across multiple
            complex interfaces, providing real time data in formats and
            presentations that was invaluable to the JV and client as well as
            the teams out in the field.
             <br/><br/>
            His communication style and clarity of engagement was recognised and
            appreciated from the construction supervisors through to JV Board
            Executives.
          </p>
          <div className="test_detail">
            <h3>Robert Jones</h3>
            <p>Project Director, Fletcher / Accions</p>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
