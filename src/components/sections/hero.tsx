/* ============================================================
   HERO SECTION
   Premium monochrome hero with elegant animations.
   Full-screen impact, refined typography, smooth reveals.
   ============================================================ */
"use client";


import { useState } from "react";
import { motion, Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";


/* Animation variants */
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
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
      duration: 0.8,
    },
  },
};

interface HeroData {
  badge?: string;
  title: string;
  subtitle: string;
  description: string;
  image?: string;
}

interface HeroSectionProps {
  data?: HeroData;
}

export function HeroSection({ data }: HeroSectionProps = {}) {
  const [phoneNumber, setPhoneNumber] = useState("");

  // Default data if none provided
  const heroData = data || {
    badge: "Выезд мастера в день обращения",
    title: "Ремонт бытовой техники в Ташкенте и области",
    subtitle: "Быстро. Честно. С гарантией",
    description: "Стиральные машины, холодильники, кондиционеры, посудомоечные машины и другая техника — ремонт на дому или в сервисе.",
    image: "/images/hero/all-appliances.png"
  };

  /* Form submission handler */
  const handlePhoneSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Phone number submitted:", phoneNumber);
    /* TODO: Integrate with backend */
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pt-32 md:pt-0">
      {/* Background Image with Monochrome Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroData.image}
          alt="Premium appliance repair"
          className="w-full h-full object-cover"
        />
        {/* Gradient overlay for text readability - lighter and brighter */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/70 via-white/50 to-white/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-transparent" />
      </div>

      {/* Content Container */}
      <div className="container relative z-10 mx-auto px-6 py-32 md:py-40">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          {/* Badge - Premium label */}
          <motion.div variants={itemVariants} className="mb-8">
            <span className="inline-flex items-center px-4 py-2 bg-primary text-primary-foreground text-caption font-semibold tracking-wide uppercase rounded-full">
              {heroData.badge || "Выезд мастера в день обращения"}
            </span>
          </motion.div>

          {/* Main Headline - Impactful typography */}
          <motion.h1 
            variants={itemVariants}
            className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight"
          >
            {heroData.title}
          </motion.h1>

          {/* Subheadline - Clean and clear */}
          <motion.p 
            variants={itemVariants}
            className="text-2xl md:text-3xl font-medium mb-8 flex flex-wrap gap-2"
          >
            <span className="text-foreground bg-[#fa891a] px-3 py-1 rounded-lg">Быстро.</span>
            <span className="text-foreground bg-[#fa891a] px-3 py-1 rounded-lg">Честно.</span>
            <span className="text-foreground bg-[#fa891a] px-3 py-1 rounded-lg">С гарантией</span>
          </motion.p>

          {/* Value proposition */}
          <motion.p 
            variants={itemVariants}
            className="text-lg md:text-xl text-foreground mb-12 max-w-2xl leading-relaxed"
          >
            {heroData.description}
          </motion.p>

          

          {/* Feature Pills - Minimal indicators */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap gap-4 mb-12"
          >
            {[
              "Опытные мастера",
              "Честная диагностика",
              "Гарантия на работы",
              "Ташкент и Ташкентская область",
            ].map((feature) => (
              <span
                key={feature}
                className="inline-flex items-center gap-2 px-4 py-2 bg-secondary text-sm md:text-base rounded-full"
              >
                <span className="w-1.5 h-1.5 bg-foreground rounded-full" />
                {feature}
              </span>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 max-w-2xl"
          >
            {/* Call Button */}
            <a
              href="tel:+998935960055"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gray-900 text-white rounded-full text-lg font-semibold hover:bg-gray-800 transition-colors shadow-lg"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Вызвать мастера сейчас
            </a>

            {/* Form Link Button */}
            <a
              href="#service-area-form"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-gray-900 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg border-2 border-gray-900"
            >
              Бесплатная консультация
              <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </motion.div>

        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex items-start justify-center p-2">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-2 bg-muted-foreground/50 rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}
