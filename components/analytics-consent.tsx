'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Analytics } from '@vercel/analytics/react'

export default function AnalyticsConsent() {
  const [consent, setConsent] = useState<boolean | null>(null)
  useEffect(() => {
    const saved = localStorage.getItem('analytics-consent')
    setConsent(saved === 'granted')
  }, [])
  if (consent === null) {
    return (
      <div className="fixed bottom-4 left-1/2 z-50 w-72 -translate-x-1/2 rounded-md border border-accent-500 bg-background p-4 text-center text-sm shadow-glow">
        This site uses lightweight analytics.
        <div className="mt-3 flex justify-center gap-2">
          <Button size="sm" onClick={() => {localStorage.setItem('analytics-consent','granted');setConsent(true)}}>Allow</Button>
          <Button size="sm" variant="outline" onClick={() => {localStorage.setItem('analytics-consent','denied');setConsent(false)}}>Deny</Button>
        </div>
      </div>
    )
  }
  return consent ? <Analytics /> : null
}
