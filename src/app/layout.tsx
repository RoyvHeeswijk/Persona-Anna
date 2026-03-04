import type { Metadata } from "next";
import {
  Caveat,
  Patrick_Hand,
  Playfair_Display,
  Inter,
} from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const patrickHand = Patrick_Hand({
  variable: "--font-patrick-hand",
  subsets: ["latin"],
  weight: ["400"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Empathy Hub — Anna",
  description:
    "Een rijke onderzoeksbron voor designstudenten. Ontdek het leven van Anna, een 34-jarige Poolse logistiek medewerker in Venlo.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" className="scroll-smooth">
      <body
        className={`${caveat.variable} ${patrickHand.variable} ${playfair.variable} ${inter.variable} antialiased selection:bg-[#E4E9E2] selection:text-black`}
      >
        {children}
        <CustomCursor />
      </body>
    </html>
  );
}
