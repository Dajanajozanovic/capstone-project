import { render, screen } from '@testing-library/react'

import RestaurantPage from './RestaurantPage'

describe('RestaurantPage', () => {
  it('renders a list of restaurants with a title and an image', () => {
    render(<RestaurantPage />)

    const title = screen.getAllByRole('heading')
    expect(title).toHaveLength(6)
    const image = screen.getAllByRole('img')
    expect(image).toHaveLength(5)
  })
})
