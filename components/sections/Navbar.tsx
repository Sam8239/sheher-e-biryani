"use client";

import { useState } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent, useReducedMotion } from "framer-motion";
import { MdMenu, MdClose, MdArrowForward } from "react-icons/md";
import Link from "next/link";
import Image from "next/image";
import { navLinks } from "@/constants/navigation";
import { SITE_NAME, ZOMATO_URL } from "@/constants/site";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();
  const shouldReduceMotion = useReducedMotion();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    
    // Hide/show logic
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }

    // Color toggle logic
    if (latest > 100) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  });

  const textColor = "text-white";
  const logoInvert = "brightness-0 invert";

  return (
    <motion.header
      variants={{
        visible: { y: 0, opacity: 1 },
        hidden: { y: -100, opacity: 0 },
      }}
      animate={hidden && !isOpen ? "hidden" : "visible"}
      transition={{ duration: shouldReduceMotion ? 0 : 0.4, ease: "circOut" }}
      className="fixed top-4 left-4 right-4 z-50 pointer-events-none flex justify-center will-change-transform"
    >
      <div className="w-full max-w-7xl pointer-events-auto">
        <div 
          className="glass-premium rounded-full p-2 flex items-center justify-between transform-gpu"
          style={{ 
            backdropFilter: "blur(40px) saturate(180%)",
            WebkitBackdropFilter: "blur(40px) saturate(180%)"
          }}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 cursor-pointer group pl-3">
            <Image
              src="/logo-large.png"
              alt={SITE_NAME}
              width={130}
              height={32}
              className={cn("h-8 w-auto object-contain transition-all duration-300", logoInvert)}
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "text-sm font-semibold transition-colors duration-200 cursor-pointer tracking-[0.2em] uppercase hover:text-accent",
                  textColor
                )}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Action Button */}
          <div className="hidden md:block">
            <Link href={ZOMATO_URL} target="_blank" rel="noopener noreferrer">
              <Button variant="primary" className="rounded-full shadow-lg hover:shadow-primary/20 transition-all">
                Order Now
                <MdArrowForward className="w-4 h-4" />
              </Button>
            </Link>
          </div>

          {/* Mobile Toggle */}
          <Button
            onClick={() => setIsOpen(!isOpen)}
            variant="none"
            size="none"
            className={cn(
              "md:hidden p-2 transition-colors cursor-pointer",
              textColor
            )}
            aria-label="Toggle menu"
          >
            {isOpen ? <MdClose size={24} /> : <MdMenu size={24} />}
          </Button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute top-16 left-0 right-0 p-4 md:hidden pointer-events-none"
            >
              <div className="bg-black/80 backdrop-blur-xl border border-white/20 p-6 shadow-2xl pointer-events-auto flex flex-col gap-4 rounded-3xl">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-base font-semibold text-white hover:text-primary transition-colors py-2"
                  >
                    {link.name}
                  </Link>
                ))}
                <Link href={ZOMATO_URL} target="_blank" rel="noopener noreferrer" className="mt-2">
                  <Button variant="primary" className="w-full">
                    Order on Zomato
                  </Button>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
