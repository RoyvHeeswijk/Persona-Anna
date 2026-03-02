import { create } from 'zustand';

export interface FrameSlot {
  id: string;
  imageDataUrl: string | null;
}

export interface PageData {
  id: string;
  side: 'left' | 'right';
  variant: number;
  title: string;
  journalText: string;
  frames: FrameSlot[];
}

export interface SpreadData {
  id: string;
  left: PageData;
  right: PageData;
}

function uid() {
  return Math.random().toString(36).substring(2, 10);
}

function createLeftPage(variant: number): PageData {
  const counts = [3, 4, 2];
  const count = counts[variant % 3];
  return {
    id: uid(),
    side: 'left',
    variant: variant % 3,
    title: '',
    journalText: '',
    frames: Array.from({ length: count }, (_, i) => ({
      id: `f-${uid()}-${i}`,
      imageDataUrl: null,
    })),
  };
}

function createRightPage(variant: number): PageData {
  const counts = [2, 1, 3];
  const count = counts[variant % 3];
  return {
    id: uid(),
    side: 'right',
    variant: variant % 3,
    title: '',
    journalText: '',
    frames: Array.from({ length: count }, (_, i) => ({
      id: `f-${uid()}-${i}`,
      imageDataUrl: null,
    })),
  };
}

function createSpread(lv: number, rv: number): SpreadData {
  return { id: uid(), left: createLeftPage(lv), right: createRightPage(rv) };
}

interface BookStore {
  spreads: SpreadData[];
  currentSpreadIndex: number;

  nextSpread: () => void;
  prevSpread: () => void;
  addSpread: () => void;

  updateTitle: (si: number, side: 'left' | 'right', title: string) => void;
  updateJournalText: (si: number, side: 'left' | 'right', text: string) => void;
  setFrameImage: (si: number, side: 'left' | 'right', frameId: string, url: string) => void;
  removeFrameImage: (si: number, side: 'left' | 'right', frameId: string) => void;
}

export const useBookStore = create<BookStore>((set) => ({
  spreads: [
    createSpread(0, 0),
    createSpread(1, 1),
    createSpread(2, 2),
    createSpread(0, 1),
    createSpread(1, 2),
  ],
  currentSpreadIndex: 0,

  nextSpread: () =>
    set((s) => ({
      currentSpreadIndex: Math.min(s.currentSpreadIndex + 1, s.spreads.length - 1),
    })),

  prevSpread: () =>
    set((s) => ({
      currentSpreadIndex: Math.max(s.currentSpreadIndex - 1, 0),
    })),

  addSpread: () =>
    set((s) => {
      const lv = s.spreads.length % 3;
      const rv = (s.spreads.length + 1) % 3;
      return { spreads: [...s.spreads, createSpread(lv, rv)] };
    }),

  updateTitle: (si, side, title) =>
    set((s) => {
      const spreads = [...s.spreads];
      spreads[si] = { ...spreads[si], [side]: { ...spreads[si][side], title } };
      return { spreads };
    }),

  updateJournalText: (si, side, text) =>
    set((s) => {
      const spreads = [...s.spreads];
      spreads[si] = { ...spreads[si], [side]: { ...spreads[si][side], journalText: text } };
      return { spreads };
    }),

  setFrameImage: (si, side, frameId, url) =>
    set((s) => {
      const spreads = [...s.spreads];
      const page = { ...spreads[si][side] };
      page.frames = page.frames.map((f) => (f.id === frameId ? { ...f, imageDataUrl: url } : f));
      spreads[si] = { ...spreads[si], [side]: page };
      return { spreads };
    }),

  removeFrameImage: (si, side, frameId) =>
    set((s) => {
      const spreads = [...s.spreads];
      const page = { ...spreads[si][side] };
      page.frames = page.frames.map((f) => (f.id === frameId ? { ...f, imageDataUrl: null } : f));
      spreads[si] = { ...spreads[si], [side]: page };
      return { spreads };
    }),
}));
