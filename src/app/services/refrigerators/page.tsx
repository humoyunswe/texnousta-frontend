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
  Snowflake, 
  Droplets, 
  Volume2, 
  Thermometer, 
  AlertCircle,
  Zap
} from "lucide-react"

const refrigeratorData = {
  hero: {
    badge: "90% ремонтов в день обращения",
    title: "Ремонт холодильников<br />в Ташкенте",
    subtitle: "Быстро. Надёжно. С гарантией",
    description: "Когда холодильник выходит из строя — важно одно: чтобы его починили с первого раза.",
    image: "/images/hero/refrigerator.png",
    problems: [
      { icon: Snowflake, text: "Не морозит или плохо холодит" },
      { icon: Droplets, text: "Течёт вода внутри или снаружи" },
      { icon: Volume2, text: "Сильно шумит или гудит" },
      { icon: Thermometer, text: "Не поддерживает температуру" },
      { icon: Zap, text: "Не включается" },
      { icon: AlertCircle, text: "Выдаёт ошибку на дисплее" },
    ]
  },
  types: [
    "Однокамерные и двухкамерные",
    "С системой No Frost и капельные",
    "Side-by-Side и French Door",
    "Все популярные бренды: Samsung, LG, Bosch, Ariston, Artel",
  ],
  faqs: [
    { 
      question: "Сколько стоит ремонт холодильника?", 
      answer: "Стоимость зависит от характера поломки и необходимости замены деталей. Точную цену мастер назовёт после диагностики, до начала работ." 
    },
    { 
      question: "Вы даёте гарантию на ремонт?", 
      answer: "Да, на все выполненные работы предоставляется гарантия до 12 месяцев. Если проблема повторится — исправим бесплатно." 
    },
    { 
      question: "Ремонт проводится на дому?", 
      answer: "Да, в большинстве случаев ремонт проводится на месте. Вывоз техники требуется только в сложных случаях." 
    },
    { 
      question: "Как быстро приедет мастер?", 
      answer: "Обычно мастер приезжает в день обращения. По Ташкенту — в течение 1-2 часов после заявки." 
    },
    { 
      question: "Какие бренды холодильников вы ремонтируете?", 
      answer: "Мы ремонтируем все популярные бренды: Samsung, LG, Bosch, Indesit, Ariston, Beko, Haier, Artel и другие." 
    },
  ]
}

export default function RefrigeratorsPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <ServiceHero {...refrigeratorData.hero} />
      <WhyUsService />
      <HomeRepairSection image="/images/services/refrigerator-home.jpg" />
      <WhatWeRepairPricing types={refrigeratorData.types} />
      <HowToOrderSection />
      <ServiceAreaSection />
      <ServiceFAQ faqs={refrigeratorData.faqs} />
      <CTASection />
      <Footer />
    </main>
  )
}
