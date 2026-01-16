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
  title: 'Ремонт посудомоечных машин в Ташкенте | TexnoUsta',
  description: 'Ремонт посудомоечных машин всех видов и неисправностей. Встраиваемые и отдельностоящие модели. Гарантия качества.',
}

export default function DishwashersPage() {
  const heroData = {
    badge: "Ремонт посудомоечных машин",
    title: "Ремонт посудомоечных машин",
    subtitle: "Все виды неисправностей",
    description: "Ремонтируем посудомоечные машины любых марок: Bosch, Electrolux, Ariston и другие. Устраняем протечки, проблемы с нагревом, сливом воды. Быстро и качественно.",
    image: "/images/hero/dishwasher.png"
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
