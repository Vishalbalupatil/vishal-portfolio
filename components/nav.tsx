import Link from 'next/link'
import { ThemeToggle } from '@/components/theme-toggle'

export default function Nav() {
  return (
    <nav className="flex items-center justify-between py-4">
      <Link href="/" className="font-heading text-lg">
        VP
      </Link>
      <div className="flex gap-4 text-sm">
        <Link href="/experience">Experience</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/skills">Skills</Link>
        <Link href="/contact">Contact</Link>
        <ThemeToggle />
      </div>
    </nav>
  )
}
