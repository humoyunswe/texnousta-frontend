/* ============================================================
   WHAT WE REPAIR & PRICING SECTION
   Types of machines we repair and pricing information
   ============================================================ */
"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check } from "lucide-react";

interface WhatWeRepairPricingProps {
  types?: string[];
  priceFactors?: string[];
  title?: string;
}

const defaultTypes = [
  "Автоматические и полуавтоматические",
  "С вертикальной и фронтальной загрузкой",
  "Старые и новые модели",
  "Все популярные бренды: Samsung, LG, Bosch, Ariston",
];

const defaultPriceFactors = [
  "характера поломки",
  "сложности ремонта",
  "необходимости замены деталей",
];

export function WhatWeRepairPricing({ 
  types = defaultTypes,
  priceFactors = defaultPriceFactors,
  title = "Какие стиральные машины мы ремонтируем"
}: WhatWeRepairPricingProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 md:py-28 bg-secondary/50" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* What we repair */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm text-muted-foreground uppercase tracking-widest mb-3">
              ТИПЫ МАШИН
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-8">
              {title}
            </h2>
            <div className="space-y-4">
              {types.map((type, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="flex items-center gap-4 p-4 bg-background rounded-2xl border border-border"
                >
                  <div className="w-10 h-10 bg-primary text-primary-foreground rounded-xl flex items-center justify-center shrink-0">
                    <Check className="w-5 h-5" />
                  </div>
                  <span className="text-foreground font-medium">{type}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Pricing */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-sm text-muted-foreground uppercase tracking-widest mb-3">
              СТОИМОСТЬ
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-8">
              Стоимость ремонта
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Цена зависит от:
            </p>
            <div className="space-y-4 mb-8">
              {priceFactors.map((factor, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center text-foreground font-semibold">
                    {index + 1}
                  </div>
                  <span className="text-foreground">{factor}</span>
                </motion.div>
              ))}
            </div>
            <div className="p-6 bg-primary text-primary-foreground rounded-2xl">
              <p className="text-lg font-medium">
                Никаких скрытых платежей — стоимость согласовывается заранее.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
