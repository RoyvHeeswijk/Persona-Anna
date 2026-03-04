"use client";

import ScannerInterface from "./ScannerInterface";

export default function WorkSection() {
  return (
    <div
      style={{ backgroundColor: "#1f2937" }}
      className="pt-24 pb-32 text-white relative"
    >
      <section id="het-werk" className="hub-section">
        {/* We reuse SectionHeader but pass a custom prop for dark mode or override styling */}
        <div className="hub-section-header relative mb-14 max-w-2xl">
          <div className="hub-sticker hub-sticker--gold text-xs font-bold uppercase tracking-widest text-[#8A9A85] mb-4 origin-top-left inline-block absolute -top-8 -left-4 shadow-sm">
            No. 04
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white leading-tight tracking-tight mt-6">
            Het Werk
          </h2>
          <svg
            width="120"
            height="12"
            viewBox="0 0 120 12"
            fill="none"
            className="mt-4 mb-6"
          >
            <path
              d="M2 10C35.2536 2.37877 72.8228 1.93673 118 8"
              stroke="#4b5563"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>
          <p className="text-lg text-gray-400 leading-relaxed font-sans">
            Het distributiecentrum draait 24/7. Op massieve, kille schermen
            wordt ieders &apos;pick-rate&apos; live bijgehouden. Eén seconde
            stilstaan betekent direct dalen op het Public Leaderboard.
          </p>
        </div>

        {/* Leaderboard Dashboard component */}
        <ScannerInterface />
      </section>
    </div>
  );
}
