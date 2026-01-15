/* ============================================================
   SERVICE AREA SECTION
   Clean coverage visualization with minimal icons.
   Premium card design with subtle hover effects.
   ============================================================ */
"use client";


import { motion, Variants } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Building2, Home } from "lucide-react";

/* Areas data */
const areas = [
  {
    icon: MapPin,
    title: "Ташкент",
    description: "Все районы города",
  },
  {
    icon: Building2,
    title: "Ташкентская область",
    description: "Работаем в пригородах",
  },
  {
    icon: Home,
    title: "Выезд на дом",
    description: "Дом, квартира или офис",
  },
];

/* Animation variants */
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

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export function ServiceAreaSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-12 md:py-16 bg-secondary/50" ref={ref}>
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-sm text-gray-600 uppercase tracking-widest mb-3">
            ГЕОГРАФИЯ
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Работаем по всему Ташкенту
          </h2>
          <p className="text-body-lg text-muted-foreground">
            Мы обслуживаем весь город и область
          </p>
        </motion.div>

        {/* Areas Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12"
        >
          {areas.map((area, index) => {
            const Icon = area.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group p-8 bg-background border border-border rounded-2xl text-center hover:border-foreground/20 hover:shadow-premium transition-all duration-300 premium-hover"
              >
                {/* Icon */}
                <div className="w-14 h-14 mx-auto mb-6 flex items-center justify-center bg-secondary rounded-xl group-hover:bg-foreground group-hover:text-background transition-colors duration-300">
                  <Icon className="w-7 h-7" strokeWidth={1.5} />
                </div>

                {/* Title */}
                <h3 className="text-heading-sm font-semibold text-foreground mb-2">
                  {area.title}
                </h3>

                {/* Description */}
                <p className="text-body-sm text-muted-foreground">
                  {area.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Contact Form */}
        <motion.div
          id="service-area-form"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-lg mx-auto mt-16"
        >
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Вызвать мастера</h3>
            
            <form className="space-y-4">
              {/* Name Input */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Ваше имя</label>
                <input
                  type="text"
                  placeholder="Введите ваше имя"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-gray-400 focus:bg-white transition-all"
                />
              </div>
              
              {/* Phone Input */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Номер телефона</label>
                <div className="flex items-center gap-3 px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus-within:border-gray-400 focus-within:bg-white transition-all">
                  <div className="flex items-center gap-2 pr-3 border-r border-gray-200">
                    <span className="text-lg">🇺🇿</span>
                    <span className="text-sm text-gray-600 font-medium">+998</span>
                  </div>
                  <input
                    type="tel"
                    placeholder="00-000-0000"
                    className="flex-1 bg-transparent text-gray-900 placeholder:text-gray-400 focus:outline-none"
                  />
                </div>
              </div>

              {/* Problem Input */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Опишите проблему</label>
                <textarea
                  placeholder="Расскажите, что случилось с вашей техникой"
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-gray-400 focus:bg-white transition-all resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full group flex items-center justify-center gap-2 px-6 py-4 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-colors shadow-md"
              >
                Вызвать мастера
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="transition-transform group-hover:translate-x-1">
                  <path d="M1 8H15M15 8L8 1M15 8L8 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </form>

            {/* Trust indicator */}
            <p className="mt-6 text-center text-sm text-gray-600">
              Бесплатная консультация • Без скрытых доплат
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
