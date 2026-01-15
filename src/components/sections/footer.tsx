/* ============================================================
   FOOTER
   ============================================================ */
"use client";


import { Phone, Mail, MapPin, Clock, ChevronDown } from "lucide-react";
import { useState } from "react";

export function Footer() {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <footer className="py-16 bg-background border-t border-border">
      <div className="container mx-auto px-6">
        {/* Mobile: Collapsible sections */}
        <div className="md:hidden space-y-4 mb-12">
          {/* Logo and Description - Always visible */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <img src="/images/Logo-dark.svg" alt="TexnoUsta Logo" className="h-7 w-auto transition-transform duration-200 group-hover:scale-105" />
              <span className="text-xl font-semibold text-gray-600">texnousta.uz</span>
            </div>
            <p className="text-body-sm text-gray-600 mb-6">Профессиональный ремонт бытовой техники в Ташкенте. Быстро, качественно, с гарантией.</p>
            
            {/* Social Media Icons */}
            <div className="flex gap-4">
              <a href="#" className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="white">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              
              <a href="#" className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="white">
                  <path d="M12 2C6.48 2 2 6.48 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12c0-5.52-4.48-10-10-10z"/>
                </svg>
              </a>
              
              <a href="#" className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="white">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Download App Section */}
          <div className="pb-6 border-b border-border">
            <p className="text-lg font-semibold text-gray-900 mb-3">Скачать приложение</p>
            <div className="flex gap-3 opacity-50 pointer-events-none">
              <div className="bg-gray-900 rounded-xl px-3 py-2 flex items-center gap-2 flex-1">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="white">
                  <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09997 22C7.78997 22.05 6.79997 20.68 5.95997 19.47C4.24997 17 2.93997 12.45 4.69997 9.39C5.56997 7.87 7.12997 6.91 8.81997 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z"/>
                </svg>
                <div className="text-left">
                  <p className="text-[8px] text-white/70">Загрузить из</p>
                  <p className="text-xs font-semibold text-white">App Store</p>
                </div>
              </div>
              
              <div className="bg-gray-900 rounded-xl px-3 py-2 flex items-center gap-2 flex-1">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="white">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                </svg>
                <div className="text-left">
                  <p className="text-[8px] text-white/70">Доступно в</p>
                  <p className="text-xs font-semibold text-white">Google Play</p>
                </div>
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-2 italic">В разработке</p>
          </div>

          {/* Services Toggle */}
          <div className="border-b border-border">
            <button 
              onClick={() => toggleSection('services')}
              className="w-full py-4 flex items-center justify-between text-left"
            >
              <h4 className="text-base font-semibold text-gray-900">Услуги</h4>
              <ChevronDown className={`w-5 h-5 text-gray-600 transition-transform ${openSection === 'services' ? 'rotate-180' : ''}`} />
            </button>
            {openSection === 'services' && (
              <ul className="pb-4 space-y-3 text-sm text-gray-600">
                <li>Ремонт холодильников</li>
                <li>Ремонт стиральных машин</li>
                <li>Ремонт кондиционеров</li>
                <li>Ремонт посудомоечных машин</li>
              </ul>
            )}
          </div>

          {/* Company Toggle */}
          <div className="border-b border-border">
            <button 
              onClick={() => toggleSection('company')}
              className="w-full py-4 flex items-center justify-between text-left"
            >
              <h4 className="text-base font-semibold text-gray-900">Компания</h4>
              <ChevronDown className={`w-5 h-5 text-gray-600 transition-transform ${openSection === 'company' ? 'rotate-180' : ''}`} />
            </button>
            {openSection === 'company' && (
              <ul className="pb-4 space-y-3 text-sm text-gray-600">
                <li>О нас</li>
                <li>Отзывы</li>
                <li>Гарантии</li>
                <li>Контакты</li>
              </ul>
            )}
          </div>

          {/* Resources Toggle */}
          <div className="border-b border-border">
            <button 
              onClick={() => toggleSection('resources')}
              className="w-full py-4 flex items-center justify-between text-left"
            >
              <h4 className="text-base font-semibold text-gray-900">Ресурсы</h4>
              <ChevronDown className={`w-5 h-5 text-gray-600 transition-transform ${openSection === 'resources' ? 'rotate-180' : ''}`} />
            </button>
            {openSection === 'resources' && (
              <ul className="pb-4 space-y-3 text-sm text-gray-600">
                <li>Блог</li>
                <li>Часто задаваемые вопросы</li>
                <li>Полезные советы</li>
              </ul>
            )}
          </div>

          {/* About Us Toggle */}
          <div className="border-b border-border">
            <button 
              onClick={() => toggleSection('about')}
              className="w-full py-4 flex items-center justify-between text-left"
            >
              <h4 className="text-base font-semibold text-gray-900">О нас</h4>
              <ChevronDown className={`w-5 h-5 text-gray-600 transition-transform ${openSection === 'about' ? 'rotate-180' : ''}`} />
            </button>
            {openSection === 'about' && (
              <ul className="pb-4 space-y-3 text-sm text-gray-600">
                <li className="flex items-center gap-2"><Phone className="w-4 h-4" />+998 93 596 00 55</li>
                <li className="flex items-center gap-2"><Clock className="w-4 h-4" />24/7</li>
                <li className="flex items-center gap-2"><MapPin className="w-4 h-4" />Ташкент и область</li>
              </ul>
            )}
          </div>
        </div>

        {/* Desktop: Grid layout */}
        <div className="hidden md:grid grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src="/images/Logo-dark.svg" alt="TexnoUsta Logo" className="h-7 w-auto transition-transform duration-200 group-hover:scale-105" />
              <span className="text-xl font-semibold text-gray-600">texnousta.uz</span>
            </div>
            <p className="text-body-sm text-gray-600 mb-6">Профессиональный ремонт бытовой техники в Ташкенте. Быстро, качественно, с гарантией.</p>
            
            {/* Social Media Icons */}
            <div className="flex gap-4">
              <a href="#" className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="white">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              
              <a href="#" className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="white">
                  <path d="M12 2C6.48 2 2 6.48 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12c0-5.52-4.48-10-10-10z"/>
                </svg>
              </a>
              
              <a href="#" className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="white">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/>
                </svg>
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-body-sm font-semibold text-gray-600 uppercase tracking-wide mb-4">Услуги</h4>
            <ul className="space-y-3 text-body-sm text-gray-600">
              <li>Ремонт холодильников</li><li>Ремонт стиральных машин</li><li>Ремонт кондиционеров</li><li>Ремонт посудомоечных машин</li>
            </ul>
          </div>
          <div>
            <h4 className="text-body-sm font-semibold text-gray-600 uppercase tracking-wide mb-4">Компания</h4>
            <ul className="space-y-3 text-body-sm text-gray-600"><li>О нас</li><li>Отзывы</li><li>Гарантии</li><li>Контакты</li></ul>
          </div>
          <div>
            <h4 className="text-body-sm font-semibold text-gray-600 uppercase tracking-wide mb-4">Контакты</h4>
            <ul className="space-y-3 text-body-sm text-gray-600 mb-6">
              <li className="flex items-center gap-2"><Phone className="w-4 h-4" />+998 93 596 00 55</li>
              <li className="flex items-center gap-2"><Clock className="w-4 h-4" />24/7</li>
              <li className="flex items-center gap-2"><MapPin className="w-4 h-4" />Ташкент и область</li>
            </ul>
            
            {/* App Download Section */}
            <div className="mt-6">
              <p className="text-sm font-semibold text-gray-600 mb-3">Скачать приложение</p>
              <div className="flex flex-col gap-3 opacity-50 pointer-events-none">
                <div className="bg-gray-900 rounded-xl px-4 py-2 flex items-center gap-3">
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="white">
                    <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09997 22C7.78997 22.05 6.79997 20.68 5.95997 19.47C4.24997 17 2.93997 12.45 4.69997 9.39C5.56997 7.87 7.12997 6.91 8.81997 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z"/>
                  </svg>
                  <div className="text-left">
                    <p className="text-[10px] text-white/70">Загрузить из</p>
                    <p className="text-sm font-semibold text-white">App Store</p>
                  </div>
                </div>
                
                <div className="bg-gray-900 rounded-xl px-4 py-2 flex items-center gap-3">
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="white">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                  </svg>
                  <div className="text-left">
                    <p className="text-[10px] text-white/70">Доступно в</p>
                    <p className="text-sm font-semibold text-white">Google Play</p>
                  </div>
                </div>
              </div>
              <p className="text-xs text-gray-500 mt-2 italic">В разработке</p>
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-border text-center">
          <p className="text-sm text-gray-600 mb-4">
            Условия использования | Политика конфиденциальности
          </p>
          <p className="text-sm text-gray-600 mb-4">
            Инструменты доступности | Не продавать и не передавать мои личные данные
          </p>
          <p className="text-sm text-gray-600">
            © Авторские права 2023-{new Date().getFullYear()}, texnousta.uz. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
}
