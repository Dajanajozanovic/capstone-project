import { render, screen } from '@testing-library/react'
import LocationsPage from './LocationsPage'

describe('LocationsPage', () => {
  it('renders a list of places with a title and an image', () => {
    render(<LocationsPage />)

    const title = screen.getAllByRole('heading')
    expect(title).toHaveLength(6)
    const image = screen.getAllByRole('img')
    expect(image).toHaveLength(5)
  })
})
