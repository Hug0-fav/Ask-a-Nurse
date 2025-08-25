"use client";

import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";
import { toast } from "react-hot-toast";
import { useEffect, useState } from "react";
import { ADMIN_ID } from "@/lib/admin";

import ConfirmDeleteModal from "@/components/ConfirmDeleteModal";

// This component is used to delete a post
// It checks if the user is an admin before allowing deletion

export default function DeletePostButton({ postId }) {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [showConfirm, setShowConfirm] = useState(false);

  useEffect(() => {
    const getUser = async () => {
      const { data } = await supabase.auth.getUser();
      setUser(data.user);
    };
    getUser();
  }, []);

  const handleConfirmDelete = async () => {
    setShowConfirm(false); // hide modal first
    const { error } = await supabase.from("posts").delete().eq("id", postId);

    if (error) {
      toast.error("Failed to delete post.");
    } else {
      toast.success("Post deleted.");
      router.push("/"); // redirect after deletion
    }
  };

  if (user?.id !== ADMIN_ID) return null;

  return (
    <>
      <button
        onClick={() => setShowConfirm(true)}
        className="bg-red-600 mx-3.5 text-white px-2 py-2 rounded hover:bg-red-700"
      >
        Delete Post
      </button>

      {showConfirm && (
        <ConfirmDeleteModal
          onConfirm={handleConfirmDelete}
          onCancel={() => setShowConfirm(false)}
        />
      )}
    </>
  );
}
