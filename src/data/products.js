const products = [
  // =====================================================
  // BEAUTY - 8 PRODUCTS
  // =====================================================

  {
    id: 1,
    name: "Velvet Glow Foundation",
    category: "Beauty",
    price: 29.99,
    oldPrice: 39.99,
    image:
      "https://images.unsplash.com/photo-1631730486572-226d1c7e7b2a?auto=format&fit=crop&w=900&q=85",
    rating: 4.8,
    reviews: 124,
    description:
      "A lightweight foundation with a smooth velvet finish that gives the skin a natural and elegant look throughout the day.",
    badge: "Best Seller",
    stock: 18,
    brand: "Manloza Beauty",
    colors: ["Natural", "Warm Beige", "Soft Tan"],
  },

  {
    id: 2,
    name: "Rose Bloom Lipstick",
    category: "Beauty",
    price: 18.5,
    oldPrice: 24.99,
    image:
      "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=900&q=85",
    rating: 4.7,
    reviews: 89,
    description:
      "A creamy lipstick with a rich rose tone and comfortable finish designed for everyday elegance.",
    badge: "New",
    stock: 25,
    brand: "Manloza Beauty",
    colors: ["Rose", "Nude", "Berry"],
  },

  {
    id: 3,
    name: "Luminous Skin Serum",
    category: "Beauty",
    price: 34.99,
    oldPrice: 44.99,
    image:
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=900&q=85",
    rating: 4.9,
    reviews: 156,
    description:
      "A refreshing daily serum created to give the skin a smooth, hydrated and luminous appearance.",
    badge: "Popular",
    stock: 14,
    brand: "Manloza Skin",
    colors: ["30ml", "50ml"],
  },

  {
    id: 4,
    name: "Silk Touch Face Powder",
    category: "Beauty",
    price: 21.99,
    oldPrice: 28.99,
    image:
      "https://images.unsplash.com/photo-1596704017254-9b121068fb31?auto=format&fit=crop&w=900&q=85",
    rating: 4.6,
    reviews: 73,
    description:
      "Fine pressed powder that helps create a clean, soft and polished makeup finish.",
    badge: "Sale",
    stock: 31,
    brand: "Manloza Beauty",
    colors: ["Light", "Medium", "Deep"],
  },

  {
    id: 5,
    name: "Classic Makeup Brush Set",
    category: "Beauty",
    price: 26.99,
    oldPrice: 35.99,
    image:
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=900&q=85",
    rating: 4.8,
    reviews: 98,
    description:
      "A versatile collection of soft makeup brushes designed for smooth and precise application.",
    badge: "Featured",
    stock: 20,
    brand: "Manloza Beauty",
    colors: ["Black", "Rose Gold"],
  },

  {
    id: 6,
    name: "Hydra Care Face Cream",
    category: "Beauty",
    price: 31.5,
    oldPrice: 39.5,
    image:
      "https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?auto=format&fit=crop&w=900&q=85",
    rating: 4.7,
    reviews: 64,
    description:
      "A rich but lightweight face cream made for a soft and comfortable daily skincare routine.",
    badge: "New",
    stock: 16,
    brand: "Manloza Skin",
    colors: ["50ml", "100ml"],
  },

  {
    id: 7,
    name: "Midnight Eye Palette",
    category: "Beauty",
    price: 27.99,
    oldPrice: 34.99,
    image:
      "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=900&q=85",
    rating: 4.8,
    reviews: 111,
    description:
      "A modern eyeshadow palette combining elegant neutral and deeper shades for day and evening looks.",
    badge: "Trending",
    stock: 22,
    brand: "Manloza Beauty",
    colors: ["Classic", "Warm", "Midnight"],
  },

  {
    id: 8,
    name: "Soft Bloom Perfume",
    category: "Beauty",
    price: 42.99,
    oldPrice: 52.99,
    image:
      "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=900&q=85",
    rating: 4.9,
    reviews: 142,
    description:
      "A soft floral fragrance with a modern character created for a subtle and memorable presence.",
    badge: "Luxury",
    stock: 11,
    brand: "Manloza Parfums",
    colors: ["50ml", "100ml"],
  },

  // =====================================================
  // FURNITURE - 8 PRODUCTS
  // =====================================================

  {
    id: 9,
    name: "Modern Comfort Sofa",
    category: "Furniture",
    price: 749.99,
    oldPrice: 899.99,
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1000&q=85",
    rating: 4.9,
    reviews: 87,
    description:
      "A contemporary sofa with clean lines, generous seating and a comfortable design for modern living spaces.",
    badge: "Best Seller",
    stock: 7,
    brand: "Manloza Home",
    colors: ["Cream", "Gray", "Charcoal"],
  },

  {
    id: 10,
    name: "Minimal Oak Dining Table",
    category: "Furniture",
    price: 529.99,
    oldPrice: 649.99,
    image:
      "https://images.unsplash.com/photo-1617098900591-3f90928e8c54?auto=format&fit=crop&w=1000&q=85",
    rating: 4.8,
    reviews: 54,
    description:
      "A clean oak dining table designed to bring warmth and simplicity to contemporary dining rooms.",
    badge: "Featured",
    stock: 9,
    brand: "Manloza Home",
    colors: ["Natural Oak", "Dark Oak"],
  },

  {
    id: 11,
    name: "Luna Accent Chair",
    category: "Furniture",
    price: 289.99,
    oldPrice: 349.99,
    image:
      "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&w=1000&q=85",
    rating: 4.7,
    reviews: 42,
    description:
      "A stylish accent chair with a soft silhouette that works beautifully in living rooms and bedrooms.",
    badge: "New",
    stock: 12,
    brand: "Manloza Home",
    colors: ["Beige", "Olive", "Black"],
  },

  {
    id: 12,
    name: "Nordic Bedside Table",
    category: "Furniture",
    price: 159.99,
    oldPrice: 199.99,
    image:
      "https://images.unsplash.com/photo-1532372320572-cda25653a26d?auto=format&fit=crop&w=1000&q=85",
    rating: 4.6,
    reviews: 38,
    description:
      "A compact bedside table inspired by Scandinavian design with practical storage and soft natural tones.",
    badge: "Sale",
    stock: 15,
    brand: "Manloza Home",
    colors: ["White", "Oak"],
  },

  {
    id: 13,
    name: "Modern Lounge Lamp",
    category: "Furniture",
    price: 119.99,
    oldPrice: 149.99,
    image:
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=1000&q=85",
    rating: 4.7,
    reviews: 61,
    description:
      "A minimalist floor lamp that adds warm ambient lighting and a refined touch to your interior.",
    badge: "Popular",
    stock: 19,
    brand: "Manloza Home",
    colors: ["Black", "Gold"],
  },

  {
    id: 14,
    name: "Soft Linen Armchair",
    category: "Furniture",
    price: 319.99,
    oldPrice: 399.99,
    image:
      "https://images.unsplash.com/photo-1567016432779-094069958ea5?auto=format&fit=crop&w=1000&q=85",
    rating: 4.8,
    reviews: 46,
    description:
      "A comfortable linen armchair combining a relaxed feel with a sophisticated contemporary appearance.",
    badge: "Featured",
    stock: 8,
    brand: "Manloza Home",
    colors: ["Sand", "Cream", "Gray"],
  },

  {
    id: 15,
    name: "Elegant Wall Mirror",
    category: "Furniture",
    price: 189.99,
    oldPrice: 229.99,
    image:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&q=85",
    rating: 4.9,
    reviews: 76,
    description:
      "A refined decorative mirror designed to make rooms feel brighter, larger and more elegant.",
    badge: "Luxury",
    stock: 10,
    brand: "Manloza Home",
    colors: ["Black", "Gold"],
  },

  {
    id: 16,
    name: "Classic Wooden Cabinet",
    category: "Furniture",
    price: 459.99,
    oldPrice: 559.99,
    image:
      "https://images.unsplash.com/photo-1558997519-83ea9252edf8?auto=format&fit=crop&w=1000&q=85",
    rating: 4.7,
    reviews: 35,
    description:
      "A versatile wooden cabinet offering practical storage while keeping a clean and timeless appearance.",
    badge: "New",
    stock: 6,
    brand: "Manloza Home",
    colors: ["Walnut", "Natural"],
  },

  // =====================================================
  // FASHION - 8 PRODUCTS
  // =====================================================

  {
    id: 17,
    name: "Classic Oversized Blazer",
    category: "Fashion",
    price: 89.99,
    oldPrice: 119.99,
    image:
      "https://images.unsplash.com/photo-1591369822096-ffd140ec948f?auto=format&fit=crop&w=1000&q=85",
    rating: 4.8,
    reviews: 92,
    description:
      "A timeless oversized blazer with a clean silhouette that works for both casual and elegant outfits.",
    badge: "Best Seller",
    stock: 14,
    brand: "Manloza Fashion",
    colors: ["Black", "Cream", "Gray"],
  },

  {
    id: 18,
    name: "Essential White Shirt",
    category: "Fashion",
    price: 49.99,
    oldPrice: 64.99,
    image:
      "https://images.unsplash.com/photo-1603252110481-7ba873bf42ab?auto=format&fit=crop&w=1000&q=85",
    rating: 4.7,
    reviews: 78,
    description:
      "A clean essential shirt designed with a relaxed fit for effortless everyday styling.",
    badge: "Essential",
    stock: 25,
    brand: "Manloza Fashion",
    colors: ["White", "Black"],
  },

  {
    id: 19,
    name: "Urban Wide Leg Trousers",
    category: "Fashion",
    price: 59.99,
    oldPrice: 74.99,
    image:
      "https://images.unsplash.com/photo-1506629905607-d9d6d0f8e8a1?auto=format&fit=crop&w=1000&q=85",
    rating: 4.6,
    reviews: 51,
    description:
      "Modern wide-leg trousers with a comfortable fit and a versatile silhouette for everyday looks.",
    badge: "Trending",
    stock: 18,
    brand: "Manloza Fashion",
    colors: ["Black", "Beige", "Brown"],
  },

  {
    id: 20,
    name: "Soft Knit Sweater",
    category: "Fashion",
    price: 54.99,
    oldPrice: 69.99,
    image:
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=1000&q=85",
    rating: 4.8,
    reviews: 63,
    description:
      "A soft knit sweater with a simple modern shape designed for comfortable seasonal styling.",
    badge: "New",
    stock: 21,
    brand: "Manloza Fashion",
    colors: ["Cream", "Black", "Brown"],
  },

  {
    id: 21,
    name: "Minimal Leather Bag",
    category: "Fashion",
    price: 79.99,
    oldPrice: 99.99,
    image:
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=1000&q=85",
    rating: 4.9,
    reviews: 105,
    description:
      "A structured everyday bag with a minimal design that complements both casual and formal outfits.",
    badge: "Popular",
    stock: 13,
    brand: "Manloza Fashion",
    colors: ["Black", "Tan", "Cream"],
  },

  {
    id: 22,
    name: "Everyday Sneakers",
    category: "Fashion",
    price: 69.99,
    oldPrice: 84.99,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1000&q=85",
    rating: 4.7,
    reviews: 117,
    description:
      "Comfortable everyday sneakers combining a clean silhouette with a modern streetwear-inspired style.",
    badge: "Best Seller",
    stock: 24,
    brand: "Manloza Fashion",
    colors: ["White", "Black", "Gray"],
  },

  {
    id: 23,
    name: "Elegant Satin Dress",
    category: "Fashion",
    price: 99.99,
    oldPrice: 129.99,
    image:
      "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=1000&q=85",
    rating: 4.9,
    reviews: 84,
    description:
      "An elegant satin dress with a refined silhouette designed for special occasions and evening looks.",
    badge: "Luxury",
    stock: 9,
    brand: "Manloza Fashion",
    colors: ["Black", "Wine", "Champagne"],
  },

  {
    id: 24,
    name: "Classic Minimal Watch",
    category: "Fashion",
    price: 119.99,
    oldPrice: 149.99,
    image:
      "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=1000&q=85",
    rating: 4.8,
    reviews: 69,
    description:
      "A clean minimalist watch with a timeless appearance designed to complete everyday outfits.",
    badge: "Featured",
    stock: 12,
    brand: "Manloza",
    colors: ["Black", "Silver", "Gold"],
  },
];

export default products;