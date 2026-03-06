"use client";

import { useState, useCallback, useEffect } from "react";
import { motion } from "framer-motion";
import PageContent from "./PageContent";
import SpiralBinding from "./SpiralBinding";

const FLIP_DURATION = 0.8;
const FLIP_EASE: [number, number, number, number] = [
  0.645, 0.045, 0.355, 0.995,
];

export default function Book() {
  const [currentSpreadIndex, setCurrentSpreadIndex] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);
  const [flipDir, setFlipDir] = useState<"fwd" | "bwd">("fwd");

  const totalSpreads = 2;
  const currentSpread = {
    left: currentSpreadIndex * 2,
    right: currentSpreadIndex * 2 + 1,
  };
  const nextSpread =
    currentSpreadIndex < totalSpreads - 1
      ? {
          left: (currentSpreadIndex + 1) * 2,
          right: (currentSpreadIndex + 1) * 2 + 1,
        }
      : null;
  const prevSpread =
    currentSpreadIndex > 0
      ? {
          left: (currentSpreadIndex - 1) * 2,
          right: (currentSpreadIndex - 1) * 2 + 1,
        }
      : null;

  const canNext = !!nextSpread;
  const canPrev = !!prevSpread;

  const goNext = useCallback(() => {
    if (isFlipping || !canNext) return;
    setFlipDir("fwd");
    setIsFlipping(true);
  }, [isFlipping, canNext]);

  const goPrev = useCallback(() => {
    if (isFlipping || !canPrev) return;
    setFlipDir("bwd");
    setIsFlipping(true);
  }, [isFlipping, canPrev]);

  const onFlipDone = useCallback(() => {
    if (flipDir === "fwd") setCurrentSpreadIndex((s) => s + 1);
    else setCurrentSpreadIndex((s) => s - 1);
    setIsFlipping(false);
  }, [flipDir]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [goNext, goPrev]);

  return (
    <div className="relative flex flex-col items-center gap-5 py-6 px-4 w-full">
      {/* Book */}
      <div className="book-outer">
        <div className="book-wrapper">
          <div className="book-cover">
            <div className="book-pages-container">
              {/* LEFT PAGE */}
              <div className="book-page page-left">
                {isFlipping && flipDir === "bwd" && prevSpread ? (
                  <PageContent pageIndex={prevSpread.left} />
                ) : (
                  <PageContent pageIndex={currentSpread.left} />
                )}
              </div>

              {/* SPIRAL */}
              <SpiralBinding />

              {/* RIGHT PAGE */}
              <div className="book-page page-right relative">
                {isFlipping && flipDir === "fwd" && nextSpread ? (
                  <PageContent pageIndex={nextSpread.right} />
                ) : (
                  <PageContent pageIndex={currentSpread.right} />
                )}
              </div>

              {/* FORWARD FLIP PAGE */}
              {isFlipping && flipDir === "fwd" && nextSpread && (
                <motion.div
                  className="flip-page"
                  style={{
                    left: "calc(50% + 14px)",
                    width: "calc(50% - 14px)",
                    height: "100%",
                    transformOrigin: "left center",
                  }}
                  initial={{ rotateY: 0 }}
                  animate={{ rotateY: -180 }}
                  transition={{ duration: FLIP_DURATION, ease: FLIP_EASE }}
                  onAnimationComplete={onFlipDone}
                >
                  {/* Front: current right page */}
                  <div className="flip-face book-page page-right">
                    <PageContent pageIndex={currentSpread.right} />
                  </div>
                  {/* Back: next left page */}
                  <div className="flip-face flip-back book-page page-left">
                    <PageContent pageIndex={nextSpread.left} />
                  </div>
                </motion.div>
              )}

              {/* BACKWARD FLIP PAGE */}
              {isFlipping && flipDir === "bwd" && prevSpread && (
                <motion.div
                  className="flip-page"
                  style={{
                    left: 0,
                    width: "calc(50% - 14px)",
                    height: "100%",
                    transformOrigin: "right center",
                  }}
                  initial={{ rotateY: 0 }}
                  animate={{ rotateY: 180 }}
                  transition={{ duration: FLIP_DURATION, ease: FLIP_EASE }}
                  onAnimationComplete={onFlipDone}
                >
                  {/* Front: current left page */}
                  <div className="flip-face book-page page-left">
                    <PageContent pageIndex={currentSpread.left} />
                  </div>
                  {/* Back: previous right page */}
                  <div className="flip-face flip-back book-page page-right">
                    <PageContent pageIndex={prevSpread.right} />
                  </div>
                </motion.div>
              )}

              {/* Click zones */}
              {!isFlipping && canPrev && (
                <div
                  className="page-click-zone page-click-zone-left"
                  onClick={goPrev}
                  title="Previous page"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M15 18L9 12L15 6"
                      stroke="rgba(0,0,0,0.3)"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              )}
              {!isFlipping && canNext && (
                <div
                  className="page-click-zone page-click-zone-right"
                  onClick={goNext}
                  title="Next page"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M9 18L15 12L9 6"
                      stroke="rgba(0,0,0,0.3)"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex items-center gap-3 flex-wrap justify-center">
        <button
          className="nav-btn"
          onClick={goPrev}
          disabled={!canPrev || isFlipping}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path
              d="M15 18L9 12L15 6"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Previous
        </button>

        <span className="page-counter">
          {currentSpreadIndex + 1} / {totalSpreads}
        </span>

        <button
          className="nav-btn"
          onClick={goNext}
          disabled={!canNext || isFlipping}
        >
          Next
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path
              d="M9 18L15 12L9 6"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </nav>
    </div>
  );
}
