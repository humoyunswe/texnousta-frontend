"use client"

import { Star } from "lucide-react"

export function TestimonialsSection() {
  const testimonials = [
    {
      author: "Алишер Каримов",
      username: "@alisher_tech",
      rating: 5,
      text: "Отличный сервис! Холодильник Samsung отремонтировали за 2 часа. Мастер приехал вовремя, все объяснил понятно. Цена честная, без скрытых доплат.",
    },
    {
      author: "Нигина Рахимова",
      username: "@nigina_home",
      rating: 5,
      text: "Стиральная машина LG перестала сливать воду. Позвонила утром, к обеду мастер уже был у меня. Починил быстро, дал гарантию на 6 месяцев.",
    },
    {
      author: "Фаррух Усманов",
      username: "@farrukh_uz",
      rating: 5,
      text: "Ремонтировал посудомоечную машину Bosch. Приехали даже в область! Работа выполнена качественно, все запчасти оригинальные.",
    },
    {
      author: "Дилноза Азимова",
      username: "@dilnoza_style",
      rating: 5,
      text: "Духовой шкаф Electrolux не включался. Мастер нашел проблему за 10 минут, запчасти были с собой. Ремонт занял всего час. Рекомендую!",
    },
    {
      author: "Жасур Набиев",
      username: "@jasur_techno",
      rating: 5,
      text: "Варочная панель Siemens перестала работать. Сервис на высоте - приехали в тот же день, отремонтировали профессионально. Спасибо!",
    },
    {
      author: "Малика Турсунова",
      username: "@malika_home",
      rating: 5,
      text: "Кондиционер Gree не охлаждал. Мастера приехали быстро, заправили фреон, почистили фильтры. Работает как новый!",
    },
  ]

  return (
    <section className="relative py-12 md:py-16 bg-white overflow-hidden">
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-3 font-montserrat leading-tight">
            Что говорят наши клиенты
          </h2>
          <p className="text-sm text-gray-600 font-montserrat">
            Не верьте нам на слово — послушайте наших довольных клиентов
          </p>
        </div>
      </div>

      {/* Infinite Scrolling Testimonials */}
      <div className="relative">
        <div className="flex animate-scroll">
          {/* First set */}
          {testimonials.map((testimonial, index) => (
            <div
              key={`first-${index}`}
              className="flex-shrink-0 w-[350px] mx-3"
            >
              <div className="bg-white rounded-xl p-6 border border-gray-100 h-full">
                {/* Avatar & Info */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#fa891a] to-[#e67b0f] flex items-center justify-center">
                    <span className="text-white font-bold text-lg font-montserrat">
                      {testimonial.author[0]}
                    </span>
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-gray-900 font-montserrat text-sm">
                      {testimonial.author}
                    </p>
                    <p className="text-xs text-gray-500 font-montserrat">
                      {testimonial.username}
                    </p>
                  </div>
                </div>

                {/* Quote */}
                <p className="text-sm leading-relaxed text-gray-700 font-montserrat mb-4">
                  {testimonial.text}
                </p>

                {/* Stars */}
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#fa891a] text-[#fa891a]" />
                  ))}
                </div>
              </div>
            </div>
          ))}
          
          {/* Duplicate set for seamless loop */}
          {testimonials.map((testimonial, index) => (
            <div
              key={`second-${index}`}
              className="flex-shrink-0 w-[350px] mx-3"
            >
              <div className="bg-white rounded-xl p-6 border border-gray-100 h-full">
                {/* Avatar & Info */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#fa891a] to-[#e67b0f] flex items-center justify-center">
                    <span className="text-white font-bold text-lg font-montserrat">
                      {testimonial.author[0]}
                    </span>
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-gray-900 font-montserrat text-sm">
                      {testimonial.author}
                    </p>
                    <p className="text-xs text-gray-500 font-montserrat">
                      {testimonial.username}
                    </p>
                  </div>
                </div>

                {/* Quote */}
                <p className="text-sm leading-relaxed text-gray-700 font-montserrat mb-4">
                  {testimonial.text}
                </p>

                {/* Stars */}
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#fa891a] text-[#fa891a]" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
