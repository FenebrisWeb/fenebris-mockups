import { PRODUCTS } from "./products";
import ProductSlider from "./ProductSlider";

export default function BestSellers() {
  return (
    <ProductSlider
      eyebrow="Best Sellers"
      heading="Loved by Our Customers"
      products={PRODUCTS}
      badgeLabel="Best Seller"
    />
  );
}
