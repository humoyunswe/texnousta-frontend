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
  title: 'Ремонт кондиционеров и сплит-систем в Ташкенте | TexnoUsta',
  description: 'Ремонт, заправка и обслуживание кондиционеров. Чистка, диагностика, установка. Работаем со всеми марками.',
}

export default function AirConditionersPage() {
  const heroData = {
    badge: "Ремонт кондиционеров",
    title: "Ремонт кондиционеров и сплит-систем",
    subtitle: "Заправка и обслуживание",
    description: "Профессиональный ремонт кондиционеров всех типов: настенные, напольные, кассетные. Заправка фреоном, чистка, диагностика. Работаем круглосуточно.",
    image: "/images/hero/air-conditioner.png"
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
