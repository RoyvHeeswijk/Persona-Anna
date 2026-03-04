"use client";

import SectionHeader from "./SectionHeader";
import ParticleFlow from "./ParticleFlow";

export default function DrijfverenSection() {
  return (
    <section id="drijfveren" className="hub-section relative z-10">
      <SectionHeader
        number="05"
        title="Drijfveren"
        subtitle="Verantwoordelijkheid en familie in Polen."
      />
      <ParticleFlow />
    </section>
  );
}
