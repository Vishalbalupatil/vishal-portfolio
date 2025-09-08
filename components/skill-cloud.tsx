'use client'

import { useState } from 'react'
import { skills } from '@/lib/skills'
import { Input } from '@/components/ui/input'

export default function SkillCloud() {
  const [query, setQuery] = useState('')
  const filtered = skills.map((cat) => ({
    ...cat,
    items: cat.items.filter((i) => i.toLowerCase().includes(query.toLowerCase()))
  }))
  return (
    <div>
      <Input
        placeholder="Search skills"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="mb-4 max-w-sm"
      />
      {filtered.map((cat) => (
        <div key={cat.name} className="mb-6">
          <h3 className="mb-2 font-heading text-lg">{cat.name}</h3>
          <div className="flex flex-wrap gap-2">
            {cat.items.map((item) => (
              <button
                key={item}
                onClick={() => navigator.clipboard.writeText(item)}
                className="rounded-md border border-accent-500 px-2 py-1 text-sm hover:bg-accent-500 hover:text-white"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
