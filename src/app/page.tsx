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
      {/* Background Organic Pathing SVG */}
      <svg
        className="hub-organic-path"
        viewBox="0 0 1200 4000"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M 100,0 C 300,500 -100,1000 200,1500 C 500,2000 50,2500 300,3000 C 600,3500 100,3800 250,4000" />
      </svg>

      {/* Background Organic Blobs */}
      <div className="absolute top-[10%] left-[-10%] w-[40vw] h-[40vw] bg-[#E4E9E2] rounded-full mix-blend-multiply filter blur-[80px] opacity-30 pointer-events-none z-0" />
      <div className="absolute top-[35%] right-[-5%] w-[35vw] h-[35vw] bg-[#F3E5AB] rounded-full mix-blend-multiply filter blur-[80px] opacity-20 pointer-events-none z-0" />
      <div className="absolute top-[65%] left-[-5%] w-[45vw] h-[45vw] bg-[#E4E9E2] rounded-full mix-blend-multiply filter blur-[100px] opacity-25 pointer-events-none z-0" />

      {/* Content */}
      <div className="relative z-10 w-full">
        <Navbar />
        <HeroSection />
        <CharacterSection />
        <ContextSection />
        <ObservationsSection />
        <ToolkitSection />
        <Footer />
      </div>
    </div>
  );
}
