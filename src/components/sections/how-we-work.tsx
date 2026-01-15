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
    title: "Оставляете заявку",
    description: "Звонок или форма на сайте",
  },
  {
    icon: MessageCircle,
    title: "Консультация",
    description: "Уточняем проблему по телефону",
  },
  {
    icon: Clock,
    title: "Приезд мастера",
    description: "В удобное для вас время",
  },
  {
    icon: Wrench,
    title: "Диагностика",
    description: "Определяем причину и стоимость",
  },
  {
    icon: CheckCircle,
    title: "Ремонт и гарантия",
    description: "Качественно и с ответственностью",
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
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4"
        >
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isLast = index === steps.length - 1;
            
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative text-center lg:text-left"
              >
                {/* Step Number & Icon */}
                <div className="flex flex-col items-center lg:items-start mb-6">
                  {/* Number Badge */}
                  <div className="relative mb-4">
                    <div className="w-16 h-16 flex items-center justify-center bg-secondary rounded-2xl">
                      <Icon className="w-7 h-7 text-foreground" strokeWidth={1.5} />
                    </div>
                    {/* Step number */}
                    <div className="absolute -top-2 -right-2 w-6 h-6 flex items-center justify-center bg-foreground text-background text-caption font-semibold rounded-full">
                      {index + 1}
                    </div>
                  </div>

                  {/* Arrow connector (hidden on mobile, last item) */}
                  {!isLast && (
                    <div className="hidden lg:block absolute top-8 left-full w-full">
                      <div className="flex items-center justify-center w-full px-2">
                        <div className="flex-1 h-px bg-border" />
                        <ArrowRight className="w-4 h-4 text-muted-foreground mx-1" />
                      </div>
                    </div>
                  )}
                </div>

                {/* Content */}
                <h3 className="text-heading-sm font-semibold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-body-sm text-muted-foreground">
                  {step.description}
                </p>
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
