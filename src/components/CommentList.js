"use client";

import { supabase } from "@/lib/supabaseClient";
import { useEffect, useState } from "react";
import { ADMIN_ID } from "@/lib/admin";

import toast from "react-hot-toast";

// This component fetches and displays comments for a specific post

export default function CommentList({ postId, comments, setComments }) {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    // fetch comments
    const fetchComments = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from("comments")
        .select("id, content, user_email, created_at")
        .eq("post_id", postId)
        .order("created_at", { ascending: false });

      if (error) {
        toast.error("Failed to load comments.");
      } else {
        setComments(data);
      }

      setLoading(false);
    };
    fetchComments();

    // fetch user
    const fetchUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setUser(user);
    };

    fetchUser();
  }, [postId, setComments]);

  // This function handles the deletion of a comment
  const handleDelete = async (id) => {
    const { error } = await supabase.from("comments").delete().eq("id", id);

    if (error) {
      toast.error("Failed to delete comment.");
    } else {
      toast.success("Comment deleted successfully.");
      setComments((prev) => prev.filter((comment) => comment.id !== id));
    }
  };

  if (loading) return <p className="mt-4 text-gray-500">Loading comments...</p>;

  return (
    <div className="mt-6 space-y-4">
      {comments.map((comment) => (
        <div
          key={comment.id}
          className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md shadow-sm"
        >
          <div>
            {comment.user_email}.{""}
            {new Date(comment.created_at).toLocaleDateString()}
          </div>

          {/* It checks if the user is an admin before allowing deletion   */}
          {user?.id === ADMIN_ID && (
            <button
              onClick={() => handleDelete(comment.id)}
              className="text-red-500 hover:text-red-700 ml-2"
            >
              Delete
            </button>
          )}

          <p className="text-grey-800 dark:text-gray-200">{comment.content}</p>
        </div>
      ))}
    </div>
  );
}
