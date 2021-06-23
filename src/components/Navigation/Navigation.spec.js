import { render } from '@testing-library/react'
import Navigation from './Navigation'

describe('Navigation', () => {
  it('renders a Navlink', async () => {
    render(
      <Navigation
        onNav={jest.fn()}
        pages={[
          { title: 'Homepage', path: '/' },
          { title: 'Sightseeing', path: '/sightseeing' },
          { title: 'Food&Drinks', path: '/restaurants' },
          { title: 'Favorites', path: '/myfavorites' },
        ]}
      />
    )

    expect(Navigation).toHaveLength(4)
    expect(Navigation[0]).toBeInTheDocument('Homepage')
    expect(Navigation[1]).toBeInTheDocument('Sightseeing')
    expect(Navigation[2]).toBeInTheDocument('Food&Drinks')
    expect(Navigation[3]).toBeInTheDocument('Favorites')
  })
})
