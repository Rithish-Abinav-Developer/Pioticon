const BASE_URL = "https://projects.candyboxdesign.com/";

/* ===================== GET ALL POSTS (FOR STATIC EXPORT) ===================== */
export async function getAllPosts() {
  const res = await fetch(
    `${BASE_URL}/posts?per_page=100&_embed`,
    { cache: "force-cache" }
  );

  if (!res.ok) return [];

  return res.json();
}

/* ===================== GET SINGLE POST BY SLUG ===================== */
export async function getPost(slug) {
  if (!slug) return null;

  const res = await fetch(
    `${BASE_URL}/posts?slug=${slug}&_embed`,
    { cache: "force-cache" }
  );

  if (!res.ok) return null;

  const data = await res.json();
  return data.length ? data[0] : null;
}
