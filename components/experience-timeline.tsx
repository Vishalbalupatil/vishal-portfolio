'use client'

import { useState } from 'react'
import { experiences } from '@/lib/experience'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

export default function ExperienceTimeline() {
  const [open, setOpen] = useState<number | null>(null)
  return (
    <ul className="space-y-8">
      {experiences.map((exp, i) => (
        <li key={exp.company}>
          <button
            className="flex w-full items-center justify-between text-left"
            aria-expanded={open === i}
            aria-controls={`exp-${i}`}
            onClick={() => setOpen(open === i ? null : i)}
          >
            <div>
              <h3 className="font-heading text-xl">{exp.company}</h3>
              <p className="text-sm text-accent-500">{exp.role}</p>
            </div>
            <ChevronDown
              className={`transition-transform ${open === i ? 'rotate-180' : ''}`}
            />
          </button>
          {open === i && (
            <motion.div
              id={`exp-${i}`}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="mt-2 space-y-2 pl-4"
            >
              <p className="text-xs text-gray-400">{exp.period}</p>
              <ul className="list-disc space-y-1 pl-4">
                {exp.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
              {exp.metrics && (
                <div className="mt-2 flex gap-2">
                  {exp.metrics.map((m) => (
                    <span
                      key={m}
                      className="rounded-md bg-accent-500/20 px-2 py-1 text-xs"
                    >
                      {m}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>
          )}
        </li>
      ))}
    </ul>
  )
}
