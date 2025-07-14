"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { useSearch } from "@/context/SearchContext";
import Link from "next/link";
import Image from "next/image";
import LoadingSpinner from "./spinner";

export default function PostList() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { searchTerm, setSearchTerm } = useSearch();

  useEffect(() => {
    const fetchPosts = async () => {
      const { data, error } = await supabase
        .from("posts")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Error fetching posts:", error);
      } else {
        setPosts(data);
      }

      setLoading(false);
    };

    fetchPosts();
  }, []);

  const filteredPosts = posts.filter((post) => {
    const term = searchTerm.toLowerCase();

    return (
      post.title.toLowerCase().includes(term) ||
      post.content.toLowerCase().includes(term) ||
      post.category?.toLowerCase().includes(term)
    );
  });

  if (loading) return <LoadingSpinner />;

  return (
    <section className="w-full px-4 sm:px-8 md:px-12 lg:px-20 xl:px-28 py-10">
      {/* search input */}
      <div className="flex justify-center mb-10">
        <input
          type="text"
          placeholder="Search posts..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full max-w-md px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-800 text-sm text-gray-800 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        />
      </div>

      {filteredPosts.length === 0 ? (
        <p className="text-center text-gray-400">
          No posts match this category.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow hover:shadow-lg transition"
            >
              {post.image_url && (
                <Image
                  src={post.image_url}
                  alt="Post image"
                  width={600}
                  height={300}
                  className="w-full h-48 object-cover"
                  priority
                />
              )}

              <div className="p-4">
                <Link href={`/posts/${post.id}`}>
                  <h3 className="font-bold text-lg mb-2 hover:underline">
                    {post.title}
                  </h3>
                </Link>

                <p className="text-xs text-gray-500 mb-2">
                  Published {new Date(post.created_at).toLocaleDateString()}
                </p>

                <p className="text-sm text-gray-700 dark:text-gray-300 line-clamp-4">
                  {post.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
