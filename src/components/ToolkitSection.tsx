"use client";

import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";

export default function ToolkitSection() {
  return (
    <section id="toolkit" className="hub-section">
      <SectionHeader number="05" title="Research Toolkit" />

      <motion.div
        className="hub-toolkit-cta"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="hub-toolkit-text">
          De data ligt voor je. Welke patronen zie jij in Anna&apos;s leven?
          Waar liggen de kansen om haar autonomie te vergroten?
        </p>

        <div className="hub-toolkit-buttons">
          <button className="hub-btn hub-btn-primary">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
            </svg>
            Download Kennisbank (40 Bronnen)
          </button>
          <button className="hub-btn hub-btn-secondary">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
            Chat met Anna-AI
          </button>
        </div>
      </motion.div>

      <motion.div
        className="hub-canvas"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <h3 className="hub-canvas-title">Blanco Persona Canvas</h3>
        <p className="hub-canvas-desc">
          Gebruik dit canvas als vertrekpunt voor je eigen persona-analyse.
        </p>

        <div className="hub-canvas-grid">
          <div className="hub-canvas-cell">
            <span className="hub-canvas-cell-label">Demografie</span>
          </div>
          <div className="hub-canvas-cell">
            <span className="hub-canvas-cell-label">Doelen</span>
          </div>
          <div className="hub-canvas-cell">
            <span className="hub-canvas-cell-label">Gedrag</span>
          </div>
          <div className="hub-canvas-cell">
            <span className="hub-canvas-cell-label">Context</span>
          </div>
          <div className="hub-canvas-cell">
            <span className="hub-canvas-cell-label">Behoeften</span>
          </div>
          <div className="hub-canvas-cell">
            <span className="hub-canvas-cell-label">Inzichten</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
