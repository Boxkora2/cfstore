export type Category = 'Specialty' | 'Espresso' | 'Non-Coffee' | 'Pastries';

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: Category;
  image: string; // URL or Emoji for now
  popular?: boolean;
}

export const menuItems: MenuItem[] = [
  {
    id: '1',
    name: 'Kora Signature Latte',
    description: 'Our house blend espresso with steamed oat milk and a hint of cinnamon.',
    price: 5.50,
    category: 'Specialty',
    image: '/images/latte.png',
    popular: true,
  },
  {
    id: '2',
    name: 'Honey Lavender Cold Brew',
    description: 'Slow-steeped cold brew infused with local honey and lavender syrup.',
    price: 6.00,
    category: 'Specialty',
    image: '/images/coldbrew.png',
  },
  {
    id: '3',
    name: 'Classic Espresso',
    description: 'A double shot of our rich, nutty Brazilian beans.',
    price: 3.50,
    category: 'Espresso',
    image: '/images/espresso.png',
  },
  {
    id: '4',
    name: 'Matcha Latte',
    description: 'Premium ceremonial grade matcha whisked with milk of your choice.',
    price: 5.00,
    category: 'Non-Coffee',
    image: '/images/matcha.png',
    popular: true,
  },
  {
    id: '5',
    name: 'Hot Chocolate',
    description: 'Belgium dark chocolate melted into creamy steamed milk.',
    price: 4.50,
    category: 'Non-Coffee',
    image: '/images/cocoa.png',
  },
  {
    id: '6',
    name: 'Almond Croissant',
    description: 'Buttery, flaky pastry filled with sweet almond paste.',
    price: 4.00,
    category: 'Pastries',
    image: '/images/croissant.png',
    popular: true,
  },
  {
    id: '7',
    name: 'Blueberry Muffin',
    description: 'Moist muffin bursting with fresh blueberries and a crumble top.',
    price: 3.50,
    category: 'Pastries',
    image: '/images/muffin.png',
  }
];

export const formatPrice = (price: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(price);
};
