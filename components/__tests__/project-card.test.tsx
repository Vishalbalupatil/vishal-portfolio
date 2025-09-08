import { render, screen } from '@testing-library/react'
import ProjectCard from '../project-card'
import { Project } from '@/lib/projects'

const project: Project = {
  title: 'Test Project',
  pitch: 'Demo',
  role: 'QA',
  stack: ['Test'],
  outcome: 'Result'
}

describe('ProjectCard', () => {
  it('shows project title', () => {
    render(<ProjectCard project={project} />)
    expect(screen.getByText('Test Project')).toBeInTheDocument()
  })
})
