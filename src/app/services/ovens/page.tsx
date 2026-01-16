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
  title: 'Ремонт плит и духовок в Ташкенте | TexnoUsta',
  description: 'Ремонт газовых и электрических плит, духовых шкафов. Замена горелок, термостатов, ремонт электроники.',
}

export default function OvensPage() {
  const heroData = {
    badge: "Ремонт плит и духовок",
    title: "Ремонт плит и духовок",
    subtitle: "Газовые и электрические",
    description: "Профессиональный ремонт газовых и электрических плит, духовых шкафов всех марок. Замена горелок, термостатов, ремонт поверхности. Опытные мастера.",
    image: "/images/hero/oven.png"
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
