export interface GalleryImage {
  src: string;
  alt: string;
  span?: "tall" | "wide";
}

export const galleryImages: GalleryImage[] = [
  {
    src: "/gallery-1.png",
    alt: "Overhead shot of rustic matka biryani in a traditional clay pot",
    span: "tall",
  },
  {
    src: "/gallery-2.png",
    alt: "Macro shot of steaming matka biryani with tender mutton",
  },
  {
    src: "/gallery-3.png",
    alt: "Opening the dough-sealed lid of a traditional dum pukht matka biryani",
  },
  {
    src: "/gallery-4.png",
    alt: "Premium 3D render style shot of authentic matka biryani",
    span: "wide",
  },
  {
    src: "/gallery-5.png",
    alt: "Signature Sheher-e-Biryani with saffron-infused rice and traditional garnishes",
  },
];
