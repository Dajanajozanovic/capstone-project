import { render, screen } from '@testing-library/react'
import Slider from './Slider'

describe('Slider', () => {
  it('renders', () => {
    render(<Slider />)
    expect(screen.getByRole('Slider')).toBeInTheDocument()
  })
})
