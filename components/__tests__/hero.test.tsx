import { render, screen } from '@testing-library/react'
import Hero from '../hero'

describe('Hero', () => {
  it('renders name', () => {
    render(<Hero />)
    expect(screen.getByText('Vishal Patil')).toBeInTheDocument()
  })
})
