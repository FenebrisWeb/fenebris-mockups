import { PRODUCTS } from "./products";
import ProductSlider from "./ProductSlider";

const MASALA_PRODUCTS = PRODUCTS.filter((p) => p.category === "Spices Blend");

export default function PremiumMasala() {
  return (
    <ProductSlider
      eyebrow="Our Premium Masale"
      heading="Handcrafted Spice Blends"
      products={MASALA_PRODUCTS}
      badgeLabel="Premium Masala"
    />
  );
}
