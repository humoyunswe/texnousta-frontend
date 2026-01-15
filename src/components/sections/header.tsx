/* ============================================================
   HEADER COMPONENT
   Premium monochrome navigation with glass effect.
   Subtle animations, clean typography.
   ============================================================ */
"use client";
import { useState } from "react";
import Link from "next/link";
import { ChevronDown, Phone, Clock, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

/* Services dropdown configuration */
interface DropdownItem {
  label: string;
  href: string;
}

const servicesDropdown: DropdownItem[] = [
  { label: "Ремонт бытовой техники", href: "#services" },
  { label: "Ремонт холодильников", href: "#services" },
  { label: "Ремонт стиральных машин", href: "#services" },
  { label: "Ремонт кондиционеров", href: "#services" },
  { label: "Ремонт посудомоечных машин", href: "#services" },
  { label: "Ремонт котлов", href: "#services" },
];

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState("RU");

  return (
    <>
      {/* Main Header - Glass effect with blur */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
        <nav className="container mx-auto px-4 md:px-6 py-2 md:py-2.5">
          {/* Desktop & Mobile Top Row */}
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <img
                src="/images/Logo-dark.svg"
                alt="TexnoUsta Logo"
                className="h-10 w-auto transition-transform duration-200 group-hover:scale-105"
              />
              <span className="text-lg md:text-xl font-bold text-gray-900 font-montserrat">
                texnousta.uz
              </span>
            </Link>

            {/* Mobile: Language + Menu Button */}
            <div className="md:hidden flex items-center gap-3">
              {/* Language Selector */}
              <div className="relative">
                <button 
                  onClick={() => setIsLangOpen(!isLangOpen)}
                  className="flex items-center gap-1.5 px-3 py-1.5 bg-secondary rounded-full text-caption font-semibold text-foreground"
                >
                  <span>{currentLang}</span>
                  <ChevronDown
                    className={`h-3 w-3 transition-transform duration-200 ${
                      isLangOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Mobile Language Dropdown */}
                <AnimatePresence>
                  {isLangOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -4 }}
                      transition={{ duration: 0.15, ease: "easeOut" }}
                      className="absolute right-0 top-full mt-2 z-50"
                    >
                      <div className="w-24 bg-white rounded-xl shadow-lg border border-gray-200 py-1">
                        <button
                          onClick={() => {
                            setCurrentLang("RU");
                            setIsLangOpen(false);
                          }}
                          className="block w-full px-4 py-2 text-left text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors"
                        >
                          RU
                        </button>
                        <button
                          onClick={() => {
                            setCurrentLang("UZ");
                            setIsLangOpen(false);
                          }}
                          className="block w-full px-4 py-2 text-left text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors"
                        >
                          UZ
                        </button>
                        <button
                          onClick={() => {
                            setCurrentLang("EN");
                            setIsLangOpen(false);
                          }}
                          className="block w-full px-4 py-2 text-left text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors"
                        >
                          EN
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="p-2 text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
                aria-label="Открыть меню"
              >
                <Menu className="h-5 w-5" />
              </button>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {/* Navigation Links */}
              <div className="flex items-center gap-8">
                <a 
                  href="#why-us" 
                  className="text-body-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  Почему мы
                </a>

                {/* Services Dropdown */}
                <div
                  className="relative"
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  <button className="flex items-center gap-1.5 text-body-sm text-muted-foreground hover:text-foreground transition-colors duration-200">
                    <span>Сервисы</span>
                    <ChevronDown
                      className={`h-3.5 w-3.5 transition-transform duration-200 ${
                        isServicesOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {/* Dropdown Menu with premium animation */}
                  <AnimatePresence>
                    {isServicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -4 }}
                        transition={{ duration: 0.15, ease: "easeOut" }}
                        className="absolute left-0 top-full pt-2"
                      >
                        <div className="w-64 bg-white rounded-xl shadow-lg border border-gray-200 py-2">
                          {servicesDropdown.map((item) => (
                            <a
                              key={item.href + item.label}
                              href={item.href}
                              className="block px-4 py-2.5 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors duration-150"
                            >
                              {item.label}
                            </a>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <a 
                  href="#testimonials" 
                  className="text-body-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  Отзывы
                </a>

                <a 
                  href="#faq" 
                  className="text-body-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  FAQ
                </a>
              </div>

              {/* Phone & 24/7 Badge */}
              <div className="flex items-center gap-4">
                <a
                  href="tel:+998935960055"
                  className="flex items-center gap-2.5 px-4 py-2.5 bg-primary text-primary-foreground rounded-full text-body-sm font-medium hover:opacity-90 transition-opacity duration-200 premium-press"
                >
                  <Phone className="h-4 w-4" />
                  <span>+998 93 596 00 55</span>
                </a>
                <div className="flex items-center gap-1.5 px-3 py-1.5 bg-secondary rounded-full">
                  <Clock className="h-3.5 w-3.5 text-foreground" />
                  <span className="text-caption font-semibold text-foreground">24/7</span>
                </div>
                
                {/* Language Selector */}
                <div
                  className="relative"
                  onMouseEnter={() => setIsLangOpen(true)}
                  onMouseLeave={() => setIsLangOpen(false)}
                >
                  <button className="flex items-center gap-1.5 px-3 py-1.5 bg-secondary rounded-full text-caption font-semibold text-foreground hover:bg-secondary/80 transition-colors">
                    <span>{currentLang}</span>
                    <ChevronDown
                      className={`h-3 w-3 transition-transform duration-200 ${
                        isLangOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {/* Language Dropdown */}
                  <AnimatePresence>
                    {isLangOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -4 }}
                        transition={{ duration: 0.15, ease: "easeOut" }}
                        className="absolute right-0 top-full pt-2"
                      >
                        <div className="w-24 bg-white rounded-xl shadow-lg border border-gray-200 py-1">
                          <button
                            onClick={() => setCurrentLang("RU")}
                            className="block w-full px-4 py-2 text-left text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors"
                          >
                            RU
                          </button>
                          <button
                            onClick={() => setCurrentLang("UZ")}
                            className="block w-full px-4 py-2 text-left text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors"
                          >
                            UZ
                          </button>
                          <button
                            onClick={() => setCurrentLang("EN")}
                            className="block w-full px-4 py-2 text-left text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors"
                          >
                            EN
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Phone Section - Below Logo */}
          <div className="md:hidden mt-3 flex flex-col items-center gap-2 pb-2">
            <a
              href="tel:+998935960055"
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-gray-900 text-white rounded-full text-sm font-semibold hover:bg-gray-800 transition-colors"
            >
              <Phone className="h-4 w-4" />
              +998 93 596 00 55
            </a>
            <div className="flex items-center gap-1.5 text-gray-600 text-sm">
              <Clock className="h-4 w-4" />
              <span>Работаем круглосуточно</span>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-50 bg-foreground/20 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Mobile Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="fixed top-0 right-0 bottom-0 z-50 w-80 bg-background border-l border-border shadow-premium-lg"
            >
              <div className="flex flex-col h-full">
                {/* Mobile Menu Header */}
                <div className="flex items-center justify-between p-6 border-b border-border">
                  <span className="text-lg font-semibold text-foreground">Меню</span>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 text-muted-foreground hover:text-foreground hover:bg-accent rounded-lg transition-colors"
                    aria-label="Закрыть меню"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                {/* Mobile Menu Links */}
                <div className="flex-1 py-6 px-6 space-y-2">
                  <a
                    href="#why-us"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block py-3 text-body-md text-foreground hover:text-muted-foreground transition-colors"
                  >
                    Почему мы
                  </a>
                  
                  {/* Mobile Services Toggle */}
                  <div className="border-b border-border pb-2">
                    <button
                      onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                      className="w-full flex items-center justify-between py-3 text-body-md text-foreground hover:text-muted-foreground transition-colors"
                    >
                      <span>Сервисы</span>
                      <ChevronDown
                        className={`h-4 w-4 transition-transform duration-200 ${
                          isMobileServicesOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {isMobileServicesOpen && (
                      <div className="pl-4 mt-2 space-y-2">
                        {servicesDropdown.map((item) => (
                          <a
                            key={item.href + item.label}
                            href={item.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block py-2 text-sm text-gray-600 hover:text-gray-900 transition-colors"
                          >
                            {item.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                  
                  <a
                    href="#how-it-works"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block py-3 text-body-md text-foreground hover:text-muted-foreground transition-colors"
                  >
                    Как мы работаем
                  </a>
                  <a
                    href="#testimonials"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block py-3 text-body-md text-foreground hover:text-muted-foreground transition-colors"
                  >
                    Отзывы
                  </a>
                  <a
                    href="#faq"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block py-3 text-body-md text-foreground hover:text-muted-foreground transition-colors"
                  >
                    FAQ
                  </a>
                </div>

                {/* Mobile Menu Footer - CTA */}
                <div className="p-6 border-t border-border space-y-4">
                  <a
                    href="tel:+998935960055"
                    className="flex items-center justify-center gap-2 w-full py-3.5 bg-primary text-primary-foreground rounded-full text-body-sm font-medium premium-press"
                  >
                    <Phone className="h-4 w-4" />
                    <span>+998 93 596 00 55</span>
                  </a>
                  <div className="flex items-center justify-center gap-1.5 text-muted-foreground">
                    <Clock className="h-3.5 w-3.5" />
                    <span className="text-caption">Работаем круглосуточно</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
