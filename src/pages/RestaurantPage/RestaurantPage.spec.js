
  import {render, screen} from '@testing-library/react'
  import RestaurantPage from './RestaurantPage'
    
  describe('RestaurantPage', () => {
      it('renders', () => {
          render(<RestaurantPage />)
          expect(screen.getByText('RestaurantPage')).toBeInTheDocument()
      })
  })
        