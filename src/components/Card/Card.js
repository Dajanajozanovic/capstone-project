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
  id,
  text,
  title,
  image,
  address,
  openingHours,
  entry,
  handleBookmark,
  isFavorite,
}) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <CardWrapper>
      <Bookmarks
        isBookmarked={isFavorite}
        aria-label=""
        onClick={() => handleBookmark(id)}
      />
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
          {isExpanded ? 'HIDE DETAILS' : 'SHOW DETAILS'}
        </ButtonExpansion>
      </CardList>
    </CardWrapper>
  )
}

const CardWrapper = styled.section`
  position: relative;
  padding: 20px;
`

const CardList = styled.section`
  h2 {
    font-size: 25px;
    text-align: center;
  }
  padding: 20px;
  justify-items: center;
  align-items: center;
  border-radius: 8px;
  box-shadow: 0 8px 16px #0006;
  display: grid;
  max-width: 100%;
  list-style-type: none;
  color: dimgrey;
  background-color: rgba(255, 255, 255, 0.7);

  img {
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
  border-radius: 15px;
  width: 80%;
  color: dimgrey;
`
