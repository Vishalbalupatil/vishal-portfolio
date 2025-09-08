import { projects } from '@/lib/projects'
import ProjectCard from '@/components/project-card'

export const metadata = {
  title: 'Projects - Vishal Patil'
}

export default function ProjectsPage() {
  return (
    <div className="py-8">
      <h2 className="mb-6 text-3xl font-heading">Projects</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </div>
    </div>
  )
}
