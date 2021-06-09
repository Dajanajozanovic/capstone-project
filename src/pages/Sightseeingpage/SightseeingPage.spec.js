import { render, screen } from '@testing-library/react'
import SightseeingPage from './SightseeingPage'

describe('SightseeingPage', () => {
  it('renders a list of places with a title and an image', () => {
    render(
      <SightseeingPage
        restaurants={[
          {
            title: 'Hafen',
            image: 'bild',
          },
          {
            title: 'Alster',
            image: 'bild2',
          },
        ]}
      />
    )

    const title = screen.getAllByRole('heading')
    expect(title).toHaveLength(6)
    const image = screen.getAllByRole('img')
    expect(image).toHaveLength(5)
  })
})
