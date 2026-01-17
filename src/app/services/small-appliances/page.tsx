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
  Zap, 
  Volume2, 
  AlertCircle,
  Coffee,
  Wind,
  Flame
} from "lucide-react"

const smallApplianceData = {
  hero: {
    badge: "Быстрый ремонт",
    title: "Ремонт мелкой бытовой техники<br />в Ташкенте",
    subtitle: "Быстро. Надёжно. С гарантией",
    description: "Ремонт микроволновок, кофемашин, пылесосов, блендеров и другой мелкой техники.",
    image: "/images/hero/small-appliances.png",
    problems: [
      { icon: Zap, text: "Не включается" },
      { icon: Volume2, text: "Шумит или странно работает" },
      { icon: Flame, text: "Не греет (микроволновка, чайник)" },
      { icon: Coffee, text: "Не варит кофе или плохо работает" },
      { icon: Wind, text: "Слабая тяга (пылесос)" },
      { icon: AlertCircle, text: "Показывает ошибку" },
    ]
  },
  types: [
    "Микроволновые печи",
    "Кофемашины и кофеварки",
    "Пылесосы (обычные и роботы)",
    "Блендеры, миксеры, мультиварки",
    "Электрочайники и тостеры",
    "Все популярные бренды",
  ],
  faqs: [
    { 
      question: "Сколько стоит ремонт мелкой техники?", 
      answer: "Стоимость зависит от типа устройства и поломки. Диагностика бесплатная, цену назовём после осмотра." 
    },
    { 
      question: "Вы ремонтируете кофемашины?", 
      answer: "Да, ремонтируем все типы кофемашин: капсульные, рожковые, автоматические. Чистка, замена деталей." 
    },
    { 
      question: "Можете починить микроволновку?", 
      answer: "Да, ремонтируем микроволновые печи всех марок. Замена магнетрона, платы управления и других компонентов." 
    },
    { 
      question: "Даёте гарантию?", 
      answer: "Да, на все работы гарантия до 12 месяцев." 
    },
    { 
      question: "Как быстро приедет мастер?", 
      answer: "Обычно в день обращения. По Ташкенту — в течение 1-2 часов." 
    },
  ]
}

export default function SmallAppliancesPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <ServiceHero {...smallApplianceData.hero} applianceTypeGenitive="мелкой бытовой техники" />
      <WhyUsService />
      <HomeRepairSection 
        image="/images/hero/small-appliances.png"
        title="Ремонт мелкой техники на дому"
        altText="Ремонт мелкой бытовой техники на дому"
      />
      <WhatWeRepairPricing 
        types={smallApplianceData.types}
        title="Какую мелкую технику мы ремонтируем"
      />
      <HowToOrderSection 
        applianceType="мелкой техники"
        applianceTypeGenitive="мелкой бытовой техники"
      />
      <ServiceAreaSection />
      <ServiceFAQ faqs={smallApplianceData.faqs} />
      <CTASection />
      <Footer />
    </main>
  )
}
