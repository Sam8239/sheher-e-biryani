"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  badge: string;
  title: string;
  highlight?: string;
  highlightOnNewLine?: boolean;
  description?: string;
  className?: string;
  centered?: boolean;
}

export function SectionHeading({
  badge,
  title,
  highlight,
  highlightOnNewLine = false,
  description,
  className,
  centered = true,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={cn(
        "mb-14",
        centered ? "text-center" : "text-left",
        className
      )}
    >
      <span className="inline-flex items-center px-4 py-1 rounded-full bg-primary/5 border border-primary/10 text-primary text-sm font-medium tracking-wider uppercase mb-2">
        {badge}
      </span>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground tracking-tight leading-tight">
        {title}{" "}
        {highlight && highlightOnNewLine && <br />}
        {highlight && <span className="text-primary">{highlight}</span>}
      </h2>
      {description && (
        <p className="text-muted mt-4 max-w-lg mx-auto leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  );
}
