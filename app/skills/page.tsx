import SkillCloud from '@/components/skill-cloud'

export const metadata = {
  title: 'Skills - Vishal Patil'
}

export default function SkillsPage() {
  return (
    <div className="py-8">
      <h2 className="mb-6 text-3xl font-heading">Skills</h2>
      <SkillCloud />
    </div>
  )
}
