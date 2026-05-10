"use client";

import { motion } from "framer-motion";
import { FaInstagram, FaFacebookF, FaWhatsapp } from "react-icons/fa";
import { MdLocationOn, MdPhone, MdEmail } from "react-icons/md";
import Link from "next/link";
import Image from "next/image";
import { SITE_NAME, ZOMATO_URL, SOCIAL_LINKS, GOOGLE_BUSINESS_URL } from "@/constants/site";
import {
  CONTACT_EMAIL,
  CONTACT_PHONE,
  CONTACT_PHONE_HREF,
  CONTACT_ADDRESS_SHORT,
  WHATSAPP_PHONE_HREF,
} from "@/constants/contact";
import { navLinks } from "@/constants/navigation";
import { Button } from "@/components/ui/button";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const whatsappUrl = `https://wa.me/${WHATSAPP_PHONE_HREF}`;

  return (
    <footer className="bg-surface text-muted relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        {/* Main Content */}
        <div className="py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            <Link href="/" className="inline-block">
              <Image
                src="/logo-large-vertical.png"
                alt={SITE_NAME}
                width={160}
                height={160}
                className="h-32 w-auto object-contain"
                style={{ width: "auto", height: "auto" }}
              />
            </Link>
            <p className="mt-3 text-primary/60 leading-relaxed max-w-md mx-auto lg:mx-0">
              Authentic dum pukht biryani crafted with premium spices and served
              with love. Experience the royal taste of tradition.
            </p>

            {/* Links and CTA Wrapper */}
            <div className="mt-8 flex flex-col lg:flex-row items-center gap-8">
              {/* Social Links */}
              <div className="flex gap-3">
                {[
                  { icon: <FaInstagram className="w-4 h-4" />, href: SOCIAL_LINKS.instagram, label: "Instagram" },
                  { icon: <FaFacebookF className="w-4 h-4" />, href: SOCIAL_LINKS.facebook, label: "Facebook" },
                  { icon: <FaWhatsapp className="w-4 h-4" />, href: whatsappUrl, label: "WhatsApp" },
                ].map((social) => (
                  <Link
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted hover:text-primary hover:border-primary/30 transition-colors duration-200 cursor-pointer"
                  >
                    {social.icon}
                  </Link>
                ))}
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href={ZOMATO_URL} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                  <Button variant="accent" className="w-full">
                    Order on Zomato
                  </Button>
                </Link>
                <Link href={GOOGLE_BUSINESS_URL} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                  <Button className="w-full">
                    Review on Google
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col items-center md:items-start text-center md:text-left"
          >
            <h4 className="text-sm font-semibold text-foreground tracking-wide mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted hover:text-primary transition-colors duration-200 cursor-pointer"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-sm text-muted hover:text-primary transition-colors duration-200 cursor-pointer"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-sm text-muted hover:text-primary transition-colors duration-200 cursor-pointer"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col items-center md:items-start text-center md:text-left"
          >
            <h4 className="text-sm font-semibold text-foreground tracking-wide mb-5">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MdLocationOn className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span className="text-sm text-muted">{CONTACT_ADDRESS_SHORT}</span>
              </li>
              <li className="flex items-start gap-3">
                <MdPhone className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <Link
                  href={`tel:${CONTACT_PHONE_HREF}`}
                  className="text-sm text-muted hover:text-primary transition-colors duration-200 cursor-pointer"
                >
                  {CONTACT_PHONE}
                </Link>
              </li>
              <li className="flex items-start gap-3">
                <MdEmail className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <Link
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="text-sm text-muted hover:text-primary transition-colors duration-200 cursor-pointer"
                >
                  {CONTACT_EMAIL}
                </Link>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border py-4">
          <p className="text-xs text-primary text-center">
            © {currentYear} {SITE_NAME}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
