import { render, screen } from '@testing-library/react'
import Card from './Card'

describe('Card', () => {
  it('renders title and image of Elbphilharmonie', () => {
    render(<Card title="Elbphilharmonie" />)
    expect(screen.getByText('Elbphilharmonie')).toBeInTheDocument()
  })
})

// describe('Card', () => {
//   it('renders name of card', () => {
//     render(
//       <Card
//         title="Völkerschlachtdenkmal"
//         text="Lorem Ipsum"
//         image="path/to/image"
//         ratingImage="path/to/Image"
//       />
//     )
//     expect(
//       screen.getByRole('heading', { name: 'Völkerschlachtdenkmal' })
//     ).toBeInTheDocument()
//   })
//   it('renders text of card', () => {
//     render(<Card text="heading" />)
//     expect(screen.getByRole('heading')).toBeInTheDocument()
//   })
// })
