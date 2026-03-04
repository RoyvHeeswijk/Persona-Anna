"use client";

import SectionHeader from "./SectionHeader";
import WindowsillScene from "./WindowsillScene";

export default function CharacterSection() {
  return (
    <div style={{ backgroundColor: "#f9fafb" }} className="relative">
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
