"use client";
import { useEffect, useState } from "react";
import Loader from "../Components/Loader"; // common loader
import LatestBlogSlider from "../Components/LatestBlogSlider";
import Footer from "../Components/Footer";
import axios from "axios";
import Link from "next/link";

export default function Page() {
  const [categories, setCategories] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [loadingBlogs, setLoadingBlogs] = useState(true);
  const [loadingCategories, setLoadingCategories] = useState(true);

  const [activeCategory, setActiveCategory] = useState("all");
  const [search, setSearch] = useState(false);
  const [searchText, setSearchText] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  /* ===== Fetch categories ===== */
  useEffect(() => {
    const fetchCategories = async () => {
      setLoadingCategories(true);
      try {
        const res = await axios.get(
          "https://projects.candyboxdesign.com/wp-json/wp/v2/categories?per_page=100"
        );
        setCategories(res.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoadingCategories(false);
      }
    };
    fetchCategories();
  }, []);

  const filteredCategories = categories.filter(
    (cat) => cat.name !== "Uncategorized" && cat.name !== "Blog"
  );

  /* ===== Fetch blogs ===== */
  useEffect(() => {
    const fetchBlogs = async () => {
      setLoadingBlogs(true);
      try {
        const res = await axios.get(
          "https://projects.candyboxdesign.com/wp-json/wp/v2/posts?_embed&per_page=100&orderby=date&order=desc"
        );
        setBlogs(res.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoadingBlogs(false);
      }
    };
    fetchBlogs();
  }, []);

  /* ================= Close Search ================= */
  useEffect(() => {
    const handleClick = (e) => {
      if (!e.target.closest(".blog_tab")) setSearch(false);
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  /* ================= Filter & Pagination ================= */
  const filteredBlogs = blogs.filter((post) => {
    const matchCategory =
      activeCategory === "all" ? true : post.categories.includes(activeCategory);
    const matchSearch = post.title.rendered
      .toLowerCase()
      .includes(searchText.toLowerCase());
    return matchCategory && matchSearch;
  });

  const totalPosts = filteredBlogs.length;
  const totalPages = Math.ceil(totalPosts / postsPerPage);

  const startIndex = (currentPage - 1) * postsPerPage;
  const paginatedBlogs = filteredBlogs.slice(startIndex, startIndex + postsPerPage);

  useEffect(() => setCurrentPage(1), [activeCategory, searchText]);

  /* ================= Loading State ================= */
  const isLoading = loadingBlogs || loadingCategories;

  return (
    <>
      <section className="common_section latest_blogs_section">
        <div className="container">
          <h1 className="main_heading">Latest Blog Posts</h1>
          <LatestBlogSlider />
        </div>
      </section>

      <section className="common_section all_blogs">
        <div className="container">
          {isLoading && <Loader />}

          <div className="blog_tab">
            <div className={`categories_filter ${search ? "hide" : ""}`}>
              <div
                className={`tab_item ${activeCategory === "all" ? "active" : ""}`}
                onClick={() => setActiveCategory("all")}
              >
                All
              </div>

              {!loadingCategories &&
                filteredCategories.map((category) => (
                  <div
                    key={category.id}
                    className={`tab_item ${
                      activeCategory === category.id ? "active" : ""
                    }`}
                    onClick={() => setActiveCategory(category.id)}
                  >
                    {category.name}
                  </div>
                ))}
            </div>

            <div className={`search_box ${search ? "active" : ""}`} onClick={() => setSearch(true)}>
              <input
                type="text"
                placeholder="Search"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
              />
              <button>
                <img src="/images/blog_search.svg" alt="search" />
              </button>
            </div>
          </div>

          {/* Blog List */}
          <div className="blog_lists">
            {!loadingBlogs && paginatedBlogs.length > 0 ? (
              paginatedBlogs.map((post) => {
                const featuredImage =
                  post._embedded?.["wp:featuredmedia"]?.[0]?.media_details
                    ?.sizes?.medium_large?.source_url ||
                  post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
                  "/placeholder.jpg";

                const date = new Date(post.date).toLocaleDateString("en-GB", {
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                });

                return (
                  <div className="blog_list_single" key={post.id}>
                    <div className="image">
                      <img src={featuredImage} alt={post.title.rendered} />
                    </div>

                    <div className="content">
                      <p className="date">{date}</p>
                      <h3 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
                      <Link className="link_btn" href={`/blogs/${post.slug}`}>
                        <span>
                          Read More <img src="/images/arrow-right-orange.svg" alt="logo" />
                        </span>
                      </Link>
                    </div>
                  </div>
                );
              })
            ) : (
              !isLoading && <p>No blogs found.</p>
            )}
          </div>

          {/* Pagination */}
          {!isLoading && totalPages > 1 && (
            <div className="blog_pagination">
              <button disabled={currentPage === 1} onClick={() => setCurrentPage(currentPage - 1)}>
                Prev
              </button>

              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i}
                  className={currentPage === i + 1 ? "active" : ""}
                  onClick={() => setCurrentPage(i + 1)}
                >
                  {i + 1}
                </button>
              ))}

              <button
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage(currentPage + 1)}
              >
                Next
              </button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
}
