"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { MdArrowForward } from "react-icons/md";
import { ZOMATO_URL } from "@/constants/site";

export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const fadeUp = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: i === 0 ? 0.3 : 0.6,
        ease: "easeOut" as const
      },
    }),
  };
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/matka-biryani-hero.png"
          alt="Authentic matka biryani with saffron rice and aromatic spices in a traditional clay pot"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 z-20 flex items-center justify-center glass-premium backdrop-blur-[3px] backdrop-brightness-80" >
        <div className="container mx-auto px-6 md:px-12 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            className="max-w-3xl mx-auto"
          >
            {/* Heading */}
            <motion.h1
              custom={1}
              variants={fadeUp}
              className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold tracking-tight leading-[1.1] mb-6 text-white"
            >
              The Art of
              <br />
              <span className="text-primary text-shadow-xs text-shadow-white">Authentic Biryani</span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              custom={2}
              variants={fadeUp}
              className="mt-6 text-lg md:text-xl text-white max-w-xl mx-auto leading-relaxed mb-10 font-medium"
            >
              Experience authentic Matka Dum Biryani in Noida. Slow-cooked with premium spices in sealed clay handis, delivering royal flavours directly to you.
            </motion.p>

            {/* CTAs */}
            <motion.div
              custom={3}
              variants={fadeUp}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link href="#menu">
                <Button variant="accent">
                  Explore Our Menu
                  <MdArrowForward className="w-5 h-5" />
                </Button>
              </Link>
              <Link href={ZOMATO_URL} target="_blank" rel="noopener noreferrer">
                <Button variant="glass">
                  Order on Zomato
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
