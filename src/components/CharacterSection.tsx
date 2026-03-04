"use client";

import SectionHeader from "./SectionHeader";
import WindowsillScene from "./WindowsillScene";

export default function CharacterSection() {
  return (
    <div style={{ backgroundColor: "#f9fafb" }} className="relative">
      {/* Doodle blob background */}
      <svg
        className="absolute right-0 top-0 w-64 h-64 opacity-20 pointer-events-none"
        viewBox="0 0 200 200"
        fill="none"
      >
        <path
          d="M 40,40 C 80,-20 180,20 160,80 C 140,140 180,180 120,180 C 60,180 0,160 20,100 C 40,40 20,80 40,40 Z"
          stroke="#8a9a85"
          strokeWidth="2"
          strokeDasharray="6 6"
          fill="none"
        />
      </svg>

      <section id="binnenwereld" className="hub-section relative z-10">
        <SectionHeader
          number="02"
          title="De Binnenwereld"
          subtitle="Karakter, dromen en de kleine dingen die Anna's dag kleur geven."
        />

        <div className="mt-12">
          <WindowsillScene />
        </div>
      </section>
    </div>
  );
}
