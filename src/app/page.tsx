import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CharacterSection from "@/components/CharacterSection";
import ContextSection from "@/components/ContextSection";
import WorkSection from "@/components/WorkSection";
import DrijfverenSection from "@/components/DrijfverenSection";
import ObservationsSection from "@/components/ObservationsSection";
import Footer from "@/components/Footer";
import Book from "@/components/Book";

export default function Home() {
  return (
    <div className="hub relative">
      {/* Content */}
      <div className="relative z-10 w-full">
        <Navbar />
        <HeroSection />
        <Book />
        <CharacterSection />
        <ContextSection />
        <WorkSection />
        <DrijfverenSection />
        <ObservationsSection />
        <Footer />
      </div>
    </div>
  );
}
