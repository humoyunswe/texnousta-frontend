"use client"

import Link from "next/link"
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Send } from "lucide-react"

export function Footer() {
  const services = [
    { name: "Ремонт холодильников", href: "#" },
    { name: "Ремонт стиральных машин", href: "#" },
    { name: "Ремонт посудомоечных машин", href: "#" },
    { name: "Ремонт духовых шкафов", href: "#" },
    { name: "Ремонт варочных панелей", href: "#" },
    { name: "Ремонт кондиционеров", href: "#" },
  ];

  const company = [
    { name: "О нас", href: "#" },
    { name: "Наши мастера", href: "#" },
    { name: "Отзывы", href: "#" },
    { name: "Гарантии", href: "#" },
    { name: "Контакты", href: "#" },
  ];

  const support = [
    { name: "Вызвать мастера", href: "tel:+998935960055" },
    { name: "Консультация", href: "tel:+998935960055" },
    { name: "График работы", href: "#" },
    { name: "Цены", href: "#" },
    { name: "FAQ", href: "#" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Send, href: "https://t.me/texnousta", label: "Telegram" },
  ];

  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="container mx-auto px-6 py-12 md:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <div className="flex items-center gap-2">
                
                <span className="text-xl font-bold text-gray-900 font-montserrat">
                  texnousta.uz
                </span>
              </div>
            </Link>
            <p className="text-sm text-gray-600 font-montserrat mb-6 leading-relaxed max-w-xs">
              Профессиональный ремонт бытовой техники в Ташкенте. Быстро, качественно, с гарантией.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-gray-700 hover:bg-[#fa891a] hover:text-white transition-all duration-300"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wide font-montserrat">
              Услуги
            </h3>
            <ul className="space-y-3">
              {services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-600 hover:text-[#fa891a] transition-colors font-montserrat"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wide font-montserrat">
              Компания
            </h3>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-600 hover:text-[#fa891a] transition-colors font-montserrat"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Column */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wide font-montserrat">
              Поддержка
            </h3>
            <ul className="space-y-3">
              {support.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-600 hover:text-[#fa891a] transition-colors font-montserrat"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-100 my-10" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-600 font-montserrat">
            © {new Date().getFullYear()} texnousta.uz. Все права защищены.
          </p>
          <div className="flex items-center gap-6">
            <Link href="#" className="text-sm text-gray-600 hover:text-[#fa891a] transition-colors font-montserrat">
              Политика конфиденциальности
            </Link>
            <Link href="#" className="text-sm text-gray-600 hover:text-[#fa891a] transition-colors font-montserrat">
              Условия
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
