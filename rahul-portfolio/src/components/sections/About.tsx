import { motion } from 'framer-motion'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import { GraduationCap, Code2, Brain, Trophy } from 'lucide-react'

const stats = [
  { label: 'LeetCode Problems', value: '500+', icon: Brain },
  { label: 'Projects Built', value: '10+', icon: Code2 },
  { label: 'Contest Rating', value: '1600+', icon: Trophy },
  { label: 'Technologies', value: '15+', icon: GraduationCap },
]

const highlights = [
  {
    icon: GraduationCap,
    title: 'B.Tech CSE',
    description: 'Dr. A.P.J Abdul Kalam Technical University — pursuing Computer Science & Engineering with a focus on modern software development.',
  },
  {
    icon: Code2,
    title: 'MERN Stack Developer',
    description: 'Proficient in React, Node.js, Express, and MongoDB. Building scalable, production-ready full-stack web applications.',
  },
  {
    icon: Brain,
    title: 'Problem Solver',
    description: 'Solved 500+ problems on LeetCode with a contest rating of 1600+. Strong foundation in Data Structures & Algorithms.',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function About() {
  const { ref, inView } = useScrollReveal()

  return (
    <section id="about" className="py-28 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/8 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="mb-16">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-gradient-to-r from-purple-500 to-transparent" />
              <span className="font-mono text-sm text-purple-400 uppercase tracking-widest">About Me</span>
            </div>
            <h2 className="section-title">
              The <span className="gradient-text">Developer</span> behind the code
            </h2>
            <p className="section-subtitle">
              Crafting digital experiences with clean code and creative thinking.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left — Bio */}
            <div className="space-y-8">
              {highlights.map((item, i) => (
                <motion.div
                  key={item.title}
                  variants={itemVariants}
                  custom={i}
                  className="flex gap-5 p-5 rounded-2xl glass-card border border-white/5 hover:border-purple-500/20 transition-all duration-300 group"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600/20 to-blue-600/20 border border-purple-500/20 flex items-center justify-center text-purple-400 group-hover:text-purple-300 transition-colors">
                    <item.icon size={22} />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-white mb-1">{item.title}</h3>
                    <p className="text-white/50 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Right — Stats */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="p-6 rounded-2xl glass-card border border-white/5 hover:border-purple-500/20 transition-all duration-300 group text-center"
                  >
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600/20 to-blue-600/20 flex items-center justify-center mx-auto mb-3 text-purple-400 group-hover:scale-110 transition-transform">
                      <stat.icon size={20} />
                    </div>
                    <div className="font-display font-bold text-3xl gradient-text mb-1">{stat.value}</div>
                    <div className="text-white/45 text-xs font-mono">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Philosophy quote */}
              <div className="p-6 rounded-2xl relative overflow-hidden border border-purple-500/15"
                style={{ background: 'linear-gradient(135deg, rgba(124,58,237,0.08) 0%, rgba(37,99,235,0.05) 100%)' }}>
                <div className="absolute top-3 left-5 text-6xl font-display text-purple-500/20 leading-none select-none">"</div>
                <p className="font-body italic text-white/60 text-base leading-relaxed pt-4 px-2">
                  Clean code always looks like it was written by someone who cares. I build for performance, readability, and scalability.
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <div className="h-px flex-1 bg-gradient-to-r from-purple-500/30 to-transparent" />
                  <span className="font-mono text-xs text-purple-400">Rahul Singh</span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
