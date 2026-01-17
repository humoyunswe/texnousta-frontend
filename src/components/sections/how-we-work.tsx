/* ============================================================
   HOW WE WORK SECTION
   Clean process visualization with numbered steps.
   Premium animations and refined typography.
   ============================================================ */

"use client";

import { motion, Variants } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Phone, MessageCircle, Clock, Wrench, CheckCircle, ArrowRight } from "lucide-react";

/* Steps data */
const steps = [
  {
    icon: Phone,
    title: "Оставьте заявку или позвоните",
    description: "Звонок или форма на сайте",
  },
  {
    icon: MessageCircle,
    title: "Опишите проблему",
    description: "Консультация по телефону",
  },
  {
    icon: Clock,
    title: "Мастер приедет в удобное время",
    description: "Выбираете удобное для вас время",
  },
  {
    icon: CheckCircle,
    title: "Диагностика → ремонт → результат",
    description: "Качественно и с гарантией",
  },
];

/* Animation variants */
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export function HowWeWorkSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section 
      id="how-it-works" 
      className="py-12 md:py-16 bg-background" 
      ref={ref}
    >
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-sm text-gray-600 uppercase tracking-widest mb-3">
            ПРОЦЕСС
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Как мы работаем
          </h2>
          <p className="text-body-lg text-muted-foreground">
            Без лишних слов. Без потери времени.
          </p>
        </motion.div>

        {/* Steps Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6"
        >
          {steps.map((step, index) => {
            const Icon = step.icon;
            
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative text-center"
              >
                {/* Step Number */}
                <div className="absolute -top-3 -left-3 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold z-10">
                  {index + 1}
                </div>
                
                <div className="p-6 bg-secondary/50 rounded-3xl border border-border h-full">
                  <div className="w-14 h-14 bg-background rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Icon className="w-7 h-7 text-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {step.description}
                  </p>
                </div>

                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-border" />
                )}
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-16"
        >
          <a
            href="tel:+998935960055"
            className="group flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full text-body-md font-medium hover:opacity-90 transition-opacity premium-press"
          >
            <Phone className="w-4 h-4" />
            Вызвать мастера
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="tel:+998935960055"
            className="flex items-center gap-2 px-8 py-4 bg-card border border-border text-foreground rounded-full text-body-md font-medium hover:bg-secondary transition-colors premium-press"
          >
            <MessageCircle className="w-4 h-4" />
            Получить консультацию
          </a>
        </motion.div>
      </div>
    </section>
  );
}
