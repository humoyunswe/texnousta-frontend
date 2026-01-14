"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronDown, Phone, Clock, Menu } from "lucide-react"
import { Logo } from "@/components/ui/logo"
import { LanguageSwitcher } from "@/components/ui/language-switcher"
import { MobileMenu } from "@/components/ui/mobile-menu"

interface DropdownItem {
  label: string;
  href: string;
}

const servicesDropdown: DropdownItem[] = [
  { label: "Ремонт бытовой техники", href: "/services/appliances" },
  { label: "Ремонт холодильников", href: "/services/refrigerators" },
  { label: "Ремонт стиральных машин", href: "/services/washing-machines" },
  { label: "Ремонт кондиционеров", href: "/services/air-conditioners" },
  { label: "Ремонт посудомоечных машин", href: "/services/dishwashers" },
  { label: "Ремонт котлов", href: "/services/boilers" },
  { label: "Ремонт мелкой бытовой техники", href: "/services/small-appliances" },
  { label: "Ремонт чиллеров", href: "/services/chillers" },
];

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
        <nav className="container mx-auto px-6 py-3">
          <div className="flex flex-col md:flex-row items-center justify-between gap-2 md:gap-0">
            {/* Top row on mobile: Logo, Language, Menu Button */}
            <div className="flex items-center justify-between w-full md:w-auto">
              <Logo 
                showImage={true} 
                imageUrl="/images/Logo-dark.svg" 
                text="texnousta.uz" 
                className="text-xl font-extrabold" 
              />
          

              {/* Mobile: Language Switcher & Menu Button */}
              <div className="flex md:hidden items-center gap-2">
                <LanguageSwitcher />
                <button
                  onClick={() => setIsMobileMenuOpen(true)}
                  className="p-2 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-all"
                >
                  <Menu className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Phone Number & 24/7 - visible on mobile below logo */}
            <div className="flex md:hidden items-center gap-1.5 w-full justify-center pb-1">
              <Phone className="h-4 w-4 text-accent" />
              <a
                href="tel:+998935960055"
                className="text-foreground text-sm font-bold hover:text-accent transition-colors"
              >
                +998 93 596 00 55
              </a>
              <div className="flex items-center gap-0.5 ml-1.5 bg-brand-green-bg px-2 py-0.5 rounded-full">
                <Clock className="h-3 w-3 text-brand-green" />
                <span className="text-xs font-bold text-brand-green">24/7</span>
              </div>
            </div>

            {/* Desktop Navigation Links & Language Switcher */}
            <div className="hidden md:flex items-center gap-6">
              {/* Navigation Links */}
              <div className="flex items-center gap-6">
                <Link href="/why-us" className="nav-link">
                  Почему мы?
                </Link>

                {/* Services Dropdown */}
                <div
                  className="relative"
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  <button className="flex items-center gap-1 nav-link">
                    <span>Сервисы</span>
                    <ChevronDown
                      className={`h-3.5 w-3.5 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`}
                    />
                  </button>

                  {/* Dropdown Menu */}
                  <div
                    className={`absolute left-0 top-full pt-2 transition-all duration-200 ${
                      isServicesOpen
                        ? "opacity-100 visible translate-y-0"
                        : "opacity-0 invisible -translate-y-1"
                    }`}
                  >
                    <div className="w-72 bg-white rounded-xl shadow-lg border border-gray-200 py-2">
                      {servicesDropdown.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-accent transition-colors"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>

                <Link href="/blog" className="nav-link">
                  Блог
                </Link>
              </div>

              {/* Phone Number & 24/7 */}
              <div className="flex items-center gap-2 border-l border-border pl-6">
                <Phone className="h-4 w-4 text-accent" />
                <a
                  href="tel:+998935960055"
                  className="text-foreground text-sm font-bold hover:text-accent transition-colors"
                >
                  +998 93 596 00 55
                </a>
                <div className="flex items-center gap-1 ml-2 bg-brand-green-bg px-2 py-1 rounded-full">
                  <Clock className="h-3 w-3 text-brand-green" />
                  <span className="text-xs font-bold text-brand-green">24/7</span>
                </div>
              </div>

              {/* Language Switcher */}
              <LanguageSwitcher />
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}