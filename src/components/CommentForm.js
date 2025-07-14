"use client";

import { supabase } from "@/lib/supabaseClient";
import { useState } from "react";
import toast from "react-hot-toast";
import LoadingSpinner from "./spinner";

// This component is used to add a comment to a post
// It allows users to enter their comment and submit it

export default function CommentForm({ postId, setComments }) {
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!content.trim()) {
      setMessage("Comment cannot be empty.");
      return;
    }

    setLoading(true);

    // Insert the comment into the database
    try {
      const { data, error } = await supabase
        .from("comments")
        .insert([
          {
            post_id: postId,
            content,
            user_email: "guest",
          },
        ])
        .select()
        .single();

      if (error) {
        toast.error("Failed to add comment.");
      } else {
        setMessage("");
        setComments((prev) => [data, ...prev]);
        setContent("");
        toast.success("Comment added ");
      }
    } catch (err) {
      console.error("Error adding comment:", err);
      toast.error("something went wrong");
    }

    setLoading(false);
  };

  if (loading) return <LoadingSpinner />;

  return (
    <form onSubmit={handleSubmit} className="mt-6 space-y-2">
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Add a comment..."
        rows={3}
        className="w-full p-2 border rounded-md"
      ></textarea>

      <button
        type="submit"
        disabled={loading}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50"
      >
        {loading ? "posting..." : "Post Comment"}
      </button>

      {message && <p className="text-sm mt-2">{message}</p>}
    </form>
  );
}
