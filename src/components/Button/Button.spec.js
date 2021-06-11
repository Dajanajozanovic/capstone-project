import { render, screen } from '@testing-library/react'
import Button from './Button'

describe('Button', () => {
  it('renders a children text', () => {
    render(<Button />)
    const button = screen.getByRole('button', { children: 'Home' })
    expect(button).toBeInTheDocument()
  })
})
