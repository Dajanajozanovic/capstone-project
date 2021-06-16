import { render, screen } from '@testing-library/react'
import HomePage from './HomePage'

describe('HomePage', () => {
  it('renders two images which showas a restaurant and the harbour', () => {
    render(<HomePage />)
    const image = screen.getAllByRole('img')
    expect(image).toHaveLength(2)
  })
})
