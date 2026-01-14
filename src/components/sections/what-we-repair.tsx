import Image from "next/image"
import Link from "next/link"

export function WhatWeRepairSection() {
  const services = [
    {
      title: "Стиральные машины",
      image: "/images/services/image.png",
      href: "/services/washing-machines"
    },
    {
      title: "Холодильники и морозильники",
      image: "/images/services/refrigerator.png",
      href: "/services/refrigerators"
    },
    {
      title: "Кондиционеры и сплит-системы",
      image: "/images/services/air-conditioner.png",
      href: "/services/air-conditioners"
    },
    {
      title: "Посудомоечные машины",
      image: "/images/services/dishwasher.png",
      href: "/services/dishwashers"
    },
    {
      title: "Плиты, духовки, варочные панели",
      image: "/images/services/oven.png",
      href: "/services/appliances"
    },
    {
      title: "Мелкая бытовая техника",
      image: "/images/services/small-app.png",
      href: "/services/small-appliances"
    }
  ]

  return (
    <section className="relative py-16 bg-gradient-to-l from-white via-white to-[#234c6a]/8 overflow-hidden">
      {/* Decorative blur elements on left */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -left-20 top-1/4 w-[500px] h-[500px] bg-[#234c6a]/15 rounded-full blur-3xl"></div>
        <div className="absolute -left-10 bottom-1/4 w-96 h-96 bg-[#3dbfe1]/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-[32px] leading-[39px] font-semibold text-gray-900 mb-4 font-montserrat">
            Что мы ремонтируем?
          </h2>
          <p className="text-[18px] leading-[26px] font-normal text-gray-700 font-montserrat">
            Ремонтируем все виды бытовой техники
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => (
            <Link
              key={index}
              href={service.href}
              className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="relative h-48 bg-gray-100">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#fa891a] transition-colors">
                  {service.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom Text */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <p className="text-[18px] leading-[26px] font-normal text-gray-700 font-montserrat">
            Работаем с популярными брендами и моделями.
          </p>
          <p className="text-[18px] leading-[26px] font-normal text-gray-700 font-montserrat">
            Если техника не включается, шумит, течёт или плохо работает — мы знаем, как это исправить.
          </p>
        </div>
      </div>
    </section>
  )
}
