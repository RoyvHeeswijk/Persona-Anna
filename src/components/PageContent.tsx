"use client";

import { useRef, useState, useCallback } from "react";
import {
  useBookStore,
  type PageData,
  type FrameSlot,
} from "@/store/useBookStore";
import {
  CameraSticker,
  SuitcaseSticker,
  VanSticker,
  HamburgerSticker,
  MusicNoteSticker,
  IceCreamSticker,
  HeartSticker,
  CoffeeTagSticker,
  TicketSticker,
  WashiTape,
  WashiSmall,
  StarsDoodle,
  SwirlDoodle,
  ArrowDoodle,
  HeartDoodle,
  CircleDoodle,
} from "./Decorations";

/* ===== POLAROID FRAME ===== */

function PolaroidFrame({
  frame,
  spreadIndex,
  side,
  rotation = 0,
  className = "",
  readOnly,
}: {
  frame: FrameSlot;
  spreadIndex: number;
  side: "left" | "right";
  rotation?: number;
  className?: string;
  readOnly?: boolean;
}) {
  const { setFrameImage, removeFrameImage } = useBookStore();
  const [dragOver, setDragOver] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const readFile = useCallback(
    (file: File) => {
      if (!file.type.startsWith("image/")) return;
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target?.result)
          setFrameImage(spreadIndex, side, frame.id, e.target.result as string);
      };
      reader.readAsDataURL(file);
    },
    [spreadIndex, side, frame.id, setFrameImage],
  );

  const onDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      e.stopPropagation();
      setDragOver(false);
      if (readOnly) return;
      const file = e.dataTransfer.files[0];
      if (file) readFile(file);
    },
    [readOnly, readFile],
  );

  const onDragOver = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      e.stopPropagation();
      if (!readOnly) setDragOver(true);
    },
    [readOnly],
  );

  return (
    <div
      className={`polaroid ${className}`}
      style={{ transform: `rotate(${rotation}deg)` }}
      onClick={() =>
        !readOnly && !frame.imageDataUrl && inputRef.current?.click()
      }
    >
      <div
        className={`polaroid-inner${frame.imageDataUrl ? " has-image" : ""}${dragOver ? " drag-over" : ""}`}
        onDragOver={onDragOver}
        onDragLeave={(e) => {
          e.preventDefault();
          setDragOver(false);
        }}
        onDrop={onDrop}
      >
        {frame.imageDataUrl ? (
          <>
            <img src={frame.imageDataUrl} alt="" draggable={false} />
            {!readOnly && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  removeFrameImage(spreadIndex, side, frame.id);
                }}
                className="absolute top-1 right-1 w-5 h-5 rounded-full bg-red-400/80 text-white text-xs flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity z-10"
              >
                ×
              </button>
            )}
          </>
        ) : (
          <div className="drop-indicator text-center p-1">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              className="mx-auto mb-0.5"
            >
              <path
                d="M12 5v14M5 12h14"
                stroke="#ddd"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            <span>Drop photo</span>
          </div>
        )}
      </div>
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={(e) => {
          if (e.target.files?.[0]) readFile(e.target.files[0]);
        }}
      />
    </div>
  );
}

/* ===== JOURNAL BLOCK ===== */

function JournalBlock({
  text,
  spreadIndex,
  side,
  placeholder = "Write your thoughts here...",
  className = "",
  readOnly,
}: {
  text: string;
  spreadIndex: number;
  side: "left" | "right";
  placeholder?: string;
  className?: string;
  readOnly?: boolean;
}) {
  const { updateJournalText } = useBookStore();
  return (
    <textarea
      className={`journal-block ${className}`}
      value={text}
      onChange={(e) =>
        !readOnly && updateJournalText(spreadIndex, side, e.target.value)
      }
      placeholder={placeholder}
      readOnly={readOnly}
    />
  );
}

/* ===== TITLE INPUT ===== */

function TitleInput({
  title,
  spreadIndex,
  side,
  readOnly,
}: {
  title: string;
  spreadIndex: number;
  side: "left" | "right";
  readOnly?: boolean;
}) {
  const { updateTitle } = useBookStore();
  return (
    <input
      className="title-input"
      value={title}
      onChange={(e) =>
        !readOnly && updateTitle(spreadIndex, side, e.target.value)
      }
      placeholder="Give this page a title..."
      readOnly={readOnly}
    />
  );
}

/* ===== LEFT PAGE VARIANTS — organic scrapbook style ===== */

function LeftV0({
  page,
  si,
  ro,
}: {
  page: PageData;
  si: number;
  ro?: boolean;
}) {
  return (
    <div className="page-inner">
      <TitleInput
        title={page.title}
        spreadIndex={si}
        side="left"
        readOnly={ro}
      />

      <div className="flex-1 relative">
        {/* Large photo top-left, tilted */}
        <div
          className="absolute"
          style={{ top: "0%", left: "0%", width: "55%" }}
        >
          <PolaroidFrame
            frame={page.frames[0]}
            spreadIndex={si}
            side="left"
            rotation={-4}
            readOnly={ro}
          />
          <WashiSmall
            variant={0}
            style={{
              position: "absolute",
              top: "-6px",
              left: "20%",
              transform: "rotate(15deg)",
            }}
          />
        </div>

        {/* Medium photo top-right, overlapping */}
        <div
          className="absolute"
          style={{ top: "5%", right: "0%", width: "48%" }}
        >
          <PolaroidFrame
            frame={page.frames[1]}
            spreadIndex={si}
            side="left"
            rotation={3}
            readOnly={ro}
          />
          <WashiSmall
            variant={1}
            style={{
              position: "absolute",
              top: "-5px",
              right: "15%",
              transform: "rotate(-8deg)",
            }}
          />
        </div>

        {/* Bottom photo, casual angle */}
        <div
          className="absolute"
          style={{ bottom: "0%", left: "15%", width: "52%" }}
        >
          <PolaroidFrame
            frame={page.frames[2]}
            spreadIndex={si}
            side="left"
            rotation={-2}
            readOnly={ro}
          />
          <WashiSmall
            variant={2}
            style={{
              position: "absolute",
              bottom: "10px",
              right: "-8px",
              transform: "rotate(25deg)",
            }}
          />
        </div>
      </div>

      {/* Stickers scattered */}
      <CameraSticker style={{ bottom: "5%", right: "4%" }} size={34} />
      <TicketSticker style={{ bottom: "30%", right: "2%" }} size={38} />
      <HeartDoodle style={{ top: "2%", right: "35%" }} size={18} />
    </div>
  );
}

function LeftV1({
  page,
  si,
  ro,
}: {
  page: PageData;
  si: number;
  ro?: boolean;
}) {
  return (
    <div className="page-inner">
      <TitleInput
        title={page.title}
        spreadIndex={si}
        side="left"
        readOnly={ro}
      />

      <div className="flex-1 relative">
        {/* Photo cascade: overlapping at angles */}
        <div
          className="absolute"
          style={{ top: "0%", left: "2%", width: "50%" }}
        >
          <PolaroidFrame
            frame={page.frames[0]}
            spreadIndex={si}
            side="left"
            rotation={-6}
            readOnly={ro}
          />
          <WashiSmall
            variant={1}
            style={{
              position: "absolute",
              top: "-5px",
              left: "30%",
              transform: "rotate(12deg)",
            }}
          />
        </div>

        <div
          className="absolute"
          style={{ top: "8%", right: "2%", width: "46%" }}
        >
          <PolaroidFrame
            frame={page.frames[1]}
            spreadIndex={si}
            side="left"
            rotation={4}
            readOnly={ro}
          />
          <WashiSmall
            variant={0}
            style={{
              position: "absolute",
              top: "-4px",
              right: "20%",
              transform: "rotate(-10deg)",
            }}
          />
        </div>

        <div
          className="absolute"
          style={{ bottom: "10%", left: "8%", width: "44%" }}
        >
          <PolaroidFrame
            frame={page.frames[2]}
            spreadIndex={si}
            side="left"
            rotation={2}
            readOnly={ro}
          />
        </div>

        <div
          className="absolute"
          style={{ bottom: "2%", right: "5%", width: "42%" }}
        >
          <PolaroidFrame
            frame={page.frames[3]}
            spreadIndex={si}
            side="left"
            rotation={-3}
            readOnly={ro}
          />
          <WashiSmall
            variant={3}
            style={{
              position: "absolute",
              bottom: "12px",
              left: "-5px",
              transform: "rotate(20deg)",
            }}
          />
        </div>
      </div>

      <HamburgerSticker style={{ bottom: "3%", left: "3%" }} size={30} />
      <MusicNoteSticker style={{ top: "15%", right: "2%" }} size={26} />
      <CircleDoodle style={{ bottom: "25%", left: "48%" }} size={16} />
    </div>
  );
}

function LeftV2({
  page,
  si,
  ro,
}: {
  page: PageData;
  si: number;
  ro?: boolean;
}) {
  return (
    <div className="page-inner">
      <TitleInput
        title={page.title}
        spreadIndex={si}
        side="left"
        readOnly={ro}
      />

      <div className="flex-1 relative">
        {/* Two larger photos, stacked organically */}
        <div
          className="absolute"
          style={{ top: "0%", left: "5%", width: "60%" }}
        >
          <PolaroidFrame
            frame={page.frames[0]}
            spreadIndex={si}
            side="left"
            rotation={3}
            readOnly={ro}
          />
          <WashiSmall
            variant={2}
            style={{
              position: "absolute",
              top: "-6px",
              left: "25%",
              transform: "rotate(-5deg)",
            }}
          />
          <WashiSmall
            variant={0}
            style={{
              position: "absolute",
              bottom: "15px",
              right: "-6px",
              transform: "rotate(30deg)",
            }}
          />
        </div>

        <div
          className="absolute"
          style={{ bottom: "0%", right: "3%", width: "55%" }}
        >
          <PolaroidFrame
            frame={page.frames[1]}
            spreadIndex={si}
            side="left"
            rotation={-3}
            readOnly={ro}
          />
          <WashiSmall
            variant={1}
            style={{
              position: "absolute",
              top: "-5px",
              right: "20%",
              transform: "rotate(8deg)",
            }}
          />
        </div>
      </div>

      {/* Decorations */}
      <WashiTape
        variant={2}
        style={{
          top: "50%",
          left: "0%",
          width: "40%",
          transform: "rotate(-3deg)",
        }}
      />
      <SuitcaseSticker style={{ bottom: "35%", right: "5%" }} size={32} />
      <StarsDoodle style={{ top: "5%", right: "3%" }} size={50} />
    </div>
  );
}

/* ===== RIGHT PAGE VARIANTS ===== */

function RightV0({
  page,
  si,
  ro,
}: {
  page: PageData;
  si: number;
  ro?: boolean;
}) {
  return (
    <div className="page-inner">
      <div className="flex-1 relative">
        {/* Large photo top, tilted */}
        <div
          className="absolute"
          style={{ top: "0%", left: "5%", width: "58%" }}
        >
          <PolaroidFrame
            frame={page.frames[0]}
            spreadIndex={si}
            side="right"
            rotation={2}
            readOnly={ro}
          />
          <WashiSmall
            variant={0}
            style={{
              position: "absolute",
              top: "-5px",
              left: "15%",
              transform: "rotate(12deg)",
            }}
          />
          <WashiSmall
            variant={2}
            style={{
              position: "absolute",
              bottom: "14px",
              right: "-4px",
              transform: "rotate(-20deg)",
            }}
          />
        </div>

        {/* Small photo bottom-right */}
        <div
          className="absolute"
          style={{ bottom: "0%", right: "2%", width: "44%" }}
        >
          <PolaroidFrame
            frame={page.frames[1]}
            spreadIndex={si}
            side="right"
            rotation={-4}
            readOnly={ro}
          />
          <WashiSmall
            variant={1}
            style={{
              position: "absolute",
              top: "-5px",
              right: "25%",
              transform: "rotate(5deg)",
            }}
          />
        </div>

        {/* Journal area */}
        <div
          className="absolute"
          style={{ top: "5%", right: "0%", width: "38%", height: "45%" }}
        >
          <JournalBlock
            text={page.journalText}
            spreadIndex={si}
            side="right"
            readOnly={ro}
            placeholder="Write here..."
          />
        </div>
      </div>

      <VanSticker style={{ bottom: "3%", left: "3%" }} size={38} />
      <HeartSticker style={{ top: "35%", right: "40%" }} size={22} />
      <SwirlDoodle style={{ bottom: "5%", right: "3%" }} size={55} />
    </div>
  );
}

function RightV1({
  page,
  si,
  ro,
}: {
  page: PageData;
  si: number;
  ro?: boolean;
}) {
  return (
    <div className="page-inner">
      <div className="flex-1 relative">
        {/* Big photo centered */}
        <div
          className="absolute"
          style={{ top: "0%", left: "10%", width: "65%" }}
        >
          <PolaroidFrame
            frame={page.frames[0]}
            spreadIndex={si}
            side="right"
            rotation={-2}
            readOnly={ro}
          />
          <WashiSmall
            variant={0}
            style={{
              position: "absolute",
              top: "-6px",
              left: "20%",
              transform: "rotate(10deg)",
            }}
          />
          <WashiSmall
            variant={3}
            style={{
              position: "absolute",
              top: "-5px",
              right: "15%",
              transform: "rotate(-12deg)",
            }}
          />
        </div>

        {/* Journal below */}
        <div
          className="absolute"
          style={{ bottom: "0%", left: "5%", right: "5%", height: "38%" }}
        >
          <JournalBlock
            text={page.journalText}
            spreadIndex={si}
            side="right"
            readOnly={ro}
            placeholder="Journal your memories..."
          />
        </div>
      </div>

      <WashiTape
        variant={1}
        style={{
          top: "56%",
          left: "5%",
          width: "90%",
          transform: "rotate(1deg)",
        }}
      />
      <CoffeeTagSticker style={{ bottom: "5%", right: "5%" }} size={36} />
      <HeartDoodle style={{ top: "3%", right: "5%" }} size={20} />
      <CircleDoodle style={{ bottom: "42%", left: "78%" }} size={14} />
    </div>
  );
}

function RightV2({
  page,
  si,
  ro,
}: {
  page: PageData;
  si: number;
  ro?: boolean;
}) {
  return (
    <div className="page-inner">
      <div className="flex-1 relative">
        {/* Three photos scattered across top */}
        <div
          className="absolute"
          style={{ top: "0%", left: "0%", width: "35%" }}
        >
          <PolaroidFrame
            frame={page.frames[0]}
            spreadIndex={si}
            side="right"
            rotation={-5}
            readOnly={ro}
          />
          <WashiSmall
            variant={2}
            style={{
              position: "absolute",
              top: "-5px",
              left: "20%",
              transform: "rotate(15deg)",
            }}
          />
        </div>

        <div
          className="absolute"
          style={{ top: "3%", left: "33%", width: "34%" }}
        >
          <PolaroidFrame
            frame={page.frames[1]}
            spreadIndex={si}
            side="right"
            rotation={3}
            readOnly={ro}
          />
        </div>

        <div
          className="absolute"
          style={{ top: "0%", right: "0%", width: "33%" }}
        >
          <PolaroidFrame
            frame={page.frames[2]}
            spreadIndex={si}
            side="right"
            rotation={-2}
            readOnly={ro}
          />
          <WashiSmall
            variant={0}
            style={{
              position: "absolute",
              top: "-4px",
              right: "20%",
              transform: "rotate(-8deg)",
            }}
          />
        </div>

        {/* Journal at bottom */}
        <div
          className="absolute"
          style={{ bottom: "0%", left: "5%", right: "5%", height: "40%" }}
        >
          <JournalBlock
            text={page.journalText}
            spreadIndex={si}
            side="right"
            readOnly={ro}
            placeholder="Tell your story..."
          />
        </div>
      </div>

      <IceCreamSticker style={{ bottom: "5%", right: "3%" }} size={32} />
      <ArrowDoodle style={{ bottom: "42%", left: "5%" }} size={50} />
      <HeartSticker style={{ top: "2%", left: "32%" }} size={18} />
    </div>
  );
}

const LEFT_VARIANTS = [LeftV0, LeftV1, LeftV2];
const RIGHT_VARIANTS = [RightV0, RightV1, RightV2];

/* ===== MAIN EXPORT ===== */

interface PageContentProps {
  page: PageData;
  spreadIndex: number;
  side: "left" | "right";
  readOnly?: boolean;
}

export default function PageContent({
  page,
  spreadIndex,
  side,
  readOnly,
}: PageContentProps) {
  const variants = side === "left" ? LEFT_VARIANTS : RIGHT_VARIANTS;
  const Variant = variants[page.variant % variants.length];
  return <Variant page={page} si={spreadIndex} ro={readOnly} />;
}
