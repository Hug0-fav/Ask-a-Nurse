"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import Image from "next/image";
import LoadingSpinner from "./spinner";

// This component is used to create a new post
// It allows the admin to enter a title, content, category, and upload an image

export default function AdminPostForm() {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [category, setCategory] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    let imageUrl = null;

    try {
      if (imageFile) {
        const fileName = `${Date.now()}-${imageFile.name}`;
        const { error: uploadError } = await supabase.storage
          .from("post-images")
          .upload(fileName, imageFile);

        if (uploadError) throw new Error("Image upload failed");

        const { data: urlData } = supabase.storage
          .from("post-images")
          .getPublicUrl(fileName);

        imageUrl = urlData.publicUrl;
      }

      const { error: insertError } = await supabase
        .from("posts")
        .insert([{ title, content, category, image_url: imageUrl }]);

      if (insertError) throw new Error("Failed to publish post");

      toast.success("Post published successfully!");
      setTitle("");
      setContent("");
      setImageFile(null);

      setTimeout(() => {
        router.push("/");
      }, 1000);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <LoadingSpinner />;

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-2xl mx-auto p-6 bg-white rounded-xl shadow-md space-y-6"
    >
      <h2 className="text-2xl font-bold text-gray-800">Create New Post</h2>

      <input
        type="text"
        placeholder="Post title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        className="w-full border border-gray-300  rounded px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50"
      />

      <input
        type="text"
        placeholder="Enter category (e.g. tech, movies)"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="w-full border border-gray-300  rounded px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50 "
      />

      <textarea
        placeholder="Post content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
        className="w-full border border-gray-300  rounded px-4 py-2 text-sm h-40 resize-y focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50 "
      />

      <input
        type="file"
        accept="image/*"
        onChange={(e) => {
          const file = e.target.files[0];
          setImageFile(file);
          setPreviewUrl(URL.createObjectURL(file));
        }}
        className="text-sm text-gray-600 "
      />

      {previewUrl && (
        <Image
          src={previewUrl}
          alt="Preview"
          width={300}
          height={200}
          className="mt-4 rounded-lg shadow"
        />
      )}

      <button
        type="submit"
        disabled={loading}
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md font-semibold disabled:opacity-50 transition duration-200"
      >
        {loading ? "Publishing..." : "Publish Post"}
      </button>
    </form>
  );
}
