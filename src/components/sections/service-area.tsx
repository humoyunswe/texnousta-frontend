"use client"

import { MapPin, Building2, Home } from "lucide-react"

export function ServiceAreaSection() {
  const areas = [
    {
      icon: MapPin,
      title: "Ташкент (все районы)",
      description: "Покрываем весь город"
    },
    {
      icon: Building2,
      title: "Ташкентская область",
      description: "Работаем в пригородах"
    },
    {
      icon: Home,
      title: "Выезд на дом или в офис",
      description: "Удобно для вас"
    }
  ]

  return (
    <section className="relative py-12 md:py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="text-[#fa891a] text-xs font-semibold tracking-widest uppercase font-montserrat mb-3 block">
            ГЕОГРАФИЯ РАБОТЫ
          </span>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-3 font-montserrat leading-tight">t">
            Работаем по всему Ташкенту и области
          </h2>
          <p className="text-sm leading-relaxed font-normal text-gray-600 font-montserrat">
            Мы обслуживаем:
          </p>
        </div>

        {/* Areas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto mb-8">
          {areas.map((area, index) => {
            const Icon = area.icon
            return (
              <div
                key={index}
                className="group bg-white rounded-xl p-6 border border-gray-200 hover:border-[#fa891a]/30 hover:shadow-md transition-all duration-300"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-[#fa891a] flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6 text-white" strokeWidth={2} />
                  </div>
                  <h3 className="text-sm font-semibold text-gray-900 mb-1 font-montserrat">
                    {area.title}
                  </h3>
                  <p className="text-xs text-gray-600 font-montserrat">
                    {area.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom Text */}
        <div className="text-center">
          <p className="text-base md:text-lg font-medium text-gray-900 font-montserrat">
            Мобильные мастера — ближе, чем вы думаете.
          </p>
        </div>
      </div>
    </section>
  )
}
