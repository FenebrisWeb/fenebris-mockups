import { PRODUCTS } from "./products";
import ProductSlider from "./ProductSlider";

export default function BlendedSpices() {
  return (
    <ProductSlider
      eyebrow="Blended Spices"
      heading="Our Signature Spice Blends"
      products={PRODUCTS}
      badgeLabel="Blended Spice"
    />
  );
}
