import React, { useEffect } from 'react';
import { Award, CheckCircle2, Quote, ArrowRight, Image as ImageIcon } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { LEGENDS, Legend } from '../data/legends';
import { PageId, PAGE_ROUTES } from '../types';

interface LegendsViewProps {
  onNavigate: (page: PageId) => void;
}

const BN_DIGITS = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
const toBnDigits = (s: string) => s.replace(/\d/g, (d) => BN_DIGITS[Number(d)]);

// First + last initial, ignoring titles: "Dr. B. R. Ambedkar" -> "BA"
const initialsOf = (name: string) => {
  const words = name
    .replace(/^(Dr\.|Shahid)\s+/i, '')
    .split(/[\s.]+/)
    .filter(Boolean);
  if (words.length === 0) return '';
  const first = words[0][0];
  const last = words.length > 1 ? words[words.length - 1][0] : '';
  return (first + last).toUpperCase();
};

const scrollToId = (id: string) => {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  window.history.replaceState(window.history.state, '', `${PAGE_ROUTES.legends}#${id}`);
};

export const LegendsView: React.FC<LegendsViewProps> = ({ onNavigate }) => {
  const { isBengali } = useLanguage();
  const t = (b: { en: string; bn: string }) => (isBengali ? b.bn : b.en);

  // Support deep links like /legends#gopinath-saha
  useEffect(() => {
    const id = window.location.hash.replace(/^#/, '');
    if (!id) return;
    const timer = window.setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ block: 'start' });
    }, 50);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <div className="space-y-14 sm:space-y-20 pb-16">
      {/* Header band */}
      <section className="bg-gradient-to-r from-blue-900 via-blue-950 to-blue-900 text-white py-12 sm:py-14 px-4 sm:px-6 lg:px-8 border-b-4 border-orange-500">
        <div className="max-w-6xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/20 text-orange-300 text-xs font-bold uppercase tracking-wider border border-orange-400/30">
            <Award className="w-3.5 h-3.5" />
            <span>{isBengali ? 'স্মরণীয় ব্যক্তিত্ব' : 'Our Legends'}</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif-heading font-bold tracking-tight">
            {isBengali ? 'শুঁড়ি সমাজের পথপ্রদর্শক' : 'Pioneers of the Sunri Community'}
          </h1>
          <p className="text-blue-100 text-base sm:text-lg max-w-3xl leading-relaxed">
            {isBengali
              ? 'যাঁদের সাহস ও আত্মত্যাগ পশ্চিমবঙ্গের তপশিলি জাতি শুঁড়ি সমাজের অধিকার ও মর্যাদার পথ গড়ে দিয়েছে, তাঁদের প্রতি আমাদের শ্রদ্ধাঞ্জলি।'
              : 'Remembering those whose courage and sacrifice shaped the rights and dignity of the Scheduled Caste Sunri community of West Bengal.'}
          </p>

          {/* Jump links */}
          <nav aria-label={isBengali ? 'ব্যক্তিত্ব তালিকা' : 'Legends on this page'} className="flex flex-wrap gap-2 pt-2">
            {LEGENDS.map((l) => (
              <a
                key={l.id}
                href={`${PAGE_ROUTES.legends}#${l.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToId(l.id);
                }}
                className="px-3.5 py-1.5 rounded-full text-sm bg-white/10 hover:bg-white/20 ring-1 ring-inset ring-white/20 text-white transition-colors"
              >
                {t(l.name)}
              </a>
            ))}
          </nav>
        </div>
      </section>

      {/* Profiles */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14 sm:space-y-20">
        {LEGENDS.map((legend, idx) => (
          <React.Fragment key={legend.id}>
            {idx > 0 && <hr className="border-slate-200" />}
            <LegendProfile legend={legend} index={idx} isBengali={isBengali} />
          </React.Fragment>
        ))}
      </div>

      {/* Closing */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-white border border-slate-200 p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <p className="text-slate-700 max-w-2xl">
            {isBengali
              ? 'শুঁড়ি সমাজের ইতিহাস, সাংবিধানিক স্বীকৃতি ও ঐতিহ্য সম্পর্কে আরও জানুন।'
              : 'Learn more about the history, constitutional recognition and traditions of the Sunri community.'}
          </p>
          <a
            href={PAGE_ROUTES.heritage}
            onClick={(e) => {
              e.preventDefault();
              onNavigate('heritage');
            }}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md bg-blue-950 hover:bg-blue-900 text-white text-sm font-semibold whitespace-nowrap transition-colors self-start sm:self-auto"
          >
            {isBengali ? 'সাংস্কৃতিক ঐতিহ্য' : 'Cultural Heritage'}
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>
    </div>
  );
};

/* ------------------------------------------------------------------ */

const Pending: React.FC<{ isBengali: boolean; en: string; bn: string }> = ({ isBengali, en, bn }) => (
  <p className="rounded-lg border border-dashed border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-500">
    {isBengali ? bn : en}
  </p>
);

const LegendProfile: React.FC<{ legend: Legend; index: number; isBengali: boolean }> = ({
  legend,
  index,
  isBengali,
}) => {
  const t = (b: { en: string; bn: string }) => (isBengali ? b.bn : b.en);
  const otherName = isBengali ? legend.name.en : legend.name.bn;
  const number = String(index + 1).padStart(2, '0');
  const bio = isBengali ? legend.bio.bn : legend.bio.en;
  const contributions = isBengali ? legend.contributions.bn : legend.contributions.en;
  const photoRight = index % 2 === 1;

  return (
    <section id={legend.id} className="scroll-mt-24 sm:scroll-mt-28 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
      {/* Portrait */}
      <figure className={`lg:col-span-4 ${photoRight ? 'lg:order-2' : ''}`}>
        <div className="relative mx-auto max-w-[300px] lg:max-w-none aspect-[4/5] rounded-2xl overflow-hidden bg-blue-950 ring-1 ring-slate-200 shadow-sm border-b-4 border-orange-500">
          {legend.photo ? (
            <img
              src={legend.photo}
              alt={t(legend.name)}
              className="w-full h-full object-cover object-top"
              loading="lazy"
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center gap-3 text-white/90">
              <span className="font-serif-heading text-5xl sm:text-6xl font-bold tracking-wide">
                {initialsOf(legend.name.en)}
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs text-blue-200/80">
                <ImageIcon className="w-3.5 h-3.5" />
                {isBengali ? 'ছবি শীঘ্রই যুক্ত হবে' : 'Photo to be added'}
              </span>
            </div>
          )}
        </div>
      </figure>

      {/* Text */}
      <div className={`lg:col-span-8 space-y-5 ${photoRight ? 'lg:order-1' : ''}`}>
        <div className="space-y-1.5">
          <div className="flex items-center gap-3 text-sm font-semibold">
            <span className="text-orange-600">{isBengali ? toBnDigits(number) : number}</span>
            {t(legend.years) && (
              <>
                <span className="h-px w-6 bg-slate-300" aria-hidden="true" />
                <span className="text-slate-500">{t(legend.years)}</span>
              </>
            )}
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif-heading font-bold text-blue-950 leading-tight">
            {t(legend.name)}
          </h2>
          {otherName && <p className="text-slate-500">{otherName}</p>}
          {t(legend.role) && <p className="text-lg text-slate-700 italic">{t(legend.role)}</p>}
          <span className="block h-1 w-12 rounded-full bg-orange-500 mt-3" aria-hidden="true" />
        </div>

        {/* Biography */}
        <div className="space-y-3 text-slate-700 leading-relaxed">
          {bio.length > 0 ? (
            bio.map((p, i) => <p key={i}>{p}</p>)
          ) : (
            <Pending
              isBengali={isBengali}
              en="Biography to be added — awaiting verified details from the Samity."
              bn="জীবনী শীঘ্রই যুক্ত হবে — সমিতির যাচাইকৃত তথ্যের অপেক্ষায়।"
            />
          )}
        </div>

        {/* Contribution */}
        <div className="space-y-3">
          <h3 className="text-sm font-bold uppercase tracking-wider text-blue-900">
            {isBengali ? 'শুঁড়ি সমাজ ও তপশিলি জাতির অধিকারে অবদান' : 'Contribution to the Sunri community & SC rights'}
          </h3>
          {contributions.length > 0 ? (
            <ul className="space-y-2">
              {contributions.map((c, i) => (
                <li key={i} className="flex items-start gap-2.5 text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-orange-500 mt-1 shrink-0" />
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          ) : (
            <Pending
              isBengali={isBengali}
              en="Key contributions to be added."
              bn="মূল অবদানসমূহ শীঘ্রই যুক্ত হবে।"
            />
          )}
        </div>

        {/* Quote (optional) */}
        {legend.quote && t(legend.quote) && (
          <blockquote className="relative border-l-4 border-orange-500 bg-white rounded-r-lg px-5 py-4 text-slate-800 font-serif-heading text-lg">
            <Quote className="absolute -top-2 -left-3 w-5 h-5 text-orange-500 bg-slate-50 rounded" aria-hidden="true" />
            {t(legend.quote)}
          </blockquote>
        )}

        {/* Key dates (optional) */}
        {legend.milestones && legend.milestones.length > 0 && (
          <dl className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-2 text-sm">
            {legend.milestones.map((m, i) => (
              <React.Fragment key={i}>
                <dt className="font-semibold text-blue-950">{t(m.year)}</dt>
                <dd className="text-slate-700">{t(m.text)}</dd>
              </React.Fragment>
            ))}
          </dl>
        )}
      </div>
    </section>
  );
};
