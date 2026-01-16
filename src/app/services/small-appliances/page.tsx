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
  title: 'Ремонт мелкой бытовой техники в Ташкенте | TexnoUsta',
  description: 'Ремонт микроволновок, кофемашин, блендеров, пылесосов и другой мелкой бытовой техники. Доступные цены.',
}

export default function SmallAppliancesPage() {
  const heroData = {
    badge: "Ремонт мелкой техники",
    title: "Ремонт мелкой бытовой техники",
    subtitle: "Пылесосы, кофемашины и др.",
    description: "Ремонт мелкой бытовой техники: микроволновые печи, кофемашины, блендеры, пылесосы, мультиварки. Быстрая диагностика и качественный ремонт по доступным ценам.",
    image: "/images/hero/small-appliances.png"
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
