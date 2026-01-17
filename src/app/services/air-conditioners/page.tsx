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
  Wind, 
  Droplets, 
  Volume2, 
  Thermometer, 
  AlertCircle,
  Zap
} from "lucide-react"

const airConditionerData = {
  hero: {
    badge: "Ремонт и обслуживание за 1 день",
    title: "Ремонт кондиционеров<br />в Ташкенте",
    subtitle: "Быстро. Надёжно. С гарантией",
    description: "Профессиональный ремонт, заправка и обслуживание кондиционеров всех типов.",
    image: "/images/hero/air-conditioner.png",
    problems: [
      { icon: Wind, text: "Не охлаждает или дует теплым" },
      { icon: Droplets, text: "Капает или течёт вода" },
      { icon: Volume2, text: "Шумит, гудит или трещит" },
      { icon: Thermometer, text: "Не держит температуру" },
      { icon: Zap, text: "Не включается" },
      { icon: AlertCircle, text: "Показывает ошибку" },
    ]
  },
  types: [
    "Настенные сплит-системы",
    "Напольные и потолочные",
    "Кассетные и канальные",
    "Все бренды: Midea, Gree, Samsung, LG, Daikin, Artel",
  ],
  faqs: [
    { 
      question: "Сколько стоит ремонт кондиционера?", 
      answer: "Стоимость зависит от типа неисправности и модели кондиционера. Диагностика бесплатная, точную цену мастер назовёт после осмотра." 
    },
    { 
      question: "Вы заправляете кондиционеры фреоном?", 
      answer: "Да, заправка фреоном — одна из самых частых услуг. Используем качественный хладагент R22, R410A, R32 в зависимости от модели." 
    },
    { 
      question: "Как часто нужно чистить кондиционер?", 
      answer: "Рекомендуется профилактическая чистка 1-2 раза в год: перед летним сезоном и после. Это продлевает срок службы и улучшает качество охлаждения." 
    },
    { 
      question: "Даёте ли вы гарантию на работы?", 
      answer: "Да, на все виды работ предоставляется гарантия до 12 месяцев." 
    },
    { 
      question: "Как быстро приедет мастер?", 
      answer: "Обычно мастер приезжает в день обращения. По Ташкенту — в течение 1-2 часов после заявки." 
    },
  ]
}

export default function AirConditionersPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <ServiceHero {...airConditionerData.hero} applianceTypeGenitive="кондиционеров" />
      <WhyUsService />
      <HomeRepairSection 
        image="/images/hero/air-conditioner.png"
        title="Ремонт кондиционеров на дому"
        altText="Ремонт кондиционера на дому"
      />
      <WhatWeRepairPricing 
        types={airConditionerData.types}
        title="Какие кондиционеры мы ремонтируем"
      />
      <HowToOrderSection 
        applianceType="кондиционера"
        applianceTypeGenitive="кондиционеров"
      />
      <ServiceAreaSection />
      <ServiceFAQ faqs={airConditionerData.faqs} />
      <CTASection />
      <Footer />
    </main>
  )
}
