'use client'

import { Header } from "@/components/sections/header"
import { ServiceHero } from "@/components/service-sections/service-hero"
import { WhyUsService } from "@/components/service-sections/why-us-service"
import { HomeRepairSection } from "@/components/service-sections/home-repair-section"
import { WhatWeRepairPricing } from "@/components/service-sections/what-we-repair-pricing"
import { HowToOrderSection } from "@/components/service-sections/how-to-order"
import { ServiceAreaSection } from "@/components/sections/service-area"
import { ServiceFAQ } from "@/components/service-sections/service-faq"
import { CTASection } from "@/components/sections/cta"
import { Footer } from "@/components/sections/footer"
import { 
  Flame, 
  Thermometer, 
  AlertCircle,
  Zap,
  Timer,
  Wind
} from "lucide-react"

const ovenData = {
  hero: {
    badge: "Ремонт за 1 день",
    title: "Ремонт плит и духовок<br />в Ташкенте",
    subtitle: "Быстро. Надёжно. С гарантией",
    description: "Ремонт газовых и электрических плит, духовых шкафов всех марок.",
    image: "/images/hero/oven.png",
    problems: [
      { icon: Flame, text: "Не зажигается газ или горелка" },
      { icon: Thermometer, text: "Духовка не нагревается" },
      { icon: Zap, text: "Не включается" },
      { icon: Timer, text: "Не работает таймер или часы" },
      { icon: Wind, text: "Не работает конвекция" },
      { icon: AlertCircle, text: "Ошибка на дисплее" },
    ]
  },
  types: [
    "Газовые и электрические плиты",
    "Духовые шкафы (встраиваемые)",
    "Варочные поверхности",
    "Все бренды: Bosch, Electrolux, Ariston, Gefest, Gorenje",
  ],
  faqs: [
    { 
      question: "Сколько стоит ремонт плиты или духовки?", 
      answer: "Стоимость зависит от типа поломки и модели. Диагностика бесплатная, цену назовём после осмотра." 
    },
    { 
      question: "Вы работаете с газовым оборудованием?", 
      answer: "Да, наши мастера имеют допуск к работе с газовым оборудованием. Ремонтируем газовые плиты и духовки." 
    },
    { 
      question: "Можете заменить горелки или переключатели?", 
      answer: "Да, заменяем горелки, переключатели, термостаты и другие компоненты. Используем оригинальные запчасти." 
    },
    { 
      question: "Даёте гарантию?", 
      answer: "Да, на все работы предоставляется гарантия до 12 месяцев." 
    },
    { 
      question: "Как быстро приедет мастер?", 
      answer: "Обычно в день обращения. По Ташкенту — в течение 1-2 часов." 
    },
  ]
}

export default function OvensPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <ServiceHero {...ovenData.hero} applianceTypeGenitive="плит и духовок" />
      <WhyUsService />
      <HomeRepairSection 
        image="/images/hero/oven.png"
        title="Ремонт плит и духовок на дому"
        altText="Ремонт плиты и духовки на дому"
      />
      <WhatWeRepairPricing 
        types={ovenData.types}
        title="Какие плиты и духовки мы ремонтируем"
      />
      <HowToOrderSection 
        applianceType="плиты или духовки"
        applianceTypeGenitive="плит и духовок"
      />
      <ServiceAreaSection />
      <ServiceFAQ faqs={ovenData.faqs} />
      <CTASection />
      <Footer />
    </main>
  )
}
