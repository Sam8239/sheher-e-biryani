import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Story } from "@/components/sections/Story";
import { Menu } from "@/components/sections/Menu";
import { Gallery } from "@/components/sections/Gallery";
import { OrderCTA } from "@/components/sections/OrderCTA";
import { FAQ } from "@/components/sections/FAQ";
import { Footer } from "@/components/sections/Footer";
import { WhatsAppWidget } from "@/components/WhatsAppWidget";
import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <Story />
      <Menu />
      <Gallery />
      <OrderCTA />
      <FAQ />
      <Footer />
      <WhatsAppWidget />
    </main>
  );
}
