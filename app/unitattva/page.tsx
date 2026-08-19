import TopBar from "./components/TopBar";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import CategoryRow from "./components/CategoryRow";
import VideoShowcase from "./components/VideoShowcase";
import BestSellers from "./components/BestSellers";
import TrustSection from "./components/TrustSection";
import PremiumMasala from "./components/PremiumMasala";
import WhySpices from "./components/WhySpices";
import BlendedSpices from "./components/BlendedSpices";
import PromoOffer from "./components/PromoOffer";
import Footer from "./components/Footer";
import { CartProvider } from "./components/CartContext";
import { WishlistProvider } from "./components/WishlistContext";

// UniTattva brand color. Scoped to this page only, keep it out of shared files.
const BRAND = "#A42323";

export default function UnitattvaPage() {
  return (
    <div
      className="flex flex-1 flex-col"
      style={{ "--brand": BRAND } as React.CSSProperties}
    >
      <CartProvider>
        <WishlistProvider>
          <TopBar />
          <Header />
          <main className="flex flex-1 flex-col">
            <Hero />
            <Marquee />
            <CategoryRow />
            <VideoShowcase />
            <BestSellers />
            <TrustSection />
            <PremiumMasala />
            <WhySpices />
            <BlendedSpices />
            <PromoOffer />
          </main>
          <Footer />
        </WishlistProvider>
      </CartProvider>
    </div>
  );
}
