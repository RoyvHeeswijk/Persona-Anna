"use client";

import SectionHeader from "./SectionHeader";
import FloorplanScene from "./FloorplanScene";

export default function ContextSection() {
  return (
    <section id="leefwereld" className="hub-section relative z-20">
      <SectionHeader
        number="03"
        title="De Leefwereld"
        subtitle="Wonen, werken en cultuur — het dagelijks kader."
      />

      <div className="mt-12">
        <FloorplanScene />
      </div>
    </section>
  );
}
