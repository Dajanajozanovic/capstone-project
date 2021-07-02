import styled from 'styled-components/macro'
import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Bookmarks from './../Bookmarks/Bookmarks'
import { loadFromLocal, saveToLocal } from '../../utils/localStorage'

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
  const { REACT_APP_ID_FSQ, REACT_APP_KEY_FSQ } = process.env
  const [isExpanded, setIsExpanded] = useState(false)
  const [images, setImages] = useState(loadFromLocal('images' + id) ?? [])

  useEffect(() => {
    if (isExpanded && images.length === 0) {
      const url = `https://api.foursquare.com/v2/venues/${id}/photos?client_id=${REACT_APP_ID_FSQ}&client_secret=${REACT_APP_KEY_FSQ}&v=20180323`
      fetch(url)
        .then(res => res.json())
        .then(data => {
          data.response.photos &&
            setImages([
              ...data.response.photos?.items?.map(
                item => item.prefix + 'width300' + item.suffix
              ),
            ])
        })
        .catch(error => console.log(error))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isExpanded])

  useEffect(() => {
    saveToLocal('images' + id, images)
  }, [id, images])

  return (
    <CardWrapper>
      <Bookmarks
        isBookmarked={isFavorite}
        aria-label=""
        onClick={() => handleBookmark(id)}
      />
      <CardList>
        {isExpanded && images?.map(image => <img src={image} alt="" />)}
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
  width: 90%;
  justify-items: center;
  margin: 0 auto;
`

const CardList = styled.section`
  h2 {
    font-size: 25px;
    text-align: center;
  }
  padding: 20px;
  justify-items: center;
  align-items: center;
  border-radius: 40px;
  box-shadow: 0 8px 16px #0006;
  display: grid;

  list-style-type: none;
  color: var(--color-secondary);
  background: var(--color-primary);

  img {
    max-width: 300px;
    width: 100%;
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
