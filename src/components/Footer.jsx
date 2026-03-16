import { FiGithub, FiLinkedin, FiTwitter, FiMail } from 'react-icons/fi';

const socials = [
  { icon: <FiGithub />, href: 'https://github.com/lajwantiharani', label: 'GitHub' },
  { icon: <FiLinkedin />, href: 'https://www.linkedin.com/in/lajwantiharani', label: 'LinkedIn' },
  { icon: <FiTwitter />, href: 'https://twitter.com/', label: 'Twitter' }
];

export default function Footer() {
  return (
    <footer className="relative mt-12 bg-gradient-to-r from-brand-700 via-brand-600 to-sky-500 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.08),transparent_40%),radial-gradient(circle_at_80%_0%,rgba(255,255,255,0.06),transparent_35%)]" />
      <div className="relative mx-auto grid max-w-6xl gap-8 px-6 py-12 md:grid-cols-3">
        <div className="space-y-3">
          <div className="text-xl font-semibold">Lajwanti Harani</div>
          <p className="text-sm text-white/80">
            Software engineer focused on MERN, cloud-ready architectures, and polished user experiences.
          </p>
          <a
            href="mailto:lajwantiharani7@gmail.com"
            className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-white/90"
          >
            <FiMail /> lajwantiharani7@gmail.com
          </a>
        </div>

        <div className="space-y-3">
          <div className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70">Navigate</div>
          <div className="grid grid-cols-2 gap-2 text-sm text-white/85">
            {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-white">
                {item}
              </a>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          <div className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70">Connect</div>
          <div className="flex gap-3 text-lg">
            {socials.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="grid h-10 w-10 place-items-center rounded-full border border-white/30 bg-white/10 backdrop-blur hover:border-white hover:bg-white/20"
                aria-label={item.label}
              >
                {item.icon}
              </a>
            ))}
          </div>
          <p className="text-xs font-semibold text-white/70">Available for freelance / contract.</p>
        </div>
      </div>
      <div className="border-t border-white/20 bg-white/10 px-6 py-4 text-center text-xs font-semibold text-white/70 backdrop-blur">
        © {new Date().getFullYear()} Lajwanti Harani. Crafted with care.
      </div>
    </footer>
  );
}
