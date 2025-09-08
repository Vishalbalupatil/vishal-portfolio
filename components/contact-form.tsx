'use client'

import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sent'>('idle')
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const mail = document.createElement('a')
    mail.href = `mailto:vishalbalupatil@gmail.com?subject=Portfolio%20Contact&body=${encodeURIComponent(
      data.get('message') as string
    )}`
    mail.click()
    setStatus('sent')
  }
  return (
    <form onSubmit={handleSubmit} className="mx-auto max-w-md space-y-4">
      <div className="hidden">
        <label>
          Do not fill
          <input name="_honeypot" tabIndex={-1} autoComplete="off" />
        </label>
      </div>
      <div>
        <label htmlFor="name" className="mb-1 block text-sm">
          Name
        </label>
        <Input id="name" name="name" required />
      </div>
      <div>
        <label htmlFor="email" className="mb-1 block text-sm">
          Email
        </label>
        <Input id="email" name="email" type="email" required />
      </div>
      <div>
        <label htmlFor="message" className="mb-1 block text-sm">
          Message
        </label>
        <Textarea id="message" name="message" required rows={4} />
      </div>
      <Button type="submit">Send</Button>
      {status === 'sent' && <p className="text-sm">Thank you! Your mail client should open.</p>}
    </form>
  )
}
