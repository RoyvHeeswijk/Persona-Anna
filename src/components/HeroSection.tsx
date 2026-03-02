"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section
      id="profiel"
      className="hub-hero relative mt-16 md:mt-24 mb-16 px-4 md:px-0"
    >
      {/* Asymmetric layout with overlap */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row-reverse items-center justify-between gap-12 lg:gap-24 relative z-20">
        {/* Left side Image with organic blob masking */}
        <motion.div
          className="hub-hero-image-wrap relative w-full lg:w-1/2 max-w-lg mx-auto lg:mx-0 flex justify-center lg:justify-end"
          initial={{ opacity: 0, rotate: -4, scale: 0.8 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          transition={{ type: "spring", stiffness: 350, damping: 18 }}
        >
          <div
            className="absolute inset-0 bg-[#F3E5AB] opacity-30 z-[-1] translate-x-4 -translate-y-4"
            style={{ borderRadius: "50% 30% 60% 40% / 40% 50% 30% 60%" }}
          />

          <div
            className="relative w-full max-w-sm aspect-[3/4] overflow-hidden shadow-[var(--shadow-clay)]"
            style={{
              borderRadius: "40px 14px 44px 18px / 30px 40px 30px 20px",
            }}
          >
            <Image
              src="/anna-hero.png"
              alt="Anna — 34 jaar, logistiek medewerker in Venlo"
              fill
              priority
              className="object-cover w-full h-full"
            />
          </div>

          {/* Playful sticker attached to the image */}
          <motion.div
            className="hub-sticker hub-sticker--gold absolute bottom-4 -left-4 md:-left-12 text-sm font-semibold italic text-gray-800"
            initial={{ rotate: -15, scale: 0 }}
            animate={{ rotate: 6, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 12,
              delay: 0.4,
            }}
          >
            &quot;Ik ben een doorzetter, hè?&quot;
            {/* Handdrawn doodle arrow pointing to image */}
            <svg
              className="absolute -left-12 -top-16 text-[#F3E5AB] hidden md:block"
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
          className="hub-hero-content relative w-full lg:w-1/2 flex flex-col items-start pt-8 lg:pt-0"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 20,
            delay: 0.2,
          }}
        >
          <div className="hub-sticker text-xs font-bold uppercase tracking-widest text-[#8A9A85] mb-6 !rotate-1">
            Persona Profiel
          </div>

          <h1 className="hub-hero-name text-5xl md:text-6xl lg:text-7xl font-serif tracking-tight text-gray-900 leading-[1.1] mb-6">
            Anna, 34 jaar.
            <br />
            <span className="text-gray-400 italic font-normal text-3xl md:text-4xl lg:text-5xl block mt-2">
              Een verhaal van veerkracht.
            </span>
          </h1>

          <p className="hub-hero-intro text-lg lg:text-xl text-gray-600 leading-relaxed max-w-xl mb-12 relative">
            <span className="absolute -left-8 -top-2 text-5xl text-[#E4E9E2]">
              “
            </span>
            Oudste kind uit een Pools arbeidersgezin. Altijd de verzorger
            geweest. In Venlo staat ze bekend als de{" "}
            <strong className="font-semibold text-gray-900">
              &lsquo;stille kracht&rsquo;
            </strong>
            : nauwkeurig, bescheiden en conflictvermijdend.
          </p>

          <div className="hub-scroll-indicator flex items-center gap-3 text-sm font-medium text-gray-400 mt-auto">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-8 h-12 rounded-full border-2 border-gray-200 flex justify-center pt-2"
            >
              <div className="w-1.5 h-2 bg-gray-300 rounded-full" />
            </motion.div>
            Ontdek haar wereld
          </div>
        </motion.div>
      </div>
    </section>
  );
}
