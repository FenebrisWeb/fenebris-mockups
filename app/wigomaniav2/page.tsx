import TopBar from "./components/TopBar";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Solutions from "./components/Solutions";
import Footer from "./components/Footer";

// Wigomania V2 brand palette — muted gold, matched from the reference design.
const BRAND = "#B4915A";
const BRAND_DARK = "#8F7040";

export default function WigomaniaPage() {
  return (
    <div
      className="flex flex-1 flex-col"
      style={{ "--brand": BRAND, "--brand-dark": BRAND_DARK } as React.CSSProperties}
    >
      <TopBar />
      <Header />
      <main className="flex flex-1 flex-col">
        <Hero />
        <Solutions />
      </main>
      <Footer />
    </div>
  );
}
