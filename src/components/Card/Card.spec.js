import { render, screen } from '@testing-library/react'
import Card from './Card'

describe('Card', () => {
  it('renders name of card', () => {
    render(
      <Card
        title="Elbphilharmonie"
        text="This is the info-text about the location above"
        image="image per card"
      />
    )
    expect(
      screen.getByRole('heading', { name: 'Elbphilharmonie' })
    ).toBeInTheDocument()
  })
})
