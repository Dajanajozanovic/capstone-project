import { render, screen } from '@testing-library/react'
import Card from './Card'

describe('Card', () => {
  it('renders its children', () => {
    render(<Card>Hello world</Card>)
    expect(screen.getByText('Hello world')).toBeInTheDocument()
  })
})
