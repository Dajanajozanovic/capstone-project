
  import {render, screen} from '@testing-library/react'
  import Bookmarks from './Bookmarks'
    
  describe('Bookmarks', () => {
      it('renders', () => {
          render(<Bookmarks />)
          expect(screen.getByText('Bookmarks')).toBeInTheDocument()
      })
  })
        