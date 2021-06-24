import { render } from '@testing-library/react'
import Navigation from './Navigation'

describe('Navigation', () => {
  it('renders a Navlink which includes a key and a path', async () => {
    render(
      <Navigation
        onNav={jest.fn()}
        pages={[{ key: 'title' }, { path: 'to' }]}
      />
    )
  })
})
