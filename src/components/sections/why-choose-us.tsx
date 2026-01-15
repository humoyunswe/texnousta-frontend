/* ============================================================
   WHY CHOOSE US SECTION
   Premium layout with asymmetric design.
   Refined list with clear value propositions.
   ============================================================ */
"use client";


import { motion, Variants } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Check } from "lucide-react";

/* Reasons data */
const reasons = [
  {
    title: "Диагностика перед ремонтом",
    description: "Вы понимаете причину поломки и стоимость ДО начала работ",
  },
  {
    title: "Честные цены без сюрпризов",
    description: "Никаких «вдруг стало дороже» — фиксированные расценки",
  },
  {
    title: "Опытные мастера",
    description: "Реальные специалисты с подтверждённой квалификацией",
  },
  {
    title: "Гарантия на работы",
    description: "Мы отвечаем за результат — гарантия до 12 месяцев",
  },
];

/* Animation variants */
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export function WhyChooseUsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section 
      id="why-us" 
      className="py-12 md:py-16 bg-secondary/50" 
      ref={ref}
    >
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left - Photo Grid */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8 }}
          >
            {/* Photo Grid - 1 large horizontal, 3 small below */}
            <div className="flex flex-col gap-3">
              {/* Large photo - horizontal at top */}
              <div className="w-full relative rounded-3xl overflow-hidden shadow-lg">
                <img
                  src="/images/why-us/image.png"
                  alt="Ремонт техники"
                  className="w-full h-[400px] object-cover"
                />
              </div>
              
              {/* Bottom row - 3 small photos */}
              <div className="flex gap-3">
                <div className="flex-1 relative rounded-3xl overflow-hidden shadow-lg">
                  <img
                    src="/images/why-us/image copy.png"
                    alt="Диагностика"
                    className="w-full h-[180px] object-cover"
                  />
                </div>
                
                <div className="flex-1 relative rounded-3xl overflow-hidden shadow-lg">
                  <img
                    src="/images/why-us/image copy 2.png"
                    alt="Профессиональные инструменты"
                    className="w-full h-[180px] object-cover"
                  />
                </div>
                
                <div className="flex-1 relative rounded-3xl overflow-hidden shadow-lg">
                  <img
                    src="/images/why-us/image copy 3.png"
                    alt="Качественный ремонт"
                    className="w-full h-[180px] object-cover"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <div>
            {/* Section Label */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-sm text-gray-600 uppercase tracking-widest mb-3"
            >
              О НАС
            </motion.p>

            {/* Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6"
            >
              Почему выбирают<br />
              <span className="text-gray-600">texnousta.uz</span>
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-body-lg text-muted-foreground mb-10"
            >
              Мы не просто «ремонтируем» — мы решаем проблему качественно и надёжно.
            </motion.p>

            {/* Reasons List */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="space-y-6"
            >
              {reasons.map((reason, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex gap-4"
                >
                  {/* Check Icon */}
                  <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center bg-foreground rounded-full mt-0.5">
                    <Check className="w-3.5 h-3.5 text-background" strokeWidth={3} />
                  </div>

                  {/* Text */}
                  <div>
                    <h4 className="text-heading-sm font-semibold text-foreground mb-1">
                      {reason.title}
                    </h4>
                    <p className="text-body-sm text-muted-foreground">
                      {reason.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
