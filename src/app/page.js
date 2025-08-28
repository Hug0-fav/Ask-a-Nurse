"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import Link from "next/link";

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      let { data, error } = await supabase
        .from("posts")
        .select("*")
        .order("created_at", { ascending: false })
        .limit(3);

      if (!error && data) setPosts(data);
    };

    fetchPosts();
  }, []);

  return (
    <main className="bg-white text-gray-900">
      {/* Hero Section */}
      <section className="relative w-full bg-green-100 overflow-hidden">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-10 lg:px-16 xl:px-24">
          <div className="h-full flex flex-col md:flex-row items-stretch justify-between">
            {/* Left: Text */}
            <div className="w-full md:w-1/2 flex flex-col justify-center py-8 md:py-0">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-header font-extrabold text-green-900 leading-tight mb-4 sm:mb-6">
                Welcome to <span className="lg:block">Ask A Nurse</span>
              </h1>
              <p className="font-body text-base sm:text-lg lg:text-xl text-green-800 leading-relaxed max-w-[60ch]">
                Explore health tips, wellness guides, and personal growth.
                Insights your journey to better living starts here.
              </p>
            </div>

            {/* Right: Desktop Image */}
            <div className="hidden md:flex w-full md:w-1/2 h-full flex items-end justify-center md:justify-end">
              <Image
                src="/pichome.png"
                alt="Jennie sitting illustration"
                width={900}
                height={900}
                priority
                className="
            object-contain
            w-[88%] sm:w-[82%] md:w-[90%] lg:w-[78%] xl:w-[70%] 2xl:w-[60%]
            max-h-[80vh]
          "
              />
            </div>
          </div>
        </div>

        {/* Mobile/Tablet Full Image */}
        <div className="md:hidden sm:flex justify-center mt-6 px-4">
          <Image
            src="/bloghomepage.jpg"
            alt="Mobile/Tablet Hero"
            width={800}
            height={800}
            className="w-full h-full object-cover rounded-xl"
            priority
          />
        </div>
      </section>

      {/* About Section */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="font-header text-3xl font-bold mb-2">
            Your Health, Simplified
          </h2>
          <p className="font-body text-gray-700 leading-relaxed mb-1">
            <span className="font-semibold text-green-700">Ask A Nurse</span> is
            dedicated to bringing you practical and inspiring content about
            health, wellness, and lifestyle. Whether you want to learn quick
            health hacks, dive into wellness routines, or explore balanced
            living tips we’ve got you covered.
          </p>
          <p className="font-body text-gray-700 leading-relaxed">
            Our goal is to make health knowledge easy, accessible, and engaging
            for everyone.
          </p>
        </div>
        <div className="relative rounded-xl overflow-hidden">
          <Image
            src="/theblog1.jpg"
            alt="Nurse Jennie"
            className="w-full max-w-md rounded-xl shadow-lg"
            width={500}
            height={500}
          />
        </div>
      </section>

      {/* Featured Posts Section */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-6xl mx-auto text-center mb-10">
          <h2 className="font-header text-3xl font-bold mb-1">Latest Posts</h2>
          <p className="font-body text-gray-600">
            Catch up on our most recent articles and updates.
          </p>
        </div>

        {posts.length === 0 ? (
          <p className="font-body text-center text-gray-500 text-lg">
            No posts yet — stay tuned!
          </p>
        ) : (
          <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link
                key={post.id}
                href={`/posts/${post.id}`}
                className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition"
              >
                {post.image_url && (
                  <Image
                    src={post.image_url}
                    alt={post.title}
                    width={400}
                    height={250}
                    className="object-cover w-full h-48"
                  />
                )}
                <div className="p-4">
                  <h3 className="font-header font-semibold text-lg mb-2">
                    {post.title}
                  </h3>
                  <p className="font-body text-gray-600 text-sm line-clamp-2">
                    {post.content}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
