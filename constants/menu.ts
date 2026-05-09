export interface MenuItem {
  name: string;
  description: string;
  price: number;
  image: string;
  isVeg: boolean;
  isBestseller?: boolean;
}

export interface MenuCategory {
  name: string;
  items: MenuItem[];
}

export const menuCategories: MenuCategory[] = [
  {
    name: "Signature Biryanis",
    items: [
      {
        name: "Hyderabadi Chicken Dum Biryani",
        description:
          "Tender chicken marinated in aromatic spices, layered with aged basmati rice and slow-cooked in a sealed handi.",
        price: 349,
        image:
          "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=600&h=400&fit=crop&q=80",
        isVeg: false,
        isBestseller: true,
      },
      {
        name: "Lucknowi Mutton Biryani",
        description:
          "Succulent mutton pieces infused with saffron, rose water, and whole spices in the royal Awadhi style.",
        price: 449,
        image:
          "https://images.unsplash.com/photo-1642821373181-696a54913e93?w=600&h=400&fit=crop&q=80",
        isVeg: false,
        isBestseller: true,
      },
      {
        name: "Paneer Tikka Biryani",
        description:
          "Chargrilled paneer tikka layered with fragrant rice, caramelized onions, and fresh herbs.",
        price: 299,
        image:
          "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?w=600&h=400&fit=crop&q=80",
        isVeg: true,
      },
      {
        name: "Egg Biryani",
        description:
          "Perfectly boiled eggs nestled in layers of spiced rice with crispy fried onions and aromatic whole spices.",
        price: 249,
        image:
          "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=600&h=400&fit=crop&q=80",
        isVeg: false,
      },
    ],
  },
  {
    name: "Regional Biryanis",
    items: [
      {
        name: "Kolkata Chicken Biryani",
        description:
          "Known for its subtle spices and the iconic boiled potato and egg, cooked in the slow-simmered dum style.",
        price: 329,
        image:
          "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?w=600&h=400&fit=crop&q=80",
        isVeg: false,
        isBestseller: true,
      },
      {
        name: "Malabar Fish Biryani",
        description:
          "A coastal delicacy made with short-grain kaima rice, fresh kingfish, and a blend of Malabar spices.",
        price: 399,
        image:
          "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=600&h=400&fit=crop&q=80",
        isVeg: false,
      },
      {
        name: "Vegetable Tahari",
        description:
          "A home-style yellow biryani packed with seasonal vegetables, soya chunks, and robust whole spices.",
        price: 269,
        image:
          "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?w=600&h=400&fit=crop&q=80",
        isVeg: true,
      },
    ],
  },
  {
    name: "Sides & Beverages",
    items: [
      {
        name: "Raita",
        description:
          "Cool yoghurt mixed with fresh cucumber, mint, and a touch of roasted cumin.",
        price: 69,
        image:
          "https://images.unsplash.com/photo-1625398407796-82650a8c135f?w=600&h=400&fit=crop&q=80",
        isVeg: true,
      },
      {
        name: "Mirchi Ka Salan",
        description:
          "Spicy green chillies simmered in a rich, tangy peanut and sesame gravy — the perfect biryani companion.",
        price: 99,
        image:
          "https://images.unsplash.com/photo-1505253758473-96b7015fcd40?w=600&h=400&fit=crop&q=80",
        isVeg: true,
      },
      {
        name: "Masala Chaas",
        description:
          "Refreshing buttermilk spiced with cumin, coriander, and a hint of green chilli.",
        price: 59,
        image:
          "https://images.unsplash.com/photo-1541658016709-82535e94bc69?w=600&h=400&fit=crop&q=80",
        isVeg: true,
      },
    ],
  },
];
