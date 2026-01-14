"use client"

import { useState, useEffect } from "react"

export function HeroSection() {
  const [phoneNumber, setPhoneNumber] = useState("")
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  
  const images = [
    '/home/image copy.png',
    '/home/image.png',
    '/home/washing-machine.png',
    '/home/air-conditioner.png',
    '/home/washin-disher.png',
    '/home/boiler.png',
    '/home/home-appliances-small.png',
    '/home/chiller.png'
  
  ]
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 5000) // Меняем изображение каждые 5 секунд
    
    return () => clearInterval(interval)
  }, [])
  
  const handlePhoneSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Номер телефона:", phoneNumber)
  }

  return (
    <section className="min-h-screen flex items-center relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('${images[currentImageIndex]}')`,
          }}
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        {/* Content wrapper with background for mobile */}
        <div className="md:bg-transparent bg-black/30 md:backdrop-blur-none backdrop-blur-sm rounded-2xl md:p-0 p-4">
          {/* Small label above title */}
          <div className="max-w-4xl mx-auto mb-4">
            <div className="inline-block bg-[#fa891a]/90 backdrop-blur-sm px-4 py-1.5 rounded-full">
              <p className="text-white text-sm font-semibold">
                Выезд мастера в день обращения
              </p>
            </div>
          </div>

          {/* Main Title */}
          <div className="max-w-4xl mx-auto mb-4">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight font-montserrat mb-3 drop-shadow-lg">
              Ремонт бытовой техники в Ташкенте и области
            </h1>
            <p className="text-xl md:text-xl lg:text-2xl text-[#fefefe] font-semibold drop-shadow-lg">
              Быстро. Честно. С гарантией
            </p>
          </div>

          {/* Description */}
          <div className="max-w-4xl mx-auto mb-6">
            <p className="text-lg md:text-lg text-gray-100 leading-relaxed mb-4 drop-shadow-md">
              Стиральные машины, холодильники, кондиционеры, посудомоечные машины и другая техника — ремонт на дому или в сервисе.
            </p>
            
            {/* Features */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <div className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                <span className="text-white text-base font-medium drop-shadow-md">Опытные мастера</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                <span className="text-white text-base font-medium drop-shadow-md">Честная диагностика</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                <span className="text-white text-base font-medium drop-shadow-md">Гарантия на работы</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                <span className="text-white text-base font-medium drop-shadow-md">Ташкент и область</span>
              </div>
            </div>
          </div>
        </div>

        {/* Phone Form */}
        <div className="max-w-2xl mx-auto mt-8">
          <div className="flex flex-col sm:flex-row gap-2 items-stretch">
            {/* Phone Input with Flag */}
            <div className="flex-1 bg-white rounded-full shadow-lg px-4 py-3 flex items-center gap-2">
              <div className="flex items-center gap-1.5 border-r border-gray-300 pr-2">
                <div className="w-5 h-5 rounded-full overflow-hidden flex-shrink-0">
                  🇺🇿
                </div>
                <span className="text-gray-600 font-medium text-xs">+998</span>
              </div>
              <input
                type="tel"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="00-000-0000"
                className="flex-1 text-gray-800 placeholder-gray-400 focus:outline-none text-sm"
              />
            </div>

            {/* Submit Button */}
            <button
              onClick={handlePhoneSubmit}
              className="bg-[#234c6a] hover:bg-[#1a3a52] text-white font-semibold px-5 py-3 rounded-full shadow-lg transition-colors whitespace-nowrap text-sm"
            >
              Вызвать мастера сейчас
            </button>
            <button
              onClick={handlePhoneSubmit}
              className="bg-white hover:bg-gray-50 text-[#234c6a] font-semibold px-5 py-3 rounded-full shadow-lg transition-colors whitespace-nowrap text-sm"
            >
              Бесплатная консультация
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}