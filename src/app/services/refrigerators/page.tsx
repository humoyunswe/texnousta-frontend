import { Header } from "@/components/sections/header"
import { HeroSection } from "@/components/sections/hero"
import { WhatWeRepairSection } from "@/components/sections/what-we-repair"
import { WhyChooseUsSection } from "@/components/sections/why-choose-us"
import { HowWeWorkSection } from "@/components/sections/how-we-work"
import { ServiceAreaSection } from "@/components/sections/service-area"
import { TestimonialsSection } from "@/components/sections/testimonials"
import { FAQSection } from "@/components/sections/faq"
import { CTASection } from "@/components/sections/cta"
import { Footer } from "@/components/sections/footer"

export const metadata = {
  title: 'Ремонт холодильников и морозильников в Ташкенте | TexnoUsta',
  description: 'Ремонт холодильников всех марок. Диагностика, заправка фреоном, замена компрессора. Выезд мастера в день обращения.',
}

export default function RefrigeratorsPage() {
  const heroData = {
    badge: "Ремонт холодильников",
    title: "Ремонт холодильников и морозильников",
    subtitle: "Диагностика и ремонт",
    description: "Ремонтируем холодильники всех марок: Samsung, LG, Artel, Bosch и другие. Заправка фреоном, замена компрессора, ремонт системы No Frost. Гарантия на все работы.",
    image: "/images/hero/refrigerator.png"
  }

  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection data={heroData} />
      <WhatWeRepairSection />
      <WhyChooseUsSection />
      <HowWeWorkSection />
      <ServiceAreaSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </main>
  )
}
