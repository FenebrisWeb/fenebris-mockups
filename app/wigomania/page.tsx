import TopBar from "./components/TopBar";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

// Wigomania brand color. Scoped to this page only, keep it out of shared files.
const BRAND = "#E94B95";

export default function WigomaniaPage() {
  return (
    <div
      className="flex flex-1 flex-col"
      style={{ "--brand": BRAND } as React.CSSProperties}
    >
      <TopBar />
      <Header />
      <main className="flex flex-1 flex-col">
        <Hero />
        <About />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
