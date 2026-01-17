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
  Droplets, 
  Flame, 
  Volume2, 
  AlertCircle,
  Zap,
  Clock
} from "lucide-react"

const dishwasherData = {
  hero: {
    badge: "Ремонт в день обращения",
    title: "Ремонт посудомоечных машин<br />в Ташкенте",
    subtitle: "Быстро. Надёжно. С гарантией",
    description: "Профессиональный ремонт посудомоечных машин всех типов и марок.",
    image: "/images/hero/dishwasher.png",
    problems: [
      { icon: Droplets, text: "Не сливает или не набирает воду" },
      { icon: Flame, text: "Не греет воду" },
      { icon: Volume2, text: "Шумит или стучит при работе" },
      { icon: Zap, text: "Не включается" },
      { icon: Clock, text: "Не завершает цикл мойки" },
      { icon: AlertCircle, text: "Показывает ошибку на дисплее" },
    ]
  },
  types: [
    "Встраиваемые и отдельностоящие",
    "Узкие (45 см) и полноразмерные (60 см)",
    "С разными типами управления",
    "Все бренды: Bosch, Electrolux, Ariston, Beko, Samsung",
  ],
  faqs: [
    { 
      question: "Сколько стоит ремонт посудомоечной машины?", 
      answer: "Стоимость зависит от характера поломки. Диагностика бесплатная, точную цену назовём после осмотра." 
    },
    { 
      question: "Вы ремонтируете встраиваемые посудомоечные машины?", 
      answer: "Да, ремонтируем как встраиваемые, так и отдельностоящие модели всех марок." 
    },
    { 
      question: "Как часто нужно чистить посудомоечную машину?", 
      answer: "Рекомендуется профилактическая чистка фильтров раз в месяц, полная чистка — раз в 3-6 месяцев." 
    },
    { 
      question: "Даёте ли гарантию на ремонт?", 
      answer: "Да, на все работы предоставляется гарантия до 12 месяцев." 
    },
    { 
      question: "Как быстро приедет мастер?", 
      answer: "Обычно мастер приезжает в день обращения. По Ташкенту — в течение 1-2 часов." 
    },
  ]
}

export default function DishwashersPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <ServiceHero {...dishwasherData.hero} applianceTypeGenitive="посудомоечных машин" />
      <WhyUsService />
      <HomeRepairSection 
        image="/images/hero/dishwasher.png"
        title="Ремонт посудомоечных машин на дому"
        altText="Ремонт посудомоечной машины на дому"
      />
      <WhatWeRepairPricing 
        types={dishwasherData.types}
        title="Какие посудомоечные машины мы ремонтируем"
      />
      <HowToOrderSection 
        applianceType="посудомоечной машины"
        applianceTypeGenitive="посудомоечных машин"
      />
      <ServiceAreaSection />
      <ServiceFAQ faqs={dishwasherData.faqs} />
      <CTASection />
      <Footer />
    </main>
  )
}
