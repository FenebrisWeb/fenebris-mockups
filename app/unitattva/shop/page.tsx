import TopBar from "../components/TopBar";
import Header from "../components/Header";
import ProductGrid from "../components/ProductGrid";
import Footer from "../components/Footer";
import { CartProvider } from "../components/CartContext";
import { WishlistProvider } from "../components/WishlistContext";

// UniTattva brand color. Scoped to this page only, keep it out of shared files.
const BRAND = "#A42323";

export default function UnitattvaShopPage() {
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
            <ProductGrid />
          </main>
          <Footer />
        </WishlistProvider>
      </CartProvider>
    </div>
  );
}
