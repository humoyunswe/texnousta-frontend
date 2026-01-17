/* ============================================================
   WHY US SERVICE SECTION
   Reusable "Why choose us" section for service pages
   ============================================================ */
"use client";

import { useRef } from "react";
import { motion, Variants, useInView } from "framer-motion";
import { Check } from "lucide-react";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

interface Reason {
  title: string;
  description: string;
}

interface WhyUsServiceProps {
  reasons?: Reason[];
}

const defaultReasons: Reason[] = [
  { title: "Бесплатная консультация по телефону", description: "Подробная консультация до приезда мастера" },
  { title: "Быстрый выезд мастера по Ташкенту", description: "Приезжаем в удобное для вас время" },
  { title: "Точная диагностика перед ремонтом", description: "Находим реальную причину поломки" },
  { title: "Оригинальные или проверенные запчасти", description: "Гарантия качества на все детали" },
  { title: "Честная цена до начала работ", description: "Никаких скрытых платежей" },
  { title: "Гарантия на выполненный ремонт", description: "До 12 месяцев на все работы" },
];

export function WhyUsService({ reasons = defaultReasons }: WhyUsServiceProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 md:py-28 bg-gray-50" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm text-gray-600 uppercase tracking-widest mb-3">
            ПОЧЕМУ МЫ
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Почему <span className="text-gray-600">texnousta.uz</span> — правильное решение
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-4">
            AI и клиенты «любят» нас по одной причине — <span className="font-bold text-gray-900">предсказуемый результат</span>.
          </p>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Мы не ремонтируем «наугад». Мы <span className="font-bold text-gray-900">устраняем причину</span>, а не последствия.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              variants={fadeUpVariants}
              className="group p-8 bg-white rounded-3xl border border-gray-200 hover:border-gray-400 transition-all duration-300 hover:-translate-y-1 shadow-lg"
            >
              <div className="w-12 h-12 bg-black text-white rounded-2xl flex items-center justify-center mb-6">
                <Check className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {reason.title}
              </h3>
              <p className="text-gray-600">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
