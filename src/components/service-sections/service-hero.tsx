/* ============================================================
   SERVICE HERO SECTION
   Premium hero section for service pages with phone form
   ============================================================ */
"use client";

import { motion, Variants } from "framer-motion";
import { ArrowRight, LucideIcon } from "lucide-react";
import { useState } from "react";

interface Problem {
  icon: LucideIcon;
  text: string;
}

interface ServiceHeroProps {
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  problems: Problem[];
}

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
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7 },
  },
};

export function ServiceHero({
  badge,
  title,
  subtitle,
  description,
  image,
  problems,
}: ServiceHeroProps) {
  const [phoneNumber, setPhoneNumber] = useState("");

  const handlePhoneSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Phone submitted:", phoneNumber);
  };

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-background pt-32 md:pt-28">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={image}
          alt="Service"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-6 py-16 md:py-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="mb-6">
            <span className="inline-flex items-center px-4 py-2 bg-primary text-primary-foreground text-caption font-semibold tracking-wide uppercase rounded-full">
              {badge}
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1 
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-4 leading-tight"
            dangerouslySetInnerHTML={{ __html: title }}
          />

          {/* Subtitle */}
          <motion.p 
            variants={itemVariants}
            className="text-xl md:text-2xl font-medium text-foreground/80 mb-4 flex flex-wrap gap-2"
          >
            <span className="inline-block px-4 py-1 bg-[#fa891a] text-white rounded-full">Быстро.</span>
            <span className="inline-block px-4 py-1 bg-[#fa891a] text-white rounded-full">Надёжно.</span>
            <span className="inline-block px-4 py-1 bg-[#fa891a] text-white rounded-full">С гарантией</span>
          </motion.p>

          {/* Description */}
          <motion.p 
            variants={itemVariants}
            className="text-base md:text-lg text-muted-foreground mb-4 max-w-xl leading-relaxed"
          >
            {description}
          </motion.p>

          {/* Additional Description */}
          <motion.p 
            variants={itemVariants}
            className="text-base md:text-lg text-muted-foreground mb-8 max-w-xl leading-relaxed"
          >
            <span className="font-bold text-foreground">texnousta.uz</span> — это профессиональный ремонт стиральных машин в Ташкенте <span className="font-bold text-foreground">на дому</span>, без лишних слов, затягиваний и навязанных услуг. Мы приезжаем, <span className="font-bold text-foreground">находим реальную причину поломки</span> и устраняем её, а не «временно маскируем проблему».
          </motion.p>

          {/* Problems Grid */}
          <motion.div 
            variants={itemVariants}
            className="mb-10"
          >
            <p className="text-sm text-muted-foreground mb-4 uppercase tracking-wider font-medium">
              С какими проблемами к нам обращаются чаще всего:
            </p>
            <div className="flex flex-wrap gap-2">
              {problems.map((problem, index) => {
                const Icon = problem.icon;
                return (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + index * 0.05 }}
                    className="inline-flex items-center gap-2 px-4 py-2.5 bg-secondary/80 text-secondary-foreground text-sm rounded-full border border-border/50 hover:bg-secondary transition-colors"
                  >
                    <Icon className="w-4 h-4 text-muted-foreground" />
                    {problem.text}
                  </motion.span>
                );
              })}
            </div>
          </motion.div>

          {/* CTA Buttons */}
                    <motion.div
                      variants={itemVariants}
                      className="flex flex-col sm:flex-row gap-4 max-w-2xl"
                    >
                      {/* Call Button */}
                      <a
                        href="tel:+998935960055"
                        className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-black text-white rounded-full text-lg font-semibold hover:bg-gray-900 transition-colors shadow-lg"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        Вызвать мастера сейчас
                      </a>
          
                      {/* Form Link Button */}
                      <a
                        href="#service-area-form"
                        className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-black rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg border-2 border-black"
                      >
                        Бесплатная консультация
                        <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </a>
                    </motion.div>
        </motion.div>
      </div>

      
    </section>
  );
}
