"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MdAdd, MdRemove } from "react-icons/md";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { faqs } from "@/constants/faq";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section id="faq" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <SectionHeading 
            badge="FAQ"
            title="Frequently Asked"
            highlight="Questions"
            className="mb-14"
          />

          {/* Accordion */}
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.3 }}
                className="rounded-xl border border-border bg-surface overflow-hidden"
              >
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex items-center justify-between p-3 text-left cursor-pointer group"
                  aria-expanded={openIndex === i}
                >
                  <span className="text-base font-semibold text-foreground group-hover:text-primary transition-colors duration-200 pr-4">
                    {faq.question}
                  </span>
                  <span className="shrink-0 w-7 h-7 rounded-full bg-primary/5 border border-primary/10 flex items-center justify-center text-primary">
                    {openIndex === i ? (
                      <MdRemove className="w-4 h-4" />
                    ) : (
                      <MdAdd className="w-4 h-4" />
                    )}
                  </span>
                </button>

                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-5">
                        <p className="text-sm text-muted leading-relaxed">
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
