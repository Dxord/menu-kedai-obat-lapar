export type MenuItem = {
  name: string;
  price: string;
  description?: string;
  tag?: string;
  image: string;
};

export type MenuCategory = {
  title: string;
  items?: MenuItem[];
  subcategories?: {
    title: string;
    items: MenuItem[];
  }[];
};

const images = {
  fries: "https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?auto=format&fit=crop&w=800&q=80",
  nachos: "https://images.unsplash.com/photo-1627207644006-27fcc910747e?auto=format&fit=crop&w=800&q=80",
  wonton: "https://images.unsplash.com/photo-1541696490-8744a571f939?auto=format&fit=crop&w=800&q=80",
  bakso: "https://images.unsplash.com/photo-1529042410759-befb1204b465?auto=format&fit=crop&w=800&q=80",
  tea: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=800&q=80",
  coffee: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80",
  rice_beef: "https://images.unsplash.com/photo-1603064752734-4c48eff53d05?auto=format&fit=crop&w=800&q=80",
  rice_chicken: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=800&q=80",
  noodles: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=800&q=80",
  default: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
};

export const menuData: MenuCategory[] = [
  {
    title: "Aneka Snack",
    items: [
      { name: "French Fries", price: "15k", image: images.fries },
      { name: "Cheesy Truffle Fries", price: "17.5k", image: images.fries },
      { name: "Cheesy Nachos", price: "21k", image: images.nachos },
      { name: "Wonton Chili Oil", price: "18k", image: images.wonton },
      { name: "Wonton Kuah", price: "18k", image: images.wonton },
      { name: "Tahu Bakso Pedas", price: "16k", image: images.bakso },
      { name: "Cireng Salju", price: "12k", image: images.default },
    ],
  },
  {
    title: "Aneka Minuman",
    subcategories: [
      {
        title: "ICE",
        items: [
          { name: "Jasmine Tea", price: "10k", image: images.tea },
          { name: "Peach Manggo Tea", price: "12k", image: images.tea },
          { name: "Lemon Tea", price: "12k", image: images.tea },
          { name: "Leccy Tea", price: "12k", image: images.tea },
          { name: "Taro", price: "18k", image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=800&q=80" },
          { name: "Red Velvet", price: "18k", image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=800&q=80" },
          { name: "Coffee Butterscotch", price: "22k", image: images.coffee },
          { name: "Choco Malt", price: "22k", image: images.coffee },
          { name: "Dark Choco", price: "22k", image: images.coffee },
        ],
      },
      {
        title: "HOT",
        items: [
          { name: "Coffee", price: "10k", image: images.coffee },
          { name: "Jasmine Tea", price: "10k", image: images.tea },
          { name: "Choco Malt", price: "20k", image: images.coffee },
          { name: "Dark Choco", price: "20k", image: images.coffee },
        ],
      },
    ],
  },
  {
    title: "Aneka Pedesan",
    subcategories: [
      {
        title: "Olahan Daging Sapi",
        items: [
          { name: "Nasi Daging Pedas", price: "28.5k", image: images.rice_beef },
          { name: "Nasi Paru Pedas", price: "28.5k", image: images.rice_beef },
          { name: "Nasi Babat Pedas", price: "28.5k", image: images.rice_beef },
          { name: "Nasi Usus Pedas", price: "28.5k", image: images.rice_beef },
        ],
      },
      {
        title: "Olahan Daging Ayam",
        items: [
          { name: "Nasi Sayap Pedas", price: "22k", image: images.rice_chicken },
          { name: "Nasi Ceker Pedas", price: "18.5k", image: images.rice_chicken },
        ],
      },
    ],
  },
  {
    title: "Aneka Nasi",
    items: [
      { name: "Nasi Beef Slice", price: "29k", image: images.rice_beef },
      { name: "Nasi Ayam Laos", price: "23.5k", image: images.rice_chicken },
      { name: "Nasi Telor Pontianak (Single/Double)", price: "10k/16k", image: images.rice_beef },
      { name: "Nasi Tempong Ayam", price: "32.5k", image: images.rice_chicken },
      { name: "Nasi Tempong Udang", price: "32.5k", image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80" },
      { name: "Nasi Tempong Lele", price: "28.5k", image: images.rice_chicken },
      { name: "Nasi Tempong Komplit", price: "40k", image: images.rice_beef },
    ],
  },
  {
    title: "Aneka Mie",
    items: [
      { name: "Mie Polos Ori/Yamin/Judes", price: "9k", image: images.noodles },
      { name: "Mie Ayam Ori", price: "16k", image: images.noodles },
      { name: "Mie Ayam (Bakso/Chasiu)", price: "22k", image: images.noodles },
      { name: "Mie Yamin Ayam", price: "16k", image: images.noodles },
      { name: "Mie Yamin (Bakso/Chasiu)", price: "22k", image: images.noodles },
      { name: "Mie Judes Ayam", price: "16k", image: images.noodles },
      { name: "Mie Judes (Bakso/Chasiu)", price: "22k", image: images.noodles },
      { name: "Mie Pok Singapore", price: "25k", image: images.noodles },
    ],
  },
];
