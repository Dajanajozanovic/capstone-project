import { render, screen } from '@testing-library/react'
import FavoritePage from './FavoritePage'

describe('FavoritePage', () => {
  it('renders a list of locations with one image and one title', () => {
    const exampleLocation = [
      {
        image: 'image1',
        title: 'Elphi',
        id: '1',
      },
      {
        image: 'image2',
        title: 'Ashoka',
        id: '2',
      },
    ]

    render(<FavoritePage image={exampleLocation} />)

    const [image] = screen.getAllByRole('img')
    expect(image).toBeInTheDocument()

    const title = screen.getAllByText('locationTitle')
    expect(title).toHaveLength(1)
  })
})
