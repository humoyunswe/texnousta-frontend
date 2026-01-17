/* ============================================================
   HOME REPAIR SECTION
   Ремонт на дому - удобство для клиентов
   ============================================================ */
"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface HomeRepairSectionProps {
  image?: string;
  title?: string;
  altText?: string;
}

export function HomeRepairSection({ 
  image = "/images/hero/washin-machine.png",
  title = "Ремонт стиральных машин на дому",
  altText = "Ремонт стиральной машины на дому"
}: HomeRepairSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const noNeed = [
    "Искать грузчиков",
    "Вывозить тяжёлую технику",
    "Ждать неделями",
  ];

  return (
    <section className="py-20 md:py-28 bg-background" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <p className="text-sm text-muted-foreground uppercase tracking-widest mb-3">
              УДОБНО
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-8">
              {title}
            </h2>

            <div className="mb-8">
              <p className="text-lg text-muted-foreground mb-6">
                Вам не нужно:
              </p>
              <div className="space-y-4">
                {noNeed.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                    className="flex items-center gap-4"
                  >
                    <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center">
                      <span className="text-foreground font-medium">✕</span>
                    </div>
                    <span className="text-lg text-foreground">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.6 }}
              className="text-lg text-muted-foreground p-6 bg-secondary/50 rounded-2xl border border-border"
            >
              Мастер приедет к вам, проведёт диагностику и сразу выполнит ремонт, если это возможно.
            </motion.p>
          </motion.div>

          {/* Right - Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl border border-border overflow-hidden shadow-lg">
              <img
                src={image}
                alt={altText}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/5 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/5 rounded-full blur-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
