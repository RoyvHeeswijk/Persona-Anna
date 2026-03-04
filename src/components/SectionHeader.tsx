"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface SectionHeaderProps {
  number: string;
  title: string;
  subtitle?: string;
}

export default function SectionHeader({
  number,
  title,
  subtitle,
}: SectionHeaderProps) {
  const ref = useRef<HTMLDivElement>(null);

  // Kinetic Typography logic based on scroll position
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  const headerY = useTransform(scrollYProgress, [0, 1], [60, 0]);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.8], [0, 1]);

  return (
    <div ref={ref} className="hub-section-header relative mb-14 max-w-2xl">
      {/* Playful sticker number */}
      <motion.div
        initial={{ rotate: -10, scale: 0 }}
        whileInView={{ rotate: -3, scale: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 200, damping: 10, delay: 0.1 }}
        className="hub-sticker hub-sticker--gold text-xs font-bold uppercase tracking-widest text-[#8A9A85] mb-4 origin-top-left inline-block absolute -top-8 -left-4"
      >
        No. {number}
      </motion.div>

      {/* Kinetic Title */}
      <motion.h2
        style={{ y: headerY, opacity: headerOpacity }}
        className="hub-section-title text-4xl md:text-5xl font-serif font-bold text-gray-900 leading-tight tracking-tight mt-6"
      >
        {title}
      </motion.h2>

      {/* Drawn line accent instead of CSS border */}
      <motion.svg
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeInOut", delay: 0.3 }}
        width="120"
        height="12"
        viewBox="0 0 120 12"
        fill="none"
        className="mt-4 mb-6"
      >
        <path
          d="M2 10C35.2536 2.37877 72.8228 1.93673 118 8"
          stroke="#C5CEC2"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </motion.svg>

      {subtitle && (
        <motion.p
          style={{ y: headerY, opacity: headerOpacity }}
          className="hub-section-subtitle text-lg text-gray-500 leading-relaxed font-sans"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
