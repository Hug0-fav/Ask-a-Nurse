"use client";

import Image from "next/image";

export default function AboutPage() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      {/* Title */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          About Ask A Nurse
        </h2>
        <p className="text-lg text-gray-600 mt-2">
          Find out what makes Ask A Nurse tick
        </p>
      </div>

      {/* Row 1: Image + Introduction */}
      <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
        {/* Image */}
        <div className="flex justify-center">
          <Image
            src="/bloghomepage.jpg"
            alt="Nurse Jennie"
            className="w-full max-w-md rounded-xl shadow-lg"
            width={500}
            height={500}
          />
        </div>
        {/* Intro Text */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Our Mission
          </h3>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
            At Ask a Nurse, our mission is simple yet powerful — to make health
            knowledge clear, relatable, and accessible for everyone, regardless
            of background or medical experience. We believe healthcare shouldn’t
            feel like a foreign language. By breaking down complex medical
            concepts into everyday language, we help people feel confident,
            informed, and in control of their well-being.
          </p>
        </div>
      </div>

      {/* Row 2: Mission + Image */}
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Mission Text */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Our Vision
          </h3>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
            Our vision is to see a world where healthcare is not intimidating
            but empowering — a place where people feel safe asking questions,
            confident in understanding their bodies, and equipped to make
            decisions that promote long-term health. We imagine a community
            where knowledge isn’t confined to hospitals or textbooks, but woven
            into daily life — encouraging healthier choices and stronger
            connections between people and their well-being.
          </p>
        </div>
        {/* Image */}
        <div className="flex justify-center">
          <Image
            src="/theblog2.jpg"
            alt="Nurse Jennie"
            className="w-full max-w-md rounded-xl shadow-lg"
            width={500}
            height={500}
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-10 items-center mt-16">
        <div className="flex justify-center">
          <Image
            src="/theblog1.jpg"
            alt="Nurse Jennie"
            className="w-full max-w-md rounded-xl shadow-lg"
            width={500}
            height={500}
          />
        </div>
        <div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            What We Hope to Achieve
          </h3>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
            Through Ask a Nurse, we want to build more than just a blog — we
            want to create a trusted health companion for everyday living. Our
            goal is to provide a safe space where you can find accurate,
            nurse-backed answers to your questions, while also debunking the
            myths and misinformation that often circulate online.
          </p>

          <ul className="list-disc list-inside mt-4 text-gray-700">
            We hope to:
          </ul>
          <li className="mt-2">
            Empower individuals with the knowledge they need to take charge of
            their health and the health of their loved ones.
          </li>
          <li className="mt-2">
            Simplify healthcare by breaking down confusing diagnoses, medical
            jargon, and wellness trends into practical, easy-to-use advice.
          </li>
          <li className="mt-2">
            Encourage prevention and lifestyle balance by sharing small,
            actionable changes that can lead to long-term benefits.
          </li>
          <li className="mt-2">
            Foster trust and connection by being a reliable, approachable voice
            in a space where health information often feels overwhelming.
          </li>

          <p className="text-gray-700 leading-relaxed mt-3">
            Ultimately, our aim is to walk beside you on your health journey —
            offering guidance, reassurance, and the knowledge that you don’t
            have to face your wellness questions alone.
          </p>
        </div>
      </div>
    </section>
  );
}
