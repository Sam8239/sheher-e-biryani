"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MdAdd, MdRemove } from "react-icons/md";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { SectionHeading } from "@/components/ui/section-heading";
import { faqs } from "@/constants/faq";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section id="faq" className="py-16 md:py-32 bg-background">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <SectionHeading 
            badge="FAQ"
            title="Frequently Asked"
            highlight="Questions"
            className="mb-14"
          />

          {/* Accordion items with border and background hierarchy */}
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                layout
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ backgroundColor: "var(--color-background)" }}
                viewport={{ once: true }}
                transition={{ 
                  delay: i * 0.05, 
                  type: "spring", 
                  stiffness: 300, 
                  damping: 30 
                }}
                className="rounded-2xl bg-surface border border-border overflow-hidden transform-gpu"
              >
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex items-center justify-between p-4 text-left cursor-pointer group outline-hidden"
                  aria-expanded={openIndex === i}
                >
                  <span className={cn(
                    "text-base font-bold transition-colors duration-300 pr-4",
                    openIndex === i ? "text-primary" : "text-foreground/90 group-hover:text-primary"
                  )}>
                    {faq.question}
                  </span>
                  <motion.div 
                    animate={{ 
                      rotate: openIndex === i ? 180 : 0,
                      borderColor: openIndex === i ? "var(--color-primary)" : "var(--color-border)",
                      color: openIndex === i ? "var(--color-primary)" : "var(--color-muted)",
                      backgroundColor: openIndex === i ? "var(--color-surface)" : "rgba(0, 0, 0, 0)"
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    className="shrink-0 w-10 h-10 rounded-full border flex items-center justify-center"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ 
                        height: { type: "spring", stiffness: 300, damping: 30 },
                        opacity: { duration: 0.2 }
                      }}
                    >
                      <div className="p-4 border-t border-border">
                        <p className="text-base text-muted/80 leading-relaxed font-medium max-w-2xl">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
