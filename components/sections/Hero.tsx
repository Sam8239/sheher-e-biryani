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
      transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" as const },
    }),
  };
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=1920&h=1080&fit=crop&q=80"
          alt="Traditional dum biryani"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        {/* Dark overlay for text readability and smooth blend into the next section */}
        <div className="absolute inset-0 bg-black/70 z-10 backdrop-blur-[3px]" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 md:px-12 relative z-20 text-center py-32">
        <motion.div
          initial="hidden"
          animate="visible"
          className="max-w-3xl mx-auto"
        >
          {/* Badge */}
          <motion.div custom={0} variants={fadeUp}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-white text-xs font-medium tracking-wider uppercase mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              Authentic Dum Pukht Biryani
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            custom={1}
            variants={fadeUp}
            className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white tracking-tight leading-[1.1] mb-6 drop-shadow-md"
          >
            The Art of
            <br />
            <span className="text-accent">Authentic Biryani</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            custom={2}
            variants={fadeUp}
            className="mt-6 text-lg md:text-xl text-white/90 max-w-xl mx-auto leading-relaxed mb-10 drop-shadow-sm"
          >
            Slow-cooked with premium spices in sealed copper handis.
            Every grain tells a story of heritage and craft.
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

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-1.5"
        >
          <div className="w-1.5 h-2.5 rounded-full bg-white/50" />
        </motion.div>
      </motion.div>
    </section>
  );
}
