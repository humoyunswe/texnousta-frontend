import { useState } from "react";
import Link from "next/link";
import { X, ChevronDown, Phone, Clock } from "lucide-react";

interface MobileMenuButtonProps {
  onClick: () => void;
}

export function MobileMenuButton({ onClick }: MobileMenuButtonProps) {
  return (
    <button
      onClick={onClick}
      className="p-2 rounded-lg hover:bg-secondary transition-colors"
      aria-label="Open menu"
    >
      <div className="w-5 h-4 flex flex-col justify-between">
        <span className="w-full h-0.5 bg-foreground rounded-full" />
        <span className="w-full h-0.5 bg-foreground rounded-full" />
        <span className="w-3/4 h-0.5 bg-foreground rounded-full" />
      </div>
    </button>
  );
}

interface MenuItem {
  label: string;
  href: string;
}

interface MenuSection {
  label: string;
  items?: MenuItem[];
  href?: string;
}

const menuSections: MenuSection[] = [
  { label: "Почему мы?", href: "/why-us" },
  {
    label: "Сервисы",
    items: [
      { label: "Ремонт бытовой техники", href: "/services/appliances" },
      { label: "Ремонт холодильников", href: "/services/refrigerators" },
      { label: "Ремонт стиральных машин", href: "/services/washing-machines" },
      { label: "Ремонт кондиционеров", href: "/services/air-conditioners" },
      { label: "Ремонт посудомоечных машин", href: "/services/dishwashers" },
      { label: "Ремонт котлов", href: "/services/boilers" },
      { label: "Ремонт мелкой бытовой техники", href: "/services/small-appliances" },
      { label: "Ремонт чиллеров", href: "/services/chillers" },
    ],
  },
  { label: "Блог", href: "/blog" },
];

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 z-50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Menu Panel */}
      <div className="fixed top-0 right-0 bottom-0 w-[85%] max-w-sm bg-background z-50 shadow-2xl animate-slide-in-right">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-border">
          <span className="text-lg font-bold text-foreground">Меню</span>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-secondary transition-colors"
            aria-label="Close menu"
          >
            <X className="h-5 w-5 text-foreground" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="p-4 space-y-1">
          {menuSections.map((section) => (
            <div key={section.label}>
              {section.items ? (
                <>
                  <button
                    onClick={() => setExpandedSection(
                      expandedSection === section.label ? null : section.label
                    )}
                    className="w-full flex items-center justify-between py-3 px-3 rounded-lg hover:bg-secondary transition-colors"
                  >
                    <span className="font-semibold text-foreground">{section.label}</span>
                    <ChevronDown className={`h-4 w-4 text-muted-foreground transition-transform duration-200 ${expandedSection === section.label ? 'rotate-180' : ''}`} />
                  </button>
                  {expandedSection === section.label && (
                    <div className="ml-3 mt-1 space-y-1 animate-fade-in">
                      {section.items.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={onClose}
                          className="block py-2.5 px-3 rounded-lg text-sm text-muted-foreground hover:text-accent hover:bg-dropdown-hover transition-colors"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  href={section.href!}
                  onClick={onClose}
                  className="block py-3 px-3 rounded-lg font-semibold text-foreground hover:bg-secondary transition-colors"
                >
                  {section.label}
                </Link>
              )}
            </div>
          ))}
        </nav>

        {/* Contact Section */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-border bg-secondary/50">
          <div className="flex items-center justify-center gap-3">
            <Phone className="h-5 w-5 text-accent" />
            <a 
              href="tel:+998935960055" 
              className="text-foreground font-bold hover:text-accent transition-colors"
            >
              +998 93 596 00 55
            </a>
            <div className="flex items-center gap-1 bg-brand-green-bg px-2.5 py-1 rounded-full">
              <Clock className="h-3.5 w-3.5 text-brand-green" />
              <span className="text-xs font-bold text-brand-green">24/7</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
