"use client";

import CommentForm from "@/components/CommentForm";
import CommentList from "@/components/CommentList";
import LikeOnPost from "./LikeOnPost";
import EditPostForm from "@/components/EditPostForm";
import DeletePostButton from "@/components/DeletePostButton";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { ADMIN_ID } from "@/lib/admin";
import Image from "next/image";
import Link from "next/link";

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
    <main className="p-8 sm:p-10 lg:p-12 max-w-3xl mx-auto bg-gray-50 rounded-lg shadow-md">
      {/* Back to posts */}
      <Link
        href="/posts"
        className="inline-block mb-10 text-lg font-semibold text-blue-600 hover:text-blue-500"
      >
        ← Back to Posts
      </Link>

      {/* Post Image */}
      {post.image_url && (
        <Image
          src={post.image_url}
          alt="Post"
          width={800}
          height={450}
          className="w-full mb-8 rounded-lg shadow"
        />
      )}

      {/* Post Title */}
      <h1 className="font-header text-3xl sm:text-4xl font-bold mb-6 break-words whitespace-normal text-gray-900">
        {post.title}
      </h1>

      {/* Post Content */}
      <div className="font-body mb-12 text-gray-800 leading-relaxed break-words whitespace-normal">
        {post.content}
      </div>

      {/* Like Button */}
      <div className="mb-8">
        <LikeOnPost postId={post.id} />
      </div>

      {/* Admin Controls */}
      {isAdmin && !showEdit && (
        <button
          onClick={() => setShowEdit(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 mb-6 font-body"
        >
          Edit Post
        </button>
      )}

      {isAdmin && showEdit && (
        <EditPostForm post={post} onDone={() => setShowEdit(false)} />
      )}

      {isAdmin && <DeletePostButton postId={post.id} />}

      {/* Comments Section */}
      <section className="mt-12">
        <h2 className="font-header text-2xl font-semibold mb-4">Comments</h2>
        <CommentForm postId={post.id} setComments={setComments} />
        <CommentList
          postId={post.id}
          comments={comments}
          setComments={setComments}
        />
      </section>
    </main>
  );
}
