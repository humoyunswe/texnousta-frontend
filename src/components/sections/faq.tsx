/* ============================================================
   FAQ SECTION
   ============================================================ */
"use client";


import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  { question: "Сколько стоит ремонт?", answer: "Цена зависит от поломки. Диагностика помогает точно определить стоимость." },
  { question: "Вы даёте гарантию?", answer: "Да, на все выполненные работы — гарантия до 12 месяцев." },
  { question: "Вы ремонтируете на дому?", answer: "Да, в большинстве случаев ремонт проводится на месте." },
  { question: "Как быстро приедет мастер?", answer: "Обычно в день обращения." },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="faq" className="py-12 md:py-16 bg-secondary/50" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-12">
          <p className="text-sm text-gray-600 uppercase tracking-widest mb-3">FAQ</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">Частые вопросы</h2>
        </motion.div>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: index * 0.1 }} className="bg-background border border-border rounded-2xl overflow-hidden">
              <button onClick={() => setOpenIndex(openIndex === index ? null : index)} className="w-full flex items-center justify-between p-6 text-left hover:bg-secondary/50 transition-colors">
                <span className="text-heading-sm font-semibold text-foreground">{faq.question}</span>
                <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""}`} />
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${openIndex === index ? "max-h-40" : "max-h-0"}`}>
                <div className="px-6 pb-6"><p className="text-body-md text-muted-foreground">{faq.answer}</p></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
