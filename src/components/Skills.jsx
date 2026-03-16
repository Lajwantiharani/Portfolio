import { motion } from 'framer-motion';
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiGraphql,
  SiDocker,
  SiPython,
  SiMongodb
} from 'react-icons/si';
import { skills } from '../data/skills';

const iconMap = {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiGraphql,
  SiDocker,
  SiPython,
  SiMongodb
};

export default function Skills() {
  return (
    <section id="skills" className="relative py-20 px-6">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,#2e66ff15,transparent_40%),radial-gradient(circle_at_80%_0%,#22d3ee15,transparent_35%)]" />
      <div className="mx-auto max-w-6xl space-y-6">
        <div className="space-y-2 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-500">Skills</p>
          <h2 className="text-3xl font-semibold sm:text-4xl">MERN-focused, modern toolkit</h2>
   
        </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {skills.map((skill, idx) => {
            const Icon = iconMap[skill.icon] || SiReact;
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 16, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.45, delay: idx * 0.03 }}
                viewport={{ once: true, amount: 0.4 }}
                whileHover={{ y: -4, scale: 1.01 }}
                className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/70 p-5 shadow-xl backdrop-blur dark:border-slate-800/60 dark:bg-slate-900/60"
              >
                <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-brand-500/70 via-sky-400/70 to-brand-500/70" />
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="grid h-12 w-12 place-items-center rounded-xl bg-brand-500/10 text-2xl text-brand-500">
                      <Icon />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-500 dark:text-slate-400">{skill.level}% proficiency</p>
                      <h3 className="text-lg font-semibold">{skill.name}</h3>
                    </div>
                  </div>
                  <span className="rounded-full bg-brand-500/10 px-3 py-1 text-xs font-semibold text-brand-600 dark:text-brand-300">
                    Core
                  </span>
                </div>
                <div className="mt-4 h-2 rounded-full bg-slate-200 dark:bg-slate-800">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="h-2 rounded-full bg-gradient-to-r from-brand-500 to-sky-400"
                  />
                </div>
                <div className="mt-4 flex flex-wrap gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400">
                  {skill.name.includes('React') && <Tag>SPA / Hooks / Router</Tag>}
                  {skill.name.includes('Node') && <Tag>APIs / REST</Tag>}
                  {skill.name.includes('Mongo') && <Tag>Documents</Tag>}
                  {skill.name.includes('SQL') && <Tag>Relational</Tag>}
                  {skill.name.includes('Python') && <Tag>Scripting</Tag>}
                  {skill.name.includes('JavaScript') && <Tag>ESNext</Tag>}
                  {skill.name.includes('AWS') && <Tag>Cloud</Tag>}
                  {skill.name.includes('Azure') && <Tag>Cloud</Tag>}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

const Tag = ({ children }) => (
  <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-semibold text-slate-700 dark:bg-slate-800 dark:text-slate-200">
    {children}
  </span>
);
