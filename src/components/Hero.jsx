import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const words = ['Software Engineer', 'MERN Developer'];

const handleDownload = () => {
  const link = document.createElement('a');
  link.href = '/resume.pdf';
  link.download = 'resume.pdf';
  document.body.appendChild(link);
  link.click();
  link.remove();
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pt-24"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,#2e66ff26,transparent_32%),radial-gradient(circle_at_80%_0%,#22d3ee1f,transparent_30%),radial-gradient(circle_at_50%_100%,#a855f725,transparent_26%)]" />
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 md:flex-row md:items-center">
        <div className="space-y-6 md:w-3/5">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-700 shadow-sm backdrop-blur dark:bg-slate-900/70 dark:text-slate-200"
          >
            <span className="h-2 w-2 rounded-full bg-emerald-400" /> Available for projects
          </motion.div>
          <div className="space-y-3">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05, duration: 0.8 }}
              className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl"
            >
              Hi, I'm <span className="text-brand-500">Lajwanti Harani</span>.
            </motion.h1>
            <motion.div
              className="flex flex-wrap items-center gap-2 text-xl font-semibold text-slate-600 dark:text-slate-300 sm:text-2xl"
              initial="hidden"
              animate="visible"
            >
              {words.map((word, idx) => (
                <motion.span
                  key={word}
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { delay: 0.2 + idx * 0.12, duration: 0.5 }
                    }
                  }}
                  className="rounded-full bg-slate-100 px-3 py-1 shadow-sm dark:bg-slate-900"
                >
                  {word}
                </motion.span>
              ))}
            </motion.div>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="max-w-2xl text-lg text-slate-600 dark:text-slate-300"
          >
            MERN-stack software engineer delivering responsive, scalable, user-focused apps full-stack builds, real-time systems, and cloud-ready deployments.
          </motion.p>
          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.55 }}
          >
            <button
              onClick={handleDownload}
              className="rounded-full bg-brand-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-500/25 transition hover:-translate-y-0.5 hover:shadow-brand-500/40"
            >
              Download Resume
            </button>
            <Link
              to="#contact"
              onClick={(e) => {
                e.preventDefault();
                const section = document.getElementById('contact');
                if (section) section.scrollIntoView({ behavior: 'smooth' });
              }}
              className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold transition hover:-translate-y-0.5 hover:border-brand-500 hover:text-brand-500 dark:border-slate-700"
            >
              Let's talk
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94, rotate: -2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ delay: 0.35, duration: 0.7, ease: 'easeOut' }}
          className="relative mx-auto w-full max-w-xs md:max-w-sm"
        >
          <div className="absolute -inset-4 -z-10 rounded-[32px] bg-gradient-to-br from-brand-500/30 via-sky-400/30 to-emerald-300/25 blur-2xl" />
          <div className="group relative overflow-hidden rounded-[28px] border border-white/20 bg-white/80 shadow-2xl backdrop-blur-lg dark:border-slate-800 dark:bg-slate-900/70">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/20 to-white/5 dark:via-white/5" />
            <img
              src="/profile.jpeg"
              alt="Profile"
              className="aspect-[4/5] w-full object-cover transition duration-500 group-hover:scale-[1.02]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
