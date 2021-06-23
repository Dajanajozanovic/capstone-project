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
    <Container>
      <Wrapper>
        <Header>My Favorites</Header>
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
              />
            )
          }
        )}
      </Wrapper>
    </Container>
  )
}

const Container = styled.div`
  height: 100vh;
  width: 100vw;
`

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  section:last-child {
    margin-bottom: 20px;
  }
`
