import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiSend, FiMail, FiMapPin, FiClock } from 'react-icons/fi';

const initial = { name: '', email: '', message: '' };

export default function Contact() {
  const [form, setForm] = useState(initial);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = 'Name is required';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = 'Valid email required';
    if (form.message.trim().length < 10) next.message = 'Message should be at least 10 characters';
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
      setForm(initial);
      setTimeout(() => setStatus('idle'), 2500);
    }, 900);
  };

  return (
    <section id="contact" className="relative py-20 px-6">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,#2e66ff18,transparent_32%),radial-gradient(circle_at_80%_0%,#22d3ee16,transparent_30%),radial-gradient(circle_at_50%_100%,#a855f71a,transparent_28%)]" />
      <div className="mx-auto max-w-6xl grid gap-10 lg:grid-cols-3">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="rounded-3xl border border-white/15 bg-white/85 p-8 shadow-2xl backdrop-blur dark:border-slate-800 dark:bg-slate-900/70"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-500">Contact</p>
          <h2 className="mt-2 text-3xl font-semibold sm:text-4xl">Let's build together</h2>
          <p className="mt-3 text-slate-600 dark:text-slate-300">
            Tell me about your project or idea. I read every message and reply within 48 hours.
          </p>
          <div className="mt-6 space-y-3 text-sm font-semibold text-slate-700 dark:text-slate-200">
            <Info icon={<FiMail />} text="lajwantiharani7@gmail.com" />
            <Info icon={<FiMapPin />} text="Karachi, Pakistan" />
            <Info icon={<FiClock />} text="Response time: under 48h" />
          </div>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          viewport={{ once: true }}
          className="lg:col-span-2 grid gap-4 rounded-3xl border border-white/15 bg-white/90 p-8 shadow-2xl backdrop-blur dark:border-slate-800 dark:bg-slate-900/70"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <FloatingInput
              label="Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              error={errors.name}
              placeholder="Jane Doe"
            />
            <FloatingInput
              label="Email"
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              error={errors.email}
              placeholder="you@example.com"
            />
          </div>
          <FloatingTextarea
            label="Project details"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            error={errors.message}
            placeholder="What are you building?"
          />
          <div className="flex items-center justify-between gap-4">
            <div className="text-xs font-semibold text-slate-500 dark:text-slate-400">
              I respect your inbox—no spam, ever.
            </div>
            <button
              type="submit"
              disabled={status === 'loading'}
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-brand-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-500/25 transition hover:-translate-y-0.5 hover:shadow-brand-500/40 disabled:cursor-not-allowed disabled:opacity-70"
            >
              <FiSend className="transition group-hover:-translate-y-0.5" />
              {status === 'loading' ? 'Sending...' : status === 'success' ? 'Sent!' : 'Send message'}
            </button>
          </div>
          {status === 'success' && (
            <p className="text-sm font-semibold text-brand-500">Thanks! I'll get back to you soon.</p>
          )}
        </motion.form>
      </div>
    </section>
  );
}

function Info({ icon, text }) {
  return (
    <div className="inline-flex items-center gap-3 rounded-2xl bg-slate-100/70 px-3 py-2 text-slate-700 shadow-sm backdrop-blur dark:bg-slate-800/70 dark:text-slate-200">
      <span className="text-brand-500">{icon}</span>
      <span>{text}</span>
    </div>
  );
}

function FloatingInput({ label, value, onChange, error, type = 'text', placeholder }) {
  return (
    <label className="relative flex flex-col gap-2 text-sm font-semibold text-slate-600 dark:text-slate-200">
      <span className="pl-1 text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">{label}</span>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-800 shadow-inner focus:border-brand-500 focus:outline-none dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
      />
      {error && <span className="text-xs text-red-500">{error}</span>}
    </label>
  );
}

function FloatingTextarea({ label, value, onChange, error, placeholder }) {
  return (
    <label className="relative flex flex-col gap-2 text-sm font-semibold text-slate-600 dark:text-slate-200">
      <span className="pl-1 text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">{label}</span>
      <textarea
        rows={5}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-800 shadow-inner focus:border-brand-500 focus:outline-none dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
      />
      {error && <span className="text-xs text-red-500">{error}</span>}
    </label>
  );
}
