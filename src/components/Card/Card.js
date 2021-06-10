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
  background-image: linear-gradient(
    to top,
    #0c3483 0%,
    #a2b6df 100%,
    #6b8cce 100%,
    #a2b6df 100%
  );
  padding: 20px;
  align-items: center;
  border-radius: 8px;
  box-shadow: 0 8px 16px #0006;
  display: grid;

  width: 90vw;
  max-width: 600px;
  font-family: 'Roboto';
  list-style-type: none;
  font-size: 20px;
  color: white;

  img {
    justify-self: center;
    width: 90%;
    max-width: 500px;
    margin: 10px;
    border-radius: 40px;
    object-fit: cover;
  }

  h2 {
    font-size: 25px;
  }
`
