'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { useEffect, useState } from 'react'

const roles = [
  'Lead QA Engineer',
  'SDET',
  'API Tester',
  'Web3/Blockchain QA'
]

export default function Hero() {
  const [index, setIndex] = useState(0)
  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % roles.length), 2500)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="relative flex flex-col items-center justify-center py-24 text-center">
      <motion.h1
        className="mb-6 bg-clip-text text-4xl font-heading font-bold text-transparent sm:text-6xl"
        style={{ backgroundImage: 'linear-gradient(to right,#3b82f6,#7c3aed)' }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Vishal Patil
      </motion.h1>
      <motion.p
        className="mb-8 text-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        {roles[index]}
      </motion.p>
      <div className="mb-8 flex gap-4">
        <Button asChild>
          <a
            href="https://vishalbalupatil.github.io/myinfo/"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Portfolio
          </a>
        </Button>
        <Button variant="outline" asChild>
          <a href="/contact">Contact Me</a>
        </Button>
      </div>
      <div className="flex gap-2">
        <Badge>6.5+ yrs experience</Badge>
        <Badge>Web3 / Blockchain</Badge>
        <Badge>CI/CD advocate</Badge>
      </div>
    </section>
  )
}
