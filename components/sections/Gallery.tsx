"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { SectionHeading } from "@/components/ui/section-heading";
import { galleryImages } from "@/constants/gallery";

export function Gallery() {
  const shouldReduceMotion = useReducedMotion();

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: shouldReduceMotion ? 0 : 0.1 },
    },
  };

  const item = {
    hidden: { opacity: 0, scale: shouldReduceMotion ? 1 : 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" as const },
    },
  };
  return (
    <section id="gallery" className="py-16 md:py-32 bg-background">
      <div className="container mx-auto px-6 md:px-12">
        {/* Header */}
        <SectionHeading
          badge="Gallery"
          title="A Feast for the"
          highlight="Eyes"
          description="Every dish is a visual masterpiece - crafted to delight all your senses."
        />

        {/* Bento Grid - Responsive Layout */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 md:grid-rows-2 h-auto md:h-125"
        >
          {galleryImages.slice(0, 5).map((image, i) => (
            <motion.div
              key={i}
              variants={item}
              className={cn(
                "group relative overflow-hidden rounded-2xl md:rounded-3xl border border-white/10",
                i === 0 ? "col-span-2 row-span-2 md:col-span-2 md:row-span-2 min-h-[280px] md:min-h-0" : "col-span-1 row-span-1 aspect-square md:aspect-auto"
              )}
            >
              <div className="relative w-full h-full">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  priority={i < 4}
                />
                
                {/* Overlay with description on hover */}
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6">
                  <p className="text-white text-sm font-medium leading-relaxed translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    {image.alt}
                  </p>
                </div>

                {/* Subtle glass effect border on hover */}
                <div className="absolute inset-0 rounded-3xl border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
