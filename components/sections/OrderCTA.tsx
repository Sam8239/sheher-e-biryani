"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MdArrowForward } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { ZOMATO_URL } from "@/constants/site";
import { WHATSAPP_PHONE_HREF, WHATSAPP_MESSAGE } from "@/constants/contact";

export function OrderCTA() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_PHONE_HREF}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/matka-biryani-hero.png"
          alt="Authentic matka biryani"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 glass-premium backdrop-blur-[3px] backdrop-brightness-80" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto transform-gpu"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white tracking-tight leading-tight mb-6 drop-shadow-2xl">
            Ready to Experience
            <br />
            <span className="text-accent text-shadow-xs text-shadow-black">
              Sheher-e-Biryani?
            </span>
          </h2>
          <p className="text-white/90 text-lg mb-10 max-w-lg mx-auto font-medium drop-shadow-lg">
            Order directly through Zomato for quick delivery, or reach out to us
            on WhatsApp for bulk orders and catering.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href={ZOMATO_URL} target="_blank" rel="noopener noreferrer">
              <Button variant="accent">
                Order on Zomato
                <MdArrowForward className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <Button variant="glass">
                <FaWhatsapp className="w-5 h-5" />
                WhatsApp Us
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
