import { Project } from '@/lib/projects'
import { Badge } from '@/components/ui/badge'
import { motion } from 'framer-motion'
import { Github, Link } from 'lucide-react'

interface Props {
  project: Project
}

export default function ProjectCard({ project }: Props) {
  return (
    <motion.div
      whileHover={{ rotate: 1 }}
      className="rounded-lg border border-accent-500/30 p-4 shadow-glow transition-colors hover:border-accent-500"
    >
      <h3 className="mb-2 font-heading text-lg">{project.title}</h3>
      <p className="mb-2 text-sm text-gray-300">{project.pitch}</p>
      <div className="mb-2 flex flex-wrap gap-1">
        {project.stack.map((s) => (
          <Badge key={s}>{s}</Badge>
        ))}
      </div>
      <p className="mb-4 text-sm">{project.outcome}</p>
      <div className="flex gap-4 text-sm">
        {project.links?.github && (
          <a href={project.links.github} aria-label="GitHub" className="flex items-center gap-1">
            <Github size={16} /> Code
          </a>
        )}
        {project.links?.demo && (
          <a href={project.links.demo} aria-label="Demo" className="flex items-center gap-1">
            <Link size={16} /> Demo
          </a>
        )}
      </div>
    </motion.div>
  )
}
