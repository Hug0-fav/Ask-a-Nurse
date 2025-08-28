"use client";

import Image from "next/image";

export default function AboutPage() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      {/* Title */}
      <div className="text-center mb-5">
        <h2 className="font-header text-3xl md:text-4xl font-bold text-gray-800">
          About Ask A Nurse
        </h2>
        <p className="font-body text-lg text-gray-600 mt-1">
          Find out what makes{" "}
          <span className="font-semibold text-green-700">Ask A Nurse</span> tick
        </p>
      </div>

      {/* Introduction */}
      <div className="max-w-4xl mx-auto mb-16 ">
        <p className="font-body text-base sm:text-lg text-gray-700 leading-relaxed">
          At <span className="font-semibold text-green-700">Ask A Nurse</span>,
          we believe that health knowledge should be simple, reliable, and
          accessible to everyone. Our platform bridges the gap between
          professional healthcare advice and everyday living.
        </p>
        <p className="font-body text-base sm:text-lg text-gray-700 leading-relaxed mt-1">
          Here, you’ll find trusted insights on wellness, lifestyle, and
          practical health tips you can apply in your daily routine. Whether
          you’re looking to improve your habits, understand your body better, or
          explore healthier living, we’re here to guide you every step of the
          way.
        </p>
        <p className="font-body text-base sm:text-lg text-gray-700 leading-relaxed mt-1">
          Our mission is to empower individuals with knowledge that inspires
          confidence, balance, and long-term well-being.
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
          <h3 className="font-header text-2xl font-bold text-gray-800 mb-4">
            Our Mission
          </h3>
          <p className="font-body text-base sm:text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
            At <span className="font-semibold text-green-700">Ask A Nurse</span>
            , our mission is simple yet powerful: to make health knowledge
            clear, relatable, and accessible for everyone, regardless of
            background or medical experience. We believe healthcare shouldn’t
            feel like a foreign language. By breaking down complex medical
            concepts into everyday language, we help people feel confident,
            informed, and in control of their well-being.
          </p>
        </div>
      </div>

      {/* Row 2: Vision + Image */}
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Mission Text */}
        <div>
          <h3 className="font-header text-2xl font-bold text-gray-800 mb-4">
            Our Vision
          </h3>
          <p className="font-body text-base sm:text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
            Our vision is to see a world where healthcare is not intimidating
            but empowering a place where people feel safe asking questions,
            confident in understanding their bodies, and equipped to make
            decisions that promote long-term health. We imagine a community
            where knowledge isn’t confined to hospitals or textbooks, but woven
            into daily life encouraging healthier choices and stronger
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

      {/* Row 3: Image + Goals */}
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
          <h3 className="font-header text-2xl font-bold text-gray-800 mb-4">
            What We Hope to Achieve
          </h3>
          <p className="font-body text-base sm:text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
            Through <span className="font-semibold text-green-700">Ask a Nurse</span>, we want to build more than just a blog—we want
            to create a trusted health companion for everyday living. Our goal
            is to provide a safe space where you can find accurate, nurse-backed
            answers to your questions, while also debunking myths and
            misinformation that often circulate online.
          </p>

          <ul className="font-body list-disc list-inside mt-4 text-gray-700">
            <li className="ml-5 mt-2">
              Empower individuals with the knowledge they need to take charge of
              their health and the health of their loved ones.
            </li>
            <li className="ml-5 mt-2">
              Simplify healthcare by breaking down confusing diagnoses, medical
              jargon, and wellness trends into practical, easy-to-use advice.
            </li>
            <li className="ml-5 mt-2">
              Encourage prevention and lifestyle balance by sharing small,
              actionable changes that can lead to long-term benefits.
            </li>
            <li className="ml-5 mt-2">
              Foster trust and connection by being a reliable, approachable
              voice in a space where health information often feels
              overwhelming.
            </li>
          </ul>

          <p className="font-body text-gray-700 leading-relaxed mt-3">
            Ultimately, our aim is to walk beside you on your health journey,
            offering guidance, reassurance, and the knowledge that you don’t
            have to face your wellness questions alone.
          </p>
        </div>
      </div>
    </section>
  );
}
