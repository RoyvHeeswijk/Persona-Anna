"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section id="profiel" className="hub-hero">
      <motion.div
        className="hub-hero-image-wrap"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Image
          src="/anna-hero.png"
          alt="Anna — 34 jaar, logistiek medewerker in Venlo"
          width={600}
          height={800}
          priority
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </motion.div>

      <motion.div
        className="hub-hero-content"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
      >
        <div className="hub-hero-label">Persona Profiel</div>

        <h1 className="hub-hero-name">
          Anna, 34 jaar.
          <br />
          Een verhaal van veerkracht in Venlo.
        </h1>

        <blockquote className="hub-hero-quote">
          &ldquo;Ik ben een doorzetter, hè? Ik doe het voor een goed
          doel.&rdquo;
        </blockquote>

        <p className="hub-hero-intro">
          Oudste kind uit een Pools arbeidersgezin. Altijd de verzorger geweest.
          In Venlo staat ze bekend als de &lsquo;stille kracht&rsquo;:
          nauwkeurig, bescheiden en conflictvermijdend.
        </p>

        <div className="hub-scroll-indicator">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
          Scroll om Anna te ontdekken
        </div>
      </motion.div>
    </section>
  );
}
