import { useEffect, useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiExternalLink, FiArrowLeft, FiArrowRight, FiPlayCircle } from 'react-icons/fi';
import { projects } from '../data/projects';

export default function Projects() {
  const [index, setIndex] = useState(0);
  const total = projects.length;

  const next = () => setIndex((i) => (i + 1) % total);
  const prev = () => setIndex((i) => (i - 1 + total) % total);

  useEffect(() => {
    const id = setInterval(next, 7000);
    return () => clearInterval(id);
  }, [total]);

  const current = useMemo(() => projects[index], [index]);

  return (
    <section id="projects" className="relative py-20 px-6">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_20%,#2e66ff18,transparent_35%),radial-gradient(circle_at_80%_10%,#22d3ee14,transparent_32%),radial-gradient(circle_at_50%_90%,#a855f718,transparent_28%)]" />
      <div className="mx-auto flex max-w-6xl flex-col gap-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="space-y-2">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-500">Projects</p>
            <h2 className="text-3xl font-semibold sm:text-4xl">Recent work</h2>
            <p className="text-slate-600 dark:text-slate-300">Case studies that mix UX polish with production-ready engineering.</p>
          </div>
          <div className="flex gap-3 text-lg">
            <button
              onClick={prev}
              className="rounded-full border border-slate-300 bg-white/70 p-3 shadow-sm backdrop-blur hover:border-brand-500 hover:text-brand-500 dark:border-slate-700 dark:bg-slate-900/60"
              aria-label="Previous project"
            >
              <FiArrowLeft />
            </button>
            <button
              onClick={next}
              className="rounded-full border border-slate-300 bg-white/70 p-3 shadow-sm backdrop-blur hover:border-brand-500 hover:text-brand-500 dark:border-slate-700 dark:bg-slate-900/60"
              aria-label="Next project"
            >
              <FiArrowRight />
            </button>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-5 items-stretch">
          <div className="lg:col-span-3">
            <div className="relative overflow-hidden rounded-[28px] border border-white/15 bg-white/80 shadow-2xl backdrop-blur dark:border-slate-800 dark:bg-slate-900/70">
              <AnimatePresence mode="popLayout">
                <motion.img
                  key={current.image}
                  src={current.image}
                  alt={current.title}
                  initial={{ opacity: 0, scale: 1.02 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.6 }}
                  className="h-full w-full object-cover"
                />
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-slate-950/20 to-transparent" />
              <div className="absolute bottom-4 left-4 flex gap-3">
                <Badge icon={<FiPlayCircle />} text="Live" href={current.live} />
                <Badge icon={<FiGithub />} text="Code" href={current.repo} />
              </div>
              <div className="absolute right-4 top-4 rounded-full bg-white/85 px-3 py-1 text-[11px] font-semibold text-slate-800 shadow-sm backdrop-blur dark:bg-slate-900/80 dark:text-white">
                {index + 1} / {total}
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-4">
            <div className="rounded-3xl border border-white/15 bg-white/80 p-6 shadow-xl backdrop-blur dark:border-slate-800 dark:bg-slate-900/70">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-semibold">{current.title}</h3>
                <div className="flex gap-3 text-xl text-slate-500">
                  <a href={current.repo} aria-label="GitHub" className="hover:text-brand-500">
                    <FiGithub />
                  </a>
                  <a href={current.live} aria-label="Live" className="hover:text-brand-500">
                    <FiExternalLink />
                  </a>
                </div>
              </div>
              <p className="mt-3 text-slate-600 dark:text-slate-300">{current.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {current.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-brand-500/10 px-3 py-1 text-xs font-semibold text-brand-600 dark:text-brand-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
              {projects.map((proj, i) => (
                <button
                  key={proj.title}
                  onClick={() => setIndex(i)}
                  className={`group relative overflow-hidden rounded-2xl border bg-white/70 px-3 py-3 text-left text-xs font-semibold shadow-sm backdrop-blur transition hover:-translate-y-1 hover:border-brand-500 hover:shadow-brand-500/20 dark:border-slate-800 dark:bg-slate-900/70 ${
                    i === index ? 'border-brand-500 text-brand-600 shadow-md dark:text-brand-300' : 'text-slate-600 dark:text-slate-200'
                  }`}
                  aria-label={`View ${proj.title}`}
                >
                  <div className="line-clamp-2">{proj.title}</div>
                  <span className="mt-2 inline-block rounded-full bg-slate-100 px-2 py-1 text-[10px] font-semibold text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                    {proj.technologies[0]}
                  </span>
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-br from-brand-500 to-sky-400" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Badge({ icon, text, href }) {
  const content = (
    <span className="inline-flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-xs font-semibold text-slate-800 shadow backdrop-blur dark:bg-slate-900/90 dark:text-white">
      {icon}
      {text}
    </span>
  );

  return href ? (
    <a href={href} target="_blank" rel="noreferrer">
      {content}
    </a>
  ) : (
    content
  );
}
