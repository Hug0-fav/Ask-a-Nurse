"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";
import AdminPostForm from "@/components/AdminPostForm";
import { ADMIN_ID } from "@/lib/admin";
import Link from "next/link"; // fix: use Next.js Link, not lucide-react

export default function AdminPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [session, setSession] = useState(null);

  useEffect(() => {
    const getSession = async () => {
      const { data } = await supabase.auth.getSession();
      const user = data?.session?.user;

      if (!user) {
        router.push("/login");
      } else {
        setSession(data.session);
      }

      setLoading(false);
    };

    getSession();
  }, [router]);

  if (loading) return <p>Checking auth...</p>;
  if (!session) return null;

  const user = session.user;

  return (
    <div className="p-6">
      <AdminPostForm />

      {/* {user?.id === ADMIN_ID && (
        <Link
          href="/admin/edit/123"
          className="inline-block mt-4 text-blue-600 underline"
        >
          Edit Post
        </Link>
      )} */}
    </div>
  );
}
