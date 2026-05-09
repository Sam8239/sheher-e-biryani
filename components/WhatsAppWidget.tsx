"use client";

import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { WHATSAPP_PHONE_HREF } from "@/constants/contact";

export function WhatsAppWidget() {
  const message = encodeURIComponent(
    "Hi Sheher-e-Biryani! I'd like to place an order. Please share the menu details."
  );
  const whatsappUrl = `https://wa.me/${WHATSAPP_PHONE_HREF}?text=${message}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.2 }}
      className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-[#25D366] flex items-center justify-center cursor-pointer focus:outline-none"
      aria-label="Chat on WhatsApp"
      title="Chat on WhatsApp"
    >
      <FaWhatsapp className="w-8 h-8 text-white" />
    </motion.a>
  );
}
