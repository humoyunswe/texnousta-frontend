import { useState } from "react";
import { ChevronDown, Globe } from "lucide-react";

interface Language {
  code: string;
  label: string;
  flag?: string;
}

const languages: Language[] = [
  { code: "ru", label: "Рус", flag: "🇷🇺" },
  { code: "uz", label: "O'zb", flag: "🇺🇿" },
  { code: "en", label: "Eng", flag: "🇬🇧" },
];

export function LanguageSwitcher() {
  const [currentLang, setCurrentLang] = useState(languages[0]);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium text-foreground/70 hover:text-foreground hover:bg-gray-100 transition-all duration-200"
      >
        <Globe className="h-4 w-4" />
        <span>{currentLang.label}</span>
        <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <>
          <div 
            className="fixed inset-0 z-40" 
            onClick={() => setIsOpen(false)} 
          />
          <div className="absolute right-0 top-full mt-1 w-32 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-50 animate-fade-in">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => {
                  setCurrentLang(lang);
                  setIsOpen(false);
                }}
                className={`w-full flex items-center gap-2 px-3 py-2 text-sm font-medium transition-colors ${
                  currentLang.code === lang.code 
                    ? "text-accent bg-gray-50" 
                    : "text-gray-700 hover:bg-gray-50 hover:text-accent"
                }`}
              >
                <span>{lang.flag}</span>
                <span>{lang.label}</span>
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
