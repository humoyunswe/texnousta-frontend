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
  Droplets, 
  Volume2, 
  RotateCcw, 
  AlertCircle,
  Clock
} from "lucide-react"

const washingMachineData = {
  hero: {
    badge: "90% ремонтов в день обращения",
    title: "Ремонт стиральных<br />машин в Ташкенте",
    subtitle: "Быстро. Надёжно. С гарантией",
    description: "Когда стиральная машина выходит из строя — важно одно: чтобы её починили с первого раза.",
    image: "/images/hero/image.png",
    problems: [
      { icon: Zap, text: "Стиральная машина не включается" },
      { icon: Droplets, text: "Не набирает или не сливает воду" },
      { icon: Volume2, text: "Сильно шумит или вибрирует" },
      { icon: RotateCcw, text: "Не отжимает бельё" },
      { icon: Droplets, text: "Протекает" },
      { icon: AlertCircle, text: "Выдаёт ошибку на дисплее" },
      { icon: Clock, text: "Останавливается во время стирки" },
    ]
  },
  faqs: [
    { 
      question: "Сколько стоит ремонт стиральной машины?", 
      answer: "Стоимость зависит от характера поломки и необходимости замены деталей. Точную цену мастер назовёт после диагностики, до начала работ." 
    },
    { 
      question: "Вы даёте гарантию на ремонт?", 
      answer: "Да, на все выполненные работы предоставляется гарантия до 12 месяцев. Если проблема повторится — исправим бесплатно." 
    },
    { 
      question: "Ремонт проводится на дому?", 
      answer: "Да, в 90% случаев ремонт проводится на месте. Вывоз техники требуется только в сложных случаях." 
    },
    { 
      question: "Как быстро приедет мастер?", 
      answer: "Обычно мастер приезжает в день обращения. По Ташкенту — в течение 1-2 часов после заявки." 
    },
    { 
      question: "Какие бренды стиральных машин вы ремонтируете?", 
      answer: "Мы ремонтируем все популярные бренды: Samsung, LG, Bosch, Indesit, Ariston, Beko, Haier и другие." 
    },
  ]
}

export default function WashingMachinesPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <ServiceHero {...washingMachineData.hero} />
      <WhyUsService />
      <HomeRepairSection />
      <WhatWeRepairPricing />
      <HowToOrderSection />
      <ServiceAreaSection />
      <ServiceFAQ faqs={washingMachineData.faqs} />
      <CTASection />
      <Footer />
    </main>
  )
}
