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
  title: 'Ремонт стиральных машин в Ташкенте | TexnoUsta',
  description: 'Профессиональный ремонт стиральных машин любых моделей и брендов. Выезд мастера в день обращения. Гарантия на все работы.',
}

export default function WashingMachinesPage() {
  const heroData = {
    badge: "Ремонт стиральных машин",
    title: "Профессиональный ремонт стиральных машин",
    subtitle: "Любые модели и бренды",
    description: "Ремонтируем стиральные машины всех типов: с вертикальной и фронтальной загрузкой, автоматические и полуавтоматические. Устраняем любые неисправности быстро и качественно.",
    image: "/images/hero/image.png"
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
