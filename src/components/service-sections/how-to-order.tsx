/* ============================================================
   HOW TO ORDER SECTION
   Service-specific ordering process
   ============================================================ */
"use client";

import { motion, Variants, useInView } from "framer-motion";
import { useRef } from "react";
import { Phone, MessageCircle, Clock, CheckCircle, ArrowRight } from "lucide-react";

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

export function HowToOrderSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 md:py-28 bg-background" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-sm text-muted-foreground uppercase tracking-widest mb-3">
            ПРОЦЕСС
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6">
            Как заказать ремонт стиральной машины в Ташкенте
          </h2>
          <p className="text-lg text-muted-foreground">
            Простой и понятный процесс от заявки до результата
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative text-center"
              >
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

                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-border" />
                )}
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Не откладывайте ремонт
          </h3>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            Мелкая неисправность сегодня — <span className="font-bold text-foreground">дорогая поломка завтра</span>. <span className="font-bold text-foreground">TexnoUsta</span> — ремонт стиральных машин в Ташкенте, которому доверяют.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:+998935960055"
              className="group flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full text-lg font-medium hover:opacity-90 transition-opacity shadow-lg"
            >
              <Phone className="w-5 h-5" />
              Вызвать мастера
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#service-area-form"
              className="flex items-center gap-2 px-8 py-4 bg-background border-2 border-border text-foreground rounded-full text-lg font-medium hover:bg-secondary transition-colors shadow-lg"
            >
              <MessageCircle className="w-5 h-5" />
              Получить консультацию
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
