import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components/macro'
import Button from './../../components/Button/Button'
import Header from './../../components/Header/Header'
import Card from './../../components/Card/Card'

FavoritePage.propTypes = {
  history: PropTypes.func.isRequired,
  handleBookmark: PropTypes.func,
  onClick: PropTypes.func,
}

export default function FavoritePage({ favorites, handleBookmark }) {
  let history = useHistory()

  return (
    <>
      <div>
        <BackButton onClick={() => history.goBack()}>&lt; back</BackButton>
      </div>
      <Header>My Favorites</Header>
      <Wrapper>
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
    </>
  )
}

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`
const BackButton = styled(Button)`
  background: grey;
  position: absolute;
  text-align: center;
  left: -1em;
  top: 0em;
  font-family: 'Roboto';
  font-size: 16px;
  width: 100px;
  height: 40px;
  margin: 20px;
`
