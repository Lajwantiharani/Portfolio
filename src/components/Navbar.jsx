import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FiMenu, FiX, FiSun, FiMoon } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../theme';

const links = [
  { label: 'Home', href: 'hero' },
  { label: 'About', href: 'about' },
  { label: 'Skills', href: 'skills' },
  { label: 'Projects', href: 'projects' },
  { label: 'Contact', href: 'contact' }
];

const scrollToId = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('hero');
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    links.forEach(({ href }) => {
      const section = document.getElementById(href);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, [location.pathname]);

  const handleNav = (href) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => scrollToId(href), 100);
    } else {
      scrollToId(href);
    }
    setOpen(false);
  };

  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 backdrop-blur-lg glass">
        <Link to="/" className="text-lg font-semibold tracking-tight">
          <span className="text-brand-500">/&gt;</span> Lajwanti
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
          {links.map(({ label, href }) => (
            <button
              key={href}
              onClick={() => handleNav(href)}
              className={`transition-colors hover:text-brand-500 ${
                active === href ? 'text-brand-500' : ''
              }`}
            >
              {label}
            </button>
          ))}
          <button
            onClick={toggleTheme}
            className="rounded-full border border-slate-200 p-2 text-lg hover:text-brand-500 dark:border-slate-700"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <FiSun /> : <FiMoon />}
          </button>
        </nav>
        <div className="flex items-center gap-3 md:hidden">
          <button
            onClick={toggleTheme}
            className="rounded-full border border-slate-200 p-2 text-lg hover:text-brand-500 dark:border-slate-700"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <FiSun /> : <FiMoon />}
          </button>
          <button
            className="rounded-lg border border-slate-200 p-2 dark:border-slate-700"
            onClick={() => setOpen((p) => !p)}
            aria-label="Toggle menu"
          >
            {open ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="glass mx-4 mt-2 rounded-xl border border-slate-200/50 p-4 shadow-lg dark:border-slate-800"
          >
            <div className="flex flex-col space-y-3 text-sm font-medium">
              {links.map(({ label, href }) => (
                <button
                  key={href}
                  onClick={() => handleNav(href)}
                  className={`text-left hover:text-brand-500 ${
                    active === href ? 'text-brand-500' : ''
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
