export type Product = {
  handle: string;
  title: string;
  category: string;
  price: number;
  compareAt: number | null;
  weight: string;
  image: string | null;
  // Placeholder ratings for mockup purposes — swap for real review data
  // once it's available.
  rating: number;
  reviewCount: number;
};

export const PRODUCTS: Product[] = [
  {
    handle: "unitattva-premium-curry-masala-combo-chicken-masala-meat-masala-fish-curry-masala-anda-curry-masala-rich-aroma-traditional-spices-multi-purpose-curry-blend-pack",
    title: "Curry Masala Combo (4-in-1)",
    category: "Combo",
    price: 549,
    compareAt: null,
    weight: "Combo Pack",
    image: "https://cdn.shopify.com/s/files/1/0782/2413/0298/files/DreamCombo.jpg?v=1771312585",
    rating: 4.6,
    reviewCount: 42,
  },
  {
    handle: "green-cardamom-supreme-premium-whole-elaichi-pods-aromatic-fresh-spice-for-tea-desserts-curries-baking",
    title: "Green Cardamom Supreme",
    category: "Whole Spices",
    price: 1210,
    compareAt: 1513,
    weight: "250g",
    image: "https://cdn.shopify.com/s/files/1/0782/2413/0298/files/GreenCardamomSeeds.png?v=1765013369",
    rating: 4.8,
    reviewCount: 96,
  },
  {
    handle: "jaljeera-premix-instant-refreshing-drink-mix",
    title: "Jaljeera Premix",
    category: "Premixes",
    price: 200,
    compareAt: 300,
    weight: "250g",
    image: "https://cdn.shopify.com/s/files/1/0782/2413/0298/files/Untitleddesign_18.jpg?v=1784624939",
    rating: 4.4,
    reviewCount: 28,
  },
  {
    handle: "kasoori-methi-premium-dried-fenugreek-leaves",
    title: "Kasoori Methi",
    category: "Spices Blend",
    price: 300,
    compareAt: null,
    weight: "250g",
    image: "https://cdn.shopify.com/s/files/1/0782/2413/0298/files/KasooriMethi.jpg?v=1777551688",
    rating: 4.5,
    reviewCount: 34,
  },
  {
    handle: "paratha-masala-authentic-spice-blend-for-tasty-parathas",
    title: "Paratha Masala",
    category: "Spices Blend",
    price: 275,
    compareAt: null,
    weight: "250g",
    image: "https://cdn.shopify.com/s/files/1/0782/2413/0298/files/paranthamasala2.png?v=1784625976",
    rating: 4.3,
    reviewCount: 19,
  },
  {
    handle: "thandai-premix-instant-traditional-milk-drink-mix",
    title: "Thandai Premix",
    category: "Premixes",
    price: 300,
    compareAt: 400,
    weight: "250g",
    image: "https://cdn.shopify.com/s/files/1/0782/2413/0298/files/Untitleddesign_21.jpg?v=1784628848",
    rating: 4.7,
    reviewCount: 61,
  },
  {
    handle: "unitattva-anda-curry-masala-authentic-indian-egg-curry-spice-blend",
    title: "Anda Curry Masala",
    category: "Spices Blend",
    price: 304,
    compareAt: 380,
    weight: "250g",
    image: "https://cdn.shopify.com/s/files/1/0782/2413/0298/files/AN1.jpg?v=1784631530",
    rating: 4.5,
    reviewCount: 23,
  },
  {
    handle: "unitattva-biryani-masala-premium-aromatic-spice-blend-for-perfect-biryani",
    title: "Biryani Masala",
    category: "Spices Blend",
    price: 295,
    compareAt: 370,
    weight: "250g",
    image: "https://cdn.shopify.com/s/files/1/0782/2413/0298/files/B1.jpg?v=1784631479",
    rating: 4.9,
    reviewCount: 128,
  },
  {
    handle: "unitattva-chicken-masala-premium-non-veg-spice-blend-for-rich-flavorful-chicken-curries-authentic-taste-strong-aroma",
    title: "Chicken Masala",
    category: "Spices Blend",
    price: 383,
    compareAt: 479,
    weight: "250g",
    image: "https://cdn.shopify.com/s/files/1/0782/2413/0298/files/Chickenmasala.png?v=1764218489",
    rating: 4.6,
    reviewCount: 57,
  },
  {
    handle: "unitattva-dal-makhani-masala-authentic-creamy-dal-flavor-premium-aromatic-spice-blend-restaurant-style-taste-at-home",
    title: "Dal Makhani Masala",
    category: "Spices Blend",
    price: 252,
    compareAt: 315,
    weight: "250g",
    image: null,
    rating: 4.4,
    reviewCount: 15,
  },
];
