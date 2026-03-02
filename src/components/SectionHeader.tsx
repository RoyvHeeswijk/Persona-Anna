"use client";

import { motion } from "framer-motion";

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
  return (
    <motion.div
      className="hub-section-header"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5 }}
    >
      <div className="hub-section-number">Sectie {number}</div>
      <h2 className="hub-section-title">{title}</h2>
      {subtitle && <p className="hub-section-subtitle">{subtitle}</p>}
    </motion.div>
  );
}
