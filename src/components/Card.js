import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

Card.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string,
  text: PropTypes.string,
}

export default function Card({ text, title, image, click }) {
  return (
    <Wrapper>
      <img src={image} alt="" />
      <h2>{title}</h2>
      <p>{text}</p>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 8px 16px #0006;
  display: grid;
  grid-template-rows: 1fr;
  justify-items: center;
  max-width: 600px;

  img {
    justify-self: center;
    max-width: 400px;
    margin: 20px;
  }
`
