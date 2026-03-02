"use client";

import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";

export default function ToolkitSection() {
  return (
    <section id="toolkit" className="hub-section relative z-20 pb-32">
      <SectionHeader number="05" title="Research Toolkit" />

      <motion.div
        className="hub-toolkit-cta relative"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
      >
        <p className="font-serif text-2xl text-gray-700 leading-snug mb-10">
          De data ligt voor je. Welke patronen zie jij in Anna&apos;s leven?
          Waar liggen de kansen om haar autonomie te vergroten?
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <motion.button
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-3 px-8 py-4 bg-gray-900 text-white rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-shadow"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
            </svg>
            Download Kennisbank
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-3 px-8 py-4 bg-[#E4E9E2] text-gray-900 border border-[#C5CEC2] rounded-2xl font-semibold shadow-sm hover:shadow-md transition-shadow"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
            Chat met Anna-AI
          </motion.button>
        </div>
      </motion.div>

      {/* Playful Canvas */}
      <motion.div
        className="mt-20 bg-white border-2 border-dashed border-[#C5CEC2] rounded-[32px] p-12 text-center relative overflow-hidden"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 80, damping: 20, delay: 0.2 }}
      >
        {/* Background grid pattern for canvas */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, black 1px, transparent 0)",
            backgroundSize: "24px 24px",
          }}
        />

        <div className="relative z-10">
          <h3 className="font-serif text-2xl font-bold text-gray-900 mb-2">
            Blanco Persona Canvas
          </h3>
          <p className="text-gray-500 font-sans mb-10">
            Teken, verbind en ontdek nieuwe patronen.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              "Demografie",
              "Doelen",
              "Gedrag",
              "Context",
              "Behoeften",
              "Inzichten",
            ].map((label, idx) => (
              <motion.div
                key={label}
                whileHover={{ scale: 1.02 }}
                className="bg-[#F9FAFB] border border-dashed border-gray-300 rounded-2xl p-6 min-h-[100px] flex items-center justify-center cursor-none"
              >
                <span className="font-mono text-sm uppercase tracking-wider text-gray-400 font-medium">
                  {label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
