"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section
      id="profiel"
      className="hub-hero relative mt-0 pt-8 pb-20 px-6 md:px-16 max-w-[1200px] mx-auto"
    >
      {/* Inline SVG blob mask definition */}
      <svg width="0" height="0" className="absolute">
        <defs>
          <clipPath id="blob-mask" clipPathUnits="objectBoundingBox">
            <path
              d="
              M 0.52,0.02
              C 0.70,0.00 0.93,0.06 0.98,0.25
              C 1.03,0.45 0.92,0.62 0.88,0.76
              C 0.82,0.94 0.72,1.01 0.54,0.99
              C 0.36,0.97 0.10,0.90 0.04,0.72
              C -0.02,0.53 0.06,0.34 0.12,0.20
              C 0.18,0.05 0.34,0.04 0.52,0.02 Z
            "
            />
          </clipPath>
        </defs>
      </svg>

      {/* Two-column asymmetric layout */}
      <div className="grid grid-cols-1 lg:grid-cols-[5fr_7fr] gap-16 items-center">
        {/* LEFT: Portrait with blob masking */}
        <motion.div
          className="relative w-full max-w-[420px] mx-auto lg:mx-0"
          initial={{ opacity: 0, x: -40, rotate: -3 }}
          animate={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{ type: "spring", stiffness: 120, damping: 20 }}
        >
          {/* Decorative clay pad behind image */}
          <div
            className="absolute inset-0 translate-x-4 translate-y-4"
            style={{
              backgroundColor: "#f3e5ab",
              borderRadius: "var(--radius-a)",
              boxShadow: "var(--clay-gold)",
            }}
          />

          {/* Blob-masked portrait */}
          <div
            className="relative w-full aspect-[4/5]"
            style={{
              clipPath: "url(#blob-mask)",
              WebkitClipPath: "url(#blob-mask)",
            }}
          >
            <Image
              src="/anna-hero-v2.png"
              alt="Anna — 34 jaar, logistiek medewerker in Venlo"
              fill
              priority
              className="object-cover object-top"
            />
          </div>

          {/* Sticker quote floating off bottom-right */}
          <motion.div
            className="hub-sticker hub-sticker--gold absolute -bottom-6 -right-4 text-sm font-semibold italic text-gray-800 max-w-[180px] text-center shadow-md"
            initial={{ rotate: -15, scale: 0, opacity: 0 }}
            animate={{ rotate: 5, scale: 1, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 280,
              damping: 12,
              delay: 0.5,
            }}
            whileHover={{ rotate: 0, scale: 1.06 }}
          >
            &quot;Niet klagen, gewoon doorgaan. Ik doe het voor hen.&quot;
          </motion.div>
        </motion.div>

        {/* RIGHT: Text content */}
        <motion.div
          className="flex flex-col items-start"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            type: "spring",
            stiffness: 120,
            damping: 22,
            delay: 0.15,
          }}
        >
          <motion.div
            className="hub-sticker text-xs font-bold uppercase tracking-widest text-[#8a9a85] mb-6"
            initial={{ rotate: -8, scale: 0 }}
            animate={{ rotate: -2, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 250,
              damping: 10,
              delay: 0.3,
            }}
          >
            Persona Profiel — No. 01
          </motion.div>

          <h1 className="text-5xl md:text-6xl font-serif font-bold tracking-tight text-gray-900 leading-[1.12] mb-6">
            Anna,
            <br />
            <span className="text-4xl text-gray-400 italic font-normal">
              34 jaar.
            </span>
          </h1>

          <p className="text-lg text-gray-600 max-w-xl mb-10 leading-relaxed font-sans relative">
            <span className="absolute -left-5 top-0 text-5xl text-[#e4e9e2] font-serif leading-none select-none">
              {"\u201c"}
            </span>
            Oudste kind uit een Pools arbeidersgezin. Altijd de verzorger
            geweest. In Venlo staat ze bekend als de{" "}
            <strong className="font-semibold text-gray-900">
              stille kracht
            </strong>
            : nauwkeurig, bescheiden en conflictvermijdend.
          </p>

          {/* Inline stat chips — clay style */}
          <div className="flex flex-wrap gap-3 mb-10">
            {[
              "Orderpicker",
              "Flexcontract",
              "Loyale Doorzetter",
              "Onzichtbare Pion",
            ].map((tag) => (
              <motion.span
                key={tag}
                whileHover={{ y: -1, backgroundColor: "#ffffff" }}
                transition={{ type: "spring", stiffness: 400, damping: 12 }}
                className="px-3 py-1.5 text-[11px] font-bold tracking-[0.08em] uppercase text-gray-500 cursor-none border border-gray-200"
                style={{
                  backgroundColor: "#F9FAF8",
                  borderRadius: "2px",
                }}
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
