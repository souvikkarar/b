import React, { useState, useEffect, useRef } from 'react';
import {
  Menu,
  X,
  Sparkles,
  Landmark,
  Mail,
  Phone,
  BookOpen,
  ChevronRight,
} from 'lucide-react';
import { TreeLogo } from './TreeLogo';
import { useLanguage } from '../context/LanguageContext';
import { PageId, PAGE_ROUTES } from '../types';

interface NavbarProps {
  activePage: PageId;
  onNavigate: (page: PageId) => void;
}

type NavItem = {
  id: PageId;
  labelEn: string;
  labelBn: string;
  shortEn: string;
  shortBn: string;
  icon: React.ReactNode;
};

const NAV_ITEMS: NavItem[] = [
  { id: 'home', labelEn: 'Home', labelBn: 'প্রথম পাতা', shortEn: 'Home', shortBn: 'প্রথম পাতা', icon: <Landmark className="w-4 h-4" /> },
  { id: 'about', labelEn: 'About Us', labelBn: 'আমাদের কথা', shortEn: 'About', shortBn: 'আমাদের কথা', icon: <BookOpen className="w-4 h-4" /> },
  { id: 'heritage', labelEn: 'Cultural Heritage', labelBn: 'সাংস্কৃতিক ঐতিহ্য', shortEn: 'Heritage', shortBn: 'ঐতিহ্য', icon: <Sparkles className="w-4 h-4" /> },
  { id: 'contact', labelEn: 'Contact Us', labelBn: 'যোগাযোগ', shortEn: 'Contact', shortBn: 'যোগাযোগ', icon: <Mail className="w-4 h-4" /> },
];

const PHONE_LANDLINE = { display: '033-2227 1599', displayBn: '০৩৩-২২২৭ ১৫৯৯', href: 'tel:+913322271599' };
const PHONE_MOBILE = { display: '94330 41597', displayBn: '৯৪৩৩০ ৪১৫৯৭', href: 'tel:+919433041597' };

export const Navbar: React.FC<NavbarProps> = ({ activePage, onNavigate }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { lang, setLang, isBengali } = useLanguage();
  const ribbonRef = useRef<HTMLDivElement>(null);
  const [ribbonHeight, setRibbonHeight] = useState<number>(34);

  // Measure the ribbon so the header sticks with only the main bar visible.
  useEffect(() => {
    const updateHeight = () => {
      if (ribbonRef.current) setRibbonHeight(ribbonRef.current.offsetHeight);
    };
    updateHeight();
    window.addEventListener('resize', updateHeight);
    return () => window.removeEventListener('resize', updateHeight);
  }, [lang]);

  // Soft shadow only once the bar is actually stuck.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > ribbonHeight);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [ribbonHeight]);

  // Close menu on Escape.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  // Lock page scroll while the menu is open; close it if the viewport grows to lg.
  useEffect(() => {
    if (!menuOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const mq = window.matchMedia('(min-width: 1024px)');
    const onChange = () => mq.matches && setMenuOpen(false);
    mq.addEventListener('change', onChange);
    return () => {
      document.body.style.overflow = prev;
      mq.removeEventListener('change', onChange);
    };
  }, [menuOpen]);

  const go = (pageId: PageId) => (e: React.MouseEvent) => {
    e.preventDefault();
    setMenuOpen(false);
    onNavigate(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const inlineItems = NAV_ITEMS;

  const LanguageSwitch: React.FC = () => (
    <div
      className="inline-flex items-center rounded-full bg-white/10 ring-1 ring-inset ring-white/20 p-0.5 text-[11px] sm:text-xs font-semibold"
      role="group"
      aria-label={isBengali ? 'ভাষা নির্বাচন' : 'Language selection'}
    >
      {(['en', 'bn'] as const).map((code) => {
        const active = lang === code;
        return (
          <button
            key={code}
            onClick={() => setLang(code)}
            aria-pressed={active}
            title={code === 'en' ? 'English' : 'বাংলা'}
            className={`px-2.5 py-0.5 rounded-full leading-5 cursor-pointer transition-colors ${
              active ? 'bg-white text-blue-950 shadow-sm' : 'text-blue-200 hover:text-white'
            }`}
          >
            {code === 'en' ? 'EN' : 'বাংলা'}
          </button>
        );
      })}
    </div>
  );

  return (
    <header className="sticky z-50 w-full" style={{ top: `-${ribbonHeight}px` }}>
      {/* 1. Utility ribbon — scrolls away */}
      <div ref={ribbonRef} className="bg-blue-950 text-blue-200 border-b-2 border-orange-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:h-9 flex flex-col lg:flex-row lg:items-center lg:justify-between lg:gap-4 text-[11px] sm:text-xs">
          {/* Line 1 (mobile/tablet: full width) */}
          <p className="w-full lg:w-auto flex flex-wrap lg:flex-nowrap items-center gap-x-3 min-[400px]:gap-x-2 gap-y-0.5 py-1.5 lg:py-0 border-b border-white/10 lg:border-0 leading-snug tracking-wide">
            <span className="whitespace-nowrap">
              {isBengali ? 'পূর্বতন রেজিস্ট্রেশন নং ০৪৫২২' : 'Legacy Registration No. 04522'}
            </span>
            <span className="hidden min-[400px]:inline text-blue-200/40" aria-hidden="true">|</span>
            <span className="whitespace-nowrap">
              {isBengali ? 'নতুন রেজিস্ট্রেশন নং SO969057' : 'New Registration No. SO969057'}
            </span>
          </p>

          {/* Line 2 (mobile/tablet): phone numbers + language capsule */}
          <div className="flex items-center gap-4 sm:gap-5 w-full lg:w-auto justify-between lg:justify-end py-1.5 lg:py-0 shrink-0">
            <div className="flex items-center gap-2 min-w-0">
              <Phone className="w-3.5 h-3.5 text-orange-500 shrink-0" aria-hidden="true" />
              <a href={PHONE_LANDLINE.href} className="hover:text-white transition-colors whitespace-nowrap">
                {isBengali ? PHONE_LANDLINE.displayBn : PHONE_LANDLINE.display}
              </a>
              <span className="text-blue-200/40" aria-hidden="true">·</span>
              <a href={PHONE_MOBILE.href} className="hover:text-white transition-colors whitespace-nowrap">
                {isBengali ? PHONE_MOBILE.displayBn : PHONE_MOBILE.display}
              </a>
            </div>
            <span className="hidden lg:block h-3.5 w-px bg-blue-200/25" aria-hidden="true" />
            <LanguageSwitch />
          </div>
        </div>
      </div>

      {/* 2. Main bar — sticky */}
      <div
        className={`relative bg-white transition-shadow duration-200 ${
          scrolled || menuOpen ? 'shadow-[0_2px_12px_rgba(15,23,42,0.08)]' : ''
        } border-b border-slate-200`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[68px] sm:h-[76px] flex items-center justify-between gap-2 min-[380px]:gap-4">
          {/* Emblem + name */}
          <a
            href={PAGE_ROUTES.home}
            onClick={go('home')}
            className="flex items-center gap-2 min-[380px]:gap-3 min-w-0 rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-900"
            aria-label={isBengali ? 'বঙ্গীয় সাহা সমিতি — প্রথম পাতা' : 'Bangiya Saha Samity — Home'}
          >
            <TreeLogo className="w-10 h-10 min-[380px]:w-11 min-[380px]:h-11 sm:w-13 sm:h-13 rounded-full" />
            <div className="min-w-0 border-l border-slate-200 pl-2 min-[380px]:pl-3">
              <div className="font-serif-heading font-bold text-blue-950 leading-tight text-[14px] min-[350px]:text-[15px] min-[380px]:text-base sm:text-xl whitespace-nowrap">
                {isBengali ? 'বঙ্গীয় সাহা সমিতি' : 'Bangiya Saha Samity'}
              </div>
              <div className="flex flex-wrap items-center gap-x-1.5 text-[11px] sm:text-xs text-slate-500 leading-snug mt-0.5">
                <span className="whitespace-nowrap">{isBengali ? 'পশ্চিমবঙ্গ, শুঁড়ি সমাজ' : 'West Bengal, Sunri Samaj'}</span>
                <span className="whitespace-nowrap">
                  <span className="text-orange-500 mr-1.5" aria-hidden="true">•</span>
                  {isBengali ? 'স্থাপিত ১৯৩৬–৩৭' : 'Est. 1936–37'}
                </span>
              </div>
            </div>
          </a>

          {/* Inline navigation (laptop & desktop, lg+) */}
          <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1" aria-label={isBengali ? 'প্রধান সূচিপত্র' : 'Main navigation'}>
            {inlineItems.map((item) => {
              const active = activePage === item.id;
              return (
                <a
                  key={item.id}
                  href={PAGE_ROUTES[item.id]}
                  onClick={go(item.id)}
                  aria-current={active ? 'page' : undefined}
                  className={`relative px-2 xl:px-3 py-2 text-[13px] xl:text-sm font-medium whitespace-nowrap transition-colors ${
                    active ? 'text-blue-950' : 'text-slate-600 hover:text-blue-950'
                  }`}
                >
                  {isBengali ? item.shortBn : item.shortEn}
                  <span
                    className={`absolute left-2 right-2 xl:left-3 xl:right-3 -bottom-0.5 h-0.5 rounded-full bg-orange-500 transition-opacity ${
                      active ? 'opacity-100' : 'opacity-0'
                    }`}
                    aria-hidden="true"
                  />
                </a>
              );
            })}
          </nav>

          {/* Menu toggle (tablet & mobile only) */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className={`lg:hidden inline-flex items-center gap-2 h-10 px-3 rounded-md border text-sm font-semibold shrink-0 cursor-pointer transition-colors ${
              menuOpen
                ? 'bg-blue-950 border-blue-950 text-white'
                : 'bg-white border-slate-300 text-blue-950 hover:bg-slate-50'
            }`}
            aria-expanded={menuOpen}
            aria-controls="site-menu"
            aria-label={isBengali ? 'মেনু' : 'Toggle navigation menu'}
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            <span className="hidden min-[400px]:inline">
              {menuOpen ? (isBengali ? 'বন্ধ' : 'Close') : isBengali ? 'মেনু' : 'Menu'}
            </span>
          </button>
        </div>

        {/* Dropdown menu (tablet & mobile only) */}
        <div
          className={`lg:hidden fixed inset-0 -z-10 bg-slate-950/40 transition-opacity duration-200 ${
            menuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
        <nav
          id="site-menu"
          aria-label={isBengali ? 'ওয়েবসাইট সূচিপত্র' : 'Site navigation'}
          inert={!menuOpen}
          className={`lg:hidden absolute top-full inset-x-0 bg-white border-t border-slate-100 shadow-[0_12px_24px_-8px_rgba(15,23,42,0.25)] max-h-[calc(100dvh-76px)] overflow-y-auto overscroll-contain origin-top transition-[opacity,transform] duration-200 ease-out ${
            menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'
          }`}
        >
          <div className="max-w-3xl mx-auto px-4 sm:px-6 pt-4 pb-5">
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1 sm:gap-x-4">
              {NAV_ITEMS.map((item) => {
                const active = activePage === item.id;
                return (
                  <li key={item.id}>
                    <a
                      href={PAGE_ROUTES[item.id]}
                      onClick={go(item.id)}
                      aria-current={active ? 'page' : undefined}
                      className={`group flex items-center gap-3 rounded-lg px-3 py-2.5 transition-colors ${
                        active ? 'bg-blue-50/70' : 'hover:bg-slate-50'
                      }`}
                    >
                      <span
                        className={`flex items-center justify-center w-9 h-9 rounded-md shrink-0 transition-colors ${
                          active
                            ? 'bg-blue-950 text-white'
                            : 'bg-slate-100 text-blue-900 group-hover:bg-white group-hover:ring-1 group-hover:ring-slate-200'
                        }`}
                      >
                        {item.icon}
                      </span>
                      <span className={`flex-1 text-[15px] ${active ? 'font-semibold text-blue-950' : 'text-slate-700 group-hover:text-blue-950'}`}>
                        {isBengali ? item.labelBn : item.labelEn}
                      </span>
                      {active ? (
                        <span className="w-1.5 h-1.5 rounded-full bg-orange-500 shrink-0" aria-hidden="true" />
                      ) : (
                        <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-slate-400 shrink-0" aria-hidden="true" />
                      )}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};
