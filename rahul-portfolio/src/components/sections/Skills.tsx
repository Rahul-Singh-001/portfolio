import { motion } from 'framer-motion'
import { useScrollReveal } from '../../hooks/useScrollReveal'

interface Skill {
  name: string
  level: number
  color: string
}

interface SkillCategory {
  title: string
  gradient: string
  skills: Skill[]
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend',
    gradient: 'from-purple-600 to-violet-600',
    skills: [
      { name: 'React', level: 90, color: '#61DAFB' },
      { name: 'TypeScript', level: 82, color: '#3178C6' },
      { name: 'JavaScript', level: 88, color: '#F7DF1E' },
      { name: 'Tailwind CSS', level: 92, color: '#06B6D4' },
      { name: 'HTML', level: 95, color: '#E34F26' },
      { name: 'CSS', level: 90, color: '#1572B6' },
    ],
  },
  {
    title: 'Backend',
    gradient: 'from-blue-600 to-cyan-600',
    skills: [
      { name: 'Node.js', level: 85, color: '#339933' },
      { name: 'Express.js', level: 83, color: '#ffffff' },
      { name: 'MongoDB', level: 80, color: '#47A248' },
      { name: 'MySQL', level: 72, color: '#4479A1' },
    ],
  },
  {
    title: 'Tools & Libraries',
    gradient: 'from-cyan-600 to-teal-600',
    skills: [
      { name: 'GitHub', level: 88, color: '#ffffff' },
      { name: 'Redux Toolkit', level: 78, color: '#764ABC' },
      { name: 'Socket.IO', level: 75, color: '#010101' },
      { name: 'Postman', level: 82, color: '#FF6C37' },
    ],
  },
  {
    title: 'Core CS',
    gradient: 'from-violet-600 to-purple-600',
    skills: [
      { name: 'DSA', level: 85, color: '#a855f7' },
      { name: 'DBMS', level: 78, color: '#60a5fa' },
      { name: 'Operating Systems', level: 75, color: '#34d399' },
      { name: 'Computer Networks', level: 72, color: '#f59e0b' },
      { name: 'OOPs', level: 88, color: '#f472b6' },
    ],
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

function SkillBar({ name, level, color, delay }: Skill & { delay: number }) {
  const { ref, inView } = useScrollReveal()

  return (
    <div ref={ref} className="space-y-1.5">
      <div className="flex justify-between items-center">
        <span className="text-sm font-body font-medium text-white/75">{name}</span>
        <span className="text-xs font-mono text-white/35">{level}%</span>
      </div>
      <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1, delay: delay * 0.08, ease: 'easeOut' }}
          className="h-full rounded-full"
          style={{ background: `linear-gradient(90deg, ${color}80, ${color})` }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  const { ref, inView } = useScrollReveal()

  return (
    <section id="skills" className="py-28 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-blue-600/8 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-purple-600/8 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />

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
            <div className="h-px w-8 bg-gradient-to-r from-blue-500 to-transparent" />
            <span className="font-mono text-sm text-blue-400 uppercase tracking-widest">Skill Set</span>
          </div>
          <h2 className="section-title">
            My <span className="gradient-text">Technical</span> Arsenal
          </h2>
          <p className="section-subtitle">
            Technologies I work with to build full-stack applications.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid md:grid-cols-2 gap-6"
        >
          {skillCategories.map((cat) => (
            <motion.div
              key={cat.title}
              variants={cardVariants}
              className="glass-card rounded-2xl p-6 border border-white/5 hover:border-purple-500/15 transition-all duration-300 group"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`h-5 w-1 rounded-full bg-gradient-to-b ${cat.gradient}`} />
                <h3 className="font-display font-bold text-lg text-white">{cat.title}</h3>
              </div>

              <div className="space-y-4">
                {cat.skills.map((skill, i) => (
                  <SkillBar key={skill.name} {...skill} delay={i} />
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Tech Badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="font-mono text-sm text-white/35 mb-5">Also familiar with</p>
          <div className="flex flex-wrap justify-center gap-3">
            {['REST APIs', 'JWT', 'WebSockets', 'Docker basics', 'Git', 'Linux', 'Figma', 'Vite'].map(tech => (
              <span key={tech} className="tag">{tech}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
