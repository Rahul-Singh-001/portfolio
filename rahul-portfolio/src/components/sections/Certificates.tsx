import { motion } from 'framer-motion'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import { Award, ExternalLink } from 'lucide-react'

const certificates = [
  {
    title: 'Problem Solving (Intermediate)',
    issuer: 'HackerRank',
    date: '2024',
    description: 'Demonstrates proficiency in data structures and algorithms with intermediate-level problem solving skills.',
    badge: 'Intermediate',
    color: 'from-green-600/20 to-emerald-600/10',
    borderColor: 'hover:border-green-500/30',
    iconColor: 'text-green-400',
    link: 'https://hackerrank.com',
    tags: ['DSA', 'Algorithms', 'Problem Solving'],
  },
  {
    title: 'React (Basic)',
    issuer: 'HackerRank',
    date: '2024',
    description: 'Certifies foundational React.js knowledge including components, state management, and hooks.',
    badge: 'Basic',
    color: 'from-cyan-600/20 to-blue-600/10',
    borderColor: 'hover:border-cyan-500/30',
    iconColor: 'text-cyan-400',
    link: 'https://hackerrank.com',
    tags: ['React', 'Frontend', 'JavaScript'],
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
}

const cardVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function Certificates() {
  const { ref, inView } = useScrollReveal()

  return (
    <section id="certificates" className="py-28 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-600/6 rounded-full blur-3xl pointer-events-none" />

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
            <div className="h-px w-8 bg-gradient-to-r from-cyan-500 to-transparent" />
            <span className="font-mono text-sm text-cyan-400 uppercase tracking-widest">Certifications</span>
          </div>
          <h2 className="section-title">
            Verified <span className="gradient-text">Certificates</span>
          </h2>
          <p className="section-subtitle">
            Industry-recognized credentials validating my technical skills.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-2 gap-6 max-w-4xl"
        >
          {certificates.map((cert) => (
            <motion.div
              key={cert.title}
              variants={cardVariants}
              className={`group glass-card rounded-2xl p-7 border border-white/5 transition-all duration-300 ${cert.borderColor} relative overflow-hidden`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-5">
                  <div className={`w-12 h-12 rounded-xl bg-white/5 border border-white/8 flex items-center justify-center ${cert.iconColor} group-hover:scale-110 transition-transform duration-300`}>
                    <Award size={22} />
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={`tag ${cert.iconColor.includes('green') ? '' : 'tag-cyan'} text-xs`}>{cert.badge}</span>
                    <span className="font-mono text-xs text-white/30">{cert.date}</span>
                  </div>
                </div>

                <h3 className="font-display font-bold text-white text-lg mb-1">{cert.title}</h3>
                <p className={`font-mono text-sm font-semibold mb-3 ${cert.iconColor}`}>{cert.issuer}</p>
                <p className="text-white/45 text-sm leading-relaxed mb-5">{cert.description}</p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {cert.tags.map(tag => <span key={tag} className="tag tag-blue text-xs">{tag}</span>)}
                </div>

                <motion.a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-body font-medium text-white/50 hover:text-white transition-colors"
                  whileHover={{ x: 4 }}
                >
                  View Certificate <ExternalLink size={13} />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
