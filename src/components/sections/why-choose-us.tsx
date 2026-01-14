"use client"

import { CheckCircle2 } from "lucide-react"

export function WhyChooseUsSection() {
  const reasons = [
    {
      title: "Диагностика перед ремонтом",
      description: "Вы понимаете причину поломки и стоимость ДО начала работ",
      image: "/images/why-us/image.png"
    },
    {
      title: "Честные цены без сюрпризов",
      description: "Никаких «вдруг стало дороже»",
      image: "/images/why-us/image copy.png"
    },
    {
      title: "Опытные мастера",
      description: "Реальные специалисты, а не «мастера на все случаи жизни»",
      image: "/images/why-us/image copy 2.png"
    },
    {
      title: "Гарантия на выполненные работы",
      description: "Мы отвечаем за результат",
      image: "/images/why-us/image copy 3.png"
    }
  ]

  return (
    <section className="relative py-5 bg-gradient-to-r from-white via-white to-[#234c6a]/5 overflow-hidden">
      {/* Decorative blur elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -right-20 top-1/4 w-96 h-96 bg-[#234c6a]/10 rounded-full blur-3xl"></div>
        <div className="absolute -right-10 bottom-1/4 w-80 h-80 bg-[#3dbfe1]/8 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Facebook Photo Grid Style */}
          <div className="grid grid-cols-[2fr,1fr] gap-2">
            {/* Large Image - Left side, full height */}
            <div className="row-span-3">
              <div className="relative h-full rounded-xl overflow-hidden">
                <img 
                  src={reasons[0].image} 
                  alt={reasons[0].title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Three smaller images - Right side, stacked */}
            {reasons.slice(1, 4).map((reason, index) => (
              <div key={index} className="relative">
                <div className="relative aspect-square rounded-xl overflow-hidden">
                  <img 
                    src={reason.image} 
                    alt={reason.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Right Side - Content */}
          <div className="space-y-8">
            <div>
              <div className="inline-block mb-3">
                <span className="text-[#fa891a] text-xs font-semibold tracking-widest uppercase font-montserrat">
                  О НАС
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl leading-tight font-semibold text-gray-900 mb-4 font-montserrat">
                Почему выбирают <span className="text-[#fa891a]">texnousta.uz</span>
              </h2>
              <p className="text-base leading-relaxed font-normal text-gray-600 font-montserrat">
                Мы не просто «ремонтируем», мы решаем проблему
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-5">
              {reasons.map((reason, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#fa891a] mt-2">
                  </div>
                  <div className="flex-1">
                    <h4 className="text-base font-semibold text-gray-900 mb-1 font-montserrat leading-snug">{reason.title}</h4>
                    <p className="text-sm leading-relaxed font-normal text-gray-600 font-montserrat">
                      {reason.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
