"use client"

import { Phone, MessageCircle, Clock, Wrench, CheckCircle } from "lucide-react"

export function HowWeWorkSection() {
  const steps = [
    {
      icon: Phone,
      title: "Вы оставляете заявку или звоните",
      description: "Быстрый контакт любым удобным способом"
    },
    {
      icon: MessageCircle,
      title: "Мы консультируем и уточняем проблему",
      description: "Предварительная диагностика по телефону"
    },
    {
      icon: Clock,
      title: "Мастер приезжает в удобное время",
      description: "Согласуем время с вашим графиком"
    },
    {
      icon: Wrench,
      title: "Проводим диагностику",
      description: "Определяем точную причину и стоимость"
    },
    {
      icon: CheckCircle,
      title: "Ремонтируем и даём гарантию",
      description: "Качественно и с ответственностью"
    }
  ]

  return (
    <section className="relative py-12 md:py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-[#fa891a] text-xs font-semibold tracking-widest uppercase font-montserrat mb-3 block">
            ПРОЦЕСС РАБОТЫ
          </span>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-3 font-montserrat leading-tight">
            Как мы работаем?
          </h2>
          <p className="text-sm leading-relaxed font-normal text-gray-600 font-montserrat max-w-2xl mx-auto">
            Без лишних слов. Без потери времени.
          </p>
        </div>

        {/* Steps */}
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <div key={index} className="relative group">
                  <div className="text-center">
                    {/* Icon Circle */}
                    <div className="relative inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-[#fa891a] to-[#e67b0f] mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6 text-white" strokeWidth={2} />
                      {/* Step Number */}
                      <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[#234c6a] flex items-center justify-center">
                        <span className="text-white text-xs font-bold">{index + 1}</span>
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-sm font-semibold text-gray-900 mb-1 font-montserrat leading-snug">
                      {step.title}
                    </h3>
                    <p className="text-xs leading-relaxed font-normal text-gray-600 font-montserrat">
                      {step.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 text-center">
          <div className="inline-flex flex-col sm:flex-row gap-3">
            <a
              href="tel:+998935960055"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#fa891a] text-white text-sm font-semibold rounded-full hover:bg-[#e67b0f] transition-all duration-300 font-montserrat"
            >
              <Phone className="w-4 h-4" />
              Вызвать мастера
            </a>
            <a
              href="tel:+998935960055"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white border-2 border-[#234c6a] text-[#234c6a] text-sm font-semibold rounded-full hover:bg-[#234c6a] hover:text-white transition-all duration-300 font-montserrat"
            >
              <MessageCircle className="w-4 h-4" />
              Получить консультацию
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
