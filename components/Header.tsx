"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import ConsultationCTA from "./ConsultationCTA";

const navItems = [
  { href: "/about", label: "🏢 회사 소개" },
  { href: "/special", label: "🔥 핫딜차량" },
  { href: "/rocket", label: "🚀 로켓출고 차량" },
  { href: "/lowcredit", label: "💳 저신용상품" },
  { href: "/aftercare", label: "🔧 차량관리" },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          {/* Logo: prefer SVG img, with onError fallback to nice text typography */}
          {!logoError ? (
            <img 
              src="/images/logo.svg" 
              alt="오아시스 마이카" 
              className="h-10 w-auto" 
              onError={() => setLogoError(true)}
            />
          ) : (
            <span className="font-semibold text-xl tracking-tight text-[#0F172A]">오아시스 마이카</span>
          )}
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-x-9 text-sm">
          {navItems.map((item) => {
            const active = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`nav-link ${active ? "active text-[#0F172A]" : ""}`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a href="tel:1599-1496" className="flex items-center gap-1.5 text-sm text-slate-600 hover:text-[#0F172A]">
            <Phone className="w-4 h-4" /> 1599-1496
          </a>
          <ConsultationCTA variant="nav" />
        </div>

        {/* Mobile */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="md:hidden border-t bg-white px-6 py-6 flex flex-col gap-y-4 text-lg">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="py-1"
            >
              {item.label}
            </Link>
          ))}
          <div className="pt-2 border-t">
            <a href="tel:1599-1496" className="block py-2 text-[#0F172A]">1599-1496 전화 상담</a>
            <ConsultationCTA variant="primary" onClick={() => setMobileOpen(false)} />
          </div>
        </div>
      )}
    </header>
  );
}
