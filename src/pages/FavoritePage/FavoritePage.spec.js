import { render, screen } from '@testing-library/react'
import FavoritePage from './FavoritePage'

describe('FavoritePage', () => {
  it('renders the list of locations with two images and two titles', () => {
    const exampleFavorites = [
      {
        image: 'Elphi',
        title: 'NameOfLocation',
      },
      {
        image: 'Ashoka',
        title: 'NameOfLocation',
      },
    ]

    render(<FavoritePage favorites={exampleFavorites} />)

    const [firstImage, secondImage] = screen.getAllByRole('img')
    expect(firstImage).toBeInTheDocument()
    expect(secondImage).toBeInTheDocument()

    const titles = screen.getAllByText('NameOfLocation')
    expect(titles).toHaveLength(2)
  })
})
