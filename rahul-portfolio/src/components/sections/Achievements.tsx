import { motion } from 'framer-motion'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import { Trophy, Star, BookOpen, TrendingUp } from 'lucide-react'

const achievements = [
  {
    icon: Trophy,
    title: '500+ LeetCode Problems',
    description: 'Consistently solved algorithmic challenges across Easy, Medium, and Hard difficulty levels.',
    metric: '500+',
    metricLabel: 'Problems Solved',
    color: 'from-yellow-600/20 to-orange-600/10',
    iconColor: 'text-yellow-400',
    borderColor: 'hover:border-yellow-500/30',
  },
  {
    icon: TrendingUp,
    title: 'LeetCode Contest Rating',
    description: 'Achieved a contest rating of 1600+ by participating in weekly and bi-weekly LeetCode contests.',
    metric: '1600+',
    metricLabel: 'Contest Rating',
    color: 'from-green-600/20 to-emerald-600/10',
    iconColor: 'text-green-400',
    borderColor: 'hover:border-green-500/30',
  },
  {
    icon: BookOpen,
    title: 'Udemy C++ Course',
    description: 'Completed a comprehensive Udemy course on C++ theory, strengthening core programming fundamentals.',
    metric: '100%',
    metricLabel: 'Completion',
    color: 'from-blue-600/20 to-cyan-600/10',
    iconColor: 'text-blue-400',
    borderColor: 'hover:border-blue-500/30',
  },
  {
    icon: Star,
    title: 'Full-Stack Projects',
    description: 'Built and deployed  applications used by real users with modern tech stacks.',
    metric: '3+',
    metricLabel: 'Projects Shipped',
    color: 'from-purple-600/20 to-violet-600/10',
    iconColor: 'text-purple-400',
    borderColor: 'hover:border-purple-500/30',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
}

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 30 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function Achievements() {
  const { ref, inView } = useScrollReveal()

  return (
    <section id="achievements" className="py-28 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-900/8 rounded-full blur-3xl pointer-events-none" />

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
            <div className="h-px w-8 bg-gradient-to-r from-yellow-500 to-transparent" />
            <span className="font-mono text-sm text-yellow-400 uppercase tracking-widest">Milestones</span>
          </div>
          <h2 className="section-title">
            Key <span className="gradient-text">Achievements</span>
          </h2>
          <p className="section-subtitle">
            Milestones that reflect my dedication to continuous learning and growth.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {achievements.map((a) => (
            <motion.div
              key={a.title}
              variants={cardVariants}
              className={`group glass-card rounded-2xl p-6 border border-white/5 transition-all duration-300 ${a.borderColor} relative overflow-hidden`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${a.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              <div className="relative z-10">
                <div className={`w-12 h-12 rounded-xl bg-white/5 border border-white/8 flex items-center justify-center mb-5 ${a.iconColor} group-hover:scale-110 transition-transform duration-300`}>
                  <a.icon size={22} />
                </div>

                <div className="mb-4">
                  <div className={`font-display font-bold text-4xl ${a.iconColor} mb-1`}>{a.metric}</div>
                  <div className="font-mono text-xs text-white/35">{a.metricLabel}</div>
                </div>

                <h3 className="font-display font-semibold text-white text-sm mb-2">{a.title}</h3>
                <p className="text-white/40 text-xs leading-relaxed">{a.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
