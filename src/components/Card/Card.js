import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

Card.propTypes = {
  image: PropTypes.node.isRequired,
  title: PropTypes.string,
  text: PropTypes.string,
}

export default function Card({ text, title, image }) {
  return (
    <WrapperList>
      <li>
        <img src={image} alt="" />
        <h2>{title}</h2>
        <p>{text}</p>
      </li>
    </WrapperList>
  )
}

const WrapperList = styled.ul`
  padding: 20px;
  justify-self: center;
  border-radius: 8px;
  box-shadow: 0 8px 16px #0006;
  display: grid;
  grid-template-rows: 1fr;
  width: 90vw;
  max-width: 600px;
  font-family: 'Hamburg';
  list-style-type: none;
  font-size: 20px;
  color: white;
  align-items: center;

  img {
    justify-self: center;
    width: 90%;
    max-width: 500px;
    margin: 20px;
    border-radius: 10px;
    object-fit: cover;
  }

  h2 {
    font-size: 25px;
  }
`
