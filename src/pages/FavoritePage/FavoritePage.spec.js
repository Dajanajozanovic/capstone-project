
  import {render, screen} from '@testing-library/react'
  import FavoritePage from './FavoritePage'
    
  describe('FavoritePage', () => {
      it('renders', () => {
          render(<FavoritePage />)
          expect(screen.getByText('FavoritePage')).toBeInTheDocument()
      })
  })
        