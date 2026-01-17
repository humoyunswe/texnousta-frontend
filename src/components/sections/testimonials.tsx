/* ============================================================
   TESTIMONIALS SECTION
   Infinite scrolling testimonial cards.
   ============================================================ */
"use client";


import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Star } from "lucide-react";

interface Testimonial {
  author: string;
  text: string;
}

interface TestimonialsSectionProps {
  testimonials?: Testimonial[];
}

const defaultTestimonials = [
  { author: "Алишер Каримов", text: "Отличный сервис! Холодильник отремонтировали за 2 часа. Мастер приехал вовремя." },
  { author: "Нигина Рахимова", text: "Стиральная машина перестала сливать воду. К обеду мастер уже был. Починил быстро!" },
  { author: "Фаррух Усманов", text: "Ремонтировал посудомоечную машину. Приехали даже в область! Работа выполнена качественно." },
  { author: "Дилноза Азимова", text: "Духовой шкаф не включался. Мастер нашел проблему за 10 минут. Рекомендую!" },
  { author: "Жасур Набиев", text: "Сервис на высоте - приехали в тот же день, отремонтировали профессионально." },
  { author: "Малика Турсунова", text: "Кондиционер не охлаждал. Мастера приехали быстро, заправили фреон. Работает!" },
];

export function TestimonialsSection({ testimonials = defaultTestimonials }: TestimonialsSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="testimonials" className="py-12 md:py-16 bg-background overflow-hidden" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-sm text-gray-600 uppercase tracking-widest mb-3">ОТЗЫВЫ</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">Что говорят клиенты</h2>
        </motion.div>
      </div>

      {/* Visual Element - Stats Card */}
      <div className="mb-12 md:mb-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="relative max-w-lg mx-auto px-6"
        >
          {/* Decorative Grid */}
          <div className="aspect-square relative">
            {/* Main square */}
            <div className="absolute inset-0 bg-background border border-border rounded-3xl shadow-lg" />
            
            {/* Overlapping element */}
            <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 w-3/4 h-3/4 bg-foreground rounded-3xl shadow-xl" />
            
            {/* Stats overlay */}
            <div className="absolute inset-0 flex items-center justify-center p-4 md:p-8">
              <div className="text-center p-6 md:p-8 bg-background rounded-2xl shadow-2xl">
                <div className="text-5xl md:text-6xl font-semibold text-foreground mb-2 md:mb-3">
                  500+
                </div>
                <p className="text-sm md:text-base text-muted-foreground">
                  Довольных клиентов
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Scrolling testimonials */}
      <div className="relative">
        {/* Left fade gradient */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        {/* Right fade gradient */}
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
        
        <div className="flex animate-scroll">
          {[...testimonials, ...testimonials, ...testimonials].map((t, i) => (
            <div key={i} className="flex-shrink-0 w-[350px] mx-3">
              <div className="bg-card border border-border rounded-2xl p-6 h-full shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-foreground flex items-center justify-center text-background font-semibold">{t.author[0]}</div>
                  <span className="font-medium text-foreground">{t.author}</span>
                </div>
                <p className="text-sm text-muted-foreground mb-4">{t.text}</p>
                <div className="flex gap-1">{[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-foreground text-foreground" />)}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
