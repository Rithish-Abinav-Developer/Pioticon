"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function RelatedBlogs() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://projects.candyboxdesign.com/wp-json/wp/v2/posts?_embed&per_page=5&orderby=date&order=desc"
      )
      .then((res) => setBlogs(res.data))
      .catch((err) => console.error("Error fetching related blogs:", err));
  }, []);

  return (
    <div className="related_blogs">
      {blogs.map((blog) => {
        const featuredImage =
          blog._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "/placeholder.jpg";

        const date = new Date(blog.date).toLocaleDateString("en-GB", {
          day: "2-digit",
          month: "short",
          year: "numeric",
        });

        return (
          <div key={blog.id} className="related_blog_item">
           
              <div className="related_blog_image">
                <Image
                  src={featuredImage}
                  alt={blog.title.rendered}
                  width={400}
                  height={225}
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
              <div className="related_blog_info">
                <p className="related_blog_date">{date}</p>
                <h4
                  className="related_blog_title"
                  dangerouslySetInnerHTML={{ __html: blog.title.rendered }}
                />
                  <Link className="link_btn" href={`/blogs/${blog.slug}`}>
                        <span>Read More <img src="/images/arrow-right-orange.svg" alt="logo"/></span>
                         </Link>
              </div>
           
          </div>
        );
      })}
    </div>
  );
}
