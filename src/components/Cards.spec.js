
  import {render, screen} from '@testing-library/react'
  import Cards from './Cards'
    
  describe('Cards', () => {
      it('renders', () => {
          render(<Cards />)
          expect(screen.getByText('Cards')).toBeInTheDocument()
      })
  })
        