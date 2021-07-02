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

      {favorites.length > 0 ? (
        <ListWrapper>
          {favorites.map(
            ({ id, image, address, recommendation, categorie, title }) => {
              return (
                <li key={id}>
                  <Card
                    title={title}
                    id={id}
                    image={image}
                    address={address}
                    recommendation={recommendation}
                    categorie={categorie}
                    handleBookmark={handleBookmark}
                    isFavorite={true}
                  />
                </li>
              )
            }
          )}
        </ListWrapper>
      ) : (
        "You don't have any favorite Locations yet."
      )}
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: grid;
  overflow-y: auto;
  color: dimgrey;
  justify-items: center;
`
const ListWrapper = styled.ul`
  list-style-type: none;
  padding: 0;
  font-size: 20px;
  color: grey;
  justify-self: center;
`
