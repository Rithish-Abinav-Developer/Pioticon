"use server";
import Image from "next/image";
import { notFound } from "next/navigation";
import AnimatedHeading from "@/app/Components/AnimatedHeading";
import Footer from "@/app/Components/Footer";
import RelatedBlogs from "@/app/Components/RelatedBlogs";
import Head from "next/head";

// Fetch post by slug from WordPress
async function getPost(slug) {
  if (!slug) return null;

  try {
    const res = await fetch(
      `https://projects.candyboxdesign.com/wp-json/wp/v2/posts?slug=${slug}&_embed`,
      { cache: "no-store" }
    );

    if (!res.ok) return null;

    const data = await res.json();
    return data[0] || null;
  } catch (error) {
    console.error("Error fetching post:", error);
    return null;
  }
}

// Generate metadata for SEO
export async function generateMetadata({ params }) {
  const resolvedParams = await params; // ✅ unwrap promise
  const slug = resolvedParams?.slug;

  if (!slug) return {};

  const post = await getPost(slug);
  if (!post) return {};

  const description = post.excerpt?.rendered
    ?.replace(/<[^>]+>/g, "")
    ?.slice(0, 160);

  const image = post._embedded?.["wp:featuredmedia"]?.[0]?.source_url;

  return {
    title: post.title?.rendered || "Blog Post",
    description,
    openGraph: {
      title: post.title?.rendered || "Blog Post",
      description,
      images: image ? [image] : [],
      type: "article",
    },
  };
}

// Page component
export default async function BlogDetail({ params }) {
  // ✅ Unwrap params here too
  const resolvedParams = await params;
  const slug = resolvedParams?.slug;

  if (!slug) notFound();

  const post = await getPost(slug);
  if (!post) notFound();

  const featuredImage =
    post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "/placeholder.jpg";

  const date = new Date(post.date).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  const author = post._embedded?.author?.[0]?.name || "Unknown Author";

  const categories =
    post._embedded?.["wp:term"]?.[0]?.map((cat) => cat.name) || [];

  return (
    <>
  


          <section className="common_section blog_detail elementor-kit-7">
        <div className="container">
            <main>
          {categories.length > 0 && (
            <div className="blog_categories">
              {categories.map((cat) => (
                <span key={cat}>{cat}</span>
              ))}
            </div>
          )}

          <h1
            className="blog_title"
            dangerouslySetInnerHTML={{ __html: post.title?.rendered || "" }}
          />

<div className="date_author">
          <p className="blog_date">{date}</p>
          <p className="author_name">{author}</p>
          </div>

          <div className="blog_featured_image">
            <Image
              src={featuredImage}
              alt={post.title?.rendered || "Featured Image"}
              width={1200}
              height={630}
              priority
              style={{ width: "100%", height: "auto" }}
            />
          </div>

          <article
            className="blog_content"
            dangerouslySetInnerHTML={{
              __html: post.content?.rendered || "",
            }}
          />
          </main>
            <aside>

            <h3 className="related_blogs_heading">Related Blogs</h3>
            <RelatedBlogs />

</aside>
        </div>

      
      </section>




    

      <AnimatedHeading />
      <Footer />
    </>
  );
}
