"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import Link from "next/link";
import {
  Stethoscope,
  HeartPulse,
  Pill,
  Syringe,
  Activity,
  Hospital,
} from "lucide-react";

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
      <section
        className="relative w-full min-h-screen flex items-center bg-cover bg-center"
        style={{ backgroundImage: "url('/bg-nurse.png')" }} // replace with your image path
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-white/75"></div>

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-10 lg:px-12 py-16 lg:py-0 flex flex-col lg:flex-row items-center gap-12 lg:gap-20 pt-20">
          {/* Left: Text */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
              <span className="block text-2xl sm:text-3xl text-green-700">
                Ask a Nurse
              </span>
              Get{" "}
              <span className="text-green-600 font-extrabold">
                Trusted Health Advice
              </span>
            </h1>
            <p className="text-gray-700 mb-8 max-w-md mx-auto lg:mx-0 text-base sm:text-lg">
              Here to guide you with reliable health tips, answers to your
              pressing questions, and practical advice to support your
              well-being every day. Your health matters, and we’re here to help
              you make informed decisions with confidence.
            </p>
            <Link
              href="/request"
              className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg shadow-md transition"
            >
              Ask a Question
            </Link>
          </div>

          {/* Right: Features with Icons */}
          <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 gap-6 w-full">
            {/* First Row */}
            <div className="flex flex-col items-center text-center p-4 bg-white rounded-xl shadow-md">
              <Stethoscope className="w-10 h-10 text-green-600 mb-3" />
              <h3 className="font-semibold text-gray-900">Health Checkups</h3>
              <p className="text-gray-600 text-sm">
                Guidance on routine care and prevention.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-4 bg-white rounded-xl shadow-md">
              <HeartPulse className="w-10 h-10 text-green-600 mb-3" />
              <h3 className="font-semibold text-gray-900">Heart & Wellness</h3>
              <p className="text-gray-600 text-sm">
                Support for lifestyle and heart health.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-4 bg-white rounded-xl shadow-md">
              <Pill className="w-10 h-10 text-green-600 mb-3" />
              <h3 className="font-semibold text-gray-900">Medication Advice</h3>
              <p className="text-gray-600 text-sm">
                Safe tips for prescriptions & usage.
              </p>
            </div>

            {/* Second Row */}
            <div className="flex flex-col items-center text-center p-4 bg-white rounded-xl shadow-md">
              <Syringe className="w-10 h-10 text-green-600 mb-3" />
              <h3 className="font-semibold text-gray-900">Vaccinations</h3>
              <p className="text-gray-600 text-sm">
                Stay informed on essential vaccines.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-4 bg-white rounded-xl shadow-md">
              <Activity className="w-10 h-10 text-green-600 mb-3" />
              <h3 className="font-semibold text-gray-900">Healthy Living</h3>
              <p className="text-gray-600 text-sm">
                Fitness & nutrition tips for wellness.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-4 bg-white rounded-xl shadow-md">
              <Hospital className="w-10 h-10 text-green-600 mb-3" />
              <h3 className="font-semibold text-gray-900">Clinic Support</h3>
              <p className="text-gray-600 text-sm">
                Guidance on when to visit a doctor.
              </p>
            </div>
          </div>
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
