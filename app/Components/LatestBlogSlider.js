"use client";

import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function LatestBlogSlider() {
  const [latestPosts, setLatestPosts] = useState([]);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

 useEffect(() => {
  axios
    .get(
      "https://projects.candyboxdesign.com/wp-json/wp/v2/posts?_embed&per_page=3&orderby=date&order=desc"
    )
    .then((res) => setLatestPosts(res.data));
}, []);


  return (
    <div className="latest_blogs_slider_wrapper">
      <Swiper className="center_pagination black "
        modules={[Navigation,Pagination, Autoplay]}
        slidesPerView={1}
        spaceBetween={30}
          pagination={{ type: "fraction" }}
        loop
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
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
        {/* Navigation */}
        <div ref={prevRef} className="custom-prev black">
          <img src="/images/slider-prev.svg" alt="prev" />
        </div>
        <div ref={nextRef} className="custom-next black">
          <img src="/images/slider-next.svg" alt="next" />
        </div>

        {/* Slides */}
        {latestPosts.map((post) => {
          const featuredImage =
            post._embedded?.["wp:featuredmedia"]?.[0]?.media_details?.sizes
              ?.medium_large?.source_url ||
            post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
            "/placeholder.jpg";

          const categories =
            post._embedded?.["wp:term"]?.[0]?.map((cat) => cat.name) || [];

          return (
            <SwiperSlide key={post.id}>
              <div className="latest_blogs_single">
                <div className="content">
                  {/* Category */}
                  <div className="category">
                    {categories.map((cat) => (
                      <span key={cat}>{cat}</span>
                    ))}
                  </div>

                  {/* Title */}
                  <h3
                    className="title"
                    dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                  />

                  {/* Read more */}
                  <Link href={`/blog/${post.slug}`} className="common_btn">
                    <span>
                      Read More
                      <img src="/images/arrow-right.svg" alt="arrow" />
                    </span>
                  </Link>
                </div>

                {/* Image */}
                <div className="image">
                  <Image
                    src={featuredImage}
                    alt={post.title.rendered}
                    width={400}
                    height={250}
                    style={{ width: "100%", height: "auto" }}
                  />
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
