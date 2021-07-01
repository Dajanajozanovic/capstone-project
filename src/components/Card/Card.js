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
  title,
  address,
  recommendation,
  categorie,
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
        <h2>{title}</h2>

        {isExpanded && (
          <div>
            <p>{recommendation}</p>
            <p>{categorie}</p>
            {address.map(add => (
              <p key={add}>{add}</p>
            ))}
          </div>
        )}

        <ButtonExpansion onClick={() => setIsExpanded(!isExpanded)}>
          {isExpanded ? 'Show less' : 'Show more'}
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
  border-radius: 100px;
  box-shadow: 0 8px 16px #0006;
  display: grid;
  max-width: 100%;
  list-style-type: none;
  color: var(--color-secondary);
  background: var(--color-primary);

  img {
    width: 90%;
    max-width: 600px;
    margin: 10px;
    border-radius: 40px;
    object-fit: cover;
  }
`

const ButtonExpansion = styled.button`
  letter-spacing: 0.1rem;
  border: none;
  display: grid;
  padding: 8px;
  border-radius: 15px;
  width: 80%;
  border-radius: 114px;
  background: var(--color-navigation-background);
  color: var(--color-primary-background-font);
  &:hover {
    background-color: var(--color-navigation-hover);
  }
`
