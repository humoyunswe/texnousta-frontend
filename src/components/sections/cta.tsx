"use client"

import { Phone, MessageCircle, ArrowRight } from "lucide-react"

export function CTASection() {
  return (
    <section className="relative py-16 md:py-20 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-block mb-4">
            <span className="px-3 py-1.5 bg-[#fa891a] text-white text-xs font-semibold tracking-widest uppercase font-montserrat rounded-full">
              ДЕЙСТВУЙТЕ СЕЙЧАС
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 font-montserrat leading-tight">
            Не откладывайте ремонт — техника сама не починится
          </h2>

          {/* Subheading */}
          <p className="text-sm md:text-base text-gray-600 font-montserrat mb-8 leading-relaxed">
            📞 Позвоните прямо сейчас или оставьте заявку<br className="hidden sm:block" />
            Наш мастер свяжется с вами в ближайшее время.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <a
              href="tel:+998935960055"
              className="group inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#fa891a] text-white text-base font-semibold rounded-full hover:bg-[#e67b0f] transition-all duration-300 font-montserrat min-w-[220px]"
            >
              <Phone className="w-5 h-5" />
              Вызвать мастера
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <a
              href="tel:+998935960055"
              className="group inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-white border-2 border-[#234c6a] text-[#234c6a] text-base font-semibold rounded-full hover:bg-[#234c6a] hover:text-white transition-all duration-300 font-montserrat min-w-[220px]"
            >
              <MessageCircle className="w-5 h-5" />
              Получить консультацию
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="mt-10 pt-6 border-t border-gray-200">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div>
                <div className="text-2xl md:text-3xl font-bold text-[#fa891a] mb-1 font-montserrat">
                  24/7
                </div>
                <p className="text-xs text-gray-600 font-montserrat">
                  Работаем круглосуточно
                </p>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-[#fa891a] mb-1 font-montserrat">
                  100%
                </div>
                <p className="text-xs text-gray-600 font-montserrat">
                  Гарантия на работы
                </p>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-[#fa891a] mb-1 font-montserrat">
                  500+
                </div>
                <p className="text-xs text-gray-600 font-montserrat">
                  Довольных клиентов
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
