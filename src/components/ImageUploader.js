"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";

export default function ImageUploader({ onUpload }) {
  const [uploading, setUploading] = useState(false);

  async function handleUpload(e) {
    const file = e.target.files[0];
    if (!file) return;

    setUploading(true);

    const filePath = `${Date.now()}-${file.name}`;

    const { data, error } = await supabase.storage
      .from("post-images") // 👈 your bucket name
      .upload(filePath, file);

    setUploading(false);

    if (error) {
      console.error("Upload error:", error.message);
      alert("Failed to upload image.");
    } else {
      const publicURL = supabase.storage
        .from("post-images")
        .getPublicUrl(filePath).data.publicUrl;

      onUpload(publicURL);
    }
  }

  return (
    <div>
      <label>
        Upload Image:
        <input type="file" onChange={handleUpload} disabled={uploading} />
      </label>
      {uploading && <p>Uploading...</p>}
    </div>
  );
}
