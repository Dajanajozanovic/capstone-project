import { render } from '@testing-library/react'
import Bookmarks from './Bookmarks'

describe('Bookmarks', () => {
  it('renders an image which is rosa, onClick it becomes red', () => {
    render(<Bookmarks isBookmarked={false} onClick={jest.fn} id={1} />)
  })
})
