import CommentSinglePostClient from "@/components/CommentSinglePostClient";

import { supabase } from "@/lib/supabaseClient";

export default async function SinglePostPage({ params }) {
  const { id } = await params;

  const { data: post, error } = await supabase
    .from("posts")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    return <div className="p-4 text-red-500">Post not found</div>;
  }

  return (
    <CommentSinglePostClient
      post={post}
    />
  );
}
