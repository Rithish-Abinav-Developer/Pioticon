"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function HomepageHeroBanner() {
  return (
    <div className="hp_hero_section">
      {/* <video autoPlay muted loop playsInline>
        <source src="/images/banner_video.mp4" type="video/mp4" />
      </video> */}
<video
  autoPlay
  muted
  loop
  playsInline
  preload="metadata"
  poster="/images/banner_poster.png"
  aria-hidden="true"
  className="banner-video"
>
  <source src="/images/banner_video.mp4" type="video/mp4" />
</video>


      <div className="container">
        <h1 data-aos="fade-up">Inspire <br className="desktop_break"></br>Productivity</h1>

        <Swiper className="white_pagination" data-aos="fade-up"
          modules={[Navigation, Pagination, Autoplay]}
          slidesPerView={1}
          spaceBetween={20}
          loop={true}
           navigation={{
    nextEl: ".custom-next",
    prevEl: ".custom-prev",
  }}
          pagination={{
            type: "fraction", 
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: true,
          }}
          breakpoints={{
            600: { slidesPerView: 1 },
            1000: { slidesPerView: 1 },
          }}
        >
          <div className="custom-prev"> <img src="/images/slider-prev.svg" alt="prev" /> </div>
          <div className="custom-next"> <img src="/images/slider-next.svg" alt="next" /> </div>

          <SwiperSlide>
            <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</h2>
            <p>
              By empowering people to influence integrated solution to get things done efficiently and economically, thereby driving projects qwith confidence.
            </p>
          </SwiperSlide>

          <SwiperSlide>
            <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</h2>
            <p>
              By empowering people to influence integrated solution to get things done efficiently and economically, thereby driving projects qwith confidence.
            </p>
          </SwiperSlide>

          <SwiperSlide>
            <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</h2>
            <p>
              By empowering people to influence integrated solution to get things done efficiently and economically, thereby driving projects qwith confidence.
            </p>
          </SwiperSlide>
       

        </Swiper>
      </div>
    </div>
  );
}
