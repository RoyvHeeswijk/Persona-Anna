"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section id="profiel" className="hub-hero relative mt-16 lg:mt-24">
      {/* Asymmetric layout with overlap */}

      {/* Left side Image with soft wrapper */}
      <motion.div
        className="hub-hero-image-wrap relative z-10 w-full max-w-lg mx-auto lg:mx-0 lg:ml-auto"
        initial={{ opacity: 0, rotate: -2, scale: 0.95 }}
        animate={{ opacity: 1, rotate: 0, scale: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
      >
        <div className="absolute inset-0 border-4 border-[#F3E5AB] rounded-3xl translate-x-4 -translate-y-4 mix-blend-multiply opacity-50 z-[-1]" />

        <Image
          src="/anna-hero.png"
          alt="Anna — 34 jaar, logistiek medewerker in Venlo"
          width={600}
          height={800}
          priority
          className="rounded-[24px] shadow-[var(--shadow-neumorphic)] block object-cover w-full h-full"
        />

        {/* Playful sticker attached to the image */}
        <motion.div
          className="hub-sticker hub-sticker--gold absolute -bottom-6 -right-6 text-sm font-semibold italic text-gray-800"
          initial={{ rotate: -15, scale: 0 }}
          animate={{ rotate: 4, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 12,
            delay: 0.4,
          }}
        >
          &quot;Ik ben een doorzetter, hè?&quot;
          {/* Handdrawn doodle arrow pointing to image */}
          <svg
            className="absolute -left-12 -top-16 text-[#F3E5AB]"
            width="60"
            height="80"
            viewBox="0 0 60 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M 50,70 C 40,50 10,40 20,10 M 20,10 L 5,20 M 20,10 L 35,15"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.div>
      </motion.div>

      {/* Right side content */}
      <motion.div
        className="hub-hero-content relative z-20 flex flex-col items-start pt-12 lg:pt-0"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 120, damping: 20, delay: 0.2 }}
      >
        <div className="hub-sticker text-xs font-bold uppercase tracking-widest text-[#8A9A85] mb-6">
          Persona Profiel
        </div>

        <h1 className="hub-hero-name text-5xl md:text-6xl font-serif tracking-tight text-gray-900 leading-[1.15] mb-6">
          Anna, 34 jaar.
          <br />
          <span className="text-gray-400 italic font-normal text-4xl block mt-2">
            Een verhaal van veerkracht in Venlo.
          </span>
        </h1>

        <p className="hub-hero-intro text-lg text-gray-600 leading-relaxed max-w-xl mb-12 relative">
          <span className="absolute -left-6 top-2 text-4xl text-[#E4E9E2]">
            “
          </span>
          Oudste kind uit een Pools arbeidersgezin. Altijd de verzorger geweest.
          In Venlo staat ze bekend als de{" "}
          <strong className="font-semibold text-gray-900">
            &lsquo;stille kracht&rsquo;
          </strong>
          : nauwkeurig, bescheiden en conflictvermijdend.
        </p>

        <div className="hub-scroll-indicator flex items-center gap-3 text-sm font-medium text-gray-400">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-8 h-12 rounded-full border-2 border-gray-200 flex justify-center pt-2"
          >
            <div className="w-1 h-2 bg-gray-300 rounded-full" />
          </motion.div>
          Scroll om Anna te ontdekken
        </div>
      </motion.div>
    </section>
  );
}
