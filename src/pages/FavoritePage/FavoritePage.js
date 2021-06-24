import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import Header from './../../components/Header/Header'
import Card from './../../components/Card/Card'

FavoritePage.propTypes = {
  history: PropTypes.func.isRequired,
  handleBookmark: PropTypes.func,
  onClick: PropTypes.func,
}

export default function FavoritePage({ favorites, handleBookmark }) {
  return (
    <Wrapper>
      <Header>My Favorites</Header>
      <ListWrapper>
        {favorites.map(
          ({ id, image, title, text, address, openingHours, entry }) => {
            return (
              <Card
                id={id}
                key={id}
                image={image}
                title={title}
                text={text}
                address={address}
                openingHours={openingHours}
                entry={entry}
                handleBookmark={handleBookmark}
                isFavorite={true}
              />
            )
          }
        )}
      </ListWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: grid;
  overflow-y: auto;
`
const ListWrapper = styled.ul`
  padding: 0;
`
