"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: "Сколько стоит ремонт?",
      answer: "Цена зависит от поломки. Диагностика помогает точно определить стоимость."
    },
    {
      question: "Вы даёте гарантию?",
      answer: "Да, на все выполненные работы."
    },
    {
      question: "Вы ремонтируете на дому?",
      answer: "Да, в большинстве случаев ремонт проводится на месте."
    },
    {
      question: "Как быстро приедет мастер?",
      answer: "Обычно в день обращения."
    }
  ]

  return (
    <section className="relative py-12 md:py-16 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-10 max-w-3xl mx-auto">
          <span className="text-[#fa891a] text-xs font-semibold tracking-widest uppercase font-montserrat mb-3 block">
            FAQ
          </span>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-3 font-montserrat leading-tight">
            Часто задаваемые вопросы
          </h2>
        </div>

        {/* FAQ List */}
        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:border-[#fa891a]/30 transition-all duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors duration-200"
              >
                <span className="text-sm font-semibold text-gray-900 font-montserrat pr-6">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-[#fa891a] flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-32" : "max-h-0"
                }`}
              >
                <div className="px-4 pb-4 pt-1">
                  <p className="text-sm leading-relaxed text-gray-600 font-montserrat">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
