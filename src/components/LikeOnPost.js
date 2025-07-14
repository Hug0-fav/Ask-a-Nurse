"use client";

import { supabase } from "@/lib/supabaseClient";
import { useEffect, useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";

export default function LikeOnPost({ postId }) {
  const [liked, setLiked] = useState(false);
  const [likedCount, setLikedCount] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // this checks localstorage if the user has already liked the post
    const storeLikes = JSON.parse(localStorage.getItem("storeLikes")) || [];
    if (storeLikes.includes(postId)) {
      setLiked(true);
    }

    const getLikes = async () => {
      const { data, error } = await supabase
        .from("likes")
        .select("*")
        .eq("post_id", postId);

      console.log("Fetched likes data:", data); // Add this

      if (!error && data) {
        setLikedCount(data.length);
      }

      setLoading(false);
    };

    getLikes();
  }, [postId]);

  const handleToggleLike = async () => {
    // save likes to localstorage
    const storeLikes = JSON.parse(localStorage.getItem("storeLikes") || "[]");

    if (liked) {
      //  remove like

      await supabase.from("likes").delete().eq("post_id", postId);

      const updatedLikes = storeLikes.filter((id) => id !== postId);

      localStorage.setItem("storeLikes", JSON.stringify(updatedLikes));
      setLiked(false);
      setLikedCount((prevCount) => Math.max(prevCount - 1, 0));
    } else {
      // save likes to supabase
      await supabase.from("likes").insert([{ post_id: postId }]);

      storeLikes.push(postId);
      localStorage.setItem("storeLikes", JSON.stringify(storeLikes));

      setLiked(true);
      setLikedCount((prevCount) => prevCount + 1);
    }
  };

  if (loading) return <p>Loading...</p>;

  return (
    <button
      onClick={handleToggleLike}
      className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 shadow-sm
    ${
      liked
        ? "bg-red-600 text-white"
        : "bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-white"
    }
    hover:scale-105 hover:shadow-md active:scale-95
  `}
    >
      {liked ? (
        <FaHeart className="text-white" />
      ) : (
        <FaRegHeart className="text-red-600" />
      )}
      <span className="font-medium">{liked ? "Liked" : "Like"}</span>
      <span className="text-sm opacity-80">({likedCount})</span>
    </button>
  );
}
