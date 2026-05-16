import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Code2, ArrowUp } from 'lucide-react'

const navLinks = ['About', 'Skills', 'Projects', 'Achievements', 'Certificates', 'Contact']

const socials = [
  { icon: Github, href: 'https://github.com/rahulsingh', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com/in/rahulsingh', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:rahulsingh@email.com', label: 'Email' },
  {
    icon: Code2,
    href: 'https://leetcode.com/rahulsingh',
    label: 'LeetCode',
  },
]

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  const handleNav = (section: string) => {
    document.getElementById(section.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="relative border-t border-white/5 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Logo + tagline */}
          <div className="text-center md:text-left">
            <div className="flex items-center gap-2 justify-center md:justify-start mb-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center font-mono text-sm font-bold">
                R
              </div>
              <span className="font-display font-bold text-xl gradient-text">Rahul Singh</span>
            </div>
            <p className="text-white/35 text-sm font-body">Full Stack MERN Developer · AKTU</p>
          </div>

          {/* Nav links */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {navLinks.map(link => (
              <button
                key={link}
                onClick={() => handleNav(link)}
                className="text-sm text-white/40 hover:text-white/80 transition-colors font-body"
              >
                {link}
              </button>
            ))}
          </div>

          {/* Socials */}
          <div className="flex items-center gap-3">
            {socials.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                aria-label={label}
                className="w-9 h-9 rounded-xl glass-card flex items-center justify-center text-white/40 hover:text-white hover:border-purple-500/30 transition-all duration-200"
                whileHover={{ scale: 1.15, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon size={15} />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/8 to-transparent my-8" />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/25 text-xs font-mono text-center">
            © {new Date().getFullYear()} Rahul Singh · Built with React + TypeScript + Framer Motion
          </p>

          <motion.button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-xs font-mono text-white/30 hover:text-white/70 transition-colors"
            whileHover={{ y: -2 }}
          >
            Back to top <ArrowUp size={12} />
          </motion.button>
        </div>
      </div>
    </footer>
  )
}
