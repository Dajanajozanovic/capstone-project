import styled from 'styled-components/macro'
import { useState } from 'react'
import PropTypes from 'prop-types'
import Bookmarks from './../Bookmarks/Bookmarks'

Card.propTypes = {
  image: PropTypes.node.isRequired,
  title: PropTypes.string,
  text: PropTypes.string,
  address: PropTypes.string,
  openingHours: PropTypes.string,
  entry: PropTypes.string,
}

export default function Card({
  text,
  title,
  image,
  address,
  openingHours,
  entry,
}) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <>
      <CardWrapper>
        <Bookmarks />
        <CardList>
          <img src={image} alt="" />
          <h2>{title}</h2>

          {isExpanded && (
            <div>
              <p>{text}</p>
              <p>{address}</p>
              <p>{entry}</p>
              {openingHours.map(openingHours => (
                <p>{openingHours}</p>
              ))}
            </div>
          )}

          <ButtonExpansion onClick={() => setIsExpanded(!isExpanded)}>
            {isExpanded ? 'Hide details' : 'Show details'}
          </ButtonExpansion>
        </CardList>
      </CardWrapper>
    </>
  )
}

const CardWrapper = styled.section`
  position: relative;
`

const CardList = styled.section`
  h2 {
    font-size: 25px;
  }

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
  max-width: 100%;
  font-family: 'Roboto';
  list-style-type: none;
  font-size: 16px;
  color: white;

  img {
    justify-self: center;
    width: 90%;
    max-width: 600px;
    margin: 10px;
    border-radius: 40px;
    object-fit: cover;
  }
`

const ButtonExpansion = styled.button`
  display: grid;
  padding: 8px;
  border-radius: none;
`
