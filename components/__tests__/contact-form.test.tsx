import { render, screen, fireEvent } from '@testing-library/react'
import ContactForm from '../contact-form'

describe('ContactForm', () => {
  it('submits and shows thank you', () => {
    render(<ContactForm />)
    fireEvent.change(screen.getByLabelText('Name'), { target: { value: 'A' } })
    fireEvent.change(screen.getByLabelText('Email'), { target: { value: 'a@a.com' } })
    fireEvent.change(screen.getByLabelText('Message'), { target: { value: 'Hi' } })
    fireEvent.submit(screen.getByRole('form'))
    expect(screen.getByText(/Thank you/i)).toBeInTheDocument()
  })
})
