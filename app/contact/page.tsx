import ContactForm from '@/components/contact-form'
import { Mail, Phone, Github, Linkedin } from 'lucide-react'

export const metadata = {
  title: 'Contact - Vishal Patil'
}

export default function ContactPage() {
  return (
    <div className="py-8">
      <h2 className="mb-6 text-3xl font-heading">Contact</h2>
      <div className="mb-8 space-y-2 text-sm">
        <p className="flex items-center gap-2">
          <Mail size={16} />
          <span className="[unicode-bidi:plaintext]">vishalbalupatil@gmail.com</span>
        </p>
        <p className="flex items-center gap-2">
          <Phone size={16} />
          <span className="[unicode-bidi:plaintext]">+91-99727-94151</span>
        </p>
      </div>
      <ContactForm />
      <div className="mt-8 flex gap-4">
        <a href="#" aria-label="GitHub">
          <Github />
        </a>
        <a href="#" aria-label="LinkedIn">
          <Linkedin />
        </a>
      </div>
    </div>
  )
}
