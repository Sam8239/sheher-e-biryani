export interface GalleryImage {
  src: string;
  alt: string;
  span?: "tall" | "wide";
}

export const galleryImages: GalleryImage[] = [
  {
    src: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=800&h=600&fit=crop&q=90",
    alt: "Aromatic chicken dum biryani served in a traditional handi",
    span: "tall",
  },
  {
    src: "https://images.unsplash.com/photo-1642821373181-696a54913e93?w=600&h=400&fit=crop&q=90",
    alt: "Rich mutton biryani with saffron-infused rice",
  },
  {
    src: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?w=600&h=400&fit=crop&q=90",
    alt: "Close-up of succulent meat and spice-infused long-grain basmati rice",
  },
  {
    src: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?w=800&h=600&fit=crop&q=90",
    alt: "Aromatic Hyderabadi biryani with caramelized onions and fresh mint",
    span: "wide",
  },
  {
    src: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=600&h=400&fit=crop&q=90",
    alt: "Fragrant biryani rice with whole spices and fried onions",
  },
  {
    src: "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?w=600&h=400&fit=crop&q=90",
    alt: "Vegetarian biryani with paneer and fresh herbs",
    span: "tall",
  },
  {
    src: "https://images.unsplash.com/photo-1512132411229-c30391241dd8?w=800&h=800&fit=crop&q=90",
    alt: "Traditional handi biryani with steam and aromatic spices",
    span: "tall",
  },
  {
    src: "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?w=800&h=400&fit=crop&q=90",
    alt: "Layered vegetable biryani with saffron and fresh cilantro",
    span: "wide",
  },
];
