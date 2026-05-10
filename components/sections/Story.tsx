"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { SectionHeading } from "@/components/ui/section-heading";

export function Story() {
  const shouldReduceMotion = useReducedMotion();

  const fadeInLeft = {
    hidden: { opacity: 0, x: shouldReduceMotion ? 0 : -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: shouldReduceMotion ? 0 : 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
        delay: 0.2,
      },
    },
  };
  return (
    <section id="story" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInLeft}
            className="relative aspect-square rounded-4xl overflow-hidden border-l-6 border-primary"
          >
            <Image
              src="/matka-biryani-story.png"
              alt="Authentic matka biryani in a traditional clay pot"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent" />

            {/* Floating badge */}
            <div className="absolute bottom-6 left-6 right-6">
              <div className="rounded-2xl p-4 border border-border glass-premium backdrop-blur-sm">
                <p className="text-xs text-white uppercase tracking-wider font-medium mb-1">
                  Our Promise
                </p>
                <p className="text-sm font-semibold text-white/80">
                  100% Fresh. No shortcuts. No compromise.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInRight}
            className="space-y-6"
          >
            <SectionHeading
              badge="Our Story"
              title="A Legacy of"
              highlight="Flavour & Fire"
              highlightOnNewLine
              centered={false}
              className="mb-0"
            />

            <div className="space-y-4 text-muted leading-relaxed">
              <p>
                At Sheher-e-Biryani, we believe biryani is not just a dish — it
                is an art form passed down through generations. Our recipes are
                rooted in the royal kitchens of Hyderabad and Lucknow, where
                every pot tells a story of patience, precision, and passion.
              </p>
              <p>
                We use the time-honoured{" "}
                <span className="text-foreground font-semibold">
                  dum pukht technique
                </span>
                — sealing marinated meat and aged basmati rice in copper handis,
                slow-cooking over a gentle flame until every grain absorbs the
                essence of saffron, whole spices, and aromatic herbs.
              </p>
              <p>
                Our spices are sourced directly from farms across India — Kashmir
                saffron, Malabar peppercorns, and Rajasthani red chillies. No
                artificial colours. No shortcuts. Just pure, unadulterated
                flavour.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-4">
              {[
                { value: "100%", label: "Fresh Ingredients" },
                { value: "Dum", label: "Pukht Technique" },
              ].map((stat) => (
                <div key={stat.label} className="text-center lg:text-left">
                  <div className="text-2xl md:text-3xl font-heading font-bold text-primary">
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
