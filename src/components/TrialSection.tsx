import React, { useState } from 'react';
import { SITE } from '../config';

const fieldClass =
  'mt-1.5 w-full h-12 rounded-md bg-white border border-string px-3.5 text-graphite placeholder:text-muted/70 focus:outline-none focus:border-cobalt focus:ring-2 focus:ring-cobalt/25';

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
    <section id="trial" className="bg-cobalt text-white">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-20 sm:py-28 grid lg:grid-cols-[1fr_1.15fr] gap-12 lg:gap-20 items-start">
        <div>
          <h2 className="text-4xl sm:text-6xl font-bold tracking-[-0.035em] leading-[1.02]">Your first lesson is on us.</h2>
          <p className="mt-6 text-lg sm:text-xl text-white/85 leading-relaxed max-w-md">
            Meet a mentor, try a short live lesson and leave with a plan for your level. No payment, no obligation.
          </p>
        </div>

        <form
          onSubmit={onSubmit}
          className="bg-paper text-graphite rounded-xl p-6 sm:p-9 space-y-5"
          aria-label="Book a free trial class"
        >
          <div className="grid sm:grid-cols-2 gap-5">
            <label className="block">
              <span className="font-semibold">Your name</span>
              <input required value={form.name} onChange={set('name')} className={fieldClass} autoComplete="name" />
            </label>
            <label className="block">
              <span className="font-semibold">Phone or email</span>
              <input required value={form.contact} onChange={set('contact')} className={fieldClass} placeholder="So we can reach you" />
            </label>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            <label className="block">
              <span className="font-semibold">Course</span>
              <select value={form.course} onChange={set('course')} className={fieldClass}>
                <option>Guitar</option>
                <option>Western Vocals</option>
                <option>Not sure yet</option>
              </select>
            </label>
            <label className="block">
              <span className="font-semibold">Current level</span>
              <select value={form.level} onChange={set('level')} className={fieldClass}>
                <option>Complete beginner</option>
                <option>Some experience</option>
                <option>Intermediate</option>
                <option>Advanced</option>
              </select>
            </label>
          </div>

          <label className="block">
            <span className="font-semibold">Preferred time</span>
            <select value={form.time} onChange={set('time')} className={fieldClass}>
              <option>Weekday mornings</option>
              <option>Weekday afternoons</option>
              <option>Weekday evenings</option>
              <option>Weekends</option>
            </select>
          </label>

          <label className="block">
            <span className="font-semibold">Anything we should know?</span> <span className="text-muted">Optional</span>
            <textarea
              value={form.note}
              onChange={set('note')}
              rows={3}
              className={`${fieldClass} h-auto py-3 resize-y`}
              placeholder="The student’s age, favourite songs, goals"
            />
          </label>

          <button
            type="submit"
            className="w-full h-14 rounded-md bg-graphite hover:bg-black text-white text-lg font-semibold cursor-pointer transition-colors"
          >
            Request my free trial
          </button>
          <p className="text-sm text-muted text-center">This opens your email app with your details filled in.</p>
        </form>
      </div>
    </section>
  );
};
