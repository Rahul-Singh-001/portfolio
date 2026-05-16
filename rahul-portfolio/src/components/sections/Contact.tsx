import { useState } from 'react'
import { motion } from 'framer-motion'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import { Mail, Phone, Send, Github, Linkedin, Code2, CheckCircle, Loader2 } from 'lucide-react'

const contactLinks = [
  {
    icon: Mail,
    label: 'Email',
    value: 'rs7131622@email.com',
    href: 'mailto:rs7131622@email.com',
    color: 'text-purple-400',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 7838691085',
    href: 'tel:+917838691085',
    color: 'text-blue-400',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com',
    href: 'https://www.linkedin.com/in/rahul-singh-336309296/',
    color: 'text-cyan-400',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'Rahul-Singh-001',
    href: 'https://github.com/Rahul-Singh-001',
    color: 'text-white/70',
  },
  {
    icon: Code2,
    label: 'rahulsingh_001',
    href: 'https://leetcode.com/u/rahulsingh_001/',
    color: 'text-yellow-400',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function Contact() {
  const { ref, inView } = useScrollReveal()
  const [formState, setFormState] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    await new Promise(r => setTimeout(r, 1500))
    setStatus('success')
  }

  return (
    <section id="contact" className="py-28 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-64 bg-purple-600/8 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-gradient-to-r from-purple-500 to-transparent" />
            <span className="font-mono text-sm text-purple-400 uppercase tracking-widest">Get In Touch</span>
          </div>
          <h2 className="section-title">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="section-subtitle">
            Open to internships, freelance projects, and full-time opportunities.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left — Links */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-4"
          >
            <motion.p variants={itemVariants} className="text-white/50 leading-relaxed mb-8 text-base">
              I'm a Computer Science student at AKTU, actively looking for internship and full-time opportunities. Whether you have a project, an idea, or just want to connect — I'd love to hear from you!
            </motion.p>

            {contactLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                variants={itemVariants}
                className="flex items-center gap-4 p-4 rounded-2xl glass-card border border-white/5 hover:border-purple-500/25 transition-all duration-300 group"
                whileHover={{ x: 6 }}
              >
                <div className={`w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center ${link.color} group-hover:scale-110 transition-transform`}>
                  <link.icon size={18} />
                </div>
                <div>
                  <div className="font-mono text-xs text-white/35 mb-0.5">{link.label}</div>
                  <div className="font-body text-sm text-white/70 group-hover:text-white transition-colors">{link.value}</div>
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="glass-card rounded-3xl p-8 border border-white/5">
              {status === 'success' ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', duration: 0.5 }}
                    className="w-20 h-20 rounded-full bg-green-500/15 border border-green-500/30 flex items-center justify-center text-green-400 mb-5"
                  >
                    <CheckCircle size={40} />
                  </motion.div>
                  <h3 className="font-display font-bold text-xl text-white mb-2">Message Sent!</h3>
                  <p className="text-white/50 text-sm">Thanks for reaching out. I'll get back to you soon.</p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="mt-6 text-sm text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="font-display font-bold text-xl text-white mb-6">Send a Message</h3>

                  <div>
                    <label className="block font-mono text-xs text-white/35 mb-2 uppercase tracking-wider">Name</label>
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={e => setFormState(s => ({ ...s, name: e.target.value }))}
                      placeholder="Your full name"
                      className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/8 text-white placeholder:text-white/25 focus:outline-none focus:border-purple-500/50 focus:bg-purple-500/5 transition-all duration-200 text-sm font-body"
                    />
                  </div>

                  <div>
                    <label className="block font-mono text-xs text-white/35 mb-2 uppercase tracking-wider">Email</label>
                    <input
                      type="email"
                      required
                      value={formState.email}
                      onChange={e => setFormState(s => ({ ...s, email: e.target.value }))}
                      placeholder="your@email.com"
                      className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/8 text-white placeholder:text-white/25 focus:outline-none focus:border-purple-500/50 focus:bg-purple-500/5 transition-all duration-200 text-sm font-body"
                    />
                  </div>

                  <div>
                    <label className="block font-mono text-xs text-white/35 mb-2 uppercase tracking-wider">Message</label>
                    <textarea
                      required
                      rows={5}
                      value={formState.message}
                      onChange={e => setFormState(s => ({ ...s, message: e.target.value }))}
                      placeholder="Tell me about your project or opportunity..."
                      className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/8 text-white placeholder:text-white/25 focus:outline-none focus:border-purple-500/50 focus:bg-purple-500/5 transition-all duration-200 text-sm font-body resize-none"
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full btn-primary text-white justify-center py-4"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {status === 'loading' ? (
                      <>
                        <Loader2 size={16} className="animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
