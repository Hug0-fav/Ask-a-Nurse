"use client";

import CommentForm from "@/components/CommentForm";
import CommentList from "@/components/CommentList";
import LikeOnPost from "./LikeOnPost";
import EditPostForm from "@/components/EditPostForm";
import DeletePostButton from "@/components/DeletePostButton";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { ADMIN_ID } from "@/lib/admin";

// this component is rendered on the client side
// this component fetches a single post

export default function CommentSinglePostClient({ post }) {
  const [comments, setComments] = useState([]);
  const [user, setUser] = useState(null);
  const [showEdit, setShowEdit] = useState(false); // <-- control form

  useEffect(() => {
    const fetchUser = async () => {
      const { data } = await supabase.auth.getUser();
      setUser(data.user);
    };
    fetchUser();
  }, []);

  const isAdmin = user?.id === ADMIN_ID;

  return (
    <main className="p-8 max-w-3xl mx-auto">
      {post.image_url && (
        <img
          src={post.image_url}
          alt="Post"
          className="w-full mb-6 rounded-md"
        />
      )}

      <h1 className="text-2xl font-bold mb-4">{post.title}</h1>
      <div className="mb-10 text-gray-800 dark:text-gray-100 leading-relaxed">
        {post.content}
      </div>

      <LikeOnPost postId={post.id} />

      {/* it fetches the user session and checks if the user is an admin. it allows the admin to edit or delete the post */}
      {isAdmin && !showEdit && (
        <button
          onClick={() => setShowEdit(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 mb-4"
        >
          Edit Post
        </button>
      )}

      {isAdmin && showEdit && (
        <EditPostForm post={post} onDone={() => setShowEdit(false)} />
      )}

      {isAdmin && <DeletePostButton postId={post.id} />}

      {/*to add comments */}
      <h2 className="text-xl font-semibold mb-2 mt-10">Comments</h2>
      <CommentForm postId={post.id} setComments={setComments} />
      <CommentList
        postId={post.id}
        comments={comments}
        setComments={setComments}
      />
    </main>
  );
}
