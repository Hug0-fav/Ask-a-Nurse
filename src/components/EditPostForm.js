"use client";

import { supabase } from "@/lib/supabaseClient";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

// This component is used to edit a post
// It allows the admin to update the title, content, category, and image of the post

export default function EditPostForm({ post, onDone }) {
  const router = useRouter();
  const [content, setContent] = useState(post.content);
  const [category, setCategory] = useState(post.category);
  const [title, setTitle] = useState(post.title);
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    let image_url = post.image_url;

    // It uses Supabase to update the post in the database
    if (image) {
      const { data, error: uploadError } = await supabase.storage
        .from("post-images")
        .upload(`${Date.now()}-${image.name}`, image);

      if (uploadError) {
        toast.error("Failed to upload image");
        return;
      }

      image_url = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/post-images/${data.path}`;
    }

    const { error } = await supabase
      .from("posts")
      .update({
        title,
        content,
        category,
        image_url,
      })
      .eq("id", post.id);

    if (error) {
      toast.error("Failed to update post");
    } else {
      toast.success("Post updated");
      onDone?.(); // hide the form
      router.refresh(); // refresh page data
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 mb-8">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        className="w-full border p-2 rounded break-words whitespace-normal"
      />

      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Content"
        className="w-full border p-2 rounded min-h-[150px] break-words whitespace-normal"
      />

      <input
        type="file"
        accept="image/*"
        onChange={(e) => setImage(e.target.files[0])}
        className="block"
      />

      <input
        type="text"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        placeholder="Category"
        className="w-full border p-2 rounded "
      />

      <div className="flex gap-4">
        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Update
        </button>
        <button
          type="button"
          onClick={onDone}
          className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}
