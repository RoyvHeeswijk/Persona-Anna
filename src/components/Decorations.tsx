import React from 'react';

interface Props {
  className?: string;
  style?: React.CSSProperties;
  size?: number;
}

/* ===== COLORFUL STICKERS ===== */

export function CameraSticker({ className = '', style, size = 40 }: Props) {
  return (
    <svg className={`sticker ${className}`} style={style} width={size} height={size} viewBox="0 0 48 48" fill="none">
      <rect x="7" y="14" width="34" height="24" rx="4" fill="#D4A843" stroke="#B8912E" strokeWidth="1.5" />
      <circle cx="24" cy="26" r="8" fill="#F5ECD0" stroke="#B8912E" strokeWidth="1.5" />
      <circle cx="24" cy="26" r="4.5" fill="#3E3E3E" />
      <circle cx="24" cy="26" r="2" fill="#666" />
      <rect x="17" y="10" width="14" height="6" rx="2" fill="#E8C95A" stroke="#B8912E" strokeWidth="1" />
      <circle cx="36" cy="19" r="2.5" fill="#E85D75" />
    </svg>
  );
}

export function SuitcaseSticker({ className = '', style, size = 40 }: Props) {
  return (
    <svg className={`sticker ${className}`} style={style} width={size} height={size} viewBox="0 0 48 48" fill="none">
      <rect x="8" y="16" width="32" height="22" rx="4" fill="#5CB8B2" stroke="#3D9B95" strokeWidth="1.5" />
      <rect x="16" y="10" width="16" height="8" rx="3" fill="none" stroke="#3D9B95" strokeWidth="2" />
      <line x1="8" y1="28" x2="40" y2="28" stroke="#3D9B95" strokeWidth="1.5" />
      <rect x="20" y="24" width="8" height="8" rx="1.5" fill="#F0D780" stroke="#D4A843" strokeWidth="1" />
    </svg>
  );
}

export function VanSticker({ className = '', style, size = 44 }: Props) {
  return (
    <svg className={`sticker ${className}`} style={style} width={size} height={size * 0.7} viewBox="0 0 56 38" fill="none">
      <rect x="4" y="8" width="48" height="22" rx="5" fill="#E88CA5" stroke="#C2637E" strokeWidth="1.5" />
      <rect x="8" y="12" width="14" height="10" rx="2" fill="#F5D5DE" stroke="#C2637E" strokeWidth="1" />
      <rect x="25" y="12" width="10" height="10" rx="2" fill="#F5D5DE" stroke="#C2637E" strokeWidth="1" />
      <rect x="38" y="12" width="10" height="10" rx="2" fill="#F5D5DE" stroke="#C2637E" strokeWidth="1" />
      <circle cx="16" cy="30" r="4" fill="#555" stroke="#333" strokeWidth="1.5" />
      <circle cx="40" cy="30" r="4" fill="#555" stroke="#333" strokeWidth="1.5" />
      <circle cx="16" cy="30" r="1.5" fill="#999" />
      <circle cx="40" cy="30" r="1.5" fill="#999" />
      <rect x="2" y="6" width="20" height="4" rx="2" fill="#E88CA5" />
    </svg>
  );
}

export function HamburgerSticker({ className = '', style, size = 36 }: Props) {
  return (
    <svg className={`sticker ${className}`} style={style} width={size} height={size} viewBox="0 0 40 40" fill="none">
      <path d="M8 18C8 12 12 6 20 6C28 6 32 12 32 18Z" fill="#E8A84C" stroke="#C4862E" strokeWidth="1" />
      <ellipse cx="10" cy="11" rx="1" ry="0.8" fill="#D4943A" />
      <ellipse cx="16" cy="9" rx="1" ry="0.8" fill="#D4943A" />
      <ellipse cx="25" cy="10" rx="1" ry="0.8" fill="#D4943A" />
      <rect x="6" y="18" width="28" height="4" rx="1" fill="#5CB85C" />
      <rect x="7" y="22" width="26" height="4" rx="1" fill="#C0392B" opacity="0.8" />
      <path d="M6 26L7 30C7 32 10 34 20 34C30 34 33 32 33 30L34 26Z" fill="#E8A84C" stroke="#C4862E" strokeWidth="1" />
    </svg>
  );
}

export function MusicNoteSticker({ className = '', style, size = 32 }: Props) {
  return (
    <svg className={`sticker ${className}`} style={style} width={size} height={size} viewBox="0 0 32 32" fill="none">
      <circle cx="10" cy="24" r="4" fill="#E88CA5" stroke="#C2637E" strokeWidth="1.5" />
      <circle cx="24" cy="22" r="4" fill="#E88CA5" stroke="#C2637E" strokeWidth="1.5" />
      <line x1="14" y1="24" x2="14" y2="6" stroke="#C2637E" strokeWidth="2" />
      <line x1="28" y1="22" x2="28" y2="4" stroke="#C2637E" strokeWidth="2" />
      <path d="M14 6C14 6 18 4 22 3L28 4" stroke="#C2637E" strokeWidth="2.5" strokeLinecap="round" fill="none" />
    </svg>
  );
}

export function IceCreamSticker({ className = '', style, size = 36 }: Props) {
  return (
    <svg className={`sticker ${className}`} style={style} width={size} height={size} viewBox="0 0 36 44" fill="none">
      <path d="M12 22L18 40L24 22Z" fill="#E8C95A" stroke="#D4A843" strokeWidth="1" />
      <circle cx="14" cy="16" r="7" fill="#F5A5B8" stroke="#E88CA5" strokeWidth="1" />
      <circle cx="22" cy="16" r="7" fill="#A5D6E8" stroke="#7BBDD4" strokeWidth="1" />
      <circle cx="18" cy="10" r="6" fill="#C8E6C9" stroke="#8FBC8F" strokeWidth="1" />
      <circle cx="18" cy="6" r="2" fill="#E85D75" />
    </svg>
  );
}

export function HeartSticker({ className = '', style, size = 28 }: Props) {
  return (
    <svg className={`sticker ${className}`} style={style} width={size} height={size} viewBox="0 0 28 28" fill="none">
      <path d="M14 25C14 25 3 17 3 10C3 6 6 3 9.5 3C11.5 3 13 4.2 14 6C15 4.2 16.5 3 18.5 3C22 3 25 6 25 10C25 17 14 25 14 25Z" fill="#E88CA5" stroke="#C2637E" strokeWidth="1.2" />
    </svg>
  );
}

export function CoffeeTagSticker({ className = '', style, size = 42 }: Props) {
  return (
    <svg className={`sticker ${className}`} style={style} width={size} height={size * 0.75} viewBox="0 0 56 42" fill="none">
      <rect x="2" y="2" width="52" height="38" rx="4" fill="#ffffff" stroke="#5CB8B2" strokeWidth="2" />
      <rect x="2" y="2" width="52" height="38" rx="4" fill="repeating-linear-gradient(135deg, transparent, transparent 3px, rgba(92,184,178,0.15) 3px, rgba(92,184,178,0.15) 6px)" />
      <text x="28" y="16" textAnchor="middle" fontSize="8" fill="#E85D75" fontWeight="bold" fontFamily="sans-serif">I ♥</text>
      <text x="28" y="30" textAnchor="middle" fontSize="10" fill="#5CB8B2" fontWeight="bold" fontFamily="sans-serif">COFFEE</text>
    </svg>
  );
}

export function TicketSticker({ className = '', style, size = 44 }: Props) {
  return (
    <svg className={`sticker ${className}`} style={style} width={size} height={size * 0.55} viewBox="0 0 56 30" fill="none">
      <rect x="2" y="2" width="52" height="26" rx="3" fill="#F0D780" stroke="#D4A843" strokeWidth="1.5" />
      <line x1="18" y1="2" x2="18" y2="28" stroke="#D4A843" strokeWidth="1" strokeDasharray="3 2" />
      <text x="37" y="13" textAnchor="middle" fontSize="7" fill="#8B6914" fontWeight="bold" fontFamily="sans-serif">TICKET</text>
      <text x="37" y="23" textAnchor="middle" fontSize="5" fill="#B8912E" fontFamily="sans-serif">★ ★ ★</text>
      <text x="10" y="18" textAnchor="middle" fontSize="12" fill="#D4A843">✦</text>
    </svg>
  );
}

/* ===== WASHI TAPE ===== */

export function WashiTape({ className = '', style, variant = 0 }: Props & { variant?: number }) {
  const colors = ['washi-tape washi-pink', 'washi-tape washi-yellow', 'washi-tape washi-mint', 'washi-tape washi-green-stripe'];
  return <div className={`${colors[variant % 4]} ${className}`} style={style} />;
}

export function WashiSmall({ className = '', style, variant = 0 }: Props & { variant?: number }) {
  const colors = ['washi-tape washi-small washi-pink', 'washi-tape washi-small washi-yellow', 'washi-tape washi-small washi-mint', 'washi-tape washi-small washi-green-stripe'];
  return <div className={`${colors[variant % 4]} ${className}`} style={style} />;
}

/* ===== DOODLES ===== */

export function StarsDoodle({ className = '', style, size = 60 }: Props) {
  return (
    <svg className={`doodle ${className}`} style={style} width={size} height={size * 0.5} viewBox="0 0 80 40" fill="none">
      <path d="M15 20L17 13L19 20L26 20L20 24L22 31L15 27L8 31L10 24L4 20Z" stroke="#E88CA5" strokeWidth="1.2" fill="#F5D5DE" />
      <path d="M45 16L46.5 11L48 16L53 16L49 19L50.5 24L45 21L39.5 24L41 19L37 16Z" stroke="#F0D780" strokeWidth="1" fill="#FFF3CC" />
      <circle cx="67" cy="20" r="5" stroke="#5CB8B2" strokeWidth="1.2" fill="none" />
      <circle cx="67" cy="20" r="2" fill="#A5DED8" />
    </svg>
  );
}

export function SwirlDoodle({ className = '', style, size = 70 }: Props) {
  return (
    <svg className={`doodle ${className}`} style={style} width={size} height={size * 0.4} viewBox="0 0 80 30" fill="none">
      <path d="M5 15C10 5 20 25 30 15C40 5 50 25 60 15C65 10 70 12 75 15" stroke="#5CB8B2" strokeWidth="1.5" strokeLinecap="round" fill="none" />
    </svg>
  );
}

export function ArrowDoodle({ className = '', style, size = 60 }: Props) {
  return (
    <svg className={`doodle ${className}`} style={style} width={size} height={size * 0.4} viewBox="0 0 70 28" fill="none">
      <path d="M5 14C15 14 25 8 35 14C45 20 55 14 60 14" stroke="#E88CA5" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      <path d="M55 8L62 14L55 20" stroke="#E88CA5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
}

export function HeartDoodle({ className = '', style, size = 24 }: Props) {
  return (
    <svg className={`doodle ${className}`} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M12 21C12 21 3 14 3 8.5C3 5 5.5 3 8 3C9.7 3 11.2 4 12 5.5C12.8 4 14.3 3 16 3C18.5 3 21 5 21 8.5C21 14 12 21 12 21Z" stroke="#E88CA5" strokeWidth="1.2" fill="#F5D5DE" />
    </svg>
  );
}

export function CircleDoodle({ className = '', style, size = 20 }: Props) {
  return (
    <svg className={`doodle ${className}`} style={style} width={size} height={size} viewBox="0 0 20 20" fill="none">
      <circle cx="10" cy="10" r="7" stroke="#5CB8B2" strokeWidth="1" strokeDasharray="2 2" fill="none" />
    </svg>
  );
}
