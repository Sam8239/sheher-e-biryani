"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { menuCategories } from "@/constants/menu";
import { ZOMATO_URL } from "@/constants/site";
import { MdArrowForward } from "react-icons/md";

export function Menu() {
  const [activeCategory, setActiveCategory] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: shouldReduceMotion ? 0 : 0.08 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" as const } },
  };

  return (
    <section id="menu" className="py-24 md:py-32 bg-surface">
      <div className="container mx-auto px-6 md:px-12">
        {/* Header */}
        <SectionHeading
          badge="Our Menu"
          title="Crafted with"
          highlight="Love & Spice"
          description="Every dish is prepared fresh using the finest ingredients and time-tested recipes."
        />

        {/* Category Tabs */}
        <div className="flex justify-start md:justify-center gap-2 mb-12 overflow-x-auto pb-2 no-scrollbar px-6 -mx-6 md:px-0 md:mx-0">
          {menuCategories.map((cat, i) => (
            <Button
              key={cat.name}
              onClick={() => setActiveCategory(i)}
              variant="none"
              size="none"
              className={`relative px-5 py-2.5 rounded-full text-sm font-medium cursor-pointer transition-colors duration-200 whitespace-nowrap border ${
                activeCategory === i
                  ? "text-primary-foreground border-transparent"
                  : "text-muted hover:text-foreground bg-background border-border"
              }`}
            >
              {activeCategory === i && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-primary rounded-full"
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                />
              )}
              <span className="relative z-10">{cat.name}</span>
            </Button>
          ))}
        </div>

        {/* Menu Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            variants={container}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, transition: { duration: 0.15 } }}
            className="grid grid-cols-1 md:grid-cols-2 gap-5"
          >
            {menuCategories[activeCategory].items.map((menuItem) => (
              <motion.div
                key={menuItem.name}
                variants={item}
                className="group flex gap-5 bg-background rounded-3xl border border-border p-4 hover:border-primary/20 transition-colors duration-200 cursor-pointer"
              >
                {/* Image */}
                <div className="relative w-28 h-28 md:w-32 md:h-32 rounded-xl overflow-hidden shrink-0">
                  <Image
                    src={menuItem.image}
                    alt={menuItem.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="128px"
                  />
                  {menuItem.isBestseller && (
                    <div className="absolute top-2 left-2 px-2 py-0.5 rounded-full bg-accent text-[10px] font-bold text-accent-foreground uppercase tracking-wider">
                      Bestseller
                    </div>
                  )}
                </div>

                {/* Details */}
                <div className="flex-1 flex flex-col justify-between py-1">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      {/* Veg / Non-Veg indicator */}
                      <span
                        className={`w-4 h-4 rounded-sm border-2 flex items-center justify-center shrink-0 ${
                          menuItem.isVeg
                            ? "border-green-600"
                            : "border-red-600"
                        }`}
                      >
                        <span
                          className={`w-2 h-2 rounded-full ${
                            menuItem.isVeg ? "bg-green-600" : "bg-red-600"
                          }`}
                        />
                      </span>
                      <h3 className="text-base font-semibold text-foreground leading-snug">
                        {menuItem.name}
                      </h3>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                      {menuItem.description}
                    </p>
                  </div>
                  <div className="mt-3">
                    <span className="text-lg font-heading font-bold text-primary">
                      ₹{menuItem.price}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Link href={ZOMATO_URL} target="_blank" rel="noopener noreferrer">
            <Button variant="primary">
              Order Now on Zomato
              <MdArrowForward className="w-5 h-5" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
