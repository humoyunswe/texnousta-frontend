/* ============================================================
   CTA SECTION
   ============================================================ */

"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Phone, ArrowRight } from "lucide-react";

export function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-12 md:py-16 bg-foreground" ref={ref}>
        
      <div className="container mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-background mb-6">Не откладывайте ремонт</h2>
          <p className="text-body-lg text-background/70 mb-10">Позвоните прямо сейчас — мастер свяжется с вами в ближайшее время.</p>
          <a href="tel:+998935960055" className="group inline-flex items-center gap-3 px-10 py-5 bg-background text-foreground rounded-full text-heading-sm font-semibold hover:opacity-90 transition-opacity premium-press">
            <Phone className="w-5 h-5" />Вызвать мастера<ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </a>
          <div className="grid grid-cols-3 gap-8 mt-16 pt-10 border-t border-background/20">
            <div><div className="text-display-sm font-semibold text-background">24/7</div><p className="text-body-sm text-background/60">Круглосуточно</p></div>
            <div><div className="text-display-sm font-semibold text-background">100%</div><p className="text-body-sm text-background/60">Гарантия</p></div>
            <div><div className="text-display-sm font-semibold text-background">500+</div><p className="text-body-sm text-background/60">Клиентов</p></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
