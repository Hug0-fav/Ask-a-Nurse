"use client";

// import "globals.css"
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 px-6 py-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Text Section */}
        <div>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-6">
            Jennie&apos;s Blog
          </h1>
          <h2 className="text-xl sm:text-2xl font-semibold mb-4">
            Find out what makes Jennie&apos;s blog tick
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
            Welcome to my personal space on the web — a mix of curiosity,
            creativity, and connection. Dive into thoughts, stories, and
            reflections crafted with love. Whether you&apos;re here for insight
            or inspiration, I&apos;m glad you came.
          </p>
        </div>

        {/* Image Section */}
        <div className="w-full h-80 sm:h-96 relative rounded-xl overflow-hidden shadow-md">
          <Image
            src="/hero.jpg"
            alt="Jennie blog hero image"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </main>
  );
}
