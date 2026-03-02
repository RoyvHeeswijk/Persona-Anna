import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CharacterSection from "@/components/CharacterSection";
import ContextSection from "@/components/ContextSection";
import ObservationsSection from "@/components/ObservationsSection";
import ToolkitSection from "@/components/ToolkitSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="hub">
      <Navbar />
      <HeroSection />
      <CharacterSection />
      <ContextSection />
      <ObservationsSection />
      <ToolkitSection />
      <Footer />
    </div>
  );
}
