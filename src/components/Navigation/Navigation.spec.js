import { render } from '@testing-library/react'
import { screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Navigation from './Navigation'

describe('Navigation', () => {
  it('renders 4 links', () => {
    render(
      <MemoryRouter>
        <Navigation />
      </MemoryRouter>
    )
    expect(screen.getAllByRole('link')).toHaveLength(4)
  })
})
