/* ============================================================
   SERVICES SECTION (WHAT WE REPAIR)
   Clean grid layout with premium hover effects.
   Monochrome icons, refined typography.
   ============================================================ */
"use client";


import { motion, Variants } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

/* Service item type */
interface Service {
  title: string;
  image: string;
  description: string;
}

/* Services data */
const services: Service[] = [
  {
    title: "Стиральные машины",
    image: "/images/services/washing-machine.png",
    description: "Любые модели и бренды",
  },
  {
    title: "Холодильники и морозильники",
    image: "/images/services/refrigerator.png",
    description: "Диагностика и ремонт",
  },
  {
    title: "Кондиционеры и сплит-системы",
    image: "/images/services/air-conditioner.png",
    description: "Заправка и обслуживание",
  },
  {
    title: "Посудомоечные машины",
    image: "/images/services/dishwasher.png",
    description: "Все виды неисправностей",
  },
  {
    title: "Плиты и духовки",
    image: "/images/services/oven.png",
    description: "Газовые и электрические",
  },
  {
    title: "Мелкая техника",
    image: "/images/services/small-app.png",
    description: "Пылесосы, кофемашины и др.",
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
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export function WhatWeRepairSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-12 md:py-16 bg-background" ref={ref}>
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <p className="text-sm text-gray-600 uppercase tracking-widest mb-3">
            УСЛУГИ
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Что мы ремонтируем
          </h2>
          <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
            Ремонтируем все виды бытовой техники. Работаем с популярными брендами и моделями.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => {
            return (
              <motion.div
                key={service.title}
                variants={itemVariants}
                className="group relative overflow-hidden bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                </div>

                {/* Content */}
                <div className="relative p-6 bg-white">
                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-gray-600">
                    {service.description}
                  </p>

                  {/* Hover Indicator */}
                  <div className="absolute bottom-6 right-6 w-10 h-10 flex items-center justify-center bg-gray-900 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg 
                      width="16" 
                      height="16" 
                      viewBox="0 0 16 16" 
                      fill="none" 
                      className="text-white"
                    >
                      <path 
                        d="M1 15L15 1M15 1H4M15 1V12" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-body-md text-muted-foreground">
            Если техника не включается, шумит, течёт или плохо работает — <br className="hidden sm:block" />
            <span className="text-foreground font-medium">мы знаем, как это исправить.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
