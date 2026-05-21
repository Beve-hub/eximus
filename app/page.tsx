// HomePage.tsx
import Navbar from "@/component/layout/Navbar";
import Hero from "./home/Hero";
import AboutContent from "./home/AboutContent";
import ServicesContent from "./home/ServicesContent";
import LinearContent from "./home/LinearContent";
import Footer from "@/component/layout/Footer";
import ValuesContent from "./home/ValuesContent";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="w-full">
        <Hero />

        <div className="max-w-7xl w-full mx-auto">
          <AboutContent />
        </div>

        {/* Services section with oil & gas background image */}
        <div
          className="w-full relative bg-[var(--label-fg)]"
          style={{
            backgroundImage: `url('/assests/plant.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        >
          {/* Gradient overlay using --background */}
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(
                to bottom,
                color-mix(in srgb, var(--input-bg) 92%, transparent) 0%,
                color-mix(in srgb, var(--input-border) 88%, transparent) 100%
              )`,
            }}
          />
          <div className="relative z-10">
            <ServicesContent />
          </div>
        </div>
       <div className="w-full">
          <ValuesContent />
        </div>
        <div className="w-full bg-[var(--label-fg)]">
          <LinearContent />
        </div>
      </main>

      <Footer />
    </div>
  );
}
