import EditPostForm from "@/components/EditPostForm";
import { supabase } from "@/lib/supabaseClient";

export default async function EditPage({ params }) {
  const { id } = await params;

  const { data: post, error } = await supabase
    .from("posts")
    .select("*")
    .eq("id", id)
    .single();

  if (error || !post) {
    return <div className="p-4 text-red-500">Post not found</div>;
  }

  return <EditPostForm post={post} />;
}
