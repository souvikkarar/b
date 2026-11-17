import React, { useState, useEffect } from 'react';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { PageId, PAGE_ROUTES, getPageFromPath, isLegacyPageHash } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomeView } from './components/HomeView';
import { AboutView } from './components/AboutView';
import { CulturalHeritageView } from './components/CulturalHeritageView';
import { LegendsView } from './components/LegendsView';
import { UpdatesView } from './components/UpdatesView';
import { ContactView } from './components/ContactView';

function MainApp() {
  const { isBengali } = useLanguage();
  const [activePage, setActivePage] = useState<PageId>(() => {
    return getPageFromPath(window.location.pathname, window.location.hash);
  });

  // Sync path-based routing with browser window location & history
  useEffect(() => {
    // If arriving with a legacy hash (e.g. /#about or #about), migrate cleanly to /about.
    // In-page anchors such as /legends#gopinath-saha are left alone.
    if (window.location.hash && isLegacyPageHash(window.location.hash)) {
      const pageFromHash = getPageFromPath(window.location.pathname, window.location.hash);
      const targetPath = PAGE_ROUTES[pageFromHash] || '/';
      window.history.replaceState({ page: pageFromHash }, '', targetPath);
      setActivePage(pageFromHash);
    } else {
      const page = getPageFromPath(window.location.pathname);
      setActivePage(page);
    }

    const handlePopState = () => {
      const page = getPageFromPath(window.location.pathname);
      setActivePage(page);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Update dynamic document title for each distinct URL page
  useEffect(() => {
    const pageTitles: Record<PageId, { en: string; bn: string }> = {
      home: {
        en: 'Bangiya Saha Samity (Sunri Samaj) - A Social Organisation of the Scheduled Caste Sunri Community of W.B',
        bn: 'বঙ্গীয় সাহা সমিতি (শুঁড়ি সমাজ) - পশ্চিমবঙ্গের তপশিলি জাতি শুঁড়ি সমাজের সামাজিক প্রতিষ্ঠান',
      },
      about: {
        en: 'About Us & History | Bangiya Saha Samity (Sunri Samaj)',
        bn: 'আমাদের সম্পর্কে ও ইতিবৃত্ত | বঙ্গীয় সাহা সমিতি',
      },
      heritage: {
        en: 'Cultural Heritage & History | Bangiya Saha Samity',
        bn: 'সাংস্কৃতিক ঐতিহ্য ও ইতিবৃত্ত | বঙ্গীয় সাহা সমিতি',
      },
      legends: {
        en: 'Our Legends — Pioneers of the Sunri Community | Bangiya Saha Samity',
        bn: 'স্মরণীয় ব্যক্তিত্ব — শুঁড়ি সমাজের পথপ্রদর্শক | বঙ্গীয় সাহা সমিতি',
      },
      updates: {
        en: 'Updates & Announcements | Bangiya Saha Samity',
        bn: 'সাম্প্রতিক খবর ও বিজ্ঞপ্তি | বঙ্গীয় সাহা সমিতি',
      },
      contact: {
        en: 'Contact Us & Central Office | Bangiya Saha Samity',
        bn: 'যোগাযোগ ও কেন্দ্রীয় কার্যালয় | বঙ্গীয় সাহা সমিতি',
      },
    };

    const titleConfig = pageTitles[activePage];
    if (titleConfig) {
      document.title = isBengali ? titleConfig.bn : titleConfig.en;
    }
  }, [activePage, isBengali]);

  const navigateTo = (page: PageId) => {
    setActivePage(page);
    const targetPath = PAGE_ROUTES[page] || '/';
    if (window.location.pathname !== targetPath) {
      window.history.pushState({ page }, '', targetPath);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans selection:bg-orange-500 selection:text-white">
      {/* Sticky White & Blue Header with Saffron Accents */}
      <Navbar
        activePage={activePage}
        onNavigate={navigateTo}
      />

      {/* Dynamic View Display */}
      <main className="flex-grow">
        {activePage === 'home' && <HomeView onNavigate={navigateTo} />}

        {activePage === 'about' && <AboutView onNavigate={navigateTo} />}

        {activePage === 'heritage' && <CulturalHeritageView onNavigate={navigateTo} />}

        {activePage === 'legends' && <LegendsView onNavigate={navigateTo} />}

        {activePage === 'updates' && <UpdatesView onNavigate={navigateTo} />}

        {activePage === 'contact' && (
          <ContactView />
        )}
      </main>

      {/* Global White, Blue, Saffron Footer */}
      <Footer
        activePage={activePage}
        onNavigate={navigateTo}
      />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <MainApp />
    </LanguageProvider>
  );
}
