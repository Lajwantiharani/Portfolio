import { motion } from 'framer-motion';

const highlights = [
  { title: '2+ Years', desc: 'building web experiences' },
  { title: 'MERN', desc: 'full-stack delivery' }
];

const pillars = ['MERN Stack', 'Performance & Security'];

export default function About() {
  return (
    <section id="about" className="relative py-20 px-6">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,#7c3aed18,transparent_36%),radial-gradient(circle_at_80%_0%,#22d3ee14,transparent_32%)]" />
      <div className="mx-auto max-w-6xl rounded-[32px] border border-white/15 bg-white/85 p-10 shadow-2xl backdrop-blur dark:border-slate-800 dark:bg-slate-900/70">
        <div className="grid gap-10 lg:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.5 }}
            className="lg:col-span-2 space-y-5"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-500">About</p>
            <h2 className="text-3xl font-semibold sm:text-4xl leading-tight">
              MERN stack software engineer crafting reliable, human-centered products.
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              I partner with teams to design, build, and ship responsive apps, real-time systems, and performant APIs. From discovery to deploy, I focus on clear communication, scalable architecture, and polished user experiences.
            </p>
            <div className="flex flex-wrap gap-3">
              {pillars.map((pill) => (
                <span
                  key={pill}
                  className="rounded-full bg-brand-500/10 px-4 py-2 text-sm font-semibold text-brand-700 dark:text-brand-200"
                >
                  {pill}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            viewport={{ once: true, amount: 0.5 }}
            className="grid gap-4 rounded-2xl border border-white/20 bg-white/80 p-5 shadow-xl backdrop-blur dark:border-slate-800 dark:bg-slate-900/70"
          >
            {highlights.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/10 bg-gradient-to-r from-brand-500/10 via-white/60 to-white/30 px-4 py-3 shadow-sm dark:from-brand-500/10 dark:via-slate-900/50 dark:to-slate-900/30"
              >
                <p className="text-sm font-semibold text-brand-600 dark:text-brand-200">{item.title}</p>
                <p className="text-sm text-slate-600 dark:text-slate-300">{item.desc}</p>
              </div>
            ))}
            <div className="rounded-2xl border border-brand-500/30 bg-brand-500/10 px-4 py-3 text-sm font-semibold text-brand-700 shadow-sm dark:text-brand-200">
              Available for projects.
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
