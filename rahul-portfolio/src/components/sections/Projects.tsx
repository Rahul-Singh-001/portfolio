import { motion } from 'framer-motion'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import { ExternalLink, Github, Layers, MessageSquare } from 'lucide-react'

interface Project {
  title: string
  description: string
  longDesc: string
  tech: string[]
  icon: React.ReactNode
  gradient: string
  borderGlow: string
  github: string
  live: string
  category: string
}

const projects: Project[] = [
  {
    title: 'Second Brain',
    description: 'Personalized knowledge management platform',
    longDesc:
      'Users can create, manage, and share useful links and ideas. Enables public knowledge sharing and promotes community learning through an intuitive, collaborative interface.',
    tech: ['MERN Stack', 'React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'MongoDB'],
    icon: <Layers size={28} />,
    gradient: 'from-purple-600/20 to-violet-600/10',
    borderGlow: 'hover:border-purple-500/40 hover:shadow-[0_0_40px_rgba(124,58,237,0.15)]',
    github: 'https://github.com/rahulsingh/second-brain',
    live: '#',
    category: 'Full Stack App',
  },
  {
    title: 'Chatgram',
    description: 'Full-stack real-time social media & chat app',
    longDesc:
      'Real-time chat and notifications using Socket.IO, JWT authentication for security, Redux Toolkit for state management, and optimized MongoDB backend for high performance.',
    tech: ['MERN Stack', 'Socket.IO', 'Redux Toolkit', 'JWT', 'MongoDB', 'Express.js'],
    icon: <MessageSquare size={28} />,
    gradient: 'from-blue-600/20 to-cyan-600/10',
    borderGlow: 'hover:border-blue-500/40 hover:shadow-[0_0_40px_rgba(37,99,235,0.15)]',
    github: 'https://github.com/rahulsingh/chatgram',
    live: '#',
    category: 'Real-time App',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function Projects() {
  const { ref, inView } = useScrollReveal()

  return (
    <section id="projects" className="py-28 relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-purple-900/10 rounded-full blur-3xl pointer-events-none" />

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
            <span className="font-mono text-sm text-purple-400 uppercase tracking-widest">Work</span>
          </div>
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle">
            Real-world applications built with modern technologies.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid md:grid-cols-2 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={cardVariants}
              className={`group relative glass-card rounded-3xl border border-white/5 overflow-hidden transition-all duration-500 cursor-pointer ${project.borderGlow}`}
            >
              {/* Gradient background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10 p-8">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-600/25 to-blue-600/20 border border-purple-500/20 flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform duration-300">
                      {project.icon}
                    </div>
                    <div>
                      <span className="tag mb-1 inline-block">{project.category}</span>
                      <h3 className="font-display font-bold text-xl text-white">{project.title}</h3>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-white/50 text-sm leading-relaxed mb-3 font-semibold">{project.description}</p>
                <p className="text-white/40 text-sm leading-relaxed mb-6">{project.longDesc}</p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((t, i) => (
                    <span key={t} className={`tag ${i % 3 === 1 ? 'tag-blue' : i % 3 === 2 ? 'tag-cyan' : ''}`}>{t}</span>
                  ))}
                </div>

                {/* CTA buttons */}
                <div className="flex gap-3">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl btn-secondary text-sm font-semibold"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <Github size={15} />
                    GitHub
                  </motion.a>
                  <motion.a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl btn-primary text-white text-sm font-semibold"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <ExternalLink size={15} />
                    Live Demo
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* More projects CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://github.com/rahulsingh"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            <Github size={16} />
            View All Projects on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
