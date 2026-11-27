import { useEffect, useId, useRef, useState } from 'react';

export type FormKind = 'course' | 'concert' | 'studio' | 'general';

type FieldType = 'text' | 'email' | 'tel' | 'date' | 'time' | 'number' | 'select' | 'textarea';
interface Field {
  name: string;
  label: string;
  type: FieldType;
  required?: boolean;
  options?: string[];
  placeholder?: string;
  autoComplete?: string;
  half?: boolean;
  hint?: string;
}

interface Props {
  kind: FormKind;
  endpoint: string;
  turnstileSiteKey?: string;
  whatsapp?: string; // digits with country code
  phone?: string; // E.164, e.g. +919804270201
  phoneDisplay?: string;
  email?: string;
  courses?: string[];
  facilities?: string[];
  eventTypes?: string[];
  studioPurposes?: string[];
  defaultCourse?: string;
  submitLabel?: string;
  /** Tailwind classes for the submit button */
  buttonClass?: string;
}

const LABELS: Record<FormKind, string> = {
  course: 'Course enquiry',
  concert: 'Concert / event booking enquiry',
  studio: 'Studio enquiry',
  general: 'General enquiry',
};

function buildFields(p: Props): Field[] {
  switch (p.kind) {
    case 'course':
      return [
        { name: 'name', label: 'Your name', type: 'text', required: true, autoComplete: 'name', half: true },
        { name: 'phone', label: 'Phone / WhatsApp', type: 'tel', required: true, autoComplete: 'tel', half: true },
        { name: 'email', label: 'Email', type: 'email', autoComplete: 'email', half: true },
        { name: 'learner', label: 'Who is the learner?', type: 'select', required: true, options: ['My child (I am the parent/guardian)', 'A teenager', 'Myself (adult)'], half: true },
        { name: 'course', label: 'Course', type: 'select', required: true, options: [...(p.courses ?? []), 'Not sure yet'], half: true },
        { name: 'mode', label: 'Preferred mode', type: 'select', required: true, options: ['In person in Kolkata', 'Online', 'Not sure yet'], half: true },
        { name: 'level', label: 'Current level', type: 'select', options: ['Complete beginner', 'Some experience', 'Intermediate', 'Advanced'], half: true },
        { name: 'age', label: 'Learner’s age', type: 'number', placeholder: 'Optional', half: true },
        { name: 'message', label: 'Anything we should know?', type: 'textarea', placeholder: 'Goals, favourite music, preferred days…' },
      ];
    case 'concert':
      return [
        { name: 'name', label: 'Your name', type: 'text', required: true, autoComplete: 'name', half: true },
        { name: 'organisation', label: 'Organisation / brand', type: 'text', autoComplete: 'organization', half: true },
        { name: 'email', label: 'Email', type: 'email', required: true, autoComplete: 'email', half: true },
        { name: 'phone', label: 'Phone / WhatsApp', type: 'tel', required: true, autoComplete: 'tel', half: true },
        { name: 'eventType', label: 'Event type', type: 'select', required: true, options: p.eventTypes ?? [], half: true },
        { name: 'eventDate', label: 'Event date', type: 'date', required: true, half: true },
        { name: 'location', label: 'Event location', type: 'text', required: true, placeholder: 'Venue and city', half: true },
        { name: 'audience', label: 'Expected audience', type: 'text', placeholder: 'e.g. 150 guests', half: true },
        { name: 'description', label: 'About the event', type: 'textarea', required: true, placeholder: 'Occasion, mood, duration of performance…' },
        { name: 'requirements', label: 'Additional requirements', type: 'textarea', placeholder: 'Sound, stage, song requests…' },
      ];
    case 'studio':
      return [
        { name: 'name', label: 'Your name', type: 'text', required: true, autoComplete: 'name', half: true },
        { name: 'email', label: 'Email', type: 'email', required: true, autoComplete: 'email', half: true },
        { name: 'phone', label: 'Phone / WhatsApp', type: 'tel', required: true, autoComplete: 'tel', half: true },
        { name: 'facility', label: 'Facility of interest', type: 'select', required: true, options: [...(p.facilities ?? []), 'Not sure yet'], half: true },
        { name: 'purpose', label: 'Purpose of booking', type: 'select', required: true, options: [...(p.studioPurposes ?? []), 'Other'], half: true },
        { name: 'date', label: 'Preferred date', type: 'date', required: true, half: true },
        { name: 'time', label: 'Preferred time', type: 'time', required: true, half: true },
        { name: 'duration', label: 'Duration', type: 'select', required: true, options: ['1 hour', '2 hours', '3 hours', 'Half day', 'Not sure'], half: true },
        { name: 'participants', label: 'Number of participants', type: 'number', required: true, half: true },
        { name: 'equipment', label: 'Equipment requirements', type: 'text', placeholder: 'Optional', half: true },
        { name: 'message', label: 'Additional message', type: 'textarea' },
      ];
    default:
      return [
        { name: 'name', label: 'Your name', type: 'text', required: true, autoComplete: 'name', half: true },
        { name: 'phone', label: 'Phone / WhatsApp', type: 'tel', required: true, autoComplete: 'tel', half: true },
        { name: 'email', label: 'Email', type: 'email', autoComplete: 'email' },
        { name: 'message', label: 'Your message', type: 'textarea', required: true },
      ];
  }
}

type Status = 'idle' | 'sending' | 'success' | 'error' | 'unconfigured';

const inputBase =
  'mt-2 block w-full rounded-xl border bg-white px-4 text-midnight placeholder:text-stone/60 transition focus:outline-none focus:ring-2 focus:ring-brass/50';

export default function EnquiryForm(props: Props) {
  const fields = buildFields(props);
  const uid = useId();
  const formRef = useRef<HTMLFormElement>(null);
  const [values, setValues] = useState<Record<string, string>>(() =>
    Object.fromEntries(fields.map((f) => [f.name, f.name === 'course' && props.defaultCourse ? props.defaultCourse : ''])),
  );
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<Status>('idle');
  const [message, setMessage] = useState('');

  // Pre-select a facility or course from the URL, e.g. /studio/?facility=Jam%20Room#enquire
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const patch: Record<string, string> = {};
    for (const key of ['facility', 'course']) {
      const v = params.get(key);
      const field = fields.find((f) => f.name === key);
      if (v && field?.options?.includes(v)) patch[key] = v;
    }
    if (Object.keys(patch).length) setValues((cur) => ({ ...cur, ...patch }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Optional Cloudflare Turnstile
  useEffect(() => {
    if (!props.turnstileSiteKey || document.getElementById('cf-turnstile-script')) return;
    const s = document.createElement('script');
    s.id = 'cf-turnstile-script';
    s.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js';
    s.async = true;
    s.defer = true;
    document.head.appendChild(s);
  }, [props.turnstileSiteKey]);

  const validate = () => {
    const e: Record<string, string> = {};
    for (const f of fields) {
      const v = (values[f.name] ?? '').trim();
      if (f.required && !v) e[f.name] = f.type === 'select' ? 'Please choose an option.' : 'Please fill in this field.';
      else if (v && f.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) e[f.name] = 'Please enter a valid email address.';
      else if (v && f.type === 'tel' && v.replace(/\D/g, '').length < 8) e[f.name] = 'Please enter a valid phone number.';
    }
    setErrors(e);
    return e;
  };

  const summaryText = () =>
    [
      `Hello Muzicks! ${LABELS[props.kind]}:`,
      ...fields.filter((f) => values[f.name]?.trim()).map((f) => `${f.label}: ${values[f.name].trim()}`),
    ].join('\n');

  const waHref = props.whatsapp ? `https://wa.me/${props.whatsapp}?text=${encodeURIComponent(summaryText())}` : '';

  const onSubmit = async (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    const e = validate();
    if (Object.keys(e).length) {
      const first = formRef.current?.querySelector<HTMLElement>(`[name="${Object.keys(e)[0]}"]`);
      first?.focus();
      return;
    }
    const fd = new FormData(ev.currentTarget);
    if (fd.get('company_website')) return; // honeypot: silently drop bots

    if (!props.endpoint) {
      setStatus('unconfigured');
      setMessage('Our online form is still being connected, so this message could not be sent from the website.');
      return;
    }

    setStatus('sending');
    try {
      const res = await fetch(props.endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          formType: props.kind,
          subject: `${LABELS[props.kind]} — Muzicks website`,
          page: window.location.href,
          ...values,
          'cf-turnstile-response': fd.get('cf-turnstile-response') ?? undefined,
        }),
      });
      if (!res.ok) throw new Error(String(res.status));
      setStatus('success');
      setMessage(`Thank you${values.name ? `, ${values.name.split(' ')[0]}` : ''}. Your enquiry has been sent and we will get back to you soon.`);
      setValues(Object.fromEntries(fields.map((f) => [f.name, ''])));
    } catch {
      setStatus('error');
      setMessage('Sorry, your enquiry could not be sent. Please try again, or contact us directly.');
    }
  };

  if (status === 'success') {
    return (
      <div role="status" className="rounded-2xl bg-white p-8 ring-1 ring-line">
        <p className="font-[family-name:var(--font-display)] text-3xl">Enquiry sent</p>
        <p className="mt-3 text-stone">{message}</p>
        <button type="button" onClick={() => setStatus('idle')} className="mt-6 font-semibold underline underline-offset-4">
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <form ref={formRef} onSubmit={onSubmit} noValidate data-enquiry-form aria-label={LABELS[props.kind]} className="relative rounded-[1.75rem] bg-white p-6 ring-1 ring-line sm:p-9">
      <p className="mb-6 text-sm text-stone">
        Fields marked <span className="text-ember" aria-hidden="true">*</span>
        <span className="sr-only">with an asterisk</span> are required.
      </p>
      <div className="grid gap-x-5 gap-y-5 sm:grid-cols-2">
        {fields.map((f) => {
          const id = `${uid}-${f.name}`;
          const err = errors[f.name];
          const common = {
            id,
            name: f.name,
            value: values[f.name] ?? '',
            required: f.required,
            'aria-invalid': err ? true : undefined,
            'aria-describedby': err ? `${id}-err` : undefined,
            onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
              setValues((v) => ({ ...v, [f.name]: e.target.value })),
          };
          const border = err ? 'border-ember' : 'border-line';
          return (
            <div key={f.name} className={f.half ? '' : 'sm:col-span-2'}>
              <label htmlFor={id} className="font-semibold">
                {f.label}
                {f.required && <span className="ml-0.5 text-ember" aria-hidden="true">*</span>}
              </label>
              {f.type === 'select' ? (
                <select {...common} className={`${inputBase} ${border} h-12`}>
                  <option value="">Select…</option>
                  {(f.options ?? []).map((o) => (
                    <option key={o} value={o}>{o}</option>
                  ))}
                </select>
              ) : f.type === 'textarea' ? (
                <textarea {...common} rows={4} placeholder={f.placeholder} className={`${inputBase} ${border} py-3`} />
              ) : (
                <input
                  {...common}
                  type={f.type}
                  min={f.type === 'number' ? 1 : undefined}
                  placeholder={f.placeholder}
                  autoComplete={f.autoComplete}
                  className={`${inputBase} ${border} h-12`}
                />
              )}
              {err && <p id={`${id}-err`} className="mt-1.5 text-sm text-[#b2431a]">{err}</p>}
            </div>
          );
        })}
      </div>

      {/* Honeypot — hidden from people, tempting to bots */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label>Website<input type="text" name="company_website" tabIndex={-1} autoComplete="off" /></label>
      </div>

      {props.turnstileSiteKey && <div className="cf-turnstile mt-6" data-sitekey={props.turnstileSiteKey} />}

      {(status === 'error' || status === 'unconfigured') && (
        <div role="alert" className="mt-6 rounded-xl bg-[#fbeee6] p-5 text-[#7a2e10]">
          <p className="font-semibold">{message}</p>
          <p className="mt-1">
            {waHref ? 'Send the same details on WhatsApp instead — they are already filled in.' : 'Please contact us directly.'}
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            {waHref && (
              <a href={waHref} target="_blank" rel="noopener" className="btn bg-[#1f8f55] text-white hover:bg-[#187446] !min-h-11">
                Send on WhatsApp
              </a>
            )}
            {props.phone && <a href={`tel:${props.phone}`} className="btn btn-outline-dark !min-h-11">Call {props.phoneDisplay ?? props.phone}</a>}
          </div>
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'sending'}
        className={`btn mt-8 w-full sm:w-auto disabled:opacity-60 ${props.buttonClass ?? 'btn-dark'}`}
      >
        {status === 'sending' ? 'Sending…' : props.submitLabel ?? 'Send enquiry'}
      </button>
    </form>
  );
}
