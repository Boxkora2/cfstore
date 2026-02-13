export type ProductCategory = 'Dark Roast' | 'Decaf' | 'Flavored' | 'Medium Roast' | 'Light Roast';

// Represents specific brewing/tasting details shown in the 2nd image
export interface ProductDetails {
  acidity: number; // 0-5 scale
  roastLevel: number; // 0-5 scale
  body: number; // 0-5 scale (implied by "dots" usually appearing for Body too)
  origin: string;
  flavorNotes: string[]; // e.g. ["Smoky", "Sweet"]
  story: string; // The "stories like 2nd image" text
}

export interface Product {
  id: string;
  name: string; // Display name e.g., "French Roast" or "Decaf French Roast"
  slug: string; // Shared identifier for grouping variants e.g. "french-roast"
  tagline: string; // Short description e.g. "Smoky & Intense"
  description: string; // Long textual description
  image: string;
  categories: ProductCategory[]; // Filters this product appears under
  details: ProductDetails;
}

export const products: Product[] = [
  // 1. French Roast (Dark + Variant Leader)
  {
    id: 'p-1',
    name: 'French Roast',
    slug: 'french-roast',
    tagline: 'Smoky & Intense',
    description: 'Our most intense roast. Muted acidity and full body. This is a coffee that loves to be roasted dark, developing deep, smoky flavors.',
    image: '/images/espresso.png', // Placeholder
    categories: ['Dark Roast'],
    details: {
      acidity: 1,
      roastLevel: 5,
      body: 4,
      origin: 'Multi-Region (Latin America, Asia/Pacific)',
      flavorNotes: ['Smoky', 'Singed Sugar'],
      story: 'We have been roasting this coffee since 1971. The intense, smoky flavor is a favorite for those who love a bold cup.'
    }
  },
  // 2. Decaf French Roast (Decaf + Dark + Variant)
  {
    id: 'p-2',
    name: 'Decaf French Roast',
    slug: 'french-roast',
    tagline: 'Smoky & Intense (Decaf)',
    description: 'The same intense, smoky flavor of our French Roast, but without the caffeine. Perfect for a late-night cup.',
    image: '/images/coldbrew.png',
    categories: ['Dark Roast', 'Decaf'], // Appears in both filters
    details: {
      acidity: 1,
      roastLevel: 5,
      body: 4,
      origin: 'Multi-Region',
      flavorNotes: ['Smoky', 'Caramel'],
      story: 'Enjoy the bold taste of French Roast anytime of day. Our Swiss Water Process removes caffeine while keeping the flavor integrity.'
    }
  },
  // 3. Breakfast Blend (Medium)
  {
    id: 'p-3',
    name: 'Breakfast Blend',
    slug: 'breakfast-blend',
    tagline: 'Bright & Tangy',
    description: 'A lively and lighter roast with a crisp finish. It was introduced in 1998 for those who prefer a milder cup.',
    image: '/images/latte.png',
    categories: ['Medium Roast'],
    details: {
      acidity: 4,
      roastLevel: 3,
      body: 2,
      origin: 'Latin America',
      flavorNotes: ['Sweet Orange', 'Brown Sugar'],
      story: 'We introduced this blend in 1998 for those who prefer a milder cup. A shade lighter than most of our offerings.'
    }
  },
  // 4. Colombia (Medium)
  {
    id: 'p-4',
    name: 'Colombia',
    slug: 'colombia',
    tagline: 'Juicy & Nutty',
    description: 'Grown on some of the highest coffee farms in the majestic Andes mountain range.',
    image: '/images/matcha.png',
    categories: ['Medium Roast'],
    details: {
      acidity: 3,
      roastLevel: 3,
      body: 3,
      origin: 'Colombia',
      flavorNotes: ['Toasted Walnut', 'Herbs'],
      story: 'We love this coffee for its consistent quality. The high altitude of the Andes gives it a juicy feel and signature nutty finish.'
    }
  },
  // 5. Café Verona (Dark)
  {
    id: 'p-5',
    name: 'Café Verona',
    slug: 'cafe-verona',
    tagline: 'Roasty Sweet & Dark Cocoa',
    description: 'This is a coffee of one true love, and three names. We created it just for a Seattle restaurant to be named 80/20 Blend.',
    image: '/images/espresso.png',
    categories: ['Dark Roast'],
    details: {
      acidity: 2,
      roastLevel: 4,
      body: 4,
      origin: 'Multi-Region',
      flavorNotes: ['Dark Cocoa', 'Roasty Sweet'],
      story: 'A post-dinner coffee that pairs perfectly with chocolate. Originally created as a dessert coffee for a Seattle restaurant.'
    }
  },
  // 6. Hazelnut Delight (Flavored)
  {
    id: 'p-6',
    name: 'Hazelnut Delight',
    slug: 'hazelnut-delight',
    tagline: 'Buttery & Aromatic',
    description: 'Top-quality Arabica beans combined with the rich, nutty flavor of toasted hazelnuts.',
    image: '/images/cocoa.png',
    categories: ['Flavored', 'Medium Roast'],
    details: {
      acidity: 2,
      roastLevel: 2,
      body: 2,
      origin: 'Latin America',
      flavorNotes: ['Hazelnut', 'Cream'],
      story: 'Flavoring coffee is an ancient tradition. Our hazelnut blend brings a creamy, buttery essence to your morning routine.'
    }
  },
  // 7. Caramel Swirl (Flavored)
  {
    id: 'p-7',
    name: 'Caramel Swirl',
    slug: 'caramel-swirl',
    tagline: 'Sweet & Smooth',
    description: 'A smooth medium roast swirled with the taste of golden caramel.',
    image: '/images/latte.png',
    categories: ['Flavored'],
    details: {
      acidity: 2,
      roastLevel: 2,
      body: 3,
      origin: 'Latin America',
      flavorNotes: ['Caramel', 'Vanilla'],
      story: 'Inspired by our popular caramel macchiato, this coffee brings the coffeehouse experience to your home brewer.'
    }
  },
  // 8. Decaf House Blend (Decaf + Medium)
  {
    id: 'p-8',
    name: 'Decaf House Blend',
    slug: 'house-blend',
    tagline: 'Balanced & Rich (Decaf)',
    description: 'A deceptively simple blend of fine Latin American beans roasted to a glistening, dark chestnut color.',
    image: '/images/coldbrew.png',
    categories: ['Decaf', 'Medium Roast'],
    details: {
      acidity: 3,
      roastLevel: 3,
      body: 3,
      origin: 'Latin America',
      flavorNotes: ['Cocoa', 'Toffee'],
      story: 'The very first blend we ever created for you, back in 1971. And this one is decaffeinated so you can enjoy it all day.'
    }
  }
];
