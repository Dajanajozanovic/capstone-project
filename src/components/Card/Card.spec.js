import { render, screen } from '@testing-library/react'
import Card from './Card'

describe('Card', () => {
  it('renders title and image of Elbphilharmonie', () => {
    render(<Card title="Elbphilharmonie" />)
    expect(screen.getByText('Elbphilharmonie')).toBeInTheDocument()
  })
})
