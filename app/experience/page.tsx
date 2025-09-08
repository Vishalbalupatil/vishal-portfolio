import ExperienceTimeline from '@/components/experience-timeline'

export const metadata = {
  title: 'Experience - Vishal Patil'
}

export default function ExperiencePage() {
  return (
    <div className="py-8">
      <h2 className="mb-6 text-3xl font-heading">Experience</h2>
      <ExperienceTimeline />
    </div>
  )
}
