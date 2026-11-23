import React, { useState } from 'react';
import { Mail } from 'lucide-react';
import { SITE } from '../config';

const fieldClass =
  'w-full rounded-xl bg-white border border-line px-4 py-3 text-ink placeholder:text-muted/70 focus:outline-none focus:border-coral focus:ring-4 focus:ring-coral/15';

export const TrialSection: React.FC = () => {
  const [form, setForm] = useState({
    name: '',
    contact: '',
    course: 'Guitar',
    level: 'Complete beginner',
    time: 'Weekday evenings',
    note: '',
  });

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  // No backend yet: open the visitor's email app with the request filled in.
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Free trial request — ${form.course}`;
    const body = [
      `Name: ${form.name}`,
      `Phone / email: ${form.contact}`,
      `Course: ${form.course}`,
      `Level: ${form.level}`,
      `Preferred time: ${form.time}`,
      form.note ? `Notes: ${form.note}` : '',
    ]
      .filter(Boolean)
      .join('\n');
    window.location.href = `mailto:${SITE.contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="trial" className="py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="rounded-[2rem] bg-coral text-white overflow-hidden grid lg:grid-cols-2">
          <div className="p-8 sm:p-12 flex flex-col justify-center">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-white/80">Free trial class</p>
            <h2 className="mt-3 text-4xl sm:text-5xl font-extrabold leading-tight">
              Your first lesson is on us.
            </h2>
            <p className="mt-5 text-lg text-white/90 leading-relaxed max-w-md">
              Meet a mentor, try a short live lesson and leave with a plan for your level. No payment, no obligation.
            </p>
            <ul className="mt-8 space-y-2 text-white/95 font-medium">
              <li>✓ Guitar or western vocals</li>
              <li>✓ Online, from wherever you are</li>
              <li>✓ For kids, teens and adults</li>
            </ul>
          </div>

          <form onSubmit={onSubmit} className="bg-cream text-ink p-8 sm:p-12 space-y-4" aria-label="Book a free trial class">
            <div className="grid sm:grid-cols-2 gap-4">
              <label className="block">
                <span className="text-sm font-bold text-plum">Your name</span>
                <input required value={form.name} onChange={set('name')} className={`${fieldClass} mt-1.5`} placeholder="Full name" autoComplete="name" />
              </label>
              <label className="block">
                <span className="text-sm font-bold text-plum">Phone or email</span>
                <input required value={form.contact} onChange={set('contact')} className={`${fieldClass} mt-1.5`} placeholder="How should we reach you?" />
              </label>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <label className="block">
                <span className="text-sm font-bold text-plum">Course</span>
                <select value={form.course} onChange={set('course')} className={`${fieldClass} mt-1.5`}>
                  <option>Guitar</option>
                  <option>Western Vocals</option>
                  <option>Not sure yet</option>
                </select>
              </label>
              <label className="block">
                <span className="text-sm font-bold text-plum">Current level</span>
                <select value={form.level} onChange={set('level')} className={`${fieldClass} mt-1.5`}>
                  <option>Complete beginner</option>
                  <option>Some experience</option>
                  <option>Intermediate</option>
                  <option>Advanced</option>
                </select>
              </label>
            </div>

            <label className="block">
              <span className="text-sm font-bold text-plum">Preferred time</span>
              <select value={form.time} onChange={set('time')} className={`${fieldClass} mt-1.5`}>
                <option>Weekday mornings</option>
                <option>Weekday afternoons</option>
                <option>Weekday evenings</option>
                <option>Weekends</option>
              </select>
            </label>

            <label className="block">
              <span className="text-sm font-bold text-plum">Anything we should know? <span className="font-normal text-muted">(optional)</span></span>
              <textarea value={form.note} onChange={set('note')} rows={3} className={`${fieldClass} mt-1.5 resize-y`} placeholder="Age of the student, favourite songs, goals…" />
            </label>

            <button
              type="submit"
              className="w-full inline-flex justify-center items-center gap-2 px-6 py-4 rounded-full bg-plum hover:bg-plum-soft text-white font-bold cursor-pointer transition-colors"
            >
              <Mail className="w-5 h-5" aria-hidden="true" />
              Request my free trial
            </button>
            <p className="text-sm text-muted text-center">This opens your email app with your details filled in.</p>
          </form>
        </div>
      </div>
    </section>
  );
};
