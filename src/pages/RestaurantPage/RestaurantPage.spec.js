import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import RestaurantPage from './RestaurantPage'

describe('RestaurantPage', () => {
  it('renders a list of restaurants with a title and an image', () => {
    render(<RestaurantPage />)

    const title = screen.getAllByRole('heading')
    expect(title).toHaveLength(6)
    const image = screen.getAllByRole('img')
    expect(image).toHaveLength(5)
  })

  it('calls the function onNavigate on a click', () => {
    const onNavigate = jest.fn()
    render(<RestaurantPage onNavigate={onNavigate} />)

    const button = screen.getByRole('button')
    userEvent.click(button)
    expect(onNavigate).toHaveBeenCalledTimes(1)
  })
})
